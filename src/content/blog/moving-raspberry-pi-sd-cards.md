---
layout: ../../layouts/BlogPostLayout.astro
title: Moving Raspberry Pi SD Cards
date: "2023-11-29T14:30:06.264Z"
categories: raspberry-pi
image: /images/blog/raspberry-pi/raspberry-pi-sd-card.png
imageAlt: A Raspberry Pi single board computer and a micro sd card
description: Transfer your Raspberry Pi SD card to a new one with ease
---

Recently I needed to upgrade the size of the SD card in one of my
[Raspberry Pis](https://www.raspberrypi.com/)
for a project I have been working on (more on that in a future blog post!). Here
is a quick rundown on how to move between SD cards without losing anything. This
will work on Linux and might work on MacOS and Windows Subsystem for Linux (WSL).

## Table of contents

## Find the SD Card

After inserting the SD card into a computer, run `lsblk -p` to find the device
ID of the SD card. Usually, this looks something like `/dev/mmcblk0`. Be sure to
select the root of the SD card, not the partition (for example, `/dev/mmcblk0p1`).

![The output of the terminal command "lsblk -p"](/images/blog/raspberry-pi/lsblk-p.png)

## Clone the SD Card

Now that you know the device ID, you can copy the SD card into a file. The resulting
file will be the same size as the SD card, so make sure you have enough storage
space on your computer.

Run `sudo dd bs=4M if=<device id from lsblk> of=<path to store image> conv=fsync`
to copy the card. For example:

```bash
sudo dd bs=4M if=/dev/mmcblk0 of=~/path/to/storage/rpi.img conv=fsync
```

![The output of the terminal command "dd"](/images/blog/raspberry-pi/dd.png)

## Shrink the SD Card

The image that was just copied to your computer is the same size as the SD card,
regardless of the actual contents inside the SD card. This is where the
[PiShrink](https://github.com/Drewsif/PiShrink) script comes in handy.

Download the script: `wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh`
(or use another method to download it).

Make sure the script is executable: `chmod +x pishrink.sh`.

Then run the script by supplying the image you just cloned and a destination
to output the resulting smaller image: `./pishrink.sh /path/to/input.img /path/to/output.img`

The beauty of the script is that it will shrink the size of the cloned image
and also set the image to auto-expand on the next boot of the image. That way
you can get a bigger SD card and automatically use all the space on the card.

If you want to compress the image into a gzip or xz file, pass the `-z` or `-Z`
flags to PiShrink.

## Copy to a new SD Card

You can now copy the shrunk image file to a new SD card using the `dd` command
or the popular [Etcher](https://etcher.balena.io/) GUI tool.

Example `dd` command (replace `/dev/mmcblk0` with your SD card): `sudo dd bs=4M if=/path/to/output.img of=/dev/mmcblk0`

Now the next time you boot your Raspberry Pi it will automatically expand to the
full size of the SD card without any data loss.

![The Raspberry Pi 4 Model B Small Board Computer](/images/blog/raspberry-pi/raspberry-pi-4.jpg)

## Further Resources

- [rpilocator](https://rpilocator.com/) - Find a Raspberry Pi in stock
    - [Adafruit](https://www.adafruit.com/category/176) - My preferred vendor for buying a Raspberry Pi
- SD Cards I've used with success
    - [Samsung PRO Endurance](https://www.amazon.com/gp/product/B09WB35BXS)
    - [Samsung EVO Select](https://www.amazon.com/gp/product/B09B1GXM16)
- [PiShrink script](https://github.com/Drewsif/PiShrink) by Drew Bonasera
- [Etcher](https://etcher.balena.io/) - Image flashing tool
- [DD manpage](https://manpages.org/dd)
