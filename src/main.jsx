import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import Home from './Home.jsx'
import SplineScene from './SplineScene.jsx'

function App() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <StrictMode>
    <div>
      <SplineScene onLoad={() => setIsSplineLoaded(true)}/>
      {isSplineLoaded && <Home />}
    </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App/>);

