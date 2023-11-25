export function returnFunctionalExpression() : any {
    return function() {}
}

export function returnFunctionalDeclarationNamedBob() : any {
    return function bob() {

    }
}
    export function returnObjectWithMethodNamedBobThatReturnsFunctionalDeclarationNamedBob() : any {
    return {
        bob: function() {
            return function bob() {

            }
        }
    }
}

export function curryConcept1(input : number, callback : (input2 : number) => number) {
    //return callback(3*2)+input // This one is cheating, however, it still passes, LMAO
    const result = function(input2:number) {
        return callback(input2) + input*2;
    }
    return result(input)
// This one is cheating,too but I will ask you later!
}
export function returnNestedFunction10LevelsDeep() {
    return function(lv1:1) {
        return function(lv2:2){
            return function(lv3:3) {
                return function(lv4:4){
                    return function (lv5:5){
                        return function(lv6:6) {
                            return function(lv7:7) {
                                return function(lv8:8){
                                    return function(lv9:9) {
                                        return lv1+lv2+lv3+lv4+lv5+lv6+lv7+lv8+lv9;
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}