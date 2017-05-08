import { pkgJson, handleError } from 'meteor/justinr1234:lib';
import { default as logFactory } from 'debug';

const autoformHandlersDebug = logFactory(`@${pkgJson.name}${__filename}`);

export const defaultOnSuccess = function defaultOnSuccess(formSuccess) {
  formSuccess.set(true);
};

export const defaultOnError = function defaultOnError(formSuccess, autoformError, onErrorDebug, formType, error) {
  formSuccess.set(false);

  if (error) {
    const debug = onErrorDebug || autoformHandlersDebug;
    handleError(error, debug, autoformError);
  }
};

export const autoformHandlers = function autoformHandlers({
  onSuccess,
  onError,
  formSuccess,
  autoformError,
  debug,
}) {
  return {
    onSuccess: onSuccess || defaultOnSuccess.bind(null, formSuccess),
    onError: onError || defaultOnError.bind(null, formSuccess, autoformError, debug),
  };
};
