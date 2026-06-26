import { Alert, Grid, Stack } from '@availity/element';

import { Appeal, Claim, Contact, Provider, Transaction, NewAppeal } from './components';

export const Response = () => (
  <>
    <Alert severity="success">Your Appeal has been submitted.</Alert>
    <Grid container spacing={2} mt={3} mb={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Transaction />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Claim />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Appeal />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Provider />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Contact />
      </Grid>
    </Grid>
    <Stack direction="row" justifyContent="flex-end" mt={3}>
      <NewAppeal />
    </Stack>
  </>
);
