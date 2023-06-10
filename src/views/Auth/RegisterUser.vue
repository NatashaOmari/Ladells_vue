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
                     <h1>Register</h1>

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
                              <h5>Sign Up/Register</h5>
                              <!-- Form Starts -->
                              <form @submit.prevent="handleSubmit()">
                                 <error v-if="error" :error="error"></error>
                                 <div class="form-group ">
                                    <label>Name</label>
                                    <input type="text" name="name" class="form-control input-field" v-model="name">
                                    <label>Email</label>
                                    <input type="email" name="email" class="form-control input-field" v-model="email">
                                    <label>Password</label>
                                    <input type="password" name="password" class="form-control input-field" v-model="password">
                                    <label>Confirm password</label>
                                    <input type="password" name="password_confirmation" class="form-control input-field"
                                    v-model="password_confirmation">

                                 </div>

                                 <!--  Button -->
                                 <button class="btn btn-success" type="submit">Register</button>
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
                              <img src="img/logo.png" alt="" class="img-responsive center-block">
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
//import { useAuthStore } from '../../stores/auth';

export default {
   setup() {
      // let userStore = useAuthStore();
      // return {
      //    userStore
      // };

   },
   data() {
      return {
         user: {
            name: "",
            email: "",
            password: null,
            password_confirmation: null,
            created_at: null,
            updated_at: null

         }
      }
   },
   computed: {
      // inputType () {
      //    return this.showPassword ? 'text' : 'password';
      // },
      // toggleIconClass () {
      //    return this.showPassword ? 'fa fa-eye-slash' : 'fa fa-eye';
      // },
   },
   methods: {
      // register() {
      //    this.userStore.user = this.user;
      //    this.userStore.registerUser();
      //    this.$router.replace('/');
      // }
      async handleSubmit () {
         try {
            const response = await axios.post('register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
            });
            console.log(response)
            this.$router.push('/');
      } catch (e) {
         this.error = 'Enter valid details'
      }
   },
   // togglePasswordVisibility() {
   //    this.showPassword = !this.showPassword;
   // },
},

}
</script>
<style></style>