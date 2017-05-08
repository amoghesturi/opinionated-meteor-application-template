import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ExampleCollection, pkgJson } from 'meteor/justinr1234:example';
import { Router, logFactory, autoformHandlers } from 'meteor/justinr1234:lib';

const debug = logFactory(pkgJson.name, __filename);

const onCreated = function onCreated() {
  const instance = this;
  const formSuccess = instance.formSuccess = new ReactiveVar(false);
  const autoformError = instance.autoformError = new ReactiveDict(false);
  const autoFormHooks = autoformHandlers({ formSuccess, autoformError, debug });
  AutoForm.hooks({
    EXAMPLE_ADD_FORM: autoFormHooks,
  });

  instance.autorun(() => {
    if (formSuccess.get()) {
      FlowRouter.go(Router.routeMap.EXAMPLE_LIST.path);
    }
  });
};

const helpers = {
  collection: () => ExampleCollection,
};

const composedHelpers = helpers;

Template.EXAMPLE_ADD.onCreated(onCreated);
Template.EXAMPLE_ADD.helpers(composedHelpers);
