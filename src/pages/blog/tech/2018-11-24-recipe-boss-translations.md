---
layout: ../../../layouts/TechPostLayout.astro
title:  "Recipe Boss Translations"
date:   2018-11-24 00:08:00 -0400
categories: web releases
---

Recently I've released several minor updates to Recipe Boss with rather large
impact. I added translation support and several awesome people have added
translations into 4 different languages so far. I just want to say a huge thank
you to each of them! In the online version you can use the language picker in
the footer of the app to switch between languages. And in the app it will
automatically pick up the system's language and use that. I recently discovered
the `window.navigator.language` value in JavaScript. This will allow you to
detect the system's language and use it in your HTML app. In Ubuntu Touch this
works in both the new Morph browser and in the old Oxide browser, making this
prefect for anyone writing Ubuntu Touch apps in JavaScript and HTML. Hopefully
this can be useful for other developers as well!

Recipe boss can be found online at [recipes.bhdouglass.com](https://recipes.bhdouglass.com),
and in the [OpenStore for Ubuntu Touch](https://open-store.io/app/recipe-boss.bhdouglass).
Feedback is welcome and you can check out the source on [GitLab](https://gitlab.com/bhdouglass/recipe-boss).
