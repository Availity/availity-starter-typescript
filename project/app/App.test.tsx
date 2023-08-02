import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import axios from 'axios';

import spaces from '../data/spaces.json';
import App from './App';

jest.mock('axios');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const axiosMock =  axios as jest.Mocked<typeof axios>;

describe('App', () => {
  test('renders', async () => {
    axiosMock.mockResolvedValue({
      config: {},
      headers: {},
      data: spaces,
      status: 202,
      statusText: 'Ok',
    });

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
