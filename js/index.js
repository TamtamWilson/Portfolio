$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function() {
  $('body').scrollspy({
    target: ".navbar",
    offset: 60
  });
});
$('.navbar-collapse .nav a').on('click', function(){
    if($('.navbar-collapse').hasClass('in'))
    {
        $(".navbar-collapse").collapse('hide');
    }
});
$(document).ready(function() {
  // Add smooth scrolling to all links in navbar
  $(".navbar a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {

        window.location.hash = hash;
      });
    }
  });
})

$.validator.setDefaults({
  highlight: function(element) {
    $(element).closest('.form-group').addClass('has-error');
  },
  unhighlight: function(element) {
    $(element).closest('.form-group').removeClass('has-error');
  },
  errorElement: 'span',
  errorClass: 'help-block',
  errorPlacement: function(error, element) {
    if (element.parent('.input-group').length) {
      error.insertAfter(element.parent());
    } else {
      error.insertAfter(element);
    }
  }
});

$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/hunneystreasures@gmail.com",
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();
      }
    });
  }
});