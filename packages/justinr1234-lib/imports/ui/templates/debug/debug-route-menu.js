import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { pkgJson, Router } from 'meteor/justinr1234:lib';
import { default as logFactory } from 'debug';

const debug = logFactory(`@${pkgJson.name}${__filename}`);

function getFormattedRoutes(routes) {
  return routes.map(({ name, path }) => ({
    name: name.replace(new RegExp('_', 'g'), ' '),
    path,
  }));
}

const onRendered = function onRendered() {
  this.$('.ui.dropdown.debugPathMenu').dropdown({
    onChange: (path, name) => {
      debug(`Navigating to ${name}: ${path}`);
      FlowRouter.go(path);
    },
  });
};

const helpers = {
  routes: () => getFormattedRoutes(Template.instance().data.routes || Router.routes || []),
};

Template.DEBUG_ROUTE_MENU.onRendered(onRendered);
Template.DEBUG_ROUTE_MENU.helpers(helpers);
