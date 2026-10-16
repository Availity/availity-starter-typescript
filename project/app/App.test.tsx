import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { avUserApi } from '@availity/api-axios';

import App from './App';

vi.mock('@availity/api-axios', () => ({
  avUserApi: { me: vi.fn().mockResolvedValue({ firstName: 'Jane', lastName: 'Smith' }) },
}));

vi.mock('@availity/element', async () => {
  const actual = await vi.importActual('@availity/element');
  return {
    ...actual,
    Spaces: ({ children }: { children: React.ReactNode }) => <div data-testid="spaces-mock">{children}</div>,
  };
});

const renderApp = (route = '/') =>
  render(
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <Router initialEntries={[route]}>
        <App />
      </Router>
    </QueryClientProvider>
  );

describe('App', () => {
  test('renders the page header', () => {
    renderApp();
    expect(screen.getByText('My Application')).toBeInTheDocument();
  });

  test('renders the app container', () => {
    renderApp();
    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });

  test('renders the footer', () => {
    renderApp();
    expect(screen.getByText(/Availity/)).toBeInTheDocument();
  });

  test('loads the current user', async () => {
    renderApp();
    expect(await screen.findByText('Signed in as Jane Smith')).toBeInTheDocument();
    expect(avUserApi.me).toHaveBeenCalled();
  });
});
