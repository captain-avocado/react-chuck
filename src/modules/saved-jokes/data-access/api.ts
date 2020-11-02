import { Joke } from '../../../common/domain/interfaces/joke.interface';

export const lsItemName = 'jokes';

function updateSavedJokes(jokes: Joke[]): void {
  localStorage.setItem(lsItemName, JSON.stringify(jokes));
}

export function fetchSavedJokes(): Joke[] {
  return JSON.parse(localStorage.getItem(lsItemName) || '[]');
}

export function addFavouriteJoke(joke: Joke): void {
  const initialJokes = fetchSavedJokes();
  const jokes =
    initialJokes.length < 10
      ? [...initialJokes, joke]
      : [...initialJokes.slice(1), joke];
  updateSavedJokes(jokes);
}

export function removeFavouriteJoke(jokeId: string): void {
  const jokes = fetchSavedJokes().filter((joke) => joke.id !== jokeId);
  updateSavedJokes(jokes);
}

export function removeAllFavouriteJokes(): void {
  updateSavedJokes([]);
}
