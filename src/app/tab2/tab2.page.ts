import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  value;
  selectedUser$: Observable<object> = this.store.select(state => state.github.selectedUser);
  browser: InAppBrowserObject;

  constructor(
    private store: Store<{ github: { selectedUser: object } }>,
    private route: ActivatedRoute,
    private iab: InAppBrowser,
  ) { }

  ionViewDidEnter() {
    const search = this.route.snapshot.queryParamMap.get('search');
    if (search) { this.value = search; } else { this.value = ''; }
  }

  ionViewDidLeave() {
    this.store.dispatch({ type: '[Github API] Clear User'});
    if (this.browser) {
      this.browser.close();
    }
  }

  searchUser(event) {
    const { value } = event.target;
    if (value !== '') {
      console.log('searchUser dispatches search');
      this.store.dispatch({ type: '[Github API] Search User', props: { input: value } });
    } else { // when using backspace | ctrl + backspace to clear
      this.store.dispatch({ type: '[Github API] Clear User'});
    }
  }

  clearValue() {
    this.store.dispatch({ type: '[Github API] Clear User'});
  }

  // TODO: search for how to choose target based on system
  openInAppBrowser(event, blog) {
    event.preventDefault();
    this.browser = this.iab.create(blog, '_blank');
  }

}
