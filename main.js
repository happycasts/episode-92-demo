$(document).ready(function() {

  $('.nav-list ul li').click(function () {
    $('.nav-list ul li').removeClass('active');
    var thisClass = $(this).attr("class");
    $('.nav-content').children().hide();
    $('.nav-content').children('.' + thisClass).show();
    $(this).addClass('active');
    return false;
  });
  $('.nav-list').children('.dark').addClass('active');
  $('.nav-content').children('.dark').show();
});
