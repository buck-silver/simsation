import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'page, [page]',
})
export class PageDirective {
  private ref: ElementRef<HTMLElement> = inject(ElementRef);
  private ele = this.ref.nativeElement;
  ngOnInit() {
    this.ele.setAttribute('role', 'main');
    this.ele.classList.add('page');
  }
}
