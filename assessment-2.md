# ![Assessment 2][banner]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Goals](#goals)
*   [Plagiarism](#plagiarism)
*   [Rubric](#rubric)

## Synopsis

Dates are indicative.  Check [`rooster.hva.nl`][rooster] for info on actual
date, time, and place.

*   **Weight**: 50%
*   **Type**: Oral test
*   **Date**: 09-04 or 10-04, or 12-04
*   **Resit**: 25-06 or 28-06
*   **Time**: 0:15h
*   **Grade**: At least 5.5 to pass this course
*   **Bring**: Laptop and charger

## Description

Assessment 2 tests your skills: you’ll present your final project and defend
why it passes this assessment.

This is an oral test where you present your final project.
Bring your own computer and a charger.
You will show you can create a quality project in which you apply the subject
matter of this course and that you understand it.
You will answer questions in such a way as to demonstrate sufficient knowledge
of our goals.

**Note: your project must be a repository on GitHub named `be-assessment-2`**.

We will download and archive your project when it’s due.
You will present the project on your computer.
We will check code handed in on GitHub.
You do not need to create an issue.

## Goals

This assessment focusses on all [main goals][mg] of this course: **Build web
apps with Node** and **store data in a database**.
All [subgoals][sg] from are somewhat tested in assessment 2.
There’s specific focus on [subgoal 13][s13] (**use SQL and NoSQL databases like
MySQL and MongoDB**) and [subgoal 14][s14] (**let users sign up, log in, be
logged in, and log out**).

## Plagiarism

💁 We don’t like plagiarism and report it to our assessment committee
(examencommissie in Dutch).  See ¶ 6.1.2 of Teaching and Examination
Regulations (TER) 2017-2018 (in Dutch: Onderwijs- en examenregeling, OER) for
a full definition, but here are a few cases that count as plagiarism:

> a. using or copying someone else’s texts, data or ideas without a full and
> correct acknowledgement of sources;
> b. presenting the structure or central ideas developed by someone else as
> your own work or ideas, even when a reference to other authors has been
> included;
>
> \[…]
>
> e. copying (parts of) media files or other sources, software source codes,
> models and other diagrams of other people without acknowledgement and
> allowing it to be held as your own work;
>
> \[…]
>
> g. copying the work of fellow-students and allowing it to be held as your
> own work;
>
> \[…]

## Rubric

<!--lint disable no-html maximum-line-length-->

<table>
  <thead>
    <tr>
      <th></th>
      <th><strong>1-2</strong></th>
      <th><strong>3-4</strong></th>
      <th><strong>5-6</strong></th>
      <th><strong>7-8</strong></th>
      <th><strong>9-10</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th align="center" scope="row"><strong>Application</strong> of subject matter</th>
      <td align="center">Git, npm, a database, or Node are used; the web server runs without errors</td>
      <td align="center">Data is read from (HTTP GET, SQL SELECT※), removed from (HTTP DELETE, SQL DELETE※), and created in (HTTP POST, SQL INSERT※) the database through the web app; users can sign up, log in, and log out</td>
      <td align="center">Data is changed in (SQL UPDATE※) the database through the web app; users can stay logged in through sessions; files can be uploaded</td>
      <td align="center">The web app and database contain well-chosen features or methods of interaction; special care was taken to create a performant or secure web app; the web app is deployed</td>
      <td align="center">
        😱<br>
        The way the student applies Git, npm, databases, and Node is more advanced than what they were taught in class; let’s switch places
      </td>
    </tr>
    <tr>
      <th align="center" scope="row">Understanding</th>
      <td align="center">There is substantial own code; the student can explain the code that exists</td>
      <td align="center">The student can explain some parts of their code, how some parts works together, and tech stack</td>
      <td align="center">The student can explain every part of their code, how everything works together, and why software is used instead of alternatives; the project is structured logically</td>
      <td align="center">The project is complex but still understandable; the student carefully chose every part of their stack; software is used that was not covered in class; the student can make live changes</td>
      <td align="center">
        🤓<br>
        The student understands JavaScript and Node’s programming principles and a geeky / nerdy conversation can be held about these principles
      </td>
    </tr>
    <tr>
      <th align="center" scope="row">Quality</th>
      <td align="center">The project is handed in documented, on time, working, and on GitHub; in other words: proper</td>
      <td align="center">Code style is consistent (semicolons or not? double or single quotes? spaces or tabs? how many spaces? nesting…); code, project, and process are partially documented</td>
      <td align="center">Code adheres to standards; docs cover what the project is and does and the students process and choices</td>
      <td align="center">Code quality is good and enforced; docs are useful and professional</td>
      <td align="center">
        📚<br>
        Code and docs both read like great books
      </td>
    </tr>
  </tbody>
</table>

<!--lint enable no-html maximum-line-length-->

[banner]: https://cdn.rawgit.com/cmda-be/logo/93c03f43/banner-assessment-1.svg

[rooster]: https://rooster.hva.nl

[mg]: readme.md#main-goals

[sg]: readme.md#subgoals

[s13]: readme.md#subgoal-13

[s14]: readme.md#subgoal-14
