var main = (function() {
    function showInfo(name) {
        console.log(name);
        var info = document.getElementsByClassName(name + '-info')[0];
        console.log(info);
        info.style.display = "block";
    }
    var init = function() {
        var check = document.getElementsByClassName('student-type');
        for(var i = 0; i < check.length; i++) {
            var item = check[i];
            item.addEventListener('click', showInfo(this.id));
        }
    };
    return {
        init: init
    };
})();
