var opt = (function() {
    var getRandomNum = function(left, right) {
        return Math.floor(Math.random() * (right - left)) + 1;
    };

    var getDirection = function() {
        return Math.floor(Math.random() * 4) + 1;
    };

    var moveBox = function(cell) {
        var flag = 0;       // 标记是否找到染色格
        for(var i = 0; i < 10; i++) {
            for(var j = 0; j < 10; j++) {
                if(cell[i][j] !== 0) {
                    flag = 1;
                    switch (cell[i][j]) {
                        case 1:             // 向上
                            if(i - 1 >= 0) {
                                cell[i-1][j] = cell[i][j];
                                view.clearBox(i, j);
                                view.drawBox(cell[i-1][j], i-1, j);
                                cell[i][j] = 0;
                            } else {
                                alert("对不起，该方向无法移动了，请重新输入指令");
                            }
                            break;
                        case 2:             // 向右
                            if(j+1 <= 9) {
                                cell[i][j+1] = cell[i][j];
                                view.clearBox(i, j);
                                view.drawBox(cell[i][j+1], i, j+1);
                                cell[i][j] = 0;
                            } else {
                                alert("对不起，该方向无法移动了，请重新输入指令");
                            }
                            break;
                        case 3:             // 向下
                            if(i + 1 <= 9) {
                                cell[i+1][j] = cell[i][j];
                                view.clearBox(i, j);
                                view.drawBox(cell[i+1][j], i+1, j);
                                cell[i][j] = 0;
                            } else {
                                alert("对不起，该方向无法移动了，请重新输入指令");
                            }
                            break;
                        case 4:             // 向左
                            if(j - 1 >= 0) {
                                cell[i][j-1] = cell[i][j];
                                view.clearBox(i, j);
                                view.drawBox(cell[i][j-1], i, j-1);
                                cell[i][j] = 0;
                            } else {
                                alert("对不起，该方向无法移动了，请重新输入指令");
                            }
                            break;
                        default:
                            throw new Error("对不起，该方块方向发生错误");
                    }
                    break;
                }
            }
            if(flag) {      // 找到一个格子后直接跳出循环
                break;
            }
        }
    };

    var judgeOpt = function(cell) {
        var input_info = document.getElementById('option').value;
        switch (input_info) {
            case "GO":
                moveBox(cell);
                break;
            case "TUN LEF":
                
                break;
            default:
                alert("您输入了错误信息，请重新输入");
        }
    }
    var listenOpt = function(cell) {
        var commit = document.getElementById('commit');
        commit.addEventListener('click', (function(cell) {
             return function() {
                 return judgeOpt(cell);
             };
        })(cell));
    };
    return {
        getRandomNum: getRandomNum,
        getDirection: getDirection,
        listenOpt: listenOpt
    };
})();
