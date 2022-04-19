<template>
  <div class="meta-switch">
    <input :class="classes" type="checkbox" readonly/>
  </div>
</template>

<script>
export default {
  name: "meta-switch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes(){
      return{
        ["is-disabled"]: this.disabled
      }
    }
  },
};
</script>

<style scoped>
.is-disabled{
  opacity: 0.3;
  cursor:not-allowed;
}
.meta-switch {
  height: 25px;
  width: 45px;
  margin-left: 10px;
}

.meta-switch input {
  position: relative;
  cursor: pointer;
  top: 2px;
  width: 45px;
  height: 22px;
  border-radius: 20px;
  border: 1px solid transparent;
  background-color: rgb(183, 183, 183);
  -webkit-appearance: none;
  transition: all 0.4s;
}

.meta-switch input:checked {
  background-color: rgb(2, 176, 245);
}

.meta-switch input::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: white;
  transition: all 0.4s;
}

.meta-switch input:checked::after {
  left: 23px;
  background-color: white;
}
</style>