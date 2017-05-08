import pkgJson from '../imports/version.js';
// TODO: Is this irrelevant?
import '../imports/api/collections';
import { ExampleCollection, ExampleSchema } from '../imports/api/collections/example/example.js';
import '../imports/routes.js';
import { publicationNames } from '../imports/publication-names.js';
import '../imports/ui/pages/example';

export {
  ExampleCollection,
  ExampleSchema,
  publicationNames,
  pkgJson,
};
