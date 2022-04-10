<template>
  <button :class="typeClass"><slot></slot></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
      validator(value) {
        return value === "primary" || value === "normal" || value === "success";
      },
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    typeClass() {
      return {
        [`meta-button-${this.type}`]: this.type,
      };
    },
    // sizeClass() {
    //   return {
    //     [`meta-button-size-${this.size}`]: this.size,
    //   };
    // },
  },
};
</script>

<style>
.meta-button-normal {
  padding: 10px 20px;
  border: 1;
  border-radius: 12px;
  background-color: #fffef9;
}
.meta-button-primary {
  padding: 10px 20px;
  border: 1;
  border-radius: 12px;
  background-color: #2a5caa;
}
.meta-button-success {
  padding: 10px 20px;
  border: 1;
  border-radius: 12px;
  background-color: #1d953f;
}
</style>