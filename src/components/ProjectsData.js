const shootingGame1 = require('../asset/screenshots/shootingGame1.jpg');
const shootingGame2 = require('../asset/screenshots/shootingGame2.png');
const shootingGame3 = require('../asset/screenshots/shootingGame3.png');
const shootingGame4 = require('../asset/screenshots/shootingGame4.jpg');
const currencyCalc1 = require('../asset/screenshots/currencyCalc4.jpg');
const currencyCalc2 = require('../asset/screenshots/currencyCalc2.jpg');
const currencyCalc3 = require('../asset/screenshots/currencyCalc3.jpg');
const toDo1 = require('../asset/screenshots/todo1.jpg');
const toDo2 = require('../asset/screenshots/todo2.jpg');
const toDo3 = require('../asset/screenshots/todo3.jpg');
const mobile1 = require('../asset/screenshots/mobile1.jpg');
const mobile2 = require('../asset/screenshots/mobile2.jpg');
const mobile3 = require('../asset/screenshots/mobile3.jpg');

export const projects = [
  {
    title: 'Mobile Master',
    description: `Fully responsive online store with 3D rotatable models, dark/light mode and shopping cart. Project was created in <span class="green">React</span>. <span class="green">ThreeJS</span> and <span class="green">React Three Fiber</span> were used for 3D models rendering. Other technologies used were <span class="green">Sass</span> for organised styles and <span class="green">firebase</span> for deployment.`,
    callToAction: 'Check it out',
    url: 'https://mobile-master.adamdunowski.pl/',
    filesUrl: 'https://github.com/111Adam111/Mobile-master',
    showButtons: true,
    screenshots: [mobile1, mobile2, mobile3],
  },

  {
    title: 'Shooting game',
    description:
      'Shooting game is surely a project I really enjoyed creating. Probably because its fairly simple so I could focus on the pleasure of creating. It uses <span class="green">HTML</span>, <span class="green">CSS</span> and <span class="green">Javascript</span>. Also its fully <span class="green">responsive</span> and should work on all screen sizes.',
    callToAction: 'Play',
    url: 'https://shooting-game.adamdunowski.pl/',
    filesUrl: 'https://github.com/111Adam111/Shooting-game',
    showButtons: true,
    screenshots: [shootingGame1, shootingGame2, shootingGame3, shootingGame4],
  },
  {
    title: 'portfolio',
    description:
      'This portfolio was created in <span class="green">ReactJS</span>. Hero image was genereted on <span class="green">midjourney</span> and ajusted to my needs in <span class="green">gimp</span>. Project also uses <span class="green">Sass</span> and is hosted on <span class="green">Firebase</span>.',
    callToAction: 'Files',
    url: 'https://github.com/111Adam111/Portfolio',
    showButtons: false,
    screenshots: [],
  },
  {
    title: 'To do list',
    description: `This fully responsive to-do list allows you to add, remove, or edit tasks. It also allows to change the color of the stripe on the left side of your to-do. It's built in <span class="green">React</span>.`,
    callToAction: 'Check it out',
    url: 'https://todolist.adamdunowski.pl/',
    filesUrl: 'https://github.com/111Adam111/To-do-list',
    showButtons: true,
    screenshots: [toDo1, toDo2, toDo3],
  },
  {
    title: 'Currency calculator',
    description:
      'This Currency Calculator is my first <span class="green">HTML</span>, <span class="green">CSS</span> and <span class="green">Javascript</span> project. It uses <span class="green">fetch API</span> to obtain data. Please note that I am aware of its flaws like obsolete design and I am planing to transfer this app to React soon.',
    callToAction: 'Check it out',
    url: '',
    filesUrl: 'https://github.com/111Adam111/Currency-converter',
    showButtons: true,
    screenshots: [currencyCalc1, currencyCalc2, currencyCalc3],
  },
];
