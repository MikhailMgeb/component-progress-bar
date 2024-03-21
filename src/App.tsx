import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { LoadingPicture } from './components/LoadingPicture/LoadingPicture';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <ProgressBar onProgress={setProgress} progress={progress} />
      {progress === 100 && <LoadingPicture />}
    </div>
  );
}

export { App };
