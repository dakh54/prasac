import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appPageTitleClass]'
})
export class PageTitleClassDirective implements OnInit {

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
        this.rend.setStyle(this.elm, 'position', 'fixed');
        this.rend.setStyle(this.elm, 'top', '50px');
        this.rend.setStyle(this.elm, 'right', '0');
        this.rend.setStyle(this.elm, 'left', '0');
        this.rend.setStyle(this.elm, 'padding-top', '20px');
        this.rend.setStyle(this.elm, 'z-index', '998');
        this.rend.setStyle(this.elm, 'background-color', 'white');
        // this.rend.setStyle(this.elm, 'display', 'flex');
        // this.rend.setStyle(this.elm, 'flex-wrap', 'wrap');
        // this.rend.setStyle(this.elm, 'justify-content', 'space-between');
      }
    }

}
