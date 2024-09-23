import { Alert, Stack } from '@availity/element';

import { Appeal, Claim, Contact, Provider, Transaction, NewAppeal } from './components';

export const Response = () => (
  <>
    <Alert severity="success">Your Appeal has been submitted.</Alert>
    <Stack direction="row" spacing={2} mb={3} mt={3}>
      <Transaction />
      <Claim />
      <Appeal />
    </Stack>
    <Stack direction="row" spacing={2}>
      <Provider />
      <Contact />
      <NewAppeal />
    </Stack>
  </>
);
