import next from 'next'
import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'certificates', 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificates', 'localhost.pem'))
}

const port = process.env.PORT || 3000

app.prepare().then(() => {
  https.createServer(httpsOptions, (req, res) => {
    handle(req, res)
  }).listen(port, () => {
    console.log(`> Ready on https://localhost:${port}`)
    console.log('> Development mode:', dev)
  })
}) 