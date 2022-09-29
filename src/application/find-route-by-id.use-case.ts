import { LatLng } from '../domain/route.entity';
import { RouteRepositoryInterface } from '../domain/route.repository';

export class FindRouteByIdUseCase {
  constructor(private readonly routeRepo: RouteRepositoryInterface) {}
  async execute(id: string): Promise<CreateRouteOutput | undefined> {
    const routeFound = await this.routeRepo.findById(id);
    return routeFound?.toJSON();
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  start: LatLng;
  end: LatLng;
  points?: LatLng[];
};
