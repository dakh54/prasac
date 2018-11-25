import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoclickClass]'
})
export class NoclickClassDirective implements OnInit {
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
      this.rend.setStyle(this.elm, 'cursor', 'none');
    }
  }
}
