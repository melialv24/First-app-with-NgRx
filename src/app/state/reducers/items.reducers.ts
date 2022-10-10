import { createReducer, on } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/Item.interface';
import { ItemsState } from 'src/app/core/models/Item.state';
import { loadedItems, loadItems } from '../actions/items.actions';

export const initialState: ItemsState = {
  loading: false,
  items: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedItems, (state, { item }) => {
    return { ...state, loading: false, items: item };
  })
);
