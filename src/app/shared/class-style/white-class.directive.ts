import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWhiteClass]'
})
export class WhiteClassDirective implements OnInit {

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
        this.rend.setStyle(this.elm, 'color', 'white');

      }
    }
}
