---
layout: ../../layouts/BlogPostLayout.astro
title:  "Packaging Node.js Projects as Snaps"
date:   2016-08-06 17:56:00 -0400
categories: snap tutorial
image: /images/blog/logos/snapcraft-logo.svg
imageAlt: Snapcraft's logo
description: Learn how to turn a Node.js app into a Snap package.
---

## Introduction

I've recently published a
[few snaps](https://uappexplorer.com/apps?q=author%3ABrian+Douglass&type=snappy&sort=-points)
of various Node.js projects. So I was encouraged to write a tutorial on building
snaps out of Node.js projects. This tutorial will detail how to get setup
with necessary tools, go over the snapcraft.yaml format, explain how to build
a snap of a Node.js project, and detail how to publish that snap to the Ubuntu
snap store.

## Prerequisites

To get started snapping Node.js modules you'll need to have `snapd` and `snapcraft`
installed. snapd will include the `snap` command that will allow you to search
and install snaps from the store. snapd is available on
[many different Linux distributions](http://snapcraft.io/docs/core/install),
but if you are using Ubuntu 16.04 or greater you can just run:

```bash
sudo apt install snapd
```

snapcraft is a tool for creating and building snap packages. Installing
snapcraft on Ubuntu is as simple as:

```bash
sudo apt install snapcraft
```

If you are also developing the Node module to be packaged, you'll want to have
`node` and `npm` installed. Covering that is outside the scope of this tutorial.
You can find more info on the [Node.js website](https://nodejs.org/).

## snapcraft.yaml

Defining how a snap is built is a simple YAML file called snapcraft.yaml. The
yaml file contains all the necessary pieces to build a snap.

```yaml
name: hello-node-snap
version: "1.0.0"
summary: A simple hello world command
description: A command that simply prints hello world.
confinement: strict

apps:
  hello-node-snap:
    command: bin/hello-node-snap
    plugs: [network]

parts:
  hello-node-snap:
    plugin: nodejs
    node-packages:
      - hello-node-snap
```

You can find this snapcraft.yaml and the rest of the
[hello-node-snap example on GitHub](https://github.com/bhdouglass/hello-node-snap).
This file is fairly small and easily understood, so I'll break the file down
into chunks to expand upon each section.

```yaml
name: hello-node-snap
version: "1.0.0"
summary: A simple hello world command
description: A command that simply prints hello world.
```

The first part of the snap is all the human friendly portions. The name, version,
summary, and description are used in the snap store to help users find your
app. The summary should be a very short description of your app, and is limited
to only 78 characters. The description should be more verbose so that users
can make an informed choice when installing your snap.

```yaml
confinement: strict
```

The next section is the confinement of your app. This may be either `strict` or
`devmode`. Strict means that it will run under full confinement and will not be
able to access parts of the host system that are outside of its boundaries. When
in devmode a snap will have full access to the underlying system. It is not
recommend to distribute an app with devmode confinement, but devmode can be
very useful for developing your snap.

```yaml
apps:
  hello-node-snap:
    command: bin/hello-node-snap
    plugs: [network]
```

The apps section is a list of commands or daemons that this snap exposes. This
snap exposes one command `hello-node-snap`. This is how users will be able
to run your app. Underneath the `hello-node-snap` app is the command, which
is the path to the command to run. This is relative to the root of the snap.

After the command is the plugs section. The plugs section is a list of interfaces
that allow a command to access shared resources on the host machine. They could
be loosely thought of as permissions. A list of common and reserved interfaces
can be found in the [snapcraft documentation](http://snapcraft.io/docs/reference/interfaces).
In this example we are requesting access to the `network`. `network` is for accessing
the network as a client. On the other hand, you may need `network-bind` if you
want to set up a server. Another common interface is the `home` interface, which
grants you access to a users home directory.

Note: Network access is not actually needed for this tutorial, but it is there
to show how to use the interfaces.

```yaml
parts:
  hello-node-snap:
    plugin: nodejs
    node-packages:
      - hello-node-snap
```

The final part of our snapcraft.yaml file is the parts section. Parts define how
your app is built and from what sources. You can mix and match parts as needed,
but for a Node.js snap you may only need one part. The `hello-node-snap` part
uses the `nodejs` plugin. This plugin will tell snapcraft to download a version
of Node.js and any modules you specify for inclusion in your snap (listed under
`node-packages`). For this tutorial we only need one node module, the
[hello-node-snap](https://www.npmjs.com/package/hello-node-snap) module (created
specifically for this tutorial).

If you require a specific version of Node.js for your snap, you can do so by
adding `node-engine` to your part. `node-engine` is a string of the version you
require.

If your Node module requires or depends on non-pure JavaScript modules and
needs to be compiled, you'll want to add:

```yaml
build-packages:
  - python
  - build-essential
```

And any other necessary packages (these are the names of Ubuntu packages in apt).

For more information about the different available parts, check out the
[snapcraft plugin documentation](http://snapcraft.io/docs/reference/plugins).

## Building the Snap

Now that we have a snapcraft.yaml setup, we can use `snapcraft` to package
our new snap. From within the same directory as the snapcraft.yaml, run:

```bash
snapcraft
```

Snapcraft will run through different steps preparing your snap package. When
it completes you'll be greeted with a shiny new snap, and in the case of
this tutorial the snap will be called `hello-node-snap_1.0.0_amd64.snap`.

To test your snap locally before you upload it to the store (and I cannot stress
enough the importance of testing your snaps locally), you can run:

```bash
sudo snap install hello-node-snap_1.0.0_amd64.snap
```

If you already have the package installed you may need to remove the old snap
by running:

```bash
sudo snap remove hello-node-snap
```

Now that the snap is installed you can run our hello world command:

```bash
hello-node-snap
```

Now that you have a working step it is time to publish it to the store. But
before publishing your snap, it is recommended to run:

```bash
snapcraft cleanbuild
```

This command builds the snap in a clean LXC container. Doing so can help you
catch any issues with missing build-packages and the like.

## Publishing the Snap

In order to publish a snap to the Ubuntu store you need to log in to both
snapcraft and snap with your
[snapcraft.io](https://snapcraft.io/) account.

```bash
snapcraft login
snap login your@email.com
```

In order to publish your snap you need to register a snap name, you can do this
on [register snap](https://snapcraft.io/register-snap)
or via the command line:

```bash
snapcraft register hello-node-snap
```

When the upload finishes, you can then visit
[snapcraft.io](https://snapcraft.io/) to finalize any details before
publishing your snap to the store. An important thing to add is a support
url, in case users run into any issues using your snap. You need to set your
snap channels by clicking on the latest release (since this is the first
upload it will be #1). Then click the "Edit" button next to "Channels". For an
explanation of the different channels, check out this
[guide to publishing snaps](http://snapcraft.io/docs/build-snaps/publish).

After you square away the details of your snap, click the "Publish your application"
button to publish it to the store. Now you can find your snap and install it with
snapd:

```bash
sudo snap find hello
sudo snap install hello-node-snap
```

After a short while your new snap will show up on
[uApp Explorer](https://uappexplorer.com/app/hello-node-snap.bhdouglass). And
you have successfully published a snap!

## Conclusion

I hope that you have found this tutorial useful. If you have any feedback you
can submit an issue to the
[hello-node-snap GitHub repo](https://github.com/bhdouglass/hello-node-snap/issues)
or contact me via [my website](http://bhdouglass.com/contact.html).

## Resources

* [hello-node-snap source on GitHub](https://github.com/bhdouglass/hello-node-snap)
* The [Snappy Playpen](https://github.com/ubuntu/snappy-playpen) is a great collection of snaps that can help you get squared away with your snap.
* The [Snapcraft Docs](http://snapcraft.io/docs/) has a wealth of information on all things snap.
* [Ask Ubuntu](http://askubuntu.com/search?q=snappy) already has questions and answers about snaps.
* Other Node.js Snap examples:
  * [uApp Explorer CLI](https://github.com/bhdouglass/uappexplorer-cli) - Very similar to this example.
  * [Click Parser](https://github.com/ubuntu/snappy-playpen/tree/master/click-parser) - Similar to this example, but includes build-packages.
  * [Atom](https://github.com/ubuntu/snappy-playpen/tree/master/atom) - A more complex example of a project that uses Electron.
