import type { ReactNode } from 'react';
import { Grid, GridProps, Typography } from '@availity/element';

type ResponseFieldProps = {
  label: string;
  value: ReactNode;
} & Omit<GridProps, 'children'>;

export const ResponseField = ({ label, value, ...rest }: ResponseFieldProps) => (
  <Grid {...rest}>
    <Typography variant="h6">{label}</Typography>
    <Typography variant="subtitle2">{value}</Typography>
  </Grid>
);
