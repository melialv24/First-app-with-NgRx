import { ActionReducerMap } from '@ngrx/store';
import { ItemsState } from '../core/models/Item.state';
import { itemsReducer } from './reducers/items.reducers';

export interface AppState {
  items: ItemsState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
