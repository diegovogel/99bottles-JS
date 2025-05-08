import { downTo } from './helpers';

export class Bottles {
  verse(bottleCount) {
    const bottleWord = bottleCount === 1 ? 'bottle' : 'bottles';
    
    return `${bottleCount} ${bottleWord} of beer on the wall, ${bottleCount} ${bottleWord} of beer.
Take ${bottleCount === 1 ? 'it' : 'one'} down and pass it around, ${bottleCount === 1 ? 'no more' : bottleCount - 1} ${bottleCount === 2 ? 'bottle' : 'bottles'} of beer on the wall.
`;
  }
}