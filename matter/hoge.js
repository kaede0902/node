const matter = require('gray-matter')
const path = require('path')
const fs = require('fs')

const postsDir = path.join(process.cwd(), 'posts')
console.log(postsDir)

const fileNames = fs.readdirSync(postsDir)
console.log(fileNames)

const allPostsData = fileNames.map(fileName => {
  const fullPath = path.join(postsDir, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  console.log('fileContents: ',fileContents)
  const matterResult = matter(fileContents)
  console.log('matterResult: ',matterResult)
})
