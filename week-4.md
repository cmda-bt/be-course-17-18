# Week 4

> Any sufficiently advanced technology is indistinguishable from magic.
>
> — Arthur C. Clarke

## Table of Contents

*   [Inspiration](#inspiration)
*   [Comic](#comic)
*   [Lecture](#lecture)
*   [Prerequisites](#prerequisites)
*   [Lab](#lab)
*   [Assignments](#assignments)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> `dog-ceo-api` by [**@ElliottLandsborough**][inspiration-author].

## Comic

[![][comic-cover]][comic-link]

> Duty Calls by [**@xkcd**][comic-author].

## Lecture

### Synopsis

*   **Date**: 05-03
*   [**Slides**][slides-lecture]

### Schedule

*   express ([**subgoal 8**][s8])
*   Server ([**subgoal 8**][s8])
*   Template ([**subgoal 9**][s9])
*   Form ([**subgoal 10**][s10])
*   API & XHR ([**subgoal 11**][s11] and [**subgoal 12**][s12])
*   File ([**subgoal 10**][s10])

## Prerequisites

Finish the following prerequisites before this week’s lab.
It is not possible to partake in lab if these are not completed.

*   [Alternatives to Express](#alternatives-to-express)

### Alternatives to Express

Take about 0:45h to investigate the alternatives to [Express][].

Make sure your research answers questions like:

*   What alternatives are there?
*   How do alternatives and Express compare to each other in features,
    popularity, funding, ease of use, or other factors?
*   Which of those factors do or do not matter to you?

## Lab

### Synopsis

*   **Date**: 06-03 (BT 1, BT 2 and BT 3)
*   [**Slides**][slides-lab]

### Schedule

*   Recap
*   [Alternatives to Express](#alternatives-to-express)
*   Live coding [Shelter](#shelter)
*   Toolbox

## Assignments

You’re expected to spend about 6 hours on assignments outside of class.
Submit your assignments by 3 a.m. the day of [lab 5][w5lab].

*   [Shelter](#shelter) (**homework**)

See [week 3][w3a] for assignments due before this lab.

### Shelter

[![][shelter-cover]][shelter-cover-source]

> Cat by [**@miklevasilyev**][shelter-cover-author].

In this assignment you’ll create a web server and API with [express][].

#### Synopsis

*   **Homework**
*   **Time**: 6:00h
*   **Goals**: [subgoal 7][s7], [subgoal 8][s8], [subgoal 9][s9],
    [subgoal 10][s10], and [subgoal 12][s12]
*   **Due**: 3 a.m. the day of [lab 5][w5lab]

#### Tips

*   [`express-server`](examples/express-server)
    (**example**)
    — Simple express example covered in [lecture 4][w4lec]
*   Stuck?  See the [Bugs][] section of the course readme to find a list of
    troubleshooting tips

#### Description

Take ± 6 hours to build out the [`cmda-be/shelter`][shelter] project.
First fork it and then clone it.
Commit your work early and often.
Push your work to GitHub.
Don’t worry if it’s not perfect.
Try and get as far as you can.
Document your process by replacing the readme with your own docs: describe what
you worked on, what failed, and what succeeded.

The **shelter** project has a custom database documented in `db/readme.md`.

Your web app should:

*   There’s a problem when you first start to run the app, fix it by changing
    something in `package.json`.
*   Serving images does not work yet.
    Use [`express.static`][static] with [`app.use()`][use] to serve them.
*   Implement `GET /:id` by rendering an animal with the `view/detail.ejs`
    template (tip: `db.get()`).
    Look at the implementation of `GET /` (the `all` function in the server)
    for inspiration.
*   Handle **404 Not Found** errors (if an animal is not found, such as with
    `localhost:1902/123`) by creating an error object and rendering it with
    the `view/error.ejs` template.
*   Respond with JSON if requested on `GET /:id`.
    Look at the implementation of `GET /` (the `all` function in the server)
    for inspiration on how to respond with either HTML or JSON based on the
    request.
    Test it out with Curl: `curl localhost:1902` and `localhost:1902/88473`
    should return JSON.
*   Implement `DELETE /:id` by removing an animal (tip: `db.remove()`).
    Handle any errors (tip: 404, 400, 410) that may occur.
    Respond with a **204 No Content** if successful.
*   Implement `POST /` to add an animal.
    Create a new template to render a form and make the form post to `/`
    (tip: [`body-parser`][body-parser]).
*   Implement `PUT /:id` and `POST /:id` too.
*   Add support for uploading images as well (tip: [`multer`][multer]).
*   Accept requests bodies in JSON _and_ `application/x-www-form-urlencoded`
*   Return **400 Bad Request** for all invalid requests to identifiers
    (such as `curl localhost:1902/-`).
*   Return **410 Gone** instead of **404 Not Found** for unfound animals
    that used to exist (see the docs on `db.removed(id)` for more info).
*   Return **422 Unprocessable Entity** for **PUT**, **POST**, and **PATCH**
    requests with unexpected data.

Finally, mark this assignment as complete by opening an issue
on our [GitHub issue tracker][shelter-issue].
Include a link to your fork.
Let us know in the issue if you liked this assignment and give us any feedback.

Your project will be reviewed and receive feedback, so expect people to read it,
and be ready for tips and tops!

#### Extra resources

*   [Debugging Express](https://expressjs.com/en/guide/debugging.html)
*   [Express production performance](https://expressjs.com/en/advanced/best-practice-performance.html)
*   [Express production security](https://expressjs.com/en/advanced/best-practice-security.html)
*   [`helmetjs/helmet`](https://github.com/helmetjs/helmet)
*   [How to think like a programmer](https://zellwk.com/blog/think/)
*   [Rubber Duck Debugging](https://rubberduckdebugging.com)

[bugs]: readme.md#bugs

[inspiration-cover]: images/dog-ceo.png

[inspiration-link]: https://dog.ceo

[inspiration-author]: https://github.com/ElliottLandsborough

[comic-cover]: https://imgs.xkcd.com/comics/duty_calls.png

[comic-link]: https://xkcd.com/386/

[comic-author]: https://xkcd.com

[slides-lecture]: https://docs.google.com/presentation/d/1PfEaV-jQdqKWByca9txp38yD8LWIDEWZzldNYBMwUNI/edit?usp=sharing

[slides-lab]: https://docs.google.com/presentation/d/1PB70qNsWxR0B7EQivBqB6ofHmktIlgfzV8B-a6XUFAU/edit?usp=sharing

[w5lab]: week-5.md#lab

[w3a]: week-3.md#assignments

[s7]: readme.md#subgoal-7

[s8]: readme.md#subgoal-8

[s9]: readme.md#subgoal-9

[s10]: readme.md#subgoal-10

[s11]: readme.md#subgoal-11

[s12]: readme.md#subgoal-12

[w4lec]: #lecture

[express]: https://github.com/expressjs/express

[shelter]: https://github.com/cmda-be/shelter

[shelter-cover]: images/shelter.jpg

[shelter-cover-source]: https://unsplash.com/photos/NodtnCsLdTE

[shelter-cover-author]: https://unsplash.com/@miklevasilyev

[static]: http://expressjs.com/en/4x/api.html#express.static

[use]: http://expressjs.com/en/4x/api.html#app.use

[shelter-issue]: https://github.com/cmda-be/course-17-18/issues/new?title=Shelter%20assignment&labels=week-3%2Cweek-4%3Ashelter

[body-parser]: https://github.com/expressjs/body-parser

[multer]: https://github.com/expressjs/multer
