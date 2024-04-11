import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elemtens.js";
import * as sounds from "./sounds.js";

export function play() {
  state.isRunning = true;
  timer.countDown();
}

export function pause() {
  state.isRunning = false;
}

export function increase() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes = minutes + 5;

  if (minutes >= 60) {
    return (minutes = 60);
  }

  timer.updateDisplay(minutes, seconds);
}

export function decrease() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes = minutes - 5;

  if (minutes <= 0) {
    return (minutes = state.minutes);
  }

  timer.updateDisplay(minutes, seconds);
}

//Sounds

let currentSound = null;

export function toggleSound(sound, buttonId) {
  const button = document.getElementById(buttonId);

  if (currentSound === sound && !currentSound.paused) {
    currentSound.pause();
    currentSound = null;
    button.classList.remove('playing');
  } else {
    if (currentSound) {
      currentSound.pause();
      const prevButton = document.querySelector('.playing');

      if (prevButton) {
        prevButton.classList.remove('playing');
      };
    };
    currentSound = sound;
    sound.play();
    button.classList.add('playing');
  };
};

export function soundTree() {
  toggleSound(sounds.florest, 'tree');
}

export function soundRain() {
  toggleSound(sounds.rain, 'cloud');
}

export function soundCoffeShop() {
  toggleSound(sounds.coffeShop, 'storeCoffe');
}

export function soundFire() {
  toggleSound(sounds.fireplace, 'fireland');
}