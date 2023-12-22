import {
  describe, it, expect
} from '@jest/globals';
import {mixedReferencesA, mixedReferencesB, optionalChaining} from '../references';

describe('References & Data Structures', () => {
  it('should pass optional chaining references', () => {
    expect(optionalChaining()).toMatchSnapshot();
  });

  it('should match references A snapshot', () => {
    expect(mixedReferencesA()).toMatchSnapshot();
  });

  it('should match references B snapshot', () => {
    expect(mixedReferencesB()()()().map((result) => result.replace(/null/g, 'Function'))).toMatchSnapshot();
  });
});
