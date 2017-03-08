function Observer( data ) {
    this.data = data;
    this.walk( data );
}
Observer.prototype.walk = function( obj ) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {       // 提取obj除原型链外的属性
            var val = obj[key];
            if(typeof val === "object") {       // 如果属性也是对象，则new Observer(val)
                new Observer( val );
            }
            this.convert( key, val );
        }
    }
};
Observer.prototype.convert = function(key, val) {
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
            val = newVal;
        }
    });
};
