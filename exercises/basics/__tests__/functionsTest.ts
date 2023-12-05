import {describe, it, expect, jest} from '@jest/globals';
import {
  curryConcept1, returnObjectWithMethodNamedBobThatReturnsFunctionalDeclarationNamedBob,
  returnFunctionalDeclarationNamedBob,
  returnFunctionalExpression, returnNestedFunction10LevelsDeep
} from '../functions';

describe('Functions', () => {
  it('should return a functional expression', () => {
    expect(typeof returnFunctionalExpression()).toBe('function');
    expect(returnFunctionalExpression()?.name).toBe('');
  });

  it('should return a named function (declared function)', () => {
    expect(typeof returnFunctionalDeclarationNamedBob()).toBe('function');
    expect(returnFunctionalDeclarationNamedBob().name).toBe('bob');
  });

  it('should return a method that returns a functional expression', () => {
    const obj = returnObjectWithMethodNamedBobThatReturnsFunctionalDeclarationNamedBob();
    expect(typeof obj?.bob?.()).toBe('function');
    expect(obj?.bob?.().name).toBe('bob');
  });

  it('should return the correct curried value', () => {
    const callback = jest.fn((value : number) => (value * 2));
    expect(curryConcept1(4, callback)).toBe(16);
    expect(callback).toBeCalledTimes(1);
  });

  [...Array(10)].forEach((a, index) => {
    it(`should call function at level ${index + 1}`, () => {
      [...Array(index + 1)].reduce(
        (fn) => fn(1),
        returnNestedFunction10LevelsDeep
      )
    })
  });

  it('should return curried call to equal 9', () => {
    expect([...Array(10)].reduce(
      (fn) => fn(1),
      returnNestedFunction10LevelsDeep
    )).toBe(9);
  });

  it('should return curried call to equal 18', () => {
    expect([...Array(10)].reduce(
      (fn) => fn(2),
      returnNestedFunction10LevelsDeep
    )).toBe(18);
  });
});
