(window.webpackJsonp=window.webpackJsonp||[]).push([["component_example"],{"0498":function(e,t,a){"use strict";a("e279")},"0bc6":function(e,t,a){"use strict";a.r(t);var l=a("2877"),r=Object(l.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("page-header",{attrs:{title:"内容块",content:"PageMain"}}),t("page-main",[this._v(" PageMain 是最常用的页面组件，几乎所有页面都会使用到 ")]),t("page-main",{attrs:{title:"你可以设置一个自定义的标题"}},[this._v(" 这里放页面内容 ")]),t("el-row",{staticStyle:{margin:"0 10px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("page-main",{staticStyle:{margin:"0"}},[this._v(" 还可以结合 ElRow 使用 ")])],1),t("el-col",{attrs:{span:8}},[t("page-main",{staticStyle:{margin:"0"}},[this._v(" 这里放页面内容 ")])],1),t("el-col",{attrs:{span:8}},[t("page-main",{staticStyle:{margin:"0"}},[this._v(" 这里放页面内容 ")])],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports},1417:function(e,t,a){"use strict";a.r(t);var l={name:"ComponentExampleBatchactionbar",props:{},data:function(){return{dataList:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],selectionDataList:[]}},created:function(){},mounted:function(){},methods:{}},r=(a("be6d"),a("2877")),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"批量操作栏"},scopedSlots:e._u([{key:"content",fn:function(){return[a("p",[e._v("BatchActionBar")]),a("p",{staticStyle:{"margin-bottom":"0"}},[e._v("该组件需要和 ElTable 搭配使用")])]},proxy:!0}])}),a("page-main",[a("batch-action-bar",{attrs:{data:e.dataList,"selection-data":e.selectionDataList},on:{checkAll:function(t){return e.$refs.table.toggleAllSelection()},checkNull:function(t){return e.$refs.table.clearSelection()}}},[a("el-button",{attrs:{size:"small"}},[e._v("单个批量操作按钮")]),a("el-button-group",[a("el-button",{attrs:{size:"small"}},[e._v("批量操作按钮组1")]),a("el-button",{attrs:{size:"small"}},[e._v("批量操作按钮组2")])],1)],1),a("el-table",{ref:"table",attrs:{data:e.dataList,border:"",stripe:"","highlight-current-row":""},on:{"selection-change":function(t){e.selectionDataList=t}}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1),a("batch-action-bar",{attrs:{data:e.dataList,"selection-data":e.selectionDataList},on:{checkAll:function(t){return e.$refs.table.toggleAllSelection()},checkNull:function(t){return e.$refs.table.clearSelection()}}},[a("el-button",{attrs:{size:"small"}},[e._v("单个批量操作按钮")]),a("el-button-group",[a("el-button",{attrs:{size:"small"}},[e._v("批量操作按钮组1")]),a("el-button",{attrs:{size:"small"}},[e._v("批量操作按钮组2")])],1)],1)],1)],1)}),[],!1,null,"09d0090b",null);t.default=s.exports},"17fc":function(e,t,a){"use strict";a("fa0e")},"3cd1":function(e,t,a){},"41b4":function(e,t,a){"use strict";a.r(t);a("b0c0");var l={data:function(){return{image:"",images:["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}},methods:{handleSuccess1:function(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2:function(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3:function(e,t){var a=this;this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((function(){""!=e.error&&(a.$message.warning(e.error),a.files.pop())}))}}},r=a("2877"),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}}),a("page-main",{attrs:{title:"单图上传"}},[a("image-upload",{attrs:{url:e.image,action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKD628431923530324"}},on:{"update:url":function(t){e.image=t},onSuccess:e.handleSuccess1}})],1),a("page-main",{attrs:{title:"多图上传（默认最多3张）"}},[a("images-upload",{attrs:{url:e.images,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"}},on:{onSuccess:e.handleSuccess2}})],1),a("page-main",{attrs:{title:"文件上传（默认最多3个）"}},[a("file-upload",{attrs:{files:e.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"}},on:{onSuccess:e.handleSuccess3}})],1)],1)}),[],!1,null,null,null);t.default=s.exports},"46ec":function(e,t,a){"use strict";a("c6ca")},"49fe":function(e,t,a){"use strict";a.r(t);var l={data:function(){return{form:{content:"<p>初始化文字</p>"}}}},r=a("2877"),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-main",[a("editor",{model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1)}),[],!1,null,null,null);t.default=s.exports},"4a38":function(e,t,a){"use strict";a.r(t);var l={data:function(){return{search:{name:"",department_id:"",department_job_id:"",role_id:""},searchMore:!1,searchMore2:!1}}},r=a("2877"),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"搜索面板",content:"SearchBar"}}),a("page-main",[a("search-bar",{attrs:{"show-more":""},on:{toggle:function(t){e.searchMore=t}}},[a("el-form",{attrs:{model:e.search,size:"small","label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名 / 手机号"}},[a("el-input",{attrs:{placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{directives:[{name:"auth",rawName:"v-auth",value:"supplay.department.browse",expression:"'supplay.department.browse'"}],attrs:{label:"部门"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择部门"},model:{value:e.search.department_id,callback:function(t){e.$set(e.search,"department_id",t)},expression:"search.department_id"}},[a("el-option",{attrs:{label:"技术部",value:1}}),a("el-option",{attrs:{label:"设计部",value:2}}),a("el-option",{attrs:{label:"行政部",value:3}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{directives:[{name:"auth",rawName:"v-auth",value:"supplay.department_job.browse",expression:"'supplay.department_job.browse'"}],attrs:{label:"职位"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择职位"},model:{value:e.search.department_job_id,callback:function(t){e.$set(e.search,"department_job_id",t)},expression:"search.department_job_id"}},[a("el-option",{attrs:{label:"程序员",value:1}}),a("el-option",{attrs:{label:"设计师",value:2}}),a("el-option",{attrs:{label:"人事",value:3}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{directives:[{name:"auth",rawName:"v-auth",value:"supplay.role.browse",expression:"'supplay.role.browse'"}],attrs:{label:"角色"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择角色"},model:{value:e.search.role_id,callback:function(t){e.$set(e.search,"role_id",t)},expression:"search.role_id"}},[a("el-option",{attrs:{label:"主管",value:1}}),a("el-option",{attrs:{label:"普通职员",value:2}})],1)],1)],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.searchMore,expression:"searchMore"}]},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色"}},[a("el-checkbox",{attrs:{value:!0}},[e._v("备选项")]),a("el-checkbox",{attrs:{value:!1}},[e._v("备选项")])],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("筛选")]),a("el-button",[e._v("导出")]),a("el-button",{attrs:{type:"text"}},[e._v("查看已导出记录")])],1)],1)],1)],1),a("page-main",{attrs:{title:"默认展开"}},[a("search-bar",{attrs:{"show-more":"",unfold:""},on:{toggle:function(t){e.searchMore2=t}}},[a("el-form",{attrs:{model:e.search,size:"small","label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名 / 手机号"}},[a("el-input",{attrs:{placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{directives:[{name:"auth",rawName:"v-auth",value:"supplay.department.browse",expression:"'supplay.department.browse'"}],attrs:{label:"部门"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择部门"},model:{value:e.search.department_id,callback:function(t){e.$set(e.search,"department_id",t)},expression:"search.department_id"}},[a("el-option",{attrs:{label:"技术部",value:1}}),a("el-option",{attrs:{label:"设计部",value:2}}),a("el-option",{attrs:{label:"行政部",value:3}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{directives:[{name:"auth",rawName:"v-auth",value:"supplay.department_job.browse",expression:"'supplay.department_job.browse'"}],attrs:{label:"职位"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择职位"},model:{value:e.search.department_job_id,callback:function(t){e.$set(e.search,"department_job_id",t)},expression:"search.department_job_id"}},[a("el-option",{attrs:{label:"程序员",value:1}}),a("el-option",{attrs:{label:"设计师",value:2}}),a("el-option",{attrs:{label:"人事",value:3}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{directives:[{name:"auth",rawName:"v-auth",value:"supplay.role.browse",expression:"'supplay.role.browse'"}],attrs:{label:"角色"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择角色"},model:{value:e.search.role_id,callback:function(t){e.$set(e.search,"role_id",t)},expression:"search.role_id"}},[a("el-option",{attrs:{label:"主管",value:1}}),a("el-option",{attrs:{label:"普通职员",value:2}})],1)],1)],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.searchMore2,expression:"searchMore2"}]},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色"}},[a("el-checkbox",{attrs:{value:!0}},[e._v("备选项")]),a("el-checkbox",{attrs:{value:!1}},[e._v("备选项")])],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("筛选")]),a("el-button",[e._v("导出")]),a("el-button",{attrs:{type:"text"}},[e._v("查看已导出记录")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports},"4d56":function(e,t,a){"use strict";a.r(t);var l={name:"ComponentExampleArea",inject:["reload"],props:{},data:function(){return{area:["浙江省","杭州市","西湖区"]}},created:function(){},mounted:function(){},methods:{}},r=(a("17fc"),a("2877")),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"省市区联动",content:"CascaderArea"}}),a("page-main",[a("cascader-area",{model:{value:e.area,callback:function(t){e.area=t},expression:"area"}})],1)],1)}),[],!1,null,"cd350d0e",null);t.default=s.exports},"62db":function(e,t,a){"use strict";a.r(t);var l={props:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},r=(a("46ec"),a("2877")),s=Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("page-header",{attrs:{title:"图片预览",content:"ImagePreview"}}),t("page-main",[t("image-preview",{attrs:{src:"https://s1.ax1x.com/2020/07/03/NOeqld.jpg",width:200}}),t("image-preview",{attrs:{src:"",width:"100px",height:"100px"}})],1)],1)}),[],!1,null,"6caf71bd",null);t.default=s.exports},8010:function(e,t,a){"use strict";a.r(t);var l={name:"ComponentExampleAbsoluteContainer",props:{},data:function(){return{dataList:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],selectionDataList:[]}},created:function(){},mounted:function(){this.$nextTick((function(){var e=document.getElementsByClassName("el-table__header-wrapper")[0].offsetHeight;document.getElementsByClassName("el-table__body-wrapper")[0].style.height="calc(100% - ".concat(e,"px)")}))},methods:{}},r=(a("0498"),a("2877")),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("AbsoluteContainer",[a("page-header",{attrs:{title:"表格自适应"},scopedSlots:e._u([{key:"content",fn:function(){return[a("p",[e._v("AbsoluteContainer")]),a("p",{staticStyle:{"margin-bottom":"0"}},[e._v("该组件是一个 absolute 固定容器，表格自适应需要自行实现，可参考演示源码，缩小浏览器窗口高度可查看最终效果")])]},proxy:!0}])}),a("page-main",[a("el-table",{attrs:{data:e.dataList,border:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1),a("el-button",{attrs:{type:"primary"}},[e._v("新增")])],1)],1)}),[],!1,null,"2bf86fc2",null);t.default=s.exports},"9ec5":function(e,t,a){"use strict";a.r(t);var l=a("2877"),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"趋势符号"},scopedSlots:e._u([{key:"content",fn:function(){return[a("p",[e._v("Trend")]),a("p",{staticStyle:{"margin-bottom":"0"}},[e._v("标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外")])]},proxy:!0}])}),a("el-row",{staticStyle:{margin:"0 10px"},attrs:{gutter:20}},[a("el-col",{attrs:{md:8}},[a("page-main",{staticStyle:{margin:"0"},attrs:{title:"基础用法"}},[a("p",[a("trend",{attrs:{value:"12.3"}})],1),a("p",[a("trend",{attrs:{value:"12.3",type:"down"}})],1)])],1),a("el-col",{attrs:{md:8}},[a("page-main",{staticStyle:{margin:"0"},attrs:{title:"颜色反转"}},[a("p",[a("trend",{attrs:{value:"12.3",reverse:""}})],1),a("p",[a("trend",{attrs:{value:"12.3",type:"down",reverse:""}})],1)])],1),a("el-col",{attrs:{md:8}},[a("page-main",{staticStyle:{margin:"0"},attrs:{title:"前缀后缀"}},[a("p",[a("trend",{attrs:{value:"12.3",prefix:"$"}})],1),a("p",[a("trend",{attrs:{value:"12.3",suffix:"%"}})],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports},a297:function(e,t,a){"use strict";a.r(t);var l=a("2877"),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"页头",content:"PageHeader"}}),a("page-header",{attrs:{title:"页面标题"},scopedSlots:e._u([{key:"content",fn:function(){return[a("p",[e._v("提供两块插槽：")]),a("p",[e._v("一块是 content 区域插槽，一块是右侧区域")])]},proxy:!0}])},[a("el-button",{attrs:{icon:"el-icon-arrow-left",round:""}},[e._v("返回")])],1)],1)}),[],!1,null,null,null);t.default=r.exports},ab70:function(e,t,a){"use strict";a.r(t);var l=a("2877"),r=Object(l.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("page-header",{attrs:{title:"处理结果",content:"Result"}}),t("page-main",[t("result",{attrs:{type:"success",title:"提交成功",desc:"提交结果页用于反馈一系列操作任务的处理结果。"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[this._v("返回列表")]),t("el-button",{attrs:{size:"small"}},[this._v("打印")])],1)],1),t("page-main",[t("result",{attrs:{type:"error",title:"提交失败",desc:"灰色额外区域可以显示一些补充的信息。请核对并修改以下信息后，再重新提交。"}},[t("div",{attrs:{slot:"extra"},slot:"extra"},[t("div",[this._v("您提交的内容有如下错误：")]),t("div",[this._v(" 您的账户已被冻结 "),t("a",{attrs:{href:"###"}},[this._v("打印")])])]),t("el-button",{attrs:{type:"primary",size:"small"}},[this._v("返回修改")])],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports},baa5:function(e,t,a){"use strict";a.r(t);var l={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}}},r=a("2877"),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-header",{attrs:{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页"},scopedSlots:e._u([{key:"content",fn:function(){return[a("p",[e._v("FixedActionBar")]),a("p",{staticStyle:{"margin-bottom":"0"}},[e._v("避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页")])]},proxy:!0}])}),a("page-main",[a("el-row",[a("el-col",{attrs:{md:24,lg:12}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1)],1)],1)],1),a("fixed-action-bar",[a("el-button",{attrs:{type:"primary"}},[e._v("立即创建")]),a("el-button",[e._v("取消")])],1)],1)}),[],!1,null,null,null);t.default=s.exports},be6d:function(e,t,a){"use strict";a("3cd1")},c6ca:function(e,t,a){},e279:function(e,t,a){},fa0e:function(e,t,a){}}]);