import { Route, RouteProps } from '../../domain/route.entity';
import { RouteInMemoryRepository } from './route-in-memory.repository';

describe('RouteInMemoryRepository Test', () => {
  it('should insert a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = new Route(routeProps);
    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });

  it('should findAll routes', async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = new Route(routeProps);
    repository.insert(route);
    await repository.findAll();
    expect(repository.items).toStrictEqual([route]);
  });

  it('should findById route', () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = new Route(routeProps);
    repository.insert(route);
    repository.findById(route.id);
    expect(repository.items).toStrictEqual([route]);
  });
});
