import { useNavigate } from 'react-router';
import { Button, Paper, TextField, Grid } from '@availity/element';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useSubmitRequest, type RequestPayload } from '@/hooks';

type FormValues = {
  name: string;
  email: string;
  message?: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  message: yup.string(),
});

export const Request = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useSubmitRequest();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { name: '', email: '', message: '' }, resolver: yupResolver(schema) });

  const onSubmit = async (values: RequestPayload) => {
    const submission = await mutateAsync(values);
    navigate('/response', { state: { submission } });
  };

  return (
    <Paper sx={{ padding: '1.5rem' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              {...register('name')}
              label="Name"
              required
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              {...register('email')}
              label="Email"
              required
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField {...register('message')} label="Message" multiline />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" mt={2}>
          <Button type="submit" color="primary" disabled={isPending}>
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};
