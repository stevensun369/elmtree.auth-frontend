<script>

  import axios from 'axios'

  let cnp = ''
  let firstName = ''
  let lastName = ''
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
        'http://127.0.0.1:1000/api/parent/login',
        {cnp: cnp, password},
        config
      )
      requestData = data

      localStorage.setItem('userType', 'parent')
      localStorage.setItem('userInfo', JSON.stringify(requestData))
      window.location.replace('http://localhost:3000/parinte')
    } catch (error) {
      requestError = error.response.data.message
      console.log(requestError)
    }
  }

  let buttonDisabled
  $: {
    buttonDisabled = cnp.length > 13 || cnp.length < 13
  }
  
</script>


<a href="#/parent">
  <div class="backButton">
    <img src="img/back-button.webp" alt="" class="backButtonImg">
  </div>
</a>

<div class="logo">
  <img src='img/tree.green.webp' alt='logo' class="logoImg" />
  <span class="logoText">elmtree</span>
</div>

<div class="mainCard">
  <span class="loginInfo">Înregistrare părinte:</span>

  <input 
    type="text" 
    class="input"
    placeholder="CNP" 
    bind:value={cnp} 
  />

  <input 
    type="text" 
    class="input"
    placeholder="Nume" 
    bind:value={lastName} 
  />

  <input 
    type="text" 
    class="input"
    placeholder="Prenume" 
    bind:value={firstName} 
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

  {#if cnp.length > 13}
    <div class="messageContainer" style="margin-top: 2vh">
      <div class="alert alert-danger">
        CNP-ul are prea multe cifre
      </div>
    </div>
  {/if}

  {#if cnp.length < 13 && cnp.length !== 0}
    <div class="messageContainer" style="margin-top: 2vh">
      <div class="alert alert-danger">
        CNP-ul nu are îndeajuns de multe cifre
      </div>
    </div>
  {/if}

    <button class="submitButton" disabled={cnp.length > 13 || cnp.length < 13 } on:click={submit}>Conectare</button>
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

  input[type='text'].input:focus::-webkit-inner-spin-button,
  input[type='text'].input:focus::-webkit-outer-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  .input:active {
    border: 1px solid var(--green);
    outline: none;
  }

  input[type='text'].input:active::-webkit-inner-spin-button,
  input[type='text'].input:active::-webkit-outer-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  input[type='text'].input::-webkit-inner-spin-button,
  input[type='text'].input::-webkit-outer-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  input[type='text'].input {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textField;
  }

  input[type='text'].input:active {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textField;
  }

  input[type='text'].input:focus {
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