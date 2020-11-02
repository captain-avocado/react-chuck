import { Joke } from '../../../../common/domain/interfaces/joke.interface';
import { AppThunk } from '../../../../common/domain/store';
import { getRandomJoke } from '../../data-access/api';
import { SetRandomJoke, SET_RANDOM_JOKE } from './types';
import axios from 'axios';

export const fetchActiveJoke = (): AppThunk => async (dispatch) => {
  try {
    const joke = await getRandomJoke();
    dispatch(setRandomJoke(joke));
  } catch (e) {
    if (axios.isCancel(e)) {
      console.log('Request cancelled ');
    }
  }
};

export const setRandomJoke = (joke: Joke): SetRandomJoke => ({
  type: SET_RANDOM_JOKE,
  joke
});
