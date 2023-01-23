---
layout: ../../layouts/BlogPostLayout.astro
title: "System76 Darter Pro 8"
date: 2022-08-08 09:43:53 -0400
categories: computer system76
---

For about a month now I have been using the new [System76](https://system76.com/)
[Darter Pro](https://system76.com/laptops/darter) laptop. Unfortunately, my 4-year-old
System76 Oryx Pro took a dive off a table and smashed its screen. My company
graciously provided a replacement. I chose the Darter Pro because I wanted to get
away from having a dedicated GPU. I had hardly used the GPU in my old laptop at all.
I also knew I wanted to keep with a 15-inch screen as my wife's 14-inch screen seemed
too small. The Darter Pro fit into my requirements nicely and System76 was about
to release the latest revision soon after I started looking.

<img src="/images/blog/darter/darter1.jpg" alt="Darter Pro" class="img-fluid mb-2">

The specs that I got on the Darter Pro were:

- 4.7 GHz i7 (12 cores/16 threads) - Upgrade from the base model
- 32 GB RAM - Upgrade from the base model
- 1 TB PCIe Gen4 Solid State Drive - Upgrade from the base model
  - Also includes a second empty NVMe slot
- Intel Iris Xe Graphics
- Various ports
  - HDMI
  - USB 3 (Type A & Type C)
  - Ethernet
  - Combination headphone and microphone jack

The very first thing I did when I received the laptop was to replace the default
Ubuntu install with a Kubuntu install. This was a very smooth experience because
I installed everything via Ansible. Eventually, I will write a post about my
ansible setup and publish the paybooks. However, the one glaring issue during
the setup process was that the touchpad was disabled. This made it very difficult
to complete the OS installation process. I only used the keyboard and sometimes the
order of the tabbing was unexpected. The partitioning was particularly difficult
to do with only a keyboard. To get the touchpad to work at all I needed to install
the `system76-driver` package from the [System76 PPA](https://launchpad.net/~system76-dev/+archive/ubuntu/stable).
This got the touchpad working, but I also needed to install the `xserver-xorg-input-synaptics`
package to get the "tap to click" feature working.

In addition to the touchpad not working out of the box on a new install. It took
some getting use to. The touchpad does not have any physical buttons and has been
an adjustment for me. I find that I use to have a tendency to rest my finger on
the left button. However, without a physical button to put my finger on, I end
up triggering two-finger scrolling. A few other negatives are that it can get
quite hot on the bottom when I'm working. This can be annoying when it is on my
lap (it is a *lap*top!). That usually only happens when I am pushing the
CPU during development work. Compiling Typescript code or running a Jest test
suite can cause the fan to ramp up to irritating levels. However, I have gotten
decent battery life, especially compared to my last laptop where 3 hours was a good
day. System76 claims 9 hours of battery life, but I generally need to plug in
once during the workday.

<img src="/images/blog/darter/darter2.jpg" alt="Darter Pro Internals" class="img-fluid mb-2">

Despite the couple issues that I described above, I have really been enjoying
using the Darter Pro. It has the power I need for programming and runs Linux
like a pro. I have yet to be disappointed with System76's offerings and I hope
to continue to do business with them in the future.
