import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type MenuCategory = 'entrée' | 'principal' | 'dessert';

interface Plat {
  id: number;
  name: string;
  price: number;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './add-plat.html',
  styleUrls: ['./add-plat.scss']
})
export class AddPlat {
  availablePlats: Record<MenuCategory, Plat[]> = {
    entrée: [
      { id: 1, name: 'Salade Verte', price: 7 },
      { id: 2, name: 'Soupe du Jour', price: 6 },
      { id: 3, name: 'Brick Light', price: 8 }
    ],
    principal: [
      { id: 4, name: 'Poulet Grillée', price: 15 },
      { id: 5, name: 'Saumon aux Légumes', price: 18 },
      { id: 6, name: 'Pâtes Tunisiennes', price: 12 }
    ],
    dessert: [
      { id: 7, name: 'Fruit Frais', price: 5 },
      { id: 8, name: 'Yoghurt Maison', price: 4 },
      { id: 9, name: 'Petit Gâteau', price: 6 }
    ]
  };

  categories: MenuCategory[] = ['entrée', 'principal', 'dessert'];
  userMenu: Plat[] = [];

  addToMenu(plat: Plat) {
    this.userMenu.push({...plat});
  }

  removeFromMenu(index: number) {
    this.userMenu.splice(index, 1);
  }

  calculateTotal(): number {
    return this.userMenu.reduce((sum, item) => sum + item.price, 0);
  }

  getCategoryName(category: MenuCategory): string {
    return {
      'entrée': 'Entrées',
      'principal': 'Plats Principaux',
      'dessert': 'Desserts'
    }[category];
  }
}