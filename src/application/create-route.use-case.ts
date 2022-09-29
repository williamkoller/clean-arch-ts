import { LatLng, Route } from '../domain/route.entity';
import { RouteRepositoryInterface } from '../domain/route.repository';

export class CreateRouteUseCase {
  constructor(private readonly routeRepo: RouteRepositoryInterface) {}
  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  start: LatLng;
  end: LatLng;
  points?: LatLng[];
};

type CreateRouteInput = Omit<CreateRouteOutput, 'id'>;
