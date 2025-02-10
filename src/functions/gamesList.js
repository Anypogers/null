const games = {
  NewBlood: {
    captalizeName : false,
    Ultrakill: {
      captalizeName: true,
      description: [
        "Ultrakill is a game that contains scenes"
      ]
    },
    Dusk: {
      captalizeName: true,
      description: []
    },
    FaithTheUnholyTrinity: {
      captalizeName: true,
      description: []
    }
  },
  Mojang: {
    captalizeName : true,
    Minecraft: {
      captalizeName: true,
      description: []
    }
  },
  TobyFox: {
    captalizeName : false,
    Undertale: {
      captalizeName: true,
      description: []
    },
    Deltarune: {
      captalizeName: true,
      description: []
    }
  }
}

function getPublishers() {
  const publishers = Object.keys(games).sort();
  publishers.map((publisher, index) => {
    const captalize = games[publisher].captalizeName
    const publisherName = publisher.replaceAll(/([a-z])([A-Z])/, '$1 $2')
    if (captalize) {
      publishers[index] = publisherName.toUpperCase()
    }
  });
  return publishers; 
}

function getGames(publisher){
  const publisherGames = games[publisher];
  delete publisherGames.captalizeName;
  const gameNames = Object.keys(publisherGames).sort();
  gameNames.map((gameName) => {
    const captalize = publisherGames[gameName].captalizeName;
    const oldName = gameName;
    const newName = gameName.replaceAll(/([a-z])([A-Z])/, '$1 $2');
    if (captalize) {
      newName = newName.toUpperCase();
    }
    if (oldName !== newName) {
      Object.defineProperty(publisherGames, newName, Object.getOwnPropertyDescriptor(publisherGames, oldName));
      delete publisherGames[oldName];
    }
  });
  return publisherGames;
}