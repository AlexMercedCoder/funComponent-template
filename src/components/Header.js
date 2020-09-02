import { funComponent } from "../lib/funcompmodule.js";

funComponent({
  name: 'my-header',
  render: (state, props) => `<h1>I am the header component</h1>`  
})