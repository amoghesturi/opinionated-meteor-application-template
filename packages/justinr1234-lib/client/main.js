import pkgJson from '../package.json';
import 'izitoast/dist/css/iziToast.min.css';
import { logFactory } from '../imports/lib/debug.js';
import { handleError, mapDataLoadingErrors } from '../imports/lib/client/handle-error.js';
import { subscriptionHandlers, subscriptionHandlersHelpers } from '../imports/lib/client/subscription-handlers.js';
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
import '../imports/ui/templates';

export {
  pkgJson,
  logFactory,
  handleError,
  mapDataLoadingErrors,
  subscriptionHandlers,
  subscriptionHandlersHelpers,
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
