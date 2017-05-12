import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ExampleCollection } from 'meteor/justinr1234:example';
import { Router } from 'meteor/justinr1234:lib';

const hooks = {
  EXAMPLE_ADD_FORM: {
    onSuccess: () => FlowRouter.go(Router.routeMap.EXAMPLE_LIST.path),
  },
};

AutoForm.hooks(hooks);

const helpers = {
  collection: () => ExampleCollection,
};

const composedHelpers = helpers;

Template.EXAMPLE_ADD.helpers(composedHelpers);
