import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class="header">
      {{ header }}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  `,
})
export class MessageComponent implements OnInit {
  @Input() header: string;
  @HostBinding('attr.style') cssClass = 'border: 1px solid black';
  ngOnInit(): void {
    console.log('header', this.header);
  }
}
