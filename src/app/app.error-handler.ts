

import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMenssage: string;

        if (error instanceof HttpErrorResponse) {
            errorMenssage = 'Erro ' + error.status + ' ao acessar a URL ' + error.url + ' - ' + error.statusText + ' - ' + error.error;
        } else {
            errorMenssage = error.toString();
        }

        console.log(errorMenssage)
        return Observable.throw(errorMenssage)
    }
}