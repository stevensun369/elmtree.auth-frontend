<a href="/#/welcome">
  <div class="backButton">
    <img src="img/back-button.webp" alt="" class="backButtonImg">
  </div>
</a>
<div class="mainCard">
  <div class="logo">
    <div class="logoRow">
      <img src='img/tree.green.webp' alt='' class="logoImg" />
    </div>
    <div class="logoRow">
      <span class="logoText">elmtree</span>
    </div>
  </div>
  <p class="cardText">
    Pentru a putea continua ca și profesor, trebuie fie să vă conectați la un
    cont deja existent fie să vă inregistrați cu unul nou.
  </p>
  <div class="buttonContainer">
    <a href="/#/teacher/login" style="text-decoration: none;">
      <div class="button" style="float: left;">Conectare</div>
    </a>
    <a href="/#/teacher/register" style="text-decoration: none;">
      <div class="button" style="float: right;">Înregistrare</div>
    </a>
  </div>
</div>

<style>
  :root {
    --main-card-width: 50%;
    --button-container-width: 65%;
  }

  @media screen and (max-width: 768px) {
    :root {
      --main-card-width: 95%;
      --button-container-width: 75%;
    }
  }

  .mainCard {
    width: var(--main-card-width);
    padding: 3.5vh 0;
    background: white;
    margin: auto;
    text-align: center;
    border-radius: 26px;

    display: block;

    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    -webkit-box-shadow: 1px 1px 5px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 1px 5px #ccc; /* Firefox 3.5 - 3.6 */
    box-shadow: 1px 1px 5px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }

  .cardText {
    width: 60%;
    margin: auto;
    display: block;
    font-weight: 700;
    color: var(--green);
  }

  .logo {
    width: 80%;

    margin: auto;
  }

  .logoRow {
    width: 100%;
    height: 7vh;
    position: relative;
  }

  .logoImg {
    height: 7vh;
    margin: auto;
    display: block;
  }

  .logoText {
    display: block;

    color: var(--green);
    font-size: 1.75em;
    font-family: 'Merriweather';

    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .buttonContainer {
    width: var(--button-container-width);
    height: 7vh;
    display: block;
    margin: auto;
    margin-top: 2vh;
  }

  .button {
    width: 40%;
    padding: 2vh 0;
    background: var(--green);
    border: 0;
    border-radius: 300px;
    color: white;
  }

</style>