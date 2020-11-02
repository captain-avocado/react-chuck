import {
  SET_SAVED_JOKES,
  REMOVE_JOKE,
  SavedJokesAction,
  SavedJokesState,
  SAVE_JOKE,
  REMOVE_ALL_JOKES
} from './types';

const initialState: SavedJokesState = {
  savedJokes: []
};

export function savedJokes(
  state: SavedJokesState = initialState,
  action: SavedJokesAction
): SavedJokesState {
  switch (action.type) {
    case SET_SAVED_JOKES:
      return {
        savedJokes: action.jokes
      };
    case SAVE_JOKE:
      return {
        savedJokes:
          savedJokes.length < 10
            ? [...state.savedJokes, action.joke]
            : [...state.savedJokes.slice(1), action.joke]
      };
    case REMOVE_JOKE:
      return {
        savedJokes: state.savedJokes.filter((joke) => joke.id !== action.jokeId)
      };

    case REMOVE_ALL_JOKES:
      return {
        savedJokes: []
      };
    default:
      return state;
  }
}
