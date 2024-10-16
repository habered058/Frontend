import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ErrorActions from '../../store/error/error.actions';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private store: Store) {}

  setError(error: string) {
    this.store.dispatch(ErrorActions.setGlobalError({ error }));
  }

  clearError() {
    this.store.dispatch(ErrorActions.clearGlobalError());
  }
}