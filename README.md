# Snippets

A repo for little random snippets (small katas, functions, etc.)

## ESLint With the Airbnb JavaScript Style Guide and JSDoc

I decided to try to use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with the Atom text editor I'm using (for now?).

I wound up installing things piecemeal, though it looks like there are easier ways, such as, perhaps, like [this for Atom](http://www.acuriousanimal.com/2016/08/14/configuring-atom-with-eslint.html) and [this for WebStorm](https://www.themarketingtechnologist.co/eslint-with-airbnb-javascript-style-guide-in-webstorm/). Probably even easier/"better" ways, but I din't want to spend my time down that rabbit hole today:

#### ESLint With the Airbnb JavaScript Style Guide

```
$ npm install eslint --save-dev
$ npm install babel-eslint --save-dev
$ npm install eslint-config-airbnb --save-dev
$ npm install eslint-plugin-jsx-a11y --save-dev
$ npm install eslint-plugin-react --save-dev
$ npm install eslint-plugin-import --save-dev // Didn't work
$ npm install eslint-plugin-import@^1.16.0 --save-dev // Worked
```

NOTE: I could have done all the above commands in one line, but I was following the error messages that were popping up in Atom. Next time.

Then I created the ```.eslintrc``` file and pasted in the code from the above linked "Atom" blog post, but modifying the rule about [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars) from "error" to "warn." Continuing to modify rules as I go.

That seemed to work except that I had trouble configuring Atom Beautify indentation, so I wound up creating a ```.jsbeautifyrc``` file and pasting in, then editing, the configurations I found I found it that file in the Atom config directory: ```./atom/packages/atom-beautify/src/.jsbeautifyrc```

#### JSDoc

For the JSDoc, I did this:

```
$ npm install jsdoc --save-dev
$ ./node_modules/jsdoc/jsdoc.js snippets/reverseInPlace.js // Generate JSDoc for single file
$ ./node_modules/jsdoc/jsdoc.js snippets -r  // Generate JSDoc for all files in the directory
```

The generated JSDocs: [./out/index.html](out/index.html) (open file in browser).

Command-line arguments to JSDoc: http://usejsdoc.org/about-commandline.html

### TODOs

Put all .js files in their own directory.
