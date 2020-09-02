import { funComponent } from "../lib/funcompmodule.js";

funComponent({
  name: "my-footer",
  render: (state, props) => `<h1>I am the footer component</h1>`,
});
