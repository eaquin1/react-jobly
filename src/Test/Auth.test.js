import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Components/Auth/Login';
import { MemoryRouter } from 'react-router';



describe('Testing the AuthForm', () => {
  it('it renders AuthForm without crashing', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});