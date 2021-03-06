require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

import dva from 'dva';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router'

import 'antd/dist/antd.css';

import './index.html';
import './index.css';
// 1. Initialize
const app = dva({
  ...createLoading(),
  history: browserHistory,
  onError (error) {
    console.error('app onError -- ', error)
  },
});

// 2. Plugins
// app.use(createLoading());

// 3. Model
app.model(require('./models/app')); // 首页

app.model(require('./models/users'));

app.model(require("./models/authorities"));

app.model(require("./models/menus"));

app.model(require("./models/categories"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
