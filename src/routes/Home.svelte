<script>
	import getEnv from '../env' 
	import {push} from 'svelte-spa-router'
  const [apiURL, teacherURL, parentURL, studentURL] = getEnv(production)

  const userType = localStorage.getItem('userType')

  import {onMount} from 'svelte'
  onMount(() => {
    if (userType === 'teacher') {
      window.location.replace(teacherURL)
    } else if (userType === 'parent') {
      window.location.replace(parentURL)
    } else if (userType === 'studentl') {
      window.location.replace(studentURL)
    } else if (userType === null) {
			push('/welcome')
		}
  })
</script>