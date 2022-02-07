<script>

  import axios from 'axios'

  import getEnv from '../env' 
  const [apiURL, teacherURL, parentURL, studentURL] = getEnv(production)

  let email = ''
  let password = ''

  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  } 

  let requestData
  let requestError

  async function submit () {
    try {
      const {data} = await axios.post(
        `${apiURL}/api/teacher/login`,
        {email, password},
        config
      )
      requestData = data

      localStorage.setItem('userType', 'teacher')
      localStorage.setItem('userInfo', JSON.stringify(requestData))
      window.location.replace(teacherURL)
    } catch (error) {
      requestError = error.response.data.message
      console.log(requestError)
    }
  }  
</script>

<a href="/#/teacher">
  <div class="backButton">
    <img src="img/back-button.webp" alt="" class="backButtonImg">
  </div>
</a>

<div class="logo">
  <img src='img/tree.green.webp' alt='logo' class="logoImg" />
  <span class="logoText">elmtree</span>
</div>

<div class="mainCard">
  <form on:submit|preventDefault={submit}>
    <span class="loginInfo">Conectare profesor:</span>
    <input 
      type="email" 
      class="input"
      placeholder="Email" 
      bind:value={email} 
    />

    <input 
      type="password" 
      class="input"
      placeholder="Parola" 
      bind:value={password} 
    />

    {#if requestError}
      <div class="messageContainer" style="margin-top: 2vh">
        <div class="alert alert-danger">
          {requestError}
        </div>
      </div>
    {/if}

    <button class="submitButton">Conectare</button>
  </form>
  </div>

<style>
  :root {
    --card-width: 40vw;
    --logo-img-height: 7vh;
    --submit-button-width: 14vw;
  }

  @media only screen and (max-width: 600px) {
    :root {
      --card-width: 90vw;
      --logo-img-height: 5vh;
      --submit-button-width: 40vw;
    }
  }
  .logo {
    width: 100%;
    padding: 2vh 0;
    margin-top: 15vh;
  }

  .logoImg {
    height: var(--logo-img-height);
    display: block;
    margin: auto;
  }

  .logoText {
    padding: 2vh 0;
    margin: auto;
    display: block;

    font-family: 'Merriweather';
    font-size: 2em;
    color: var(--green);

    text-align: center;
  }

  .messageContainer {
    width: calc(calc(95 * var(--card-width)) / 100);
    display: block;
    margin: auto;
    box-sizing: border-box;
    padding: auto;
  }

  .mainCard {
    width: var(--card-width);
    /* background: white;
    border: 1px solid #dbdbdb; */

    margin: auto;

    /*
    -webkit-box-shadow: 1px 1px 5px #ccc; 
    -moz-box-shadow: 1px 1px 5px #ccc;
    box-shadow: 1px 1px 5px #ccc; 
    */

    border-radius: 26px;
    font-family: 'Montserrat';

    padding: 2vh 0;
  }

  .input {
    width: 95%;
    height: 7vh;
    background: lightgray;
    border: 0;
    border-radius: 0;

    display: block;
    margin: auto;

    box-sizing: border-box;
    padding-left: 2vh;
    /* margin-bottom: 1px; */

    color: var(--green);

    border: 1px solid #fafafa;
  }

  .input::placeholder {
    color: var(--green);
  }

  .input:focus {
    border: 1px solid var(--green);
    outline: none;
  }

  input[type='email'].input:focus::-webkit-inner-spin-button,
  input[type='email'].input:focus::-webkit-outer-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  .input:active {
    outline: none;
  }

  input[type='email'].input:active::-webkit-inner-spin-button,
  input[type='email'].input:active::-webkit-outer-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  input[type='email'].input::-webkit-inner-spin-button,
  input[type='email'].input::-webkit-outer-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  input[type='email'].input {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textField;
  }

  input[type='email'].input:active {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textField;
  }

  input[type='email'].input:focus {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textField;
  }

  .submitButton {
    width: var(--submit-button-width);
    height: 7vh;
    background: var(--green);
    color: white;
    display: block;
    margin: auto;
    margin-top: 7vh;
    border: 0;
  }

  .submitButton:disabled {
    opacity: 0.75;
  }

  .alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .alert-danger {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    font-family: 'Montserrat';
  }

</style>