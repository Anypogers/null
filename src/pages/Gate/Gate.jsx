import { useState, useEffect } from "react";

import styles from './Gate.module.css';
import { GlitchedText } from './../../components/GlitchedText/GlitchedText';

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

  const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  const day = formatTime(time.getDate());
  const month = formatTime(time.getMonth());
  const currentDate = `${day} / ${month}`;
  const hrs = formatTime(time.getHours());
  const min = formatTime(time.getMinutes());
  const sec = formatTime(time.getSeconds());
  const currentTime = `${hrs}:${min}:${sec}`;
  const weekDay = `${week[time.getDay()]}-Feira`

  return(
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.title}>
            <GlitchedText text="Relogio 100% Funcional"/>
          </div>
        </div>
      </section>
      
      <section>
        <div className={styles.container}>
          <div className={styles.clock}>
            <div className={styles.weekBox}>
              <p>{weekDay}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <div className={styles.clock}>
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