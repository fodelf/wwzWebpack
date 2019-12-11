// var count = {}; // 因模块是封闭的，这里实际上借用了js闭包的概念
var c = 0
const failureCache = require("./failureCache.js");
function count (){
    c ++;
    console.log("引用计数" + c);
    console.log("缓存数据大小" + failureCache.size);
};
var f = 0;
function countFor (){
  f ++;
  console.log("循环次数" + f);
};
module.exports =  {
  count:count,
  countFor:countFor
}
