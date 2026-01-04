import { Component, HostListener, input } from '@angular/core';

@Component({
  selector: '[room]',
  template: `
    <!-- Room Surface -->
    <svg:rect
      [attr.x]="rbw() / 2 + lift"
      [attr.y]="rbw() / 2 + lift"
      [attr.width]="rw() - rbw()"
      [attr.height]="rh() - rbw()"
      [class]="'room-surface'"
      [style]="'stroke-width:' + rbw() + '; fill: ' + background()"
      transform="rotate(-150) skewX(-30) scale(1, 0.8602)"
    >
      <svg:title>{{ '' + name() + ' is ' + color() }}</svg:title>
    </svg:rect>

    <!-- Room Foundation Left -->
    <svg:rect
      [attr.x]="0"
      [attr.y]="0 + lift"
      [attr.width]="rw()"
      [attr.height]="rd()"
      style="fill: #555"
      [attr.transform]="
        'rotate(-150) skewX(30) scale(1, 0.8602) translate(0,' + -rd() + ')'
      "
    />

    <!-- Room Foundation Right -->
    <svg:rect
      [attr.x]="0"
      [attr.y]="0 - lift"
      [attr.width]="rh() * 0.8602"
      [attr.height]="rd()"
      style="fill: #444"
      transform="skewY(-30)"
    />

    <!-- Room Label -->
    <svg:text
      [attr.x]="rbw() + 1 - lift"
      [attr.y]="-rbw() - 2 - lift"
      [class]="'isometric-text'"
      [style]="'fill: ' + foreground()"
      [attr.transform]="
        'rotate(30) skewX(-30) scale(1, 0.8602) translate(' + -rw() + ', 0)'
      "
    >
      {{ name() }}
    </svg:text>
  `,
  styles: `
    :host {
      text {
        font-weight: bold;
      }
    }
    :host:hover {
      cursor: pointer;
    }
    .room-surface{
      transition: ease fill 0.25s;
      stroke: #000;
      stroke-linecap: butt;
      stroke-linejoin: miter;
    }
    .isometric-text {
      font-size: 5.29167px;
      line-height: 1.25;
      font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
      transition: ease fill 0.125s;
    }
  `,
})
export class RoomComponent {
  lift = 0;

  @HostListener('mouseenter')
  mouseover() {
    this.lift = this.rd();
  }

  @HostListener('mouseleave')
  mouseout() {
    this.lift = 0;
  }

  readonly rw = input(0, { alias: 'rm-width' });

  readonly rh = input(0, { alias: 'rm-height' });

  readonly rd = input(5, { alias: 'rm-depth' });

  readonly name = input('', { alias: 'rm-name' });

  readonly color = input('', { alias: 'rm-color-name' });

  readonly background = input('#000', { alias: 'rm-background' });

  readonly foreground = input('#fff', { alias: 'rm-foreground' });

  readonly rbw = input(1, { alias: 'rm-border-width' });
}
