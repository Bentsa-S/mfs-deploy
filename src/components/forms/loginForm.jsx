import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchFormData } from '../../redux/forms/registration.actions';
import { useDispatch } from 'react-redux';

import './formStyle.css';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email) errors.email = 'Email є обов’язковим';
    if (!formData.password) errors.password = 'Пароль є обов’язковим';
    return errors;
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(fetchFormData(formData, 'login'))
    } else {
      setFormErrors(errors);
    }
  };

  
  return (
    <div className="container-form">
      <h2 className="form-title">Вхід/<NavLink to='/registration'>Регестрація</NavLink></h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="submit-button">Увійти</button>
      </form>
    </div>
  );
};