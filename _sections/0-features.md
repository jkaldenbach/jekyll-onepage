---
title: "Features"
# must be valid JS variable name:
slug: 'features'
---
# {{ page.title }}

{% for icon in site.posts %}
  {{ icon.url }}
{% endfor %}
{: .listClass}
