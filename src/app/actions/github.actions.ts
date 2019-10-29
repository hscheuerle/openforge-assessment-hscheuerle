import { createAction, props } from '@ngrx/store';

export interface UserBasic {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface SearchedUser extends UserBasic {
    score: number;
    text_matches: {
        object_url: string;
        object_type: string;
        property: string;
        fragment: string;
    }[];
}

export interface SeachedUserSuccessPayload {
    total_count: number;
    incomplete_results: boolean;
    items: SearchedUser[];
}

export interface UserDetailed extends UserBasic {
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean | null;
    bio: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

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
