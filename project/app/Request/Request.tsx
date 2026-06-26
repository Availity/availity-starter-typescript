import { useNavigate } from 'react-router-dom';
import { Button, Paper, TextField, OrganizationAutocomplete, ProviderAutocomplete, Grid } from '@availity/element';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Organization = {
  customerId: string;
  id: string;
};
type Provider = {
  id: string;
  npi: string;
};
type FormValues = {
  organization: Organization | null;
  provider: Provider | null;
  claimId: string;
  memberId: string;
  description?: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  organization: yup
    .object({
      customerId: yup.string().required(),
      id: yup.string().required(),
    })
    .required('Organization is required')
    .nullable(),
  provider: yup
    .object({
      id: yup.string().required(),
      npi: yup.string().required(),
    })
    .nullable(),
  memberId: yup.string().required('Member ID is required'),
  claimId: yup.string().required('Claim ID is required'),
  description: yup.string(),
});

const initialValues: FormValues = {
  organization: null,
  provider: null,
  memberId: '',
  claimId: '',
  description: '',
};

export const Request = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm({ defaultValues: initialValues, resolver: yupResolver(schema) });

  const handleOnSubmit = () => {
    navigate('/response');
  };

  const selectedCustomerId = (watch('organization') as FormValues['organization'])?.customerId || '';

  return (
    <Paper sx={{ padding: '1.5rem' }}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
          <Grid size={{ md: 6 }}>
            <Controller
              name="organization"
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <OrganizationAutocomplete
                  FieldProps={{
                    label: 'Organization',
                    required: true,
                    error: !!errors.organization,
                    helperText: errors.organization?.message,
                  }}
                  onChange={(event, value, reason) => {
                    if (reason === 'clear') {
                      onChange(null);
                    }
                    onChange(value);
                  }}
                  onBlur={onBlur}
                  value={value || null}
                />
              )}
            />
          </Grid>
          <Grid size={{ md: 6 }}>
            <Controller
              name="provider"
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ProviderAutocomplete
                  FieldProps={{ label: 'Provider' }}
                  customerId={selectedCustomerId}
                  onChange={(event, value, reason) => {
                    if (reason === 'clear') {
                      onChange(null);
                    }
                    onChange(value);
                  }}
                  onBlur={onBlur}
                  value={value || null}
                />
              )}
            />
          </Grid>
          <Grid size={{ md: 6 }}>
            <TextField
              {...register('memberId')}
              error={!!errors.memberId}
              helperText={errors.memberId?.message}
              label="Member ID"
              required
            />
          </Grid>
          <Grid size={{ md: 6 }}>
            <TextField
              {...register('claimId')}
              error={!!errors.claimId}
              helperText={errors.claimId?.message}
              label="Claim ID"
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField {...register('description')} error={!!errors.description} label="More information" multiline />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};
