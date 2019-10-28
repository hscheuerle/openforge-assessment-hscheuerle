import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Feed Page] Load Users');
export const usersLoadedSuccess = createAction('[Github API] Users Loaded Success', props<{ payload: { users: [], since: string } }>());
export const searchUser = createAction('[Github API] Search User', props<{ input: string }>());
