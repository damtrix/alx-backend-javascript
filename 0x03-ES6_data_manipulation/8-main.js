import cleanSet from './8-clean_set';

console.log(
  // eslint-disable-next-line comma-dangle
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')
);
console.log(
  // eslint-disable-next-line comma-dangle
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), '')
);
