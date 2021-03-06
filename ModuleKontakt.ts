import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";

export default class ModuleKontakt {
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
  private _img1: HTMLImageElement = document.querySelector("img.img1");
  private _img2: HTMLImageElement = document.querySelector("img.img2");
  private _fblink: HTMLAnchorElement = document.querySelector(".fb-link");
  private _instalink: HTMLAnchorElement = document.querySelector(".insta-link");

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.kontakt;
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
    document.querySelector(".phone-number").innerHTML = data[0].telefonnummer;
    document.querySelector(".email").innerHTML = data[0].email;
    this._fblink.href = data[0].link_til_fb;
    this._instalink.href = data[0].link_til_insta;

    this._img1.src = data[0].billede_1.guid;
    this._img2.src = data[0].billede_2.guid;
    this._img1.alt = data[0].billede_1.post_title;
    this._img2.alt = data[0].billede_2.post_title;
  }
}

let module_om_os: ModuleKontakt = new ModuleKontakt();
