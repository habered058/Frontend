import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../../shared/services/toast.service';
import { inject } from '@angular/core';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService); 
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
      toastService.showToast(errorMsg, 5000);
      return throwError(() => new Error(errorMsg));
    })
  );
};