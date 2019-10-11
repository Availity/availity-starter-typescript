import React, { Fragment } from 'react';
import { Card, CardTitle, Row } from 'reactstrap';
import ResponseField from './ResponseField';

const Claim: React.SFC = () => (
  <Card className="mb-3" body>
    <CardTitle className="card-title-secondary">Claim Information</CardTitle>
    <Row>
      <ResponseField label="Claim ID" value="123456789" sm="3" />
      <ResponseField label="Date of Service" value="12/24/2012 - 12/24/2012" sm="3" />
      <ResponseField label="Amount Billed" value="$XXXX.XX" sm="3" />
      <ResponseField label="Amount Paid" value="$XXXX.XX" sm="3" />
    </Row>
    <ResponseField
      tag={Fragment}
      label="Message"
      value="Quae quis sequi veniam non. Qui possimus commodi fuga commodi accusamus quo ad repellat optio. Non rerum ut
    blanditiis. Sint fuga est commodi ratione accusamus. Ad veniam pariatur natus in aut natus sunt et nihil."
    />
  </Card>
);

export default Claim;