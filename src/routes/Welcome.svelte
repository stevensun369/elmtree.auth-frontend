<script>
  import WelcomeMobile from "./WelcomeMobile.svelte"
  import WelcomeDesktop from "./WelcomeDesktop.svelte"
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  import getEnv from '../env' 
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
    }
  })
</script>



{#if mobile}
  <WelcomeMobile />
{:else}
  <WelcomeDesktop />
{/if}
