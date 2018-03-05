//表单验证

(
    function () {
        //整体检测
        $('form').on('submit', function(e) {
            var elements = this.elements;
            var valid = {};
            var isValid;
            var isFormValid;
            for (var i = 0, l = (elements.length - 1); i < l; i++) {
                isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
                if (!isValid) {
                    showErrorMessage(elements[i]);
                } else {
                    removeErrorMessage(elements[i]);
                }
                valid[elements[i].id] = isValid;
            }
            if (!validateBio()) {
                showErrorMessage(document.getElementById('bio'));
                valid.bio = false;
            } else {
                removeErrorMessage(document.getElementById('bio'));
            }
            if (!validateQQ()) {
                showErrorMessage(document.getElementById('qq'));
                valid.bio = false;
            } else {
                removeErrorMessage(document.getElementById('qq'));
            }

            for (var field in valid) {
                if (!valid[field]) {
                    isFormValid = false;
                    break;
                }
                isFormValid = true;
            }
            if (!isFormValid) {
                e.preventDefault();
                $('#newText').removeAttr('data-toggle');
                $('#newText').removoAttr('data-target');
            }
            else{
                e.preventDefault();
                var newText = $('#newText');
                newText.attr("data-toggle","modal");
                newText.attr("data-target","#mymodal")

            }
        });

        //检查是否存在required属性&&检查值是否为空
        function validateRequired(el) {
            if (isRequired(el)) {
                var valid = !isEmpty(el);
                if (!valid) {
                    setErrorMessage(el,  '值不能为空');
                }
                return valid;
            }
            return true;
        }
        function isRequired(el) {
            return ((typeof el.required === 'boolean') && el.required) || (typeof el.required === 'string');
        }
        function isEmpty(el) {
            return !el.value || el.value === el.placeholder;
        }

        //验证输入框的不同类型
        function validateTypes(el) {
            if (!el.value) return true;
            var type = $(el).data('type') || el.getAttribute('type');
            if (typeof validateType[type] === 'function') {
                return validateType[type](el);
            } else {
                return true;
            }
        }


        //验证140字
        function validateBio() {
            var bio = document.getElementById('bio');
            var valid = bio.value.length <= 140;
            if (!valid) {
                setErrorMessage(bio, '不能超过140个字');
            }
            return valid;
        }
        //验证qq号长度
        function validateQQ() {
            var QQ = document.getElementById('qq');
            var valid = QQ.value.length >= 5;
            if(!valid){
                setErrorMessage(QQ,'QQ号长度不能小于5位');
            }
            return valid;
        }
        //创建错误信息
        function setErrorMessage(el, message) {
            $(el).data('errorMessage', message);
        }
        //显示错误信息
        function getErrorMessage(el) {
            return $(el).data('errorMessage') || el.title;
        }

        function showErrorMessage(el) {
            var $el = $(el);
            var errorContainer = $el.siblings('.error.message');

            if (!errorContainer.length) {

                errorContainer = $('<span class="error message"></span>').insertAfter($el);
            }
            errorContainer.text(getErrorMessage(el));
        }

        function removeErrorMessage(el) {
            var errorContainer = $(el).siblings('.error.message');
            errorContainer.remove();
        }
        //利用正则表达式验证数据类型
        var validateType = {
            email: function (el) {
                var valid = /[^@]+@[^@]+/.test(el.value);
                if (!valid) {
                    setErrorMessage(el, '请输入一个有效的邮箱');
                }
                return valid;
            },
            number: function (el) {
                var valid = /^\d+$/.test(el.value);
                if (!valid) {
                    setErrorMessage(el, '请输入一个有效数字');
                }
                return valid;
            }
        };

    }());
