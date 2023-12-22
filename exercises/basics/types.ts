export function returnAllTypesObject() : {[key : string] : any} {
  return {
    typeString: 'This is a test from VSCode',
    typeNumber: 77,
    typeBoolean: true,
    typeArray: [27, 77, 87],
    typeObject: {myFavNum: 27},
    typeFunction() {},
    typeUndefined: undefined,
    typeNull: null,
    typeRegularExpression: /thangvu/
  };
}
