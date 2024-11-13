// PhonePage.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './phonePageStyle.css';
// import { FaShoppingCart, FaHeart } from 'react-icons/fa';

export const PhonePage = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const phoneData = useSelector((state) => 
    state.phone.page.find(phone => phone.smallInfo.id === parseInt(id))
  );
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!phoneData) {
    return <div>Телефон не знайдено</div>;
  }

  const { smallInfo, body } = phoneData;
  console.log(body);
  
  const { specs, features } = body;

  return (
    <div className="phone-page">
      <div className="phone-container">
        {/* Ліва частина - зображення телефону */}
        <div className="phone-image-section">
          <img
            src="https://via.placeholder.com/300"
            alt={smallInfo.product_name}
            className="phone-image"
          />
        </div>

        {/* Права частина - опис телефону */}
        <div className="phone-details-section">
          <h1>{smallInfo.product_name}</h1>
          <p><strong>Ціна:</strong> {smallInfo.price} ₴</p>
          <p><strong>Наявність:</strong> {smallInfo.availability ? 'В наявності' : 'Немає в наявності'}</p>

          <ul className="phone-specs">
            <li><strong>Процесор:</strong> {specs.processor}</li>
            <li><strong>Дисплей:</strong> {specs.display.size} {specs.display.type}, {specs.display.resolution}, {specs.display.ppi}</li>
            <li><strong>Камера:</strong> 
              <ul>
                <li>Основна: {specs.camera.main.megapixels} MP, {specs.camera.main.aperture}, {specs.camera.main.features.join(', ')}</li>
                <li>Ультраширока: {specs.camera.ultrawide.megapixels} MP, {specs.camera.ultrawide.aperture}, кут огляду {specs.camera.ultrawide.field_of_view}</li>
                <li>Фронтальна: {specs.camera.front.megapixels} MP, {specs.camera.front.aperture}</li>
                <li>Запис відео: {specs.camera.video_recording}</li>
              </ul>
            </li>
            <li><strong>Акумулятор:</strong> {specs.battery.capacity}, швидка зарядка {specs.battery.fast_charging}, бездротова зарядка {specs.battery.wireless_charging.type} {specs.battery.wireless_charging.power}</li>
            <li><strong>Операційна система:</strong> {specs.os}</li>
            <li><strong>Матеріал корпусу:</strong> {specs.body.material}</li>
            <li><strong>Захист:</strong> {specs.body.water_resistance}</li>
            <li><strong>Підтримка мережі:</strong> {specs.connectivity.join(', ')}</li>
          </ul>

          <div className="phone-actions">
            <button className="cart-button-page">купити</button>
            <button
              className={`favorite-button ${isFavorite ? 'active' : ''}`}
              onClick={toggleFavorite}
            >
              {isFavorite ? 'В корзині' : 'Додати в корзину'}
            </button>
          </div>
        </div>
      </div>

      {/* Опис функцій телефону */}
      <div className="phone-description">
        <h2>Опис та ключові особливості</h2>
        {features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
    </div>
  );
};
