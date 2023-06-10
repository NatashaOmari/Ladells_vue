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
                        <h1>Login</h1>
                        
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
                            <div class="col-md-8 col-centered">
                                 <div class="media comment-form">
                                    <h5>Please Log In</h5>
                                    <!-- Form Starts -->
                                    <form @submit.prevent="handleLogin()">
                                    <div class="form-group ">
                                       <error style="font-size: smaller;" v-if="error" :error="error" />       
                                       <label>Email</label>
                                       <input type="email" name="email" class="form-control input-field" v-model="email">   
                                       <label>Password</label>
                                       <input type="password" name="password" class="form-control input-field" v-model="password">  
                                            
                                       
                                    </div>
                                    <!--  Button -->
                                    <button class="btn btn-success" type="submit">Log in</button>
                                 </form>
                                 </div>
                              </div>
                        </div>
                            
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
import axios from 'axios';
import Error from '../../components/ErrorComponent.vue';
export default {
    components: {
        Error
    },
    data() {
        return {
            email: '',
            password: '',
            error: '',
            //showPassword: false,
        }
    },
    computed: {
      //   inputType() {
      //       return this.showPassword ? 'text' : 'password';
      //   },
      //   toggleIconClass() {
      //       return this.showPassword ? 'fa fa-eye-slash' : 'fa fa-eye';
      //   },
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password,
                });
                console.log(response)

                localStorage.setItem('token', response.data.token);
                this.$router.push('/');
            } catch (e) {
                this.error = 'Invalid username/password'
            }
        },
      //   togglePasswordVisibility() {
      //       this.showPassword = !this.showPassword;
      //   },
    },
};
</script>
<style>
    
</style>