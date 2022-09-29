import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { FindRouteByIdUseCase } from '../../../application/find-route-by-id.use-case';
import { ListAllRouteUseCase } from '../../../application/list-all-route.use-case';
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/**
 * to store in memory in public items
 * if it was inside the request it would reset every time it was executed
 */
const repository = new RouteInMemoryRepository();

app.get('/routes', async (req: Request, res: Response) => {
  const listAllRouteUseCase = new ListAllRouteUseCase(repository);
  const output = await listAllRouteUseCase.execute();
  return res.status(200).json(output);
});

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(repository);
  const output = await createUseCase.execute(req.body);
  return res.status(201).json(output);
});

app.get('/routes/:id', async (req: Request, res: Response) => {
  const findRouteByIdUseCase = new FindRouteByIdUseCase(repository);
  const output = await findRouteByIdUseCase.execute(req.params.id);
  return res.status(200).json(output);
});

app.listen(port, () => console.log(`Server listening at port: ${port}`));
