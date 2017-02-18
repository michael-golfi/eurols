import { Route } from '@angular/router';

interface NamedRoute extends Route {
  name: String;
  icon: String;
}

export declare type NamedRoutes = NamedRoute[];