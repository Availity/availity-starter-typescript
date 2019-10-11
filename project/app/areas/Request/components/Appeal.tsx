import React from 'react';
import { Card, CardTitle, Input as RsInput } from 'reactstrap';
import { Input, RadioGroup, Radio } from '@availity/form';

const Appeal: React.SFC = () => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Appeal Reason</CardTitle>
    <RadioGroup name="appealReason" inline>
      <Radio label="Eligibility" value="provider" />
      <Radio label="Coordination of Benefits" value="coordination" />
      <Radio label="Authorization" value="authorization" />
      <Radio label="Claim Paid Incorrectly" value="paidIncorrectly" />
      <Radio label="Timely Filing" value="timelyFiling" />
      <Radio label="Other" value="other" />
    </RadioGroup>
    <Input name="description" type="textarea" rows={9} placeholder="Enter Description..." />
  </Card>
);

export default Appeal;
