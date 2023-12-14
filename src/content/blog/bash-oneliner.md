---
layout: ../../layouts/BlogPostLayout.astro
title: Bash-Oneliner
date: 2022-05-09T09:11:27.000Z
categories:
  - bash
  - links
image: /images/blog/generic/command-line-junky.png
imageAlt: An ASCII art rendition of the words 'Command Line Junky'.
description: A short post about a collection of command-line tips.
---

I discovered a great resource for various bash tips and tricks called
[Bash-Oneliner](https://onceupon.github.io/Bash-Oneliner/).
Despite the name, it also has plenty of tips and tricks in addition to various “oneliners”.
It has sections on how variables and math work in bash. A varied assortment of commands
are covered as well. I only read part of it and I have already learned a ton.
For example, did you know you can have `grep` print out lines before and after the match?
(Exampled copied from Bash-Oneliner)

```
# return also 3 lines after match
grep -A 3 'bbo'

# return also 3 lines before match
grep -B 3 'bbo'

# return also 3 lines before and after match
grep -C 3 'bbo'
```

This is an awesome resource for anyone familiar with bash. However, it
should be noted that this is not a beginner’s guide to bash as it assumes some
level of bash knowledge.
