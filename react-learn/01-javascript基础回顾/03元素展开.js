/**
 * Js中可以通过 ... 将一个数组或者对象展开(进行拷贝)
 */

// 声明一个原始数组
arr = [1,2,3,4,5]

// 声明一个新数组, 将原始数组展开
arr2 = [...arr]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// 声明一个新数组, 将原始数组展开, 并且在后面添加新的元素
arr3 = [...arr, 6, 7, 8]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 声明一个新数组, 将原始数组展开, 并且在前面添加新的元素
arr4 = [-2,-1,0,...arr]
console.log(arr4); // [-2, -1, 0, 1, 2, 3, 4, 5 ]


obj = {
    name: "小张",
    age: 18,
    gender: '男'
}

// 将一个对象中包含的值,拷贝到另一个新的对象中
obj2 = {age: 20,...obj}
console.log(obj2); // { name: '小张', age: 18, gender: '男' }