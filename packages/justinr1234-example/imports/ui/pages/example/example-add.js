import { AutoForm } from 'meteor/aldeed:autoform';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ExampleCollection, pkgJson } from 'meteor/justinr1234:example';
import { Router, autoformHooks, logFactory } from 'meteor/justinr1234:lib';

const debug = logFactory(pkgJson.name, __filename);

const onCreated = function onCreated() {
  const instance = this;
  const formSuccess = instance.formSuccess = new ReactiveVar(null);
  const autoformError = instance.autoformError = new ReactiveDict();
  const baseName = Router.routeMap.EXAMPLE_ADD.name;
  const successRoute = Router.routeMap.EXAMPLE_LIST.path;
  const hooks = autoformHooks({
    formSuccess,
    autoformError,
    baseName,
    successRoute,
    debug,
  });
  AutoForm.hooks(hooks);
};

const helpers = {
  collection: () => ExampleCollection,
};

const composedHelpers = helpers;

Template.EXAMPLE_ADD.onCreated(onCreated);
Template.EXAMPLE_ADD.helpers(composedHelpers);
