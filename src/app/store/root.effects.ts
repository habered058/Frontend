import { AuthEffects } from '../features/auth/store/auth.effects';
import { SpaceEffects } from '../features/spaces/store/space.effects';

export const rootEffects = [
  AuthEffects,
  SpaceEffects
  // Añade aquí otros efectos de features
];