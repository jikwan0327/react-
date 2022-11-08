// next-redux-wrapper 기본 세팅

import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
  const sagaMilldeWare = createSagaMiddleware();
  const middlewares = [sagaMilldeWare, loggerMiddleWare];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares)); //배포를 하는 경우 devtool을 연결하지 않고 개발할때는 devtool을 연결

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMilldeWare.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === "development" });

export default wrapper;
