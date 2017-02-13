<template>
  <div id="header-lg">
    <h3>{{bigTite}}</h3>
    <h4>{{noteTitle}}</h4>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'header-lg',
    props: ['bigTite', 'noteTitle']
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import '../assets/css/variable.less';

  #header-lg {
    height: 100px;
    box-shadow: #ddd 0 3px;
    background: linear-gradient(45deg, @green 0%, @Green 100%);
    padding: 50px 0 0 20px;
  }

  h3 {
    font-size: @font-size-lg;
    color: @white;
  }

  h4 {
    font-size: 120%;
    position: relative;
    margin-top: -10px;
  }
</style>
