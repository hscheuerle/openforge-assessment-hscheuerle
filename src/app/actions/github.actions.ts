import { createAction, props } from '@ngrx/store';
import { UserBasic, SeachedUserSuccessPayload, UserDetailed } from '../interfaces/User';


export const loadUsers = createAction('[Github API] Load Users');

export const usersLoadedSuccess = createAction('[Github API] Users Loaded Success',
    props<{ payload: { users: UserBasic[], since: string } }>());

export const searchUser = createAction('[Github API] Search User',
    props<{ props: { input: string } }>());

export const searchUserSuccess = createAction('[Github API] Search User Success',
    props<{ payload: SeachedUserSuccessPayload }>());

export const getUserSuccess = createAction('[Github API] Get User Success',
    props<{ payload: UserDetailed }>());

export const clearUser = createAction('[Github API] Clear User');

export const searchTopics = createAction('[Github API] Search Topics', props<{ value: string }>());
