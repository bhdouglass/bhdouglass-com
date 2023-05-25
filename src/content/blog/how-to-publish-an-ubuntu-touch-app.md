---
layout: ../../layouts/BlogPostLayout.astro
title: "How to Publish an Ubuntu Touch App"
date: 2022-09-15 00:07:12 -0400
updatedDate: 2023-05-24 22:42:52 -0400
categories: openstore tutorials
image: /images/blog/openstore/openstore-apps.png
imageAlt: A list of apps on the website open-store.io.
description: Learn how to publish an Ubuntu Touch app from start to finish.
---

Once you have created an app for Ubuntu Touch, it is time to publish the app to
the OpenStore. The OpenStore is the app store for Ubuntu Touch. It is a place
to find and install apps for Ubuntu Touch phones and tablets. While it encourages
open-source apps, it also accepts proprietary apps.

## Table of Contents

## Getting Started

To get started, you will need to create an account on [open-store.io](https://open-store.io/login).
You can create the account using an existing GitHub, GitLab, or Ubuntu One account.
Once logged in, you can now [submit your app](https://open-store.io/submit) to the OpenStore.
Be sure to read over the rules and content policy before submitting your app.
To submit your app, you will need to enter the app's name and the app's title.

![Submit App](/images/blog/openstore/submit-tutorial/submit.jpg)

The title is the text that will appear in the store when a user searches for your
app. The name is the name of the app in the manifest file. This is usually in the
form of `<app>.<your-name>`. For example, `example.bhdouglass`, where `example`
is the name of the app and `bhdouglass` is my namespace. It is important that
the name matches exactly with your manifest.json file, otherwise, the OpenStore will
reject any updates.

![Manifest](/images/blog/openstore/submit-tutorial/manifest.jpg)

## Upload a Revision

Once you have submitted the app name and title to the OpenStore you are presented
with a page to edit your app's information. Be sure to upload screenshots, select
a category, and write a nice description. At this point, your app is not published
publicly because there is nothing for users to download. To fix this, click
the "New Revision" button. You will be presented with a new page that allows you
to upload your click files. Alternatively, you can host your click files on the internet
and give the OpenStore and link to download the click. Either choose your click file
to upload or paste a link to the click. You can upload as many architecture-specific
clicks as you want during this process. Don't worry if you forgot one, you can always
upload them later. The OpenStore currently supports armhf, arm64, and amd64 architectures.
This is in addition to architecture-independent apps (like those using Python).

![Create Revision](/images/blog/openstore/submit-tutorial/create-revision.jpg)

Write a short update for the changelog and click the "Create" button to upload
your click files. Once uploaded, the OpenStore will run an automated review
process to determine if your app is safe to distribute. This is the same process
that [Clickable](https://clickable-ut.dev/) runs when building your app.

![Click Review](/images/blog/openstore/submit-tutorial/click-review.jpg)

## Manual Review

If your app is rejected because it needs a manual review, then
[join the OpenStore Telegram group](https://open-store.io/telegram) to get started.
If your app passes the automated review, then your clicks have now been successfully
uploaded to the OpenStore. The last step to publish your app publicly is to mark
the app as published and save your changes.

## Finished Publishing

![Publish](/images/blog/openstore/submit-tutorial/publish.jpg)

Congratulations, you have now made your Ubuntu Touch app available to thousands
of Ubuntu Touch users across the globe!

## Further Reading

- [OpenStore Badges](../openstore-badges/) - Link to your app on the OpenStore in style
- [Publishing apps to the OpenStore with GitLab CI](../publishing-apps-to-the-openstore-with-gitlab-ci/)
- [Clickable Docs](https://clickable-ut.dev/en/latest/)
- [UBports App Development Docs](https://docs.ubports.com/en/latest/appdev/index.html)
