(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69167e80"],{"818d":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tutorial"},[e("Menu"),e("div",{staticClass:"header"},[e("VueShowdown",{staticClass:"showdown",attrs:{markdown:this.fileContent,flavor:"github",options:{emoji:!0}}}),t._m(0),e("div",{staticClass:"header"})],1),e("Footer")],1)},i=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{width:"100%"}},[o("a",{attrs:{href:"javascript:history.back()"}},[o("img",{attrs:{src:e("e678")}})])])}],a=e("fb62"),r=e("fd2d"),s=e("866c"),c=e.n(s),u=(e("db6a"),{name:"Tutorial",components:{Footer:r["a"],Menu:a["a"],VueShowdown:c.a.VueShowdown},data:function(){return{fileContent:null,fileToRender:null,rawContent:null}},created:function(){this.fileContent="loading"},mounted:function(){this.getContent()},methods:{getContent:function(){var t=this;this.fileToRender=this.$route.query.a,this.fileContent="loading",this.$http.get(window.location.origin+"/"+this.fileToRender).then((function(n){t.fileContent=n.body}),(function(){t.fileContent="An error ocurred"}))}}}),l=u,d=(e("f6a7"),e("2877")),f=Object(d["a"])(l,o,i,!1,null,"980f7804",null);n["default"]=f.exports},c319:function(t,n,e){},db6a:function(t,n,e){},e678:function(t,n,e){t.exports=e.p+"img/arrow_left.3ce2da32.svg"},f6a7:function(t,n,e){"use strict";e("c319")}}]);
//# sourceMappingURL=chunk-69167e80.75558b47.js.map