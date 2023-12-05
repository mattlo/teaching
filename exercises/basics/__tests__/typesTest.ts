import {describe, it, expect} from '@jest/globals';
import {returnAllTypesObject} from '../types';

describe('Types', () => {
  it('should return an object, with specific properties matching specific types', () => {
    const result : any = returnAllTypesObject();

    expect(typeof result?.typeString).toEqual('string');
    expect(typeof result?.typeNumber).toEqual('number');
    expect(typeof result?.typeBoolean).toEqual('boolean');
    expect(result?.typeArray instanceof Array).toBe(true);
    expect(typeof result?.typeObject).toEqual('object');
    expect(typeof result?.typeFunction).toEqual('function');
    expect(typeof result?.typeUndefined).toEqual('undefined');
    expect(result?.typeNull).toEqual(null);
    expect(result?.typeRegularExpression instanceof RegExp).toBe(true);
  });
});
