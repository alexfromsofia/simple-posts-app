import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(
  applyMiddleware(promise),
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
