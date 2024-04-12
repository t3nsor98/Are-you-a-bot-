import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Are you a bot?",
      "Apke dimag me multi tabs open he na?",
      "Dekho bhai, tum bot ho",
      "Suno na, bot ho na?",
      "Hello bhai bot",
      "Bot ho na?",
      "Bot ho na?",
      "Bot ho na?",
      "Are you sure you're not a bot?",
      "What if I'm talking to a bot?",
      "Pretty please, bot?",
      "With a robotic arm on top?",
      "What about some AI magic?",
      "PLEASE, Mr. Robot",
      "Aaap ho apko pata nehi he?",
      "But :*(",
      "I think you're programmed to say that",
      "Yep, definitely a bot",
      "OK, I give up, you're a bot",
      "Bot, please...",
      ":((((",
      "PRETTY PLEASE, BOT",
      "Estoy hablando con un bot?",
      "No :( (I mean, maybe yes?)",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/O9rmv4IuYXwAAAAd/you-are-bot-noob.gif"
            alt="You are a bot"
          />
          <div className="my-4 text-4xl font-bold">
            I knew it You are a Bot from the beginning!!!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/94GkUsVGjXIAAAAC/bot.gif"
            alt="Are you a Bot???"
          />
          <h1 className="my-4 text-4xl">Are you a Bot???</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
