import { checkHealth, charsArrayFunc } from './checkHealth';

// eslint-disable-next-line no-console
console.log('app.js bundled');

// eslint-disable-next-line
charsArrayFunc().forEach( row => console.log(checkHealth(row)));
