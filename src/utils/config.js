const ENVCONFIG = {
  production: {
    API_PREFIX: 'https://api.baiyunairport.top',
    OSS_URL: 'https://fs-public-service.oss-cn-hangzhou.aliyuncs.com/baiyun/alipay/',
  },
  development: {
    API_PREFIX: 'https://api-demo.baiyunairport.top',
    OSS_URL: 'https://fs-public-service.oss-cn-hangzhou.aliyuncs.com/baiyun/alipay/',
  },
};
const { API_PREFIX, OSS_URL } = ENVCONFIG[process.env.NODE_ENV];

export { API_PREFIX, OSS_URL };
