import { Button } from '@availity/element';
import { useNavigate } from 'react-router-dom';

export const NewAppeal = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')} color="primary">
      New Appeal
    </Button>
  );
};
