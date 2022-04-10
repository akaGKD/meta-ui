<template>
  <button :class="[typeClass,sizeClass]"><slot></slot></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    typeClass() {
      return {
        "meta-button-default": this.type == "" || this.type == "default",
      };
    },
    sizeClass(){
        return {
            "meta-button-size-large": this.type == ""
        }
    }
  },
};
</script>

<style>
</style>