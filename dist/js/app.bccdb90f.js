(function(e){function t(t){for(var a,o,r=t[0],u=t[1],l=t[2],b=0,d=[];b<r.length;b++)o=r[b],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==s[u]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var i=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function s(e,t,n,s,c,o){const r=Object(a["B"])("router-view");return Object(a["u"])(),Object(a["e"])(r,null,{default:Object(a["I"])(e=>[Object(a["i"])(a["b"],{name:"route",mode:"out-in"},{default:Object(a["I"])(()=>[(Object(a["u"])(),Object(a["e"])(Object(a["C"])(e.Component)))]),_:2},1024)]),_:1})}var c={components:{}},o=(n("e1a0"),n("6b0d")),r=n.n(o);const u=r()(c,[["render",s]]);var l=u,i=n("6605");const b=e=>(Object(a["x"])("data-v-1f538cf0"),e=e(),Object(a["v"])(),e),d={key:0,class:"login"},p=b(()=>Object(a["g"])("h1",{class:"login__title"},"Авторизация",-1)),O=b(()=>Object(a["g"])("input",{class:"button",type:"submit",value:"Войти"},null,-1)),f={key:1,class:"chat"},j={class:"chat__header"},m=b(()=>Object(a["g"])("div",{class:"tooltip"},"Полностью сотрёт весь чат из базы и разлогинит пользователя",-1)),g={class:"chat__title"},v={class:"page__container"},h={class:"chat__wrapper"},_={key:0,class:"chat__messages"},y={class:"message__inner"},w={class:"username"},k={class:"time"},S={class:"content"},M={key:1},P=b(()=>Object(a["g"])("input",{class:"button",type:"submit",value:"Отправить"},null,-1));function x(e,t,n,s,c,o){return Object(a["u"])(),Object(a["f"])("div",null,[""===s.state.username||null===s.state.username?(Object(a["u"])(),Object(a["f"])("div",d,[Object(a["g"])("form",{class:"login__form",onSubmit:t[1]||(t[1]=Object(a["K"])((...e)=>s.Login&&s.Login(...e),["prevent"]))},[p,Object(a["J"])(Object(a["g"])("input",{class:"login__input",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.inputUserName=e),placeholder:"Юзернейм"},null,512),[[a["G"],s.inputUserName]]),O],32)])):(Object(a["u"])(),Object(a["f"])("div",f,[Object(a["g"])("header",j,[Object(a["g"])("button",{class:"kill button",onClick:t[2]||(t[2]=(...e)=>s.UsersDiePlz&&s.UsersDiePlz(...e))},[Object(a["h"])(" UsersDiePlz() "),m]),Object(a["g"])("h1",g,"Привет, "+Object(a["E"])(s.state.username)+"!",1),Object(a["g"])("button",{class:"logout button",onClick:t[3]||(t[3]=(...e)=>s.Logout&&s.Logout(...e))},"Logout")]),Object(a["g"])("div",v,[Object(a["g"])("div",h,[s.state.messages.length>0?(Object(a["u"])(),Object(a["f"])("ul",_,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(s.state.messages,e=>(Object(a["u"])(),Object(a["f"])("li",{key:e.key,class:Object(a["p"])(e.username==s.state.username?"chat__message current-user":"chat__message")},[Object(a["g"])("div",y,[Object(a["g"])("div",w,Object(a["E"])(e.username),1),Object(a["g"])("div",k,Object(a["E"])(e.time),1),Object(a["g"])("div",S,Object(a["E"])(e.content),1)])],2))),128))])):(Object(a["u"])(),Object(a["f"])("p",M,"Cообщений пока нет")),Object(a["g"])("form",{class:"chat__footer",onSubmit:t[5]||(t[5]=Object(a["K"])((...e)=>s.SendMessage&&s.SendMessage(...e),["prevent"]))},[Object(a["J"])(Object(a["g"])("input",{class:"chat__textarea","onUpdate:modelValue":t[4]||(t[4]=e=>s.inputMessage=e)},null,512),[[a["G"],s.inputMessage]]),P],32)])])]))])}n("14d9");var U=n("aedf");n("3672");const z={apiKey:"AIzaSyA0_aOxgThszUwPZOCuXtEm35Rt8qENvnM",authDomain:"awesome-chat-f4723.firebaseapp.com",projectId:"awesome-chat-f4723",storageBucket:"awesome-chat-f4723.appspot.com",messagingSenderId:"486683733703",appId:"1:486683733703:web:528d1eddafc511466ad8e2"},I=U["a"].initializeApp(z);var L=I,E={setup(){const e=Object(a["z"])(""),t=Object(a["z"])(""),n=Object(a["y"])({username:"",messages:[]}),s=()=>{""==e.value&&null==e.value||(n.username=e.value,e.value="")},c=()=>{n.username=""},o=()=>{const e=L.database().ref("messages");e.remove(),window.location.reload()},r=()=>{const e=L.database().ref("messages");if(""===t.value||null===t.value)return;let a=new Date;const s={username:n.username,content:t.value,time:a.toLocaleString().replace(",","")};e.push(s),t.value=""};return Object(a["s"])(()=>{const e=L.database().ref("messages");e.on("value",e=>{const t=e.val();let a=[];Object.keys(t).forEach(e=>{a.push({id:e,username:t[e].username,content:t[e].content,time:t[e].time})}),n.messages=a})}),{inputUserName:e,Login:s,Logout:c,state:n,SendMessage:r,inputMessage:t,UsersDiePlz:o}}};n("78c7");const C=r()(E,[["render",x],["__scopeId","data-v-1f538cf0"]]);var D=C;const A=[{path:"/",name:"Index",component:D}],J=Object(i["a"])({history:Object(i["b"])("/"),routes:A});var N=J,K=n("5502"),T=Object(K["a"])({state:{mobMenuIsOpen:!1},mutations:{},actions:{},getters:{}}),B=n("ad3d"),G=n("be33"),V=n("11ca");G["c"].add(V["c"]),G["c"].add(V["d"]),G["c"].add(V["f"]),G["c"].add(V["b"]),G["c"].add(V["e"]),G["c"].add(V["a"]);var q=B["a"],H=n("41f2"),R=n.n(H);const X=Object(a["d"])(l);X.use(T),X.use(N),X.use(R.a,{duration:1e3,offset:-30,updateHistory:!1}),X.component("font-awesome",q),X.mount("#app")},"666c":function(e,t,n){},"78c7":function(e,t,n){"use strict";n("666c")},d831:function(e,t,n){},e1a0:function(e,t,n){"use strict";n("d831")}});
//# sourceMappingURL=app.bccdb90f.js.map