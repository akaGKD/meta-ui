<template>
  <div id="app" class="app">
    <div class="container">
    <router-link to="/button">button</router-link>
    <router-link to="/switch">switch</router-link>
    </div>
    <p class="line">

    </p>
    <router-view></router-view>
  </div>
</template> 

<script>
export default {
 
};
</script>

<style>
*{
  margin:0;
  padding:0;
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

.line{
  width: 50px;
  height: 1000px;
  border-right: solid #0b53ab 1px;
}
</style>
