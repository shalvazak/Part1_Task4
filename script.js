// =================================================================
// დავალება 1
// =================================================================

// const strArr = []
// strReplace ("ტელეფონის აპარატის ყურმილში მოთავსებულია მიკროფონი და ელექტრომაგნიტური ტელეფონი. ტელეფონის აპარატის ტრანსფორმატორი განაცალკევებს მიკროფონის კვების წრედს ტელეფონის ცვლადი დენის წრედისაგან და ბალანსური კონტურის საშუალებით მნიშვნელოვნად ამცირებს საკუთარი ლაპარაკის სმენადობას.", "ტელეფონი", "მანქანა")

// function strReplace(str, valueToReplace, valueToReplaceWith) {
    
//     strCut (str,valueToReplace)
    
//     let newStr = ''
    
//     strArr.forEach((e, i) => {
        
//         if (i === strArr.length -1) {
//             newStr += e
//         }else {
//             newStr += e + valueToReplaceWith
//         }
        
//     })
    
//     console.log(strArr);
//     console.log(newStr);
    
// }

// function strCut (str, e) {
//     const strFind = str.indexOf(e)
//     const le1 = e.length
    
//     strArr.push(str.slice (0, strFind))
//     strEnd = str.slice (strFind+le1)
    
//     if (strEnd.includes(e)) {
//         strCut(strEnd, e)
//     }else {
//         strArr.push(strEnd)
//     }
    
// }

// =================================================================
// დავალება 2
// =================================================================

// myFunc ("telephones also contain an alerting feature")

// function myFunc (string) {
//     const strArray = string.split(" ")
    
//     strArray.forEach((e, i) => {
//         strArray[i] = e[0].toUpperCase() + e.slice (1)
//     });
    
//     const newString = strArray.join(" ")
    
//     console.log(newString);
// }

// =================================================================
// დავალება 3
// =================================================================

// const users = [
//     {
//         name : 'Lasha',
//         age : 30
//     },
//     {
//         name : 'Saba',
//         age : 20
//     },
//     {
//         name : 'Giorgi',
//         age : 15
//     }
// ]

// console.log(objSort (users));

// function objSort (users) {
//     return users.sort((s1, s2) => s1.age - s2.age);
// }
