var i18next = require('i18next');

var option = {
  lng: 'en',
  resources: {
    en: {
      translation: {
        "hello-world": "Hello world!"
      }
    },
    zh_CN: {
      translation: {
        "hello-world": "你好世界！"
      }
    }
  }
};

var callback = function(err, t) {
  console.log(i18next.t('hello-world'));
}

i18next.init(option, callback);
