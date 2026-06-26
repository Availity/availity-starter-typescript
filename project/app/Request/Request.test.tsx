import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Request } from './Request';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

vi.mock('@availity/element', async () => {
  const actual = await vi.importActual('@availity/element');
  return {
    ...actual,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    OrganizationAutocomplete: ({ FieldProps, onChange }: any) => (
      <div>
        <label htmlFor="org-mock">{FieldProps?.label}</label>
        <input
          id="org-mock"
          data-testid="organization-autocomplete"
          onChange={(e) => onChange?.(e, { customerId: '1234', id: '1' }, 'selectOption')}
        />
        {FieldProps?.error && <span>{FieldProps.helperText}</span>}
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ProviderAutocomplete: ({ FieldProps, onChange }: any) => (
      <div>
        <label htmlFor="prov-mock">{FieldProps?.label}</label>
        <input
          id="prov-mock"
          data-testid="provider-autocomplete"
          onChange={(e) => onChange?.(e, { id: '1', npi: '1234567890' }, 'selectOption')}
        />
      </div>
    ),
  };
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
    expect(screen.getByRole('textbox', { name: /member id/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /claim id/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /more information/i })).toBeInTheDocument();
    expect(screen.getByTestId('organization-autocomplete')).toBeInTheDocument();
    expect(screen.getByTestId('provider-autocomplete')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    renderRequest();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Member ID is required')).toBeInTheDocument();
      expect(screen.getByText('Claim ID is required')).toBeInTheDocument();
    });
  });

  test('does not navigate when form is invalid', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Member ID is required')).toBeInTheDocument();
    });
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('navigates to /response on valid submission', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.type(screen.getByTestId('organization-autocomplete'), 'Test');
    await user.type(screen.getByRole('textbox', { name: /member id/i }), 'MEM123');
    await user.type(screen.getByRole('textbox', { name: /claim id/i }), 'CLM456');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/response');
    });
  });

  test('allows optional description field', async () => {
    const user = userEvent.setup();
    renderRequest();

    await user.type(screen.getByTestId('organization-autocomplete'), 'Test');
    await user.type(screen.getByRole('textbox', { name: /member id/i }), 'MEM123');
    await user.type(screen.getByRole('textbox', { name: /claim id/i }), 'CLM456');
    await user.type(screen.getByRole('textbox', { name: /more information/i }), 'Extra details');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/response');
    });
  });
});
