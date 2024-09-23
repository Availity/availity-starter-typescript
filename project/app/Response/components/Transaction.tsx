import { Typography, Card, CardHeader, CardContent, Grid } from '@availity/element';

import { ResponseField } from './ResponseField';

export const Transaction = () => (
  <Card>
    <CardHeader title="Transaction Information" />
    <CardContent>
      <Typography variant="caption" sx={{ mr: '1rem' }}>
        Transaction ID: 966343462
      </Typography>
      <Typography variant="caption">Customer ID: 8964733372</Typography>
      <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
        <ResponseField label="Certification Number" value="383837" sm={4} />
        <ResponseField label="Patient Name" value="Jane Smith" sm={4} />
        <ResponseField label="Patient Date of Birth" value="10/10/2011" sm={4} />
        <ResponseField label="Member ID" value="1234343" sm={4} />
        <ResponseField label="Status" value="Created" sm={4} />
        <ResponseField label="Diagnosis Version" value="ICD-9" sm={4} />
        <ResponseField label="Request Type" value="Appeal Form" sm={4} />
        <ResponseField label="Payer" value="Aetna" sm={4} />
      </Grid>
    </CardContent>
  </Card>
);
