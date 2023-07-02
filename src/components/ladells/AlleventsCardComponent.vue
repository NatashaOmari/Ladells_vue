<template>
    <div v-for="allevents in alleventss" :key="allevents.id">
        <div class="col-md-4">
                  <div class=" box-hover">
                     <div class="post-img">
                        <a href="blog-single.html">
                           <!-- Image -->
                           <img class="img-responsive" src="/src/assets/img/blog/blogprev2pic.jpg" alt="">
                           
                        </a>
                     </div>
                     <!-- post info -->
                     <div class="post-review">
                        <h5 class="post-title">
                           <a href=""> <router-link :to="'/singleallevents/' + allevents.id">{{ allevents.name }}</router-link></a>
                        </h5>
                        
                        <p class="post-description" v-if="allevents.recipe.length<50">{{ allevents.recipe }}</p>
                        <p class="post-description" v-else>{{ allevents.recipe.substring(0,50)+"..." }}</p>
                        <!-- button -->
                        
                     </div>
                     <!--/post-review -->
                  </div>
                  <!--/post-slide -->
               </div>
    </div>
</template>
<script>
export default {
    props:['alleventss'],
}
</script>
<style>
    
</style>