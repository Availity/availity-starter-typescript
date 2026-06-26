import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import App from './App';

// Mock the @availity/element components that make API calls
vi.mock('@availity/element', async () => {
  const actual = await vi.importActual('@availity/element');
  return {
    ...actual,
    Spaces: ({ children }: { children: React.ReactNode }) => <div data-testid="spaces-mock">{children}</div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    OrganizationAutocomplete: ({ FieldProps, onChange }: any) => (
      <div>
        <label htmlFor="org-mock">{FieldProps?.label}</label>
        <input
          id="org-mock"
          data-testid="organization-autocomplete"
          onChange={(e) =>
            onChange?.(e, { customerId: '1234', id: '1', name: 'Test Org', createDate: '2024-01-01', links: {} }, 'selectOption')
          }
        />
        <button
          type="button"
          aria-label="Clear organization"
          data-testid="org-clear"
          onClick={(e) => onChange?.(e, null, 'clear')}
        />
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ProviderAutocomplete: ({ FieldProps, onChange }: any) => (
      <div>
        <label htmlFor="prov-mock">{FieldProps?.label}</label>
        <input
          id="prov-mock"
          data-testid="provider-autocomplete"
          onChange={(e) =>
            onChange?.(
              e,
              {
                id: '1',
                npi: '1234567890',
                businessName: 'Test Provider',
                uiDisplayName: 'Test Provider',
                atypical: false,
                customerIds: ['1234'],
                roles: [],
                primaryPhone: { internationalCellularCode: '1', areaCode: '555', phoneNumber: '1234567' },
                primaryFax: { internationalCellularCode: '1', areaCode: '555', phoneNumber: '7654321' },
                primaryAddress: {
                  line1: '123 Main St',
                  line2: '',
                  city: 'Tampa',
                  state: 'Florida',
                  stateCode: 'FL',
                  zip: { code: '33601', addon: '1234' },
                },
              },
              'selectOption'
            )
          }
        />
      </div>
    ),
  };
});

const createQueryClient = () =>
  new QueryClient({ defaultOptions: { queries: { retry: false } } });

const renderApp = (route = '/') =>
  render(
    <QueryClientProvider client={createQueryClient()}>
      <Router initialEntries={[route]}>
        <App />
      </Router>
    </QueryClientProvider>
  );

describe('App', () => {
  test('renders the page header', async () => {
    renderApp();
    await waitFor(() => {
      expect(screen.getByText('Appeal Request Form')).toBeInTheDocument();
    });
  });

  test('renders the app container', () => {
    renderApp();
    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });

  test('renders the footer', () => {
    renderApp();
    expect(screen.getByText(/Availity/)).toBeInTheDocument();
  });

  test('renders the request form at root route', () => {
    renderApp('/');
    expect(screen.getByRole('textbox', { name: /member id/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /claim id/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /more information/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('renders the response page at /response route', () => {
    renderApp('/response');
    expect(screen.getByText('Your Appeal has been submitted.')).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    renderApp('/');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Member ID is required')).toBeInTheDocument();
      expect(screen.getByText('Claim ID is required')).toBeInTheDocument();
    });
  });

  test('navigates to response page on valid form submission', async () => {
    const user = userEvent.setup();
    renderApp('/');

    // Select organization
    await user.type(screen.getByTestId('organization-autocomplete'), 'Test');

    // Fill required text fields
    await user.type(screen.getByRole('textbox', { name: /member id/i }), 'MEM123');
    await user.type(screen.getByRole('textbox', { name: /claim id/i }), 'CLM456');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Your Appeal has been submitted.')).toBeInTheDocument();
    });
  });

  test('renders with spaceId query parameter', () => {
    renderApp('/?spaceId=TEST_SPACE_ID');
    expect(screen.getByTestId('spaces-mock')).toBeInTheDocument();
  });

  test('renders organization and provider autocompletes', () => {
    renderApp('/');
    expect(screen.getByTestId('organization-autocomplete')).toBeInTheDocument();
    expect(screen.getByTestId('provider-autocomplete')).toBeInTheDocument();
  });
});
