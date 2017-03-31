(function(window) {
    let queues = [];
    let left_in = document.getElementById('left-in'),
        right_in = document.getElementById('right-in'),
        left_out = document.getElementById('left-out'),
        right_out = document.getElementById('right-out'),
        queue = document.getElementsByClassName('queue')[0];

    // 开始入队列方法
    function queueIn() {
        let input_number = document.getElementById('input-number').value,
            item = document.createElement('div'),
            side = this.id.toString().match(/([a-z]+)-/)[1];
        item.className = 'queue-item';
        item.innerText = input_number;
        if(side === 'left') {
            queues.unshift(input_number);
            if(queue.hasChildNodes()) {
                let first_child = queue.firstChild;
                queue.insertBefore(item, first_child);
            } else {
                queue.appendChild(item);
            }
        }
        if(side === 'right') {
            queues.push(input_number);
            queue.appendChild(item);
        }
    }
    // 结束入队列方法

    // 开始出队列方法
    function queueOut() {
        let side = this.id.toString().match(/([a-z]+)-/)[1];
        if(side === 'left') {
            if(queues) {
                alert("您已移除元素:" + queues.shift());
            }
            if(queue.hasChildNodes()) {
                let first_child = queue.firstChild;
                queue.removeChild(first_child);
            }
        }
        if(side === 'right') {
            if(queues) {
                alert("您已移除元素:" + queues.pop());
            }
            if(queue.hasChildNodes()) {
                let last_child = queue.lastChild;
                queue.removeChild(last_child);
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
        if(item) {
            this.removeChild(item);
        }
    });
})(window);
