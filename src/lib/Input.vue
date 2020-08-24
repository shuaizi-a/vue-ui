<template>
  <div class="sz-input">
    <input
      type="text"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      :class="{disabled}"
      :disabled="disabled"
    />
    <span v-if="clearablestate" @click="deletevalue">
      <i class="fa fa-times-circle-o" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "sz-Input",
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: "请输入信息",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icondelete: true,
    };
  },
  methods: {
    // v-model数据双向绑定
    handleInput($event) {
      // 通过input标签的原生事件input将值emit出去，以达到值得改变实现双向绑定
      this.$emit("input", $event.target.value);
    },
    // 清空数据
    deletevalue() {
      this.$emit("input", "");
    },
  },
  // 计算属性
  computed: {
    clearablestate() {
      if (this.clearable && this.value.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.sz-input {
  width: 100%;
  position: relative;
}
input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  margin: 5px 0;
}
.disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

input[type="text"]:focus {
  border: 1px solid #409eff;
}
.sz-input > span {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>