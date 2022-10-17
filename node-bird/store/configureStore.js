// next-redux-wrapper 기본 세팅

import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import reducer from "../reducers";

const configureStore = () => {
  const enhancer = process.env.NODE_ENV === "production" ? compose(applyMiddleware([])) : compose(applyMiddleware([]));

  const store = createStore(reducer, enhancer);
  store.dispatch({
    type: "LOG_IN",
    data: "jungjik",
  });
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === "development" });

export default wrapper;
