import { Data } from "../data/Data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <div>
        <p className="py-16 text-6xl text-center">Jack Of All Trades</p>
      </div>
      <div className="card-container">
      {Data.map((e, i) => {
        return (
          <Card
            key={i}
            cardID={e.cardID}
            cardRank={e.cardRank}
            cardSuit={e.cardSuit}
            cardFace={e.cardFace}
          />
        );
      })}

      </div>
    </div>
  );
};

export default Home;
