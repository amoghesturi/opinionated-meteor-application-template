import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ExampleCollection, pkgJson } from 'meteor/justinr1234:example';
import {
  subscriptionHandlers,
  subscriptionHandlersHelpers,
  Router,
  logFactory,
  Publications,
  autoformHooks,
} from 'meteor/justinr1234:lib';

const debug = logFactory(pkgJson.name, __filename);

const onCreated = function onCreated() {
  const instance = this;
  const dataLoading = instance.dataLoading = new ReactiveVar(true);
  const formSuccess = instance.formSuccess = new ReactiveVar(null);
  const dataLoadingErrors = instance.dataLoadingErrors = new ReactiveDict();
  const composedHandlers = subscriptionHandlers({ dataLoading, dataLoadingErrors, debug });

  instance.subscribe(Publications.publicationNames.EXAMPLE_PUBLICATION, composedHandlers);

  const baseName = Router.routeMap.EXAMPLE_EDIT.name;
  const successRoute = Router.routeMap.EXAMPLE_LIST.path;
  const hooks = autoformHooks({
    formSuccess,
    autoformError: dataLoadingErrors,
    baseName,
    successRoute,
    debug,
  });
  AutoForm.hooks(hooks);
};

const helpers = {
  getDoc: () => ExampleCollection.findOne(FlowRouter.getParam('_id')),
  collection: () => ExampleCollection,
};

export const composedHelpers = { ...helpers, ...subscriptionHandlersHelpers() };

Template.EXAMPLE_EDIT.onCreated(onCreated);
Template.EXAMPLE_EDIT.helpers(composedHelpers);

