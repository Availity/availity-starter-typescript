import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/select/resources';
import { requiredValidation } from '@/shared';

type Organization = {
  customerId: string;
};

const Basic = (): JSX.Element => {
  const [customerId, setCustomerId] = useState<string | null>(null);

  return (
    <Card body className="mb-3">
      <CardTitle className="card-title-secondary">Basic Information</CardTitle>
      <AvOrganizationSelect
        name="organization"
        label="Organization"
        validate={requiredValidation}
        onChange={({ customerId }: Organization) => setCustomerId(customerId)}
      />
      <AvProviderSelect name="provider" label="Provider" customerId={customerId} />
    </Card>
  );
};

export default Basic;
