import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAccentClass]'
})
export class AccentClassDirective implements OnInit {

  elm: HTMLElement;
  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
    ) {
      if (this.elRef && this.elRef.nativeElement) {
        this.elm = elRef.nativeElement;
      }
    }

    ngOnInit(): void {
      if (this.elm) {
        this.rend.setStyle(this.elm, 'color', '#ff4081');

      }
    }
}
