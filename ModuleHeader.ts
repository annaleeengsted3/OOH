export default class ModuleHeader {
  private _mobilenav: HTMLElement;
  private _mobileopen: HTMLElement;
  private _mobileclose: HTMLElement;
  private _mobileLogo: HTMLElement;
  private _navwidth: string = "100vw";

  constructor(viewport: number) {
    this._mobilenav = document.querySelector("#mNav");
    this._mobileopen = document.querySelector(".openbtn");
    this._mobileclose = document.querySelector(".closebtn");
    this._mobileLogo = document.querySelector(".mLogo");

    if (viewport < 1025) {
      this.addListeners(viewport);
    }
  }

  private addListeners(viewport: number) {
    if (viewport > 400) {
      this._navwidth = "60vw";
    }
    this._mobileopen.addEventListener("click", this.openNav);
    this._mobileclose.addEventListener("click", this.closeNav);
  }

  private openNav = () => {
    console.log("clicked open");
    this._mobilenav.style.width = this._navwidth;
    this._mobileclose.style.display = "block";
  };
  private closeNav = () => {
    console.log("clicked closed");
    this._mobileclose.style.display = "none";
    this._mobilenav.style.width = "0vw";
  };
}
