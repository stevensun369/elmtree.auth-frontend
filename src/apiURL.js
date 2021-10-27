let env = 'prod'
let apiURL = ''

if (env === 'dev') {
  apiURL = 'http://localhost:1000'
} else if (env === 'prod') {
  apiURL = 'http://172.104.153.232:9999'
}

export { apiURL }
