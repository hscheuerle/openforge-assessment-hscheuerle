import { createAction, props } from '@ngrx/store';

export interface UserPayload {
    total_count: number;
    incomplete_results: boolean;
    items: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravitar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        reeceived_events_url: string;
        type: string; // User
        site_admin: boolean;
        score: number;
        text_matches: {
            object_url: string;
            object_type: string;
            property: string;
            fragment: string;
        }[]
    }[];
}

export const loadUsers = createAction('[Github API] Load Users');
export const usersLoadedSuccess = createAction('[Github API] Users Loaded Success', props<{ payload: { users: [], since: string } }>());
export const searchUser = createAction('[Github API] Search User', props<{ props: { input: string }}>());
export const searchUserSuccess = createAction('[Github API] Search User Success', props<{ payload: UserPayload }>());
export const getUserSuccess = createAction('[Github API] Get User Success', props<{ payload: any }>());
export const clearUser = createAction('[Github API] Clear User');
