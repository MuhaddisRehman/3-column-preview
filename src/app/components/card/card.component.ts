import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',

})
export class CardComponent {
  @Input() iconType!:string;
  @Input() cardTitle!:string;
  @Input() cardDescription!:string;
  @Input() class!:string;
  @Input() buttonClass!:string;
}
