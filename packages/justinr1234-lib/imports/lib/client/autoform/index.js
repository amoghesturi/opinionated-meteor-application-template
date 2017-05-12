import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { handleError, logFactory, pkgJson } from 'meteor/justinr1234:lib';
import { _ } from 'meteor/underscore';

const debug = logFactory(pkgJson.name, __filename);

/* eslint-disable no-param-reassign */

export const defaultAutoformHookBefore = function defaultBeforeUpdateHook(doc) {
  // Only update the field that was changed, not the entire document
  if (this.autoSaveChangedElement) {
    doc.$set = { ..._.pick(doc.$set, this.autoSaveChangedElement.name) };
    if (this.ss && this.ss.field) {
      doc.$set.userId = Meteor.userId();
    }
    delete doc.$unset;
  }
  return doc;
};

export const defaultAutoformHookOnError = function defaultAutoformHookOnError(formType, error) {
  logFactory({ formType, error });
  handleError(error);
};

export const generateDefaultAutoformHooks = function generateDefaultAutoformHooks(baseName, successRoute) {
  return {
    [`UPDATE_${baseName}_FORM`]: {
      before: {
        update: defaultAutoformHookBefore,
      },
      onError: defaultAutoformHookOnError,
      onSuccess: function defaultAutoformOnUpdateSuccess() {
        if (this.autoSaveChangedElement) {
          debug(`Saved data for ${this.autoSaveChangedElement.name}`);
        } else {
          if (successRoute) {
            FlowRouter.go(successRoute);
          }
        }
      },
    },
    [`INSERT_${baseName}_FORM`]: {
      onError: defaultAutoformHookOnError,
      onSuccess: function defaultAutoformOnInsertSuccess() {
        if (successRoute) {
          FlowRouter.go(successRoute);
        }
      },
    },
  };
};
