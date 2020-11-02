import { rootReducer, TRootState } from './root-reducer';
import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isProductionEnvironment } from '../../environment/index';

const middleware = isProductionEnvironment()
  ? applyMiddleware(thunk)
  : composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middleware);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;
