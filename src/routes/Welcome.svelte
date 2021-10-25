<script>
  import WelcomeMobile from "./WelcomeMobile.svelte"
  import WelcomeDesktop from "./WelcomeDesktop.svelte"
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
</script>

{#if mobile}
  <WelcomeMobile />
{:else}
  <WelcomeDesktop />
{/if}
