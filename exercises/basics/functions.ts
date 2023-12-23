export function returnFunctionalExpression() : any {
  return function () {};
}
export function returnFunctionalDeclarationNamedBob() : any {
  return function bob() {
  };
}
export function returnObjectWithMethodNamedBobThatReturnsFunctionalDeclarationNamedBob() : any {
  return {
    bob() {
      return function bob() {
      };
    }
  };
}
export function curryConcept1(input : number, callback : (input2 : number) => number) {
  return callback(input) + (input * 2);
}
export function returnNestedFunction10LevelsDeep() {
  // eslint-disable-next-line max-len
  const nestedFunctions = (lv1: number) => (lv2: number) => (lv3: number) => (lv4: number) => (lv5: number) => (lv6: number) => (lv7: number) => (lv8: number) => (lv9: number) => (lv10:number) => lv1 + lv2 + lv3 + lv4 + lv5 + lv6 + lv7 + lv8 + lv9 + lv10;
  const result = nestedFunctions(0);
  return result;
}
