<template>
  <button
    v-bind="$attrs"
    class="meta-button"
    @click="handleClick"
    v-on="listeners"
    :class="buttonClass"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "meta-button",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return (
          value === "normal" ||
          value === "primary" ||
          value === "success" ||
          value === "warning" ||
          value === "info" ||
          value === "danger"
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
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
  },
  computed: {
    buttonClass() {
      return {
        [`meta-button-${this.type}`]: this.type,
        [`meta-button-size-${this.size}`]: this.size,
        ["is-round"]: this.round,
        ["is-plain"]: this.plain,
        ["is-disabled"]: this.disabled,
      };
    },
    listeners() {
      const { click, ...listeners } = this.$listeners || {}; // eslint-disable-line no-unused-vars
      return listeners;
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled) return;
      this.$emit("click", e);
    },
  },
};
</script>

<style scoped>
.meta-button {
  padding: 10px 20px;
  border-radius: 4px;
  margin: 5px 5px;
  outline: none;
  text-align: center;
  border: 0;
}
.meta-button.is-round {
  border-radius: 20px;
}

.meta-button.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
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