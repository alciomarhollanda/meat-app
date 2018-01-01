import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

import { RadioOption } from 'app/shared/radio/radio-option.model';
import {OrderService} from './order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {


  delivery:number = 8

 paymentOptions: RadioOption[] = [
   {label: 'Dinheiro', value:'MON' },
   {label: 'Cartão de Debito', value:'DEB' },
   {label: 'Cartão Refeição 2', value:'REF' }
 ]

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemValue():number{
    return this.orderService.itemValue()
  }

  carItems():CartItem[]{
    return this.orderService.carItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }
  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order : Order){

    order.orderItems = this.carItems()
    .map((item:CartItem)=> new OrderItem(item.quantity,item.menuItem.id))

    this.orderService.checkOrder(order)
        .subscribe((orderId:string)=>{
          this.router.navigate(['/order-summary'])
          console.log("Compra concluída: "+orderId)
          this.orderService.clear()
        })
    
  }

}
