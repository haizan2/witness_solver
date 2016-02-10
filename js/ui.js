function initialize_ui()
{
    $('[data-toggle="tooltip"]').tooltip();
    $('.menu-toggle-btn').on('focus', function(){this.blur();}).on('click', menu_toggle_btn_click);
}

function menu_toggle_btn_click()
{
    var state = $(this).hasClass('active');
    $('.menu-toggle-btn').removeClass('active');
    if(state) {
        // ...
    } else {
        $(this).addClass('active');
    }
}
