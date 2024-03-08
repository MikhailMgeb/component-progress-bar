import React, { useState } from 'react';

import './App.css';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { LoadingPicture } from './components/LoadingPicture/LoadingPicture';

const App = () => {
  const [isLoading, setLoading] = useState(false);

  function isFinishLoading(value: boolean) {
    setLoading(value);
  }

  return (
    <div className="App">
      <ProgressBar progressLoading={isFinishLoading} />

      <LoadingPicture isLoading={isLoading} />
    </div>
  );
}

export { App };
