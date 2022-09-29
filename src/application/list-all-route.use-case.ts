import { LatLng } from '../domain/route.entity'
import { RouteInMemoryRepository } from '../infra/db/route-in-memory.repository';

export class ListAllRouteUseCase {
  constructor(private readonly routeRepo: RouteInMemoryRepository) {}
  async execute(): Promise<CreateRouteOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  start: LatLng;
  end: LatLng;
  points?: LatLng[];
};