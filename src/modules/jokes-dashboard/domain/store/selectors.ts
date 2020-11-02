import { Joke } from '../../../../common/domain/interfaces/joke.interface';
import { TRootState } from '../../../../common/domain/store/root-reducer';

export const getActiveJoke = (state: TRootState): Joke | undefined => {
  return state.jokesDashboard.activeJoke;
};
