---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: "Joana Corvo"
---
<section>
<h1>Joana Corvo</h1>
<h4>Junior Product Designer</h4>
<p>I consider myself a problem-solver and someone who is always looking forward to learn new things.
I find the combination between creative work and technology to be my sweet spot!</p>
{% include email-btn.html %}
</section>

<section>
<h2>Portfolio</h2>
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
</section>

<section>
<h2>Contact</h2>
<p>If you found something interesting here, or just want to talk about the latest Bring Me The Horizon album, I am always available for a chat!</p>
{% include email-btn.html %}
</section>