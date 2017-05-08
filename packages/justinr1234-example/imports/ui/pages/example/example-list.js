import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ExampleCollection, publicationNames, pkgJson } from 'meteor/justinr1234:example';
import {
  subscriptionHandlers,
  subscriptionHandlersHelpers,
  handleError,
  Router,
  logFactory,
} from 'meteor/justinr1234:lib';

const debug = logFactory(pkgJson.name, __filename);

const onCreated = function onCreated() {
  const instance = this;
  const dataLoading = instance.dataLoading = new ReactiveVar(true);
  const dataLoadingErrors = instance.dataLoadingErrors = new ReactiveDict();
  const composedHandlers = subscriptionHandlers({ dataLoading, dataLoadingErrors, debug });

  instance.subscribe(publicationNames.EXAMPLE_PUBLICATION, composedHandlers);

  this.confirmRemove = new ReactiveDict();
  this.removing = new ReactiveDict();
};

const helpers = {
  list: () => ExampleCollection.find(),
  exampleEditPage: () => Router.routeMap.EXAMPLE_EDIT.name,
  confirmRemove: id => Template.instance().confirmRemove.get(id),
  removing: id => Template.instance().removing.get(id),
};

export const composedHelpers = { ...helpers, ...subscriptionHandlersHelpers() };

const events = {
  'click .init-remove'(event, instance) {
    event.preventDefault();
    event.stopPropagation();
    const { _id } = this;
    instance.confirmRemove.set(_id, true);
  },
  'click .cancel-remove'(event, instance) {
    event.preventDefault();
    event.stopPropagation();
    const { _id } = this;
    instance.confirmRemove.set(_id, false);
  },
  'click .confirm-remove'(event, instance) {
    event.preventDefault();
    event.stopPropagation();
    const { _id } = this;
    instance.removing.set(_id, true);
    ExampleCollection.remove({ _id }, error => {
      if (error) {
        handleError({ error });
      }

      debug(`Successfully removed ${_id}`);

      instance.removing.set(_id, false);
      instance.confirmRemove.set(_id, false);
    });
  },
};

Template.EXAMPLE_LIST.onCreated(onCreated);
Template.EXAMPLE_LIST.helpers(composedHelpers);
Template.EXAMPLE_LIST.events(events);
