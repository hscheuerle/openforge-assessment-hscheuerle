import { createReducer, on } from '@ngrx/store';
import { usersLoadedSuccess, searchUserSuccess, getUserSuccess } from '../actions/github.actions';

export const initialState = {
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
);

export function githubReducer(state, action) {
    return _githubReducer(state, action);
}
