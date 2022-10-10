import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '../../../../core/models/Item.interface';
import { ShowCaseService } from '../../../../modules/show-case/services/show-case.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLoading } from 'src/app/state/selectors/items.selectors';
import { loadedItems, loadItems } from 'src/app/state/actions/items.actions';
@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadItems());
  }
}
