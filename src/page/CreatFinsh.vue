<template>
  <div id="CreatFinsh">
    <header-lg bigTite="注册" noteTitle="完成注册️云备份练习进度"></header-lg>

    <div class="padding-lg">
      <div class="text-size-lg">真实姓名</div>
      <div class="padding-md"></div>

      <input v-model="name"  type="text" name="firstname"
             class="text" min="2" maxlength="5" placeholder="请输入一个名称"/>
      <div class="padding-md"></div>
      <div class="text-size-lg">注册手机号</div>
      <div class="padding-md"></div>

      <input v-model="mobile" onkeyup="this.value = this.value.replace(/\D/g,'')" min="11" maxlength="11" type="tel"
             name="lastname" class="text" placeholder="请输入您的手机号"/>
    </div>

    <div class="radio-lg">
      <div class="clear-b">
        <ul>
          <li class="radio noactive" id="data-1" @click="sexSelect('data-1')">
            <div>男</div>
          </li>
          <li class="radio noactive " id="data-0" @click="sexSelect('data-0')">
            <div>女</div>
          </li>
        </ul>
      </div>
    </div>

    <buttomBtn @click.native="toCreatSuccess" value="完成注册" color="orange" class="buttomBtn"></buttomBtn>
    <!--goindex按钮结束-->
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import VueResource from 'vue-resource';
//  Vue.use(vueResource)﻿​;
  import buttomBtn from '../components/buttomBtn.vue';
  import headerLg from '../components/header-lg.vue';

  export default{
    name: 'CreatFinsh',
    components: {headerLg, buttomBtn},
    data: function () {
      return {
        name: this.$parent.examTime,
        mobile: "",
        sex: '0'//性别
      }
    },
    methods: {
     //选择 并高亮
      sexSelect: function (id) {
        console.log(id);
        var obj = document.getElementsByClassName('radio');
        for (var i = 0; i < obj.length; i++) {
          obj[i].setAttribute('class', 'radio noactive')
        }
        document.getElementById(id).setAttribute('class', 'radio active')
        this.sex = id.replace(/data-/g, '');
//        console.log(this.sex);
      },
      toCreatSuccess: function () {
        this.$router.push({path: '/CreatSuccess'})

      }//选择 并高亮
    /*  //提交注册信息到后台
      toCreatSuccess: function () {
        if (this.name != '' && this.mobile != '') {

          var formData = new FormData();
          formData.append('name', this.name);
          formData.append('mobile', this.mobile);
          formData.append('sex', this.sex);
          formData.append('examTime', this.$parent.examTime);//考试时间
//          formData.append('preExamDay',this.$parent.preExamDay)//考试时间
          /!**
           * formData ajax 提交的数据
           * Function  回调  参数1  参数2 err
           *!/
          this.$http.post('http://' + this.$parent.state.serverIP
            + '/json/post_reguser.php', formData)
            .than(function (response) {

              if (response.data == 1) {
                this.$router.push({path: '/CreatSuccess'})
              }
              if (response.data == 0) {
                this.$router.push({path: '/index'})
              }
            }, function () {
              this.$router.push({path: '/ErrorPage'})
            })
        }

      }*/
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
