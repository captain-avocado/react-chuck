import { axiosInstance } from '../../../common/data-access/http-client/axios-instance';
import { mapper } from './mapper';
import { v4 as uuid } from 'uuid';
import { cancelTokens } from '../../../common/data-access/http-client/cancel-tokens';
import { Joke } from '../../../common/domain/interfaces/joke.interface';

const routes = {
  RANDOM_JOKE: 'jokes/random'
};

const tokens = {
  GET_RANDOM_JOKE: uuid()
};

export async function getRandomJoke(): Promise<Joke> {
  cancelTokens.cancel(tokens.GET_RANDOM_JOKE);
  try {
    const { data } = await axiosInstance.request({
      method: 'GET',
      url: routes.RANDOM_JOKE,
      cancelToken: cancelTokens.list[tokens.GET_RANDOM_JOKE]?.token || undefined
    });
    return mapper.getRandomJoke.response(data);
  } catch (e) {
    console.log('Error in getRandomJoke');
    console.log(e);
    throw e;
  }
}
