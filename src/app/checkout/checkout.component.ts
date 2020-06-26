import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../provider/menu-items.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  public selectedCounter = "Picks For You";


  constructor(public menuItemService: MenuItemsService, private router: Router, public toastr: ToastrManager) {

  }
  filterMenuForCart(counter) {

    return this.menuItemService.menuItems.filter(x => x.onCart > 0);
  }

  addToCart(itemId: number) {
    this.menuItemService.addToCart(this.menuItemService.menuItems.find(c => c.id == itemId))

  }
  removeFromCart(itemId: number) {
    this.menuItemService.removeFromCart(this.menuItemService.menuItems.find(c => c.id == itemId))
  }
  checkout() {
    this.menuItemService.checkout()
    this.showSuccess()
    this.router.navigate(['']);
  }
  showSuccess() {
    this.toastr.successToastr('Your food is being prepared', 'Order Placed', { position: "bottom-center", animate: "slideFromBottom" });
  }


}

