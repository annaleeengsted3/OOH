import ModuleHeader from "./ModuleHeader";

export class App {
  private _viewport: number;

  private _header: ModuleHeader;
  private _dataURLs: {
    index: string;
    omos: string;
    hvem_er_vi: string;
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

    this.setupModules();

    // this._dataloader = new ModuleDataLoader();
  };

  private setViewport() {
    return window.innerWidth;
  }

  private setupModules() {
    this._header = new ModuleHeader(this._viewport);
  }
}

let app: App = new App();
