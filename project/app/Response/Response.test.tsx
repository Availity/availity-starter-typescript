import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';

import { Response } from './Response';

const renderResponse = (submission?: object) =>
  render(
    <Router initialEntries={[{ pathname: '/response', state: submission ? { submission } : null }]}>
      <Response />
    </Router>
  );

describe('Response', () => {
  test('shows the submission details passed through router state', () => {
    renderResponse({ id: 'REF-ABC123', status: 'Received', submittedAt: '10/16/2026' });
    expect(screen.getByText('Your request has been submitted.')).toBeInTheDocument();
    expect(screen.getByText('REF-ABC123')).toBeInTheDocument();
    expect(screen.getByText('Received')).toBeInTheDocument();
  });

  test('renders without a submission in router state', () => {
    renderResponse();
    expect(screen.getByRole('button', { name: /new request/i })).toBeInTheDocument();
  });
});
