import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicClass]'
})
export class BasicClassDirective implements OnInit {

  elm: HTMLElement;
  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
    ) {
      if (elRef && elRef.nativeElement) {
        this.elm = elRef.nativeElement;
      }
    }

    ngOnInit(): void {
      if (this.elm) {
        this.rend.setStyle(this.elm, 'color', '#DEDEDE');

      }
    }

}
