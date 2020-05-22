import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";

export default class ModuleKommendeEvents {
  private _url: string;
  private _url2: string;
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
  private _events: any;
  private _imgs: any;

  private _viewport: number;
  private _ke_image: HTMLImageElement = document.querySelector(
    "#kommende-events img"
  );

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.kommende_events;
    this._url2 = this._dataURLs.komm_events_billeder;

    this.getDatafromJSON();
  }

  private async getDatafromJSON() {
    this._dataLoader = new DataLoader(this._url);
    await this._dataLoader.loadData();
    this._events = this._dataLoader.getData;
    console.log(this._events);
    this.sortData();
    this.getImgfromJSON();
  }

  private sortData() {
    // sorter races efter deres løbstidspunkt, med ældste først
    this._events.sort((a, b) => {
      if (b.dato_kode < a.dato_kode) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(this._events);
  }

  private async getImgfromJSON() {
    this._dataLoader = new DataLoader(this._url2);
    await this._dataLoader.loadData();
    this._imgs = this._dataLoader.getData;
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
    let dest: HTMLElement = document.querySelector(
      "#kommende-events .events-container"
    );
    dest.innerHTML = "";
    let temp: HTMLTemplateElement = document.querySelector("template");

    this._events.forEach((event) => {
      let clone = <HTMLElement>temp.content.cloneNode(true);
      clone.querySelector(".left h3").innerHTML = event.dato;
      clone.querySelector(".left .month").innerHTML = event.dato_maaned;
      clone.querySelector(".left .time").innerHTML = event.dato_tidsinterval;

      clone.querySelector(".right h3").innerHTML = event.title.rendered;
      clone.querySelector(".right .first-p").innerHTML = event.kort_tekst;
      clone.querySelector(".right .bold").innerHTML = event.adresse_2;

      dest.appendChild(clone);
    });

    this._ke_image.src = `${this._imgs[0].forside_billede.guid}`;
  }
}

let module_om_os: ModuleKommendeEvents = new ModuleKommendeEvents();
