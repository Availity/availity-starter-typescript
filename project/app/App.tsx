import React, { useMemo } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import Request from './areas/Request';
import Response from './areas/Response';
import { Footer } from './shared';

const App = (): JSX.Element => {
  const { search } = useLocation();

  const spaceId = useMemo(() => qs.parse(search).spaceId, [search]);

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container id="app-container">
        <PageHeader spaceId={spaceId} appName="Appeal Request Form" />
        <Switch>
          <Route exact path="/">
            <Request />
          </Route>
          <Route path="/response">
            <Response />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Spaces>
  );
};

export default App;
