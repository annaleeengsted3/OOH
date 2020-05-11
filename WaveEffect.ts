import * as PIXI from "pixi.js";

export class WaveEffect {
  private _app: PIXI.Application;
  private _width: number;
  private _height: number;
  private _sprite: PIXI.Sprite;
  private _URLimageToDisplace: string;
  private _URLDmap: string;
  private _DOMContainer: HTMLElement;
  private _dMap: PIXI.Sprite;
  private _waveSpeed: number = 0.8;

  constructor(image: string, dmap: string, container: HTMLElement) {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this._URLimageToDisplace = image;
    this._URLDmap = dmap;
    this._DOMContainer = container;
    this.setupPIXIApp();
  }

  private setupPIXIApp() {
    this._app = new PIXI.Application({
      resizeTo: window,
      width: this._width,
      height: this._height,
    });

    this._DOMContainer.appendChild(this._app.view);

    this.createSprite();
  }

  public onResize(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._sprite.width = this._width;
    this._sprite.height = this._height;
    this._dMap.x = this._width / 2;
    this._dMap.y = this._height / 2;

    this._app.renderer.resize(this._width, this._height);
  }
  private createSprite() {
    this._sprite = PIXI.Sprite.from(this._URLimageToDisplace);
    this._app.stage.addChild(this._sprite);
    this._sprite.width = this._width;
    this._sprite.height = this._height;
    this.addTopCover();
    this.createDMapFilter();
  }

  private addTopCover() {
    const toplayer: PIXI.Sprite = PIXI.Sprite.from("../assets/indexfg.png");
    this._app.stage.addChild(toplayer);
    toplayer.width = this._width;
    toplayer.height = this._height;
  }

  private createDMapFilter() {
    this._dMap = PIXI.Sprite.from(this._URLDmap);
    this._dMap.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    const displacementFilter = new PIXI.filters.DisplacementFilter(this._dMap);
    displacementFilter.padding = 20;
    this._dMap.position = this._sprite.position;
    this._app.stage.addChild(this._dMap);
    this._sprite.filters = [displacementFilter];
    displacementFilter.scale.x = 5;
    displacementFilter.scale.y = 10;
  }

  public start() {
    this._app.ticker.add(() => {
      this.renderBaseDMap();
    });
  }

  private renderBaseDMap() {
    this._dMap.y = this._dMap.y + this._waveSpeed;
    if (this._dMap.y > this._dMap.height) {
      this._dMap.y = 0;
    }
  }

  public stop() {
    this._app.ticker.stop();
  }
}
