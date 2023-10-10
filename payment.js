$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
 });
$("#menu-toggle, #menu-toggle-2").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $(".nav-text").toggleClass("hide-text");
});
 
 function activeList(){
   $('.sidebar-nav li').click(function() {
      $('.sidebar-nav li').removeClass('active');
      $(this).addClass('active');
  });
 }

 function initMenu() {
    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
       function() {
          var checkElement = $(this).next();
          if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
             return false;
          }
          if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
             $('#menu ul:visible').slideUp('normal');
             checkElement.slideDown('normal');
             return false;
          }
       }
    );
 }



 const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', function() {
    const selectedFile = fileInput.files[0];
    console.log('Selected File:', selectedFile);
});