import { combineReducers } from 'redux';
import { savedJokes } from '../../../modules/saved-jokes/domain/store/reducer';
import { jokesDashboard } from '../../../modules/jokes-dashboard/domain/store/reducer';

export const rootReducer = combineReducers({
  savedJokes,
  jokesDashboard
});

export type TRootState = ReturnType<typeof rootReducer>;
