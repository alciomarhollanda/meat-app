import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from 'app/order-summary/order-summary.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { LoginComponent } from 'app/security/login/login.component';
import { LoggedinInGuard } from 'app/security/loggedin.guard';


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'order', loadChildren: './order/order.module#OrderModule'
        , canLoad: [LoggedinInGuard]
        , canActivate: [LoggedinInGuard]
    },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent }
]
