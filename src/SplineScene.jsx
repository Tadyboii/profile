import Spline from '@splinetool/react-spline';
import './SplineScene.css';

export default function SplineScene({onLoad}) {
  return (
    <div className='spline-scene'>
        <Spline 
          scene="https://prod.spline.design/cUbI17njiouq7CZT/scene.splinecode" 
          onLoad={onLoad}
        />
    </div>
  );
}
