var forms = (function () {
    var successNum = 0;     // 检验成功表单数量
    // 改变提示信息
    function changeHint(text_box, hint, text, colors) {
        hint.innerText = text;
        hint.style.color = colors;
        text_box.style.border = "1px solid " + colors;
    }
    // 展现提示信息
    function showHint( text_box, location ) {
        var hint = document.getElementsByClassName( location + "-hint" );
        if ( location === "names" ) {
            changeHint( text_box, hint[0], "请输入姓名（英文或汉字）", "#4a5553" );
        }
        if ( location === "sex" ) {
            changeHint( text_box, hint[0], "请输入您的性别", "#4a5553" );
        }
        if ( location === "age" ) {
            changeHint( text_box, hint[0], "请输入您的年龄", "#4a5553" );
        }
        if ( location === "school" ) {
            changeHint( text_box, hint[0], "请输入您的学校", "#4a5553" );
        }
    }
    // 验证表单
    function checkText( text_box, location ) {
        var hint = document.getElementsByClassName( location + "-hint" );
        // 如果没有输入
        if ( !text_box.value ) {
            changeHint( text_box, hint[0], "必填，不能为空", "#e83313" );
        } else {
            // 检测名字
            if ( location === "names" ) {
                if ( text_box.value.match(/^[a-zA-Z\u4e00-\u9fa5]+$/g) ) {
                    changeHint( text_box, hint[0], "名字格式正确", "#06c108" );
                    successNum++;
                } else {
                    changeHint( text_box, hint[0], "名字格式错误", "#de2d0d" );
                }
            }
            // 检测性别
            if ( location === "sex" ) {
                if ( text_box.value.match(/^(female)$|^(male)$/i) ) {
                    changeHint( text_box, hint[0], "性别格式正确", "#06c108" );
                    successNum++;
                } else {
                    changeHint( text_box, hint[0], "性别格式错误(female/male)", "#de2d0d" );
                }
            }
            // 检测年龄
            if ( location === "age" ) {
                if ( text_box.value.match(/^\d+$/g) ) {
                    changeHint( text_box, hint[0], "年龄格式正确", "#06c108" );
                    successNum++;
                } else {
                    changeHint( text_box, hint[0], "年龄格式错误", "#de2d0d" );
                }
            }
            // 检测学校
            if ( location === "school" ) {
                if ( text_box.value.match(/^[a-zA-Z\u4e00-\u9fa5]+$/gi) ) {
                    changeHint( text_box, hint[0], "学校格式正确", "#06c108" );
                    successNum++;
                } else {
                    changeHint( text_box, hint[0], "学校格式错误", "#de2d0d" );
                }
            }
        }
    }
    // 输入检验
    function exameText() {
        var input_text = document.getElementsByClassName('input-text');
        for (var i = 0; i < input_text.length; i++) {
            input_text[i].addEventListener('focus', function () {
                showHint( this, this.id );
            } );
            input_text[i].addEventListener('blur', function () {
                checkText( this, this.id );
            });
        }
    }
    // 提交检验
    function Success() {
        successNum = 0;
        var input_text = document.getElementsByClassName('input-text');
        for (var i = 0; i < input_text.length; i++) {       // 验证所有输入信息
            checkText( input_text[i], input_text[i].id );
        }
        if ( successNum === input_text.length ) {
            return true;
        } else {
            return false;
        }
    }
    var form_check = function () {
        exameText();
        var sub = document.getElementsByClassName("submit");
        sub[0].addEventListener( 'click', function () {
                if ( Success() ) {
                    setTimeout( function () { alert("提交成功") }, 300);        // 延迟使检测信息先显示
                } else {
                    setTimeout( function () { alert("提交失败") }, 300);
                }
        });
    };
    return {
        form_check: form_check
    };
})();
