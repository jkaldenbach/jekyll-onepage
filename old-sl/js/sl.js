$(function() {
  
  $('.container').scroll(function() {
    $('.nav').toggleClass('shrink', $('.container').scrollTop() > 0);
    $('.sub-nav [name="solutions"]').toggleClass('active', $(document).scrollTop() >= $('#solutions').offset().top - 100);
  });

  $('.elem1').each(function(index) {
    var el = $(this);

    //stretch the background images to fill the text content
    el.height(el.siblings('.elem1-text').outerHeight() + 100);
  });

  $('.parascroll').parascroll();
});