import React from 'react';
import '../StartBTN/BtnStyle.css'

const StopBtn = ({ stop }) => {
  return (
    <div>
      <button className='btn-stile btn-stile_start btn-stile_stop' onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default StopBtn;