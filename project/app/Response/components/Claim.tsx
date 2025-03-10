import { Grid, Card, CardHeader, CardContent } from '@availity/element';

import { ResponseField } from './ResponseField';

export const Claim = () => (
  <Card>
    <CardHeader title="Claim Information" />
    <CardContent>
      <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
        <ResponseField label="Claim ID" value="123456789" size={{ sm: 6 }} />
        <ResponseField label="Date of Service" value="12/24/2012 - 12/24/2012" size={{ sm: 6 }} />
        <ResponseField label="Amount Billed" value="$XXXX.XX" size={{ sm: 6 }} />
        <ResponseField label="Amount Paid" value="$XXXX.XX" size={{ sm: 6 }} />
        <ResponseField
          label="Message"
          value="Quae quis sequi veniam non. Qui possimus commodi fuga commodi accusamus quo ad repellat optio. Non rerum ut
      blanditiis. Sint fuga est commodi ratione accusamus. Ad veniam pariatur natus in aut natus sunt et nihil."
        />
      </Grid>
    </CardContent>
  </Card>
);
