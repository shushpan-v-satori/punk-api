import React from 'react'
import './Card.scss'

const Card = (props) => {

    const { card_image } = props;
    const {card_name} =props
    const { card_tagline } = props;
    const {card_abv} = props; 
    const {card_year} = props;
    const {card_ph} = props;


  return (
    <div className='punk-api__main__card'>
    <img className='card__image'src={card_image} alt={card_name}/>
    <h3 className='card__name'>{card_name}</h3>
    <p className='card__tagline'>{card_year}</p>
    <p className='card__tagline'>{card_tagline}</p>
      <div className='card_additional-info'>
      <p>ABV - {card_abv}</p>
      <p>Ph - {card_ph}</p>
      </div>
  </div>
  )
}
export default Card
