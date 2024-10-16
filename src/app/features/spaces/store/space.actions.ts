import { createAction, props } from '@ngrx/store';
import { Space } from '../../../core/interfaces/space.interface';

// Cargar espacios
export const loadSpaces = createAction('[Space] Load Spaces');
export const loadSpacesSuccess = createAction('[Space] Load Spaces Success', props<{ spaces: Space[] }>());
export const loadSpacesFailure = createAction('[Space] Load Spaces Failure', props<{ error: any }>());

// Agregar espacio
export const addSpace = createAction('[Space] Add Space', props<{ space: Space }>());
export const addSpaceSuccess = createAction('[Space] Add Space Success', props<{ space: Space }>());
export const addSpaceFailure = createAction('[Space] Add Space Failure', props<{ error: any }>());

// Actualizar espacio
export const updateSpace = createAction('[Space] Update Space', props<{ space: Space }>());
export const updateSpaceSuccess = createAction('[Space] Update Space Success', props<{ space: Space }>());
export const updateSpaceFailure = createAction('[Space] Update Space Failure', props<{ error: any }>());

// Eliminar espacio
export const deleteSpace = createAction('[Space] Delete Space', props<{ id: number }>());
export const deleteSpaceSuccess = createAction('[Space] Delete Space Success', props<{ id: number }>());
export const deleteSpaceFailure = createAction('[Space] Delete Space Failure', props<{ error: any }>());