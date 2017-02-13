<template>
  <div id="CreatSelect">
    <header-lg bigTite="攻城狮单词" noteTitle="请选择"></header-lg>
    <div style="margin-top: 10px"></div>
    <div>
      选择更多技术语言 <span @click="clickmore" style="color: green">选择更多技术语言</span>
    </div>


    <div class="radio-lg">
      <ul>
        <li class="radio active" id="css" @click="dateSelect('css')">
          <div>CSS</div>
        </li>
        <li class="radio noactive " id="HTML" @click="dateSelect('HTML')">
          <div>HTML</div>
        </li>
        <div v-show="radiolgMore">
          <li class="radio noactive" id="JavaScript" @click="dateSelect('JavaScript')">
            <div>JavaScript</div>
          </li>
          <li class="radio noactive" id="Vue" @click="dateSelect('Vue')">
            <div>Vue</div>
          </li>
          <li class="radio noactive" id="MongoDB" @click="dateSelect('MongoDB')">
            <div>MongoDB</div>
          </li>
          <li class="radio noactive" id="Node" @click="dateSelect('Node')">
            <div>Node</div>
          </li>
        </div>
      </ul>
    </div>
    <!--radio-lg单选结束-->
    <buttomBtn @click.native="goindex" value="开始" color="orange" class="buttomBtn"></buttomBtn>
    <!--goindex按钮结束-->
  </div>
</template>

<script type="text/ecmascript-6">
  import buttomBtn from '../components/buttomBtn.vue';
  import headerLg from '../components/header-lg.vue';

  export default{
    name: 'CreatSelect',
    components: {headerLg, buttomBtn},
    data: function () {
      return {
        radiolgMore: false
      }
    },
    methods: {
      goindex: function () {
        this.$router.push({path: '/'})

      },//选择 并高亮
      clickmore:function () {
        this.radiolgMore = !this.radiolgMore
      },
      dateSelect: function (id) {
        var obj = document.getElementsByClassName('radio');
        for (var i = 0; i < obj.length; i++) {
          obj[i].setAttribute('class', 'radio noactive')
        }
        document.getElementById(id).setAttribute('class', 'radio active')

        console.log('main.js/data=>examTime:' + this.$parent.examTime);
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "../assets/css/main.less";

  #CreatSelect {
    width: 100%;
  }

  .radio-lg {
    height: 480px;
    padding-top: 10px;
  }

  ul {
    li {
      float: left;
      width: 40%;
      height: 40px*3;
      padding: 10px;
      margin-right: 10px;
    }
  }

  //已选
  .active {
    div {
      background: linear-gradient(-45deg, @green 0%, @Green 100%);

      height: 120px;
      text-align: center;
      line-height: 100px;
      color: @white;
    }
  }

  // 未选中
  .noactive {
    div {
      background-color: #8a8a8a;
      height: 120px;
      text-align: center;
      line-height: 100px;
      color: @white;
    }
  }
</style>
