/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/animate.css/animate.min.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('vendor/light-bootstrap-dashboard/css/light-bootstrap-dashboard.css');
  app.import('vendor/light-bootstrap-dashboard/css/pe-icon-7-stroke.css');

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('vendor/light-bootstrap-dashboard/js/light-bootstrap-dashboard.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
