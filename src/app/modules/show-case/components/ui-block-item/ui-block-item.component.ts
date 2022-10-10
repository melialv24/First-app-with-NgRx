import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '../../../../core/models/Item.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectListItems } from 'src/app/state/selectors/items.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css'],
})
export class UiBlockItemComponent implements OnInit {
  items$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectListItems);
  }
}
