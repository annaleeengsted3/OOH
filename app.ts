import "./stylesheets/global.scss";
import ModuleDataLoader from "./ModuleDataLoader";
import ModuleHeader from "./ModuleHeader";

export class App {
  private _viewport: number;
  private _dataloader: ModuleDataLoader;
  private _header: ModuleHeader;
  private _dataURL: string = "";

  constructor() {
    this.build();
  }

  private build() {
    window.addEventListener("load", this.awake);
  }

  private awake = () => {
    this.setViewport();
    this._dataloader = new ModuleDataLoader();
  };

  private setViewport() {
    this._viewport = window.innerWidth;
    this._header = new ModuleHeader(this._viewport);
  }
}

let app: App = new App();
