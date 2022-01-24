---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore Updates"
date:   2018-08-08 00:45:00 -0400
categories: openstore releases
---

I've recently spent some time clearing up some minor issues that were present in
the OpenStore (both the website and the app). On the website one minor issue was
the back button that takes you from an app page back to the search page. This
link would take you back to an empty search rather than where you were
previously. This has been corrected so it functions as expected. Another bug
that got fixed was a problem with the pagination, not matter what it always
showed pages 1 to 5, event if the current page was higher. This has been fixed
and now the pagination will updated to be around the current page. Some eye candy
added was a slick popup whenever you go to save you app (both when successful
and when it's an error). This greatly improves the saving experience as you know
when the action has completed rather than wondering what happened and realizing
there is a tiny message by the save button. The last new feature added to the
OpenStore is RSS Feeds. [Check out the feeds](https://open-store.io/feeds) and
then get timely updates about new or updated apps in the OpenStore!

For the OpenStore app the author search has been fixed. If you press on the
"More apps by" button when viewing an app you'll be taken to the search page
with a list of the author's other apps. Previously the search could present apps
not authored by the current author being searched for. Additionally
`openstore://` links will now open in the OpenStore app, even if the app is not
currently running. This allows app developers to reliably link directly to apps.

After this batch of updates I plan to clear up a few more minor issues while
adding some new features to the OpenStore. If you wan to chat about upcoming
features or report issues join the
[OpenStore Telegram group](https://open-store.io/telegram)!
