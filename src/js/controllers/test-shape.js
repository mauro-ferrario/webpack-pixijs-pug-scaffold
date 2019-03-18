import PixiBase from "./../components/PixiBase";

export default class PixiTest extends PixiBase{
  constructor(container, e, w = 500, h = 500, fullscreen){
    super(container, w, h, fullscreen);
  }

  createPIXIApp(container, w, h, options = {}){
    super.createPIXIApp(container, w, h, options);
    let circle = new  PIXI.Graphics();
    circle.beginFill(0x9966FF);
    circle.drawCircle(10.0, 10.0, 50);
    circle.endFill();
    circle.x = 64;
    circle.y = 130;
    this.app.stage.addChild(circle);
  }

  update()
  {
    super.update();
  }

  onResize(){
    super.onResize();
  }
}