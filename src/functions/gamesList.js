const games = {
  "New Blood": {
    description: ["We love games and we hate money."],
    "ULTRAKILL": {
      description: [
        "Ultrakill is a game that contains scenes"
      ]
    },
    "DUSK": {
      description: [
        "Gary loves you"
      ]
    },
    "Faith The Unholy Trinity": {
      description: [
        "Not aprooved by the vatican"
      ]
    }
  },
  "Mojang": {
    description: [],
    "Minecraft": {
      description: [
        "Imagine a game where you can do anything you dream."
      ]
    }
  },
  "TobyFox": {
    description: [
      "Check it out, i'm in the car."
    ],
    "UNDERTALE": {
      description: [
        "Sans Undertale"
      ]
    },
    "DELTARUNE": {
      description: [
        "Now's your chance to be a big shot!"
      ]
    }
  }
}

export function getAllGames() {
  return games;
}

export function getPublishers() {
  const publishersList = Object.keys(games).sort();
  const publishers = games;
  publishersList.map((publisherName, publisherIndex) => {
    Object.keys(games[publisherName]).map((gameName, gameIndex) => {
      if (gameName != "description") {
        delete publishers[publisherName][gameName];
      }
    });
  });
  return publishers;
}

export function getGames(publisher){
  const publisherGames = games[publisher];
  delete publisherGames.description
  return publisherGames;
}