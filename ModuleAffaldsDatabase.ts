import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";
import counterUp from "counterup2";

export default class ModuleAffaldsDatabase {
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
  private _observer: IntObserver;
  private _watchelements: NodeListOf<HTMLElement>;
  private _image: HTMLImageElement = document.querySelector(".img2");
  private _dataviz: HTMLImageElement = document.querySelector(".data-viz");
  private _imgA: HTMLImageElement = document.querySelector("img.imgA");
  private _countelement: HTMLElement = document.querySelector(
    ".details .counter"
  );

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.affaldsdb;
    this.getDatafromJSON();
  }

  private async getDatafromJSON() {
    this._dataLoader = new DataLoader(this._url);
    await this._dataLoader.loadData();
    this._data = this._dataLoader.getData;
    this.showData(this._data);
    this.createObserver();
  }

  private createObserver() {
    this._watchelements = document.querySelectorAll(".load");
    this._observer = new IntObserver(this._watchelements);
  }

  private showData(data: any) {
    document.querySelector(".big").innerHTML = data[0].kg_indsamlet_affald;
    document.querySelector(".latest").innerHTML =
      data[0].sidste_events_lokation;
    document.querySelector(".latest-kg").innerHTML =
      data[0].kg_indsamlet_til_sidste_event;
    document.querySelector(".latest-kg").innerHTML =
      data[0].kg_indsamlet_til_sidste_event;
    this._dataviz.src = data[0].data_visualisering.guid;
    this._dataviz.alt = data[0].data_visualisering.post_title;
    document.querySelector(".subtitle").innerHTML = data[0].subtitle;
    document.querySelector(".content").innerHTML = data[0].tekstbeskrivelse;
    this._image.src = data[0].billede.guid;
    this._image.alt = data[0].billede.post_title;

    this.startCounter();
  }

  private startCounter() {
    counterUp(this._countelement, {
      duration: 2000,
      delay: 50,
    });
    this._imgA.style.animation = "fade 6000ms both";
  }
}

let module_om_os: ModuleAffaldsDatabase = new ModuleAffaldsDatabase();
