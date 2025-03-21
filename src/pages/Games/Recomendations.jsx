import styles from './Games.module.css'
import '../../global.css';

import getGames from '../../functions/gamesList';

export function Recomendations(){
  const games = getGames();
  return (
    <>
      {console.log(games)}
    </>
  )
}