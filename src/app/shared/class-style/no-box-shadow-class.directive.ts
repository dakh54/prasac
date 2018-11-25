import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoBoxShadow]'
})
export class NoBoxShadowDirective implements OnInit {

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
      this.rend.setStyle(this.elm, 'box-shadow', 'none');
   }
  }
}
