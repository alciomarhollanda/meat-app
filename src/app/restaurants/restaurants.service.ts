import { Injectable } from '@angular/core';

import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {


    constructor(private http: Http) { }


    restaurants(search?: string): Observable<Restaurant[]> {
        return this.http.get(MEAT_API + '/restaurants', { params: { q: search } })
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantsById(id: string): Observable<Restaurant> {
        console.log('restaurantsById $id: ' + id);
        return this.http.get(MEAT_API + '/restaurants/' + id)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurants(id: string): Observable<any> {
        console.log('reviewsOfRestaurants: ' + id);
        return this.http.get(MEAT_API + '/restaurants/' + id + '/reviews')
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]> {
        console.log('reviewsOfRestaurants: ' + id);
        return this.http.get(MEAT_API + '/restaurants/' + id + '/menu')
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}
