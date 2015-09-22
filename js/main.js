---
---
// $(function() {

  var $doc = $(document),
      $container = $('.container'),
      $nav = $('.nav'),
      $solutionsSub = $('.sub-nav [name="solutions"]'),
      $solutions = $('#solutions');

  {% for section in site.sections %}
    var ${{ section.slug }}Sub = $('.sub-nav [name="{{ section.slug }}"]'),
        ${{ section.slug }} = $('#{{ section.slug }}')
  {% endfor %}

  $container.scroll(function() {
    $nav.toggleClass('shrink', $container.scrollTop() > 0);
    {% for section in site.sections %}
      ${{ section.slug }}Sub.toggleClass('active',
        $doc.scrollTop() >= ${{ section.slug }}.offset().top - 1 &&
        $doc.scrollTop() < ${{ section.slug }}.offset().top + ${{ section.slug }}.height()
      );
    {% endfor %}
  });

// });
