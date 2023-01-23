---
layout: ../../layouts/BlogPostLayout.astro
title: "Built with Astro"
date: 2022-02-07 22:25:17 -0500
categories: astro web
---

I recently went through the exercise of rebuilding my website and blog. Previously
the site was built with [Nunjucks](https://mozilla.github.io/nunjucks/) and a custom
[gulp.js](https://gulpjs.com/) build system. The blog was on a separate site
built with [Jekyll](https://jekyllrb.com/). All of that was dropped and recreated
using [Astro](https://astro.build/). Why Astro? First off
it sounded like an exciting new technology to explore. It also has a more modern feel
compared to something like Nunjucks or Handlebars like I was previously using.
You can use components just like you would in a system like React or Vue.
Additionally, it has some very interesting ideas. For example, shipping zero JavaScript
to the client by default, but allowing for "partial hydration" for interactivity
when needed. Another cool feature is that you can mix and match frameworks
like React, Vue, and Svelte. You can also ignore all that and use plain HTML
or Markdown. But best of all you can combine everything as you see fit.

Switching to Astro was mostly a smooth experience. The main pages of the site
are mostly just some static HTML so recreating them was a breeze. I set up a new
section with my work experience so I put that into a JSON file to import into
the index.astro page. This will make future updates much simpler. As for the blog,
the transition was fairly straightforward. The format for the Markdown posts from my Jekyll
blog was pretty much all I needed for the new Astro blog. Most of the changes
were around setting the layout for each post and updating all the code blogs.
There were a couple of pain points around CSS. For some reason, Astro wasn't
generating any CSS files with the way that I was doing my CSS. I believe this was
because I was attempting to use Bootstrap instead of the integrated Tailwind.
Tailwind is on my "2022 list of things to learn", but since I haven't gotten there
yet Bootstrap was a quick option. I ended up solving my CSS problems by copying
the Bootstrap CSS file into my `/public` folder. It is not the most elegant solution.
But it works for now until I discover a better one (or drop it for Tailwind!).
The other pain point was with the `getStaticPaths` function. I didn't
do any deep debugging, but it seemed as though I could not pass variables from
the outside scope into the closure. This made reusing titles and taglines annoying
and foiled my attempt to reuse the same function between two different blogs.

With the built-in markdown page support, you can easily add code blocks with syntax
highlighting. This is included by default, but I don't believe the docs do a good
job at explaining this or explaining how to use it. The markdown parse in Astro
uses the [Prism](https://prismjs.com/) plugin for code highlighting. For
anything to show up nicely on your pages you need to go
[grab some CSS from the Prism project](https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript).
Just choose your theme and what languages you want to support for the provided list.
Download the CSS file (you can ignore the JS) to your `/public` folder and include
it from your markdown page layout.

One helpful tip I learned while building my site was to use the rest operator
with pagination. The rest operator as a part of the route makes it possible to
have the index page also serve as page one. This was mentioned in the docs but
I missed it the first time through. It's as simple as creating a file like
`blog/[...page].astro` and the resulting urls will be `/blog`, `/blog/2`, `/blog/3`,
etc.

Another tip/issue was my 404 page wasn't always getting the correct path to the
CSS. The way my hosting provider works is you can create a 404.html page. That page
will be used if the provider needs to serve a 404. Because a 404
page can happen at any level of the url path, a relative url for the CSS won't work.
Since this is a bit unique to my situation I just added a simple `sed` command to run
after my build process: `sed -i 's=../assets=/assets=g' dist/404.html`.

Overall I've had a positive experience with Astro. As this blog evolves, I hope
to gain even more experience with Astro. And I can now call myself an *Astro-naut*!
