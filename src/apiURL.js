let env = 'prod'
let apiURL = ''
let teacherURL = ''
let parentURL = ''
let studentURL = ''

if (env === 'dev') {
  apiURL = 'http://localhost:1000'
  teacherURL = 'http://localhost:3000'
  parentURL = 'http://localhost:3000'
  studentURL = 'http://localhost:3000'
} else if (env === 'prod') {
  apiURL = 'https://elmtreeapi.xyz'
  teacherURL = 'https://elmtree-teacher-frontend.vercel.app'
  parentURL = 'https://elmtree-parent-frontend.vercel.app'
  studentURL = 'https://elmtree-student-frontend.vercel.app'
}

export { apiURL, teacherURL, parentURL, studentURL }
