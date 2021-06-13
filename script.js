var score = 0;

var alertCard = function () {
//if (this.points == 'Ace') {

//}
  cardsUsed += this.count + this.suit;
  score += this.points;
  alert('you drew a ' + this.count + this.suit);
};

cards = [
  {
    count: 'Ace',
    suit: ' of Hearts ',
    points: 'Ace',
    alertCard: alertCard
  },
  {
    count: 'Ace',
    suit: ' of  Spades ',
    points: 'Ace',
    alertCard: alertCard
  },
  {
    count: 'Ace',
    suit: ' of Clubs ',
    points: 'Ace',
    alertCard: alertCard
  },
  {
    count: 'Ace',
    suit: ' of Diamonds ',
    points: 'Ace',
    alertCard: alertCard
  },
  {
    count: 'two',
    suit: ' of Hearts ',
    points: 2,
    alertCard: alertCard
  },
  {
    count: 'two',
    suit: ' of  Spades ',
    points: 2,
    alertCard: alertCard
  },
  {
    count: 'two',
    suit: ' of Clubs ',
    points: 2,
    alertCard: alertCard
  },
  {
    count: 'two',
    suit: ' of Diamonds ',
    points: 2,
    alertCard: alertCard
  },
  {
    count: "Three",
    suit: ' of Hearts ',
    points: 3,
    alertCard: alertCard
  },
  {
    count: "Three",
    suit: ' of  Spades ',
    points: 3,
    alertCard: alertCard
  },
  {
    count: "Three",
    suit: ' of Clubs ',
    points: 3,
    alertCard: alertCard
  },
  {
    count: "Three",
    suit: ' of Diamonds ',
    points: 3,
    alertCard: alertCard
  },
  {
    count: "Four",
    suit: ' of Hearts ',
    points: 4,
    alertCard: alertCard
  },
  {
    count: "Four",
    suit: ' of  Spades ',
    points: 4,
    alertCard: alertCard
  },
  {
    count: "Four",
    suit: ' of Clubs ',
    points: 4,
    alertCard: alertCard
  },
  {
    count: "Four",
    suit: ' of Diamonds ',
    points: 4,
    alertCard: alertCard
  },
  {
    count: "Five",
    suit: ' of Hearts ',
    points: 5,
    alertCard: alertCard
  },
  {
    count: "Five",
    suit: ' of  Spades ',
    points: 5,
    alertCard: alertCard
  },
  {
    count: "Five",
    suit: ' of Clubs ',
    points: 5,
    alertCard: alertCard
  },
  {
    count: "Five",
    suit: ' of Diamonds ',
    points: 5,
    alertCard: alertCard
  },
  {
    count: "Six",
    suit: ' of Hearts ',
    points: 6,
    alertCard: alertCard
  },
  {
    count: "Six",
    suit: ' of  Spades ',
    points: 6,
    alertCard: alertCard
  },
  {
    count: "Six",
    suit: ' of Clubs ',
    points: 6,
    alertCard: alertCard
  },
  {
    count: "Six",
    suit: ' of Diamonds ',
    points: 6,
    alertCard: alertCard
  },
  {
    count: "Seven",
    suit: ' of Hearts ',
    points: 7,
    alertCard: alertCard
  },
  {
    count: "Seven",
    suit: ' of  Spades ',
    points: 7,
    alertCard: alertCard
  },
  {
    count: "Seven",
    suit: ' of Clubs ',
    points: 7,
    alertCard: alertCard
  },
  {
    count: "Seven",
    suit: ' of Diamonds ',
    points: 7,
    alertCard: alertCard
  },
  {
    count: "Eight",
    suit: ' of Hearts ',
    points: 8,
    alertCard: alertCard
  },
  {
    count: "Eight",
    suit: ' of  Spades ',
    points: 8,
    alertCard: alertCard
  },
  {
    count: "Eight",
    suit: ' of Clubs ',
    points: 8,
    alertCard: alertCard
  },
  {
    count: "Eight",
    suit: ' of Diamonds ',
    points: 8,
    alertCard: alertCard
  },
  {
    count: "nine",
    suit: ' of Hearts ',
    points: 9,
    alertCard: alertCard
  },
  {
    count: "nine",
    suit: ' of  Spades ',
    points: 9,
    alertCard: alertCard
  },
  {
    count: "nine",
    suit: ' of Clubs ',
    points: 9,
    alertCard: alertCard
  },
  {
    count: "nine",
    suit: ' of Diamonds ',
    points: 9,
    alertCard: alertCard
  },
  {
    count: "Ten",
    suit: ' of Hearts ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: "Ten",
    suit: ' of  Spades ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: "Ten",
    suit: ' of Clubs ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: "Ten",
    suit: ' of Diamonds ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Jack',
    suit: ' of Hearts ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Jack',
    suit: ' of  Spades ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Jack',
    suit: ' of Clubs ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Jack',
    suit: ' of Diamonds ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Queen',
    suit: ' of Hearts ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Queen',
    suit: ' of  Spades ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Queen',
    suit: ' of Clubs ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'Queen',
    suit: ' of Diamonds ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'King',
    suit: ' of Hearts ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'King',
    suit: ' of  Spades ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'King',
    suit: ' of Clubs ',
    points: 10,
    alertCard: alertCard
  },
  {
    count: 'King',
    suit: ' of Diamonds ',
    points: 10,
    alertCard: alertCard
  }];

for (var i = cards.length -1; i > 0; i--) {
  var j = Math.floor(Math.random() * i);
  var k = cards[i];
  cards[i] = cards[j];
  cards[j] = k;
};

var cardsUsed = [];
var newCard = [];

var newgame = function () {
  alert('welcome to Blackjack!\ntime to get started.');
};

var game = function () {
  newCard = cards.pop();
  newCard.alertCard(); 
  console.log(cardsUsed);
  //addCards()
};

game();
game();