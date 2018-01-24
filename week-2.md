<!--lint disable no-html-->

# Week 2

> Always bet on JavaScript.
>
> — [**@BrendanEich**][quote-author]

## Table of Contents

*   [Inspiration](#inspiration)
*   [Comic](#comic)
*   [Lecture](#lecture)
*   [Prerequisites](#prerequisites)
*   [Lab](#lab)
*   [Assignments](#assignments)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> Understanding npm by [**@hughsk**][inspiration-author].

## Comic

[![][comic-cover]][comic-link]

> Compiling by [**@xkcd**][comic-author].

## Lecture

### Synopsis

*   **Date**: 12-02
*   [**Slides**][slides-lecture]

### Schedule

*   Node ([**subgoal 5**][s5])
*   In depth ([**subgoal 5**][s5])
*   Principles ([**subgoal 5**][s5])
*   npm ([**subgoal 6**][s6])
*   Packages ([**subgoal 6**][s6])

## Prerequisites

Finish the following prerequisites before this week’s lab.
It is not possible to partake in lab if these are not completed.

*   [Node](#node)

### Node

Open your terminal, and install [nvm](https://github.com/creationix/nvm) like
so:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

Close and re-open your terminal and now run the following:

```sh
nvm install stable
```

Node is now installed (and npm with it).  You can check it by running:

```sh
node -v # Should print 9.4.0 (or a higher version)
npm -v # Something like 5.6.0 (or a higher version)
```

You can use **nvm** to update Node in the future.  npm can update itself
(`npm install -g npm`).

## Lab

### Synopsis

*   **Date**: 15-02 (BT 1) or 13-02 (BT 2 and BT 3)

<!--
*   **Slides**
-->

<!--
### Schedule

*   Alpha
*   Bravo
*   Charlie
-->

## Assignments

You’re expected to spend about 6 hours on assignments outside of class.
Submit your assignments by 3 a.m. the day of [lab 3][w3lab].

*   [learnyounode](#learnyounode) (**practice**)
*   [Package](#package) (**homework**)

See [week 1][w1a] for assignments due before this lab.

### learnyounode

[![][learnyounode-cover]][learnyounode-cover-source]

> Lose Yourself by [**@claybanks1989**][learnyounode-cover-author].

In this assignment you’ll learn the basics of Node.

#### Synopsis

*   **Practice**
*   **Time**: 3:00h
*   **Goals**: [subgoal 5][s5]
*   **Due**: 3 a.m. the day of [lab 3][w3lab]

#### Tips

*   Stuck?  See the [Bugs][] section of the course readme to find a list of
    troubleshooting tips

#### Description

Take ± 3 hours to follow the [learnyounode][] workshopper through to completion.

Workshoppers are interactive, self guided lesson modules, used as curriculum in
[NodeSchool][]: free and in-person hosted workshops.
At NodeSchool, mentors help attendees work through the challenges, but you can
also work through workshoppers on your own, or with friends or colleagues.

[NodeSchool Amsterdam][nsa] is pretty active: about once per month there’s a
workshop.
It’s also a lot of fun.
Need some extra help?
Want to meet more developers?
Definitely attend one of the workshops!

Other than `learnyounode`, workshoppers exist for JavaScript, npm, Express,
Electron, and much more.  Feel free to peruse the
[list of workshoppers][workshoppers] and try anything that sounds interesting.

If you completed the workshopper, mark this assignment as complete by opening
an issue on our [GitHub issue tracker][learnyounode-issue].
Let us know in the issue what you thought of the exercises.

### Package

[![][package-cover]][package-cover-source]

> Parcel, package, candy cane and string by
> [**@moonshinechild**][package-cover-author].

In this assignment you’ll learn the basics of node modules and npm packages.

#### Synopsis

*   **Homework**
*   **Time**: 3:00h
*   **Goals**: [subgoal 3][s3], [subgoal 4][s4], and [subgoal 6][s6]
*   **Due**: 3 a.m. the day of [lab 3][w3lab]

#### Tips

*   [`package.json` docs](https://docs.npmjs.com/files/package.json)
    (**article**)
    — Specifics of npm’s `package.json` handling
*   Stuck?  See the [Bugs][] section of the course readme to find a list of
    troubleshooting tips

#### Description

Take ± 3 hours to create a project around the below code:

<details>
<summary><code>index.js</code> (click the arrow to expand)</summary>

```javascript
'use strict';

var repeat = require('repeat-string');

/* Expose `vowel` as default function: vowel = require('this package'). */
module.exports = vowel;

/* Add other functions on `vowel`: inner = require('this package').inner. */
vowel.vowel = vowel;
vowel.inner = inner;
vowel.grawlix = grawlix;

var floor = Math.floor;
var defaultCharacter = '*';
var grawlixPattern = '@#$%!&?';
var vowels = /[aeiouy]/g;

/* `butt` > `b*tt` */
function vowel(value, character) {
  return value.replace(vowels, character || defaultCharacter);
}

/* `butt` > `b**t` */
function inner(value, character) {
  if (value.length <= 2) {
    return value;
  }

  return value.charAt(0) +
    repeat(character || defaultCharacter, value.length - 2) +
    value.charAt(value.length - 1);
}

/* `butt` > `@#$%` */
function grawlix(value, pattern) {
  var chars = pattern || grawlixPattern;
  var length = typeof value === 'number' ? value : value.length;
  var count = chars.length;
  return repeat(chars, floor(length / count)) + chars.slice(0, length % count);
}
```

</details>

* * *

Hand in your project as a new repository on GitHub under your username.

In your repository, include the `index.js` file given above: don’t change it.

Include a `package.json` with a correct name, version, dependencies, and other
metadata.
For examples of `package.json` files, see
[`repeat-string`](https://github.com/jonschlinkert/repeat-string/blob/master/package.json),
[`longest-streak`](https://github.com/wooorm/longest-streak/blob/master/package.json),
or [`skin-tone`](https://github.com/sindresorhus/skin-tone/blob/master/package.json).

Add a `readme.md` as well, documenting the code: how to install it, how to use
it (with examples), a license.
For examples of `readme.md` files, see
[`concat-stream`](https://github.com/maxogden/concat-stream#readme),
[`ccount`](https://github.com/wooorm/ccount#readme),
or [`normalize-url`](https://github.com/sindresorhus/normalize-url#readme).

Finally, push your project, `index.js`, `package.json`, and `readme.md` to
GitHub.

If you have some time left and would like to dig further, you can:

*   Add a [license](https://help.github.com/articles/licensing-a-repository/)
*   Add a [`.gitignore`](https://help.github.com/articles/ignoring-files/)
*   Add unit tests (tape, mocha, …)
*   Add code linting (xo, standard, prettier, …)
*   Add a [`.editorconfig`](http://editorconfig.org)

…most of the previously linked to projects have the above in place, look at
them for examples.

If you pushed your work, mark this assignment as complete by opening an issue
on our [GitHub issue tracker][package-issue].
Include a link to your repository.
Let us know in the issue if you liked this assignment, and give us any feedback.

Your project will be reviewed and receive feedback, so expect people to read it,
and be ready for tips and tops!

[bugs]: readme.md#bugs

[quote-author]: https://twitter.com/BrendanEich

[inspiration-cover]: images/unpm.png

[inspiration-link]: https://unpm.nodesource.com

[inspiration-author]: https://github.com/hughsk

[comic-cover]: https://imgs.xkcd.com/comics/compiling.png

[comic-link]: https://www.xkcd.com/303/

[comic-author]: https://xkcd.com

[slides-lecture]: https://docs.google.com/presentation/d/16uT5GMOcTcs2xcbqvlCb3RetpFATil5nmXyZK7uvEdc/edit?usp=sharing

[w3lab]: week-3.md#lab

[w1a]: week-1.md#assignments

[s3]: readme.md#subgoal-3

[s4]: readme.md#subgoal-4

[s5]: readme.md#subgoal-5

[s6]: readme.md#subgoal-6

[learnyounode-cover]: images/learnyounode.jpg

[learnyounode-cover-source]: https://unsplash.com/photos/GX8KBbVmC6c

[learnyounode-cover-author]: https://unsplash.com/@claybanks1989

[learnyounode-issue]: https://github.com/cmda-be/course-17-18/issues/new?title=learnyounode%20assignment&labels=week-2%2Cweek-2%3Alearnyounode

[learnyounode]: https://github.com/workshopper/learnyounode#readme

[nodeschool]: https://nodeschool.io

[nsa]: https://nodeschool.io/amsterdam/

[workshoppers]: https://nodeschool.io/#workshopper-list

[package-cover]: images/package.jpg

[package-cover-source]: https://unsplash.com/photos/fV4-DdSdcpI

[package-cover-author]: https://unsplash.com/@moonshinechild

[package-issue]: https://github.com/cmda-be/course-17-18/issues/new?title=Package%20assignment&labels=week-2%2Cweek-2%3Apackage
