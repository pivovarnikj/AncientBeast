/*
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

const string = require('../src/utility/string');

test('adds 0000 in front of 9', () => {
  expect(string.zfill(9, 5)).toBe('00009');
});
test('adds 00 in front of a', () => {
  expect(string.zfill('a', 3)).toBe('00a');
});
test('shoud return empty string', () => {
  expect(string.zfill(5, 0)).toBe("");
});
