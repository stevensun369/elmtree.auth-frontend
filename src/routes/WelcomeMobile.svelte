<div class="mainCard">
  <div class="logo">
    <div class="logoRow">
      <img
        src='/img/tree.green.webp'
        alt=''
        class="logoImg"
      />
    </div>
    <div class="logoRow">
      <span class="logoText">elmtree</span>
    </div>
  </div>

  <div class="text">
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quam distinctio corporis temporibus minima fuga
      dignissimos. Alegeți funcția pe care o aveți:
    </span>
  </div>
</div>
<footer class="footer">
  <div class="buttonContainer">
    <a href='#/teacher'>
      <div class="button">
        <span>Profesor</span>
      </div>
    </a>
  </div>

  <div class="buttonContainer">
    <a href="#/parent">
      <div class="button">
        <span>Părinte</span>
      </div>
    </a>
  </div>

  <div class="buttonContainer">
    <a href="#/student">
      <div class="button">
        <span>Elev</span>
      </div>
    </a>
  </div>
</footer>

<style>
  .mainCard {
  width: 90vw;
  background: white;
  border: 1px solid #dbdbdb;

  margin: auto;
  margin-top: 25vh;

  -webkit-box-shadow: 1px 1px 5px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 5px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 5px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */

  border-radius: 26px;
}

.logo {
  width: 80%;

  margin: auto;
  margin-top: 3vh;
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

.text {
  width: 80%;
  /* background: red; */
  text-align: center;
  margin: auto;
  margin-top: 4vh;
  margin-bottom: 5vh;
}

.footer {
  width: 100%;
  height: 12vh;

  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.buttonContainer {
  width: 33.33%;
  height: 100%;
  position: relative;
}

.button {
  height: 60%;
  width: 90%;
  margin-left: 5%;
  background: var(--green);

  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  border-radius: 300px;
}

.button span {
  color: #fafafa;
  width: 100%;

  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  text-align: center;
}

</style>