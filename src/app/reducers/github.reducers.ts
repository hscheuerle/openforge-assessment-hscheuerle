import { createReducer, on } from '@ngrx/store';
import { usersLoadedSuccess } from '../actions/github.actions';

export const initialState = {
    selectedUser: '',
    users: [],
    since: '0',
};

// tslint:disable-next-line: variable-name
const _githubReducer = createReducer(initialState,
    on(usersLoadedSuccess, (state, { payload }) => {
        const { since, users } = payload;
        return { ...state, users: [...state.users, ...users], since };
    }),
);

export function githubReducer(state, action) {
    return _githubReducer(state, action);
}
