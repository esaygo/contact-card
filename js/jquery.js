$(document).ready(function() {

    $('#form').submit(function(event) {
      event.preventDefault();

      var firstName = $('#form-firstName').val();
      var secondName = $('#form-lastName').val();
      // var description = $('#description').val();
      // localStorage.setItem('desc', description);

      $('#card').append('<article class="cards"><h1 class="show">' + firstName + " " + secondName + '</h1><div>Click for description</div><p class="desc hidden">' + $("#description").val() + '</p></article>');
      $('input:text').val("");
      $('textarea').val("");
});


$('#card').on('click', '.cards', function() {


  $(this).find('.hidden').css("visibility","visible");
  $(this).find('h1').css("visibility", "hidden");
  $(this).find('div').css("visibility", "hidden");

});



});
