window.onload = function () {
    var stage = document.getElementById('stage');
    var menu = document.getElementById('mymenu');
    document.body.addEventListener('click', function () {
        menu.style.display = "none";
    });
    stage.addEventListener('contextmenu', function (event) {
        event = event || window.event;
        event.preventDefault();
        var stageCoords = {         // 转化鼠标坐标
            x: event.clientX - stage.offsetLeft,
            y: event.clientY - stage.offsetTop
        };
        // 消除上一次右击残留的位置属性
        menu.style.top = "auto";
        menu.style.right = "auto";
        menu.style.bottom = "auto";
        menu.style.left = "auto";
        // 显示菜单
        menu.style.display = "block";
        // 默认菜单在指针右下方
        if ( stage.offsetWidth - stageCoords.x > menu.offsetWidth &&
            stage.offsetHeight - stageCoords.y > menu.offsetHeight ) {
            menu.style.left = stageCoords.x + "px";
            menu.style.top = stageCoords.y + "px";
        }
        // 菜单在指针左下方
        if ( stage.offsetWidth - stageCoords.x <= menu.offsetWidth &&
            stage.offsetHeight - stageCoords.y > menu.offsetHeight ) {
            menu.style.right = stage.offsetWidth - stageCoords.x + "px";
            menu.style.top = stageCoords.y + "px";
        }
        // 菜单在指针右上方
        if ( stage.offsetWidth - stageCoords.x > menu.offsetWidth &&
            stage.offsetHeight - stageCoords.y <= menu.offsetHeight ) {
            menu.style.left = stageCoords.x + "px";
            menu.style.bottom = stage.offsetHeight - stageCoords.y + "px";
        }
        // 菜单在指针左上方
        if ( stage.offsetWidth - stageCoords.x <= menu.offsetWidth &&
            stage.offsetHeight - stageCoords.y <= menu.offsetHeight ) {
            menu.style.right = stage.offsetWidth - stageCoords.x + "px";
            menu.style.bottom = stage.offsetHeight - stageCoords.y + "px";
        }
    });
};
