<template>
  <div class="mes">
    <div
      class="square square-lg w-75"
      style="
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        margin: auto;
        margin-top: 50px;
        height: 670px;
      "
    >
      <router-link to="/glavnimeni" class="prvasl"
        ><img src="~@/assets/hrana_4.png" /></router-link
      ><br />
      <h4><span class="prvasl">GLAVNI MENI</span></h4>
      <router-link to="/vegemeni" class="drugasl"
        ><img src="~@/assets/hrana_1.png" /></router-link
      ><br />
      <h4><span class="drugasl">VEGE MENI</span></h4>
      <router-link to="/fastfoodmeni" class="trecasl"
        ><img src="~@/assets/hrana_7.png" /></router-link
      ><br />
      <h4><span class="trecasl">FASTFOOD MENI</span></h4>
    </div>
  </div>
</template>

<style >
.prvasl {
  position: relative;
  left: -500px;
  top: 205px;
}

.trecasl {
  position: relative;
  left: 500px;
  top: -200px;
}
@media only screen and (max-width: 1200px) {
  .prvasl,
  .trecasl {
    position: static;
  }
}
</style>