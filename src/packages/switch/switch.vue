<template>
  <div class="meta-switch" @click="handleClick">
    <input id="switch" type="checkbox" />
    <label for="switch" @click="handleClick"></label>
  </div>
</template>

<script>
export default {
  name: "meta-switch",
};
</script>

<style scoped>
.meta-switch {
  display: block;
  cursor: pointer;
  height: 15px;
  width: 35px;
}
.meta-switch input {
  display: none;
}

label {
  display: block;
  background-color: #ff2727;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 25px;
  border: 2px solid transparent;
}

label:before {
  content: "";
  display: block;
  border-radius: 25px;
  height: 100%;
  width: 15px;
  background-color: #fff;
  opacity: 1;
  transition: border-color 0.3s, background-color 0.3s;
}

label:after {
  position: relative;
  top: -15px;
  left: 20px;
  content: "";
  display: block;
  border-radius: 25px;
  height: 100%;
  width: 15px;
  background-color: white;
  opacity: 0;
  transition: border-color 0.3s, background-color 0.3s;
}

/*选中后，选中样式显示*/
#switch:checked ~ label:after {
  opacity: 1;
}

/*选中后，未选中样式消失*/
#switch:checked ~ label:before {
  opacity: 0;
}

/*选中后label的背景色改变*/
#switch:checked ~ label {
  background-color: #53d879;
}
</style>