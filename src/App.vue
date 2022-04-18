<template>
  <div id="app" class="app">
    <div class="container">
    <router-link to="/button">button</router-link>
    <router-link to="/switch">switch</router-link>
    </div>
    <router-view></router-view>
  </div>
</template> 

<script>
export default {
 
};
</script>

<style>
*{
  text-decoration: none;
}

.app{
  display: flex;
  flex-direction: row;
}

.container{
  display:flex;
  flex-direction: column;
}
</style>
