import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap, tap, exhaustMap } from 'rxjs/operators';
import { GithubService } from '../shared/github.service';
import { Store } from '@ngrx/store';
import { searchUser, searchUserSuccess } from '../actions/github.actions';

type User = any;

@Injectable()
export class GithubEffects {
    constructor(
        private actions$: Actions,
        private githubService: GithubService,
        private store: Store<{ github: { users: User[], since: string, selectedUser: string } }>
    ) { }

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType('[Github API] Load Users'),
        withLatestFrom(this.store.select(state => state.github.since)),
        exhaustMap(([action, since]) => this.githubService.requestUsers(since)
            .pipe(
                map(res => ({ type: '[Github API] Users Loaded Success', payload: res })),
                catchError(() => of({ type: '[Github API] Users Loaded Error'})),
            ))
    ));

    // only map success when res contains values
    searchUser$ = createEffect(() => this.actions$.pipe(
        ofType(searchUser),
        switchMap(action => this.githubService.searchUser(action.props.input).pipe(
            map(res => ({ type: '[Github API] Search User Success', payload: res})),
            catchError(() => of({ type: '[Github API] Search User Error'})),
        )
    )));

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(searchUserSuccess),
        // need to handle items better!
        switchMap(action => this.githubService.getUser(action.payload.items[0].login).pipe(
            map(res => ({ type: '[Github API] Get User Success', payload: res})),
            catchError(() => of({ type: '[Github API] Get User Error'})),
        )
    )));
}
