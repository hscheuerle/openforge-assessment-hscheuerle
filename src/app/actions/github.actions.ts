import { createAction, props } from '@ngrx/store';
import { HttpResponse } from '@angular/common/http';

export const loadUsers = createAction('[Feed Page] Load Users');
export const usersLoadedSuccess = createAction('[Github API] Users Loaded Success', props<{ payload: { users: [], since: string } }>());
