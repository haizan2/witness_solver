function initialize_ui()
{
    $('[data-toggle="tooltip"]').tooltip();
    $('.menu-toggle-btn').on('focus', function(){this.blur();}).on('click', menu_toggle_btn_click);
    $('.menu-color-select').click(menu_color_select_click);
    $('#menu-color-input').on('input', menu_color_input_change());
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

function menu_color_select_click()
{
    var color = $(this).attr('fill');
    $('#menu-color-current').attr('fill', color);
    $('#menu-color-input').val(color.toUpperCase());
    $('.menu-constr-shape').attr('fill', color);
}

function menu_color_input_change()
{
    var oldText = "#000000"
    return function() {
        var newText = '#' + /#*(.*)/.exec($(this).val())[1].toUpperCase();
        if(/^[0-9A-F]{0,6}$/.exec(newText.substr(1))) {
            oldText = newText;
        }
        $(this).val(oldText);
        if(oldText.length == 4 || oldText.length == 7) {
            $('#menu-color-current').attr('fill', oldText);
            $('.menu-constr-shape').attr('fill', oldText);
        }
    }
}
