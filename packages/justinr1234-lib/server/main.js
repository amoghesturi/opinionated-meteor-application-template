import pkgJson from '../package.json';
import { logFactory } from '../imports/lib/debug.js';
import { Security } from './security.js';
import {
  APP_BODY,
  APP_NOT_FOUND,
  mergeTemplates,
  defaultTemplates,
  defaultBlazeRender,
  createRouteMap,
  routeGrouper,
  groupRoutesByGroup,
  createFlowRouterRoutes,
  transformRoutesJsonToRouteObject,
  mergeRoutes,
  mergeRouteMap,
  mergeRouteGroups,
  mergeRoutesByGroup,
} from '../imports/lib/both/routes/util.js';
import { Router } from '../imports/lib/both/routes/router.js';

export {
  pkgJson,
  logFactory,
  Security,
  APP_BODY,
  APP_NOT_FOUND,
  mergeTemplates,
  defaultTemplates,
  defaultBlazeRender,
  createRouteMap,
  routeGrouper,
  groupRoutesByGroup,
  createFlowRouterRoutes,
  transformRoutesJsonToRouteObject,
  Router,
  mergeRoutes,
  mergeRouteMap,
  mergeRouteGroups,
  mergeRoutesByGroup,
};
