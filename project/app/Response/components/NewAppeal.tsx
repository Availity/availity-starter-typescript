import { Button, CardContent, Stack, Card } from '@availity/element';
import { useNavigate } from 'react-router-dom';

export const NewAppeal = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ height: '100%' }}>
        <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
          <Button
            onClick={() => {
              navigate('/');
            }}
            sx={{ my: 'auto' }}
          >
            New Appeal
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
