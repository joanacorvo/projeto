---
title: "Porfolio"
layout: page
permalink: "/portfolio/"
---

<div>
{% for project in site.projects %}
<a href="{{ site.baseurl }}{{ project.url }}">
<div>
<h3>{{ project.title }}</h3>
<p>{{ project.category }}</p>
</div>
</a>
{% endfor %}
</div>


<div>

<h2>{{ site.data.otherprojects.docs_list_title }}</h2>



<div>
<h3>Work done in University</h3>
{% for data in site.data.otherprojects.docs_design %}

<article>

<figure>
<img src="{{ data.image }}" alt="{{ data.image-alt }}">
<figcaption>{{ data.category }}</figcaption>
</figure>

    {% if data.url-exists == "yeap" %}
    <a href="{{ data.url }}"><h2>{{ data.title }} &#8594;</h2></a>

    {% else %}
    <h2>{{ data.title }}</h2>

    {% endif %}

<p>{{ data.description }}</p>
</article>
{% endfor %}
</div>



<div>
<h3>Other Works</h3>
{% for data in site.data.otherprojects.docs_other %}

<article>

<figure>
<img src="{{ data.image }}" alt="{{ data.image-alt }}">
<figcaption>{{ data.category }}</figcaption>
</figure>

    {% if data.url-exists == "yeap" %}
    <a href="{{ data.url }}"><h2>{{ data.title }} &#8594;</h2></a>

    {% else %}
    <h2>{{ data.title }}</h2>

    {% endif %}

<p>{{ data.description }}</p>
</article>
</div>



{% endfor %}

</div>
