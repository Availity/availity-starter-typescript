import React from 'react';
import Icon from '@availity/icon';
import Link from '@availity/link';

const Footer = (): JSX.Element => (
  <p className="text-center mt-3">
    Made with <Icon name="heart" color="danger" /> by
    <Link className="mx-1" href="https://www.availity.com" target="_blank">
      Availity
    </Link>
    2020
  </p>
);

export default Footer;
