import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { IonSearchbar } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'feed-page',
    templateUrl: './feed.page.html'
})
export class FeedPage {
    @ViewChild(IonSearchbar, { static: true }) ionSearchbar: IonSearchbar;
    async ionViewDidEnter() {

        fromEvent(await this.ionSearchbar.getInputElement(), 'ionChange').pipe(
            tap(event => console.log(event)),
        );

        this.ionSearchbar.ionChange.asObservable().pipe(
            tap(event => console.log(event)),
        );
    }

    ionViewDidLeave() {

    }
}
