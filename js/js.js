// شهر، يوم، ساعة، دقيقة، ثانية odHMS بصيغة countdown إضافة عداد زمني 
$(document).ready(function () {
    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
    });

    // ‫ إلغاء الحركة في شاشات الجوال وتهيئة مكتبة wow  للعمل
    var wow = new WOW({ mobile: false });
    wow.init();

    $(function () {

        // إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
        $('.form-control').blur(function () {
            /* هون طبق ما يلي في حال عدم التركيز blur ال*/
            var x = document.forms["myForm"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert-success").fadeIn(200);
            }
        });

    });


    $(function () {
        // إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
        $('.form-control').blur(function () {
            /* هون طبق ما يلي في حال عدم التركيز blur ال*/
            var x = document.forms["myForm2"]["email2"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert-success").fadeIn(200);
            }
        });
    });

});