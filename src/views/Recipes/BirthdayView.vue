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
                        <h1>Birthdays</h1>
                        
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
                               <img class="img-responsive img-rounded center-block" src="https://i.pinimg.com/236x/39/80/e9/3980e9d30c3c94352d7268b80a0ea4e9.jpg" alt="">
                            </div>
                            <!-- /col-md-->
                            <div class="col-md-7 res-margin">
                               <h2>Blissful Bites</h2>
                               <p>Welcome to a world of birthday bliss where sugar and wishes collide! In our tantalizing birthday cake recipes section, we've whisked up a symphony of flavors and creativity to bring you the ultimate collection of celebratory confections. From whimsical wonders to classic favorites with a twist, each recipe is a delightful invitation to make every birthday a mouthwatering extravaganza. So grab your apron, ignite the candles, and let's dive into a world where cakes are the sweet centerpiece of joyous memories and delicious surprises.</p>
                               
                            </div>
                            <!-- /col-md-->
                         </div>
                        
                        <!-- Gallery -->
                    <div class="cake-cont">
                     <h2>Pick a Taste!</h2>
                     <div class="row">
                        
                           <div class="cake-click" v-if="birthdays.length>0">
            <CakeCardComponent :birthdays="birthdays" @delete-birthday="deleteBirthday"></CakeCardComponent>
        </div>
        <div v-else>
            <h1 class="text-danger">Cakes Loading...</h1>
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
import CakeCardComponent from '../../components/ladells/CakeCardComponent.vue';
import axios from 'axios'
export default {
    components: { CakeCardComponent },
    data(){
        return {
            birthdays:[]
        };
    },
    created () {
        this.getBirthdays();
    },
    methods: {
        getBirthdays(){
            axios.get('http://127.0.0.1:8000/api/birthdays').then(res=>{
                this.birthdays=res.data;
                console.log(res.data);
            })
        },
        
       
    }
}
</script>
<style>
    
</style>