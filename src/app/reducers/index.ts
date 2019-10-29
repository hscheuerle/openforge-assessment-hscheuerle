import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { githubReducer } from './github.reducers';
import { UserDetailed, UserBasic } from '../interfaces/User';

export interface State {
  github: {
    selectedUser: UserDetailed;
    users: UserBasic[];
    since: string;
  };
}

export const reducers: ActionReducerMap<State> = {
  github: githubReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
