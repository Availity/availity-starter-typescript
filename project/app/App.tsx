import React, { useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';

import Request from './Request';
import Response from './Response';
import { Footer } from './components';

const App = (): JSX.Element => {
  const { search } = useLocation();

  const spaceId = useMemo(() => qs.parse(search).spaceId, [search]);

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container data-testid="app-container" id="app-container">
        <PageHeader spaceId={spaceId} appName="Appeal Request Form" />
        <Routes>
          <Route path="/" element={<Request />} />
          <Route path="/response" element={<Response />} />
        </Routes>
        <Footer />
      </Container>
    </Spaces>
  );
};

export default App;
