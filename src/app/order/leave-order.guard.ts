import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { OrderComponent } from './order.component'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponet: OrderComponent, activatedRoute: ActivatedRouteSnapshot
        , routeState: RouterStateSnapshot): boolean {

        if (!orderComponet.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?');
        } else {
            return true;
        }


    }
}
