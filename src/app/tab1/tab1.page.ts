import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

type User = any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  users$: Observable<User[]> = this.store.select(state => state.github.users);

  constructor(
    private store: Store<{ github: { users: User[] } }>
    ) {
  }

  loadData(event) {
    console.log(event);
  }

  loadMoreUsers() {
    this.store.dispatch({ type: '[Feed Page] Load Users'});
  }

  ionViewDidEnter() {
  }
}
