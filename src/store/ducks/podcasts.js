import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action types & creators
 */
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadfailure: null,

});

export const PodcastsTypes = Types;
export default Creators;

/**
 * Initial state
 */

export const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});
