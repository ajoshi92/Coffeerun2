(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;
    var info = [];
    var data = {};

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }


    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('setting submit handler for form');
        this.$formElement.on('submit', function(event) {

            event.preventDefault();


            $(this).serializeArray().forEach(function(item) {
                //  var index = i;

                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);


            });




            console.log(data);

            //displayAcheivement();
            fn(data);
            //this.reset();
            this.elements[0].focus();
            displayAcheivement();

        });

    };




    function displayAcheivement() {

        //var ach = document.getElementById('submit');

        var modal = document.getElementById('myModal');
        var yesmodal = document.getElementById('yes');
        var No = document.getElementById('no');
        var span = document.getElementsByClassName('close')[0];
        var mailId;


        if (data.size === 'coffee-zilla' && data.strength >= 70 && data.flavor != '') {
            modal.style.display = 'block';
            yesmodal.onclick = function() {
                if (data.emailAddress != '') {
                    modal.style.display = 'none';
                  //  $('myModal').modal('hide');
                    showDetails();
                    mailId = data.emailAddress;
                    console.log(mailId);
                    console.log('achievement unlocked and Email is saved');
                } else {
                    alert("Email Field is empty");
                    //modal.style.display = 'none';
                    $('#myModal').hide();
                    $('.modal-backdrop').hide();
                }

            };

            No.onclick = function() {
              modal.style.display = 'none';
            };
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            };
            span.onclick = function() {
                modal.style.display = 'none';
            };
        } else {
            console.log("one failed");
        }
        //console.log("ty:" + data.coffee);
        if (mailId === $('#emailInput').val()) {
            showDetails();
            console.log('value displayed');
        }



    }




    FormHandler.prototype.displaySlide = function() {

        var mouse = document.getElementById('strengthLevel');
        mouse.addEventListener('mousemove', function() {
            var value = $("#strengthLevel").val();
            $("#SliderVal").val(value);
            if ($("#strengthLevel").val() < 35) {

                $('#SliderVal').css({
                    "color": "#008000"

                });
            } else if ($("#strengthLevel").val() > 35 && $("#strengthLevel").val() < 70) {
                $('#SliderVal').css({
                    "color": "#EDFF33"
                });
            } else {
                $('#SliderVal').css({
                    "color": "#FF0000"
                });
            }

        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
