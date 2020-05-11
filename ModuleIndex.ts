import DataLoader from "./DataLoader";
import ModuleWaveEffect from "./ModuleWaveEffect";

export default class ModuleIndex {
  private _url: string;
  private _dataLoader: DataLoader;
  private _data: any;
  private _viewport: number;
  private _desktop: HTMLElement = document.querySelector(
    "picture .desktop-src"
  );
  private _tabland: HTMLElement = document.querySelector(
    "picture .tabland-src"
  );
  private _tabport: HTMLElement = document.querySelector(
    "picture .tabport-src"
  );
  private _mobland: HTMLElement = document.querySelector(
    "picture .mobland-src"
  );

  private _mobport: HTMLElement = document.querySelector(
    "picture .mobport-src"
  );

  private _moduleEffect: ModuleWaveEffect;
  private _URLimageToDisplace: string = "../assets/indexbg.jpg";
  private _URLDmap: string = "../assets/water.png";
  private _DOMContainer: HTMLElement = document.querySelector(
    "#index .pixi-container"
  );

  constructor(url: string, viewport: number) {
    this._url = url;
    this.getDatafromJSON();
    if (viewport > 1025) {
      this.setupPixi();
    }
  }

  private async getDatafromJSON() {
    this._dataLoader = new DataLoader(this._url);
    await this._dataLoader.loadData();
    this._data = this._dataLoader.getData;
    this.showInitialData();
  }

  private showInitialData() {
    this._desktop.setAttribute(
      "srcset",
      `${this._data[0].desktop_fallback.guid}`
    );
    this._tabland.setAttribute("srcset", `${this._data[0].tablet_land.guid}`);
    this._tabport.setAttribute("srcset", `${this._data[0].tablet_port.guid}`);
    this._mobport.setAttribute("src", `${this._data[0].mobile_port.guid}`);
    this._mobland.setAttribute("srcset", `${this._data[0].mobile_land.guid}`);
  }

  private setupPixi() {
    console.log("setting up pixi");
    this._moduleEffect = new ModuleWaveEffect(
      this._URLimageToDisplace,
      this._URLDmap,
      this._DOMContainer
    );
    this._moduleEffect.awake();
  }
}