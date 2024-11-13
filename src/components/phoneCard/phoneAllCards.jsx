import React from 'react';
import './phoneCardStyle.css'
import PropTypes from 'prop-types'; // Імпорт бібліотеки PropTypes
import { PhoneCard } from './phoneCard';
import { NavLink } from 'react-router-dom';

export function PhoneAllCards({cards}) {
    console.log(cards);
    
    const cardElements = cards.map((card, index) => (
        <PhoneCard
            key={index}
            id = {card.smallInfo.id}
            product_name={card.smallInfo.product_name}
            price={card.smallInfo.price}
            availability={card.smallInfo.availability}
        />
    ));

    return (
        <div className='phone-page-all'>
            <div className='about-section-phone-page'>
                <div>
                    <h3>Трохи про нас</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, et.</p>
                    <NavLink to='/about'>
                        розширена інформація
                    </NavLink>

                </div>
                <div>

                </div>
            </div>
            <div className='phone-all-page'>
                {cardElements}
            </div>
        </div>
    );
}

// Валідація пропсів
PhoneAllCards.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        product_name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        availability: PropTypes.bool.isRequired
    })).isRequired
};
