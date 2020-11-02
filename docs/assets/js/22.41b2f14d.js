(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{378:function(e,s,t){"use strict";t.r(s);var o=t(42),r=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"axios-拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios-拦截器"}},[e._v("#")]),e._v(" Axios 拦截器")]),e._v(" "),t("p",[e._v("拦截器的用处就是拦截每一次的请求和响应，然后做一些全局的处理。例如接口响应报错，可以在拦截器里用统一的报错提示来展示，方便业务开发。")]),e._v(" "),t("p",[e._v("框架提供了一份拦截器参考代码 "),t("code",[e._v("./src/api/index.js")]),e._v(" ，因为每个公司提供的接口标准不同，所以该文件需要开发者根据实际情况去定制对应的拦截器。")]),e._v(" "),t("p",[e._v("代码很简单，首先初始化 axios 对象，然后 "),t("code",[e._v("axios.interceptors.request.use()")]),e._v(" 和 "),t("code",[e._v("axios.interceptors.response.use()")]),e._v(" 就分别是请求和响应的拦截代码了。")]),e._v(" "),t("p",[e._v("参考代码里只做了简单的拦截处理，例如请求的时候会自动带上 token ，响应的时候会根据错误信息判断是登录失效还是接口报错，并做相应动作，登录失效则跳转至登录页，接口报错则使用 Element UI 的 Message 组件提示用户。")])])}),[],!1,null,null,null);s.default=r.exports}}]);