<template>
  <div>
    <div
      class="square square-lg w-50 cetv"
      style="
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        margin: auto;
        height: 380px;
      "
    >
      <div class="headdiv">
        <h2 class="head">Ponedeljak</h2>
        <h5 class="lista">Doručak:</h5>
        <h4 class="lista1"></h4>
        <h5 class="lista">Ručak:</h5>
         <h4 class="lista1"></h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1"></h4>
      </div>
    </div>
       <div
      class="square square-lg w-50 cetv"
      style="
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        margin: auto;
        height: 380px;
      "
    >
      <div class="headdiv">
        <h2 class="head">Utorak</h2>
        <h5 class="lista">Doručak:</h5>
        <h4 class="lista1"></h4>
        <h5 class="lista">Ručak:</h5>
         <h4 class="lista1"></h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1"></h4>
      </div>
    </div>

    <div
      class="square square-lg w-50 cetv"
      style="
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        margin: auto;
        height: 380px;
      "
    >
      <div class="headdiv">
        <h2 class="head">Srijeda</h2>
        <h5 class="lista">Doručak:</h5>
        <h4 class="lista1"></h4>
        <h5 class="lista">Ručak:</h5>
         <h4 class="lista1"></h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1"></h4>
      </div>
    </div>
    <div
      class="square square-lg w-50 cetv"
      style="
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        margin: auto;
        height: 380px;
      "
    >
      <div class="headdiv">
        <h2 class="head">Četvrtak</h2>
        <h5 class="lista">Doručak:</h5>
        <h4 class="lista1"></h4>
        <h5 class="lista">Ručak:</h5>
         <h4 class="lista1"></h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1"></h4>
      </div>
    </div>
    <div
      class="square square-lg w-50 cetv"
      style="
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        margin: auto;
        height: 380px;
      "
    >
      <div class="headdiv">
        <h2 class="head">Petak</h2>
        <h5 class="lista">Doručak:</h5>
        <h4 class="lista1"></h4>
        <h5 class="lista">Ručak:</h5>
         <h4 class="lista1"></h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1"></h4>
      </div>
    </div>
    <!-- <span v-for="coment in allComents" v-bind:key="coment">{{coment.User}}: {{coment.komentar}}<br></span>-->

    <!--  <form>
        <label for="subject">Komentari</label>
        <textarea
          id="komentar"
          name="komentar"
          v-model="komentar"
          placeholder="Napišite nešto.."
          style="height: 200px" class="text1"
        ></textarea>
        <input type="button" value="Submit" @click="addcom()" />
      </form>-->
    <div class="container justify-content-center mt-5 border-left border-right">
      <div class="d-flex justify-content-center pt-3 pb-2">
        <input
          v-model="komentar"
          type="text"
          name="text"
          placeholder="    + Dodaj Komentar"
          class="form-control addtxt"
        />
      </div>
      <input class="addcoment" type="button" value="Submit" @click="addcom()" />
      <div
        class="d-flex justify-content-center py-2"
        v-for="coment in allComents"
        v-bind:key="coment"
      >
        <div class="second py-2 px-2">
          <span class="text1">{{ coment.komentar }}<br /></span>
          <div class="d-flex justify-content-between py-1 pt-2">
            <div>
              <span class="text3">Korisnik: {{ coment.User }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { addDoc, collection, db, getDocs, } from "@/firebase";
import store from "@/store";

export default {
  name: "glavnimeni",

  data() {
    return {
      komentar: "",
      email: store.currentUser,
      allComents: [],
    };
  },

  methods: {
    loadcomment() {
      getDocs(collection(db, "Komentari")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.allComents.push(doc.data());
        });
      });
      console.log(this.allComents);
    },

    addcom() {
      var Muser = store.currentUser.split("@", 1).join("");
      if (this.komentar.length <= 3) {
        alert("Komentar je prekratak");
      } else {
        const docRef = addDoc(collection(db, "Komentari"), {
          komentar: this.komentar,
          User: Muser,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    },
  },
  created: function () {
    this.loadcomment();
  },
};
</script>



<style scoped>
.utor,
.sred,
.cetv,
.pet,
.sub {
  margin-top: 100px !important;
}

.lista {
  color: #282e30;
  position: relative;
  top: 55px;
  font-weight: bold;
}

.lista1{
  position: relative;
  top: 55px;
}

.head {
  color: black;
  position: relative;
  top: 40px;
}

.container {
  background-color: rgba(255, 255, 255, 0.9);
  width: 482px;
  margin-bottom: 50px;
  border-radius: 8px;
}
.addtxt {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 13px;
  width: 482px;
  background-color: #e5e8ed;
  font-weight: 500;
}

.addcoment {
  width: 450px;
  background-color: #04aa6d;
  color: white;
  border-radius: 4px;
  border-color: transparent;
}

.addcoment:hover {
  background-color: #45a049;
}

.second {
  width: 482px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 10px 10px 5px #aaaaaa;
}
.text1 {
  font-size: 13px;
  font-weight: 500;
  color: #303030;
  font-size: 20px;
}

.text3 {
  font-size: 16px;
  font-weight: 500;
  color: #012758;
  font-size: 15px;
}
</style>