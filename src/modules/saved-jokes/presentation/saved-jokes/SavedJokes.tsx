import React, { FC } from 'react';
import { Title } from '../../../../common/presentation/components/title/Title';
import { routePaths } from '../../../../common/presentation/router/enums/route-paths';
import {
  DeleteButton,
  Jokes,
  JokeWrapper,
  TopRow,
  JokeContainer,
  JokeCol
} from './Styles';
import { Link } from 'react-router-dom';
import { Button } from '../../../../common/presentation/components/button/Button';
import { Joke } from '../../../../common/presentation/components/joke/Joke';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedJokes } from '../../domain/store/selectors';
import {
  removeAllJokesAsync,
  removeJokeAsync
} from '../../domain/store/actions';

export const SavedJokes: FC = () => {
  const dispatch = useDispatch();
  const savedJokes = useSelector(getSavedJokes);

  const handleClearAllJokes = (): void => {
    dispatch(removeAllJokesAsync());
  };

  const handleDeleteJoke = (jokeId: string): void => {
    dispatch(removeJokeAsync(jokeId));
  };

  return (
    <>
      <TopRow>
        <Title text="Favourite Jokes"></Title>
        <Link to={routePaths.JOKES_DASHBOARD}>Back to Dashboard</Link>
      </TopRow>
      <Jokes>
        {savedJokes.map((joke, i) => (
          <JokeCol key={i}>
            <JokeWrapper>
              <JokeContainer>
                <Joke text={joke.value}></Joke>
              </JokeContainer>
              <DeleteButton
                onClick={(): void => {
                  handleDeleteJoke(joke.id);
                }}
              >
                Delete
              </DeleteButton>
            </JokeWrapper>
          </JokeCol>
        ))}
      </Jokes>
      {!!savedJokes.length && (
        <Button onClick={handleClearAllJokes}>Clear Favourite Jokes</Button>
      )}
    </>
  );
};
