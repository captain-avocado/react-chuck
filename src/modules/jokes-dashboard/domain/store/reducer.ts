import {
  JokesDashboardAction,
  JokesDashboardState,
  SET_RANDOM_JOKE
} from './types';

export const initialState: JokesDashboardState = {
  activeJoke: undefined
};

export function jokesDashboard(
  state: JokesDashboardState = initialState,
  action: JokesDashboardAction
): JokesDashboardState {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return {
        activeJoke: action.joke
      };

    default:
      return state;
  }
}
