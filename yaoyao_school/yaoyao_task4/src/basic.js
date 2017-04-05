var grid = (function() {
    var grids = document.getElementsByClassName('grids')[0],
          cell = [];
    var init = function() {
        for(var i = 0; i < 10; i++) {
            cell.push([]);
            for(var j = 0; j < 10; j++) {
                view.getPosCell(grids, i, j);
                cell[i][j] = 0;
            }
        }
        var startX,
              startY;
        // 初始小方块，避免初始生成在边界导致无法移动
        startX = opt.getRandomNum(0, 7);
        startY = opt.getRandomNum(0, 7);
        // 生成初始方向
        // 1代表向上;2代表向右;3代表向下;4代表向左
        cell[startX][startY] = opt.getDirection();
        view.drawBox(cell[startX][startY], startX, startY);
        opt.listenOpt(cell);
    }
    return {
        init: init
    };
})();
