// function iso(str1, str2) {
//     const mapping = {}
//     if (str1.length === str2.length) return false
//         for (let i = 0; i < str1.length; i++) {
//             if (str1[i] in mapping) {
//                 if (mapping[str1[i]] === str2[i]) {
//                     continue
//                 } else {
//                     return false
//                 }
//             } else {
//                 mapping[str1[i]] = str2[i]
//             }
//         }
//     return true
// }

/*
 always have atleast one room, but will return false
 safe to assume if [0][0] is empty, it is false
 create a set of visited rooms
 create an queue
 while the queue is not empty,
 find the keys of the current room
 loop through those keys and find keys you havent visited and add to the queue
 check to see if your visted has the length of the given array, if it does return true, else continue 
 */