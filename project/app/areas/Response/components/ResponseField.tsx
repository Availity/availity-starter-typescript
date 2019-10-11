/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Col } from 'reactstrap';

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
  label?: string;
  value?: any;
  tag?: string | React.ReactType;
}

const ResponseField: React.SFC<ResponseProps> = ({ label, value, children, ...rest }) => (
  <Col {...rest}>
    <h5 className="text-label">{label}</h5>
    <p>{children || value}</p>
  </Col>
);

export default ResponseField;
