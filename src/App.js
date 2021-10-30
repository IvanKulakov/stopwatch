import React from "react";
import { useEffect, useState } from "react";
import { interval, Subject} from "rxjs";
import { takeUntil } from "rxjs/operators";
import StartBtn from "./components/StartBTN/StartBTN";
import StopBtn from "./components/StopBTN/StopBTN";
import './components/StartBTN/BtnStyle.css'

const App =() =>{
  const [second, setSecond] = useState(0);
  const [status, setStatus] = useState("stop");
  const [click, setClick] = useState(0);

  useEffect(() => {
  const timer = new Subject()
    interval(1000)
      .pipe(takeUntil(timer))
      .subscribe(() => {
        if (status === "start") {
          setSecond(val => val + 1000);
        }
      });

    return () => {
      timer.next();
      timer.complete();
    };
  }, [status]);


  const start = (() => {
    setStatus("start");
    setClick(0);
  });

  const stop = (() => {
    setStatus("stop");
    setSecond(0);
  });

  const reset = (() =>{
    setSecond(0);
    setClick(0);
  });

  const wait =()=>{
    setClick(value=> value +1)
    setTimeout(() => {
      if (click !== 1) (setClick(0));
    }, 300);
    if (click ===1) setStatus('wait')
  };

   return (
    <div className="wrapper">
      <div className='timer_pos'>
         <p className="text_style"> {new Date(second).toISOString().slice(11, 19)}</p>
          <div className="btn-block">
          {(status === "stop" || status === "wait")?   <StartBtn start = {start} />:  <StopBtn stop = {stop} />}
          <button className='btn-stile btn-stile_reset' onClick={reset}>Reset</button>
          <button className='btn-stile btn-stile_start' onClick={wait}>Wait</button>
        </div>
     </div>
    </div>
  );
}

export default App;