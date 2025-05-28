import { Controller, Post, Param } from '@nestjs/common';
import { Direction } from './core/useCases/moveTile/moveTile.usecase';
import { GameService } from './game.service';

@Controller('2048')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post(':direction')
  move(@Param('direction') direction: Direction) {
    return this.gameService.move(direction);
  }
}