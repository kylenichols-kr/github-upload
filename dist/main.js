System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports('default', main);

      // src/main.js
      function main () {
        module.import('./foo-9a396b7c.js').then(({ default: foo }) => console.log(foo));
      }

    }
  };
});
