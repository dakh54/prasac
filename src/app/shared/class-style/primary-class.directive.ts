import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrimaryClass]'
})
export class PrimaryClassDirective implements OnInit {

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
        // this.rend.setStyle(this.elm, 'color', '#1565c0');
        this.rend.setStyle(this.elm, 'color', '#4caf50');

      }
    }
}
