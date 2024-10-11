import { AuthState } from '../features/auth/store/auth.reducer';

export interface AppState {
  auth: AuthState;
  // Añade aquí otras interfaces de estado de features
}