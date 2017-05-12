import pkgJson from '../imports/version.js';
import { publicationNames } from '../imports/publication-names.js';
import '../imports/routes.js';
import '../imports/api/collections';
import { ExampleCollection, ExampleSchema } from '../imports/api/collections/example/example.js';
import './publications';

export {
  pkgJson,
  ExampleCollection,
  ExampleSchema,
  publicationNames,
};

