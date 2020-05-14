import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";

export default class ModuleOmOs {
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
  private _urlEmployees: string;
  private _dataLoader: DataLoader;
  private _data: any;
  private _employees: any;
  private _viewport: number;
  private _vmimage: HTMLImageElement = document.querySelector(
    "#om-os .vores-mission img"
  );
  private _vaimage1: HTMLImageElement = document.querySelector(
    "#om-os .vores-aktiviteter img.img-1"
  );
  private _vaimage2: HTMLImageElement = document.querySelector(
    "#om-os .vores-aktiviteter img.img-2"
  );
  private _vaimage3: HTMLImageElement = document.querySelector(
    "#om-os .vores-aktiviteter img.img-3"
  );
  private _gimage: HTMLImageElement = document.querySelector(
    "#om-os .galleri .img-container img.galleri"
  );

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.omos;
    this._urlEmployees = this._dataURLs.hvem_er_vi;
    this.getDatafromJSON();
  }

  private async getDatafromJSON() {
    this._dataLoader = new DataLoader(this._url);
    await this._dataLoader.loadData();
    this._data = this._dataLoader.getData;
    this.getEmployees();
  }

  private async getEmployees() {
    this._dataLoader = new DataLoader(this._urlEmployees);
    await this._dataLoader.loadData();
    this._employees = this._dataLoader.getData;
    this.populateEmployees();
    this.createObserver();
  }

  private createObserver() {
    const watchElements: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".load"
    );
    const observer: IntObserver = new IntObserver(watchElements);
  }

  private populateEmployees() {
    let dest: HTMLElement = document.querySelector("#om-os .hvem-er-vi");
    dest.innerHTML = "";

    this._employees.forEach((volunteer) => {
      let template = `
      
                        <article class = "volunteer load">
                        <img src = "${volunteer.billede.guid}" alt="${volunteer.billede.post_title}">
                        <h3 class="volunteer-1">${volunteer.navn}</h3>
<div class="volunteer_txt">${volunteer.beskrivelse}

                        </article>
`;
      dest.insertAdjacentHTML("beforeend", template);
    });

    //Vores mission section
    document.querySelector(
      "#om-os .vores-mission h1"
    ).innerHTML = `${this._data[0].title.rendered}`;
    this._vmimage.src = `${this._data[0].vores_mission_billede.guid}`;
    document.querySelector(
      "#om-os .vores-mission article"
    ).innerHTML = `${this._data[0].vores_mission_tekst}`;

    //Vores aktiviteter section
    //Sub1
    document.querySelector(
      "#om-os .vores-aktiviteter h3.subtitle-1"
    ).innerHTML = `${this._data[0].vores_aktiviteter_subtitle_1}`;
    //txt1
    document.querySelector(
      "#om-os .vores-aktiviteter article.text-1"
    ).innerHTML = `${this._data[0].vores_aktiviteter_tekst_1}`;
    //Sub2
    document.querySelector(
      "#om-os .vores-aktiviteter h3.subtitle-2"
    ).innerHTML = `${this._data[0].vores_aktiviteter_subtitle_1b}`;
    //txt2
    document.querySelector(
      "#om-os .vores-aktiviteter article.text-2"
    ).innerHTML = `${this._data[0].vores_aktiviteter_tekst_2}`;
    //img1
    this._vaimage1.src = `${this._data[0].vores_aktiviteter_billede_1.guid}`;
    //sub3
    document.querySelector(
      "#om-os .vores-aktiviteter h3.subtitle-3"
    ).innerHTML = `${this._data[0].vores_aktiviteter_subtitle_2}`;
    //txt3
    document.querySelector(
      "#om-os .vores-aktiviteter article.text-3"
    ).innerHTML = `${this._data[0].vores_aktiviteter_tekst_3}`;
    //img2
    this._vaimage2.src = `${this._data[0].vores_aktiviteter_billede_2.guid}`;
    //sub4
    document.querySelector(
      "#om-os .vores-aktiviteter h3.subtitle-4"
    ).innerHTML = `${this._data[0].vores_aktiviteter_subtitle_3}`;
    //txt4
    document.querySelector(
      "#om-os .vores-aktiviteter article.text-4"
    ).innerHTML = `${this._data[0].vores_aktiviteter_tekst_4}`;
    //img3
    this._vaimage3.src = `${this._data[0].vores_aktiviteter_billede_3.guid}`;
    //gall
    this._gimage.src = `${this._data[0].billeder_galleribillede.guid}`;

    //    this._desktop.setAttribute(
    //      "srcset",
    //      `${this._data[0].desktop_fallback.guid}`
    //    );
  }
}

let module_om_os: ModuleOmOs = new ModuleOmOs();
