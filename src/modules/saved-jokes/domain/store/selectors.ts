import { Joke } from '../../../../common/domain/interfaces/joke.interface';
import { TRootState } from '../../../../common/domain/store/root-reducer';

export const getSavedJokes = (state: TRootState): Joke[] => {
  return state.savedJokes.savedJokes;
};
