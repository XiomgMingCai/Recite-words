<!--suppress ALL -->
<template>
  <div id="header-md">
  <h2>  {{Title}}</h2>
    <div v-show="moreshow" id="menu">
      <img src="../assets/images/menu.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'header-md',
    props: ['Title', 'show'],
    computed: {
      moreshow: function () {
        if (this.show == 'y') {
          return this.moreshow = true
        }else {
          return this.moreshow = false
        }
      }/**/
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import '../assets/css/variable.less';
  #header-md {
    height: 50px;
    box-shadow: #ddd 0 3px;
    background: linear-gradient(45deg, @green 0%, @Green 100%);
  }
  h2  {
    height: 50px;
    line-height: 50px;
  }
  #menu{
    margin-left: 300px;
    margin-top: -59px;
  }


  /*
.mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}*//*
.mint-header{

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #26a2ff;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
*/
</style>
