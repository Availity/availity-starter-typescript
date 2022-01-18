import React from 'react';
import { Col, ColProps } from 'reactstrap';

interface Props extends ColProps {
  label?: string;
  value?: string;
}

const ResponseField = ({ label, value, children, ...rest }: Props): JSX.Element => (
  <Col {...rest}>
    <h5 className="text-label">{label}</h5>
    <p>{children || value}</p>
  </Col>
);

export default ResponseField;
