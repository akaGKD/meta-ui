<template>
  <button
    class="meta-button"
    :class="[typeClass, sizeClass, { 'is-round': round,'is-plain': plain }]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "metaButton",
  props: {
    type: {
      type: String,
      default: "normal",
      validator(value) {
        return value === "primary" || value === "normal" || value === "success";
      },
    },
    size: {
      type: String,
      default: "medium",
    },
    plain:{
      type:Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClass() {
      return {
        [`meta-button-${this.type}`]: this.type,
      };
    },
    sizeClass() {
      return {
        [`meta-button-size-${this.size}`]: this.size,
      };
    },
  },
};
</script>

<style scoped>
.meta-button {
  padding: 10px 20px;
  border-radius: 5px;
  margin: 5px 5px;
}
.meta-button.is-round {
  border-radius: 20px;
}

.meta-button-normal {
  background-color: #fffef9;
}
.meta-button-primary {
  background-color: #6596e4;
}
.meta-button-success {
  background-color: #53d879;
}

.meta-button-size-large {
  padding: 15px 25px;
}
.meta-button-size-medium {
  padding: 10px 20px;
}
.meta-button-size-small {
  padding: 5px 15px;
}
</style>