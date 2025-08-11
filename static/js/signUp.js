$(function() {
    $('#btnSignUp').click(function() {
 
        $.ajax({
            url: '/signUp',
            data: $('form').serialize(),
            type: 'POST',
              success: function(response) {
      $('#feedback').html(response.html);
  },
            error: function(error) {
                console.log(error);
            }
        });
    });
});