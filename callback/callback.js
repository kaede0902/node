function greeting(name) {
  alert(` Hello: ${name}`)
}
function processUserInput(callback) {
  const name = prompt('Enter your name')
  callback(name)
}
processUserInput(greeting)
