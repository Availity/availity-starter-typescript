import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import App from './App';

describe('App', () => {
  test('renders', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router initialEntries={['/']}>
          <App />
        </Router>
      </QueryClientProvider>
    );

    await waitFor(() => {
      screen.getByText('Appeal Request Form');
    });
  });
});
