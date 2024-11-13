import React, { useState } from 'react';
import './phoneCardStyle.css';
import shoppingCart from '../../assets/shopping-cart.png'
import { Link } from 'react-router-dom';


export const PhoneCard = ({ product_name, price, availability, id }) => {
    const [isCard, setIsCard] = useState(false);

    const toggleCard = () => {
        setIsCard(!isCard);
    };

    return (
        <Link to={`/${id}`}>
            <div className="product-card">
                <img
                    src="https://via.placeholder.com/150"
                    alt={product_name}
                    className="product-image"
                />
                <div className="product-info">
                    <h3>{product_name}</h3>
                    <p className="product-availability">
                        {availability ? "В наявності" : "Немає в наявності"}
                    </p>
                    <p className="product-price">{price} ₴</p>
                </div>
                <button className={`cart-button ${isCard ? 'active' : ''}`} onClick={toggleCard}>
                    <img className='cart-img' src={shoppingCart} alt="Add to cart" />
                </button>
            </div>

        </Link>
    );
};
