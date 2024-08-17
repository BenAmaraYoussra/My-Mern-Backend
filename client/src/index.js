import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { getPosts } from "./actions/post.actions";
import {Router} from  "react-router-dom";
//import { createEpicMiddleware } from 'redux-observable';
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from 'redux-thunk';



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
);


store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
