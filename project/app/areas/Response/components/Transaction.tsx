import React from 'react';
import { Card, CardTitle, Row, Badge } from 'reactstrap';
import ResponseField from './ResponseField';

const Transaction: React.SFC = () => (
  <Card className="mb-3" body>
    <CardTitle className="card-title-secondary">
      <small className="text-label text-label-inline">Transaction ID</small> <Badge color="success">966343462</Badge>
      <small className="text-label text-label-inline">Customer ID</small> <Badge color="success">8964733372</Badge>
    </CardTitle>
    <Row>
      <ResponseField label="Certification Number" value="383837" sm="3" />
      <ResponseField label="Patient Name" value="Jane Smith" sm="3" />
      <ResponseField label="Patient Date of Birth" value="10/10/2011" sm="3" />
      <ResponseField label="Member ID" value="1234343" sm="3" />
    </Row>
    <Row>
      <ResponseField label="Status" value="Created" sm="3" />
      <ResponseField label="Diagnosis Version" value="ICD-9" sm="3" />
      <ResponseField label="Request Type" value="Appeal Form" sm="3" />
      <ResponseField label="Payer" value="Aetna" sm="3" />
    </Row>
  </Card>
);

export default Transaction;