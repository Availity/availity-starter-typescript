import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/select/resources';
import { requiredValidation } from '../../../shared';

type OrganizationType = {
  customerId: string;
};

const Basic: React.SFC = () => {
  const [customerId, setCustomerId] = useState<string | null>(null);

  return (
    <Card body className="mb-3">
      <CardTitle className="card-title-secondary">Basic Information</CardTitle>
      <AvOrganizationSelect
        name="organization"
        label="Organization"
        validate={requiredValidation}
        onChange={({ customerId }: OrganizationType) => setCustomerId(customerId)}
      />
      <AvProviderSelect name="provider" label="Provider" customerId={customerId} />
    </Card>
  );
};

export default Basic;
