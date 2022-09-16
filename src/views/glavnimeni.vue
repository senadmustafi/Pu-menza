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
        <h4 class="lista1">{{ MenuPodaci.dorucak }}</h4>
        <h5 class="lista">Ručak:</h5>
        <h4 class="lista1">{{ MenuPodaci.rucak }}</h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1">{{ MenuPodaci.desert }}</h4>
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
        <h4 class="lista1">{{ MenuPodaci1.dorucak }}</h4>
        <h5 class="lista">Ručak:</h5>
        <h4 class="lista1">{{ MenuPodaci1.rucak }}</h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1">{{ MenuPodaci1.desert }}</h4>
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
        <h4 class="lista1">{{ MenuPodaci2.dorucak }}</h4>
        <h5 class="lista">Ručak:</h5>
        <h4 class="lista1">{{ MenuPodaci2.rucak }}</h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1">{{ MenuPodaci2.desert }}</h4>
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
        <h4 class="lista1">{{ MenuPodaci3.dorucak }}</h4>
        <h5 class="lista">Ručak:</h5>
        <h4 class="lista1">{{ MenuPodaci3.rucak }}</h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1">{{ MenuPodaci3.desert }}</h4>
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
        <h4 class="lista1">{{ MenuPodaci4.dorucak }}</h4>
        <h5 class="lista">Ručak:</h5>
        <h4 class="lista1">{{ MenuPodaci4.rucak }}</h4>
        <h5 class="lista">Desert:</h5>
        <h4 class="lista1">{{ MenuPodaci4.desert }}</h4>
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
import { addDoc, collection, db, getDocs, doc, getDoc } from "@/firebase";
import store from "@/store";

export default {
  name: "glavnimeni",

  data() {
    return {
      komentar: "",
      email: store.currentUser,
      MenuPodaci: "",
      MenuPodaci1: "",
      MenuPodaci2: "",
      MenuPodaci3: "",
      MenuPodaci4: "",
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

    loadmenupon() {
      const docRef = doc(db, "ponedeljak", "glavni");
      getDoc(docRef).then((Res) => {
        this.MenuPodaci = Res.data();
        console.log(this.MenuMenuPodaci);
      });
    },
    loadmenuut() {
      const docRef = doc(db, "utorak", "glavni");
      getDoc(docRef).then((Res) => {
        this.MenuPodaci1 = Res.data();
        console.log(this.MenuMenuPodaci1);
      });
    },

    loadmenusre() {
      const docRef = doc(db, "srijeda", "glavni");
      getDoc(docRef).then((Res) => {
        this.MenuPodaci2 = Res.data();
        console.log(this.MenuMenuPodaci2);
      });
    },

    loadmenucetv() {
      const docRef = doc(db, "cetvrtak", "glavni");
      getDoc(docRef).then((Res) => {
        this.MenuPodaci3 = Res.data();
        console.log(this.MenuMenuPodaci3);
      });
    },
    loadmenupet() {
      const docRef = doc(db, "petak", "glavni");
      getDoc(docRef).then((Res) => {
        this.MenuPodaci4 = Res.data();
        console.log(this.MenuMenuPodaci4);
      });
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
    this.loadmenupon();
    this.loadmenuut();
    this.loadmenusre();
    this.loadmenucetv();
    this.loadmenupet();
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

.lista1 {
  position: relative;
  top: 55px;
}

.headdiv {
}
.head {
  color: black;
  position: relative;
  top: 40px;
}

.container {
  background-color: rgba(255, 255, 255, 0.9);
  width: 420px;
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
  width: 380px;
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