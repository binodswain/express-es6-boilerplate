[![Test Status](https://github.com/binodswain/express-es6-boilerplate/workflows/Test/badge.svg)](https://github.com/binodswain/express-es6-boilerplate/actions?query=workflow%3ATest)
[![Build Status](https://github.com/binodswain/express-es6-boilerplate/workflows/Build/badge.svg)](https://github.com/binodswain/express-es6-boilerplate/actions?query=workflow%3ABuild)
[![Docker Build Status](https://github.com/binodswain/express-es6-boilerplate/workflows/DockerBuildTest/badge.svg)](https://github.com/binodswain/express-es6-boilerplate/actions?query=workflow%3ADockerBuildTest)

# express boilerplate with es6

A skeleton express app that allows you to use ES6 syntax. Generated by express-generator cli.

## Development mode

In develop mode, babel will be running the app from `src/bin/www`.
`npm run watch` will let nodemon watch the file changes in src & public folder and execute `npm run dev` script. Nodemon config is present in nodemon.json file.

## Production

In production mode, node will run the app from `build/bin/www`.
`npm run build` will set the node_env to production, remove the build bolder, build the output from src and start the server.
