var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
})

$(document).ready(function () {
    //código jQuery adicional

    $(".navbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    })

    $("#botonAlerta").click(function () {
        alert("El correo fue enviado correctamente")
    })

    $(".mititulo").on({
        mouseover: function () {
            $(this).css("font-size", "30px", "font-weight-bold");
        },
        mouseout: function () {
            $(this).css("font-size", "20px");
        }
    })
})
