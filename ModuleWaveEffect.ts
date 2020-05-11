import { WaveEffect } from "./WaveEffect";

export default class ModuleWaveEffect {
  private _effect: WaveEffect;
  constructor(image: string, dmap: string, container: HTMLElement) {
    this.build(image, dmap, container);
  }

  private build(image, dmap, container): void {
    this._effect = new WaveEffect(image, dmap, container);
  }

  public awake(): void {
    this._effect.start();
    window.addEventListener("resize", this.onResize);
  }

  private stopEffect() {
    this._effect.stop();
  }

  private onResize = () => {
    this._effect.onResize(window.innerWidth, window.innerHeight);
  };

  protected sleep(): void {
    // document
    //   .querySelector(".Module-WaveEffect")
    //   .removeEventListener("click", this.stopEffect);
  }
}
