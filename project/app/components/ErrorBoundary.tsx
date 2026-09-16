import { Component, type ReactNode } from 'react';
import { Alert, Button, Stack } from '@availity/element';

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Alert severity="error">Something went wrong: {error?.message}</Alert>
          <Button onClick={() => this.setState({ hasError: false, error: null })}>Try Again</Button>
        </Stack>
      );
    }
    return children;
  }
}
