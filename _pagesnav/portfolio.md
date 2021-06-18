---
title: "Porfolio"
layout: page
permalink: "/portfolio/"
order: 1
---

<div class="section-highlight">
 <h3 class="margin-top-false">Study Cases</h3>
 {% include projects-grid.html %}
</div>


<div class="gallery-main-container">

 <h2>{{ site.data.otherprojects.docs_list_title }}</h2>



 <div class="gallery-container">
  <h3>Work done in University</h3>

  <div class="wrap-container">
  {% for data in site.data.otherprojects.docs_design %}


   <article>

   <figure>
     <img src="{{ data.image }}" alt="{{ data.image-alt }}">
    <figcaption>{{ data.category }}</figcaption>
   </figure>

    {% if data.url-exists == "yeap" %}
    <a class="gallery-link" href="{{ data.url }}" title="{{ data.title }}"><h2 class="gallery-link">{{ data.title }} &#8594;</h2></a>

    {% else %}
    <h2>{{ data.title }}</h2>

    {% endif %}

   <p>{{ data.description }}</p>
   </article>
    {% endfor %}
  </div>

 </div>



 <div class="gallery-container">
  <h3>Other Works</h3>
  <div class="wrap-container">
   {% for data in site.data.otherprojects.docs_other %}

   <article>

   <figure>
    <img src="{{ data.image }}" alt="{{ data.image-alt }}">
    <figcaption>{{ data.category }}</figcaption>
   </figure>

    {% if data.url-exists == "yeap" %}
    <a href="{{ data.url }}" title="{{ data.title }}"><h2>{{ data.title }} &#8594;</h2></a>

    {% else %}
    <h2>{{ data.title }}</h2>

    {% endif %}

   <p>{{ data.description }}</p>
   </article>
  {% endfor %}
  </div>
 </div>

</div>
