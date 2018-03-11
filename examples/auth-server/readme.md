# Auth Server

> An [express-server][] with a [mysql][] database where people can sign up,
> log in, stay logged in through sessions, and log out.

## Install

First, get the example:

```bash
git clone git@github.com:cmda-be/course-17-18.git
cd course-17-18/examples/auth-server
npm install
```

Follow the installation steps for the [mysql-server][] (adding movies),
and add a session secret to `.env`:

```txt
...
SESSION_SECRET=some-secret
```

Then, add a user table.  Log into mysql:

```sh
mysql -u your-username -p
# Enter your password
```

…and run the following SQL to set up a users table:

```sql
USE mymoviewebsite;
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username TEXT CHARACTER SET utf8,
  hash TEXT CHARACTER SET utf8,
  PRIMARY KEY (id)
);
```

Finally, start the server with:

```bash
npm start
```

## Changes

The following commits show how this example was created:

*   [`e18f1a4`](https://github.com/cmda-be/course-17-18/commit/e18f1a4)
    add example
*   [`08154ab`](https://github.com/cmda-be/course-17-18/commit/08154ab)
    add argon2 as a dependency
*   [`75f1c3b`](https://github.com/cmda-be/course-17-18/commit/75f1c3b)
    add sign up form
*   [`6d02648`](https://github.com/cmda-be/course-17-18/commit/6d02648)
    add support for signing up
*   [`b9cb339`](https://github.com/cmda-be/course-17-18/commit/b9cb339)
    add log in form
*   [`50da0ca`](https://github.com/cmda-be/course-17-18/commit/50da0ca)
    add support for logging in
*   [`d6bd9c2`](https://github.com/cmda-be/course-17-18/commit/d6bd9c2)
    add express-session as a dependency
*   [`9a477f7`](https://github.com/cmda-be/course-17-18/commit/9a477f7)
    add note about session secret in .env
*   [`746b8e2`](https://github.com/cmda-be/course-17-18/commit/746b8e2)
    store username in session
*   [`1232895`](https://github.com/cmda-be/course-17-18/commit/1232895)
    prevent adding, removing if not logged in
*   [`a26cec6`](https://github.com/cmda-be/course-17-18/commit/a26cec6)
    show different list view when logged in
*   [`ce7404d`](https://github.com/cmda-be/course-17-18/commit/ce7404d)
    hide remove button when not logged in
*   [`6244766`](https://github.com/cmda-be/course-17-18/commit/6244766)
    add support for logging out

## License

[MIT][] © [Titus Wormer][author]

[mit]: ../../license

[express-server]: ../express-server

[mysql-server]: ../mysql-server

[mysql]: https://www.mysql.com

[author]: http://wooorm.com
