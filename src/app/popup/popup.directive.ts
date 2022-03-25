import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup',
})
export class PopupDirective {
  @Input() message: string;
  constructor(_elementRef: ElementRef) {
    console.log('Directive bound-->', _elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}
