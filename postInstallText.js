module.exports = `

All set! To finalize setup, do the following:

cd %NAME%

* Setup your database with \`yarn db:setup\`. You will be prompted to create it if necessary.
* Run the app with \`yarn dev\`. This will start the dev server and watchers for generating types.
* Create a new GitHub repo, and push the code from your newly generated app.
* Set ENV vars for CI and Deployment

See https://github.com/echobind/bisonapp#getting-started for full instructions!
`;
