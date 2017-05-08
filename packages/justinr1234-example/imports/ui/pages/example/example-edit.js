import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ExampleCollection, publicationNames, pkgJson } from 'meteor/justinr1234:example';
import { subscriptionHandlers,
  subscriptionHandlersHelpers,
  logFactory,
  Router,
  autoformHandlers } from 'meteor/justinr1234:lib';

const debug = logFactory(pkgJson.name, __filename);

const onCreated = function onCreated() {
  const instance = this;
  const dataLoading = instance.dataLoading = new ReactiveVar(true);
  const dataLoadingErrors = instance.dataLoadingErrors = new ReactiveDict();
  const composedHandlers = subscriptionHandlers({ dataLoading, dataLoadingErrors, debug });

  const formSuccess = instance.formSuccess = new ReactiveVar(false);
  const autoformError = instance.autoformError = new ReactiveDict(false);
  const autoFormHooks = autoformHandlers({ formSuccess, autoformError, debug });
  AutoForm.hooks({
    EXAMPLE_EDIT_FORM: autoFormHooks,
  });

  instance.subscribe(publicationNames.EXAMPLE_PUBLICATION, composedHandlers);

  instance.autorun(() => {
    if (formSuccess.get()) {
      FlowRouter.go(Router.routeMap.EXAMPLE_LIST.path);
    }
  });
};

const helpers = {
  getDoc: () => ExampleCollection.findOne(FlowRouter.getParam('_id')),
  collection: () => ExampleCollection,
};

export const composedHelpers = { ...helpers, ...subscriptionHandlersHelpers() };

Template.EXAMPLE_EDIT.onCreated(onCreated);
Template.EXAMPLE_EDIT.helpers(composedHelpers);
