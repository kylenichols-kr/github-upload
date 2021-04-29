System.register(['./foo-9a396b7c.js'], function (exports) {
    'use strict';
    var foo;
    return {
        setters: [function (module) {
            foo = module.default;
        }],
        execute: function () {

            exports('default', main2);

            // src/main2.js
            function main2() {
                console.log(foo);
            }

        }
    };
});
