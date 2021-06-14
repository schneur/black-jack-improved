var score = 0;
var myAces = 0;

var alertCard = function () {
if (this.points == 'Ace') {
 myAces += 1;
 if (myAces == 1) {
    if (score < 11) {
    score += 11;
  } else {
    score += 1;
  }
  }
} else {
  score += this.points;
}
  cardsUsed += this.count + this.suit;
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

  var shuffle = function () {
    for (var i = cards.length -1; i > 0; i--) {
      var j = Math.floor(Math.random() * i);
      var k = cards[i];
      cards[i] = cards[j];
      cards[j] = k;
    };
  }

var cardsUsed = [];
var newCard = [];

var newGame = function () {
  alert('welcome to Blackjack!\ntime to get started.');
  shuffle();
  newCard = cards.pop();
  cards.unshift(newCard);
  newCard.alertCard();
  game();
};

var game = function () {
  newCard = cards.pop();
  cards.unshift(newCard);
  newCard.alertCard();
  alert('your cards so far are' + '\n' + cardsUsed + '.\nwith a total of ' + score + ' points.');
  determineWin();
};

var determineWin = function () {
  if (score == 21) {
    alert('you win!');
    playAgain();
  } else if (score > 21) {
    alert('bust! \nbetter luck next time.');
    playAgain();
  } else {
    var hitOrStand = prompt('your cards so far are ' + cardsUsed + ' with a total of ' + score + ' points.\nhit or stand?','type "hit" or "stand"');
    if (hitOrStand === 'hit') {
      game();
    } else if (hitOrStand === 'stand') {
      alert('oh man. you can always play again.');
      playAgain();
    } else {
      alert('couldnt understand that, maybe check your spelling.');
      determineWin();
    }
  };
}

var playAgain = function () {
  var response = confirm('Do you want to play again?');
    if (response) {
       score = 0;
       myAces = 0;
       cardsUsed = [];
      newGame();
    } else {
      alert('ok, be like that.');
    }
};

newGame();