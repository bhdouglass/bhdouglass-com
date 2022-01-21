---
layout: ../../../layouts/TechPostLayout.astro
title:  "Clickable February Update"
date:   2019-02-27 00:02:00 -0400
categories: clickable ubuntu-touch
---

There has been a ton of development on Clickabe over the last month followed by
several released versions. Most of this development effort is thanks to
[Jonatan Zeidler](https://gitlab.com/jonnius) who has joined the Clickable team.

Version 5.5.0 brought some improvements to build-libs so that it uses the same
arch as the main package build and you can specify only one library to build or
clean. The GOPATH support was updated to include support for the GOPATH env
variable being a list of paths. Clickable itself will now exit with an error
rather than a warning if you try to run an invalid command.

Version 5.5.1 came out with some new features including support for a `--config`
argument to Clickable which allows you to specify a different path to your
clickable.json file. There is a new configuration option called
`clickable_minimum_required` that allows you to specify a minimum required
version of Clickable to use when compiling your app. Another new configuration
option is `make_args` which allows passing arguments directly to the `make`
command during the build phase.

Version 5.6.0 came with a bug fix for Cordova builds and added support for the
`--debug-build` argument to QMake and CMake templates. Quickly after that
release came version 5.6.1 which fixed a bug in the library build process and
added support for `--debug-build` for Cordova templates.

Version 5.7.0 was released with better dependency support. The configuration
options `dependencies` and `specificDependencies` have been deprecated and
replaced with `dependencies_target` and `dependencies_build`.
`dependencies_target` are for installing app dependencies in the custom docker
container. These dependencies will be installed in the target arch
(ie: libxyz:armhf).
`dependencies_build` are for installing build dependencies in the custom docker
container. These dependencies will not be installed in the target architecture.

Version 5.8.0 is the latest release of Clickable that expands version 5.7.0's
changes to dependencies by adding a new configuration option: `dependencies_ppa`.
This option allows listing several PPAs that have your required dependencies.
These PPAs will automatically be added to the custom docker container for your
app. For Rust apps, the CARGO_HOME option now defaults to `~/.cargo`.
Additionally the schema for specifying libraries has changed (the old way is
still supported but is now deprecated).

If you run into any issues with Clickable please report them in the
[GitLab Issues](https://gitlab.com/clickable/clickable/issues).
