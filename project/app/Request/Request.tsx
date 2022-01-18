import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form } from '@availity/form';
import * as yup from 'yup';

import { Basic, Information, Appeal } from './components';

const schema = yup.object().shape({
  memberId: yup.string().required(),
  claimId: yup.string().required(),
  organization: yup.object().required(),
});

const Request = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={() => navigate('/response')}
      initialValues={{
        organization: undefined,
        provider: undefined,
        memberId: '',
        claimId: '',
        originalBilled: '',
        originalPaid: '',
        appealReason: '',
        description: '',
      }}
      validationSchema={schema}
    >
      <Basic />
      <Information />
      <Appeal />
      <div className="form-controls">
        <Button type="submit" color="primary" className="form-controls-right">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Request;
