---
layout: ../../layouts/BlogPostLayout.astro
title:  "Ubuntu Touch Web App Plugins"
date:   2018-02-04 00:36:00 -0500
categories: ubuntu-touch-apps releases
image: /images/blog/logos/ubports-logo.svg
imageAlt: The Ubport's mascot Yumi.
description: Plugins to make Ubuntu Touch web apps work better with downloads.
---

Over the past few weeks I've been working on some plugins for Ubuntu Touch
web apps that work around some issues with the platform. The first plugin is
[BlobSaver](https://github.com/bhdouglass/blobsaver). It saves data from blob
urls that the download manager doesn't know how to handle. If you are not
familiar with blob urls (and I was not before this project), there is a brief
overview on [this Stack Overflow question](https://stackoverflow.com/a/30881444).
since blob urls look similar to normal urls the web browser or web app will
pass the url over to the Ubuntu Touch download manager, but the download
manager doesn't know what to do with a blob url and it throws an error (and
it's not possible for it to know anything about the blob url because only
the browser knows what data that url references). BlobSaver gets around this
limitation by hijacking the blob url creation process and sending the raw data
to a C++ function which then converts it into a file. That file then can be
opened up in the content hub. You can see this in action with the
[Photopea Web App](https://github.com/bhdouglass/photopea-webapp) that I put
together for another community member. BlobSaver overcomes a missing feature
in the browser and is a hack. A real solution would be for the Ubuntu Touch
web browser to have its own support for blob urls, but until then BlobSaver is
here to _save_ the day.

The other plugin that I have been working on is [DownloadInterceptor](https://github.com/bhdouglass/downloadinterceptor).
DownloadInterceptor overcomes a different problem with the Ubuntu Touch browser
and download manager combo. This plugin is there to help you download files
from sites with authenication. Without this plugin the browser or web app will
pass a download url to the download manager, but if you need to be authenticated
the download manager won't be able to download anything. DownloadInterceptor
works by preventing the download manager from getting the url and downloading
the file itself (using the necessary cookies). The saved file then can be used
in the content hub. You can see it in action on the newly developed
[Nextcloud web app](https://github.com/mateosalta/nextcloud_ogra). Including
DownloadInterceptor in the Nextcloud web app allows you to download your files
from Nextcloud (something that is impossible in the browser). This is not my
app but I have contributed to its development.

If you have any questions about either plugin or need help integrating them
into your webapp please don't hesitate to [contact me](https://bhdouglass.com/#contact).
