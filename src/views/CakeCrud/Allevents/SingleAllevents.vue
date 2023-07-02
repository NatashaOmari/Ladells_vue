<template>
    <div>
        <!-- ===== content starts  ===== -->
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
                        <!-- Blog page -->
                        <div id="blog-container" class="col-md-8">
                           <h2>{{ allevents.name }}</h2>
                           <!-- Post Info -->
                           
                           <!-- post-info -->
                           <div class="blog-single post-main">
                              <!-- Image -->
                              <img class="img-responsive" src="/src/assets/img/blog/blogprev2pic.jpg"  alt="">						 	
                              <!-- Post Content -->
                              <p>{{ allevents.recipe }}</p>
                              
                             
                           </div>
                           <!-- /blog-single -->	
                           <!-- Comments Form -->
                           
                           <!-- Posted Comments -->
                           
                        </div>
                        <!-- /blog-container col-md-8 -->
                        <!-- Sidebar Column -->
                        <div class="sidebar col-md-4">
                           <!-- Blog Search -->
                           
                           <!-- /well -->
                          
                           <!-- /well -->
                           <!-- About us Widget -->
                           <div class="well">
                              <h5 class="sidebar-header">About Us</h5>
                              <p>At Ladells, we believe that baking and sharing delicious cakes can bring joy to every occasion. Whether you're a seasoned baker or a passionate cake lover, our platform is designed to inspire and connect cake enthusiasts from all walks of life. With a vast collection of mouthwatering recipes, insightful baking tips, and a vibrant community of fellow cake lovers, Ladells is your go-to hub for all things cake-related. Join us on this delightful journey as we celebrate the art of baking and create unforgettable memories, one slice of cake at a time. Let's indulge in the sweet world of cakes together at Ladells!</p>
                              <!-- Social Media icons -->
                              <div class="social-media ">
                                 <a href="#" title=""><i class="fab fa-twitter"></i></a>
                                 <a href="#" title=""><i class="fab fa-facebook"></i></a>
                                 <a href="#" title=""><i class="fab fa-google-plus"></i></a>
                                 <a href="#" title=""><i class="fab fa-instagram"></i></a>
                              </div>
                           </div>
                           <!-- /well -->
                           <!-- Blog Categories -->
                           <div class="well">
                              <h5 class="sidebar-header">Categories</h5>
                              <div class="row">
                                 <ul class="custom categories">
                                    <li><a href="#">Weddings</a>
                                    </li>
                                    <li><a href="#">Graduations</a>
                                    </li>
                                    <li><a href="#">Birthdays</a>
                                    </li>
                                    <li><a href="#">All Events</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <!-- /well -->
                           
                        </div>
                        <!-- /sidebar -->
                     </div>
                     <!-- /inside-wrapper-->
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
         <!-- /content -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() { 
        return {
            allevents: {
                name: "",
                image: "",
                recipe: ""
            },
        };
        
    },
    created() {
        this.getallevents();
    },
    methods: {
        async getallevents() {
            let id = this.$route.params.id;
            await axios.get(`allevents/${id}`).then((res) => {
                this.allevents = res.data;
                console.log(res.data)
            });
        },
        getImageUrl (filename) {
         if(filename) {
            return `/uploads/allevents/${filename}`;
         } else {
            return 'no image'
         }
        }
    }
}
</script>
<style>
    
</style>