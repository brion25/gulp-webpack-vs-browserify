# Gulp Integration : Webpack vs Browserify

Simple example of how Gulp can be integrated with both: Webpack and Browserify. The application is simple: It will require 2 files: `print.js` and `square.js`, and then print the result of square 5 in console:

![alt tag](https://raw.github.com/brion25/gulp-webpack-vs-browserify/master/assets/result.png)

## Pre-requisites

- Have Gulp installed globally : `npm install -g gulp`

## Play with it!

To run the tasks, you need to run them as we normally do:

- `gulp browserify` -> to run the task of `browserify`
- `gulp webpack-no-config` -> to run the task of `webpack` without the config file
- `gulp webpack-config` -> to run the task of `webpack` using the config file
- `gulp` -> run the 3 tasks

## Results

- **Using `browserify`**
  ![alt tag](https://raw.github.com/brion25/gulp-webpack-vs-browserify/master/assets/browserify.png)
- **Using `webpack` without config file**
  ![alt tag](https://raw.github.com/brion25/gulp-webpack-vs-browserify/master/assets/webpack-no-config.png)
- **Using `webpack` with config file**
  ![alt tag](https://raw.github.com/brion25/gulp-webpack-vs-browserify/master/assets/webpack-config.png)
