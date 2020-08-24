<template>
  <!-- <div>Switch组件</div> -->
  <button :class="{checked,disabled}" @click="toggle">
    <span></span>
  </button>
</template>

<script>
export default {
  name: "sz-Switch",
  props: {
    checked: {
      type: [Boolean, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        if (typeof this.checked == "number") {
          if (this.checked === 0) {
            this.$emit("input", 1);
          } else {
            this.$emit("input", 0);
          }
        } else {
          this.$emit("input", !this.checked);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  cursor: pointer;
  outline: none;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: left 0.5s;
  }
}

// 清楚css默认选中效果
button:focus {
  outline: none;
}

button.checked {
  background: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button.disabled {
  cursor: no-drop;
}
</style>