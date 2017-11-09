import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private RestaurantsService: RestaurantsService) { }

  ngOnInit() {
     this.RestaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}
