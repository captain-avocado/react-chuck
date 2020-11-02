import { Joke } from '../../../../common/domain/interfaces/joke.interface';

export const SET_RANDOM_JOKE = 'SET_RANDOM_JOKE';

export interface SetRandomJoke {
  type: typeof SET_RANDOM_JOKE;
  joke: Joke;
}

export type JokesDashboardAction = SetRandomJoke;

export interface JokesDashboardState {
  activeJoke: Joke | undefined;
}
