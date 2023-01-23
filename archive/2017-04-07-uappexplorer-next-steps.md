---
layout: ../../../layouts/BlogPostLayout.astro
title:  "uApp Explorer: Next Steps"
date:   2017-04-07 00:27:00 -0400
categories: uappexplorer
---

With [the recent news](https://insights.ubuntu.com/2017/04/05/growing-ubuntu-for-cloud-and-iot-rather-than-phone-and-convergence/)
that Ubuntu Touch will no longer be maintained by Canonical I've been doing some
thinking about the future of uApp Explorer. uApp Explorer started out as a way
for myself and others to see information about apps without looking on an Ubuntu
device. Without a web interface to the Ubuntu store I wrote uApp Explorer around
the Ubuntu Store api. With the changes to Ubuntu Touch I believe uApp Explorer needs
a change so it can still be a useful tool for Ubuntu users. After some thought I
believe it is best if I lay out my thoughts for the next steps with uApp Explorer.

The first change I plan to make to uApp Explorer is to reduce the aggressiveness
when it comes to finding new click packages. Currently there are crons that run
very frequently to check for new apps and the like. The number of new apps recently
has dropped so I want to drop the frequency as well.

The second change will be to remove the wishlist section of the site. It has been
able to give some great insight into the hopes and desires of Ubuntu Touch users,
but I don't believe it's relevant any longer. I will make an export of the data
that uApp Explorer has gathered and put it in the source repo for anyone who is interested.

The next change I want to make is to separate clicks and snaps. Currently snaps
and clicks are merged together in uApp Explorer and this has caused some issues
(including naming conflicts between clicks and snaps). Now that clicks are fully
deprecated I want to bring snaps to the forefront of uApp Explorer and leave clicks
as a legacy to all my fellow Ubuntu Touch developers. In order to do this I'll be
implementing a new api so that I don't break any of my apps that depend on
uApp Explorer.

After these major changes I may explore adding support for other package types
to uApp Explorer (maybe flatpaks?).

I'm excited to see where this new direction takes uApp Explorer. If you want
to get in touch with me about helping develop or just to chat, shoot me an email
from [my contact form](https://bhdouglass.com/contact.html).
