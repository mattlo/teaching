import {describe, it, expect} from '@jest/globals';
import {regularExpressionsA, stringMethods} from '../strings';

describe('Strings', () => {
  it('Regular expressions', () => {
    expect(regularExpressionsA()).toMatchSnapshot();
  });

  it('String methods', () => {
    expect(stringMethods()).toMatchSnapshot();
  });
});
