import React, { Suspense } from 'react';

import { routes } from '@routes';
import CreateRoutes from '@routes/CreateRoutes';

function App() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <div className="app">
        <CreateRoutes routes={routes} />
      </div>
    </Suspense>
  );
}

export default App;
