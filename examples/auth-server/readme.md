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
and then add a table for users.

Log into mysql:

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

## License

[MIT][] © [Titus Wormer][author]

[mit]: ../../license

[express-server]: ../express-server

[mysql-server]: ../mysql-server

[mysql]: https://www.mysql.com

[author]: http://wooorm.com
