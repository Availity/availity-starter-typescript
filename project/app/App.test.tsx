import React from 'react';
import { render, cleanup, waitFor, RenderResult } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { Router } from 'react-router-dom';
import slotmachineResponse from '../data/slotmachine.json';
import App from './App';

jest.mock('axios');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const axiosMock = axios as any;

const customHistory = createBrowserHistory();
customHistory.push('?spaceId=48C607A70B5A46A3864A34E2BDDDEA04');

const renderApp = async (): Promise<RenderResult> => {
  axiosMock.mockResolvedValue({
    config: {},
    headers: {},
    data: slotmachineResponse,
    status: 202,
    statusText: 'Ok',
  });

  const { container, ...rest } = render(
    <Router history={customHistory}>
      <App />
    </Router>
  );

  await waitFor(() => container.querySelector('#app-container'));

  return { container, ...rest };
};

afterEach(() => {
  cleanup();
});

describe('App', () => {
  test('renders', async () => {
    const { getByText } = await renderApp();

    await waitFor(() => expect(getByText('My Health Plan')).toBeDefined());
  });
});
