import React from 'react';
import { Card, CardTitle, InputGroup, InputGroupAddon, Label, InputGroupText, Row, Col } from 'reactstrap';
import { Field, Input, FormGroup, Feedback } from '@availity/form';

const Information = (): JSX.Element => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Claim Information</CardTitle>
    <Field name="memberId" label="Member ID" />
    <Field name="claimId" label="Claim ID Number" />
    <Row>
      <FormGroup tag={Col} xs={6} for="originalBilled">
        <Label for="originalBilled">Original Claim Amount Billed</Label>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input name="originalBilled" id="originalBilled" type="number" />
        </InputGroup>
        <Feedback name="originalBilled" />
      </FormGroup>
      <FormGroup tag={Col} xs={6} for="originalPaid">
        <Label for="originalPaid">Original Claim Amount Paid</Label>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input name="originalPaid" id="originalPaid" type="text" />
        </InputGroup>
        <Feedback name="originalPaid" />
      </FormGroup>
    </Row>
  </Card>
);

export default Information;
