import { Joke } from '../../../../common/domain/interfaces/joke.interface';

export const SAVE_JOKE = 'SAVE_JOKE';
export const REMOVE_JOKE = 'REMOVE_JOKE';
export const SET_SAVED_JOKES = 'SET_SAVED_JOKES';
export const REMOVE_ALL_JOKES = 'REMOVE_ALL_JOKES';

export interface SaveJoke {
  type: typeof SAVE_JOKE;
  joke: Joke;
}

export interface SetSavedJokes {
  type: typeof SET_SAVED_JOKES;
  jokes: Joke[];
}

export interface RemoveJoke {
  type: typeof REMOVE_JOKE;
  jokeId: string;
}

export interface RemoveAllJokes {
  type: typeof REMOVE_ALL_JOKES;
}

export type SavedJokesAction =
  | RemoveJoke
  | SaveJoke
  | SetSavedJokes
  | RemoveAllJokes;

export interface SavedJokesState {
  savedJokes: Joke[];
}
