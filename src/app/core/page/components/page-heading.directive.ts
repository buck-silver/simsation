import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[pageHeading]',
})
export class PageHeadingDirective {
  private el = inject<ElementRef<HTMLHeadingElement>>(ElementRef);

  constructor() {
    this.el.nativeElement.style.textAlign = 'center';
    this.el.nativeElement.style.fontWeight = '700';
    this.el.nativeElement.style.padding = '0';
    this.el.nativeElement.style.margin = '0';
  }
}
