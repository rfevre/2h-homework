import { createReducer, on } from '@ngrx/store';
import { loadingStart, loadingEnd } from './loading.actions';
 
export const initialState = false;
 
const _loadingReducer = createReducer(
  initialState,
  on(loadingStart, (state) => true),
  on(loadingEnd, (state) => false)
);
 
export function loadingReducer(state, action) {
  return _loadingReducer(state, action);
}