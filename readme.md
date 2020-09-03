# funComponent Template

`npm run dev` starts a development server

`npm run build` builds final project in dist folder

Documentation for mercedui => https://github.com/AlexMercedCoder/funComponent

- Keep in mind components made with this library use the shadow dom so you'll need to create the styling from within the shadow dom. To use sass in the shadow dom you need to modify webpack so the Sass is turned into a css string that can then be interpolated into style tags in your components shadow dom.

Sass in Web Components Tutorial
https://dev.to/m4thieulavoie/how-i-managed-to-use-scss-inside-web-components-3lk9

*To Change the Output HTML title, change the title in the webpack.config.js
