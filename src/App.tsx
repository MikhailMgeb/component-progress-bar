import React, { useState } from 'react';

import './App.css';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { LoadingPicture } from './components/LoadingPicture/LoadingPicture';

const App = () => {
  const [isLoaded, setLoaded] = useState(false);

  function isFinishLoading(value: boolean) {
    setLoaded(value);
  }

  return (
    <div className="App">
      <ProgressBar onFinish={isFinishLoading} />

      <LoadingPicture isFinish={isLoaded} />
    </div>
  );
}

export { App };
