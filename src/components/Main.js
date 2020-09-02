import { funComponent } from "../lib/funcompmodule.js";

funComponent({
  name: 'my-main',
  render: (state, props) => `<h1>I am the main component</h1>`  
})
