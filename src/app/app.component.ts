import { Component } from '@angular/core';
import { Card } from 'src/types/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = '3-column-preview';
  cards:Card[]=[
    {
      title:'sedans',
      icon:'./assets/svgs/card-svgs-sprite.svg#sedan-icon',
      description:'Choose a sedan for its affordability andexcellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      class:'bg-bright-orange round-op',
      buttonClass:'text-bright-orange '
    },
    {
      title:'suvs',
      icon:'./assets/svgs/card-svgs-sprite.svg#suv-icon',
      description:'Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures',
      class:'bg-dark-cyan',
      buttonClass:'text-dark-cyan'
    },
    {
      title:'luxury',
      icon:'./assets/svgs/card-svgs-sprite.svg#luxury-icon',
      description:'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of luxury rental and arrive in style.',
      class:'bg-very-dark-cyan roun-bottom',
      buttonClass:'text-very-dark-cyan '
    }
  ]
}
