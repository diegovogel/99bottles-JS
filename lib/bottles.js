import { downTo } from './helpers';

export class Bottles {
  verse(bottleCount) {
    return `${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.
Take one down and pass it around, ${bottleCount - 1} bottles of beer on the wall.
`;
  }
}