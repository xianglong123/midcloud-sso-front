<style scoped>

</style>

<template>
  <div>
    <iframe :src="redirectUrl" id="mobsf" scrolling="yes" frameborder="0" style="width: 100%; height: 700px" ></iframe>
  </div>
</template>

<script>
  import instance from '../api';
export default {
  data() {
    return {
      redirectUrl: 'http://127.0.0.1:8000/auth/login?username=dba&password=J6wn6+TlK6rDCaW+aPE1AeoyMIemEDA47UZvtWj3ocsaZLLURVao0nG34t+z+lUeCEpIvmwbSIZ7q9B17gzu8Q==',
    };
  },
  methods: {
    initData() {
      instance.get(`/app/getUrl`, {
        params: {
          code: this.$route.meta.code
        }
      }).then((res) => {
        console.log( "*********" + res.data.data)
        if(res.data.data === '') {
          this.redirectUrl = 'http://localhost:8090/#/404'
        } else {
          this.redirectUrl = res.data.data;
        }
      });
    }
  },
  created() {
    // this.initData();
    //http://127.0.0.1:8000/auth/login

  },
  // watch: {
  //   //监听相同路由下参数变化的时候，从而实现异步刷新
  //   '$route'(to,from){
  //     this.initData();
  //   },
  // },
};
</script>
