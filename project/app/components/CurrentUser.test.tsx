import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { avUserApi } from '@availity/api-axios';

import { CurrentUser } from './CurrentUser';

vi.mock('@availity/api-axios', () => ({
  avUserApi: { me: vi.fn() },
}));

const renderWithClient = () =>
  render(
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <CurrentUser />
    </QueryClientProvider>
  );

describe('CurrentUser', () => {
  test('shows the signed-in user name', async () => {
    vi.mocked(avUserApi.me).mockResolvedValue({ firstName: 'Jane', lastName: 'Smith' } as never);
    renderWithClient();
    expect(await screen.findByText('Signed in as Jane Smith')).toBeInTheDocument();
  });

  test('shows an error when the user request fails', async () => {
    vi.mocked(avUserApi.me).mockRejectedValue(new Error('boom'));
    renderWithClient();
    expect(await screen.findByText('Could not load user.')).toBeInTheDocument();
  });
});
