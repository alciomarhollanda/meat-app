import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

 paymentOptions: RadioOption[] = [
   {label: 'Dinheiro', value:'MON' },
   {label: 'Cartão de Debito', value:'DEB' },
   {label: 'Cartão Refeição 2', value:'REF' }
 ]

  constructor() { }

  ngOnInit() {
  }

}
