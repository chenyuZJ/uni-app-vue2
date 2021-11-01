<template>
  <view class="authorize-popup" v-show="isShowPop">
    <view class="popup-tip-btn">
      <image class="close-pop" @click="closePop" :src="getImgUrl('close.png')" alt="" />
      <view class="popup-title">欢迎使用机场通！</view>
      <view class="popup-cover"></view>
      <view class="popup-desc-title">为了您更好的使用体验，机场通需要获取您的以下信息</view>
      <view class="popup-desc-text">·您的公开信息（头像、昵称等）</view>
      <button class="popup-btn" lang="zh_CN" @click="userInfoHandler">
        同意授权
      </button>
    </view></view
  >
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { OSS_URL } from '@/utils/config';

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(['isShowPop', 'userInfo']),
      getImgUrl() {
        return name => {
          return `${OSS_URL}authorizePopup/${name}`;
        };
      },
    },
    created() {},
    methods: {
      ...mapMutations(['changeUserInfo', 'changeAuthPopup']),
      userInfoHandler() {
        wx.getUserProfile({
          lang: 'zh_CN',
          desc: '用于完善会员资料',
          success: res => {
            uni.setStorageSync('userProfile', res);
            this.changeUserInfo(res.userInfo);
            uni.setStorageSync('isAuth', true); // 存储已授权状态
            this.changeAuthPopup(false);
          },
        });
      },
      closePop() {
        this.changeAuthPopup(false);
      },
    },
  };
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
