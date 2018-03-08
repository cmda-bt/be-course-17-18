<!-- lint disable no-html -->

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
First fork it and then clone it to your computer.
Commit your work early and often.
Push your work to GitHub.
Don’t worry if it’s not perfect.
Try and get as far as you can.
Document your process by replacing the readme with your own docs: describe what
you worked on, what failed, and what succeeded.

The **shelter** project has a custom database documented in `db/readme.md`.

Note that if you make changes to the database, such as adding, changing, or
removing animals, these changes will be lost when you restart the server.

Here’s a list of the most important things to add:

*   Serving images does not work yet.
    Use [`express.static`][static] with [`app.use()`][use] to serve them.
*   Implement `GET /:id` by rendering an animal with the `view/detail.ejs`
    template (tip: `db.get()`).
    Look at the implementation of `GET /` (the `all` function in the server)
    for inspiration.
*   Handle unfound animals (such as `curl localhost:1902/123`) by sending a
    **404 Not Found** error back (tip: `db.has()`).
    Create an error object and render it in the `view/error.ejs` template.
    Look at `view/error.ejs` for how errors should look.
*   Handle invalid identifiers (such as `curl localhost:1902/-`) by sending a
    **400 Bad Request** error back.
*   Respond with JSON if requested on `GET /:id`.
    Look at the implementation of the `all` function for inspiration on how to
    respond with either HTML or JSON based on the request.
    Test it out with Curl: `curl localhost:1902` and `localhost:1902/88996`
    should return JSON.
*   Implement `DELETE /:id` by removing an animal (tip: `db.remove()`).
    Respond with a **404 Not Found** for unfound animals and a **400 Bad
    Request** for invalid identifiers.
    Respond with a **204 No Content** if successful.
    Note: you can just return JSON, as HTML forms don’t support DELETE.
    Test it out with Curl (`curl --verbose --request DELETE
    localhost:1902/something`) to see if 204 and 404 are returned.
    Note: restarting the server restores the removed animals.
*   Handle unfound animals that used to exist in `GET /:id` and `DELETE /:id`
    by sending a **410 Gone** instead of **404 Not Found** error back (tip:
    `db.removed`).
*   Create a form and make it post to `/`.
    You can add an HTML file in `static`, or you could make it a view, but then
    you need to create a route that renders it.
    Add a link from the list to the new form.
    See the definition of `Animal` for which fields are needed,
    what values they can have, and whether they are required.
    There is CSS for forms and fields already, but if you’d like to add more
    make sure to do so in `src/index.css` and to run `npm run build` afterwards.
*   Implement `POST /` to add an animal from the form (tip:
    `db.add()` and [`body-parser`][body-parser]).
    You should clean the data sent to the server before passing it to `db.add`,
    as there are many cases where adding an animal can fail: such as when
    required fields are missing or if fields have a wrong data type (age and
    weight should be numbers, vaccinated and declawed a boolean, declawed must
    be undefined for dogs and rabbits, or when values are empty strings instead
    of undefined).
    Respond with a **422 Unprocessable Entity** if the animal is invalid.
    Respond with a redirect to the animal if successful.
    Note: restarting the server removes the added animals.

Here’s a list of some more things to add:

*   Add support for uploading images as well (tip: [`multer`][multer], and
    don’t forget `enctype="multipart/form-data"` on the form).
    Store images in `db/images`.
    Accept only JPEG images: use `accept="image/jpeg"` on file inputs and
    multer’s `fileFilter`.
    Remove uploaded images if the POST fails.
    Move uploaded images to `$id.jpg`, where `$id` is the animal’s identifier,
    if the post succeeds
*   Add support for accepting a JSON body on `POST /` as well.
    Note that HTML forms send strings for everything, but for JSON you should
    use the values as given.
    Test it out with something like the following Curl request:

    <details>
    <summary><code>POST in Curl example</code></summary>

    ```sh
    curl \
      localhost:1902 \
      --verbose \
      --location \
      --header 'Content-Type: application/json' \
      -d '{
        "name": "Lilo",
        "type": "cat",
        "place": "Brooklyn Animal Care Center",
        "intake": "2014-06-22",
        "vaccinated": true,
        "sex": "male",
        "age": 6,
        "weight": 4,
        "primaryColor": "black",
        "secondaryColor": "white"
      }'
    ```

    </details>

*   Implement `PUT /:id`.
    You can just accept and return JSON as HTML forms don’t support PUT.
    Make sure that `:id` from the route and the id in the body are a match.
    Respond with **200 OK**, **201 Created**, **400 Bad Request**, or
    **422 Unprocessable Entity** where appropriate.
    Test it out with something like the following Curl request:

    <details>
    <summary><code>PUT in Curl example</code></summary>

    ```sh
    curl \
      localhost:1902/1 \
      --verbose \
      --request PUT \
      --header 'Content-Type: application/json' \
      -d '{
        "id": "1",
        "name": "Loco",
        "type": "cat",
        "place": "Brooklyn Animal Care Center",
        "intake": "2014-06-22",
        "vaccinated": true,
        "sex": "male",
        "age": 6,
        "weight": 2,
        "primaryColor": "black",
        "secondaryColor": "white"
      }'
    ```

    </details>

*   Implement `PATCH /:id` as well.
    You can just accept and return JSON as HTML forms don’t support PATCH.
    Respond with **200 OK**, **400 Bad Request**, **404 Not Found**,
    **410 Gone**, or **422 Unprocessable Entity** where appropriate.
    Test it out with something like the following Curl request (note that you
    first need to do the previous PUT again, as restarting the server clears
    added animals):

    <details>
    <summary><code>PATCH in Curl example</code></summary>

    ```sh
    curl \
      localhost:1902/1 \
      --verbose \
      --request PATCH \
      --header 'Content-Type: application/json' \
      -d '{"description": "Loco is a bit weird, but also cute as a button"}'
    ```

    </details>

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
