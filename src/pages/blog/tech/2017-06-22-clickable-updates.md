---
layout: ../../../layouts/OldClickablePostLayout.astro
title:  "Clickable Updates"
date:   2017-06-22 00:50:00 -0400
categories: clickable releases
---

Clickable has grown in popularity recently due to Canonical discontinuing support
for Ubuntu Touch. Clickable provides a nice lightweight alternative to the
discontinued Ubuntu Touch SDK IDE. Over the past week I've added a few new
features. First off is the new `make_jobs` parameters. By default clickable
will run `make -j` (when the template calls for it), and by specifying `make_jobs`
you can adjust what numbers is passed to the `-j` parameter of make. I've also
added a few checks to make sure lxd and the lxd container are running instead
of throwing random errors. This also goes nicely with the update of colored
output (which makes it easier to visually grep the output).

Since it seems that Canonical will no longer maintain the usdk-target tool that
clickable relies on, I've updated clickable to always look for it's own copy
of the usdk-target binary. I've also forked the code for usdk-target, which you
can find on my [GitLab page](https://gitlab.com/bhdouglass/usdk-tools).
Including usdk-target also provides one less external dependency which has made
it easier to package as a snap. Unfortunately the snap for clickable cannot be
found in the offical snap store, but it is availabe
[in the OpenStore](https://open-store.io/snap/clickable). Clickable is a
classic snap so it requires manual review, and therefor hasn't be accepted into
the offical store yet.

The last new feature of clickable is that it will try to guess which template
you are using (cmake, qmake, cordova, etc) if it does not find a clickable.json.
This can be useful for quickly compiling an Ubuntu touch app that does not yet
have a clickable.json.

A wonderful contributor has also created a nice tutorial for getting started
with clickable. You can find it in the UBports wiki.

If you run into any problems with the latest updates, please feel free to report
a bug on the [Github repo](https://github.com/bhdouglass/clickable).
