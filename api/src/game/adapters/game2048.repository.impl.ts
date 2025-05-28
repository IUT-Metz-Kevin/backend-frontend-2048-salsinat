import { Game2048Repository } from '../core/ports/game2048.repository';
import { Grid } from '../core/useCases/moveTile/moveTile.usecase';

export class Game2048RepositoryImpl extends Game2048Repository {
  private grid: Grid = [
    [2, null, null, null],
    [2, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  fetch(): Grid {
    return this.grid;
  }

  save(grid: Grid): void {
    this.grid = grid;
  }
}