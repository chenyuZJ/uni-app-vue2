<template>
  <BasePage>
    <view class="content">
      <image class="logo" src="/static/logo.png"></image>
      <view>
        <text class="title">{{ title }}</text>
      </view>
      <view>
        <QrCode
          class="qrcode-box-mini"
          val="123456"
          size="430"
          onval="true"
          loadMake="true"
        ></QrCode>
      </view>
    </view>
  </BasePage>
</template>

<script>
  import QrCode from '@/components/QrCode/index.vue';
  export default {
    data() {
      return {
        title: 'Hello',
      };
    },
    components: { QrCode },
    methods: {
      async requestDemo() {
        // 接口演示
        const res = await this.$get(this.$api.user.daily_clock, {
          openId: '111',
        });
        console.log('res', res);
        const { msg } = res || {};
        if (this.$checkResponse(res)) {
          this.$showToast('打卡成功');
          return false;
        }
        this.$showToast(msg || '未知错误');
      },
    },
    onLoad() {
      // this.requestDemo();
    },
  };
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
