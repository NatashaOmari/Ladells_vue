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
                            <h1>Add Allevents Cake</h1>

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
                                        <h5>Add Cake</h5>
                                        <!-- Form Starts -->
                                        <form @submit.prevent="submitForm" enctype="multipart/form-data">
                                            <div class="form-group " >

                                                <label for="allevents_name">Name</label>
                                                <input type="text" name="allevents_name" id="allevents_name" class="form-control input-field"
                                                    v-model="allevents.name">

                                                    <label for="allevents_image">Image</label>
                                                <input type="file" name="allevents_image" id="allevents_image" class="form-control input-field"
                                                @change="handleImageChange" accept="uploads/allevents/*">
                                                <label for="allevents_recipe">Recipe</label>
                                                <textarea name="allevents_recipe" id="allevents_recipe" class="textarea-field form-control" rows="3" v-model="allevents.recipe" ></textarea>


                                            </div>
                                            <!--  Button -->
                                            <button class="btn btn-success" type="submit">Add Cake</button>
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
import axios from 'axios'
export default {

    data() {
        return {
    allevents: {
        name: '',
        image: null,
        recipe: '',
        
      },
        };
    },


    methods: {
        handleImageChange(event) {
            this.allevents.image = event.target.files[0];
        },
        submitForm() {
            const formData = new FormData();
            formData.append('name', this.allevents.name);
                formData.append('image', this.allevents.image);
                formData.append('recipe', this.allevents.recipe);
                
            axios.post('allevents/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res=>{
                console.log(res);
                this.$router.push('/allevents');
            })
        },
    },
};
</script>
<style>
    
</style>