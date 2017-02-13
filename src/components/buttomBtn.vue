<template>
  <div id="buttomBtn">
    <button id="btn" :class="colorName" class="text-size-lg">{{ value }}</button>

  </div>

</template>

<script type="text/ecmascript-6">
  export  default{
    name: 'bottomBtn',
    props: ['value', 'color', 'position'],
    computed: {
      colorName: function () {
        if (this.color == 'orange') {
          return this.colorName = 'orange'
        } else if (this.color == 'green') {
          return this.colorName = 'green'
        }
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "../assets/css/variable.less";

  #buttomBtn {
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 10px 0 10px 0;
    background-color: white;
    /*opacity: 0.9;*/
    background-image: url("../assets/images/opacity.png");
    /*background-repeat:no-repeat;*/

  }

  #btn {
    height: 45px;
    width: 80%;
    color: @white;
    border: 0;
   // background: linear-gradient(45deg, @green 0%, @Green 100%);
    letter-spacing: 2px;
  }

  .orange {
    background-color: @orange;
  }

  .green {
    background-color: @green;
  }
</style>
