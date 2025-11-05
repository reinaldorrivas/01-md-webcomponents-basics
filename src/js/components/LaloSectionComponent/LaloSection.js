class LaloSection extends HTMLElement {
  static get styles() {
    return /* css */ `
      section {
        background-color: violet;
        padding: 10px;
        margin: 0 10px;
      }

      h2 {
        color: red;
      }

      p {
        color: green;
      }
    `;
  }

  static get template() {
    const template = document.createElement("template");

    template.innerHTML = /* html */ `
      <style>
        ${LaloSection.styles}
      </style>
      <section>
        <h2>Lalo's Section</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    `;

    return template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#render();
  }

  changeParagraph(text) {
    const paragraph = this.shadowRoot.querySelector("p");
    paragraph.textContent = text;
  }

  #render() {
    const laloSection = LaloSection.template.content.cloneNode(true);

    this.shadowRoot.appendChild(laloSection);
  }
}

customElements.define("lalo-section", LaloSection);

const laloSection = document.body.querySelector("lalo-section");

setTimeout(() => {
  laloSection.changeParagraph("Pues esta es mi sección.");
}, 5000);
