<script>
  import {onMount} from 'svelte'
  import {push} from 'svelte-spa-router'

  onMount(() => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userInfo")
    push('/welcome')
  })
</script>