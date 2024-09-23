import { Card, CardHeader, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails } from '@availity/element';

import { ResponseField } from './ResponseField';

export const Provider = () => (
  <Card>
    <CardHeader title="Provider Information" />
    <CardContent>
      <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
        <ResponseField label="Requesting Provider" value="Rodriguez, Brandon" sm={6} />
        <ResponseField label="Referred-To-Provider" value="Riviera, Nick" sm={6} />
      </Grid>
      <Accordion sx={{ mt: '1.5rem' }}>
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          View more data
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>
    </CardContent>
  </Card>
);
