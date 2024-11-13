// AboutPage.js
import React from 'react';
import './aboutPageStyle.css';

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Секція 1 - Про нас (Текст справа) */}
      <div className="about-section">
        <div className="about-image"></div>
        <div className="about-text">
          <h1 className="about-title">Про нас</h1>
          <p className="about-paragraph">
            Ми — провідна компанія у сфері технологій, що спеціалізується на продажу сучасних мобільних пристроїв
            та аксесуарів. Наша місія полягає у тому, щоб забезпечити наших клієнтів найновішими інноваційними
            продуктами, які роблять життя легшим і комфортнішим.
          </p>
          <p className="about-paragraph">
            Ми постійно вдосконалюємо асортимент товарів, щоб запропонувати найкращі моделі смартфонів, планшетів,
            аксесуарів та інших гаджетів від провідних світових брендів.
          </p>
        </div>
      </div>

      {/* Секція 2 - Наша місія (Текст зліва) */}
      <div className="about-section">
        <div className="about-text">
          <h2 className="about-subtitle">Наша місія</h2>
          <p className="about-paragraph">
            Ми віримо, що технології змінюють світ на краще. Тому наша місія полягає у тому, щоб надати кожному
            доступ до найновіших досягнень у галузі мобільних технологій.
          </p>
        </div>
        <div className="about-image"></div>
      </div>

      {/* Секція 3 - Наші цінності (Текст справа) */}
      <div className="about-section">
        <div className="about-image"></div>
        <div className="about-text">
          <h2 className="about-subtitle">Наші цінності</h2>
          <ul className="about-list">
            <li>Якість — ми гарантуємо найвищу якість усіх продуктів у нашому асортименті.</li>
            <li>Клієнтоорієнтованість — наш клієнт завжди на першому місці, ми пропонуємо найкращий сервіс.</li>
            <li>Інновації — ми завжди стежимо за новими технологіями та прагнемо бути на крок попереду.</li>
            <li>Довіра — наша компанія працює прозоро та надійно, що забезпечує довіру наших клієнтів.</li>
          </ul>
        </div>
      </div>

      {/* Секція 4 - Чому обрати нас (Текст зліва) */}
      <div className="about-section">
        <div className="about-text">
          <h2 className="about-subtitle">Чому варто обрати нас?</h2>
          <p className="about-paragraph">
            Ми пропонуємо лише сертифіковані товари від світових виробників, а також забезпечуємо гарантійне і
            післягарантійне обслуговування. Наші експерти допоможуть вам вибрати найкраще рішення для ваших потреб.
          </p>
          <p className="about-closing">
            Дякуємо за довіру! Ми завжди раді бачити вас серед наших клієнтів.
          </p>
        </div>
        <div className="about-image"></div>
      </div>
    </div>
  );
};


