<!--lint disable no-html-->

# ![Backend - Course 2017-2018][banner]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Communication](#communication)
*   [Goals](#goals)
*   [Grade](#grade)
*   [Calendar](#calendar)
*   [Effort](#effort)
*   [Materials](#materials)
*   [Bugs](#bugs)
*   [Programme](#programme)
*   [Conduct](#conduct)
*   [License](#license)

## Synopsis

The course **Backend** is given at [**@CMDA**][cmda] in 2018 between
5 February and 12 April.

*   **Course**: Backend
*   **Coordinator**: [Titus Wormer][wooorm-mail]
*   **Lecturers**:
    [Titus Wormer][wooorm-mail] ([**@wooorm**][wooorm-gh]) (BT 1 and BT 3) and
    [Laurens Aarnoudse][razpudding-mail] ([**@razpudding**][razpudding-gh])
    (BT 2)
*   **SIS**: Backend Development
*   **Credit**: 3 ECTS
*   **Academic year**: 2017-2018
*   **Period**: Quarter 3 (spring)
*   **Programme**: Communication and Multimedia Design (full time bachelor)
*   **Language**: Dutch instructions and English resources
*   **Entry requirements**: N/A

## Description

In Backend we peek behind the curtains and inspect what’s behind the web.
You build web apps with [Node.js][node], communicate with [HTTP][], and store
data in a database with [SQL][] and [NoSQL][].
Additionally, you’ll navigate the [command line][command-line], version control
with [Git][], and deploy your app.
In this course you’ll advance your web dev skills.
You’ll learn to use computers to actually make what you design work: people can
actually fill in forms, like things, and upload files.

**Backend** is an elective course given in Quarter 3 (spring) after the core
curriculum of our programme, building further on knowledge acquired in
**Internetstandaarden**, **Inleiding Programmeren**, and **Frontend 1**.
This course is chosen alongside **Frontend 2** and **Project Tech**, together
making up **Block Tech**.
In **Project Tech** you’ll apply your newfound backend skills.

If you’d like to continue with web development after this course, do a tech
internship next quarter (Q4), choose **Information Design** (includes
[**Frontend 3**][fe3]) for the fall semester next year, and pick
[**Minor Everything Web**][minor] in the fall semester after that.

## Communication

*   [GitHub][gh-be] — Main source of information, assignments, important dates,
    and more
*   [Examples][] — Example code from slides
*   [Slack][] — General chatter and Q&A
*   [Moodle][moodle-be] — Schedulers

## Goals

#### Main goals

The 2 main goals in this course are that you’re able to:

*   Build web apps with Node
*   Store data in a database

#### Subgoals

In practice you’ll learn to:

<!--lint disable ordered-list-marker-value-->

1.  <a name="subgoal-1"></a>
    Navigate the command line ([**week 1**][w1])
2.  <a name="subgoal-2"></a>
    Version control with Git ([**week 1**][w1])
3.  <a name="subgoal-3"></a>
    Collaborate on GitHub ([**week 1**][w1] and [**week 2**][w2])
4.  <a name="subgoal-4"></a>
    Write docs in Markdown ([**week 1**][w1] and [**week 2**][w2])
5.  <a name="subgoal-5"></a>
    Understand Node principles ([**week 2**][w2] and [**week 3**][w3])
6.  <a name="subgoal-6"></a>
    Use packages from npm ([**week 2**][w2])
7.  <a name="subgoal-7"></a>
    Communicate over HTTP ([**week 3**][w3] and [**week 4**][w4])
8.  <a name="subgoal-8"></a>
    Use web frameworks like express ([**week 4**][w4])
9.  <a name="subgoal-9"></a>
    Render data server-side ([**week 4**][w4])
10. <a name="subgoal-10"></a>
    Upload data and files to servers ([**week 4**][w4])
11. <a name="subgoal-11"></a>
    Request data from clients ([**week 4**][w4])
12. <a name="subgoal-12"></a>
    Respond with data from a server ([**week 4**][w4])
13. <a name="subgoal-13"></a>
    Use SQL and NoSQL databases like MySQL and MongoDB ([**week 5**][w5])
14. <a name="subgoal-14"></a>
    Deploy web apps ([**week 6**][w6])

## Grade

| Task                               |   Weight |
| ---------------------------------- | -------: |
| [Participation][]                  |      10% |
| [Assessment 1※][a1] (digital test) |      40% |
| [Assessment 2※][a2] (oral test)    |      50% |
| **Total**                          | **100%** |

> ※ passing both tests (min 5.5) is required

```js
if (!participation && !a1 && !a2) {
  grade = 'GR'
} else if (a1 < 5.5 || a2 < 5.5) {
  grade = 1
} else {
  grade = (participation * 0.1) + (a1 * 0.4) + (a2 * 0.5)
}
```

## Calendar

Dates are indicative.  Check [`rooster.hva.nl`][rooster] for info on actual
date, time, and place.

| Class                        |    Date BT 1   |    Date BT 2   |    Date BT 3   |
| ---------------------------- | :------------: | :------------: | :------------: |
| [Lecture 1][w1lec]           |      05-02     |      05-02     |      05-02     |
| [Lab 1][w1lab]               |      08-02     |      06-02     |      06-02     |
| [Lecture 2][w2lec]           |      12-02     |      12-02     |      12-02     |
| [Lab 2][w2lab]               |      15-02     |      13-02     |      13-02     |
| [Lecture 3][w3lec]           |      19-02     |      19-02     |      19-02     |
| [Lab 3][w3lab]               |      22-02     |      20-02     |      20-02     |
| [Lecture 4][w4lec]           |      05-03     |      05-03     |      05-03     |
| [Lab 4][w4lab]               |      06-03     |      06-03     |      06-03     |
| [Lecture 5][w5lec]           |      12-03     |      12-03     |      12-03     |
| [Lab 5][w5lab]               |      13-03     |      13-03     |      13-03     |
| [Lecture 6][w6lec]           |      19-03     |      19-03     |      19-03     |
| [Lab 6][w6lab]               |      22-03     |      20-03     |      20-03     |
| [**Assessment 1**][a1]       |      26-03     |      26-03     |      26-03     |
| [Lab 7][w7lab]               |      27-03     |      27-03     |      27-03     |
| [Lab 8][w8lab]               |      03-04     |      03-04     |      03-04     |
| [**Assessment 2**][a2]       | 09-04 or 10-04 | 09-04 or 10-04 | 09-04 or 12-04 |
| [**Assessment 1**][a1] resit |      29-07     |      29-07     |      29-07     |
| [**Assessment 2**][a2] resit |      28-07     |      26-07     |      25-07     |

## Effort

###### Per activity

The below table breaks down the general time needed to complete activities.

| Activity                |     Effort |
| ----------------------- | ---------: |
| Lecture (6 × 1:40h)     |     10:00h |
| Lab (8 × 1:40h)         |     13:20h |
| Assignments (5 × 6:00h) |     30:00h |
| Assessment 1            |     10:00h |
| Assessment 2            |     20:40h |
| **Total**               | **84:00h** |

###### Per week

The below table breaks down the general time needed per week.

| Week | Effort | Topic        | Activities                                             |
| ---- | -----: | ------------ | ------------------------------------------------------ |
| 1    |  9:20h | command line | [lab][w1lab], [lecture][w1lec], [assignments][w1a]     |
| 2    |  9:20h | node         | [lab][w2lab], [lecture][w2lec], [assignments][w2a]     |
| 3    |  9:20h | http         | [lab][w3lab], [lecture][w3lec], [assignments][w3a]     |
| 4    |  9:20h | express      | [lab][w4lab], [lecture][w4lec], [assignments][w4a]     |
| 5    |  9:20h | database     | [lab][w5lab], [lecture][w5lec], [assignments][w5a]     |
| 6    | 13:20h | deploy       | [lab][w6lab], [lecture][w6lec], learn for assessment 1 |
| 7    | 12:00h | style        | [lab][w7lab], [assessment 1][a1], work on assessment 2 |
| 8    | 12:00h | review       | [lab][w8lab], work on assessment 2                     |
| 9    |        |              | [assessment 2][a2]                                     |

## Materials

#### Resources used in this course

*   🆓 Young, Alex, and Mike Cantelon.
    _Node.js in Action_.
    Manning, 2017.
    (**optional**, free for AUAS students through [Safari Books][safari])

#### Resources to refresh your memory

*   🆓 [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
    (**course**) — Intro to JavaScript: Learn to code interactively
*   🆓 [Re-introduction to JavaScript](https://developer.mozilla.org/Web/JavaScript/A_re-introduction_to_JavaScript)
    (**article**) — Short re-introduction to JavaScript
*   🆓 [JavaScript Essentials](https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html)
    (**course**) — Learn JavaScript on Lynda
    (free for AUAS students through our [portal][lynda-portal])
*   🆓 [JavaScript For Cats](http://jsforcats.com)
    (**book**) — Intro to JavaScript for new programmers
*   🆓 [JavaScript 30](https://javascript30.com)
    (**course**) — 30 day vanilla JavaScript coding challenge
*   🆓 [Eloquent JavaScript](https://eloquentjavascript.net/3rd_edition/)
    (**book**) — Modern intro to programming
*   🆓 [Basics of HTML & CSS](http://webdive.ktam.org/web/basics)
    (**tutorial**) — Learn how to use HTML & CSS
*   🆓 [Programming 101: Learn English](https://youtu.be/pOwnBPaW5zE)
    (**video**)
*   💸 [Tutoring](http://piratepad.net/HeB4FUsI0t)
    — Match up with another CMD student

#### Resources used in previous courses

*   Duckett, Jon.
    _HTML & CSS_.
    John Wiley & Sons, 2015
    (**internetstandaarden**)
*   [Howe, Shay.
    _Learn to Code HTML & CSS_.
    New Riders, 2014][html-css]
    (**internetstandaarden**)
*   Duckett, Jon.
    _JavaScript & jQuery_.
    John Wiley & Sons, 2015
    (**inleiding programmeren**)

#### Resources used in Frontend 2

*   [Simpson, Kyle.
    _YDKJS: Up & Going_.
    O’Reilly Media, 2015][ydkjs-1]
*   [Simpson, Kyle.
    _YDKJS: Scope & Closures_.
    O’Reilly Media, 2015][ydkjs-2]
*   [Simpson, Kyle.
    _YDKJS: this & Object Prototypes_.
    O’Reilly Media, 2015][ydkjs-3]
*   [Simpson, Kyle.
    _YDKJS: Types & Grammar_.
    O’Reilly Media, 2015][ydkjs-4]
*   [Simpson, Kyle.
    _YDKJS: Async & Performance_.
    O’Reilly Media, 2015][ydkjs-5]
*   [Simpson, Kyle.
    _YDKJS: ES6 & Beyond_.
    O’Reilly Media, 2016][ydkjs-6]

## Bugs

If you have questions:

*   Read the manual for the technology in question
    ([Git](https://git-scm.com/docs),
    [GitHub](https://guides.github.com),
    [Node](https://nodejs.org/api/),
    [npm](https://docs.npmjs.com),
    [express](http://expressjs.com/en/4x/api.html),
    [MySQL](https://dev.mysql.com/doc/refman/5.7/en/),
    [MongoDB](https://docs.mongodb.com))
*   [Browse examples][examples]
*   [Search StackOverflow][stackoverflow]
*   [Use a search engine like DuckDuckGo][duckduckgo]
*   [Ask questions on Slack][slack]
*   [Contact a lecturer][synopsis]

## Programme

This course is given at [Communication and Multimedia Design][bachelor], a
design bachelor focused on interactive digital products and services.  CMD is
part of the [Faculty of Digital Media and Creative Industries][faculty] at the
[Amsterdam University of Applied Sciences][university].

[![][cmd-logo]][bachelor]

## Conduct

This course has a [Code of Conduct][coc].  Anyone interacting with this
repository, organisation, or community is bound by it.

Staff and students of the Amsterdam University of Applied Sciences (Hogeschool
van Amsterdam) are additionally bound by the [Regulation Undesirable
Conduct][ruc] ([Regeling Ongewenst Gedrag][rog]).

## License

Unless stated otherwise, code is [MIT][] © [Titus Wormer][author],
docs and images are [CC-BY-4.0][].

[banner]: https://cdn.rawgit.com/cmda-be/logo/93c03f4/banner.svg

[mit]: license.md#code

[cc-by-4.0]: license.md#documentation-and-images

[author]: http://wooorm.com

[wooorm-gh]: https://github.com/wooorm

[razpudding-gh]: https://github.com/Razpudding

[wooorm-mail]: mailto:t.e.wormer@hva.nl?subject=backend:%20

[razpudding-mail]: mailto:l.n.aarnoudse@hva.nl?subject=backend:%20

[cmda]: https://github.com/cmda

[fe3]: https://github.com/cmda-fe3/course-17-18

[gh-be]: https://github.com/cmda-be/course-17-18

[slack]: https://cmda-tech.slack.com

[moodle-be]: https://moodle.cmd.hva.nl/course/view.php?id=431

[rooster]: https://rooster.hva.nl

[node]: https://nodejs.org

[http]: https://tools.ietf.org/html/rfc2068

[sql]: https://en.wikipedia.org/wiki/SQL

[nosql]: https://en.wikipedia.org/wiki/NoSQL

[command-line]: https://en.wikipedia.org/wiki/Command-line_interface

[git]: https://git-scm.com

[examples]: examples

[stackoverflow]: https://stackoverflow.com

[duckduckgo]: https://duckduckgo.com

[synopsis]: #synopsis

[minor]: https://cmda.github.io/minor-everything-web/

[html-css]: https://learn.shayhowe.com/html-css/

[safari]: http://rps.hva.nl:2048/login?url=http://proquest.safaribooksonline.com/?uicode=hva

[lynda-portal]: https://lyndaportal.ict.hva.nl

[ydkjs-1]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going

[ydkjs-2]: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures

[ydkjs-3]: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes

[ydkjs-4]: https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/README.md#you-dont-know-js-types--grammar

[ydkjs-5]: https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance

[ydkjs-6]: https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond

[a1]: assessment-1.md

[a2]: assessment-2.md

[participation]: participation.md

[bachelor]: https://www.cmd-amsterdam.nl/english/

[faculty]: https://www.amsterdamuas.com/faculty/fdmci/faculty-of-digital-media-and-creative-industries.html

[university]: https://www.amsterdamuas.com

[cmd-logo]: images/cmd.jpg

[coc]: code-of-conduct.md

[ruc]: https://www.amsterdamuas.com/practical-matters/algemeen/hva-breed/juridische-zaken/legal-affairs/regulation-undesirable-conduct/regulation-undesirable-conduct.html#anker-3-complaints-authority

[rog]: https://www.hva.nl/praktisch/algemeen/hva-breed/juridische-zaken/loket-beroep-bezwaar-en-klacht/regeling-ongewenst-gedrag/regeling-ongewenst-gedrag.html?origin=gbS4rg%2FDTZuxQ6lGVF%2BN1A

[w1]: week-1.md

[w2]: week-2.md

[w3]: week-3.md

[w4]: week-4.md

[w5]: week-5.md

[w6]: week-6.md

[w1lec]: week-1.md#lecture

[w2lec]: week-2.md#lecture

[w3lec]: week-3.md#lecture

[w4lec]: week-4.md#lecture

[w5lec]: week-5.md#lecture

[w6lec]: week-6.md#lecture

[w1lab]: week-1.md#lab

[w2lab]: week-2.md#lab

[w3lab]: week-3.md#lab

[w4lab]: week-4.md#lab

[w5lab]: week-5.md#lab

[w6lab]: week-6.md#lab

[w7lab]: week-7.md#lab

[w8lab]: week-8.md#lab

[w1a]: week-1.md#assignments

[w2a]: week-2.md#assignments

[w3a]: week-3.md#assignments

[w4a]: week-4.md#assignments

[w5a]: week-5.md#assignments
