---
---

$('.no-js').removeClass('no-js');

(function() {

  var $doc = $(document),
      $container = $('.container'),
      $nav = $('.nav'),
      $solutionsSub = $('.sub-nav [name="solutions"]'),
      $solutions = $('#solutions');

  {% for section in site.sections %}
    var ${{ section.slug }}Sub = $('.sub-nav [name="{{ section.slug }}"]'),
        ${{ section.slug }} = $('#{{ section.slug }}'),
        ${{ section.slug }}OffsetTop = ${{ section.slug }}.offset().top,
        ${{ section.slug}}Height = ${{ section.slug }}.height();
  {% endfor %}

  $container.scroll(function(e) {
    $nav.toggleClass('shrink', e.target.scrollTop > 0);
    {% for section in site.sections %}
      ${{ section.slug }}Sub.toggleClass('active',
        e.target.scrollTop >= ${{ section.slug }}OffsetTop - 1 &&
        e.target.scrollTop < ${{ section.slug }}OffsetTop + ${{ section.slug }}Height
      );
    {% endfor %}
  });

})()
