import { default as debugLibraryLogFactory } from 'debug';

export const logFactory = (
  pkgJson = '',
  filename = '',
  prefix = '@',
  postfix = ''
) => debugLibraryLogFactory(`${prefix}${pkgJson.name}${filename}${postfix}`);
