export class IntObserver {
  private elms: NodeListOf<HTMLElement>;
  constructor(elements: NodeListOf<HTMLElement>) {
    this.elms = elements;
    this.setupIntObserver();
  }

  private setupIntObserver() {
    let config: any = {
      root: null, //document.querySelector('#some-element')
      rootMargin: "0px",
      threshold: [0, 0.25],
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.intersectionRatio > 0.25) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, config);

    this.elms.forEach((elem) => {
      observer.observe(elem);
    });
  }
}
