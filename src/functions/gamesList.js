const games = {
  "ULTRAKILL": {
    steamLink: "https://store.steampowered.com/app/1229490/ULTRAKILL/",
    officialSite: null,
    description: [
      "ULTRAKILL is a fast-paced ultraviolent old school FPS that fuses together classic shooters like Quake, modern shooters like Doom (2016) and character action games like Devil May Cry.",
      "Mankind has gone extinct and the only beings left on earth are machines fueled by blood.",
      "But now that blood is starting to run out on the surface...",
      "Machines are racing to the depths of Hell in search of more."
    ]
  },
  "DUSK": {
    steamLink: "https://store.steampowered.com/app/519860/DUSK/",
    officialSite: "https://newblood.games/dusk",
    description: [
      "DUSK reintroduces you to a world where butchery and bloodshed must be mastered... if you're to survive 'til dawn. Inspired by Doom, Quake, Blood, Heretic, Hexen, Half-Life, Redneck Rampage and all your '90s favorites, while featuring a soundtrack by metal music mastermind Andrew Hulshult.",
      "In three distinct campaign episodes hand-crafted from straight outta the '90s, players will battle through an onslaught of mystical backwater cultists, possessed militants and even darker forces and attempt to discover just what lurks beneath the Earth. Featuring a vast arsenal of badass weaponry including sickles, swords, crossbows, rifles, dual-wielded and double barreled shotguns and incredibly necessary grenade and rocket launchers, DUSK brings unapologetic retro action from start to finish.",
    ]
  },
  "FAITH: The Unholy Trinity": {
    steamLink: "https://store.steampowered.com/app/1179080/FAITH_The_Unholy_Trinity/",
    officialSite : "https://newblood.games/faith",
    description: [
      "On September 21, 1986, two priests arrived at the Martin Family home in rural Connecticut to investigate an apparent case of demonic possession. Only two people would leave the house alive.",
      "FAITH is a pixel horror game inspired by the era of classic 8-bit gaming and the \"Satanic Scare\" of the 1980s. Use your holy crucifix to perform exorcisms, fight back against possessed cultists, and cleanse haunted objects. Discover a world of dread, isolation, and mystery as you explore haunted forests, abandoned churches, and the inner sanctums of a Satanic cult."
    ]
  },
  "Fallen Aces": {
    steamLink: "https://store.steampowered.com/app/1411910/Fallen_Aces/",
    officialSite: null,
    description: [
      "The A.C.E.S, watchful guardians of Switchblade City, are being taken down, one by one. Now it's up to one man, with two fists, to get to the bottom of it all. ",
      "Fallen Aces is a crime noir FPS that plays right out of the '90s and looks like it's right outta the comics. "
    ]
  },
  "Outcore: Desktop Adventure": {
    steamLink: "https://store.steampowered.com/app/1275670/Outcore_Desktop_Adventure/",
    officialSite: "https://www.doctorshinobi.com/",
    description: [
      "All you wanted was a nice game. But now you find yourself opening Windows apps like Paint & Notepad to solve puzzles, and searching for files on your computers that you didn't put there... Who is she? Why did she appear on your desktop? Let's dive into her memories and find out."
    ]
  },
  "UNDERTALE": {
    steamLink: "https://store.steampowered.com/app/391540/Undertale/",
    officialSite: "https://undertale.com/",
    description: [
      "The RPG game where you don't have to destroy anyone."
    ]
  },
  "OneShot": {
    steamLink: "https://store.steampowered.com/app/420530/OneShot/",
    officialSite: null,
    description: [
      "OneShot is a surreal top down Puzzle/Adventure game with unique gameplay capabilities. You are to guide a child through a mysterious world on a mission to restore its long-dead sun. The world knows you exist."
    ]
  }
}


/// Returns an array with the names of the games on the list.
export function getGames() {
  return Object.keys(games).sort();
}

/// Return an object containing the information of a game. on the list.
/// The object will contain the following properties:
/// -steamLink : String
/// -officialSite : String
/// -description : Array
export function getGameInfo(game) {
  return games[game];
}