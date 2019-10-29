import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  value;
  selectedUser$: Observable<object> = this.store.select(state => state.github.selectedUser);

  constructor(
    private store: Store<{ github: { selectedUser: object } }>,
    private route: ActivatedRoute,
  ) { }

  ionViewDidEnter() {
    const search = this.route.snapshot.queryParamMap.get('search');
    console.log(search);
    if (search) { this.value = search; } else { this.value = ''; }
    if (this.value) {
      // change to Get User?
      this.store.dispatch({ type: '[Github API] Search User', props: { input: this.value } });
    }
  }

  ionViewDidLeave() {
    this.store.dispatch({ type: '[Github API] Clear User'});
  }

  searchUser(event) {
    const { value } = event.target;
    if (value !== '') {
      this.store.dispatch({ type: '[Github API] Search User', props: { input: value } });
    } else { // when using ctrl + backspace to clear
      this.store.dispatch({ type: '[Github API] Clear User'});
    }
  }

  clearValue() {
    this.store.dispatch({ type: '[Github API] Clear User'});
  }

}
