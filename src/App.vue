<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/ladells/HeaderComponent.vue'
import FooterComponent from './components/ladells/FooterComponent.vue'
export default {

  components:{HeaderComponent},
}
</script>

<template>
        <div>
          <header-component></header-component>
          <RouterView />
         <!-- <footer-component></footer-component> -->
        </div>
          
          
 


  

</template>


