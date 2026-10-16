import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Request } from './Request';

const mockNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return { ...actual, useNavigate: () => mockNavigate };
});

const renderRequest = () =>
  render(
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <Router>
        <Request />
      </Router>
    </QueryClientProvider>
  );

describe('Request', () => {
  beforeEach(() => mockNavigate.mockClear());

  test('renders all form fields', () => {
    renderRequest();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  test('shows email validation error for invalid email', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Jane');
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'not-an-email');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Must be a valid email')).toBeInTheDocument();
    });
  });

  test('navigates to /response with the submission on valid submit', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Jane Smith');
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/response', {
        state: { submission: expect.objectContaining({ status: 'Received' }) },
      });
    });
  });
});
