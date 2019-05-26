import { checkHealth, charsArrayFunc } from '../src/js/checkHealth';

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Петя', health: 90 });
  expect(result).toBe('Петя is healthy');
});

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Вася', health: 50 });
  expect(result).toBe('Вася is wounded');
});

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Анаксимандр', health: 10 });
  expect(result).toBe('Анаксимандр is critical');
});

test('checkHealth array sort', () => {
  const testArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = charsArrayFunc();
  expect(result).toEqual(testArr);
});
