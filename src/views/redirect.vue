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
      redirectUrl: '',
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
    this.initData();
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    '$route'(to,from){
      this.initData();
    },
  },
};
</script>
