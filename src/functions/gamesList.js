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
      description: [
        "Gary loves you"
      ]
    },
    FaithTheUnholyTrinity: {
      captalizeName: true,
      description: [
        "Not aprooved by the vatican"
      ]
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
    const captalize = games[publisher].captalizeName;
    let publisherName = publisher.replaceAll(/([a-z])([A-Z])/g, '$1 $2');
    if (captalize) {
      publisherName = publisherName.toUpperCase();
    }
    publishers[index] = publisherName;
  });
  return publishers; 
}


function getGames(publisher){
  publisher = publisher.toLowerCase();
  publisher = publisher.replaceAll(/ ([a-z])/gi, '$1'.toUpperCase());
  publisher = publisher.charAt(0).toUpperCase() + publisher.slice(1);
  console.log(publisher)
  const publisherGames = games[publisher];
  delete publisherGames.captalizeName;
  const gameNames = Object.keys(publisherGames).sort();
  gameNames.map((gameName) => {
    const captalize = publisherGames[gameName].captalizeName;
    const oldName = gameName;
    let newName = gameName.replaceAll(/([a-z])([A-Z])/g, '$1 $2');
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


console.log(getGames('New Blood Two'))