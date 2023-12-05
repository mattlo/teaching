import {describe, it, expect, jest} from '@jest/globals';
import {mixedReferencesA, optionalChaining} from '../references';

describe('References & Data Structures', () => {
  it('should pass optional chaining references', () => {
    expect(optionalChaining()).toMatchSnapshot();
  });

  it('should match references A snapshot', () => {
    expect(mixedReferencesA()).toMatchSnapshot();
  })
});
