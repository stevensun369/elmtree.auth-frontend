<script>
  // document.domain = 'localhost:3000'
  window.onmessage = (e) => {
    var parent = window.parent
    let data = {
      userType: localStorage.getItem("userType"),
      userInfo: localStorage.getItem("userInfo")
    }
    parent.postMessage(data, "*")
  }
</script>

<main>
  hello from auth endpoint
</main>