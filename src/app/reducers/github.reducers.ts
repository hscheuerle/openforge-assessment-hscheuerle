import { createReducer, on } from '@ngrx/store';
import { usersLoadedSuccess, searchUserSuccess, getUserSuccess, clearUser, UserBasic } from '../actions/github.actions';

interface AppState {
    selectedUser: object;
    users: UserBasic[];
    since: string;
}
export const initialState: AppState = {
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
    // on(searchUserSuccess, (state, { payload }) => {
    //     // TODO: error check index
    //     return { ...state, selectedUser: payload.items[0]};
    // }),
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
