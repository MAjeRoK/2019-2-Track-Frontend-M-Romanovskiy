/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("QwErTy")).toBe("false")
  expect(convertBytesToHuman("{@#%&}")).toBe("false")
  expect(convertBytesToHuman(123.7)).toBe("false")
  expect(convertBytesToHuman(NaN)).toBe("false")
  expect(convertBytesToHuman(Infinity)).toBe("false")
  expect(convertBytesToHuman(-Infinity)).toBe("false")
  expect(convertBytesToHuman(true)).toBe("false")
  expect(convertBytesToHuman(Math)).toBe("false")
  expect(convertBytesToHuman(null)).toBe("false")
  expect(convertBytesToHuman(undefined)).toBe("false")
  expect(convertBytesToHuman(alert)).toBe("false")
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe("0 B")
  expect(convertBytesToHuman(9007199254740991)).toBe("8 PB")
  expect(convertBytesToHuman(543)).toBe("542 B")
  expect(convertBytesToHuman(123456789)).toBe("117.74 MB")
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(1073741824)).toBe("1 GB")
  expect(convertBytesToHuman(1000000)).toBe("976.56 KB")
  // ...
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe("false")
  expect(convertBytesToHuman(-567)).toBe("false")
  expect(convertBytesToHuman(-9007199254740991)).toBe("false")
  // ...
});

// другая группа проверок