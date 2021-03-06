import { Injectable } from '@angular/core';

import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {


    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if (search) {
            params = new HttpParams().set('q', search);
        }
        return this.http.get<Restaurant[]>(MEAT_API + '/restaurants', { params: params });
    }

    restaurantsById(id: string): Observable<Restaurant> {
        console.log('restaurantsById $id: ' + id);
        return this.http.get<Restaurant>(MEAT_API + '/restaurants/' + id);
    }

    reviewsOfRestaurants(id: string): Observable<any> {
        console.log('reviewsOfRestaurants: ' + id);
        return this.http.get(MEAT_API + '/restaurants/' + id + '/reviews');
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]> {
        console.log('reviewsOfRestaurants: ' + id);
        return this.http.get<MenuItem[]>(MEAT_API + '/restaurants/' + id + '/menu');
    }
}
