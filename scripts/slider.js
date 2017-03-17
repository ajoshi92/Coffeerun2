function showValue(newValue) {
    'use strict';
    //    document.getElementById("SliderVal").value = newValue;
    var value = $("#strengthLevel").val();
    $("#SliderVal").val(value);


    if ($("#strengthLevel").val() < 35) {

        $('#caffeinestr').css({
            "color": "#008000"

        });
    } else if ($("#strengthLevel").val() > 35 && $("#strengthLevel").val() < 70) {
        $('#caffeinestr').css({
            "color": "#EDFF33"
        });
    } else {
        $('#caffeinestr').css({
            "color": "#FF0000"
        });
    }
}
