import React from 'react';
import './BtnStyle.css'

const StartBtn = ({ start }) => {
  return (
    <div>
      <button className='btn-stile btn-stile_start' onClick={start}>
        Start
      </button>
    </div>
  );
};

export default StartBtn;