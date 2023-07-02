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
                        <h1>Graduation</h1>
                        
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
                               <img class="img-responsive img-rounded center-block" src="https://i.pinimg.com/236x/ba/55/72/ba5572b23ea982e8d061a7abdf6a2a4b.jpg" alt="">
                            </div>
                            <!-- /col-md-->
                            <div class="col-md-7 res-margin">
                               <h2>Joyful Creations</h2>
                               <p>Get ready to celebrate a milestone achievement with our sensational graduation cake recipes. In this vibrant and flavorful section, we present a symphony of confections that embody the spirit of success and accomplishment. From cap-tossing creations to diploma-inspired delights, our graduation cake recipes are designed to honor the journey of hard work and perseverance. So put on your graduation cap, grab a slice of inspiration, and let's toast to the future with a cake that will make your graduation celebration truly unforgettable.</p>
                               
                            </div>
                            <!-- /col-md-->
                         </div>
                        
                        <!-- Gallery -->
                    <div class="cake-cont">
                     <h2>Pick a Taste!</h2>
                     
                       <div class="row">
                        <div class="cake-click" v-if="graduations.length>0">
            <GraduationCardComponent :graduations="graduations" @delete-graduation="deleteGraduation"></GraduationCardComponent>
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
import GraduationCardComponent from '../../components/ladells/GraduationCardComponent.vue';
import axios from 'axios'
export default {
    components: {GraduationCardComponent},
    data(){
        return {
            graduations:[]
        };
    },
    created () {
        this.getGraduations();
    },
    methods: {
        getGraduations(){
            axios.get('http://127.0.0.1:8000/api/graduations').then(res=>{
                this.graduations=res.data;
                console.log(res.data);
            })
        },
        
       
    }
}
</script>
<style>
    
</style>