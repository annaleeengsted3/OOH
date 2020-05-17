import DataLoader from "./DataLoader";
import { DataURLs } from "./DataURLs";
import { IntObserver } from "./IntObserver";

export default class ModuleVidensBlog {
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

  constructor() {
    this._dataURLs = new DataURLs().getURLS;
    this._url = this._dataURLs.viden_og_raad;
    this.addListeners();
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

  private showData(posts: any) {
    document.querySelectorAll(".blog-posts article").forEach((article) => {
      article.classList.remove("visible");
    });

    let dest = document.querySelector("section .blog-posts");
    dest.innerHTML = " ";
    let temp: HTMLTemplateElement = document.querySelector("template");

    posts.forEach((post) => {
      let clone = <HTMLElement>temp.content.cloneNode(true);
      clone.querySelector("h3").innerHTML = post.title.rendered;
      clone.querySelector("p.date").innerHTML = post.dato;
      clone.querySelector("div.content").innerHTML = post.tekst;
      clone.querySelector("a").innerHTML = post.linktitel;
      clone.querySelector("a").href = post.link;
      clone.querySelector("img").src = post.billede.guid;
      clone.querySelector("img").alt = post.billede.post_title;
      clone.querySelector(".category").innerHTML = post.kategori[0];
      clone.querySelector("article").classList.add("visible");

      dest.appendChild(clone);
    });
  }

  private addListeners() {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", this.getFilterParam);
    });
  }

  private getFilterParam = (event: MouseEvent) => {
    const button = event.target as HTMLElement;
    const filterParam = button.getAttribute("data-category");
    this.filterPosts(filterParam);
    this.showActiveButton(button);
  };

  private filterPosts(filterParam: string) {
    let posts = this._data.filter(filterByCategory);
    function filterByCategory(post) {
      if (post.kategori[0] === filterParam) {
        return true;
      } else if (filterParam === "alle") {
        return true;
      } else {
        return false;
      }
    }

    this.showData(posts);
  }

  private showActiveButton(button: HTMLElement) {
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  }
}

let module_om_os: ModuleVidensBlog = new ModuleVidensBlog();
