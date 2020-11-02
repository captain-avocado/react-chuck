import { JokesDashboard } from '../../../../modules/jokes-dashboard/presentation/jokes-dashboard/JokesDashboard';
import { SavedJokes } from '../../../../modules/saved-jokes/presentation/saved-jokes/SavedJokes';
import { routePaths } from '../enums/route-paths';
import { Route } from '../interfaces/route.interface';

export const routes: Route[] = [
  {
    path: routePaths.SAVED_JOKES,
    component: SavedJokes
  },
  {
    path: routePaths.JOKES_DASHBOARD,
    component: JokesDashboard
  }
];
