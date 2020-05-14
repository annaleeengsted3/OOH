import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";

export default class ModuleEvent {
  private _urlParams = new URLSearchParams(window.location.search); //API der henter data fra afsendersiden, henter her url query string ?id=123 eller det id der er blevet sendt med fra afsendersiden
  private _id = this._urlParams.get("id"); //returnerer "id"
  private _url: string;
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
  private _imgs: any;

  private _viewport: number;
  private _e_image: HTMLImageElement = document.querySelector("#event img");

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.kommende_events + `${this._id}`;
    console.log(this._url);
    this.getDatafromJSON();
  }

  private async getDatafromJSON() {
    this._dataLoader = new DataLoader(this._url);
    await this._dataLoader.loadData();
    this._data = this._dataLoader.getData;
    this.showData();
    this.createObserver();
  }

  private createObserver() {
    const watchElements: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".load"
    );
    const observer: IntObserver = new IntObserver(watchElements);
  }

  private showData() {
    this._e_image.src = `${this._data.event_billede.guid}`;
    this._e_image.alt = `${this._data.event_billede.post_title}`;
    document.querySelector(
      "#event div.map"
    ).innerHTML = `${this._data.google_maps}`;
    //    this._desktop.setAttribute(
    //      "srcset",
    //      `${this._data[0].desktop_fallback.guid}`
    //    );
  }
}

let module_om_os: ModuleEvent = new ModuleEvent();
