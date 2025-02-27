import styles from './Games.module.css'
import '../../global.css';

import { getGames, getPublishers } from '../../functions/gamesList';

export function Recomendations(){
  const publishers = getPublishers
  const games = getGames
  return (
    <>
      {}
    </>
  )
}