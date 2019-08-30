# BeforeLogin
小程序登录之前的弹框提示



## 使用方法

1.下载仓库中的所有文件（除readme以外），将BeforeLogin文件夹放在Components中，img文件夹放在assets中。

2.在需要使用组件的页面json中，添加插件信息，例如："BeforeLogin": "../../components/BeforeLogin/index"

3.在页面wxml中，添加组件，例如: <BeforeLogin isShow="{{true}}" bindcustomevent='func' />

4.完成。



## 参数详解

<BeforeLogin isShow="{{true}}" bindcustomevent='func' />


isShow：   {boolean}     控制弹框的展示或隐藏

bindcustomevent:	  {function}    用户点击“立即登录”或“暂不登录”的回调

({type: 'consent'|'refuse'},e:event) => { }

type:  'consent' 用户点击“立即登录” | 'refuse' 用户点击“暂不登录”;

e: event 微信在调用type为getPhoneNumber时，返回的所有信息;

