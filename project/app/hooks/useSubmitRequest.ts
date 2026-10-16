import { useMutation } from '@tanstack/react-query';

export type RequestPayload = {
  name: string;
  email: string;
  message?: string;
};

export type Submission = {
  id: string;
  status: string;
  submittedAt: string;
};

// Replace with a real API call (for example, an @availity/api-axios resource).
// A write, so it goes through useMutation, not useQuery.
const submitRequest = async (payload: RequestPayload): Promise<Submission> => {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 500);
  });
  return {
    id: `REF-${payload.name.slice(0, 2).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    status: 'Received',
    submittedAt: new Date().toLocaleString(),
  };
};

export const useSubmitRequest = () => useMutation({ mutationFn: submitRequest });
