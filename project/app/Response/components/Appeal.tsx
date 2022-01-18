import React from 'react';
import { Card, CardTitle, Row } from 'reactstrap';

import ResponseField from './ResponseField';

const Appeal = (): JSX.Element => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Appeal Information</CardTitle>
    <Row>
      <ResponseField xs="2" label="Reason" value="Timely Filing" />
      <ResponseField xs="10" label="Description">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio.
      </ResponseField>
    </Row>
  </Card>
);

export default Appeal;
