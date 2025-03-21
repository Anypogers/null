import { useState, useEffect } from "react";

import styles from './Gate.module.css';
import { SpecialText } from './../../components/SpecialText/SpecialText';

function formatTime(time){
  if (time >= 10){
    return time;
  }
  return `0${time}`;
}

export function Gate(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const day = formatTime(time.getDate());
  const month = formatTime(time.getMonth() + 1);
  const currentDate = `${day} / ${month}`;
  const hrs = formatTime(time.getHours());
  const min = formatTime(time.getMinutes());
  const sec = formatTime(time.getSeconds());
  const currentTime = `${hrs}:${min}:${sec}`;
  const weekDay = week[time.getDay()]

  return(
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.title}>
            <SpecialText text="1000% working clock trust" customStyle={{fontSize:'3vw'}}/>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <div className={styles.clock}>
            <div className={styles.weekBox}>
              <p>{weekDay}</p>
            </div>
            <div className={styles.dateBox}>
              <p>{currentDate}</p>
            </div>
            <div className={styles.timeBox}>
              <p>{currentTime}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}