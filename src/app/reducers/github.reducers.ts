import { createReducer, on } from '@ngrx/store';
import { usersLoadedSuccess, searchUserSuccess, getUserSuccess, clearUser } from '../actions/github.actions';
import { UserBasic, UserDetailed } from '../interfaces/User';

export interface GithubState {
    selectedUser: UserDetailed;
    users: UserBasic[];
    since: string;
}
export const initialState: GithubState = {
    selectedUser: undefined,
    users: [],
    since: '0',
};

// tslint:disable-next-line: variable-name
const _githubReducer = createReducer(initialState,
    on(usersLoadedSuccess, (state, { payload }) => {
        const { since, users } = payload;
        return { ...state, users: [...state.users, ...users], since };
    }),
    on(getUserSuccess, (state, { payload }) => {
        return { ...state, selectedUser: payload };
    }),
    on(clearUser, (state) => {
        return { ...state, selectedUser: undefined };
    })
);

export function githubReducer(state, action) {
    return _githubReducer(state, action);
}
