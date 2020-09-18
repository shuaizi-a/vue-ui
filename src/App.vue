<template>
  <div>
    <div>Switch(开关示例)</div>
    <sz-Switch :checked="bool" @input="toggon($event)"></sz-Switch>
    <br />
    <sz-Switch disabled></sz-Switch>
    <br />
    <sz-Button round disabled>默认</sz-Button>
    <sz-Button type="primary">主要</sz-Button>
    <sz-Button type="success">成功</sz-Button>
    <sz-Button type="info">信息</sz-Button>
    <sz-Button type="warning">警告</sz-Button>
    <sz-Button type="danger">危险</sz-Button>

    <br />
    <div>input框示例</div>
    <sz-Input v-model="lovingVue" placeholder="这是设置信息" clearable></sz-Input>
    <sz-Input v-model="lovingVue2" placeholder="这是设置信息" disabled></sz-Input>

    <br />
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
      <sz-Button2 theme="button">你好</sz-Button2>
      <sz-Button2 theme="link">你好</sz-Button2>
      <sz-Button2 theme="text">你好</sz-Button2>
    </div>
    <h1>示例2</h1>
    <div>
      <div>
        <sz-Button2 size="big">大大大</sz-Button2>
        <sz-Button2>普普通</sz-Button2>
        <sz-Button2 size="small">小小小</sz-Button2>
      </div>
      <div>
        <sz-Button2 theme="link" size="big">大大大</sz-Button2>
        <sz-Button2 theme="link">普普通</sz-Button2>
        <sz-Button2 size="small" theme="link">小小小</sz-Button2>
      </div>
      <div>
        <sz-Button2 size="big" theme="text">大大大</sz-Button2>
        <sz-Button2 theme="text">普普通</sz-Button2>
        <sz-Button2 size="small" theme="text">小小小</sz-Button2>
      </div>
    </div>
    <h1>示例3</h1>
    <div>
      <dir>
        <sz-Button2 level="main">主要按钮</sz-Button2>
        <sz-Button2>普通按钮</sz-Button2>
        <sz-Button2 level="danger">危险按钮</sz-Button2>
      </dir>
      <dir>
        <sz-Button2 theme="link" level="main">主要链接按钮</sz-Button2>
        <sz-Button2 theme="link">普通链接按钮</sz-Button2>
        <sz-Button2 theme="link" level="danger">危险链接按钮</sz-Button2>
      </dir>
      <dir>
        <sz-Button2 theme="text" level="main">主要文字按钮</sz-Button2>
        <sz-Button2 theme="text">普通文字按钮</sz-Button2>
        <sz-Button2 theme="text" level="danger">危险文字按钮</sz-Button2>
      </dir>
    </div>
    <h1>示例4</h1>
    <div>
      <sz-Button2 disabled>禁用按钮</sz-Button2>
      <sz-Button2 theme="link" disabled>禁用链接按钮</sz-Button2>
      <sz-Button2 theme="text" disabled>禁用按钮</sz-Button2>
    </div>
    <h1>示例5</h1>
    <div>
      <sz-Button2 loading>加载中</sz-Button2>
      <sz-Button2>加载完毕</sz-Button2>
    </div>

    <br />
    <div>树形控件</div>
    <sz-Thetree :data="trees" @select="Thetree"></sz-Thetree>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bool: 1,
      bool2: false,
      lovingVue: "",
      lovingVue2: "输入框2",
      trees: [
        {
          id: 1,
          label: "1级目录1",
          show: false,
          children: [
            {
              id: "1-1",
              label: "1.1目录",
            },
            {
              id: "1-2",
              label: "1.2目录",
            },
            {
              id: "1-3",
              label: "1.3目录",
            },
          ],
        },
        {
          id: 2,
          label: "1级目录2",
          show: false,
        },
        {
          id: 3,
          label: "1级目录3",
          show: false,
          children: [
            {
              id: "3-1",
              label: "3.1目录",
            },
            {
              id: "3-2",
              label: "3.2目录",
              show: false,
              children: [
                {
                  id: "3-2-1",
                  label: "3.2.1目录",
                },
                {
                  id: "3-2-2",
                  label: "3.2.2目录",
                },
                {
                  id: "3-2-3",
                  label: "3.2.3目录",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          label: "1级目录4",
          show: false,
          children: [
            {
              id: "4-1",
              label: "4.1目录",
            },
            {
              id: "4-2",
              label: "4.2目录",
              show: false,
              children: [
                {
                  id: "4-2-1",
                  label: "4.2.1目录",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          label: "1级目录5",
          show: false,
          children: [
            {
              id: "5-1",
              label: "5.1目录",
              show: false,
              children: [
                {
                  id: "5-1-1",
                  label: "5.1.1目录",
                },
                {
                  id: "5-1-2",
                  label: "5.1.2目录",
                  show: false,
                  children: [
                    {
                      id: "5-1-2-1",
                      label: "5.1.2.1目录",
                    },
                  ],
                },
              ],
            },
            {
              id: "5-2",
              label: "5.2目录",
              show: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggon(bool) {
      console.log(bool);
      this.bool = bool;
    },
    onClick() {
      console.log(1);
    },
    Thetree(item){
      console.log(item)
    }
  },
  watch: {
    lovingVue(x, y) {
      console.log(x);
      console.log(y);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
