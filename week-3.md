# Week 3

> ```txt
> TypeError: undefined is not a function. (In 'undefined()', 'undefined' is undefined)
> ```

## Table of Contents

*   [Inspiration](#inspiration)
*   [Comic](#comic)
*   [Lecture](#lecture)
*   [Lab](#lab)
*   [Assignments](#assignments)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> HTTP cat by [**@girlie_mac**][inspiration-author].

## Comic

[![][comic-cover]][comic-link]

> Tech Support Cheat Sheet by [**@xkcd**][comic-author].

## Lecture

### Synopsis

*   **Date**: 19-02
*   [**Slides**][slides-lecture]

### Schedule

*   HTTP ([**subgoal 7**][s7])
*   Server ([**subgoal 5**][s5] and [**subgoal 7**][s7])
*   Request ([**subgoal 5**][s5] and [**subgoal 7**][s7])
*   **Guest lecture**: [**@dandevri**](https://github.com/dandevri)

## Lab

### Synopsis

*   **Date**: 22-02 (BT 1) or 20-02 (BT 2 and BT 3)

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
Submit your assignments by 3 a.m. the day of [lab 4][w4lab].

*   [Transfer](#transfer) (**practice**)
*   [Listing](#listing) (**homework**)

See [week 2][w2a] for assignments due before this lab.

### Transfer

[![][transfer-cover]][transfer-cover-source]

> Downtown & Brooklyn by [**@trapnation**][transfer-cover-author].

In this assignment you’ll learn the basics of HTTP.

#### Synopsis

*   **Practice**
*   **Time**: 1:00h
*   **Goals**: [subgoal 7][s7]
*   **Due**: 3 a.m. the day of [lab 4][w4lab]

#### Tips

*   [`httpstatuses.com`](https://httpstatuses.com)
    (**website**) — List of HTTP status codes
*   Stuck?  See the [Bugs][] section of the course readme to find a list of
    troubleshooting tips

#### Description

Take about 1 hour to follow the [transfer][] tutorial through to completion.

Install it with:

```sh
npm install cmda-be/transfer --global
```

…and then start it by running `transfer`.
This tutorial is interactive.
Answer any questions it asks you, until completion.

If you completed the tutorial, mark this assignment as complete by opening an
issue on our [GitHub issue tracker][transfer-issue].
Let us know in the issue what you thought of the exercises.

### Listing

[![][listing-cover]][listing-cover-source]

> Plan a lifetime adventure by [**@glenncarstenspeters**][listing-cover-author].

In this assignment you’ll apply your HTTP knowledge in Node by building a static
file server.

#### Synopsis

*   **Practice**
*   **Time**: 5:00h
*   **Goals**: [subgoal 5][s5] and [subgoal 7][s7]
*   **Due**: 3 a.m. the day of [lab 4][w4lab]

#### Tips

*   [`plain-server`](examples/plain-server)
    (**example**)
    — Simple server example covered in [lecture 3][w3lec]
*   Stuck?  See the [Bugs][] section of the course readme to find a list of
    troubleshooting tips

#### Description

Take ± 5 hours to create a static file server in Node.js without any frameworks
(so no express).
You may use small modules (such as [`mime-types`][mime-types]) but make sure
to hand in considerable own work.
Hand in your project as a new repository on GitHub under your username.
In your project, create a `package.json` manifest with relevant metadata and
make sure all your dependencies are listed.
Document your project, its features, and usage in a `readme.md` file.

Your static server should:

*   Respond with 200 OK and a file if it’s requested (if `/about.html`
    is requested the server should respond with the contents of that file so
    the browser can render it)
*   Respond with a correct `Content-Type` header (if `/images/avatar.png`
    is requested the server should respond `Content-Type: image/png` so the
    browser can show it)
*   Respond with 404 Not Found and a useful (for non-technical people) HTML
    page saying that the file could not be found (if `/nonexistent-file.html`
    is requested the server should send a nice document that the browser can
    display)
*   Respond with 200 OK and an `index.html` file if it exists (if `/assets` is
    requested and `/assets/index.html` exists, the server should respond with
    the contents of that file as if `/assets/index.html` was requested instead)
*   Respond with 200 OK and a list of files in the directory if no `index.html`
    exists (if `/images` is requested and `/images/index.html` **does not**
    exists, the server should respond with a nice looking list of files in the
    `/images` directory)

If you have some time left, add a license, a `.gitignore`, and other useful
files.
Finally, push your project to GitHub.

If you pushed your work, mark this assignment as complete by opening an issue
on our [GitHub issue tracker][listing-issue].
Include a link to your repository.
Let us know in the issue if you liked this assignment, and give us any feedback.

[bugs]: readme.md#bugs

[inspiration-cover]: https://http.cat/403

[inspiration-link]: https://http.cat

[inspiration-author]: https://twitter.com/girlie_mac

[comic-cover]: https://imgs.xkcd.com/comics/tech_support_cheat_sheet.png

[comic-link]: https://xkcd.com/627/

[comic-author]: https://xkcd.com

[slides-lecture]: https://docs.google.com/presentation/d/1Mf53VP-YNeTSSKIg0BlOALiGbGZ0LDvHC7-RTED89DY/edit?usp=sharing

[w4lab]: week-4.md#lab

[w2a]: week-2.md#assignments

[s5]: readme.md#subgoal-5

[s7]: readme.md#subgoal-7

[transfer]: https://github.com/cmda-be/transfer

[transfer-cover]: images/transfer.jpg

[transfer-cover-source]: https://unsplash.com/photos/XAqaeyzj3NM

[transfer-cover-author]: https://unsplash.com/@trapnation

[transfer-issue]: https://github.com/cmda-be/course-17-18/issues/new?title=Transfer%20assignment&labels=week-3%2Cweek-3%3Atransfer

[listing-cover]: images/listing.jpg

[listing-cover-source]: https://unsplash.com/photos/RLw-UC03Gwc

[listing-cover-author]: https://unsplash.com/@glenncarstenspeters

[listing-issue]: https://github.com/cmda-be/course-17-18/issues/new?title=Listing%20assignment&labels=week-3%2Cweek-3%3Alisting

[mime-types]: https://www.npmjs.com/package/mime-types

[w3lec]: #lecture
