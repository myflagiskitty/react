import getPagesNambers from './getPagesNambers';

test.each([
  [1, 1000,[1, 2, 3, undefined, 1000]],
  [2, [1, 2, 3, undefined, 1000]],


 
])('getPagesNambers', (num, num2, result) => {
  const actual = factorial(num);

  expect(actual).toBe(result);
})