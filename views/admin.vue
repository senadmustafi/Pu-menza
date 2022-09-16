<template >
<div>
    <h1 class="naslov">ADMIN PANEL</h1>
 <div class="formaa">
  <form>
    <label >Dorucak</label>
    <input type="text" id="dorucak" name="dorucak" v-model="dorucak" placeholder="Dorucak..">

    <label >Rucak</label>
    <input type="text" id="rucak" name="rucak" v-model="rucak" placeholder="Rucak..">
    <label >Dasert</label>
    <input type="text" id="desert" name="desert"  v-model="desert" placeholder="Desert..">

    <label for="dani">Dan</label>
    <select id="dani" name="dani" v-model="dani">
      <option value="ponedeljak">Pondeljak</option>
      <option value="utorak">Utorak</option>
      <option value="sreda">Sreda</option>
      <option value="cetvrtak">Cetvrtak</option>
      <option value="petak">Petak</option>
      <option value="subota">Subota</option>
    </select>
     <label for="dani">Meni</label>
    <select id="meni" name="menu" v-model="meni">
      <option value="glavni">GLAVNI MENI</option>
      <option value="vege">VEGE MENI</option>
      <option value="fastfood">FASTFOOD MENI</option>
    </select>
  
    <input type="button"  value="Submit" @click="izmena()">
  </form>
</div>
</div>
</template>

<style>

.naslov{
    position: relative;
    top: 52px;
    font-family:'Gill Sans MT';
    color: #443f3f;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(233, 232, 232);
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=button] {
  width: 100%;
  background-color: #ff5555;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=button]:hover {
  background-color: #fd1818;
}

.formaa {
margin-left: 355px;
width: 60%;
margin-top: 100px;
  border-radius: 5px;
  background-color: rgb(242, 242, 242,0.9);
  padding: 20px;
}
    @media only screen and (max-width: 1200px) {
    .formaa{
        margin-top: 50px;
      margin-left: 100px;
  

    }
    }
</style>


<script>
import {db, setDoc,doc } from "@/firebase";
export default{
     name:'adminpanel',
data() {
      return{
        dorucak:"",
        rucak:"",
        desert:"",
        dani:"",
        meni:"",
      }
  },
  methods:{
      izmena(){
         setDoc(doc(db, this.dani ,this.meni), {
        dorucak: this.dorucak,
        rucak: this.rucak,
        desert: this.desert,
        }).then((result)=>{
        this.$router.replace({name: 'Main'});
        console.log(result);
      })
      }
  },
}

</script>
