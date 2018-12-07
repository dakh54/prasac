import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCircle]'
})
export class CircleDirective {


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
        this.rend.setStyle(this.elm, 'width', '36px');
        this.rend.setStyle(this.elm, 'height', '36px');
        this.rend.setStyle(this.elm, 'border-radius', '36px');
      }
    }

}
