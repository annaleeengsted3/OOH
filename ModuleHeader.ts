export default class ModuleHeader {
  private _mobilenav: HTMLElement = document.querySelector("#mNav");
  private _mobileopen: HTMLElement = document.querySelector(".openbtn");
  private _mobileclose: HTMLElement = document.querySelector(".closebtn");
  private _headerImg: HTMLElement = document.querySelector("#header-img");
  private _navwidth: string = "100vw";

  constructor(viewport: number) {
    if (viewport < 1025) {
      this.addListeners(viewport);
    } else {
      this.addDesktopListeners();
    }
  }

  private addDesktopListeners() {
    document
      .querySelector("header")
      .addEventListener("mouseover", this.addHoverEffect);
    document
      .querySelector("header")
      .addEventListener("mouseout", this.removeHoverEffect);
  }

  private addHoverEffect = () => {
    document.querySelector("header").classList.add("move");

    this._headerImg.classList.add("fade");
  };

  private removeHoverEffect = () => {
    document.querySelector("header").classList.remove("move");
    this._headerImg.classList.remove("fade");
  };

  private addListeners(viewport: number) {
    if (viewport > 400) {
      this._navwidth = "60vw";
    }
    this._mobileopen.addEventListener("click", this.openNav);
    this._mobileclose.addEventListener("click", this.closeNav);
  }

  private openNav = () => {
    this._mobilenav.style.width = this._navwidth;
    this._mobileclose.style.display = "block";
  };
  private closeNav = () => {
    this._mobileclose.style.display = "none";
    this._mobilenav.style.width = "0vw";
  };
}
