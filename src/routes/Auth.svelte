<script>
  // document.domain = 'elmtree.io'
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