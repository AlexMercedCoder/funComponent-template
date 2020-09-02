import { funComponent } from "./lib/funcompmodule.js";
import "./components/Header";
import "./components/Main";
import "./components/Footer";

funComponent({
  name: "my-app",
  state: { hello: "hello world" },
  render: (state, props) => `<h1>${state.hello}</h1>
  <button>Goodbye</button>
  <my-header></my-header>
  <my-main></my-main>
  <my-footer></my-footer>`,
  postRender: (el, state, props) => {
    el.shadowRoot.querySelector("button").addEventListener("click", () => {
      el.setState({ hello: "Goodbye World" });
    });
  },
});

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<my-app></my-app>`;
