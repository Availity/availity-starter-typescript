import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form } from '@availity/form';
import * as yup from 'yup';
import { Basic, Information, Appeal } from './components';

const schema = yup.object().shape({
  memberId: yup.string().required('This field is required.'),
});

const Request = (): JSX.Element => {
  const history = useHistory();

  return (
    <Form
      onSubmit={() => history.push(`response`)}
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
