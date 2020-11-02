import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchSavedJokesAsync } from './modules/saved-jokes/domain/store/actions';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AppContainer: FC<Props> = ({ children }: Props) => {
  const dispatch = useDispatch();

  const initSavedJokes = async (): Promise<void> => {
    await dispatch(fetchSavedJokesAsync());
  };

  useEffect(() => {
    initSavedJokes();
  }, []);

  return <Wrapper>{children}</Wrapper>;
};

export default AppContainer;
