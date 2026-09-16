import { Routes, Route, useSearchParams } from 'react-router';
import { Container, PageHeader, Spaces } from '@availity/element';

import { Request } from '@/Request';
import { Response } from '@/Response';
import { ErrorBoundary, Footer } from '@/components';

const App = () => {
  const [searchParams] = useSearchParams();
  const spaceId = searchParams.get('spaceId') || '';

  return (
    <Container data-testid="app-container" id="app-container">
      <Spaces spaceIds={[spaceId]} clientId="test">
        <PageHeader
          breadcrumbs={{ active: 'Request Form' }}
          headerText="Appeal Request Form"
          help={{ helpAppName: 'Appeal Request Form', url: 'https://design.availity.com' }}
        />
        <Container>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Request />} />
              <Route path="/response" element={<Response />} />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </Container>
      </Spaces>
    </Container>
  );
};

export default App;
