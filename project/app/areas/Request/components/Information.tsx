import React from 'react';
import { Card, CardTitle, InputGroup, InputGroupAddon, Label, InputGroupText, Row, Col } from 'reactstrap';
import { Field, Input, FormGroup, Feedback } from '@availity/form';
import { requiredValidation } from '../../../shared';

const Information: React.SFC = () => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Claim Information</CardTitle>
    <Field name="memberId" label="Member ID" type="text" validate={requiredValidation} />
    <Field name="claimId" label="Claim ID Number" type="text" validate={requiredValidation} />
    {/* <AvDateRangeField
      name="fromToDate"
      label="From to Date"
      validate={requiredValidation}
      start={{ name: 'date.start', required: true }}
      end={{ name: 'date.end', required: false }}
      ranges={[]}
    /> */}
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
