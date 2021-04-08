<style scoped>

</style>

<template>
    <div>
        <iframe :src="redirectUrl" id="mobsf" scrolling="yes" frameborder="0" style="width: 100%; height: 700px"></iframe>
    </div>
</template>

<script>
    import instance from "../api";
    import * as util from "../assets/util";
    import * as rsaEncrypt from '../assets/rsaEncrypt.js';

    export default {
        data() {
            return {
                redirectUrl: ''
            };
        },
        methods: {
            initData() {
                let redirectUrl_bank = '';
                instance.get(`/app/getUrl`, {
                    params: {
                        code: this.$route.meta.code
                    }
                }).then((res) => {
                    if (res.data.data === '') {
                        this.redirectUrl = 'http://localhost:8090/#/404'
                    } else {
                        redirectUrl_bank += res.data.data
                        instance.get(`/app/getInfoBySessionId`, {
                            params: {
                                sessionId: util.session('token')
                            }
                        }).then((res) => {
                            redirectUrl_bank += '?username=' + res.data.data.username + '&password=' + rsaEncrypt.encrypt(res.data.data.password)
                            console.log(redirectUrl_bank)
                            window.open(redirectUrl_bank, '_blank')
                        })

                        // this.redirectUrl = res.data.data;
                    }
                });

            }
        },
        created() {
            this.initData();
        },
        watch: {
            //监听相同路由下参数变化的时候，从而实现异步刷新
            '$route'(to, from) {
                this.initData();
            },
        },
    };
</script>
