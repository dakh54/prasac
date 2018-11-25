import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorSetter]'
})
export class ColorSetterDirective implements OnInit {

  @Input()
  statusText: string;
  elm: HTMLElement;

  constructor(element: ElementRef, private rend: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }
  ngOnInit(): void {
    // this.rend.setStyle(this.elm, 'background-color', '#f44336');
    // this.rend.setStyle(this.elm, 'color', 'white');

    if (this.elm) {
      if (this.statusText === 'primary') {
        // this.rend.setStyle(this.elm, 'color', '#1565c0');
        this.rend.setStyle(this.elm, 'color', '#4caf50');
      } else if (this.statusText === 'accent') {
        this.rend.setStyle(this.elm, 'color', '#ff4081');
      } else if (this.statusText === 'warn') {
        this.rend.setStyle(this.elm, 'color', '#f44336');
      } else if (this.statusText === 'white') {
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusText === 'basic') {
        this.rend.setStyle(this.elm, 'color', '#DEDEDE');
      } else if (this.statusText === 'success') {
        this.rend.setStyle(this.elm, 'color', '#4caf50');
      } else if (this.statusText === 'purple') {
        this.rend.setStyle(this.elm, 'color', '#673ab7');
      } else if (this.statusText === 'orange') {
        this.rend.setStyle(this.elm, 'color', '#ff9800');
      } else if (this.statusText === 'brown') {
        this.rend.setStyle(this.elm, 'color', '#795548');
      } else if (this.statusText === 'blue-grey') {
        this.rend.setStyle(this.elm, 'color', '#78909c');
      } else if (this.statusText === 'pink') {
        this.rend.setStyle(this.elm, 'color', '#ec407a');
      } else if (this.statusText === 'light-grey') {
        this.rend.setStyle(this.elm, 'color', '#D3D3D3');
      }

    }
  }
}
