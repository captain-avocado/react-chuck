import { Joke } from '../../../../common/domain/interfaces/joke.interface';
import { AppThunk } from '../../../../common/domain/store';
import {
  fetchSavedJokes,
  addFavouriteJoke,
  removeFavouriteJoke,
  removeAllFavouriteJokes
} from '../../data-access/api';
import {
  RemoveAllJokes,
  RemoveJoke,
  REMOVE_ALL_JOKES,
  REMOVE_JOKE,
  SaveJoke,
  SAVE_JOKE,
  SetSavedJokes,
  SET_SAVED_JOKES
} from './types';

export const fetchSavedJokesAsync = (): AppThunk => async (dispatch) => {
  const savedJokes = await fetchSavedJokes();
  dispatch(setSavedJokes(savedJokes));
};

export const setSavedJokes = (jokes: Joke[]): SetSavedJokes => ({
  type: SET_SAVED_JOKES,
  jokes
});

export const saveJokeAsync = (joke: Joke): AppThunk => async (dispatch) => {
  await addFavouriteJoke(joke);
  dispatch(saveJoke(joke));
};

export const removeJokeAsync = (jokeId: string): AppThunk => async (
  dispatch
) => {
  await removeFavouriteJoke(jokeId);
  dispatch(removeJoke(jokeId));
};

export const removeAllJokesAsync = (): AppThunk => async (dispatch) => {
  await removeAllFavouriteJokes();
  dispatch(removeAllJokes());
};

export const removeAllJokes = (): RemoveAllJokes => ({
  type: REMOVE_ALL_JOKES
});

export const saveJoke = (joke: Joke): SaveJoke => ({
  type: SAVE_JOKE,
  joke
});

export const removeJoke = (jokeId: string): RemoveJoke => ({
  type: REMOVE_JOKE,
  jokeId
});
