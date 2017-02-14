<template>
  <div id="CreatSuccess">
    <header-lg bigTite="注册" noteTitle="完成注册️云备份练习进度"></header-lg>


    <buttomBtn @click.native="toCreatSuccess" value="完成注册" color="orange" class="buttomBtn"></buttomBtn>
    <!--goindex按钮结束-->
  </div>
</template>

<script type="text/ecmascript-6">
  import buttomBtn from '../components/buttomBtn.vue';
  import headerLg from '../components/header-lg.vue';

  export default{
    name: 'CreatSuccess',
    components: {headerLg, buttomBtn},
    data: function () {
      return {
        name: '',
        mobile: "",
        sex: '0'//性别
      }
    },
    methods: {
      toCreatSuccess: function () {
        this.$router.push({path: '/index'})

      },//选择 并高亮
    }

  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "../assets/css/main.less";

  @height: 70px;

  #CreatSelect {
    padding: 0;
    text-align: center; //水平居中
    width: 100%;
  }

  .text {
    width: 240px;
    height: 24px;
    padding: 7px 9px;
    line-height: 24px;
    font-size: @font-size-md;
    font-weight: bold;
    color: #333;
    border: 1px solid;
    border-color: #CECECF;
    border-radius: 0;
    background: white;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
  }

  .text:focus {
    outline: none;
    border-color: #92AFED;
    box-shadow: 0 0 5px #92AFEC, inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .radio-lg {
    height: 300px;
    padding-top: 10px;
    margin-right: 50px;

    ul {
      li {
        float: left;
        width: @height;;
        height: 40px*3;
        padding: 10px;
      }
    }
  }

  .clear-b {
    clear: both;
  }

  .active {
    div {
      background: linear-gradient(-45deg, @green 0%, @Green 100%);

      height: @height;
      text-align: center;
      line-height: @height;
      color: @white;
    }
  }

  // 未选中
  .noactive {
    div {
      background-color: #8a8a8a;
      height: @height;
      text-align: center;
      line-height: @height;
      color: @white;
    }
  }


</style>
