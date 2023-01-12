import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgChanger]'
})
export class BgChangerDirective {


  @Input() IsCorrection: Boolean = false;
  constructor(private _element: ElementRef, private _render: Renderer2) {

  }
  @HostListener('click') answerChecker() {
    if (this.IsCorrection) {
      this._render.setStyle(this._element.nativeElement, 'background-color', '#bfffbf');
      this._render.setStyle(this._element.nativeElement, 'color', '#3655B3');
      this._render.setStyle(this._element.nativeElement, 'font-weight', 'bold');
      this._render.setStyle(this._element.nativeElement, 'border', '2px solid #3655B3');
    }
    else {
      this._render.setStyle(this._element.nativeElement, 'background-color', '#ffbfbf');
      this._render.setStyle(this._element.nativeElement, 'font-weight', 'bold');

      this._render.setStyle(this._element.nativeElement, 'color', '#ed3d4c');
      this._render.setStyle(this._element.nativeElement, 'border', '2px solid #ff8080');

    }
  }

}
