import { Card, CardHeader, CardContent, Grid } from '@availity/element';

import { ResponseField } from './ResponseField';

const description =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.';

export const Appeal = () => (
  <Card>
    <CardHeader title="Appeal Information" />
    <CardContent>
      <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
        <ResponseField size={{ xs: 4 }} label="Reason" value="Timely Filing" />
        <ResponseField size={{ xs: 8 }} label="Description" value={description} />
      </Grid>
    </CardContent>
  </Card>
);
