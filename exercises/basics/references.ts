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
  function callback() {

  }

  let sampleData : any;
  sampleData = {
    // @TODO fill out the matching data structure to satisfy all the items below
    hello: undefined, //maybe cheating
    nested: [1,
      2,
      3,
    ],
    // nested: {
    //   0 : 1,
    //   join: function () {
    //
    //   }
    // },
    deep: {
      linking: true
    },
    callback: function (a : number) {
      // Input: 1 and undefined
      // Output: 1 and -9000 should be returned here
      if (a == 1) {
        return a;
      } else {
        return -9000;
      }
      // if (typeof(a)=="undefined") {
      //   return -9000;
      // }
      // return a;
    },
    nestedFn: function () {
      //output type should be function (first)
      return function () {
        return function () {
          //This one should return boolean (false)
          let a = false;
          return a;
        }
      }
    }
  };


  const key = 0;
  const key2 = 3 - 1;

  return {
    data1: sampleData?.hello,
    data2: sampleData?.nested,
    data3: sampleData?.nested?.[key],
    data4: sampleData?.deep,
    data5: sampleData?.linking, // pass
    data6: sampleData.deep?.linking,
    data7: sampleData.deep.linking,
    data8: sampleData.nested[key2] * sampleData?.nested?.[Math?.abs?.((2 * (3 * -1)) + (Math?.pow?.(2, 2)))],
    data9: sampleData.nested[4], //pass
    data10: sampleData?.nested?.[0],
    data11: typeof sampleData?.callback, //pass
    data12: sampleData.callback(1), //pass
    data13: sampleData?.callback?.(sampleData?.nested?.[4]),  //sampleData.callback(undefined),
    data14: sampleData.nestedFn()?.()(), //sampleData.nestedFn()()()
    // anti cheat mechanism, don't worry about `data15`
    data15: (!!sampleData?.nested?.join('') && sampleData?.nested?.length === (3 % 9)),
  };
}

/**
 * good luck lol
 */
export function mixedReferencesA() {
  const data : any = {
    // @TODO implement
    level1: {
      level2: [
        function(){
          return {level3: function() {
            return [
              function(a:any){
                if (a==0) {
                  a = "table"
                }
                else if (a==true){
                  a = "tennis"
                }
                return a;
              }
            ]
          }
        }
        },
        function(){
          return {
            level3: function(){
              return [
                function(a:any) {
                  let array_conditon = [3]
                  if (a=="2") {
                    a = "keeps";
                  }
                  else if (array_conditon) {
                    return "our"
                  }
                  return a;
                }
              ]
            }
          }
        },
        function(){
          return {
            level3: function(){
              return [
                function(a:any) {
                  let object = {'4':4}
                  let regex = /5/
                  if (a["4"] === object["4"]) {
                    return "minds"
                  }
                  else {
                    return "sharp"
                  }

                }
              ]
            }
          }
        },
        function(){
          return {
            level3: function(){
              return [
                function(a:any) {
                  if (a() === 6) {
                    return "and"
                  }
                },
              ]
              // return {
              //   'zero' : function(a:any) {
              //     if (a=== null){
              //       return "body";
              //     }
              //   }
              // }
            }
          }
        },
      ],
    }
  };

  return {
    mixedReferencesA1: data?.level1?.level2?.[0]?.()?.level3?.()[0]?.(0),
    mixedReferencesA2: data?.level1?.level2?.[0]?.()?.level3?.()[0]?.(true),
    mixedReferencesA3: data?.level1?.level2?.[1]?.()?.level3?.()[0]('2'),
    mixedReferencesA4: data?.level1?.level2?.[1]?.()?.level3?.()[0]?.([3]), 
    mixedReferencesA5: data?.level1?.level2?.[2]?.()?.level3?.()[0]?.({4: 4}),
    mixedReferencesA6: data?.level1?.level2?.[2]?.()?.level3?.()[0]?.(/5/),
    mixedReferencesA7: data?.level1?.level2?.[3]?.()?.level3?.()[0]?.(() => 6),
    mixedReferencesA8: data?.level1?.level2?.[3]?.()?.level3?.()?.['zero']?.(null),
    mixedReferencesA9: data?.level1?.level3?.[4]?.level4?.()?.['零']?.(undefined),
    anticheat1: data?.level1?.level3 instanceof Array
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