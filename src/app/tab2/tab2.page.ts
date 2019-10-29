import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

class Profile {
  constructor() {

  }
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedUser$: Observable<object> = this.store.select(state => state.github.selectedUser);

  constructor(
    private store: Store<{ github: { selectedUser: object } }>
  ) {}

  searchUser(event) {
    const { value } = event.target;
    this.store.dispatch({ type: '[Github API] Search User', props: { input: value }});
  }

}
