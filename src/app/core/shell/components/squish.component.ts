import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * The squish transition configuration.
 */
type SquishTransition = {
  /**
   * CSS transition for to apply to the 'top' transform.
   * (e.g., 'top 225ms cubic-bezier(0.4, 0, 0.2, 1)').
   */
  top?: string,

  /**
   * CSS transition for to apply to the 'left' transform.
   * (e.g., 'left 225ms cubic-bezier(0.4, 0, 0.2, 1)').
   */
  left?: string,

  /**
   * CSS transition for to apply to the 'height' transform.
   * (e.g., 'height 225ms cubic-bezier(0.4, 0, 0.2, 1)').
   */
  height?: string,

  /**
   * CSS transition for to apply to the 'width' transform.
   * (e.g., 'width 225ms cubic-bezier(0.4, 0, 0.2, 1)').
   */
  width?: string,
}

/**
 * A component that 'squishes' its content to fit within the visible area of its
 * host element, effectively clipping any overflow content.
 */
@Component({
  selector: 'squish, [squish]',
  template: `
    <div #squished class="squished">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;

      .squished {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
      }
    }
  `,
})
export class SquishComponent {
  /**
   * Whether to squish horizontally.
   */
  readonly horizontal = input<boolean>(true);

  /**
   * Whether to squish vertically.
   */
  readonly vertical = input<boolean>(true);

  readonly transitions = input<SquishTransition>({
    top: 'top 0.1s ease',
    left: 'left 225ms cubic-bezier(0.4, 0, 0.2, 1)',
    height: 'height 0.1s linear',
    width: 'width 225ms cubic-bezier(0.4, 0, 0.2, 1)',
  });

  /**
   * The computed transition string based on enabled directions and provided
   * transitions.
   */
  private readonly transition = computed(() => {
    const transitions = this.transitions();
    const parts: string[] = [];

    if (this.vertical()) {
      if (transitions.top) parts.push(transitions.top);
      if (transitions.height) parts.push(transitions.height);
    }

    if (this.horizontal()) {
      if (transitions.left) parts.push(transitions.left);
      if (transitions.width) parts.push(transitions.width);
    }

    return parts.join(', ');
  });

  /**
   * The destroy reference.
   */
  private _destroyRef = inject(DestroyRef);

  /**
   * A reference to the host element.
   */
  private _hostRef = inject<ElementRef<HTMLElement>>(ElementRef);

  /**
   * The target element to be 'squished'.
   */
  private readonly target =
    viewChild.required<ElementRef<HTMLDivElement>>('squished');

  /**
   * Used to listen for ancestor scroll events from the host element.
   */
  private _scrollDispatcher = inject(ScrollDispatcher);

  /**
   * Used to measure the intersecting rectangle between the host and viewport.
   */
  private _viewportRuler = inject(ViewportRuler);

  /**
   * The previous intersecting rectangle.
   */
  private rPrev!: DOMRect;

  constructor() {
    afterNextRender(() => {
      this.rPrev = new DOMRect();

      // Apply transition once
      const target = this.target().nativeElement;
      target.style.transition = this.transition();

      this.update();

      this._scrollDispatcher
        .ancestorScrolled(this._hostRef)
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(() => this.update());

      this._viewportRuler
        .change()
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(() => this.update());
    });
  }

  private update() {
    // Get the host and target elements
    const host = this._hostRef.nativeElement;
    const target = this.target().nativeElement;

    // Get the rects used for calculations
    // getViewportRect() returns an improper DOMRect, so we use viewport's size
    // as an easy workaround.
    const size = this._viewportRuler.getViewportSize();
    const rViewport = new DOMRect(0, 0, size.width, size.height);
    const rHost = host.getBoundingClientRect();
    const rTarget = target.getBoundingClientRect();

    // NOOP if any of the rects are invalid
    if (
      rViewport.width <= 0 ||
      rViewport.height <= 0 ||
      rHost.width <= 0 ||
      rHost.height <= 0 ||
      rTarget.width <= 0 ||
      rTarget.height <= 0
    )
      return;

    // Calculate the intersecting rect between host and viewport
    const rIntersect = this.calcIntersectingRect(rViewport, rHost);

    // NOOP if no change is detected between the current and previous
    // intersecting rects
    if (this.isRectEqual(this.rPrev, rIntersect)) return;

    // Update the previous rect
    this.rPrev = rIntersect;

    // Squish the target!
    this.squish(rHost, rIntersect, target);
  }

  /**
   * Calculates an intersecting rectangle.
   */
  private calcIntersectingRect(r1: DOMRect, r2: DOMRect): DOMRect {
    return new DOMRect(
      Math.max(r1.left, r2.left),
      Math.max(r1.top, r2.top),
      Math.min(r1.right, r2.right),
      Math.min(r1.bottom, r2.bottom)
    );
  }

  /**
   * Checks if two rectangles are equal.
   */
  private isRectEqual(r1: DOMRect, r2: DOMRect): boolean {
    return (
      r1.x === r2.x &&
      r1.y === r2.y &&
      r1.width === r2.width &&
      r1.height === r2.height
    );
  }

  /**
   * Squishes the target element to the size and inverse position of the
   * intersecting rectangle.
   */
  private squish(
    rHost: DOMRect,
    rIntersect: DOMRect,
    target: HTMLDivElement
  ): void {
    if (this.vertical()) {
      target.style.top = `${rHost.top * -1}px`;
      target.style.height = `${rIntersect.height}px`;
    }

    if (this.horizontal()) {
      target.style.left = `${rHost.left * -1}px`;
      target.style.width = `${rIntersect.width}px`;
    }
  }
}
