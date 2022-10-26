import { ReactComponent as Spades } from "../img/suits/spades.svg";
import { ReactComponent as Hearts } from "../img/suits/hearts.svg";
import { ReactComponent as Clubs } from "../img/suits/clubs.svg";
import { ReactComponent as Diamonds } from "../img/suits/diamonds.svg";
import CardBack from "../img/back/CardBack";

const Card = ({ cardRank, cardSuit, cardFace, cardID }) => {
  const renderSuit = (cardSuit, wh) => {
    switch (cardSuit) {
      case "spades":
        return <Spades width={wh} height={wh} />;
      case "hearts":
        return <Hearts width={wh} height={wh} />;
      case "clubs":
        return <Clubs width={wh} height={wh} />;
      case "diamonds":
        return <Diamonds width={wh} height={wh} />;
      default:
        return <Diamonds width={wh} height={wh} />;
    }
  };

  const renderFace = (cardFace) => {
    return <img src={`${cardFace}`} alt="abc" />;
  };

  let wh = window.innerWidth;

  return (
    <div
      className={
        "flip-card"
      }
      id={cardID}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="absolute top-[0px] left-[0.175em] text-left">
            <div
              className={
                "font-black flex flex-col items-center" +
                (cardSuit === "hearts" || cardSuit === "diamonds"
                  ? " text-[#ff3333]"
                  : " text-[#282828]")
              }
            >
              <div className={cardRank === "10" ? "-tracking-[0.1125em]" : ""}>
                {cardRank}
              </div>
              <div>
                {renderSuit(
                  cardSuit,
                  cardRank === "10" ? wh * 0.04125 : wh * 0.0275
                )}
              </div>
            </div>
          </div>
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
            {cardFace === ""
              ? renderSuit(cardSuit, wh * 0.125)
              : renderFace(cardFace)}
          </div>
          <div className="absolute bottom-[0px] right-[0.175em]">
            <div
              className={
                "font-black flex flex-col items-center" +
                (cardSuit === "hearts" || cardSuit === "diamonds"
                  ? " text-[#ff3333]"
                  : " text-[#282828]")
              }
            >
              <div className="rotate-180">
                {renderSuit(
                  cardSuit,
                  cardRank === "10" ? wh * 0.04125 : wh * 0.0275
                )}
              </div>
              <div
                className={
                  cardRank === "10"
                    ? "rotate-180 -tracking-[0.1125em]"
                    : "rotate-180"
                }
              >
                {cardRank}
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <CardBack height={wh * .28} width={wh * .2 } />
        </div>
      </div>
    </div>
  );
};

export default Card;
