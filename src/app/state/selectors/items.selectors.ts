import { createSelector } from '@ngrx/store';
import { ItemsState } from 'src/app/core/models/Item.state';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items
);

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
);
