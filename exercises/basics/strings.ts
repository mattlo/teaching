/**
 * Tip: Regular expressions are used in all kinds of programming and is a pillar in
 *      string manipulation
 * Tip: The `RegExp` type comes in two flavors:
 *      1. regular expression literal: `/regexp/` - most commonly used regexp
 *      2. regular expression constructor: `new RegExp()` - used only when regexp needs
 *         to be dynamic. These do not use the forward slashes. See MDN for tech docs
 * Tip: Not all regular expressions are created equal. Although they all look the same,
 *      different languages implement slightly different regular expressions.
 * Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 * Tip: Video breakdown: https://www.youtube.com/watch?v=0d2by9pzKwQ
 * Tip: ChatGPT is OK to use but try to understand basics. If you're proficient with regexp
 *      with AI, that is more than enough to be productive.
 * Tip: https://images.datacamp.com/image/upload/v1665049689/Regular_Expressions_Cheat_Sheet_b95aae6488.png
 */
export function regularExpressionsA() {
  const regExpA = /changeme/;
  const regExpB = /changeme/;
  const regExpC = /changeme/;

  const reverseDataA = ``;
  const reverseDataB = ``;

  return [
    regExpA.test('table tennis defenders do not like pace change'),
    /^[a-z|]+$/.test(regExpB.source), // constraint test for `regExpB`
    'table tennis Attackers are at risk of energy Depletion'.match(regExpB),
    'Table tennis tournaments uncover all your weaknesses.'.match(regExpC),
    /^\w+\n([A-Z]{2}nn[A-Z]{2})\nis\n.*!$/.test(reverseDataA),
    // eslint-disable-next-line
    (new RegExp(
      Array(3)
        .join('0')
        .split('0')
        .map((a, index) => `ball ${index * index}`)
        .join('\n'),
      'img'
    )).test(reverseDataB),
  ];
}

/**
 * Strings contain many methods that can be used to quickly look up pieces of a string
 * Sometimes these are better or more efficiency than writing a regular expression
 */
export function stringMethods() {
  const dataA = '';
  const dataB = '';
  const dataC = '';

  const indexA = -1;
  const indexB = -1;

  return [
    dataA.split(' ')?.[0]?.toUpperCase()
      ?.toLowerCase(),
    // ⚠️ this is called a ternary expression or also called conditional (ternary) operator
    //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    //    useful for writing condensed `if` statements without an actual statement
    //    CONDITIONAL ? TYPE : TYPE
    dataA?.[0] === 'H'
      ? dataA?.toLowerCase()?.replace('hello', 'world'.toUpperCase())
        .split(' ')?.[0]
      : dataA?.replace('world', 'WORLD'),
    dataA[indexA], // ⚠️ looks like an array, but it's not an array!
    dataB.indexOf('t'),
    dataB.indexOf('a'),
    dataB.indexOf('b'),
    dataB.indexOf('table'),
    dataB.substring(dataB.indexOf('tennis')),
    dataC,
    dataC.substring(indexB),
    dataC.trim()
  ];
}
