// 开始定义事件
function Event() {
    this.event = {};
}
Event.prototype.on = function( attr, callback ) {       // 注册绑定事件
    if(this.event[attr]) {
        this.event[attr].push(callback);
    } else {
        this.event[attr] = [callback];
    }
};
Event.prototype.off  = function( attr ) {       // 解除绑定事件
    for (let key in this.event) {
        if( this.event.hasOwnProperty( key ) && key === attr ) {
            delete this.event[key];
        }
    }
};
Event.prototype.emit = function(attr, ...arg) {         // 触发绑定事件
    this.event[attr] && this.event[attr].forEach(function(item) {
        item(...arg);
    });
};
// 结束定义事件
// 开始定义观察者模式
function Observer( data ) {
    this.data = data;
    this.run( data );
    this.eventStack = new Event();      // 储存绑定事件
}
Observer.prototype.run = function( obj ) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {       // 提取obj除原型链外的属性
            var val = obj[key];
            if(typeof val === "object") {       // 如果属性也是对象，则new Observer(val)
                new Observer( val );
            }
            this.setAndGet( key, val );
        }
    }
};
Observer.prototype.setAndGet = function(key, val) {
    let self = this;
    Object.defineProperty( this.data, key, {
        enumerable: true,
        configurable: true,
        get: function() {       // 访问对象key时
            console.log( "你访问了 " + key );
            return val;
        },
        set: function(newVal) {     // 改变对象key时
            if(typeof newVal === "object") {
                new Observer(newVal);
            }
            console.log("你设置了 " + key + ", 新的值为 " + newVal );
            self.eventStack.emit(key, newVal);
            val = newVal;
        }
    });
};
Observer.prototype.$watch = function(attr, callback) {
    this.eventStack.on(attr, callback);
};
// 结束定义观察者模式
