/// сайдбар

$( document ).ready(function(){
    $(".burger-btn").click(function(){
        $('aside').toggleClass('active');
        if ($('nav span').hasClass('hide')) {
            setTimeout(function(){
                $('nav span').removeClass('hide');
            }, 200);
        }
        else{
            $('nav span').addClass('hide')
        };
        return false

    });
});
/// вызов языкового меню
$(document).ready(function(){
    $('.language_drop-target').click(function(){
        $('.language_list_item:first').siblings().toggleClass('hide');
        $('.language').toggleClass('drordown-active-color');

    });

/// замена языка
    $(".language_list_item_target").click(function(){
        var tar = $(this).parent();
        $('.language_list').prepend(tar);
        $('.language_list_item').not('.language_list_item:first').addClass('hide');
        $('.language').toggleClass('drordown-active-color');

        return false
    });


});

///вызов меню профиля

$(document).ready(function(){
    $('.profile_drop-target').click(function(){
        $('.profile_namigation').toggleClass('hide')
    });
});



///// popup

$(document).ready(function() {
    $(".add-more-btn").click(function(event) {
        event.preventDefault();
        $(".overlay").fadeIn(400, function() {
            $(".popup_form")
                .css("display", "block")
                .animate({ opacity: 1, top: "50%" }, 200);
        });
    });

    $(".popup_close, .overlay").click(function() {
        $(".popup_form").animate({ opacity: 0, top: "45%" }, 200, function() {
            // пoсле aнимaции
            $(this).css("display", "none");
            $(".overlay").fadeOut(400);
        });
    });
});

$(document).ready(function(){


    $('.refresh-btn').click(function() {
        $('input:checked').prop('checked', false);
        return false
    });
});

$(document).ready(function () {
  $(".fa-star").click(function(){
      $(this).toggleClass('star-color')
      return false
  }) ;
});