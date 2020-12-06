const path = require('path');

module.exports = {
  root: './example',
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  }
};
