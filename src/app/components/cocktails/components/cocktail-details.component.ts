import { Component } from '@angular/core';
import { Cocktail } from 'app/shared/interfaces';

@Component({
  selector: 'app-cocktail-details',
  imports: [],
  template: ` 
    <img class="mb-20"[src]="cocktail.imageUrl"/>
    <h3 class="mb-20">{{ cocktail.name }}</h3>
    <p class="mb-20">{{ cocktail.description }}</p>
    <div>
      <button class="btn btn-primary">Ajouter cocktail</button>
    </div>
    
  `,
  styles: `
    :host{
      display:flex;
      flex-direction:column;

    }
  `
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    imageUrl: `https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg`,
    name: `Mojito`,
    description:
      `Le Mojito est un cocktail cubain rafraîchissant à base de rhum, de menthe fraîche, de citron vert, de sucre et d’eau pétillante.
     Parfait pour l’été, il allie douceur, acidité et fraîcheur avec un subtil goût de menthe.
     Le Mojito est l’un des cocktails les plus populaires au monde grâce à son équilibre parfait et sa légèreté.
     `,
  }

}
