let env = 'prod'
let apiURL = ''

if (env === 'dev') {
  apiURL = 'http://localhost:1000'
} else if (env === 'prod') {
  apiURL = 'https://elmtreeapi.xyz'
}

export { apiURL }
