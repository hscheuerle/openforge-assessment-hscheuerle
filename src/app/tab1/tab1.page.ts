import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserBasic } from '../interfaces/User';
import { State } from '../reducers';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  users: UserBasic[];
  eventRef;
  subscription: Subscription;

  constructor(
    private store: Store<State>
    ) { }

  ngOnInit() {
    // TODO: check if needs to be in did enter and did leave, as routing does not always destroy components in ionic
    this.subscription = this.store.select(state => state.github.users).subscribe(users => {
      this.users = users;
      if (this.eventRef) {
        this.eventRef.target.complete();
        this.eventRef = undefined;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ionViewDidEnter() {
    if (this.users.length === 0) {
      this.store.dispatch({ type: '[Github API] Load Users'});
    }
  }

  loadData(event) {
    this.eventRef = event;
    this.store.dispatch({ type: '[Github API] Load Users'});
  }

  loadMoreUsers() {
    this.store.dispatch({ type: '[Github API] Load Users'});
  }
}
