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
                        <h1>Tasty Treats</h1>
                        
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
                               <img class="img-responsive img-rounded center-block" src="https://i.pinimg.com/236x/92/5b/fd/925bfda55dd5c9580376562cb3884a65.jpg" alt="">
                            </div>
                            <!-- /col-md-->
                            <div class="col-md-7 res-margin">
                               <h2>Quality cakes and pastries</h2>
                               <p><strong>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie.</strong></p>
                               <p> In aliquet magna nec lobortis maximus.  Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules, Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.                        </p>
                               <!-- list-->
                               <ul class="custom pl-0">
                                  <li>Ipuset phas ellus ac sodales Lorem ipsum dolor</li>
                                  <li>Curabitur blandit pretium interdum. Aliquam sit amet elementum odio, vel ultrices dui. Pellentesque ac odio vitae felis suscipit </li>
                                  <li>Ipuset phas ellus ac sodales Lorem ipsum dolor</li>
                               </ul>
                            </div>
                            <!-- /col-md-->
                         </div>
                        
                        <!-- Gallery -->
                    <div class="cake-cont">
                     <h2>Pick a Taste!</h2>
                     
                       <div class="row">
                        <div class="cake-click" v-if="alleventss.length>0">
            <AlleventsCardComponent :alleventss="alleventss" @delete-allevents="deleteAllevents"></AlleventsCardComponent>
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
import AlleventsCardComponent from '../../components/ladells/AlleventsCardComponent.vue';
import axios from 'axios'
export default {
    components: {AlleventsCardComponent},
    data(){
        return {
            alleventss:[]
        };
    },
    created () {
        this.getAlleventss();
    },
    methods: {
        getAlleventss(){
            axios.get('http://127.0.0.1:8000/api/allevents').then(res=>{
                this.alleventss=res.data;
                console.log(res.data);
            })
        },
        
       
    }
}
</script>
<style>
    
</style>