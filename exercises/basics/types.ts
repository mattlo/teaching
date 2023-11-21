export function returnAllTypesObject() : {[key : string] : any} {
  // @TODO implement
  return {
    typeString: "This is a string",
    typeNumber: 77,
    typeBoolean: true,
    typeArray: [27,77,87],
    typeObject: {myFavNum : 27},
    typeFunction: function () {},
    typeUndefined: undefined,
    typeNull: null,
    typeRegularExpression: /thangvu/
  }

}
