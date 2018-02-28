<!--lint disable no-html-->

# MongoDB Server

> An [express-server][] but with a [mongodb][] database.

## Install

First, get the example:

```bash
git clone git@github.com:cmda-be/course-17-18.git
cd course-17-18/examples/mongodb-server
npm install
```

Create a database in another terminal tab:

```sh
mkdir db
mongod --dbpath db
```

Back in the original tab, open the mongo REPL:

```sh
mongo
```

…and run the following code to populate the database:

```text
> use mymoviewebsite
switched to db mymoviewebsite
> db.movies.insert({
   title: 'Evil Dead',
   plot: 'Five friends travel to a …',
   description: 'Five friends head to a …'
 })
WriteResult({ "nInserted" : 1 })
> db.movies.insert({
   title: 'The Shawshank Redemption',
   plot: 'Two imprisoned men bond over …',
   description: 'Andy Dufresne is a …'
 })
WriteResult({ "nInserted" : 1 })
```

Press <kbd>CTRL+C</kbd> to exit.

Now, add a [`.env`][dotenv] file with the following info (replacing the values
with actual values):

```text
DB_HOST=localhost
DB_PORT=myport
DB_NAME=mydatabase
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

[mongodb]: https://www.mongodb.com

[dotenv]: https://www.npmjs.com/package/dotenv

[author]: http://wooorm.com
