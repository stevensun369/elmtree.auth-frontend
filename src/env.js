const getEnv = () => {
  let apiURL = ''
  let teacherURL = ''
  let parentURL = ''
  let studentURL = ''

  if (!production) {
    apiURL = 'http://localhost:1000'
    teacherURL = 'http://localhost:3000'
    parentURL = 'http://localhost:3000'
    studentURL = 'http://localhost:3000'
  } else {
    apiURL = 'https://elmtreeapi.xyz'
    teacherURL = 'https://elmtree-teacher-frontend.vercel.app'
    parentURL = 'https://elmtree-parent-frontend.vercel.app'
    studentURL = 'https://elmtree-student-frontend.vercel.app'
  }

  return [apiURL, teacherURL, parentURL, studentURL]
}

export default getEnv
