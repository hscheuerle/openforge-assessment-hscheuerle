import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { GithubService } from '../shared/github.service';
import { Store } from '@ngrx/store';

type User = any;

@Injectable()
export class GithubEffects {
    constructor(
        private actions$: Actions,
        private githubService: GithubService,
        private store: Store<{ github: { users: User[], since: string } }>
    ) { }

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType('[Feed Page] Load Users'),
        withLatestFrom(this.store.select(state => state.github.since)),
        switchMap(([action, since]) => this.githubService.requestUsers(since)
            .pipe(
                // change payload type to res
                map(res => ({ type: '[Github API] Users Loaded Success', payload: res })),
                catchError(() => of({ type: '[Github API] Users Loaded Error'})),
            ))
    ));
}
