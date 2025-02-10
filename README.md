# Blog
* Setup Gatsby

* `eleventy.config.js`: handles adding support for non template files.
* `npx @11ty/eleventy --serve`: for running locally
* `main.css`: keep all styles in
* `layout.html`: is the entry html file
* list cap = add limit filter for liquid (the templating language) then use it in an assign syntax, see index.html.
* `{{ 'string' | url }}`: is for making it work on github pages as well as locally you need to prefix every url with this
* When dealing with regular github pages url: `build-ghpages": "npx @11ty/eleventy --pathprefix=/Blog/"` & `"start-ghpages": "npx @11ty/eleventy --pathprefix=/Blog/ --serve --quiet"`

# Enabling Github pages