import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { IonSearchbar } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'feed-page',
    templateUrl: './feed.page.html'
})
export class FeedPage {
    @ViewChild(IonSearchbar, { static: false }) ionSearchbar: IonSearchbar;
    ionViewDidEnter() {
        const element = this.ionSearchbar.ionChange.pipe(
            tap(event => console.log('event')),
        ).subscribe();
    }

    ionViewDidLeave() {

    }
}
