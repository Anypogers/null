import styles from './Recomendations.module.css';

import * as gamesList from '../../functions/gamesList';

export function Recomendations(){
  const games = gamesList.getGames();
  return (
    <>
      {
        games.map((game) => {
          const gameInfo = gamesList.getGameInfo(game);
          return (
            <div className={styles.gameCard}>
              <div>
                <h1>
                  {game}
                </h1>
              </div>
              <div>
                <a href={gameInfo.steamLink}>Steam</a>
                {displayIfExist(gameInfo.officialSite, (<a href={gameInfo.officialSite}>Official Site</a>))}
              </div>
              <div>
                {gameInfo.description.map((line) => {
                  return <p>{line}</p>
                })}
              </div>
            </div>
          );
        })
      }
    </>
  )
}

function displayIfExist(value, display) {
  if (value != null) {
    return display;
  }
}