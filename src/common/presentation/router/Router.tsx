import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './config/routes';
import { routePaths } from './enums/route-paths';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            render={() => <route.component />}
          />
        ))}
        <Route path="*">
          <Redirect to={routePaths.JOKES_DASHBOARD} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
