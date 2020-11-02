import { FC } from 'react';
import { routePaths } from '../enums/route-paths';

export interface Route {
  path: routePaths;
  component: FC;
}
