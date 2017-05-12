import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ExampleCollection, publicationNames, pkgJson } from 'meteor/justinr1234:example';
import { subscriptionHandlers, subscriptionHandlersHelpers, Router, logFactory } from 'meteor/justinr1234:lib';

const debug = logFactory(pkgJson.name, __filename);

const onCreated = function onCreated() {
  const instance = this;
  const dataLoading = instance.dataLoading = new ReactiveVar(true);
  const dataLoadingErrors = instance.dataLoadingErrors = new ReactiveDict();
  const composedHandlers = subscriptionHandlers({ dataLoading, dataLoadingErrors, debug });

  instance.subscribe(publicationNames.EXAMPLE_PUBLICATION, composedHandlers);
};

const hooks = {
  EXAMPLE_EDIT_FORM: {
    onSuccess: () => FlowRouter.go(Router.routeMap.EXAMPLE_LIST.path),
  },
};

AutoForm.hooks(hooks);

const helpers = {
  getDoc: () => ExampleCollection.findOne(FlowRouter.getParam('_id')),
  collection: () => ExampleCollection,
};

export const composedHelpers = { ...helpers, ...subscriptionHandlersHelpers() };

Template.EXAMPLE_EDIT.onCreated(onCreated);
Template.EXAMPLE_EDIT.helpers(composedHelpers);

