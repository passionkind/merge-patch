CONTRIBUTING
============

JSON8 is written in ES5 for optimization concerns while tests are written in ES6 and are transpiled on the fly.

1. ```npm install eslint mocha babel -g```
2. Edit the files, make sure to adopt the same coding style
3. Add unit test for your modifications
4. Run ```npm test``` to execute unit tests and check syntax
5. Submit a pull request

If you want to build the browser standalone version:
```
npm install browserify -g
npm run webify
```
