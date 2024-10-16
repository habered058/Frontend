import { AuthState } from '../features/auth/store/auth.reducer';
import { SpaceState } from '../features/spaces/interfaces/space.interface';

export interface AppState {
  auth: AuthState;
  space: SpaceState
  // Añade aquí otras interfaces de estado de features
}