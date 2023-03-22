enum Fruits {
  APPLE,
  BANANA,
  PEACH
}

function getEmoji(fruit: Fruits) {
  switch (fruit) {
    case Fruits.APPLE: return '🍎';
    case Fruits.BANANA: return '🍌';
    case Fruits.PEACH: return '🍑';
    default: throw new Error('Unknow fruit!');
  }
}

getEmoji(Fruits.APPLE);
