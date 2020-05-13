export class DataURLs {
  private _URLS: {
    index: string;
    omos: string;
    hvem_er_vi: string;
    kommende_events: string;
    viden: string;
    affaldsdb: string;
    spoerg_en_biolog: string;
    viden_og_raad: string;
    nyttige_links: string;
    kontakt: string;
  } = {
    index: "http://osomhavet.dk/wordpress/wp-json/wp/v2/forside_billeder/",
    omos: "http://osomhavet.dk/wordpress/wp-json/wp/v2/om_os/",
    hvem_er_vi: "http://osomhavet.dk/wordpress/wp-json/wp/v2/hvem_er_vi/",
    kommende_events:
      "http://osomhavet.dk/wordpress/wp-json/wp/v2/kommende_events/",
    viden: "http://osomhavet.dk/wordpress/wp-json/wp/v2/viden_navigation/",
    affaldsdb: "http://osomhavet.dk/wordpress/wp-json/wp/v2/affalds-database/",
    spoerg_en_biolog:
      "http://osomhavet.dk/wordpress/wp-json/wp/v2/sprg_en_biolog/",
    viden_og_raad:
      "http://osomhavet.dk/wordpress/wp-json/wp/v2/viden_og_gode_rd/",
    nyttige_links:
      "http://osomhavet.dk/wordpress/wp-json/wp/v2/media?parent=136",
    kontakt: "http://osomhavet.dk/wordpress/wp-json/wp/v2/kontakt/",
  };

  public get getURLS() {
    return this._URLS;
  }
}
