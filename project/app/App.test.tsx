import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders', async () => {
    render(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );

    await waitFor(() => {
      screen.getByTestId('app-container');
      screen.getByText('Basic Information');
    });
  });
});
