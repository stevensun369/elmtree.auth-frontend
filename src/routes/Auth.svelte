<script>
  import axios from "axios"
  import {apiURL} from '../apiURL'
  import {onMount} from 'svelte'

  // updating user data
  var ls = JSON.parse(localStorage.getItem('userInfo'))
  var userType = localStorage.getItem('userType')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ls.token}`,
    },
  }

  const updateTeacher =  async() => {
    const update = await axios.get(
      `${apiURL}/api/teacher/update`,
      config 
    )

    ls.homeroomGrade = update.data.homeroomGrade
    ls.subjectList = update.data.subjectList
    ls.token = update.data.token
  }

  const updateStudent = async() => {
    const update = await axios.get(
      `${apiURL}/api/student/update`,
      config
    )

    ls.grade = update.data.grade
    ls.subjectList = update.data.subjectList
    ls.token = update.data.token
  }

  const updateParent = async() => {
    const update = await axios.get(
      `${apiURL}/api/parent/update`,
      config
    )

    ls.students = updartedata.students,
    ls.token = update.data.token
  }
  onMount(async () => {
    if (userType === 'teacher') {
      await updateTeacher()
    } else if (userType === 'student') {
      await updateStudent()
    } else if (userType === 'parent') {
      await updateParent()
    }
    localStorage.setItem('userInfo', JSON.stringify(ls))
  })


  // giving the auth info
  let data = {
      userType: localStorage.getItem("userType"),
      userInfo: localStorage.getItem("userInfo")
  }
  window.onmessage = (e) => {
    var parent = window.parent
    parent.postMessage(data, "*")
  }
</script>

<main>
  {JSON.stringify(data)}
</main>