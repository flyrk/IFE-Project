(function(window) {
    let left_in = document.getElementById('left-in'),
        right_in = document.getElementById('right-in'),
        left_out = document.getElementById('left-out'),
        right_out = document.getElementById('right-out'),
        queue = document.getElementsByClassName('queue')[0];

    // 开始入队列方法
    function queueIn() {
        let input_number = document.getElementById('input-number'),
            item = document.createElement('div'),
            side = this.id.toString().match(/([a-z]+)-/)[1];
        item.className = 'queue-item';
        item.innerText = input_number.value;
        input_number.value = "";    // 点击时清空输入框
        if(side === 'left') {
            if(queue.hasChildNodes()) {
                let first_child = queue.firstChild;
                queue.insertBefore(item, first_child);
            } else {
                queue.appendChild(item);
            }
        }
        if(side === 'right') {
            queue.appendChild(item);
        }
    }
    // 结束入队列方法

    // 开始出队列方法
    function queueOut() {
        let side = this.id.toString().match(/([a-z]+)-/)[1];
        if(side === 'left') {
            if(queue.hasChildNodes()) {
                let first_child = queue.firstChild;
                if(first_child.innerText !== undefined) {
                    alert("您已移除元素:" + first_child.innerText);
                } else {
                    alert("队列里已经没有元素了！");
                }
                queue.removeChild(first_child);
            } else {
                alert("队列里已经没有元素了！");
            }
        }
        if(side === 'right') {
            if(queue.hasChildNodes()) {
                let last_child = queue.lastChild;
                if(last_child.innerText !== undefined) {
                    alert("您已移除元素:" + last_child.innerText);
                } else {
                    alert("队列里已经没有元素了！");
                }
                queue.removeChild(last_child);
            } else {
                alert("队列里已经没有元素了！");
            }
        }
    }
    // 结束出队列方法

    // 左侧入队列操作
    left_in.addEventListener('click', queueIn);
    // 右侧入队列操作
    right_in.addEventListener('click', queueIn);
    // 左侧出队列操作
    left_out.addEventListener('click', queueOut);
    // 右侧出队列操作
    right_out.addEventListener('click', queueOut);
    // 删除单个元素操作
    queue.addEventListener('click', function(e) {
        let item = e.target || event.target;
        if(item !== void 0) {
            this.removeChild(item);
        }
    });
})(window);
