import { createReducer, on } from '@ngrx/store';
import { feedInput } from './feed.actions';

export interface FeedState {
    value: string;
}

const initialState: FeedState = {
    value: '',
};

const getFeedReducer = createReducer(initialState,
    on(feedInput, (state) => state),
);

export function feedReducer(state, action) {
    return getFeedReducer(state, action);
}
