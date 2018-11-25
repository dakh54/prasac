import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appClickableClass]'
})
export class ClickableClassDirective implements OnInit {
  elm: HTMLElement;

  constructor(
    element: ElementRef,
    private rend: Renderer2
  ) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }

  ngOnInit(): void {
    if (this.elm) {
      this.rend.setStyle(this.elm, 'cursor', 'pointer');
    }
  }

}
