(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(l.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={selectedGood:"Jam"},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[e?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){t.setState({selectedGood:""})}})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":c===e}),children:[Object(j.jsx)("td",{children:e===c?Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){t.setState({selectedGood:""})},children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){t.setState({selectedGood:c})},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(i.a.Component);n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.839efbdd.chunk.js.map