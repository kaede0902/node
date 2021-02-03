var remark = require('remark')
var recommended = require('remark-preset-lint-recommended')
var html = require('remark-html')
 
remark()
  .use(recommended)
  .use(html)
  .process('## Hello world!', function (err, file) {
    console.log(String(file))
  })