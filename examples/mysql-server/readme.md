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

<!--
## Changes
-->

## License

[MIT][] © [Titus Wormer][author]

[mit]: ../../license

[express-server]: ../express-server

[mysql]: https://www.mysql.com

[dotenv]: https://www.npmjs.com/package/dotenv

[author]: http://wooorm.com
