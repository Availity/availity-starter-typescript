import { Routes, Route, useSearchParams } from 'react-router';
import { Container, PageHeader, Spaces } from '@availity/element';

import { CurrentUser, ErrorBoundary, Footer } from '@/components';
import { Request } from '@/Request';
import { Response } from '@/Response';

const App = () => {
  const [searchParams] = useSearchParams();
  const spaceId = searchParams.get('spaceId') || '';

  return (
    <Container data-testid="app-container" id="app-container">
      <Spaces spaceIds={[spaceId]} clientId="test">
        {/* TODO: Replace headerText, breadcrumbs, and help with your app's values */}
        <PageHeader
          breadcrumbs={{ active: 'Request Form' }}
          headerText="My Application"
          help={{ helpAppName: 'My Application', url: 'https://design.availity.com' }}
        />
        <Container>
          <CurrentUser />
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
