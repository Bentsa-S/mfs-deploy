import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './formStyle.css';
import { fetchFormData } from '../../redux/forms/registration.actions';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Ім’я користувача є обов’язковим';
    if (!formData.email) errors.email = 'Email є обов’язковим';
    if (!formData.password) errors.password = 'Пароль є обов’язковим';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Паролі не співпадають';
    return errors;
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Дані форми:', formData);
      dispatch(fetchFormData(formData, 'registration'))      
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container-form">
      <h2 className="form-title"><NavLink to='/login'>Вхід</NavLink>/Реєстрація</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Ім'я користувача</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.username}
            onChange={handleChange}
            placeholder="Введіть ім'я користувача"
          />
          {formErrors.username && <p className="error">{formErrors.username}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Введіть email"
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Пароль</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            placeholder="Введіть пароль"
          />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Підтвердження пароля</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Повторіть пароль"
          />
          {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
        </div>

        <button type="submit" className="submit-button">Зареєструватися</button>
      </form>
    </div>
  );
};
