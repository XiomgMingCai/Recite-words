<template>
  <div id="CreatSuccess">
    <header-md Title="Vue" show="n"></header-md>
    <div class="CreatSuccess_body">
      <div id="message">注册成功!</div>
    </div>
    <buttomBtn @click.native="toCreatSuccess" value="开始练习" color="orange" class="buttomBtn"></buttomBtn>
  </div>
</template>

<script type="text/ecmascript-6">
  import buttomBtn from '../components/buttomBtn.vue';
  import headerMd from '../components/header-md.vue';

  export default{
    name: 'CreatSuccess',
    components: {headerMd, buttomBtn},
    data: function () {
      return {
        message: '小明'
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

  #CreatSuccess {
    background: url("../assets/images/woman.png") no-repeat -50px 160px;
  }

  .CreatSuccess_body {
    height: 600px;
    line-height: 600px;
    color: green;
  }


</style>
