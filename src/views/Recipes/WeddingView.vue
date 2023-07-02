<template>
    <div>
        <div id="content" class="col-md-10 split">
            <!--content-wrapper  -->
            <div class="content-wrapper">
               <!--divider-top  -->
               <div class="divider-top">
                  <!--header-info  -->
                  <div class="header-info col-md-12">
                     <!--inside-wrapper  -->
                     <div class="inside-wrapper container">
                        <!-- Heading -->
                        <h1>Wedding Glamour</h1>
                        
                     </div>
                     <!--/inside-wrapper  -->
                  </div>
                  <!--/header-info  -->
                  <!-- image gradient overlay-->
                  <div class="gradient-overlay"></div>
               </div>
               <!-- /divider-top -->
               <div class="content-box container">
                  <!-- ===== section starts  ===== -->
                  <section class="inside-page">
                     <div class="inside-wrapper container">
                        <div class="row">
                            <div class="col-md-5">
                               <!-- image -->
                               <img class="img-responsive img-rounded center-block" src="https://i.pinimg.com/236x/07/ed/6b/07ed6b96febf5cd5faf9efe3b9c9f2c4.jpg" alt="">
                            </div>
                            <!-- /col-md-->
                            <div class="col-md-7 res-margin">
                               <h2>Festive Flavors</h2>
                               <p>Welcome to a tantalizing journey through our enchanting world of wedding cake recipes. Here, we weave together passion and confectionery artistry to present you with an exquisite collection of matrimonial masterpieces. From elegant designs to delectable flavors that dance on the palate, our wedding cake recipes are crafted to symbolize love, joy, and eternal bliss. So join us as we embark on a delightful exploration, where each recipe unveils a sweet union of culinary perfection and cherished moments.</p>
                               
                               <!-- list-->
                               
                            </div>
                            <!-- /col-md-->
                         </div>
                        
                        <!-- Gallery -->
                    <div class="cake-cont">
                     <h2>Pick a Taste!</h2>
                     
                       <div class="row">
                        <div class="row">
                        
                        <div class="cake-click" v-if="weddings.length>0">
         <WeddingCardComponent :weddings="weddings" @delete-wedding="deleteWedding"></WeddingCardComponent>
     </div>
     <div v-else>
         <h1 class="text-danger">Cakes Loading...</h1>
     </div>
                    
                    
                    </div>
                       </div>
                    </div>
                        <!-- /gallery-isotope-->
                     </div>
                     <!-- /inside-wrapper -->
                  </section>
                  <!-- footer -->
                  <footer class="footer">
                     <!-- image gradient overlay-->
                     <div class="gradient-overlay top-to-bottom"></div>
                     <div class="inside-wrapper container">
                        <div class="col-md-3 col-md-offset-3">
                           <div class="brand-footer">
                              <a href="index.html">
                              <img src="img/logo.png" alt="" class="img-responsive center-block" >
                              </a>
                           </div>
                        </div>
                        <div class="col-md-4 margin-footer text-center-sm">
                           <!-- Logo -->
                           <p><i class="fas fa-map-marker-alt margin-icon"></i>Nairobi, Kenya</p>
                           <p><i class="fas fa-phone margin-icon"></i>+254743116922</p>
                           
                           <!--Social icons -->
                           <div class="social-media ">
                              <a href="#" title=""><i class="fas fa-envelope"></i></a>
                              <a href="#" title=""><i class="fab fa-twitter"></i></a>
                              <a href="#" title=""><i class="fab fa-facebook"></i></a>
                              <a href="#" title=""><i class="fab fa-instagram"></i></a>
                           </div>
                           <!-- /brand -->
                        </div>
                        
                        <!--/ footer-->
                     </div>
                     <!-- / inside-wrapper -->
                     <!-- Go To Top Link -->
                     <div class="page-scroll">
                        <a href="#top" class="back-to-top"><i class="fa fa-angle-up"></i></a>
                     </div>
                     <!--/page-scroll-->
                  </footer>
                  <!-- / footer-->
               </div>
               <!-- / content-box -->
            </div>
            <!-- /content-wrapper -->
         </div>
    </div>
</template>
<script>
import WeddingCardComponent from '../../components/ladells/WeddingCardComponent.vue';
import axios from 'axios'
export default {
    components: {WeddingCardComponent},
    data(){
        return {
            weddings:[]
        };
    },
    created () {
        this.getWeddings();
    },
    methods: {
        getWeddings(){
            axios.get('http://127.0.0.1:8000/api/weddings').then(res=>{
                this.weddings=res.data;
                console.log(res.data);
            })
        },
        
       
    }
}
</script>
<style>
    
</style>