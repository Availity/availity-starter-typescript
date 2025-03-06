import { Card, CardHeader, CardContent, Grid } from '@availity/element';

import { ResponseField } from './ResponseField';

export const Contact = () => (
  <Card sx={{ width: '100%' }}>
    <CardHeader title="Payer Contact Information" />
    <CardContent>
      <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
        <ResponseField size={{ sm: 6 }} label="Contact Name" value="Aetna" />
        <ResponseField size={{ sm: 6 }} label="Phone Number" value="(800) 955-5682" />
      </Grid>
    </CardContent>
  </Card>
);
