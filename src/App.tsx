import React, { FC } from 'react';
import { AppContainer } from './AppContainer';
import { GlobalStyles } from './common/presentation/global-styles/styles';
import { Router } from './common/presentation/router/Router';
import { StoreProvider } from './common/providers/StoreProvider';

export const App: FC = () => {
  return (
    <StoreProvider>
      <AppContainer>
        <Router></Router>
        <GlobalStyles></GlobalStyles>
      </AppContainer>
    </StoreProvider>
  );
};

export default App;
