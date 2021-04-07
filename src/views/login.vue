<style scoped>
  #app{display: table;width:100%;}
  .main-title{text-align: center;}
  .des{text-align: center;color:#999;margin-bottom: 2em;}
  .login-form{width: 400px;margin:13% auto 0;}
  .login-page{background:#fff;}
</style>
<template>
  <div>
    <div class="g-center login-page" @keyup.enter="login">
      <el-form class="login-form">
        <h1 class="main-title">云服务应用统一门户</h1>
        <p class="des">Cloud service application unified portal</p>
        <el-form-item>
          <el-input
            :autofocus="true"
            placeholder="请输入账号"
            v-model="username">
            <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="password">
            <template slot="prepend"><i class="el-icon-info"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" @click.native="login" type="primary">{{btnText}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs'
import * as util from '../assets/util.js';
//登录
const requestLogin = params => {
  // let words = CryptoJS.enc.Utf8.parse(params.password);
  // let base64 = CryptoJS.enc.Base64.stringify(words);
  // params.password = base64;
  return axios.post(`/api/xxl-sso-server/app/login`, qs.stringify(params))
};

export default {
  data() {
    return {
      username: 'root',
      password: '123456',
      isBtnLoading: false
    };
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
  methods: {
    login() {
      var vm = this;
      if (!vm.username) {
        vm.$message.error('请填写用户名！！！');
        return;
      }
      if (!vm.password) {
        vm.$message.error('请填写密码');
        return;
      }

      let loginParams = {username: vm.username, password: vm.password};
      vm.isBtnLoading = true;
      requestLogin(loginParams).then(res => {
        vm.isBtnLoading = false;
        console.log(res)
        if(res.data.data){
          util.session('token', res.data.data);
          vm.$emit('login', vm.$router.currentRoute.query.from);
        }else{
          return Promise.reject({
            message: '登录异常！'
          });
        }
      }).catch(err => {
        vm.isBtnLoading = true;
        util.catchError(err)
      });
    }
  },
  created() {
    sessionStorage.clear();
  }
};
</script>
