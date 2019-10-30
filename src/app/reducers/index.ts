import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { githubReducer, GithubState } from './github.reducers';
import { FeedState, feedReducer } from '../feed/feed.reducers';

export interface State {
  github: GithubState;
  feed: FeedState;
}

export const reducers: ActionReducerMap<State> = {
  github: githubReducer,
  feed: feedReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
