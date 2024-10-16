import { Space } from "../../../core/interfaces/space.interface";

export interface SpaceState {
    spaces: Space[];
    loading: boolean;
    error: any;
  }
  
  export const initialState: SpaceState = {
    spaces: [],
    loading: false,
    error: null,
  };