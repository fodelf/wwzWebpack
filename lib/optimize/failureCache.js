// var count = {}; // 因模块是封闭的，这里实际上借用了js闭包的概念
// var c = 0
// function count (name){
//     //  if(count[name]){
//     //       count[name]++;
//     //  }else{
//     //       count[name] = 1;
//     //  }
//     c ++;
//     console.log(c)
//     //  console.log(name + '被访问了' + count[name] + '次。');
// };
const failureCache = new Map();
module.exports =  failureCache;