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
    this.getImgfromJSON();
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

    this._events.forEach((event) => {
      let template = `

                                           <article class = "event load">
                                           <div class="left">
                                            <h3>${event.dato}</h3>
                                            <div>
                                             <p class="month">${event.dato_maaned}</p>
                                             <p class="time">${event.dato_tidsinterval}</p>
                                            </div>
                                           </div>

                                           <div class="right">
                                           <h3>${event.title.rendered}</h3>
                                           <p>${event.kort_tekst}</p>
                                           <p class="bold">${event.adresse_2}</p>
                                           <div>
                                           <a href="event.html?id=${event.id}" class="read-more-button">Læs mere</a>
                                           <a href="${event.fb_link}" class="fb-button" target="_blank">Meld dig til 
       <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9.089" viewBox="0 0 8 9.089"><g transform="translate(-0.394 0.455)"><rect width="8" height="9" transform="translate(0.394 -0.455)" fill="none"/><path d="M82.87,8.468V4.61h1.317L84.375,3.1H82.87V2.164c0-.423.141-.753.753-.753h.8V.047C84.234.047,83.764,0,83.246,0a1.816,1.816,0,0,0-1.929,1.976V3.1H80V4.61h1.317V8.468Z" transform="translate(-77.927 0.167)" fill="#f8f9fa" fill-rule="evenodd"/></g></svg>
                                           </a>
                                           </div>
                                           </div>
                                            </article">
                   `;
      dest.insertAdjacentHTML("beforeend", template);
    });

    this._ke_image.src = `${this._imgs[0].forside_billede.guid}`;
  }
}

let module_om_os: ModuleKommendeEvents = new ModuleKommendeEvents();
