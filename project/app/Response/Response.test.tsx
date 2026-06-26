import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';

import { Response } from './Response';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

const renderResponse = () =>
  render(
    <Router>
      <Response />
    </Router>
  );

describe('Response', () => {
  beforeEach(() => mockNavigate.mockClear());

  test('renders success alert', () => {
    renderResponse();
    expect(screen.getByText('Your Appeal has been submitted.')).toBeInTheDocument();
  });

  test('renders transaction information card', () => {
    renderResponse();
    expect(screen.getByText('Transaction Information')).toBeInTheDocument();
    expect(screen.getByText('966343462')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  test('renders claim information card', () => {
    renderResponse();
    expect(screen.getByText('Claim Information')).toBeInTheDocument();
    expect(screen.getByText('123456789')).toBeInTheDocument();
  });

  test('renders appeal information card', () => {
    renderResponse();
    expect(screen.getByText('Appeal Information')).toBeInTheDocument();
    expect(screen.getByText('Timely Filing')).toBeInTheDocument();
  });

  test('renders provider information card', () => {
    renderResponse();
    expect(screen.getByText('Provider Information')).toBeInTheDocument();
    expect(screen.getByText('Rodriguez, Brandon')).toBeInTheDocument();
  });

  test('renders payer contact information card', () => {
    renderResponse();
    expect(screen.getByText('Payer Contact Information')).toBeInTheDocument();
    expect(screen.getByText('(800) 955-5682')).toBeInTheDocument();
  });

  test('renders new appeal button', () => {
    renderResponse();
    expect(screen.getByRole('button', { name: /new appeal/i })).toBeInTheDocument();
  });

  test('new appeal button navigates to home', async () => {
    const user = userEvent.setup();
    renderResponse();

    await user.click(screen.getByRole('button', { name: /new appeal/i }));

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
