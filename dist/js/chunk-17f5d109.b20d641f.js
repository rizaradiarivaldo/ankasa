(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17f5d109"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},1276:function(t,e,r){"use strict";var n=r("d784"),i=r("44e7"),o=r("825a"),a=r("1d80"),c=r("4840"),s=r("8aa5"),u=r("50c4"),l=r("14c3"),f=r("9263"),p=r("d039"),d=[].push,g=Math.min,b=4294967295,v=!p((function(){return!RegExp(b,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),o=void 0===r?b:r>>>0;if(0===o)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,o);var c,s,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,p+"g");while(c=f.call(v,n)){if(s=v.lastIndex,s>g&&(l.push(n.slice(g,c.index)),c.length>1&&c.index<n.length&&d.apply(l,c.slice(1)),u=c[0].length,g=s,l.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return g===n.length?!u&&v.test("")||l.push(""):l.push(n.slice(g)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,r):n.call(String(i),e,r)},function(t,i){var a=r(n,t,this,i,n!==e);if(a.done)return a.value;var f=o(t),p=String(this),d=c(f,RegExp),h=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new d(v?f:"^(?:"+f.source+")",m),x=void 0===i?b:i>>>0;if(0===x)return[];if(0===p.length)return null===l(y,p)?[p]:[];var w=0,S=0,E=[];while(S<p.length){y.lastIndex=v?S:0;var O,P=l(y,v?p:p.slice(S));if(null===P||(O=g(u(y.lastIndex+(v?0:S)),p.length))===w)S=s(p,S,h);else{if(E.push(p.slice(w,S)),E.length===x)return E;for(var j=1;j<=P.length-1;j++)if(E.push(P[j]),E.length===x)return E;S=w=O}}return E.push(p.slice(w)),E}]}),!v)},"148c":function(t,e,r){},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1e4f":function(t,e,r){t.exports=r.p+"img/logo1.78195147.svg"},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),o=r("b622"),a=o("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=r("ae40"),c=o("filter"),s=a("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"5c9c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"conta"},[n("b-col",{staticClass:"blueBanner",attrs:{lg:"7"}},[n("img",{attrs:{src:r("1e4f"),alt:""}})]),n("b-col",{staticClass:"formBanner",attrs:{lg:"5"}},[n("b-col",{staticClass:"row formTitle"},[n("img",{attrs:{src:r("6e24")}}),n("h5",[t._v("Ankasa")])]),n("b-col",[n("div",{staticClass:"login-box"},[n("h4",[t._v("Register")]),n("form",{staticClass:"formRegis",on:{submit:function(e){return e.preventDefault(),t.loadOnce(e)}}},[n("div",{staticClass:"user-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text",name:"",required:""},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),n("label",[t._v("Username")])]),n("div",{staticClass:"user-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",name:"",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),n("label",[t._v("Email")])]),n("div",{staticClass:"user-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",name:"",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),n("label",[t._v("Password")])]),n("b-button",{staticClass:"mt-3 b-Signup",attrs:{type:"submit",block:""}},[t._v("Sign Up")])],1),n("div",{staticClass:"form-check checkalign mt-3"},[n("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),n("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Accept terms and condition")])]),n("hr",{staticStyle:{border:"1px solid #D8D8D8"}}),n("p",{staticStyle:{color:"#4D4D4D","text-align":"center"}},[t._v("Already have an account?")]),n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/login"}},[n("b-button",{staticClass:"mt-3 b-Signin",attrs:{type:"submit",block:""}},[t._v("Sign In")])],1)],1)])],1)],1)],1)},i=[],o=(r("a15b"),r("ac1f"),r("1276"),r("5530")),a=r("2f62"),c={data:function(){return{form:{username:null,email:null,password:null}}},methods:Object(o["a"])({loadOnce:function(){var t=this,e={username:this.form.username.split(" ").join(""),email:this.form.email,password:this.form.password};this.onSignUp(e).then((function(e){"Email Already Exist"===e.message?t.$swal("Register","Username or Email already exist","error"):"Register success, please check your email for activation"===e.message&&(t.$swal("Register","You successfully Register, please check your email for activation","success"),setTimeout((function(){window.location="/login"}),2e3))})).catch((function(t){console.log(t)}))}},Object(a["b"])({onSignUp:"auth/register"}))},s=c,u=(r("8fdf"),r("2877")),l=Object(u["a"])(s,n,i,!1,null,"51b0de85",null);e["default"]=l.exports},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,c=String(i(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"6e24":function(t,e,r){t.exports=r.p+"img/blueairlines.2e7a6ae1.svg"},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8fdf":function(t,e,r){"use strict";var n=r("148c"),i=r.n(n);i.a},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,r,i,c,f=this,p=u&&f.sticky,d=n.call(f),g=f.source,b=0,v=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,b++),r=new RegExp("^(?:"+g+")",d)),l&&(r=new RegExp("^"+g+"$(?!\\s)",d)),s&&(e=f.lastIndex),i=o.call(p?r:f,v),p?i?(i.input=i.input.slice(b),i[0]=i[0].slice(b),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,r){"use strict";var n=r("23e7"),i=r("44ad"),o=r("fc6a"),a=r("a640"),c=[].join,s=i!=Object,u=a("join",",");n({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),p=r("e8b5"),d=r("861d"),g=r("825a"),b=r("7b0b"),v=r("fc6a"),h=r("c04e"),m=r("5c6c"),y=r("7c73"),x=r("df75"),w=r("241c"),S=r("057f"),E=r("7418"),O=r("06cf"),P=r("9bf2"),j=r("d1e7"),C=r("9112"),R=r("6eeb"),L=r("5692"),k=r("f772"),T=r("d012"),D=r("90e3"),A=r("b622"),I=r("e538"),_=r("746f"),N=r("d44e"),U=r("69f3"),$=r("b727").forEach,M=k("hidden"),G="Symbol",V="prototype",B=A("toPrimitive"),F=U.set,q=U.getterFor(G),H=Object[V],J=i.Symbol,K=o("JSON","stringify"),Y=O.f,Q=P.f,W=S.f,X=j.f,z=L("symbols"),Z=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),rt=L("wks"),nt=i.QObject,it=!nt||!nt[V]||!nt[V].findChild,ot=c&&l((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(H,e);n&&delete H[e],Q(t,e,r),n&&t!==H&&Q(H,e,n)}:Q,at=function(t,e){var r=z[t]=y(J[V]);return F(r,{type:G,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},st=function(t,e,r){t===H&&st(Z,e,r),g(t);var n=h(e,!0);return g(r),f(z,n)?(r.enumerable?(f(t,M)&&t[M][n]&&(t[M][n]=!1),r=y(r,{enumerable:m(0,!1)})):(f(t,M)||Q(t,M,m(1,{})),t[M][n]=!0),ot(t,n,r)):Q(t,n,r)},ut=function(t,e){g(t);var r=v(e),n=x(r).concat(gt(r));return $(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===H&&f(z,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(z,e)||f(this,M)&&this[M][e])||r)},pt=function(t,e){var r=v(t),n=h(e,!0);if(r!==H||!f(z,n)||f(Z,n)){var i=Y(r,n);return!i||!f(z,n)||f(r,M)&&r[M][n]||(i.enumerable=!0),i}},dt=function(t){var e=W(v(t)),r=[];return $(e,(function(t){f(z,t)||f(T,t)||r.push(t)})),r},gt=function(t){var e=t===H,r=W(e?Z:v(t)),n=[];return $(r,(function(t){!f(z,t)||e&&!f(H,t)||n.push(z[t])})),n};if(s||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===H&&r.call(Z,t),f(this,M)&&f(this[M],e)&&(this[M][e]=!1),ot(this,e,m(1,t))};return c&&it&&ot(H,e,{configurable:!0,set:r}),at(e,t)},R(J[V],"toString",(function(){return q(this).tag})),R(J,"withoutSetter",(function(t){return at(D(t),t)})),j.f=ft,P.f=st,O.f=pt,w.f=S.f=dt,E.f=gt,I.f=function(t){return at(A(t),t)},c&&(Q(J[V],"description",{configurable:!0,get:function(){return q(this).description}}),a||R(H,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:J}),$(x(rt),(function(t){_(t)})),n({target:G,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=J(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:l((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(b(t))}}),K){var bt=!s||l((function(){var t=J();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,K.apply(null,i)}})}J[V][B]||C(J[V],B,J[V].valueOf),N(J,G),T[M]=!0},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),o=r("b622"),a=r("9263"),c=r("9112"),s=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var g=o(t),b=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),v=b&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return e=!0,null},r[g](""),!e}));if(!b||!v||"replace"===t&&(!u||!l||p)||"split"===t&&!d){var h=/./[g],m=r(g,""[t],(function(t,e,r,n,i){return e.exec===a?b&&!i?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=m[0],x=m[1];n(String.prototype,t,y),n(RegExp.prototype,g,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&c(RegExp.prototype[g],"sham",!0)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,u=o(n),l={},f=0;while(u.length>f)r=i(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-17f5d109.b20d641f.js.map