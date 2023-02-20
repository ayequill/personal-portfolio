import moviewWatch from "./assets/projects/movie-desktop-home.webp";
import movieMob from "./assets/projects/movie-screen-home.webp";
import memeMobile from "./assets/projects/meme-mobile.webp";
import memeDesktop from "./assets/projects/meme-desktop.webp";
import cardMobile from "./assets/projects/card-game-mobile.webp";
import cardDesktop from "./assets/projects/card-game-desktop.webp";
import colorGenDesktop from "./assets/projects/color-gen-desktop.webp";
import colorGenMobile from "./assets/projects/color-gen-mobile.webp";
import rpgGameMobile from "./assets/projects/rpg-game-mobile.webp";
import rpgGameDesktop from "./assets/projects/rpg-game-desktop.webp";
import tenziesGameDesktop from "./assets/projects/tenzies-game-desktop.webp"
import tenziesMobile from "./assets/projects/tenzies-game-mobile.webp"
import markdownDesktop from "./assets/projects/markdown-editor-desktop.webp"
import markdownMobile from "./assets/projects/markdown-editor-mobile.webp"

export const portfolio = [
  {
    title: "Movie Watchlist WebApp",
    desc: "A movie collection Website adaptable to all devices,developed with TheMovieDB API.",
    demoUrl: "https://movie-watchlist-beta.vercel.app",
    repoUrl: "https://github.com/ayequill/meme-generator",
    desktopImgSrc: moviewWatch,
    mobileImgSrc: movieMob,
    tags: ["html", "scss", "vanilla-js", "api"],
  },
  {
    title: "Color Scheme Generator",
    desc: "A Color Scheme WepApp.",
    demoUrl: "https://ayequill-color-gen.vercel.app",
    repoUrl: "https://github.com/ayequill/color-generator",
    desktopImgSrc: colorGenDesktop,
    mobileImgSrc: colorGenMobile,
    tags: ["html", "scss", "vanilla-js", "api"],
  },
  {
    title: "Markdown Notes App",
    desc: "A markdown notes app with preview. You can write HTML directly and preview.",
    demoUrl: "https://markdown-editor-notes-app.vercel.app/",
    repoUrl: "https://github.com/ayequill/markdown-editor-notes-app",
    desktopImgSrc: markdownDesktop,
    mobileImgSrc: markdownMobile,
    tags: ["html", "scss", "vanilla-js", "api"],
  },
  {
    title: "Tenzies!",
    desc: "A Tenzies game.",
    demoUrl: "https://ayequill-color-gen.vercel.app",
    repoUrl: "https://github.com/ayequill/color-generator",
    desktopImgSrc: tenziesGameDesktop,
    mobileImgSrc: tenziesMobile,
    tags: ["html", "scss", "react-js"],
  },
  {
    title: "Meme Generator",
    desc: "A meme generator web app that allows users to add text to randomly generated meme images.",
    demoUrl: "https://meme-generator-ayequill.vercel.app/",
    repoUrl: "https://github.com/ayequill/meme-generator",
    desktopImgSrc: memeDesktop,
    mobileImgSrc: memeMobile,
    tags: ["html", "scss", "react-js", "api"],
  },
  {
    title: "War of Cards",
    desc: " A card game built with Vanilla JS and Card Deck API.",
    demoUrl: "http://war-of-cards.vercel.app",
    repoUrl: "https://github.com/ayequill/war-of-cards",
    desktopImgSrc: cardDesktop,
    mobileImgSrc: cardMobile,
    tags: ["html", "scss", "vanilla-js", "api"],
  },
  {
    title: "RPG Game",
    desc: " A RPG developed using HTML, CSS3 and Vanilla JS.",
    demoUrl: "https://rpg-game-lyart.vercel.app",
    repoUrl: "https://github.com/ayequill/rpg-game",
    desktopImgSrc: rpgGameDesktop,
    mobileImgSrc: rpgGameMobile,
    tags: ["html", "scss", "vanilla-js", "api"],
  },
];
