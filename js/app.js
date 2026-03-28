import {$} from 'jquery';
import './vendor/sparkleHover.js';
import {animate} from './vendor/bg-animation.js';
import {loadConsole} from './vendor/console-animation.js'


document.addEventListener('DOMContentLoaded', () => {
  loadConsole()
  console.info('App loaded', 'ontouchstart' in window)
  if (!('ontouchstart' in window)) {
    animate();
  }

  const timeMachine = document.querySelector('.time-machine--container')
  const portefolioVersions = document.querySelector('.time-machine--versions-container')

  timeMachine.addEventListener('click', () => {
    timeMachine.classList.toggle('time-machine--container--open');
    timeMachine.classList.toggle('time-machine--container-animation')
    portefolioVersions.classList.toggle('time-machine--versions-container--open');
    if (!portefolioVersions.classList.contains('time-machine--versions-container--open') ) {
      portefolioVersions.classList.toggle('time-machine--versions-container--close');
    } else if (portefolioVersions.classList.contains('time-machine--versions-container--close')) {
      portefolioVersions.classList.toggle('time-machine--versions-container--close');
    }

  })

  $('.time-machine--container').sparkleHover({
    colors: ['#ffffff', "#E8F4FF", '#C9E8FF'],
    num_sprites: 15,
    lifespan: 10000,
    radius: 900,
    sprite_size: 2,
    opacity: 0.4,
    shape: 'circle'
  });

})


