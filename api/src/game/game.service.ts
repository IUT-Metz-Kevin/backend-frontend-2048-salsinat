import { Injectable } from '@nestjs/common';
import { MoveTile, Direction } from './core/useCases/moveTile/moveTile.usecase';
import { Game2048RepositoryImpl } from './adapters/game2048.repository.impl';

@Injectable()
export class GameService {
  private readonly repository = new Game2048RepositoryImpl();
  private readonly moveTile = new MoveTile(this.repository);

  move(direction: Direction) {
    this.moveTile.toDirection(direction);
    return this.repository.fetch();
  }
}