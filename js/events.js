import { buttons, sons } from "./elemtens.js";
import * as actions from "./actions.js";

export function controls() {
  buttons.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

export function audioControls() {
  sons.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    actions[action]();
  });
}
