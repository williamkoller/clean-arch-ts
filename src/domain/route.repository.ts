import { Route } from './route.entity';

export interface RouteRepositoryInterface {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
  findById(id: string): Promise<Route | undefined>
}
