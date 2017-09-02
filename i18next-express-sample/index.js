var express = require('express');
var app = express();
var path = require('path');
var i18n = require('i18next');
var i18nFsBackend = require('i18next-node-fs-backend');
var i18nMiddleware = require('i18next-express-middleware');

// 初始化 i18next
i18n.use(i18nMiddleware.LanguageDetector).use(i18nFsBackend).init({
  lng: 'en',
  preload: [
    'en', 'zh-CN'
  ],
  backend: {
    loadPath: path.resolve(__dirname, './lang/{{lng}}/translation.json')
  }
});
app.use(i18nMiddleware.handle(i18n));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/lang/:lang', function(req, res) {
  res.cookie('i18next', req.params.lang);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Listening...');
})
