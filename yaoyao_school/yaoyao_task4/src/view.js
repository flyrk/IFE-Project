var view = (function() {
    var cell_width = 30;
    var getPosCell = function(grids, row, col) {
        var newCell = document.createElement('div');
        newCell.className = "cell " + "cell-" + row + "-" + col;
        newCell.style.top = row * 30 + "px";
        newCell.style.left = col * 30 + "px";
        grids.appendChild(newCell);
    };

    var clearBox = function(row, col) {
        var cell = document.getElementsByClassName('cell-' + row + '-' + col)[0];
        cell.style.backgroundColor = "transparent";
        cell.style.border = "1px solid #afafba";
    };
    var drawBox = function(direct, row, col) {
        var cell = document.getElementsByClassName('cell-' + row + '-' + col)[0];
        switch(direct) {
            case 1:
                cell.style.borderTop = "10px solid #1239c4";
                break;
            case 2:
                cell.style.borderRight = "10px solid #1239c4";
                break;
            case 3:
                cell.style.borderBottom = "10px solid #1239c4";
                break;
            case 4:
                cell.style.borderLeft = "10px solid #1239c4";
                break;
            default:
                break;
        }
        cell.style.backgroundColor = "#df4616";
    };

    return {
        getPosCell: getPosCell,
        drawBox: drawBox,
        clearBox: clearBox
    };
})();
