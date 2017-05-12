import pkgJson from '../package.json';
// TODO: Is this irrelevant?
import '../imports/api/collections';
import { ExampleCollection, ExampleSchema } from '../imports/api/collections/example/example.js';
import { routeMap, routeGroups, routesByGroup } from '../imports/routes.js';
import { publicationNames } from '../imports/publication-names.js';
import '../imports/ui/pages/example';

export {
  ExampleCollection,
  ExampleSchema,
  routeMap,
  routeGroups,
  routesByGroup,
  publicationNames,
  pkgJson,
};
