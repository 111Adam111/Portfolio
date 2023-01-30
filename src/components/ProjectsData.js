export const projects = {
    portfolio: {
      title: 'portfolio',
      description: 'This portfolio was created in <span class="green">ReactJS</span>. Hero image was genereted on <span class="green">midjourney</span> and ajusted to my needs in <span class="green">gimp</span>. It also uses <span class="green">Sass</span>.',
      callToAction: 'Files',
      filesUrl : ''
    },
    shootingGame: {
      title: 'Shooting game',
      description: 'Shooting game is surely a project i really enjoyed creating. Probably because its fairly simple so i could focus on the pleasure of creating. It uses <span class="green">HTML</span>, <span class="green">CSS</span> and <span class="green">Javascript</span>. Also its fully <span class="green">responsive</span> and should work on all screen sizes.',
      callToAction: 'Play',
      url: 'https://github.com/111Adam111',
      filesUrl : 'https://github.com/111Adam111/Shooting-game'

    },
    CurrencyCalc: {
      title: 'Currency calculator',
      description: 'This Currency Calculator is my first <span class="green">HTML</span>, <span class="green">CSS</span> and <span class="green">Javascript</span> project. It uses <span class="green">fetch API</span> to obtain data. Please note that i am aware of its flaws like obsolete design and i am planing to transfer this app to React soon.',
      callToAction: 'Check it out',
      url: '',
      filesUrl : 'https://github.com/111Adam111/Currency-converter'
    }
  }

const shootingGame1 = require('../asset/screenshots/shootingGame1.jpg');
const shootingGame2 = require('../asset/screenshots/shootingGame2.png');
const shootingGame3 = require('../asset/screenshots/shootingGame3.png');
const shootingGame4 = require('../asset/screenshots/shootingGame4.jpg');

export const ShootingGameSS = [
    {
        image: shootingGame1
    },
    {
        image: shootingGame2
    },
    {
        image: shootingGame3
    },
    {
        image: shootingGame4
    }
]


const currencyCalc1 = require('../asset/screenshots/currencyCalc4.jpg');
const currencyCalc2 = require('../asset/screenshots/currencyCalc2.jpg');
const currencyCalc3 = require('../asset/screenshots/currencyCalc3.jpg');


export const CurrnecyCalcSS = [
    {
        image: currencyCalc1
    },
    {
        image: currencyCalc2
    },
    {
        image: currencyCalc3
    },

]
