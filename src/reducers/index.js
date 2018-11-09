import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducers from './posts_reducer';

const rootReducer = combineReducers({
  posts: PostsReducers,
  form: formReducer
});

export default rootReducer;
