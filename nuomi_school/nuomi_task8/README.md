##任务目的
* 在实践中使用递归思想
* 了解设计模式中的“发布-订阅模式”

##任务描述
* 如果传入参数对象是一个“比较深”的对象（也就是其属性值也可能是对象），那该怎么办呢？举个例子。
    // 一个“比较深”的对象：某些属性的值也是一个对象
    let obj = {
     a: 1,
     b: 2,
     c: {
         d: 3,
         e: 4
     }
    }
* 如果设置新的值是一个对象的话，新设置的对象的属性是否能能继续响应 getter 和 setter。举个例子。

     let app1 = new Observer({
             name: 'youngwind',
             age: 25
     });

     app1.data.name = {
             lastName: 'liang',
             firstName: 'shaofeng'
     };

     app1.data.name.lastName;
     // 这里还需要输出 '你访问了 lastName '
     app1.data.name.firstName = 'lalala';
     // 这里还需要输出 '你设置了firstName, 新的值为 lalala'
* 考虑传递回调函数。在实际应用中，当特定数据发生改变的时候，我们是希望做一些特定的事情的，而不是每一次都只能打印出一些信息。所以，我们需要支持传入回调函数的功能。举个例子。

     let app1 = new Observer({
             name: 'youngwind',
             age: 25
     });

     // 你需要实现 $watch 这个 API
     app1.$watch('age', function(age) {
             console.log(`我的年纪变了，现在已经是：${age}岁了`)
     });

     app1.data.age = 100; // 输出：'我的年纪变了，现在已经是100岁了'

##任务注意事项
* 不能使用任何第三方的库
* 程序执行环境为浏览器
