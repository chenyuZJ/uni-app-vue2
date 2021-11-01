<template>
  <view class="base-page">
    <slot></slot>
    <AuthorizePopup></AuthorizePopup>
  </view>
</template>

<script>
  import AuthorizePopup from '../AuthorizePopup'; // 授权弹窗

  export default {
    data() {
      return {};
    },
    components: {
      AuthorizePopup,
    },
    created() {
      console.log('base-page');
    },
    methods: {},
  };
</script>

<style lang="less">
  @import './index.less';
</style>
