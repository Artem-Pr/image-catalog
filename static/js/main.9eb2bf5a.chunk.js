(this["webpackJsonpimage-catalog"]=this["webpackJsonpimage-catalog"]||[]).push([[0],{30:function(e,a,t){e.exports=t(63)},35:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(10),l=t.n(c),o=(t(35),t(13)),i=t.n(o),s=t(29),u=t(27),m=t(8),g=t(64),d=t(65),p=t(66),f=function(e){var a=e.handleSearchClick,t=e.handleGroupClick,c=e.handleClearClick,l=e.handleImageClick,o=e.isLoading,i=e.searchTag,s=e.group,u=Object(n.useState)(i),f=Object(m.a)(u,2),h=f[0],E=f[1];return Object(n.useEffect)((function(){E(i)}),[i]),r.a.createElement("header",{className:"mt-3 mb-3"},r.a.createElement(g.a,{className:"d-flex flex-sm-nowrap"},r.a.createElement(d.a,{className:"mr-2",type:"text",name:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433",value:h,onBlur:function(e){return l(e,h)},onChange:function(e){return E(e.target.value)}}),r.a.createElement(p.a,{className:"mr-2",color:"success",disabled:o,onClick:function(e){return a(e,h)}},o?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"),r.a.createElement(p.a,{className:"mr-2",color:"danger",onClick:c},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),r.a.createElement(p.a,{color:"primary",onClick:t},s?"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))},h=t(28),E=t.n(h).a.create({baseURL:"https://api.giphy.com/v1/gifs"}),b=function(e){return E.get("/random",{params:{tag:e,api_key:"dc6zaTOxFJmzC"}})},v=t(71),k=t(67),O=t(68),C=function(e){var a=e.message,t=e.isOpen,n=e.setModal;return r.a.createElement("div",null,r.a.createElement(v.a,{isOpen:t},r.a.createElement(k.a,null,a),r.a.createElement(O.a,null,r.a.createElement(p.a,{color:"primary",onClick:function(){return n({open:!t,message:""})}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))},j=t(70),y=t(69),w=function(e){var a=e.imageUrl,t=e.tag,n=e.handleImageClick,c={iFrameWrapper:{width:"100%",height:"0",paddingBottom:"75%",position:"relative"},iFrame:{position:"absolute",right:"0"},iFrameButton:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:5e3}};return r.a.createElement(y.a,{sm:4,className:"border rounded"},r.a.createElement("div",{style:c.iFrameWrapper},r.a.createElement("iframe",{src:a,width:"100%",height:"100%",style:c.iFrame,frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}," "),r.a.createElement("div",{style:c.iFrameButton,onClick:function(e){return n(e,t)}}," ")))},x=function(e){var a=e.handleImageClick,t=e.data,c=e.group,l=Object(n.useState)([]),o=Object(m.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){var e={};t.forEach((function(a){return e[a.tag]=a.tag})),s(Object.values(e))}),[t]),c?r.a.createElement("section",null,r.a.createElement(g.a,null,i.map((function(e){return r.a.createElement("div",{key:e,className:"p-3 border rounded"},r.a.createElement("h3",{className:"mb-2 text-left"},e),r.a.createElement(j.a,null,t.filter((function(a){return a.tag===e})).map((function(e,t){return r.a.createElement(w,{key:t,imageUrl:e.imageUrl,tag:e.tag,handleImageClick:a})}))))})))):r.a.createElement("section",null,r.a.createElement(g.a,null,r.a.createElement(j.a,null,t.map((function(e,t){return r.a.createElement(w,{key:t,imageUrl:e.imageUrl,tag:e.tag,handleImageClick:a})})))))};var N=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),g=o[0],d=o[1],p=Object(n.useState)(!1),h=Object(m.a)(p,2),E=h[0],v=h[1],k=Object(n.useState)(!1),O=Object(m.a)(k,2),j=O[0],y=O[1],w=Object(n.useState)({open:!1,message:""}),N=Object(m.a)(w,2),S=N[0],I=N[1],F=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,b(a);case 4:if(t=e.sent,!Array.isArray(t.data.data)||t.data.data.length){e.next=7;break}throw new Error("\u041f\u043e \u0442\u0435\u0433\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e");case 7:n={imageUrl:t.data.data.embed_url,tag:a},d((function(e){return[].concat(Object(s.a)(e),[n])})),y(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),y(!1),console.log("Error - ",e.t0.message),I({open:!0,message:(r=e.t0,r.response?429===r.response.status?"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440":"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 http \u043e\u0448\u0438\u0431\u043a\u0430":r.message)});case 17:case"end":return e.stop()}var r}),e,null,[[1,12]])})));return function(a){return e.apply(this,arguments)}}(),B=function(e,a){e.preventDefault(),c(a)};return r.a.createElement("div",{className:"App"},r.a.createElement(f,{handleSearchClick:function(e,a){e.preventDefault(),a&&F(a),!a&&I({open:!0,message:'\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 "\u0442\u0435\u0433"'})},handleGroupClick:function(e){e.preventDefault(),v((function(e){return!e}))},handleClearClick:function(e){e.preventDefault(),d([])},handleImageClick:B,isLoading:j,searchTag:t,group:E}),g.length?r.a.createElement(x,{data:g,handleImageClick:B,group:E}):"",r.a.createElement(C,{isOpen:S.open,setModal:I,message:S.message}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9eb2bf5a.chunk.js.map