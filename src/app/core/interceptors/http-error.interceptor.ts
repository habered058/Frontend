import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMsg = `Error: ${error.error.message}`;
        console.log(errorMsg)
      } else {
        // Server-side error
        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        console.log(errorMsg)
      }
      console.error(errorMsg);
      return throwError(() => new Error(errorMsg));
    })
  );
};