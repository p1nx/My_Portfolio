$(document).ready(function(){
  /*for navigator links*/
  $('.navigator a').mouseenter(function() {
    $(this).css('color', '#FFF');
  });
  $('.navigator a').mouseleave(function() {
    $(this).css('color', '#6C6967');
  });
  /*for social buttons*/
  $('.button').mouseenter(function() {
    $(this).css('background-color', '#8CC3C8');
    $(this).css('border-color', '#8CC3C8');
    $(this).fadeTo('fast', 0.7);
  });
  $('.button').mouseleave(function() {
    $(this).fadeTo('fast', 1);
  });
});
