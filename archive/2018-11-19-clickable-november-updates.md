---
layout: ../../../layouts/BlogPostLayout.astro
title:  "Clickable November Update"
date:   2018-11-19 00:03:00 -0400
categories: clickable releases
---

Clickable has gone through several minor versions over the past month since
version 5.0.0. First in the changelog is improved Cordova support. v5.0.1 cleaned
up the Cordova support and brought everything into the same container (before a
separate container was in use). Make sure you run `clickable update` to get the
latest container. Next, in v5.0.2 was fixes for the publish command. It will now
exit with an error rather than just printing it out. This is very useful for CI
so the whole process is marked as failed if the publish command fails. v5.1.0
brought a new build template. This one is based on the cmake template with the
key difference being that the new template includes a main.cpp. The following
versions, 5.1.1 and 5.2.0 brought some bug fixes. Additionally 5.2.0 also comes
with a new flag: `--dirty`. With this flag you can instruct Clickable to skip the
cleaning command a perform a "dirty build". This may not work well for some
applications, but for others it can save time by not needing to recompile the
app from scratch every time. That being said a clean build is recommended before
publishing you app.

The dirty build feature and the next feature in v5.3.0 were both submitted by
Jonatan (@jonny). He did some awesome work and I'm very grateful for the contributions!
Thanks to his efforts v5.3.0 comes with a great new feature for building libraries.
Now if your app relies on a third party library that you compile you can add it
as another step in your build process. Once the lib is it will not need to be
rebuilt until you manually do so. This can save development time especially if
you are working with a large library. For more information on getting this setup
with you app, just checkout the [docs](http://clickable-ut.dev/en/latest/clickable-json.html#clickable-json-libraries).
Again a huge thank you to Jonatan and his work on Clickable!

For the full change log check out the
[Clickable docs](http://clickable-ut.dev/en/latest/changelog.html).
If you run into any issues with Clickable please report them in the
[GitLab Issues](https://gitlab.com/clickable/clickable/issues).
