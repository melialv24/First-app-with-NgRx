import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/Item.interface';

// Una accion necesariamente necesita un type pero no necesariamente necista props
export const loadItems = createAction('[Item List] Load Items');

export const loadedItems = createAction(
  '[Item List] Loaded success',
  props<{ item: ItemModel[] }>()
);
