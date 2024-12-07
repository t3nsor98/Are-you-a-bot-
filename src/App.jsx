import { useState, useEffect, useRef } from "react";
import babyYoda from "./assets/baby-yoda.gif";
// import beaver from "./assets/beaver.gif";
// import bebyBubu from "./assets/beby-bubu.gif";
// import berrincheHimouto from "./assets/berrinche-himouto-umaru-chan.gif";
// import bubuBubuDudu from "./assets/bubu-bubu-dudu.gif";
// import captainPikachu from "./assets/captain-pikachu-pokemon.gif";
// import catwait from "./assets/catwait-cat-wagging-tail.gif";
// import chipmunkViralhog from "./assets/chipmunk-viralhog.gif";
// import chipwrecked from "./assets/chipwrecked-brittany-chipette.gif";
// import cuteAww from "./assets/cute-aww.gif";
// import cutePinguin from "./assets/cute-pinguin-hello-mrbrotstange-penguin-madagaskar-lol-bruh.gif";
// import dancingCat from "./assets/dancing-cat-dance.gif";
// import eatingCats from "./assets/eating-cats-talking.gif";
// import greeting from "./assets/greeting-talking.gif";
// import hamsterArayasan from "./assets/hamster-ayasan.gif";
// import hamsterDriving from "./assets/hamster-hamster-driving.gif";
// import hamsterMeme from "./assets/hamster-hamster-meme.gif";
// import hamsterbow from "./assets/hamsterbow-sad-hamster.gif";
// import himouto from "./assets/himouto-umaru-chan-anime.gif";
// import littleCat from "./assets/little-cat-walking.gif";
// import marmot from "./assets/marmot.gif";
// import nerdHamster from "./assets/nerd-hamster.gif";
// import nezukoSlayer from "./assets/nezuko-demon-slayer.gif";
// import nezukoRunning from "./assets/nezuko-running.gif";
// import pokemon from "./assets/pokemon.gif";
// import rageRagecat from "./assets/rage-ragecat.gif";
// import sealBaby from "./assets/seal-baby.gif";
// import smallCat from "./assets/small-cat-cat-dance.gif";
// import smolCat from "./assets/smol-cat.gif";
// import umaruDancing from "./assets/umaru-dancing.gif";
// import weDoSmoling from "./assets/we-do-a-little-smoling.gif";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentGif, setCurrentGif] = useState(smolCat); // Initialize with a GIF
  const yesButtonRef = useRef(null);

  const gifs = [
    babyYoda,
    beaver,
    bebyBubu,
    berrincheHimouto,
    bubuBubuDudu,
    captainPikachu,
    catwait,
    chipmunkViralhog,
    chipwrecked,
    cuteAww,
    cutePinguin,
    dancingCat,
    eatingCats,
    greeting,
    hamsterArayasan,
    hamsterDriving,
    hamsterMeme,
    hamsterbow,
    himouto,
    littleCat,
    marmot,
    nerdHamster,
    nezukoSlayer,
    nezukoRunning,
    pokemon,
    rageRagecat,
    sealBaby,
    smallCat,
    smolCat,
    umaruDancing,
    weDoSmoling,
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Are you smol?",
      "Are you sure you're not smol?",
      "Maybe a little smol?",
      "C'mon, admit it, you're smol",
      "Smol but mighty?",
      "I bet you're smol",
      "Definitely smol",
      "Smol, smol, smol!",
      "Tiny and adorable?",
      "Pocket-sized perhaps?",
      "Fun-sized?",
      "It's okay to be smol",
      "Embrace your smolness!",
      "Smol is the new big",
      "Please, just say you're smol",
      "I know you're smol",
      "Super smol",
      "Ultra smol",
      "Mega smol",
      "Giga smol",
      "Teeny tiny smol",
      "Itsy bitsy smol",
      "Wee little smol",
      "Supercalifragilisticexpialidociously smol",
      "U kinda look like a hamster though, are you sure you're not smol?",
      "Maybe a smol chipmunk?",
      "As smol as a beaver?",
      "Marmot-sized smolness?",
      "Pomeranian-level smol?",
      "Umaru-chan smol?",
      "Nezuko-chan smol?",
      "Pikachu-level smol?",
      "Baby Yoda smol?",
      "Mini Mouse smol?",
      "A smol penguin?",
      "Like a tiny kitten?",
      "Smol like a ladybug?",
      "Are you a smol bean?",
      "Maybe a smol gremlin?",
    ];

    // Shuffle the phrases array randomly
    for (let i = phrases.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
    }

    return phrases[0];
  };

  useEffect(() => {
    // Update the current GIF whenever noCount or yesPressed changes
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    setCurrentGif(randomGif);
  }, [noCount, yesPressed]);

  useEffect(() => {
    if (yesButtonRef.current) {
      const buttonWidth = yesButtonRef.current.offsetWidth;
      yesButtonRef.current.style.fontSize = `${Math.min(
        16 + buttonWidth / 10,
        40
      )}px`;
    }
  }, [noCount, yesPressed]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-12">
        Smol Detector
      </h1>
      {yesPressed ? (
        <>
          <img
            src={babyYoda} // Use an imported GIF here
            alt="You are smol"
            className="w-48 h-48 rounded-full border-4 border-pink-400 object-cover shadow-lg animate-pulse"
          />
          <div className="mt-6 text-3xl sm:text-4xl font-bold text-pink-600 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              I knew it! You're smol!
            </span>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Embrace your smolness! ✨
          </div>
        </>
      ) : (
        <>
          <img
            className="w-64 h-64 rounded-full p-4 border-8 border-yellow-300 object-cover shadow-2xl mb-8 animate-wiggle"
            src={currentGif}
            alt="Are you smol???"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 text-center mb-8">
            Are you smol???
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              ref={yesButtonRef}
              className={`rounded-full bg-green-500 px-6 py-3 text-lg sm:text-xl font-bold text-white hover:bg-green-700 shadow-md transition-all duration-300 ease-in-out active:scale-95`}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-full bg-red-500 px-6 py-3 text-lg sm:text-xl font-bold text-white hover:bg-red-700 shadow-md transition-all duration-300 ease-in-out active:scale-95"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
