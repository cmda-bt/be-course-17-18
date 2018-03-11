<!--lint disable no-html-->

# Week 5

> An SSL error has occurred and a secure connection to the server
> cannot be made.
>
> — [William Shakespeare][quote-author]

## Table of Contents

*   [Inspiration](#inspiration)
*   [Comic](#comic)
*   [Lecture](#lecture)
*   [Prerequisites](#prerequisites)
*   [Lab](#lab)
*   [Assignments](#assignments)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> [`qw3rtman/git-fire`][inspiration-link] by
> [**@qw3rtman**][inspiration-author].

## Comic

[![][comic-cover]][comic-link]

> Exploits of a Mom by [**@xkcd**][comic-author].

## Lecture

### Synopsis

*   **Date**: 12-03
*   [**Slides**][slides-lecture]

### Schedule

*   SQL ([**subgoal 13**][s13])
*   MySQL ([**subgoal 13**][s13])
*   NoSQL ([**subgoal 13**][s13])
*   MongoDB ([**subgoal 13**][s13])
*   **Guest lecture**: [**@peterpeerdeman**](https://github.com/peterpeerdeman)

## Prerequisites

Finish the following prerequisites before this week’s lab.
It is not possible to partake in lab if these are not completed.

*   [Alternatives to MySQL](#alternatives-to-mysql)

### Alternatives to MySQL

Take about 0:45h to investigate the alternatives to MySQL.
What databases are out there, and how can they be categorised?

Make sure your research answers questions like:

*   What databases are there?
*   How do databases compare to each other in features, type (SQL, NoSQL, or
    something else?), popularity, funding, ease of use, or other factors?
*   Which of those factors do or do not matter to you?

## Lab

### Synopsis

*   **Date**: 13-03 (BT 1, BT 2, and BT 3)
*   [**Slides**][slides-lab]

### Schedule

*   Recap
*   [Alternatives to MySQL](#alternatives-to-mysql)
*   Start work on [Storage](#storage)
*   Toolbox

## Assignments

You’re expected to spend about 6 hours on assignments outside of class.
Submit your assignments by 3 a.m. the day of [lab 6][w6lab].

*   [Storage](#storage) (**homework**)

See [week 4][w4a] for assignments due before this lab.

### Storage

[![][storage-cover]][storage-cover-source]

> Library by [**@jzamora**][storage-cover-author].

In this assignment you’ll add an SQL database to the project you created for
last week’s [shelter][] assignment.

#### Synopsis

*   **Homework**
*   **Time**: 6:00h
*   **Goals**: [**subgoal 8**][s8] and [**subgoal 13**][s13]
*   **Due**: 3 a.m. the day of [lab 6][w6lab]

#### Tips

*   [`mysql-server`](examples/mysql-server)
    (**example**)
    — Simple MySQL example covered in [lecture 5][w5lec]
*   [SQL tutorial](http://sqlzoo.net/wiki/SQL_Tutorial)
    (**tutorial**)
    — Learn SQL interactively in stages
*   Stuck?  See the [Bugs][] section of the course readme to find a list of
    troubleshooting tips

#### Description

Take ± 6 hours to add an SQL database to your project from last week’s
[shelter][] assignment.
Replace the current “database” (`db`) with a real SQL store.
Using an SQL database other than MySQL is allowed.
Other database types, like MongoDB or Level, are not allowed for this
assignment.
You are free to add data that wasn’t in shelter before to your database.

Commit your work early and often.
Push your work to GitHub.
Don’t worry if it’s not perfect.
Try and get as far as you can.

Document your process by replacing the readme with your own docs: describe what
you worked on, what failed, and what succeeded.
Include a diagram in your readme that explains how the database works
(**hint**: [Google Drawings][drawings]).

Your web app should:

*   Include at least eight animals in the database
*   Include all animal types (dog, cat, and rabbit)
*   Add support for getting all animals, getting one animal, removing an
    animal, and adding an animal
*   Use the correct types for all fields
*   Use at least two different tables

#### How to install MySQL

<details>
<summary>macOS</summary>

First install [Homebrew][brew] if you don’t have it yet.

Now, open your terminal and install MySQL like so:

```sh
brew install mysql
brew services start mysql
```

This makes sure MySQL starts when your computer starts.
You can run `brew services stop mysql` to stop that.

</details>

<details>
<summary>Windows</summary>

First install the [Windows Subsystem for Linux][subshell] if you don’t have it
yet.
Then, follow the steps for Linux.

</details>

<details>
<summary>Linux</summary>

<!-- TODO -->

</details>

#### Extra resources

*   [Express Database integration](https://expressjs.com/en/guide/database-integration.html)
*   [Awesome Falsehood](https://github.com/kdeldycke/awesome-falsehood)

[bugs]: readme.md#bugs

[quote-author]: https://twitter.com/shatterfront/status/816065700577972224

[inspiration-cover]: images/git-fire.jpg

[inspiration-link]: https://github.com/qw3rtman/git-fire

[inspiration-author]: https://github.com/qw3rtman

[comic-cover]: https://imgs.xkcd.com/comics/exploits_of_a_mom.png

[comic-link]: https://xkcd.com/327/

[comic-author]: https://xkcd.com

[slides-lecture]: https://docs.google.com/presentation/d/1QVPTtENQ8d6td9ioNZHnbSoiilUZdsZ8n_F5naxw_Rw/edit?usp=sharing

[brew]: https://brew.sh

[subshell]: week-1.md#subshell

[slides-lab]: https://docs.google.com/presentation/d/1m_iRiha9bwxuEROi1MIxP2atB263sOmQvm6Uq1zRSpU/edit?usp=sharing

[w5lec]: #lecture

[w6lab]: week-6.md#lab

[w4a]: week-4.md#assignments

[s8]: readme.md#subgoal-8

[s13]: readme.md#subgoal-13

[shelter]: week-4.md#shelter

[storage-cover]: images/storage.jpg

[storage-cover-source]: https://unsplash.com/photos/GWOTvo3qq7U

[storage-cover-author]: https://unsplash.com/@jzamora

[drawings]: https://docs.google.com/drawings
