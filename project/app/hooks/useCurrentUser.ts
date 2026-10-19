import { useQuery } from '@tanstack/react-query';
import { avUserApi } from '@availity/api-axios';

export const useCurrentUser = () =>
  useQuery({
    queryKey: ['currentUser'],
    queryFn: () => avUserApi.me(),
  });
