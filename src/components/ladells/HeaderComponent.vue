<template>
    <div>
        <!-- ===== Sidebar starts ===== -->
        <div id="sidebar" class="split col-md-2">
            <div class="affix-sidebar col-md-12">
               <div class="sidebar-nav">
                  <div class="navbar navbar-default" role="navigation">
                     <div class="navbar-header">
                        
                        <!-- Logo -->
                        <div class="brand">
                           <a href="index.html">
                           <img src="/src/assets/img/logo.png" alt="" class="img-responsive center-block" >
                           </a>
                        </div>
                        <!-- /brand -->
                     </div>
                     <!-- /navbar-header  -->
                     <div class="navbar-collapse collapse sidebar-navbar-collapse ">
                        <ul class="nav navbar-nav" id="sidenav01">
                           <router-link to="/"><li><a href="">Home</a></li></router-link>
                           <router-link to="/birthday"><li>Birthdays</li></router-link>
                           <router-link to="/wedding"><li>Weddings</li></router-link>
                           <router-link to="/graduation"><li>Graduation</li></router-link>
                           <router-link to="/allevents"><li>All Events</li></router-link>
                           
                           
                        </ul>
                        <!-- navbar-nav -->
                     </div>
                     <!--/.nav-collapse -->
                  </div>
                  <!--/navbar -->
               </div>
               <!--/sidebar-nav -->
               <div class="navbar-info hidden-sm hidden-xs hidden-md">
                  <p class="small-text"><i class="fas fa-map-marker-alt margin-icon"></i>Nairobi, Kenya</p>
                  <p class="small-text"><i class="fas fa-phone margin-icon"></i>+254743116922</p>
                  
                  <!--Social icons -->
                  <div class="social-media ">
                     <a href="#" title=""><i class="fas fa-envelope"></i></a>
                     <a href="#" title=""><i class="fab fa-twitter"></i></a>
                     <a href="#" title=""><i class="fab fa-facebook"></i></a>
                     <a href="#" title=""><i class="fab fa-instagram"></i></a>
                  </div>
               </div>
               <!-- /navbar-info -->
            </div>
            <!-- /affix-sidebar  -->
         </div>
         <!-- ===== / sidebar ends ===== -->
         
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>