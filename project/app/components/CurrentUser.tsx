import { Typography } from '@availity/element';

import { useCurrentUser } from '@/hooks';

export const CurrentUser = () => {
  const { data, isPending, isError } = useCurrentUser();

  if (isPending) return <Typography>Loading user...</Typography>;
  if (isError) return <Typography color="error">Could not load user.</Typography>;

  return <Typography>Signed in as {`${data.firstName} ${data.lastName}`}</Typography>;
};
