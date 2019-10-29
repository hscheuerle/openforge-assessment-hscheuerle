import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { githubReducer } from './github.reducers';

// TODO: fix what was: export interface State {}
type State = any;

export const reducers: ActionReducerMap<State> = {
  github: githubReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
