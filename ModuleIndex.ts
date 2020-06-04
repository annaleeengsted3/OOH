import "./stylesheets/global.scss";
import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
// import ModuleWaveEffect from "./ModuleWaveEffect";

export default class ModuleIndex {
  private _url: string;
  private _urlNextEvent: string;
  private _dataURLs: {
    index: string;
    omos: string;
    hvem_er_vi: string;
    kommende_events: string;
    komm_events_billeder: string;
    viden: string;
    affaldsdb: string;
    spoerg_en_biolog: string;
    viden_og_raad: string;
    nyttige_links: string;
    kontakt: string;
  };
  private _dataLoader: DataLoader;
  private _data: any;
  private _events: any;
  private _nextEventLink: HTMLAnchorElement = document.querySelector(
    ".index-info a"
  );
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

  private hero: HTMLImageElement = document.querySelector("img.imgA");

  // private _moduleEffect: ModuleWaveEffect;
  private _URLimageToDisplace: string = "../assets/indexbg.jpg";
  private _URLDmap: string = "../assets/water.png";
  private _DOMContainer: HTMLElement = document.querySelector(
    "#index .pixi-container"
  );

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.index;
    this._urlNextEvent = this._dataURLs.kommende_events;
    this._viewport = window.innerWidth;
    this.getDatafromJSON();
    // if (this._viewport > 1025) {
    //   this.setupPixi();
    // }
    document
      .querySelector("header")
      .addEventListener("mouseover", this.addFade);
    document
      .querySelector("header")
      .addEventListener("mouseout", this.removeFade);
  }

  private async getDatafromJSON() {
    this._dataLoader = new DataLoader(this._url);
    await this._dataLoader.loadData();
    this._data = this._dataLoader.getData;
    this.getNextEventData();
  }

  private async getNextEventData() {
    this._dataLoader = new DataLoader(this._urlNextEvent);
    await this._dataLoader.loadData();
    this._events = this._dataLoader.getData;
    this._events.sort((a, b) => {
      if (b.dato_kode < a.dato_kode) {
        return 1;
      } else {
        return -1;
      }
    });
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

    document.querySelector(
      ".index-txt"
    ).innerHTML = `${this._data[0].forside_text}`;

    document.querySelector(
      ".index-info .location"
    ).innerHTML = `${this._events[0].dato}. ${this._events[0].dato_maaned}: ${this._events[0].title.rendered}`;
    this._nextEventLink.href = `event.html?id=${this._events[0].id}`;
  }

  // private setupPixi() {
  //   console.log("setting up pixi");
  //   this._moduleEffect = new ModuleWaveEffect(
  //     this._URLimageToDisplace,
  //     this._URLDmap,
  //     this._DOMContainer
  //   );
  //   this._moduleEffect.awake();
  // }

  private addFade = () => {
    this.hero.classList.add("hide");
  };
  private removeFade = () => {
    this.hero.classList.remove("hide");
  };
}

let index: ModuleIndex = new ModuleIndex();
