$(function() {

    $.validator.setDefaults({
      errorClass: 'invalid-feedback',
      highlight: function(element) {
        $(element)
  
          .addClass('is-invalid');
      },
      unhighlight: function(element) {
        $(element)
  
          .removeClass('is-invalid');
      },
      errorPlacement: function (error, element) {
        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  
   
    $("#register-form").validate({
      rules: {
        registrationemail: {
          required: true,
          email: true,
        },
      },
      messages: {
        "registrationemail": {
              required: "Este campo es obligatorio.",
              email: "Por favor, escribe una dirección de correo válida"
          },
            
      }
    });
  
      $("#register-form").on('submit', function() {
          if ($('#register-form').valid()) {
            document.getElementById("alertValidacion").innerHTML = "¡Correo valido";
          } else {
            document.getElementById("alertValidacion").innerHTML = "¡Correo no valido";;
          }
      });
  
  });
  
  