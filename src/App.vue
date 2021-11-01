<script>
  import { mapActions, mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations(['changeAuthPopup']),
      login() {
        uni.login({
          success: ({ code }) => {
            console.log(code);
            this.changeAuthPopup(true);
            this.useCode(code);
          },
        });
      },
      async useCode(code) {
        const res = await this.$get(this.$api.login.useCode, { code });
        if (this.$checkResponse(res, true)) {
          console.log(res.data);
          uni.setStorageSync('openId', res.data.openid); // 小程序的openId
          uni.setStorageSync('unionId', res.data.unionid); // 小程序的unionId
          return false;
        }
      },
    },
    onShow() {
      this.login();
    },
  };
</script>

<style>
  /* 每个页面公共css */
</style>
