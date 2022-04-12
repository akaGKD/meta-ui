<template>
  <button
    class="meta-button"
    :class="[typebinding, { 'is-round': round, 'is-plain': plain }]"
    @click="popup"
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
        return (
          value === "info" ||
          value === "primary" ||
          value === "normal" ||
          value === "success" ||
          value === "danger" ||
          value === "warning"
        );
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return value === "large" || value === "medium" || value === "small";
      },
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typebinding() {
      return {
        [`meta-button-${this.type}`]: this.type,
        [`meta-button-size-${this.size}`]: this.size,
      };
    },
  },
  methods: {
    popup() {
      if (this.type == "normal") {
        alert("normal button");
      }
    },
  },
};
</script>

<style scoped>
.meta-button {
  padding: 10px 20px;
  border-radius: 5px;
  margin: 5px 5px;
  border: 0;
}
.meta-button.is-round {
  border-radius: 20px;
}

.meta-button-normal {
  background-color: #eae9e9;
}
.meta-button-normal:hover {
  background-color: #e9f5fb;
  color: rgb(135, 188, 205);
}
.meta-button-primary {
  background-color: #409eff;
  color: white;
}
.meta-button-primary:hover {
  background-color: rgb(113, 196, 255);
}
.meta-button-success {
  background-color: #53d879;
  color: white;
}

.meta-button-success:hover {
  background-color: #4dff80;
}

.meta-button-info {
  background-color: #8f8f8f;
  color: white;
}

.meta-button-info:hover {
  background-color: #cecece;
}

.meta-button-danger {
  background-color: #ff2727;
  color: white;
}

.meta-button-danger:hover {
  background-color: #ff8888;
}

.meta-button-warning {
  background-color: #ddda0c;
  color: white;
}

.meta-button-warning:hover {
  background-color: #fcff64;
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