let suits = ["diamonds", "clubs", "hearts", "spades"];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let id = "";

let Data = [
  {
    cardID: "A-spades",
    cardSuit: "spades",
    cardRank: "A",
    cardFace: "",
  },
];

for (let rank in ranks) {
  for (let suit in suits) {
    id = ranks[rank].toString().concat("-", suits[suit]);

    Data.push({
      cardID: id,
      cardSuit: suits[suit],
      cardRank: ranks[rank],
      cardFace: "",
    });
  }
}

var removeIndex = Data.map(item => item.cardID).indexOf("A-spades");
~removeIndex && Data.pop(removeIndex, 1);

Data.reverse();
export { Data };
