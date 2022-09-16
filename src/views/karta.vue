<template >
   <div class="tabela" >
 <table id="customers">
  <tr>
    <th>Menza</th>
    <th>Adresa</th>
    <th>Grad</th>
  </tr>
  <tr>
    <td><a href="http://www.sczg.unizg.hr/prehrana/restorani/sd-s-radic/">Restoran u Studentskom domu  "Stjepan Radić"</a></td>
    <td>Savska cesta 25, 10000, Zagreb, Hrvatska</td>
    <td>Zagreb</td>
  </tr>

  <tr>
    <td><a href="http://www.sczg.unizg.hr/prehrana/restorani/savska/">Restoran Savska</a></td>
    <td>Savska cesta 25, 10000, Zagreb, Hrvatska</td>
    <td>Zagreb</td>
  </tr>

  <tr>
    <td><a href="http://www.sczg.unizg.hr/prehrana/restorani/sd-cvjetno-naselje/">Restoran u Studentskom domu "Cvjetno naselje"</a></td>
    <td>Savska cesta 27, 10000, Zagreb, Hrvatska</td>
    <td>Zagreb</td>
  </tr>

    <tr>
    <td><a href="https://app.scri.hr/dnevnimeni/41">Restoran u Index</a></td>
    <td>Krešimirova ul. 18, 51000, Rijeka, Hrvatska</td>
    <td>Rijeka</td>

        <tr>
    <td><a href="https://app.scri.hr/dnevnimeni/42">Restoran u Kampus</a></td>
    <td>51000, Rijeka, Hrvatska</td>
    <td>Rijeka</td>

  </tr>
        <tr>
    <td><a href="http://www.studentski-restoran.hr/">Studentski Restoran u Varaždinu</a></td>
    <td>Ul. Julija Merlića 9, 42000, Varaždin, Hrvatska</td>
    <td>Varaždin</td>

  </tr>

          <tr>
    <td><a href="http://www.studentski-restoran.hr/">Restoran Istarska Osijek</a></td>
    <td>Ul. Istarska 5 Osijek,</td>
    <td>Osijek</td>

  </tr>

          <tr>
    <td><a href="https://www.scst.unist.hr/prehrana/restorani-i-kantine">Restoran Kampus Split</a></td>
    <td>Cvite Fiskovića 3, 21000, Split, Croatia</td>
    <td>Split</td>

  </tr>


</table>
   
       <footer class="text-center text-white fixed-bottom">
 
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.1);">
    © 2022 Copyright:
    <a class="text-white" href="#">FIPU MENZA</a>
  </div>

</footer>
   </div>



</template>

<style >





.tabela{

  margin: auto;
  width: 65%;
  margin-top:150px;
  margin-bottom: 80px;
}

#customers {

  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr{background-color: rgba(255, 255, 255, 0.8);
font-weight:bold;}

#customers tr:hover {background-color: rgb(247, 247, 247, 0.9 );}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #fd5454;
  color: white;
  
}
</style>