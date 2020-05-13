export default class DataLoader {
  //  private _URLs: string[];
  private _URL: string;
  private _data: JSON[];

  // constructor(url: string[]) {
  //   this._URLs = url;
  // }

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

  // public loadData() {
  //   Promise.all(
  //     this._URLs.map((url) => fetch(url).then((response) => response.json()))
  //   ).then((data) => {
  //     this._data = data;
  //     console.log(data);
  //     return this._data;
  //   });
  // }

  // public get getData() {
  //   return this._data;
  // }
}
