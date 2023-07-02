<template>
    <div>
        <!-- ===== Sidebar starts ===== -->
        <div id="sidebar" class="split col-md-2">
            <div class="affix-sidebar col-md-12">
               <div class="sidebar-nav">
                  <div class="navbar navbar-default" role="navigation">
                     <div class="navbar-header">
                        <!-- collapse button -->
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
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
                          <li> <router-link to="/">Home</router-link> </li>
                          <li> <router-link to="/birthday">Birthdays</router-link></li>
                          <li> <router-link to="/wedding">Weddings</router-link></li>
                          <li> <router-link to="/graduation">Graduation</router-link></li>
                          <li> <router-link to="/allevents">All Events</router-link></li>
                          <li> <router-link to="/addcake" v-if="user">Add Cake</router-link></li>
                          <li> <router-link to="/register" v-if="!user">Register</router-link></li>
                          <li> <router-link to="/login" v-if="!user">Login</router-link></li>
                          <li> <router-link :to="'/profile/' + user.id" v-if="user" >Hi, <span>{{ user.name }}</span></router-link></li>
                          <li> <router-link to="" v-if="user" @click="handleLogout()">Logout</router-link></li>
                           
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
import axios from 'axios';
export default {
  props: ["user"],
  data() {
    return {
      user: null
    }
  },
  async created() {
    const response = await axios.get('user');

    this.user = response.data
    
  },
  methods: {
    async handleLogout() {
     if (confirm('Are you sure to Logout?')) {
       localStorage.removeItem('token');
      }
     const response = await axios.post('logout');
     console.log(response)
            this.$router.push('/');
    }
    
  },
  
}
</script>
<style>
    
</style>