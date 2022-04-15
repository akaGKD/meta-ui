<template>
  <div class="meta-switch" @click="handleClick">
    <input type="checkbox" v-model="curChecked" />
    <span :class="['meta-switch-core', curChecked ? 'on' : 'off']"></span>
  </div>
</template>

<script>
export default {
  name: "meta-switch",
  data(){
      return {
          curChecked:false,
      }
  },
  methods: {
    handleClick() {
      this.curChecked = !this.curChecked;
    },
  },
};
</script>

<style scoped>
.meta-switch input {
  position: absolute;
  width: 0;
  height: 0;
}
.meta-switch{
    display:inline-flex;
    cursor: pointer;
}
.meta-switch-core::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgb(145, 145, 145);
  transition: all.3s;
  cursor: pointer;
}
.meta-switch-core.on::after {
  top: 2px;
  left: 100%;
  margin-left: -34px;
}
.meta-switch-core.off::after {
  top: 2px;
  left: 2px;
}

.meta-switch-core.on {
  transition: background-color 0.3s;
  background-color: red;
}
.meta-switch-core.off {
  transition: background-color 0.3s;
  background-color: green;
}
</style>