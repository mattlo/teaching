import {describe, it, expect, jest} from '@jest/globals';
import {optionalChaining, recursion} from '../references';

describe('References & Data Structures', () => {
  it('should pass optional chaining references', () => {
    expect(optionalChaining()).toMatchSnapshot();
  });
});
