# MySQL Server

> An [express-server][] but with a [mysql][] database.

## Install

First, get the example:

```bash
git clone git@github.com:cmda-be/course-17-18.git
cd course-17-18/examples/mysql-server
npm install
```

Then, log into mysql:

```sh
mysql -u your-username -p
# Enter your password
```

…and run the following SQL to set up a database and populate a movies table:

```sql
CREATE DATABASE IF NOT EXISTS mymoviewebsite;
USE mymoviewebsite;
CREATE TABLE IF NOT EXISTS movies (
  id INT NOT NULL AUTO_INCREMENT,
  cover TEXT CHARACTER SET utf8,
  title TEXT CHARACTER SET utf8,
  description TEXT CHARACTER SET utf8,
  plot TEXT CHARACTER SET utf8,
  PRIMARY KEY (id)
);
-- Add some movies like so:
INSERT INTO movies (title, plot, description) VALUES (
  'Evil Dead',
  'Five friends travel to a cabin in …',
  'Five friends head to a remote cabin, …'
);
INSERT INTO movies (title, plot, description) VALUES (
  'The Shawshank Redemption',
  'Two imprisoned men bond over a …',
  'Andy Dufresne is a young and …'
);
```

Now, add a [`.env`][dotenv] file with the following info (replacing the values
with actual values):

```text
DB_HOST=localhost
DB_USER=myusername
DB_NAME=mydatabase
DB_PASSWORD=mypassword
```

Finally, start the server with:

```bash
npm start
```

## Changes

The following commits show how this example was created:

*   [`dd116ac`](https://github.com/cmda-be/course-17-18/commit/dd116ac)
    add mysql, dotenv as a dependencies
*   [`9d49c2d`](https://github.com/cmda-be/course-17-18/commit/9d49c2d)
    add gitignore
*   [`390c717`](https://github.com/cmda-be/course-17-18/commit/390c717)
    add mysql connection
*   [`88e38b5`](https://github.com/cmda-be/course-17-18/commit/88e38b5)
    use mysql for list of movies
*   [`eea52db`](https://github.com/cmda-be/course-17-18/commit/eea52db)
    use mysql for detail of movie
*   [`73bb5ac`](https://github.com/cmda-be/course-17-18/commit/73bb5ac)
    use mysql to add a movie
*   [`d23133e`](https://github.com/cmda-be/course-17-18/commit/d23133e)
    use mysql to remove a movie
*   [`ad6ed8a`](https://github.com/cmda-be/course-17-18/commit/ad6ed8a)
    remove superfluous data
*   [`f6cb536`](https://github.com/cmda-be/course-17-18/commit/f6cb536)
    remove superfluous dependencies

## License

[MIT][] © [Titus Wormer][author]

[mit]: ../../license

[express-server]: ../express-server

[mysql]: https://www.mysql.com

[dotenv]: https://www.npmjs.com/package/dotenv

[author]: http://wooorm.com
