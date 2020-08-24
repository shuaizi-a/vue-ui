<template>
  <button class="zh-button" :class="btnClass">
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "sz-Button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        let typeList = ["primary", "success", "info", "warning", "danger"];
        if (type && !typeList.includes(type)) {
          console.error("type的类型必须是" + typeList.join(","));
        }
        return true;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`zh-button-${this.type}`);
      }

      if (this.disabled) {
        classes.push("disabled");
      }

      if (this.round) {
        classes.push("round");
      }

      return classes;
    },
  },
};
</script>

<style llang="scss" scoped>
.zh-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin: 5px 5px;
}

button.zh-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

button.zh-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

button.zh-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

button.zh-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

button.zh-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

button.zh-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

/* 禁止点击 */
button.disabled {
  cursor: no-drop;
}

button.round {
  border-radius: 20px;
}
</style>