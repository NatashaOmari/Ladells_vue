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
                           <h2>{{ birthday.name }}</h2>
                           <!-- Post Info -->
                           
                           <!-- post-info -->
                           <div class="blog-single post-main">
                              <!-- Image -->
                              <img class="img-responsive" src="img/blog/blogmain1.jpg" alt="">						 	
                              <!-- Post Content -->
                              <p>{{ birthday.recipe }}</p>
                              
                             
                           </div>
                           <!-- /blog-single -->	
                           <!-- Comments Form -->
                           <div class="row">
                              <div class="col-md-8 col-centered">
                                 <div class="media comment-form">
                                    <h5>Leave a Comment:</h5>
                                    <!-- Form Starts -->
                                    <div class="form-group ">
                                       <label>Name<span class="required">*</span></label>
                                       <input type="text" name="name" class="form-control input-field" required="">                    
                                       <label>Email Adress <span class="required">*</span></label>
                                       <input type="email" name="email" class="form-control input-field" required="">           
                                       <label>Comment<span class="required">*</span></label>
                                       <textarea name="comment" id="comment" class="textarea-field form-control" rows="3"  required=""></textarea>
                                    </div>
                                    <!--  Button -->
                                    <button type="submit" id="comment_btn" value="Submit" class="btn btn-primary">Send Comment</button>
                                 </div>
                              </div>
                              <!-- /col-md-7 -->
                           </div>
                           <!-- /row -->
                           <!-- Posted Comments -->
                           <div class="comments-block">
                              <hr>
                              <h3 class="text-center">Comments</h3>
                              <!-- Comment -->
                              <div class="comment media">
                                 <a href="#">
                                 <img class="media-object  img-responsive img-circle" src="img/blog/comment1.jpg" alt="">
                                 </a>
                                 <div class="media-body">
                                    <h6 class="media-heading">  <a href="#">Maria Silva </a>
                                       <small>August 25, 2018 at 9:30 PM</small>
                                    </h6>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                    <!-- Reply Button -->
                                    <a class="btn btn-sm text-right">Reply</a>
                                 </div>
                              </div>
                              <!-- /media -->
                              <!-- Comment -->
                              
                              <!-- /media -->
                           </div>
                           <!-- /comments block -->
                        </div>
                        <!-- /blog-container col-md-8 -->
                        <!-- Sidebar Column -->
                        <div class="sidebar col-md-4">
                           <!-- Blog Search -->
                           <div class="well">
                              <h5 class="sidebar-header">Search</h5>
                              <div class="form-group">
                                 <div class="input-group">
                                    <input type="text" class="form-control">
                                    <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Go!</button>
                                    </span>
                                 </div>
                                 <!-- /input-group -->
                              </div>
                              <!-- /form-group -->
                           </div>
                           <!-- /well -->
                          
                           <!-- /well -->
                           <!-- About us Widget -->
                           <div class="well">
                              <h5 class="sidebar-header">About Us</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium.</p>
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
            birthday: {
                name: "",
                image_path: "",
                recipe: ""
            },
        };
        
    },
    created() {
        this.getBirthday();
    },
    methods: {
        async getBirthday() {
            let id = this.$route.params.id;
            await axios.get(`birthday/${id}`).then((res) => {
                this.birthday = res.data;
                console.log(res.data)
            });
        },
    }
}
</script>
<style>
    
</style>