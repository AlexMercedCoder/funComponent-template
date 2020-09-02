//////////////
//CaptureProps
/////////////

export const captureProps = (element) => {
  const att = [...element.attributes];
  const entries = att.map((value) => {
    return [value.name, value.value];
  });

  return Object.fromEntries(entries);
};

/////////////////////////
//FunComponent
////////////////////////

export const funComponent = (config) => {
  class ThisComponent extends HTMLElement {
    constructor() {
      super();
      this.state = config.state;
      this.props = captureProps(this);
      this.attachShadow({ mode: "open" });
      this.rend();
      config.construct ? config.construct(this) : null;
    }

    rend() {
      this.props = captureProps(this);
      this.shadowRoot.innerHTML = config.render(this.state, this.props);
      this.postRender(this, this.state, this.props);
    }

    postRender(element, state, props) {
      config.postRender ? config.postRender(element, state, props) : "";
    }

    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.rend();
    }

    connectedCallback() {
      config.connected ? config.connected(this) : null;
    }

    disconnectedCallback() {
      config.disconnected ? config.disconnected(this) : null;
    }

    hookGen() {
      if (config.hookGen) {
        return config.hookGen(this);
      }
    }
  }

  window.customElements.define(config.name, ThisComponent);
};
