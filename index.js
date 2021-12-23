import fetch from 'node-fetch'
import http from 'http'

const api = "https://nos88vunic.execute-api.us-east-2.amazonaws.com/default/HelloWorld"
const response = await fetch(api)
const data = await response.json()

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(data)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});