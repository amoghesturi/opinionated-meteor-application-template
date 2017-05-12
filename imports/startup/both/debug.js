// TODO: Implement
// import Debug from 'debug';
// import pkgJson from '/package.json';
//
// const debug = Debug(`@${pkgJson.name}`); // eslint-disable-line new-cap
//
// function _getCallerFile() {
//   try {
//     const err = new Error();
//     let callerfile;
//
//     Error.prepareStackTrace = (error, stack) => stack;
//
//     const currentfile = err.stack.shift().getFileName();
//
//     while (err.stack.length) {
//       callerfile = err.stack.shift().getFileName();
//
//       if (currentfile !== callerfile) {
//         return callerfile;
//       }
//     }
//   } catch (error) {
//     // Suppress error
//   }
//   return undefined;
// }
//
// export default function wrappedDebug(message) {
//   const caller = _getCallerFile();
//   debug(caller);
//   const beforeNamespace = debug.namespace;
//   debug(beforeNamespace);
//   debug(message);
// }
