// const array = ['JavaScript', 'PHP', 'Ruby'];

// var [a, ,c] = array;

// console.log(a, c)



// var course = {
//     name: 'JavaScript',
//     price: 1000,
// }

// var {name, price} = course;
// console.log(name, price);



// Destructuring object and rename
// var {name: nameCourse, price: priceCourse} = course
// console.log(nameCourse, priceCourse)



// const course = {
//     name: 'JavaScript',
//     price: 1000,
//     children: {
//         name: 'ReactJS',
//     }
// }
// var {name: parentName, children: {name: childrenName}} = course
// console.log(parentName, childrenName)




const course = {
    name: 'JavaScript',
    price: 1000,
}

var {name, description = 'Default description'} = course;

console.log(name)
console.log(description)