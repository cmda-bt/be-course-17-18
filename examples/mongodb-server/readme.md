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

## Changes

The following commits show how this example was created:

*   [`02d1df2`](https://github.com/cmda-be/course-17-18/commit/02d1df2)
    add example
*   [`9dfed77`](https://github.com/cmda-be/course-17-18/commit/9dfed77)
    add mongodb, dotenv as dependencies
*   [`f69654a`](https://github.com/cmda-be/course-17-18/commit/f69654a)
    add gitignore
*   [`cc7eb63`](https://github.com/cmda-be/course-17-18/commit/cc7eb63)
    replace `id` with `_id`
*   [`dd672e3`](https://github.com/cmda-be/course-17-18/commit/dd672e3)
    add mongo connection
*   [`4cb4221`](https://github.com/cmda-be/course-17-18/commit/4cb4221)
    use mongo for list of movies
*   [`1f20d06`](https://github.com/cmda-be/course-17-18/commit/1f20d06)
    use mongo for detail of movie
*   [`e429b67`](https://github.com/cmda-be/course-17-18/commit/e429b67)
    use mongo to add a movie
*   [`2c7cc94`](https://github.com/cmda-be/course-17-18/commit/2c7cc94)
    use mongo to remove a movie
*   [`e569692`](https://github.com/cmda-be/course-17-18/commit/e569692)
    remove superfluous data
*   [`17afc59`](https://github.com/cmda-be/course-17-18/commit/17afc59)
    remove superfluous dependencies

## License

[MIT][] © [Titus Wormer][author]

[mit]: ../../license

[express-server]: ../express-server

[mongodb]: https://www.mongodb.com

[dotenv]: https://www.npmjs.com/package/dotenv

[author]: http://wooorm.com
