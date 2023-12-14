---
layout: ../../layouts/BlogPostLayout.astro
title: Git Open
date: 2022-07-08T23:42:19.000Z
categories: git tools
image: /images/blog/generic/git.png
imageAlt: A Git log from a Git repository
description: A quick tip about and awesome little command-line tool.
---

I am very much a terminal junky. I will do most tasks in a terminal window rather
than through a GUI. This includes all my Git activities. I will often need to jump
from my terminal to a browser to make a pull request or manage a project's issues.
To accomplish this I have been using a hacked-together script that I found years ago.
I probably found it online somewhere, but the source has since been lost. I called
the script `ggo`, short for git go! It opened the current repository's upstream
remote in a web browser.

This has been working well for me all this time. But I was introduced to a similar
tool with a much broader feature set. This project, [git-open](https://github.com/paulirish/git-open),
does everything my `ggo` script did plus more. My favorite feature is that it will
open the current branch in the browser, rather than just the current repository.

To get started with `git-open`, install it via npm: `npm install --global git-open`.
Since I am using bash as my shell, I added an alias to replace my old `ggo` script:
`alias ggo='git-open'`. Git-open works with most major code hosting platforms,
so give it a try! Check out the [GitHub repo](https://github.com/paulirish/git-open)
for more info and to leave a star.
