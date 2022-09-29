import { LatLng, Route, RouteProps } from './route.entity';

describe('Route Test', () => {
  it('constructor()', () => {
    let routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
      points: [{ lat: 34, lng: 4 }],
    };

    route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 34, lng: 4 }],
    });
  });

  it('updateTitle method', () => {
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = new Route(routeProps);
    route.updateTitle('title updated');
    expect(route.title).toBe('title updated');
  });

  it('updatePosition method', () => {
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = new Route(routeProps);
    const start: LatLng = { lat: 10, lng: 20 };
    const end: LatLng = { lat: 20, lng: 40 };
    route.updatePosition(start, end);
    expect(route.start).toBe(start);
    expect(route.end).toBe(end);
  });

  it('updatePoints method', () => {
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = new Route(routeProps);
    const points: LatLng[] = [
      {
        lat: 10,
        lng: 20,
      },
      {
        lat: 40,
        lng: 80,
      },
    ];
    route.updatePoints(points);
    expect(route.points).toHaveLength(2);
    expect(route.points).toStrictEqual(points);
  });
});
