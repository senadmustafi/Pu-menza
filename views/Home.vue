<template >
  <div>
    <pocetna />
    <div class="sl1"><img src="~@/assets/hrana_1.png" /></div>
    <div class="sl2"><img src="~@/assets/hrana_2.png" /></div>
    <div class="sl3"><img src="~@/assets/hrana_4.png" /></div>
    <p class="texte"><span class="dbr">FIPU</span> MENZA</p>
    <p class="ha2">Povoljno a tako <span class="dbr">dobro....</span></p>
    <div class="butondiv">
      <section class="">
        <div class="container">
          <div
            class="row d-flex justify-content-center align-items-center "
          >
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-light"
                style="
                  border-radius: 1rem;
                  background-color: rgba(255, 255, 255, 0.8);
                "
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Prijava</h3>

                  <div
                    class="form-outline mb-4"
                    style="opacity: 1; !important; "
                  >
                    <input
                      type="email"
                      v-model="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                      style="background-color: rgba(255, 255, 255, 0.5)"
                    />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      v-model="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      style="background-color: rgba(255, 255, 255, 0.5)"
                    />
                    <label class="form-label" for="typePasswordX-2"
                      >Lozinka</label
                    >
                  </div>

                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="button"
                    @click="login()"
                    style="background-color: #d4201a"
                  >
                    Prijavi se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pocetna from "@/components/pocetna.vue";
import { auth, signInWithEmailAndPassword } from "@/firebase";

export default {
  name: "Home",
  components: {
    pocetna,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          this.$router.replace({ name: "Main" });
          console.log(result);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style>
img {
  border-radius: 50%;
  height: 180px;
  width: 180px;
  opacity: 0.96 !important;
}
.sl1 {
  position: relative;
  right: 505px;
  top: 55px;
}

.sl2 {
  position: relative;
  right: 508px;
  top: 138px;
}

.sl3 {
  position: relative;
  right: 445px;
  top: 230px;
}

.texte {
  color: #2c3e50;
  margin-top: -500px;
  margin-left: 550px;
  font-size: 5.5vw;
}
@media only screen and (max-width: 900px) {
  .texte {
    font-size: 8vw;
    margin-left: 0px;
  }
}

@media only screen and (max-width: 200px) {
  .texte {
    font-size: 11vw;
    margin-left: 50px;
    margin-top: -110px;
  }
}
.ha2 {
  font-size: 2.3vw;
  margin-left: 550px;
}
.dbr {
  color: #d4201a;
}
@media only screen and (max-width: 900px) {
  .ha2 {
    font-size: 5.1vw;
    margin-left: 0px;
  }
}

@media only screen and (max-width: 200px) {
  .ha2 {
    font-size: 8.1vw;
    margin-left: 10px;
  }
}
.butondiv {
  margin-left: 550px;
}
@media only screen and (max-width: 900px) {
  .butondiv {
    margin-left: 10px;
  }
}
@media only screen and (max-width: 200px) {
  .butondiv {
    font-size: 4vw;
    margin-left: 10px;
  }
} ;
</style>
