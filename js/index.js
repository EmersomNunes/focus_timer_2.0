import * as events from "./events.js";
import * as timer from "./timer.js"

export function start(minutes, seconds) {
    events.controls();
    events.audioControls();
    timer.countDown();
    timer.updateDisplay(minutes, seconds);
}