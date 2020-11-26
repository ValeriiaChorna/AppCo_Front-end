import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import statisticActions from './statisticActions';

const productReducer = createReducer([], {
  [statisticActions.statisticSuccess]: (state, { payload }) => payload,
  [statisticActions.statisticByIdSuccess]: (state, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [statisticActions.statisticError]: (state, { payload }) => payload,
  [statisticActions.statisticByIdError]: (state, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [statisticActions.statisticRequest]: () => true,
  [statisticActions.statisticSuccess]: () => false,
  [statisticActions.statisticError]: () => false,

  [statisticActions.statisticByIdRequest]: () => true,
  [statisticActions.statisticByIdSuccess]: () => false,
  [statisticActions.statisticByIdError]: () => false,
});

export default combineReducers({
  items: productReducer,
  error: errorReducer,
  loading: loadingReducer,
});
