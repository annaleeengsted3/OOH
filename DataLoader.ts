export default class DataLoader {
  private _URL: string;
  private _data: JSON[];

  constructor(url: string) {
    this._URL = url;
  }

  public async loadData() {
    let jsonData = await fetch(this._URL);
    this._data = await jsonData.json();
  }

  public get getData() {
    return this._data;
  }
}
