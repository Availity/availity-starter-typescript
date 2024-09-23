import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Container, PageHeader, Spaces } from '@availity/element';

import { Request } from './Request';
import { Response } from './Response';
import { Footer } from './components';

const App = () => {
  const [searchParams] = useSearchParams();
  const spaceId = searchParams.get('spaceId') || '';

  return (
    <Container data-testid="app-container" id="app-container">
      <Spaces spaceIds={[spaceId]} clientId="test">
        <PageHeader
          breadcrumbs={{ active: 'Request Form' }}
          headerText="Appeal Request Form"
          helpAppName="Appeal Request Form"
        />
        <Container>
          <Routes>
            <Route path="/" element={<Request />} />
            <Route path="/response" element={<Response />} />
          </Routes>
          <Footer />
        </Container>
      </Spaces>
    </Container>
  );
};

export default App;
