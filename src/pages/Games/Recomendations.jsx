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
              <div className={styles.titleSpace}>
                <h1 className={styles.title}>{game}</h1>
              </div>
              <div className={styles.linkSpace}>
                {displayIfExist(gameInfo.steamLink, (<a href={gameInfo.steamLink}>Steam Link</a>))}
                {displayIfExist(gameInfo.officialSite, (<a href={gameInfo.officialSite}>Official Site</a>))}
              </div>
              <div className={styles.descriptionSpace}>
                {gameInfo.description.map((line) => {
                  return <p className={styles.descriptionLine}>{line}</p>
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