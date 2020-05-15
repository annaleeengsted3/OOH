import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";

export default class ModuleViden {
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
  private _image1: HTMLImageElement = document.querySelector(
    "#viden .images .img1"
  );
  private _image2: HTMLImageElement = document.querySelector(
    "#viden .images .img2"
  );
  private _image3: HTMLImageElement = document.querySelector(
    "#viden .images .img3"
  );
  private _image4: HTMLImageElement = document.querySelector(
    "#viden .images .img4"
  );
  private _event_link: HTMLAnchorElement = document.querySelector(
    "#event a.fb-button"
  );

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.viden;
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
    let dest = document.querySelector("#viden .images");
    let temp: HTMLTemplateElement = document.querySelector("template");

    this._data.forEach((image) => {
      let clone = <HTMLElement>temp.content.cloneNode(true);
      clone.querySelector("h3").innerHTML = image.title.rendered;
      clone.querySelector("img").src = image.billede.guid;
      clone.querySelector("img").alt = image.billede.post_title;
      dest.appendChild(clone);
    });
  }
}

let module_om_os: ModuleViden = new ModuleViden();
