(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17ad264d"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var s in o){var c=n[s],f=c&&c.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(u){f.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),s=i("forEach");t.exports=a&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1e4f":function(t,e,r){t.exports=r.p+"img/logo1.78195147.svg"},"3c61":function(t,e,r){"use strict";var n=r("8915"),o=r.n(n);o.a},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=r("ae40"),s=i("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6e24":function(t,e,r){t.exports=r.p+"img/blueairlines.2e7a6ae1.svg"},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8915:function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),g=r("7b0b"),m=r("fc6a"),v=r("c04e"),h=r("5c6c"),y=r("7c73"),w=r("df75"),O=r("241c"),S=r("057f"),L=r("7418"),j=r("06cf"),P=r("9bf2"),x=r("d1e7"),E=r("9112"),C=r("6eeb"),T=r("5692"),D=r("f772"),k=r("d012"),N=r("90e3"),M=r("b622"),_=r("e538"),A=r("746f"),I=r("d44e"),V=r("69f3"),F=r("b727").forEach,G=D("hidden"),R="Symbol",$="prototype",H=M("toPrimitive"),J=V.set,q=V.getterFor(R),B=Object[$],U=o.Symbol,Q=i("JSON","stringify"),W=j.f,z=P.f,K=S.f,X=x.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),rt=T("wks"),nt=o.QObject,ot=!nt||!nt[$]||!nt[$].findChild,it=s&&u((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(B,e);n&&delete B[e],z(t,e,r),n&&t!==B&&z(B,e,n)}:z,at=function(t,e){var r=Y[t]=y(U[$]);return J(r,{type:R,tag:t,description:e}),s||(r.description=e),r},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,r){t===B&&ct(Z,e,r),p(t);var n=v(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=y(r,{enumerable:h(0,!1)})):(l(t,G)||z(t,G,h(1,{})),t[G][n]=!0),it(t,n,r)):z(t,n,r)},ft=function(t,e){p(t);var r=m(e),n=w(r).concat(pt(r));return F(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||r)},bt=function(t,e){var r=m(t),n=v(e,!0);if(r!==B||!l(Y,n)||l(Z,n)){var o=W(r,n);return!o||!l(Y,n)||l(r,G)&&r[G][n]||(o.enumerable=!0),o}},dt=function(t){var e=K(m(t)),r=[];return F(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},pt=function(t){var e=t===B,r=K(e?Z:m(t)),n=[];return F(r,(function(t){!l(Y,t)||e&&!l(B,t)||n.push(Y[t])})),n};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===B&&r.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),it(this,e,h(1,t))};return s&&ot&&it(B,e,{configurable:!0,set:r}),at(e,t)},C(U[$],"toString",(function(){return q(this).tag})),C(U,"withoutSetter",(function(t){return at(N(t),t)})),x.f=lt,P.f=ct,j.f=bt,O.f=S.f=dt,L.f=pt,_.f=function(t){return at(M(t),t)},s&&(z(U[$],"description",{configurable:!0,get:function(){return q(this).description}}),a||C(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),F(w(rt),(function(t){A(t)})),n({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(g(t))}}),Q){var gt=!c||u((function(){var t=U();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,Q.apply(null,o)}})}U[$][H]||E(U[$],H,U[$].valueOf),I(U,R),k[G]=!0},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"conta"},[n("b-col",{staticClass:"blueBanner",attrs:{lg:"7"}},[n("img",{attrs:{src:r("1e4f"),alt:""}})]),n("b-col",{staticClass:"formBanner",attrs:{lg:"5"}},[n("b-col",{staticClass:"row formTitle"},[n("img",{attrs:{src:r("6e24")}}),n("h5",[t._v("Ankasa")])]),n("b-col",[n("div",{staticClass:"login-box"},[n("h4",[t._v("Login")]),n("form",{staticClass:"formRegis",on:{submit:function(e){return e.preventDefault(),t.LogOn()}}},[n("div",{staticClass:"user-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text",required:""},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),n("label",[t._v("Username")])]),n("div",{staticClass:"user-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),n("label",[t._v("Password")])]),n("b-button",{staticClass:"mt-3 b-SignIn",attrs:{type:"submit",block:""}},[t._v("Sign In")])],1),n("br"),n("p",{staticStyle:{color:"#4d4d4d","text-align":"center","padding-bottom":"0px","margin-bottom":"0px"}},[t._v(" Did you forgot password? ")]),n("a",{staticStyle:{"margin-left":"65px"},attrs:{href:"/forgotpass"}},[t._v("Tap here for reset")])])])],1)],1)],1)},o=[],i=r("5530"),a=r("2f62"),s={title:"Ankasa | Log In",data:function(){return{form:{username:null,password:null}}},methods:Object(i["a"])({LogOn:function(){var t=this;this.onSignIn(this.form).then((function(e){e.length<1?t.$swal("Failed","Username or password is wrong","error"):window.location="/"})).catch((function(e){t.$swal("Failed",e,"error")}))}},Object(a["b"])({onSignIn:"auth/login"}))},c=s,f=(r("3c61"),r("2877")),u=Object(f["a"])(c,n,o,!1,null,"3d305471",null);e["default"]=u.exports},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),s=a((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=s.f,f=i(n),u={},l=0;while(f.length>l)r=o(n,e=f[l++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,s=r("83ab"),c=o((function(){a(1)})),f=!s||c;n({target:"Object",stat:!0,forced:f,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-17ad264d.78c4129a.js.map