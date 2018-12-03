import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundSetter]'
})
export class BackgroundSetterDirective implements OnInit {
  @Input()
  statusBackgroundColor: string;
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
      if (this.statusBackgroundColor === 'primary') {
        // this.rend.setStyle(this.elm, 'background-color', '#1565c0');
        this.rend.setStyle(this.elm, 'background-color', '#4caf50');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'accent') {
        this.rend.setStyle(this.elm, 'background-color', '#ff4081');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'warn') {
        this.rend.setStyle(this.elm, 'background-color', '#f44336');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'white') {
        this.rend.setStyle(this.elm, 'background-color', 'white');
        this.rend.setStyle(this.elm, 'color', '#1565c0');
      } else if (this.statusBackgroundColor === 'basic') {
        this.rend.setStyle(this.elm, 'background-color', '#DEDEDE');
        this.rend.setStyle(this.elm, 'color', '#1565c0');
      } else if (this.statusBackgroundColor === 'success') {
        this.rend.setStyle(this.elm, 'background-color', '#4caf50');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'purple') {
        this.rend.setStyle(this.elm, 'background-color', '#673ab7');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'orange') {
        this.rend.setStyle(this.elm, 'background-color', '#ff9800');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'brown') {
        this.rend.setStyle(this.elm, 'background-color', '#795548');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'blue-grey') {
        this.rend.setStyle(this.elm, 'background-color', '#78909c');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'pink') {
        this.rend.setStyle(this.elm, 'background-color', '#ec407a');
        this.rend.setStyle(this.elm, 'color', 'white');
      } else if (this.statusBackgroundColor === 'light-grey') {
        this.rend.setStyle(this.elm, 'background-color', '#D3D3D3');
        this.rend.setStyle(this.elm, 'color', '#1565c0');
      }

    }
  }
}
