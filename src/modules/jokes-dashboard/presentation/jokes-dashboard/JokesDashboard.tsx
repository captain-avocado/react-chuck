import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Title } from '../../../../common/presentation/components/title/Title';
import { fetchActiveJoke } from '../../domain/store/actions';
import { getActiveJoke } from '../../domain/store/selectors';
import {
  removeJokeAsync,
  saveJokeAsync
} from '../../../saved-jokes/domain/store/actions';
import { getSavedJokes } from '../../../saved-jokes/domain/store/selectors';
import { Joke } from '../../../../common/presentation/components/joke/Joke';
import { TopRow, Buttons, ButtonWrapper, JokeWrapper } from './Styles';
import { routePaths } from '../../../../common/presentation/router/enums/route-paths';
import { jokesFetchingTimeout } from './constants/jokes-fetching-timeout';

let intervalId: number | undefined = undefined;

export const JokesDashboard: FC = () => {
  const dispatch = useDispatch();
  const activeJoke = useSelector(getActiveJoke);
  const savedJokes = useSelector(getSavedJokes);
  const [isJokeFetching, setIsJokeFetching] = useState(false);
  const [jokesFetchingInterval, setJokesFetchingInterval] = useState<
    undefined | number
  >(undefined);

  const isJokeAddedInFavourite = useMemo((): boolean => {
    return (
      !!activeJoke &&
      !!savedJokes.find((joke) => joke.value === activeJoke.value)
    );
  }, [savedJokes, activeJoke]);

  const handleGetJoke = async (): Promise<void> => {
    setIsJokeFetching(true);
    dispatch(fetchActiveJoke());
    setIsJokeFetching(false);
  };

  const handleStartGettingJokes = async (): Promise<void> => {
    const interval = setInterval(() => {
      handleGetJoke();
    }, jokesFetchingTimeout);
    intervalId = interval;
    setJokesFetchingInterval(interval);
  };

  const handleStopGettingJokes = async (): Promise<void> => {
    clearInterval(intervalId);
    setJokesFetchingInterval(undefined);
  };

  const handleAddToFavourite = async (): Promise<void> => {
    if (!activeJoke) {
      return;
    }
    dispatch(saveJokeAsync(activeJoke));
  };

  const handleRemoveFromFavourite = async (): Promise<void> => {
    if (!activeJoke) {
      return;
    }
    dispatch(removeJokeAsync(activeJoke.id));
  };

  useEffect(() => {
    return () => {
      handleStopGettingJokes();
    };
  }, []);

  return (
    <>
      <TopRow>
        <Title text="Get Random Joke"></Title>
        <Link to={routePaths.SAVED_JOKES}>To Favourite Jokes</Link>
      </TopRow>
      <JokeWrapper>
        <Joke
          text={
            isJokeFetching
              ? 'Fetching'
              : activeJoke?.value || 'Сlick on one of the buttons'
          }
        ></Joke>
      </JokeWrapper>
      <Buttons>
        <ButtonWrapper onClick={handleGetJoke} disabled={isJokeFetching}>
          Get Joke
        </ButtonWrapper>
        {!jokesFetchingInterval ? (
          <ButtonWrapper onClick={handleStartGettingJokes}>
            Start Getting Jokes
          </ButtonWrapper>
        ) : (
          <ButtonWrapper onClick={handleStopGettingJokes}>
            Stop Getting Jokes
          </ButtonWrapper>
        )}
        {isJokeAddedInFavourite ? (
          <ButtonWrapper onClick={handleRemoveFromFavourite}>
            Remove from Favourite
          </ButtonWrapper>
        ) : (
          <ButtonWrapper onClick={handleAddToFavourite}>
            Add to Favourite
          </ButtonWrapper>
        )}
      </Buttons>
    </>
  );
};
