---
layout: ../../../layouts/TechPostLayout.astro
title:  "uApp Explorer's Big April Update"
date:   2016-04-23 11:07:00 -0400
categories: uappexplorer web
---

Today I've just released one of my bigger updates for uApp Explorer. The major
hightlight of this release is that snappy packages are now first class citizens!
I've added new options to the "Type" filter for narrowing down your snappy search.

![Snappy Types](/images/blog/uappexplorer/april-update/snappy_types.png)

I've also fixed it so that uApp Explorer is aware of different architecures for
snappy apps and now separate download links are availabed for each available
architecure.

![Snappy Downloads](/images/blog/uappexplorer/april-update/snappy_downloads.png)

Another nice update is a redesigned app view. Important information is displayed
at the top, including star/heart ratings, price, whether this app has push
notification, etc.

![App Info](/images/blog/uappexplorer/april-update/app_info.png)

I've changed the information part from different tabs into an organized block.
Additionally I've added a list of permissions required by the app. Desktop files,
scope ini files, and snappy metadata yaml files are also available under the
"More Info" button.

![App Details](/images/blog/uappexplorer/april-update/app_details.png)

![More Info](/images/blog/uappexplorer/april-update/more_info.png)

Under the hood there have been some serious improvements to code that parses
apps from the click store api. And a special thanks goes out to Marius G. "mariogrip"
for his help extracting data from snappy packages.

There are a bunch of new translation strings that I could really use some help
getting translated. If you are interested, check out the translations page
on [Launchpad](https://translations.launchpad.net/uappexplorer). There are
translations for over 20 languages already, a big thank you to the translators!

If you have any feed back, I would love to hear it! Join me on my new
["uApp Explorer Chat" telgram group](https://telegram.me/joinchat/Bd_29AYVkY6F9xHvJlPq_g).
Check out the update for yourself:
[uappexplorer.com](https://uappexplorer.com/app/com.ubuntu.telegram)
