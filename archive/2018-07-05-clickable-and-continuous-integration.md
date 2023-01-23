---
layout: ../../../layouts/BlogPostLayout.astro
title:  "Clickable & Continuous Integration"
date:   2018-07-05 16:21:00 -0400
categories: clickable releases
---

The latest release of Clickable contained a new command for publishing apps to
the OpenStore. That feature has been added to make continuous integration using
Clickable possible. It is now very simple to compile, package, and publish your
click apps for Ubuntu Touch. To make thing even simpler I've created Docker
images for using Clickable in a continuous integration environment. These images
contain the latest release of Clickable and have it automatically set to
container mode. These Docker images can be found on Docker hub:
`clickable/ci-15.04-armhf` and `clickable/ci-16.04-armhf` for vivid/15.04 and
xenial/16.04 respectively.

[GitLab](https://about.gitlab.com/features/gitlab-ci-cd/)
has a very slick CI solution built in. I've created an
[example click app](https://gitlab.com/clickable/clickable-gitlab-ci-test) that
uses GitLab's CI to build and publish itself in the OpenStore. Here is the
GitLab CI configuration file:

```bash
build_vivid:
  image: clickable/ci-15.04-armhf
  script:
  - clickable clean build click-build review publish

build_xenial:
  image: clickable/ci-16.04-armhf
  script:
  - clickable --xenial clean build click-build review publish
```

Very simple! All you need to do to use it with your own Ubuntu Touch apps is to
copy the `OPENSTORE_API_KEY` variable to your GitLab project's CI settings and
start publishing apps!
