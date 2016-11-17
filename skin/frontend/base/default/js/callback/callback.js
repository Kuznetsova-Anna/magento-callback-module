/*show callback form*/
function div_show(_this) {
    var getPopup = _this.nextElementSibling.children[0];

    if (getPopup.hide()) {
        getPopup.show();
        // getPopup.style.zIndex = "100";
        // getPopup.style.position = "absolute";
        // getPopup.style.background = '#FBFBFB';
    } else {
        getPopup.hide();
    }
}
jQuery(document).ready(function() {
    jQuery('.popupCallback .close').click(function () {
        console.log("qwe!");
        jQuery(this).parents('.popupCallback').hide();
    });
});

var callbackForm = {

    init : function (id) {
        _this = this;
        _this.id = id;
        _this.formId = '#form-' + id;
        _this.formValid = 'form-' + id;
        _this.statusMessage = '#status_message' + id;
        _this.ajaxForm();

    },

    ajaxForm: function()
    {
       //console.log(_this.dataForm);
        var dataForm = new VarienForm(_this.formValid, true);
        var validator = dataForm.validator;
        jQuery(_this.formId).submit(function () {
            var content = jQuery(this).parents('div.callback-form');
            console.log(validator);
            // console.log(dataForm.validator.validate());
            content.find('.errors-messages').remove();
            var data = this.serialize();
            console.log(data);
            // console.log(this.validator.validate());
            jQuery.ajax({
                type: "POST",
                url: "/itdelight_callback/ajax",
                data: data,
                success: function (result) {
                    var arr = JSON.parse(result);
                    if (arr.status == 'SUCCESS') {
                        content.find('div.callback').hide();
                        content.find('div.successMessage').show();
                        content.find('p.success').text(arr.message);
                    } else if (arr.status == 'ERROR') {
                        content.find('.submit').after('<p class="errors-messages">' + arr.message + '</p>');
                    }
                },
                error: function () {
                    content.find('.submit').after('<p class="errors-messages">Please fill in all the required fields</p>');
                }
            });

            return false;

        });
    },
}