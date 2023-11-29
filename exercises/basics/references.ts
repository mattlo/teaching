/**
 * Optional chaining is useful to calling references where things may be undefined
 * All the tests written use optional chaining so it's important to know
 * how it works so you can reverse engineer the tests
 *
 * Task: Reverse engineer the return value to recreate `sampleData`
 *
 * Tip: potential identify types and order of operations before
 *      worrying about the optional chaining operator
 *
 * Tip: there is a recursive play here
 *
 * Documentation on optional chaining:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
export function optionalChaining() {
  const sampleData : any = {
    // @TODO fill out the matching data structure to satisfy all the items below
  };

  const key = 0;
  const key2 = 3 - 1;

  return {
    data1: sampleData?.hello,
    data2: sampleData?.nested,
    data3: sampleData?.nested?.[key],
    data4: sampleData?.deep,
    data5: sampleData?.linking,
    data6: sampleData.deep?.linking,
    data7: sampleData.deep.linking,
    data8: sampleData.nested[key2] * sampleData?.nested?.[Math?.abs?.((2 * (3 * -1)) + (Math?.pow?.(2, 2)))],
    data9: sampleData.nested[4],
    data10: sampleData?.nested?.[0],
    data11: typeof sampleData?.callback,
    data12: sampleData.callback(1),
    data13: sampleData?.callback?.(sampleData?.nested?.[4]),
    data14: sampleData.nestedFn()?.()(),
    // anti cheat mechanism, don't worry about `data15`
    data15: (!!sampleData?.nested?.join('') && sampleData?.nested?.length === (3 % 9)),
  };
}

/**
 * In a dynamic language like JavaScript, it's important to understand
 * how data evolves after invoking functions that may lead to recursion
 *
 * Task: Pass the test by evaluating the data passed through and calling the recursive functions
 */
export function recursion(callback : any) {
  // @TODO not ready yet!
}
