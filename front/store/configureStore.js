import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
const loggerMidleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    next(action);
    return;
  }; //action 실행전 콘솔로그를 찍어주는 미들웨어
const configureStore = () => {
  // const store = createStore(rootReducer, composeWithDevTools());
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMidleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares)) //배포용
      : composeWithDevTools(applyMiddleware(...middlewares)); //개발용
  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});
export default wrapper;
