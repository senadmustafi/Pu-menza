<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">FIPU Menza</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/" class="nav-link" id="sene"
                >Početna</router-link
              >
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/register" class="nav-link"
                >Registracija</router-link
              >
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <router-link to="/main" class="nav-link">Početna</router-link>
            </li>
            <li v-if="store.isAdmin" class="nav-item">
              <router-link to="/admin" class="nav-link"
                >Admin-Panel</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/karta" class="nav-link"
                >Ostale Menze</router-link
              >
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <a
                href="https://www.isvu.hr/studomat/hr/student/razinapravaprehrane"
                class="nav-link"
                >Stanje Iksice</a
              >
            </li>

            <li v-if="store.currentUser" class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout()">Odjava</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="text-center text-white fixed-bottom">
      <!-- Grid container 

 
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.1);">
    © 2022 Copyright:
    <a class="text-white" href="#">FIPU MENZA</a>
  </div>
 -->
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #fff !important;
  opacity: 0.85;

  a {
    font-weight: bold;
    color: #2c3e50;
    opacity: 1 !important;

    &.router-link-exact-active {
      color: #d4201a;
      opacity: 1 !important;
    }
  }
}
</style>

<script>
import store from "@/store";
import { auth, getDoc, db, doc, onAuthStateChanged } from "@/firebase";
import router from "@/router";


function loadAdmins() {
  const docRef = doc(db, "admins", "admins");
  getDoc(docRef).then((Res) => {
  store.adminUsers=Res.data().admins;
  });
}
loadAdmins();

onAuthStateChanged(auth, function (user) {
  if (user) {
    store.currentUser = user.email;
    if (store.adminUsers.includes(user.email)) {
      store.isAdmin=true;
    }
    if (router.name !== "Main") {
      router.push({ name: "Main" });
    }
  } else {
    console.log("**NO Usr");
    store.currentUser = null;
    if (router.name !== "Home") {
      router.push({ name: "Home" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>

