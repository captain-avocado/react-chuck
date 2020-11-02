import { JokeDTO } from '../../../common/data-access/interfaces/jokeDTO';
import { Joke } from '../../../common/domain/interfaces/joke.interface';

export const mapper = {
  getRandomJoke: {
    response(data: JokeDTO): Joke {
      return {
        iconUrl: data.icon_url,
        url: data.url,
        id: data.id,
        value: data.value
      };
    }
  }
};
