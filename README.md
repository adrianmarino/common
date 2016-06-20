# Common
Javascript core extensions and common utils.

## Extensions
### Core
* Date.iso();
* String.repl();
* Function.defineMethod(name, function);
* Function.undefineMethod(name);
* Function.clone(object);

### Mocha
* let(() => expresion);

## Process
* exist_message("a message");

## Clases
#### Map
* new Map({});
* new Map();
* .keys();
* .isEmpty();
* .forEach((key, value) => ... );
* .filter((key, value) => expression);
* .reject((key, value) => expression);
* .put(key, value);
* .get(key);

#### Logger
* new Logger()
* .info('%s-%s', a, b);
* .warn('%s-%s', a, b);
* .error('%s-%s', a, b);
* .debug('%s-%s', a, b);

