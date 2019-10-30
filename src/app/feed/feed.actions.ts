import { createAction, props } from '@ngrx/store';

export const feedInput = createAction('[Feed Page] Input Value', props<{ value: string }>());
