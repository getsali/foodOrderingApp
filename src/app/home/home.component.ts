import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../provider/menu-items.service';
import { Router } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
 public term:string;
  public selectedCounter = "Picks For You";
  ;


  constructor(public menuItemService: MenuItemsService, private router: Router) {

  }
  filterMenuForCounters(counter) {
    if (counter == "Picks For You")
      return this.menuItemService.menuItems;
    return this.menuItemService.menuItems.filter(x => x.counter == counter);
  }

  addToCart(itemId: number) {
    this.menuItemService.addToCart(this.menuItemService.menuItems.find(c => c.id == itemId))

  }
  removeFromCart(itemId: number) {
    this.menuItemService.removeFromCart(this.menuItemService.menuItems.find(c => c.id == itemId))
  }
  gotoCheckoutPage() {
    this.router.navigate(['checkout']);
  }

}
