import { downTo, capitalize } from './helpers';

export class Bottles {
  verse(bottleCount) {
    const pluralizedBottle = bottleCount === 1 ? 'bottle' : 'bottles';
    
    const bottleCountString = bottleCount === 0 ? 'no more' : bottleCount.toString();
    
    let lastSentence = '';
    
    if (bottleCount === 0) {
      lastSentence = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    } else {
      lastSentence = `Take ${bottleCount === 1 ? 'it' : 'one'} down and pass it around, ${bottleCount === 1 ? 'no more' : bottleCount - 1} ${bottleCount === 2 ? 'bottle' : 'bottles'} of beer on the wall.`;
    }
    
    return `${capitalize(bottleCountString)} ${pluralizedBottle} of beer on the wall, ${bottleCountString} ${pluralizedBottle} of beer.
${lastSentence}
`;
  }
  
  verses(countStart, countEnd) {
    const counts = downTo(countStart, countEnd);
    
    return counts.map(count => this.verse(count)).join('\n');
  }
  
  song() {
    return this.verses(99, 0);
  }
}