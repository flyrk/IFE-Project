var forms = (function () {
    function showHint( location ) {
        var hint = document.getElementsByClassName( location + "-hint" );
        if ( location === "names" ) {
            hint[0].innerText = "请输入姓名（英文或汉字）";
        }
    }
    var form_check = function () {
        var input_text = document.getElementsByClassName('input-text');
        for (var i = 0; i < input_text.length; i++) {
            input_text[i].addEventListener('focus', showHint( input_text[i].id) );
        }

    }
    return {
        form_check: form_check
    }
})();
