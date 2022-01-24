---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore Xenial Support"
date:   2018-05-10 10:00:00 -0500
categories: openstore releases
---

Xenial support has always been an important next step for the OpenStore. Because
the jump between Vivid and Xenial bring several problems for app compatibility
it is necessary for the OpenStore to support having click packages for both
Vivid and Xenial available per app. Adding Xenial support is through the use of
our new "channels" system. Eventually we want to support betas & experimental
builds via the new channel system, but we'll save that for a future release.
Currently support for Xenial is only on the website, but will come soon to the
app.

When uploading a new app you'll want to upload the Vivid click first. When
Xenial is stable and fully supported by UBports this will change. But after
initially creating your app you can then upload a Xenial click by clicking the
"New Revision" button. After clicking the button you'll be taken to a new page
where you can upload a new Xenial click or Vivid click. If your app supports
both Xenial and Vivid without recompiling then you can choose the option for
both so you only need to upload your click once (this works for qml only apps
and webapps).

## Next Steps

Now that the OpenStore website and api have support for Xenial we will be
updating the OpenStore app to also support Xenial and we will be releasing a
Xenial version of the app. In addition to the app being updated we also want to
automatically detect apps that can support Xenial without a recompile. Many
apps in the OpenStore can already be run on Xenial, but with the changes they
will be marked as only supporting Vivid. Soon we will be implementing a script
to automatically detect compatibility and configure the apps as having Xenial
support without needing a developer to upload them.

If you have any issues or run into any bugs feel free to reach out to us on
[Telegram](https://open-store.io/telegram) or
[GitHub](https://github.com/UbuntuOpenStore/openstore-meta/issues).
