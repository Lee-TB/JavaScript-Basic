/** REST PARAMETERS (...) */
// function logger(...params) {
//     console.log(params)
// }
// logger(1,2,3,4)


// const logger = ({name, price, ...rest}) => console.log(name, price, rest)
// logger({
//     name: 'JavaScript',
//     price: 1000,
//     description: 'Description content'
// })


// const logger = ([a, b, ...rest]) => {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// logger([1,2,3,4,5,6])



// /** SPREAD (...) */ 
// var array1 = ['JavaScript', 'Ruby', 'PHP'];
// var array2 = ['ReactJS', 'Dart'];
// var array3 = [...array1, ...array2];
// var array4 = ['JavaScript', 'Ruby', 'PHP', 'ReactJS', 'Dart'] // the same result
// console.log(array3)
// console.log(array4)


// var object1 = {
//     name: 'JavaScript'
// }
// var object2 = {
//     price: 1000
// }
// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3)


// var defaultConfig = {
//     api: 'https://domain-trang-khoa-hoc',
//     apiVersion: 'v1',
//     other: 'other',
//     //
//     //
// }

// var exerciseConfig = {
//     ...defaultConfig,
//     api: 'https://domain-trang-bai-tap',
// }

// var exerciseConfigSame = {
//     api: 'https://domain-trang-khoa-hoc',
//     apiVersion: 'v1',
//     other: 'other',
//     api: 'https://domain-trang-bai-tap',
// }

// console.log(exerciseConfig)
// console.log(exerciseConfigSame)


// var array = ['JavaScript', 'Ruby', 'PHP'];

// function  logger(...rest) { // this is rest
//     for(let i = 0; i < rest.length; i++) {
//         console.log(rest[i])
//     }
// }

// logger(...array); // this is spread