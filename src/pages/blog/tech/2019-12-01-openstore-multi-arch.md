---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore Multi Arch"
date:   2019-12-01 00:30:00 -0400
categories: openstore releases
---

Update (Dec 12): Multi arch support is now in the production OpenStore!
Thank you to everyone who tested!

The OpenStore now has multi arch support, almost. Today I've pushed multi arch
support to the new staging environment for the OpenStore. You can find this
test bed at staging.open-store.io with is
obnoxious red header. This is to serve as a place to test new OpenStore features
before release to avoid any major issues. I would encourage anyone to test
out the new multi arch support in staging. And to that end, the latest unreleased
update to the OpenStore app now supports using the new staging environment. You
can download the armhf or arm64 version via the [GitLab CI](https://gitlab.com/theopenstore/openstore-app/pipelines/99736164).
To enable the staging environment simple place the following in `/etc/profile.d/openstore.sh`:

```bash
export OPENSTORE_DOMAIN=staging.open-store.io
export OPENSTORE_API=https://staging.open-store.io/
```

Reboot your device and then the OpenStore app will display a message to let you
know that you are no longer using open-store.io. This is not recommended for
use on your daily driver phone! A huge thank you to anyone willing to invest
some time in testing. Please report any bugs in the [bug tracker](https://gitlab.com/theopenstore/openstore-meta/issues).
