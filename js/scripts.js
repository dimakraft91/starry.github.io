$(document).ready(function() {
    var w = screen.width,
        h = screen.height;
    //E-mail Ajax Send
    $("form").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                var thisForm = $(form);
                $.ajax({
                    type: "POST",
                    url: thisForm.attr("action"),
                    data: thisForm.serialize()
                }).done(function() {
                    $.fancybox.close();
                    $.fancybox({
                        href: '#myThanks',
                        wrapCSS: 'owrap',
                        openEffect: "elastic",
                        openMethod: "zoomIn",
                        closeEffect: "elastic",
                        closeMethod: "zoomOut",
                    });
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                    it.trigger("reset");
                });
                return false;
            },
            success: function() {},
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

    //  scroll with offset
    $("#navigation").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        // screen width
        if (w < 768) {
            $(this).attr('data-top', 90);
        }
        var topOffset = $(this).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - topOffset;
        // console.log(top);
        $('body,html').animate({ scrollTop: finalTop }, 700);

    });


    if (w < 768) {
        $(".nav_list li a").click(function() {
            $(".hidden_trigger").removeClass('open_menu');
            $(".nav_list").slideUp();
        });
    }



    $(".scroll_btn").click(function() {
        event.preventDefault();
        var id = $(this).attr('href');
        // screen width
        // if (w < 768) {
        //     $(id).attr('data-top', 90);
        // }
        var topOffset = $(this).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - topOffset;
        // console.log(top);
        $('body,html').animate({ scrollTop: finalTop }, 700);
    });


    // top menu
    if (w > 768) {
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 700) $(".nav_list").removeClass("more");
            else $(".nav_list").addClass("more").fadeIn("slow");
        });
    }

    // menu-btn 
    $(".hidden_trigger").click(function() {
        $(".nav_list").slideToggle();
        $(this).toggleClass('open_menu');
    });

    //masked
    // $('input[type=tel]').mask("+99(999) 999-99-99");


    // var $table = $('.my_table');
    // var $fixedColumn = $table.clone().insertBefore($table).addClass('fixed-column');
    // $fixedColumn.find('th:not(:first-child),td:not(:first-child)').remove();
    // $fixedColumn.find('tr').each(function(i, elem) {
    //     $(this).height($table.find('tr:eq(' + i + ')').height());
    // });

    if (isMobile.iOS()) {
        $(".fixed-column").css('width', '100px');
    }


});
