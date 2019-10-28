import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user;

  constructor(
    private store: Store<{ github: { selectedUser: string } }>
  ) {}

  searchUser(event) {
    const { value } = event.target;
    this.store.dispatch({ type: '[Github API] Search User', props: { input: value }});
  }

}
