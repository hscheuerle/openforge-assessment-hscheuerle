import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IonSearchbar, IonSpinner } from '@ionic/angular';
import { tap, debounceTime, map } from 'rxjs/operators';


@Component({
    selector: 'feed-page',
    templateUrl: './feed.page.html'
})
export class FeedPage {
    @ViewChild(IonSearchbar, { static: true }) ionSearchbar: IonSearchbar;
    @ViewChild(IonSpinner, { static: true }) ionSpinner;
    sub: Subscription;

    ionViewDidEnter() {
        
        const ionInput$ = this.ionSearchbar.ionInput.pipe(
            // tap(event => console.log(event)),
        );

        const ionInputValue$ = ionInput$.pipe(
            map((event) => event.target as HTMLInputElement),
            map((target) => target.value),
        );

        const ionInputValueDebounceTime$ = ionInputValue$ .pipe(
            debounceTime(300),
            tap(event => console.log())
        );

        this.sub = ionInputValueDebounceTime$.subscribe();
    }

    ionViewDidLeave() {
        this.sub.unsubscribe();
    }

    toggleSpinner() {
        this.ionSpinner.el.style.display = 'none';
    }
}
