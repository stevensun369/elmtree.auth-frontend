<script>
  // document.domain = 'localhost:3000'
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