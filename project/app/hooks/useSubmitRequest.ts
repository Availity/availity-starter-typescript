import { useMutation } from '@tanstack/react-query';
import AvApi from '@availity/api-axios';

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

// Placeholder endpoint. Mocked by Ekko (see config/routes.json and data/submission.json).
// Replace with your real resource. A write, so it goes through useMutation, not useQuery.
const submitRequest = async (payload: RequestPayload): Promise<Submission> => {
  const submissionApi = new AvApi({ api: false, url: '/cloud/fake/route' });
  const response = await submissionApi.create<Submission>(payload);
  return response.data;
};

export const useSubmitRequest = () => useMutation({ mutationFn: submitRequest });
