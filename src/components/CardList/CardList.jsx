import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { cardsList } = props;

  const cardsListJSX = cardsList.map((card) => (
    <Card
      card_image={card.image_url}
      card_name={card.name}
      card_tagline={card.tagline}
      card_abv={card.abv}
      card_year={card.first_brewed.substr(3, 6)}
      card_ph={card.ph}
      key={card.id}
    />
  ));

  return <section className="punk-api__main">{cardsListJSX}</section>;
};

export default CardList;
