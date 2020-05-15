import { Application } from "pixi.js";

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
const app = new Application();

// The application will create a canvas element for you that you
// can then insert into the DOM.
document.body.appendChild(app.view);
