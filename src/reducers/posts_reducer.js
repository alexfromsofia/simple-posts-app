import _ from 'lodash';
import { DELETE_POST, FETCH_POST, FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const { data } = action.payload;

      return { ...state, [data.id]: data };
    case DELETE_POST:
      return _.omit(state, action.payload);
      default:
      return state
  }
}