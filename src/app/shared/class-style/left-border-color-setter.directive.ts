import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appLeftBorderColorSetter]'
})
export class LeftBorderColorSetterDirective implements OnInit {

  @Input() statusText: string;
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
      if (this.statusText === 'primary') {
        this.rend.setStyle(this.elm, 'border-left', '3px solid #1565c0');
      } else  if (this.statusText === 'accent') {
        this.rend.setStyle(this.elm, 'border-left', '3px solid #ff4081');
      } else if (this.statusText === 'warn') {
        this.rend.setStyle(this.elm, 'border-left', '3px solid #f44336');
      } else if (this.statusText === 'basic') {
        this.rend.setStyle(this.elm, 'border-left', '3px solid #e0e0e0');
      } else if (this.statusText === 'success') {
        this.rend.setStyle(this.elm, 'border-left', '3px solid #e3f2fd');
      }
    }

  }
}
