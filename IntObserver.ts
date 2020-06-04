export class IntObserver {
  private elms: NodeListOf<HTMLElement>;
  constructor(elements: NodeListOf<HTMLElement>) {
    this.elms = elements;
    this.setupIntObserver(this.elms);
  }

  private setupIntObserver(elements: NodeListOf<HTMLElement>) {
    let config: any = {
      root: null, //document.querySelector('#some-element')
      rootMargin: "0px",
      threshold: [0, 0.25],
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.15) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, config);

    elements.forEach((elem) => {
      observer.observe(elem);
    });
  }
}
