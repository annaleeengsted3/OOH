import "./stylesheets/global.scss";
import DataLoader from "./DataLoader";
import ModuleHeader from "./ModuleHeader";
import ModuleIndex from "./ModuleIndex";
import { DataURLs } from "./DataURLs";

export class App {
  private _viewport: number;
  private _dataloader: DataLoader;
  private _header: ModuleHeader;
  private _index: ModuleIndex;
  private _dataURLs: {
    index: string;
    omos: string;
    kommende_events: string;
    viden: string;
    affaldsdb: string;
    spoerg_en_biolog: string;
    viden_og_raad: string;
    nyttige_links: string;
    kontakt: string;
  };

  constructor() {
    this.build();
  }

  private build() {
    window.addEventListener("load", this.awake);
  }

  private awake = () => {
    this._viewport = this.setViewport();
    this._dataURLs = new DataURLs().getURLS;
    this.setupModules();

    // this._dataloader = new ModuleDataLoader();
  };

  private setViewport() {
    return window.innerWidth;
  }

  private setupModules() {
    this._header = new ModuleHeader(this._viewport);
    this._index = new ModuleIndex(this._dataURLs.index, this._viewport);
  }
}

let app: App = new App();
