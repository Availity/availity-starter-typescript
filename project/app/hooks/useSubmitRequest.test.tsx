import { renderHook, waitFor, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { useSubmitRequest } from './useSubmitRequest';

const mockCreate = vi.fn();
const mockCtor = vi.fn();
vi.mock('@availity/api-axios', () => ({
  default: class {
    create = mockCreate;

    constructor(config: unknown) {
      mockCtor(config);
    }
  },
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
    {children}
  </QueryClientProvider>
);

describe('useSubmitRequest', () => {
  beforeEach(() => {
    mockCreate.mockReset();
    mockCtor.mockReset();
  });

  test('posts the payload to the placeholder route and returns the response body', async () => {
    const submission = { id: 'REF-JS4F2K', status: 'Received', submittedAt: 'now' };
    mockCreate.mockResolvedValue({ data: submission });

    const { result } = renderHook(() => useSubmitRequest(), { wrapper });
    const payload = { name: 'Jane Smith', email: 'jane@example.com', message: '' };

    await act(async () => {
      await result.current.mutateAsync(payload);
    });

    expect(mockCtor).toHaveBeenCalledWith({ api: false, url: '/cloud/fake/route' });
    expect(mockCreate).toHaveBeenCalledWith(payload);
    await waitFor(() => expect(result.current.data).toEqual(submission));
  });
});
