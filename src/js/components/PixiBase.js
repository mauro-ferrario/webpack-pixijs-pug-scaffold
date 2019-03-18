import * as PIXI from 'pixi.js';

export default class PixiBase{
  constructor(container, w = 100, h = 100, fullscreen = false, options = {}){
    this.fullscreen = fullscreen;
    this.createPIXIApp(container, w, h, options);
    this.app.width = w;
    this.app.height = h;
    this.addEvent(window, "resize", this.onResize.bind(this));
    this.onResize();
  }

  createPIXIApp(container, w = 100, h= 100, options = {}){
    this.app = new PIXI.Application(w,h, options);
    this.app.ticker.add(this.update.bind(this));
    container.appendChild(this.app.view);
  }

  update(){
  }

  addEvent(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  }

  onResize(){
    if(this.fullscreen)
      this.resizeFullscreen();
    else
      this.resizeNoFullscreen();
  }

  resizeNoFullscreen(){
    this.app.view.style.width = this.app.width + "px";
    this.app.view.style.height = this.app.height + "px";
    this.app.renderer.resize(this.app.width, this.app.height)

  }

  resizeFullscreen(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.app.view.style.width = width + "px";
    this.app.view.style.height = height + "px";
    this.app.width = width;
    this.app.height = height;
    this.app.renderer.resize(width, height)
  }
}