import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appOrangeClass]'
})
export class OrangeClassDirective implements OnInit {

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
        this.rend.setStyle(this.elm, 'color', '#ff9800');

      }
    }

}
