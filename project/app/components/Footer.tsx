import { Link, HeartIcon, Typography, Stack } from '@availity/element';

const year = new Date().getFullYear();

export const Footer = () => (
  <Stack direction="row" justifyContent="center" mt="1.5rem">
    <Typography>
      Made with <HeartIcon color="error" /> at
      <Link href="https://www.availity.com" target="_blank" iconPosition="end">
        Availity
      </Link>{' '}
      {year}
    </Typography>
  </Stack>
);
