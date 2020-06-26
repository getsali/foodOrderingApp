import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  public menuItems = [{
    id: 0,
    name: 'Nizami Biriyani',
    price: 180,
    counter: 'Khan Biriyani',
    rating: 3.5,
    waitingTime: '10 min',
    isVeg: 'false',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/p8cyiiafwb1xjuogmofg'
  },
  {
    id: 1,
    name: 'Green Peas ',
    price: 120,
    rating: 5,
    counter: 'Dosa Express',
    isVeg: 'true',
    waitingTime: '5 min',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/a71f7nolngbiu4owwsb3'
  }, {
    id: 2,
    name: 'Chicken Kebab',
    price: 80,
    counter: 'Khan Biriyani',
    rating: 3.5,
    waitingTime: '10 min',
    isVeg: 'false',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tcnva2iu3bqak0fezifu'
  }, {
    id: 3,
    name: 'chicken Tikka',
    price: 180,
    counter: 'Khan Biriyani',
    rating: 3.5,
    waitingTime: '10 min',
    isVeg: 'false',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dwsqocqpodibgpqzguhp'
  }, {
    id: 4,
    name: 'Masala Dosa',
    price: 40,
    rating: 5,
    counter: 'Dosa Express',
    isVeg: 'true',
    waitingTime: '5 min',
    onCart: 0,//https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/q7rufvhqwmovyogpdxhd
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nr39m6vnu6kdbfjj2lrv'
  },
  {
    id: 5,
    name: 'Rajasthani Thali',
    price: 120,
    rating: 4.5,
    counter: 'Sri Puri',
    waitingTime: '5 min',
    isVeg: 'true',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym'
  }, {
    id: 6,
    name: 'Puri and Baji',
    price: 40,
    rating: 5,
    counter: 'Dosa Express',
    isVeg: 'true',
    waitingTime: '10 min',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/q7rufvhqwmovyogpdxhd'
  },
  {
    id: 7,
    name: 'Burger',
    price: 40,
    rating: 4.5,
    counter: 'Food Fab',
    waitingTime: 'Ready',
    isVeg: 'true',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/pgw04iwv1rzir5dpcbi4'
  },
  {
    id: 8,
    name: 'South Indian Rice',
    price: 70,
    rating: 4.5,
    counter: 'Sri Puri',
    waitingTime: '15 min',
    isVeg: 'true',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/doexkez4y7ap8cznapmd'
  },
  {
    id: 9,
    name: 'Pizza',
    price: 40,
    rating: 4.5,
    counter: 'Food Fab',
    waitingTime: '15 min',
    isVeg: 'true',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zyhh96eaxg9zwaafycdo'
  },
  {
    id: 10,
    name: 'Sandwich',
    price: 40,
    rating: 4.5,
    counter: 'Food Fab',
    waitingTime: '10 min',
    isVeg: 'true',
    onCart: 0,
    thumb: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ckrlhr2j1b4qoilgyu1b'
  }
  ];
  itemsCount: number = 0;
  totalPrice: number = 0;
  constructor() { }
  public addToCart(item: any) {
    for (var i = 0; i < this.menuItems.length; i++) {
      if (item.id === this.menuItems[i].id) {
        this.menuItems[i].onCart = this.menuItems[i].onCart + 1;
        this.totalPrice += this.menuItems[i].price;
        break;
      }
    }

    this.itemsCount++
  }

  removeFromCart(item: any) {

    for (var i = 0; i < this.menuItems.length; i++) {
      if (item.id === this.menuItems[i].id) {
        if (this.menuItems[i].onCart != 0) {
          this.itemsCount--
          this.menuItems[i].onCart = this.menuItems[i].onCart - 1;
          this.totalPrice -= this.menuItems[i].price;
          break;
        }
      }

    }


  }
  checkout() {
    this.itemsCount = 0;
    this.totalPrice = 0;
    for (var i = 0; i < this.menuItems.length; i++) {
      this.menuItems[i].onCart = 0;
    }
  }
}

