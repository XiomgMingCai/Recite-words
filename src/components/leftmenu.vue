<template>
  <div id="leftmenu">
    <div id="menu">
      <div class="padding-sm"></div>
      <h2>计算机单词</h2>
      <div class="padding-sm"></div>
      <h3>常用程序单词库</h3>
    </div>
    <div id="zz" @click="closeMenu"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'leftmenu',
    methods:{//关闭菜单
      closeMenu:function () {
        this.$store.state.leftmenuShow = false
      }
    }
  }
</script>


<style lang="less" scoped rel="stylesheet/less">
  @import "../assets/css/variable.less";
  @import "../assets/css/main.less";

  #menu {
    z-index: 99;
    width: 62%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(45, 44, 34, 0.8);;
    padding-top: 30px;
    text-align: center;
      color: #ffffff;
    h2 {
      font-size: 200%;
    }
    h3 {
      font-size: 125%;
    }

  }

  #zz {
    z-index: 99;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(76, 75, 57, 0.5);;
  }
</style>
