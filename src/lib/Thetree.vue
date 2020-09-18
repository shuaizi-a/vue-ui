<template>
  <ul>
    <li v-for="item in data" :key="item.id">
      <div>
        <img
          src="../img/wjjk.png"
          alt="关闭"
          title="关闭"
          @click="item.show = !item.show"
          v-if="item.children && item.show"
        />
        <img
          src="../img/wjjg.png"
          alt="打开"
          title="打开"
          @click="item.show = !item.show"
          v-if="item.children && !item.show"
        />
        <span :class="{pad:!item.children}" @click="select(item)">{{ item.label}}</span>
      </div>
      <sz-Thetree
        class="pad"
        v-show="item.children && item.show"
        :data="item.children"
        @select="select"
      ></sz-Thetree>
    </li>
  </ul>
</template>

<script>
export default {
  name: "sz-Thetree",
  props: {
    data: {
      type: Array,
    },
  },
  methods: {
    select(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0px;
}
li {
  list-style-type: none;
}
.pad {
  padding-left: 24px;
}
</style>