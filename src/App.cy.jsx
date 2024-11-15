import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { Provider } from 'react-redux';
import { store } from './redux/index.reducers';

describe('<App />', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
})

