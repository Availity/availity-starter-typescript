import { Alert, Card, CardHeader, CardContent, Grid, Typography, Button, Stack } from '@availity/element';
import { useLocation, useNavigate } from 'react-router';

import type { Submission } from '@/hooks';

export const Response = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const submission = (location.state as { submission?: Submission } | null)?.submission;

  return (
    <>
      <Alert severity="success">Your request has been submitted.</Alert>
      <Card sx={{ mt: 3 }}>
        <CardHeader title="Submission Details" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2">Reference ID</Typography>
              <Typography>{submission?.id}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2">Status</Typography>
              <Typography>{submission?.status}</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle2">Submitted At</Typography>
              <Typography>{submission?.submittedAt}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Stack direction="row" justifyContent="flex-end" mt={3}>
        <Button onClick={() => navigate('/')} color="primary">
          New Request
        </Button>
      </Stack>
    </>
  );
};
