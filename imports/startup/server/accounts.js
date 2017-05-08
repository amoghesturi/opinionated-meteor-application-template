import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { logFactory } from 'meteor/justinr1234:lib';

import pkgJson from '/package.json';

const debug = logFactory(pkgJson.name, __filename);

if (Meteor.users.find().count() === 0) {
  if (!!Meteor.settings.defaultAccount) {
    Accounts.createUser({
      username: Meteor.settings.defaultAccount.username,
      password: Meteor.settings.defaultAccount.password,
    });
  } else {
    debug('No default user!  Please invoke meteor with a settings file.');
  }
}
