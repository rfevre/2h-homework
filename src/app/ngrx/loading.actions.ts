import { createAction } from '@ngrx/store';

export const loadingStart = createAction('[Loading Backend] Loading Start');
export const loadingEnd = createAction('[Loading Backend] Loading End');