---
layout: ../../layouts/BlogPostLayout.astro
title: How to Build a Developer JSON Resume 2023
date: 2022-11-03T00:01:37.000Z
categories: resume tutorials
image: /images/blog/json-resume/json-resume.png
imageAlt: An example JSON Resume with the code to generate it.
description: All the details on how to create your own JSON Resume.
---

Looking for a great way to share your resume with the world? Miss the developer
stories from Stack Overflow? Build your own resume with [JSON Resume](https://jsonresume.org/).
I have [written before](/blog/json-resume/) about JSON Resume, but
this post will be a full tutorial from start to finish.

## Table of contents

## Prerequisites

You must have [Node.js](https://nodejs.org/en/download) and `npm` installed on
your machine.

## Install

You have two options when installing the JSON Resume CLI tool. Either install it
globally or install it into a project. For the purposes of this tutorial, we will
be setting up a new project and installing the CLI tool there. Making a new project
allows you to easily put your resume under version control and use CI to build
and publish your resume automatically.

Setup a new Node.js project:

```bash
npm init
```

Check out my post about [NPM basics](/blog/npm-basics/) for resources
for getting started with `npm`. I also have in that post configuration tips for
faster project initialization.

After your project is set up, install the JSON Resume CLI tool and a theme:

```bash
npm install --save-dev resume-cli jsonresume-theme-kendall
```

## JSON Resume File

Create a JSON file called `resume.json` and input the following contents.
Replace my example data with your own!

```json
{
  "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  "basics": {
    "name": "Brian Douglass",
    "label": "Senior Software Engineer",
    "image": "https://s.gravatar.com/avatar/12e1b1f99e0d928cd8fd8f8e270f0b93?s=256",
    "email": "bhdouglass@gmail.com",
    "url": "https://bhdouglass.com/",
    "summary": "Hello, I'm Brian Douglass a full stack engineer with over a decade of experience building software.",
    "profiles": [
      {
        "network": "GitHub",
        "username": "bhdouglass",
        "url": "https://github.com/bhdouglass/"
      }
    ]
  },
  "work": [
    {
      "name": "Enerflo",
      "location": "Huntington Beach, CA",
      "description": "A solar software company",
      "position": "Senior Software Engineer",
      "url": "https://enerflo.com/",
      "startDate": "2020-02",
      "summary": "Developing new APIs with NestJS, Typescript, GraphQL, and PostgreSQL. ",
      "highlights": [
        "Build APIs with NestJS, Typescript, GraphQL, and PostgreSQL.",
        "Maintain web apps with Laravel & Javascript."
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "UBports",
      "position": "UBports App Dev Steering Committee Head",
      "url": "https://ubports.com/",
      "startDate": "2018-08",
      "endDate": "2021-04",
      "summary": "Lead the UBports App Development committee and championed developer experience for the Ubuntu Touch operating system.",
      "highlights": [
        "Support and develop the open-source Ubuntu Touch operating system."
      ]
    }
  ],
  "education": [
    {
      "institution": "Messiah College",
      "url": "https://www.messiah.edu/",
      "area": "Computer and Information Science ",
      "studyType": "Bachelor of Science",
      "startDate": "2009-09",
      "endDate": "2012-05",
      "score": "3.83",
      "courses": []
    }
  ],
  "skills": [
    {
      "name": "Backend Development",
      "keywords": [
        "Node.js"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Board Games",
      "keywords": [
        "Terraforming Mars"
      ]
    }
  ],
  "projects": [
    {
      "name": "OpenStore",
      "description": "The official app store for Ubuntu Touch",
      "highlights": [
        "Built an API first web service built using TypeScript, Node.js, Express, and MongoDB.",
        "Created custom web client for searching and managing apps using JavaScript and Vue.js",
        "Continued to maintain Qt/QML Ubuntu Touch app for installing applications."
      ],
      "startDate": "2015-04",
      "url": "https://open-store.io/",
      "roles": [
        "Lead Developer"
      ],
      "type": "application"
    }
  ],
  "meta": {
    "canonical": "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
    "version": "v1.0.0",
    "lastModified": "2022-11-02T12:00:00",
    "theme": "kendall"
  }
}
```

Here is a brief overview of the different sections:

- `basics` - Most of these fields should be self-explanatory. The `profiles` property is where you would list your GitHub account, LinkedIn account, and more.
- `work` - These are all your past and current jobs. Be sure to include several `highlights`!
- `volunteer` - Similar to `work`, but for volunteer positions.
- `education` - This is where you would put any relevant education like college or boot fcamps.
- `skills` - Organize your skills into groups and list the individual skills in the `keywords` property.
- `languages` - These aren't programming languages, but rather spoken languages.
- `interests` - This is a list of anything you enjoy.
- `projects` - List any side projects here. This section is especially important when your `work` section is a little light.
- `meta` - This can be mostly left as is, the only thing you may want to change is the `theme`, which we will cover later.

For the full explanation of all the different sections and properties, check out
[jsonresume/resume-schema on GitHub](https://github.com/jsonresume/resume-schema/blob/master/schema.json). And check out my [full JSON resume](https://gitlab.com/bhdouglass/bhdouglass-com/-/blob/master/src/data/resume.json) for inspiration.

## Themes

When exporting your resume you can choose from [over 400 different themes](https://www.npmjs.com/search?ranking=maintenance&q=jsonresume-theme). You can preview
a few of them on [jsonresume.org](https://jsonresume.org/themes/). Previously
we got the `kendall` theme by installing `jsonresume-theme-kendall`. Change
your theme by installing the specific package and specify the theme when exporting
via the CLI tool. Use `--theme jsonresume-theme-kendall` for the theme we installed
earlier. You will also want to specify the `theme` property in the `meta` section
of your resume.json file to set your theme when hosting on [jsonresume.org](https://jsonresume.org/).

![JSON Resume Themes](/images/blog/json-resume/themes.png)

## Export Resume to HTML

You will want to have [`npx`](https://www.npmjs.com/package/npx) installed, then run:

```bash
npx resume export --theme jsonresume-theme-kendall --resume resume.json resume.html
```

This will include all HTML and CSS needed to render your resume! You are now ready
to host your resume online.

## Export Resume to PDF

This is just like exporting to HTML, but specify `.pdf` in your output file:

```bash
npx resume export --theme jsonresume-theme-kendall --resume resume.json resume.pdf
```

This is perfect for sending your resume via email or an online application.

## Host on [jsonresume.org](https://jsonresume.org/)

You can freely host your resume at [jsonresume.org](https://jsonresume.org/).
All you need to do is create a [Gist](https://gist.github.com/) in Github and name
it `resume.json`. Copy the contents of your `resume.json` file and save the Gist.
You can then view your resume at `https://registry.jsonresume.org/<your GitHub username>`.
For example, you can find my resume at <https://gist.github.com/bhdouglass/389f030a5e5f578a5b64d26ee45c3ef4>
and view it at <https://registry.jsonresume.org/bhdouglass>.

![JSON Resume Gist](/images/blog/json-resume/gist.png)

## Resources

- [jsonresume.org](https://jsonresume.org/)
  - [Getting Started Docs](https://jsonresume.org/getting-started/)
  - [Schema Overview](https://jsonresume.org/schema/)
  - [Themes Available on jsonresume.org](https://registry.jsonresume.org/themes)
- [LinkedIn JSON Resume Scraper](https://github.com/joshuatz/linkedin-to-jsonresume)
- [My JSON Resume](https://gitlab.com/bhdouglass/bhdouglass-com/-/blob/master/src/data/resume.json)
  - [HTML Version](https://bhdouglass.com/resume/)
- [Themes on NPM](https://www.npmjs.com/search?ranking=maintenance&q=jsonresume-theme)
- [Example JSON Resume Project](https://gitlab.com/bhdouglass/json-resume-example)
