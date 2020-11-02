import React, { ReactNode, FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../domain/store';

interface Props {
  children: ReactNode;
}

export const StoreProvider: FC<Props> = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
