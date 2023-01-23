---
layout: ../../../layouts/BlogPostLayout.astro
title:  "My First Snap Package"
date:   2016-07-15 00:34:00 -0400
categories: snap
---

Over this past weekend I took a dive into [snapcraft](http://snapcraft.io/)
and built my first snap package. The snap I created was for my
[click-parser](https://github.com/bhdouglass/click-parser) npm module. While
it is an npm module, it also has a command line tool packaged with it.
Click-parser is a small library used by both [uApp Explorer](https://uappexplorer.com/)
and [OpenStore](https://open-store.io/) to extract data from click
and snap packages.

Creating the snap was very simple as snapcraft already has a npm module "part".
You can check out the full
[snapcraft.yaml in the snappy playpen](https://github.com/ubuntu/snappy-playpen/blob/master/click-parser/snapcraft.yaml).
As a side note, click-parser has a dependency that uses node-gyp, so it requires
more "build-packages" than a pure npm module might need.

You can find [click-parser on uApp Explorer](https://uappexplorer.com/app/click-parser.bhdouglass)
or install it yourself through snapd: `sudo snap install click-parser`.
