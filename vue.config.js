const path = require('path');
const vars = path.resolve(__dirname, 'src/style/variable.less');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          hack: `true; @import "${vars}"`,
        },
      },
    },
  },
};
