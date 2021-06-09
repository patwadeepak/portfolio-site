import React from 'react';
import '../static/css/AnimatedCube.css';
const AnimatedCube = () => {
  return (
    <div className='background'>
      <div className='wrap'>
        <div className='cube'>
          <div className='front'></div>
          <div className='back'></div>
          <div className='top'></div>
          <div className='bottom'></div>
          <div className='left'></div>
          <div className='right'></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCube;
