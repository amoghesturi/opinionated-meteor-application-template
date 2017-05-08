import { AutoForm } from 'meteor/aldeed:autoform';
import { Template } from 'meteor/templating';
import { ExampleCollection } from 'meteor/justinr1234:example';
import { Router, generateDefaultAutoformHooks } from 'meteor/justinr1234:lib';

const onCreated = function onCreated() {
  AutoForm.hooks(generateDefaultAutoformHooks(Router.routeMap.EXAMPLE_ADD.name, Router.routeMap.EXAMPLE_LIST.path));
};

const helpers = {
  collection: () => ExampleCollection,
};

const composedHelpers = helpers;

Template.EXAMPLE_ADD.onCreated(onCreated);
Template.EXAMPLE_ADD.helpers(composedHelpers);
