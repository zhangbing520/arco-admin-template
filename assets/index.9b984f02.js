var j=Object.defineProperty,D=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var O=(e,a,r)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,d=(e,a)=>{for(var r in a||(a={}))E.call(a,r)&&O(e,r,a[r]);if(g)for(var r of g(a))P.call(a,r)&&O(e,r,a[r]);return e},f=(e,a)=>D(e,A(a));import{R as x,r as B,I,j as n,_ as N,u as S,F as i,a as T,b as u,T as l,S as v,B as p,c as y,d as k,l as Z,s as M}from"./index.6a349d4e.js";import{C as R}from"./index.a28837a6.js";import{I as W,a as _}from"./index.7e06f94d.js";function b(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,t)}return r}function F(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?b(Object(r),!0).forEach(function(t){N(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $(e,a){var r=B.exports.useContext(I),t=r.prefixCls,s=e.spin,o=e.className,c=F(F({"aria-hidden":!0,focusable:!1,ref:a},e),{},{className:"".concat(o?o+" ":"").concat(t,"-icon ").concat(t,"-icon-wechat")});return s&&(c.className="".concat(c.className," ").concat(t,"-icon-loading")),delete c.spin,delete c.isIcon,n("svg",f(d({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},c),{children:n("path",{fill:"currentColor",stroke:"none",d:"M32.09 16.362a14.39 14.39 0 0 0-6.927 1.716 13.087 13.087 0 0 0-5.008 4.676 11.936 11.936 0 0 0-1.856 6.473c.01 1.137.185 2.273.517 3.36h-1.505a26.653 26.653 0 0 1-4.766-.593l-.925-.166-5.665 2.93 1.55-4.848C3.179 26.783 1.018 23.077 1 18.792a11.951 11.951 0 0 1 2.188-6.927 14.943 14.943 0 0 1 5.938-5.027 18.579 18.579 0 0 1 8.248-1.837A18.82 18.82 0 0 1 24.8 6.506a16.863 16.863 0 0 1 5.893 4.128 11.963 11.963 0 0 1 2.992 5.817 17.922 17.922 0 0 0-1.595-.09Zm-20.152-.414a2.167 2.167 0 0 0 1.505-.471c.405-.378.62-.908.593-1.46a1.881 1.881 0 0 0-.592-1.46 2.025 2.025 0 0 0-1.506-.535 2.778 2.778 0 0 0-1.67.535c-.454.323-.728.849-.728 1.401a1.708 1.708 0 0 0 .727 1.523 2.925 2.925 0 0 0 1.671.467ZM47 28.99a9.573 9.573 0 0 1-1.59 5.193c-1.128 1.6-2.52 3-4.129 4.128l1.258 4.129-4.51-2.413h-.243a20.758 20.758 0 0 1-4.6.76 15.538 15.538 0 0 1-7.03-1.59 13.089 13.089 0 0 1-5.008-4.313 10.501 10.501 0 0 1-1.838-5.939 10.29 10.29 0 0 1 1.838-5.92c1.266-1.847 3-3.334 5.008-4.313a15.579 15.579 0 0 1 7.03-1.59 14.919 14.919 0 0 1 6.761 1.59 13.286 13.286 0 0 1 5.09 4.312 10.004 10.004 0 0 1 1.94 5.966H47ZM23.407 11.955a2.77 2.77 0 0 0-1.747.534 1.65 1.65 0 0 0-.76 1.46c-.017.584.27 1.146.76 1.46.498.36 1.1.544 1.716.535a2.083 2.083 0 0 0 1.505-.472c.368-.404.561-.925.534-1.46a1.834 1.834 0 0 0-.534-1.532 1.887 1.887 0 0 0-1.532-.534h.063v.009h-.005Zm5.256 15.03a2.016 2.016 0 0 0 1.46-.498c.332-.288.525-.7.534-1.137a1.612 1.612 0 0 0-.534-1.136 2.062 2.062 0 0 0-1.46-.499 1.58 1.58 0 0 0-1.092.499c-.305.296-.49.71-.498 1.136.009.427.184.84.498 1.137.288.305.679.48 1.092.499Zm8.953 0a2.016 2.016 0 0 0 1.46-.498c.332-.288.525-.7.534-1.137a1.558 1.558 0 0 0-.593-1.136 2.12 2.12 0 0 0-1.401-.499 1.493 1.493 0 0 0-1.092.499c-.305.296-.49.71-.498 1.136.009.427.184.84.498 1.137.279.305.674.49 1.092.499Z"})}))}var h=x.forwardRef($);h.defaultProps={isIcon:!0};h.displayName="IconWechat";var q=h;function w(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,t)}return r}function C(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?w(Object(r),!0).forEach(function(t){N(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function z(e,a){var r=B.exports.useContext(I),t=r.prefixCls,s=e.spin,o=e.className,c=C(C({"aria-hidden":!0,focusable:!1,ref:a},e),{},{className:"".concat(o?o+" ":"").concat(t,"-icon ").concat(t,"-icon-safe")});return s&&(c.className="".concat(c.className," ").concat(t,"-icon-loading")),delete c.spin,delete c.isIcon,n("svg",f(d({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},c),{children:n("path",{d:"m16.825 22.165 6 6 10-10M24 6c7 4 16 5 16 5v15s-2 12-16 16.027C10 38 8 26 8 26V11s9-1 16-5Z"})}))}var m=x.forwardRef(z);m.defaultProps={isIcon:!0};m.displayName="IconSafe";var G=m;function U(){const e=S(),[a]=i.useForm(),r=T(),t=async s=>{await e(Z(s));const{accessToken:o}=M.getState().userReducer;o&&r("/dashboard/workplace")};return u("div",{className:"login-wrap",children:[n("div",{className:"login-left",children:u("div",{className:"login-left-content",children:[n(l.Title,{className:"login-text",children:"ARCO ADMIN TEMPLATE"}),n(l.Title,{className:"login-text",heading:5,children:"\u5F00\u7BB1\u5373\u7528\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"}),n(l.Text,{className:"login-text",children:"\u70B9\u51FB\u53F3\u4FA7\u767B\u5F55\u5373\u53EF\u4F53\u9A8C"}),n("div",{className:"btn",children:u(v,{size:16,children:[n(p,{shape:"round",type:"primary",icon:n(W,{}),children:"Github"}),n(p,{shape:"round",type:"primary",icon:n(_,{}),children:"\u6587\u6863"}),n(p,{shape:"round",type:"primary",icon:n(q,{}),children:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4"})]})})]})}),n("div",{className:"login-form",children:u("div",{className:"form-warp",children:[n(l.Title,{children:"\u60A8\u597D\uFF01"}),n(l.Title,{heading:5,children:"\u6B22\u8FCE\u767B\u5F55Arco Admin"}),n(i,{form:a,wrapperCol:{span:24},initialValues:{username:"admin",password:123456},onSubmit:t,children:u(v,{direction:"vertical",size:10,children:[n(i.Item,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],children:n(y,{prefix:n(k,{}),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})}),n(i.Item,{field:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:n(y.Password,{prefix:n(G,{}),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})}),u(i.Item,{className:"forget-pwd",children:[n(R,{children:"\u8BB0\u4F4F\u5BC6\u7801"}),n(p,{type:"text",children:"\u5FD8\u8BB0\u5BC6\u7801"})]}),n(i.Item,{children:n(p,{type:"primary",shape:"round",htmlType:"submit",long:!0,children:"\u767B \u5F55"})})]})})]})})]})}export{U as default};
