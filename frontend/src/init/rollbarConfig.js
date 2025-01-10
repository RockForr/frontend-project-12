/* eslint-disable */
// export default {
//   environment: 'production',
//   accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// };

import React from 'react';
import { Provider, ErrorBoundary } from '@rollbar/react'; // Provider imports 'rollbar'

const rollbarConfig = {
  accessToken: 'cc6775f60de740d4b7967e4fb6c118a6',
  environment: 'testenv',
};

function TestError() {
  const a = null;
  return a.hello();
}

// Provider instantiates Rollbar client instance handling any uncaught errors or unhandled promises in the browser
// ErrorBoundary catches all React errors in the tree below and logs them to Rollbar
export default function App() {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </Provider>
  );
}