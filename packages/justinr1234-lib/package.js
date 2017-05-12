/* globals Package, Npm */
Package.describe({
  name: 'justinr1234:lib',
  version: '0.0.1',
  summary: 'justinr1234 Lib',
  documentation: 'README.md',
  git: 'https://github.com/justinr1234/opinionated-meteor-application-template/tree/master/packages/justinr1234-lib',
});

Npm.depends({
  izitoast: '1.1.1',
  debug: '2.6.3',
});

Package.onUse(api => {
  // If no version is specified for an `api.use` dependency, use the one defined
  // in Meteor 1.4.3.1.
  api.versionsFrom('1.4.3.1');
  api.use('reactive-var');
  api.use('reactive-dict');
  api.use('ecmascript');
  api.use('random');
  api.use('underscore');

  // CLIENT LIB
  api.use('templating', 'client');
  api.use('kadira:flow-router');

  // COMMON LIB
  api.use('ongoworks:security');

  // MAIN MODULES
  api.mainModule('client/main.js', 'client');
  api.mainModule('server/main.js', 'server');
});

Package.onTest(api => {
  api.use('justinr1234:lib');
  api.use('practicalmeteor:chai');
  api.use('practicalmeteor:mocha');
  api.use('dispatch:mocha');
});
