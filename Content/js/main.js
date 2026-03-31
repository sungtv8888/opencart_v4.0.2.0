/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*
post(methodServer, data, callback)
+ Ajax Post
- methodServer: Phương thức ở server cần được gọi
- data: dữ liệu cần truyền đi ví dụ: {name: "Nguyễn Văn A", age: 20}
- callback: phương thức xử lý sau khi thực hiện request thành công

get(methodServer, data, callback)
+ Ajax Get: giống Ajax Post, phương thức thực hiện là GET

doPostTimer(methodServer, data, timeInterval, process, waiting, endWhen)
+ Thực hiện một phương thức ajax mà lặp đi lặp lại theo một chu kỳ
- methodServer: Phương thức ở server cần được gọi
- data: dữ liệu cần gửi đi từ client
- timeInterval: chu kỳ cần lặp
- process: phương thức xử lý sau khi thực hiện request thành công
- waiting: phương thức để gợi ý là có thực hiện đợi một chờ một vấn đề gì đó khi thực hiện chu kỳ tiếp theo hay không
- endWhen: phương thức đưa ra điều kiện khi nào thì sẽ dừng, không lặp lại nữa

clearThreadGet(methodServer)
clearThreadPOST(methodServer)
+ Clear thread thực hiện methodServer

*/

/* Class để thực hiện các function ajax */
function CoreAjax(typeAction_)
{
    // Đây là Assembly chứa đối tượng có phương thức ajax
    // this.assembly = "Core.FrontEnd.ijvnTravel.com"; // Mặc định
    this.assembly = "";
    // Type của đối tượng chứa phương thức ajax trong Assembly
    this.typeAction = typeAction_;

    this.createRequestUrl = function(method)
    {
        return "/Common/Services/Ajax.aspx?_n=" + this.assembly + "&_o=" + encodeURIComponent(this.typeAction) + "&_m=" + method + "&lang=" + $("[data-language]").attr("data-language");
    }

    var DownloadResult = function()
    {
        this.request = null; this.popup = null; this.doing = false;
        var timeout = null;
        this.start = function()
        {
            var $this = this;
            $this.doing = true;
            timeout = setTimeout(function () { $this.popup = CoreAlert("Đang thực hiện tải tệp", function () { $this.abort(); }); }, 1000);            
        }
        this.abort = function()
        {
            if(this.request != null && this.doing) { this.request.abort(); this.end(); }
        }
        this.end = function()
        {
            if (timeout != null) { clearTimeout(timeout); timeout = null; }
            if (this.popup != null) { this.doing = false; this.popup.hide(); }
        }
    }

    // thực hiện method download file
    this.download = function(method, data, callback, onerror)
    {
        var result = new DownloadResult();
        result.start();

        var $this = this;
        result.request = $.fileDownload(this.createRequestUrl(method),
        {
            httpMethod: "POST",
            data: data,
            successCallback: function (url)
            {
                if (callback != null) callback(url); result.end();
            },
            failCallback: function (r)
            {
                eval("var res = " + arguments[0]);
                if (onerror != null) onerror(res);
                else Core.alert(res.Data.MessageError);
                result.end();
            }
        });

        return result;
    }

    // Timer để check việc hiển thị thông báo trong quá trình gọi ajax
    this.timer = null;
    this.currentOverlay = null;
    this.templateOverlay = "<div class='overlay-loading'><i class='fa fa-spinner fa-spin fa-2x'></i></div>";    
    this.userOverlay = true;
    this.alertWhenFail = true;

    this.post = function (methodServer, data, callback, onerror, options) { return this.doAjax("POST", methodServer, data, callback, onerror, options); }
    this.post2 = function (methodServer, data, callback, onerror, options)
    {
        if (data != null)
        {
            var newData = {};
            var keys = Object.keys(data);
            for (var i = 0; i < keys.length; i++)
            {
                newData[keys[i]] = JSON.stringify(data[keys[i]]);
            }

            // Enumerable.From(data).ForEach(function (item) { newData[item.Key] = JSON.stringify(item.Value); });
            data = newData;
        }
        this.post(methodServer, data, callback, onerror, options);
    }
    this.get = function (methodServer, data, callback, onerror, options) { return this.doAjax("GET", methodServer, data, callback, onerror, options); }

    this.clearOverlay = function()
    {
        if (this.timer != null) clearTimeout(this.timer);
        if (this.currentOverlay != null) this.currentOverlay.remove();
    }

    // Thực hiện một request ajax
    this.doAjax = function (methodAjax, methodServer, data, callback, onerror, options) 
    {
        // Url thực hiện request ajax
        var urlRequest = this.createRequestUrl(methodServer);
        return this.doAjaxHelper(methodAjax, "json", urlRequest, data, callback, onerror, options);
    }
    this.doAjaxHelper = function (methodAjax, dataType, urlRequest, data, callback, onerror, options)
    {
        var $this = this;

        // Clear việc đang chờ hiển thị message lúc trước đi
        $this.clearOverlay();

        if (options == null) options = {};

        // kiểm tra xem data có phải là một function lấy data hay không
        // nếu là một function lấy data thì thực hiện lấy data
        var dataPost = typeof (data) == "function" ? data() : data;
        if (dataPost == null) dataPost = {};
        //dataPost.path = window.location.pathname + window.location.search;
        var request = $.ajax({ url: urlRequest, type: methodAjax, data: dataPost, dataType: dataType });

        // Nếu như request thực hiện thành công
        request.done(function (res)
        {
            if (res.Data != null)
            {
                if (res.Data.ErrorType == "EndException" || res.Data.ErrorTypeInner == "EndException");
                else if (res.Data.MessageError != null) // Có lỗi về action trong method gọi đến
                {
                    if (res.Data.ErrorType == "NotAuthenException" || res.Data.ErrorTypeInner == "NotAuthenException")
                    {
                        window.location.href = "/Login.aspx";
                        return;
                    }
                    if (onerror != null) onerror(res);
                    else Core.alert(res.Data.MessageError);
                    $this.clearOverlay(); 
                    return;
                }
                eval(res.JavaScript); // Thực hiện xử lý javascript mà server gửi về cho client
            }
            if (callback != null) callback(res); // Nếu có xử lý sau khi kết thúc request theo ý người lập trình
            
            $this.clearOverlay(); 
        }).fail(function (jqXHR, textStatus)
        {
            $this.clearOverlay();
            if (textStatus == "abort") return;

           // if ($this.alertWhenFail) Core.alert("Không thể kết nối tới Server. Vui lòng thử lại", "error");
            if (onerror != null) onerror();
        });

        // Thực hiện hiển thị message, nếu như quá trình đang thực hiện request quá 500ms
        if ($this.userOverlay || options.userOverlay == true)
            $this.timer = setTimeout(function () { $('body').append($this.currentOverlay = $($this.templateOverlay)); }, 500);

        return request;
    }
        
    this.doPostTimer = function (methodServer, data, timeInterval, process, waiting, endWhen) { this.clearThread("POST", methodServer); this.doTimer("POST", methodServer, data, timeInterval, null, process, waiting, endWhen); };
    this.doGetTimer = function (methodServer, data, timeInterval, process, waiting, endWhen) { this.clearThread("GET", methodServer); this.doTimer("GET", methodServer, data, timeInterval, null, process, waiting, endWhen); };

    // ajax timer, dùng để thực hiện một phương thức theo một chu kỳ, có tính toán độ trễ qua từng request
    this.doTimer = function (methodAjax, methodServer, data, timeInterval, lastRequest, process, waiting, endWhen) 
    {
        this.threadDoAjax(methodAjax, methodServer, data, process, lastRequest, timeInterval, waiting, endWhen);
    }

    this.doPostTimeout = function(methodServer, data, timeInterval, process) { this.doTimeout("POST", methodServer, data, timeInterval, process); }
    this.doGetTimeout = function(methodServer, data, timeInterval, process) { this.doTimeout("GET", methodServer, data, timeInterval, process); }
    this.doTimeout = function (methodAjax, methodServer, data, timeInterval, process) { this.clearThread(methodAjax, methodServer); this.doTimer(methodAjax, methodServer, data, timeInterval, null, process, null, function () { return true; }); };

    // Lưu trữ các timer thread đang chạy
    this.threadTimer = {};
    this.threadTimerAjax = {};

    // Thực hiện xử lý cụ thể trong doTimer
    // endWhen: Khi phương thức trả về false thì kết thúc thread luôn
    this.threadDoAjax = function (methodAjax, methodServer, data, process, lastRequest, timeInterval, waiting, endWhen) 
    {
        // Đối tượng ShAjax đang được sử dụng
        var $this = this;

        // nếu có sự kiện thực hiện đợi chờ một việc gì đó thì dừng lại chờ
        if (waiting != null && waiting()) 
        {
            // request lại cho đến khi thoát khỏi waiting
            $this.smoothingThread(lastRequest, methodAjax, methodServer, data, timeInterval, process, waiting, endWhen);
            return;
        }

        // Thực hiện ajax
        $this.threadTimerAjax[methodAjax + "_" + methodServer] = $this.doAjax(methodAjax, methodServer, data, function (res) 
        {
            // Nếu có sử lý sau khi gọi phương thức ajax thì gọi process
            if (process != null) process(res);

            // nếu như có function để kiểm tra việc kết thúc thread thì gọi đến nó
            if (endWhen != null && endWhen(res)) 
            {
                $this.clearThread(methodAjax, methodServer);
                return;
            }

            // làm mượt chu kỳ thread
            $this.smoothingThread(lastRequest, methodAjax, methodServer, data, timeInterval, process, waiting, endWhen);
        });
    }
    // phương thức làm mượt thread
    this.smoothingThread = function (lastRequest, methodAjax, methodServer, data, timeInterval, process, waiting, endWhen) 
    {
        var $this = this;

        // clear lại timeout trước đó đi
        $this.clearThread(methodAjax, methodServer);

        // Tính toán lại thời gian thực hiện request
        // Đảm bảo cứ sau timeInterval sẽ thực hiện một lần
        var ti = lastRequest == null ? timeInterval : timeInterval - (new Date() - lastRequest);

        // Nếu mà thời gian thực hiện trước đó mà lớn hơn cả chu kỳ thì lấy lại là 20s
        ti = ti <= 0 ? timeInterval : ti;

        // thiết lập lại ngày giờ lần cuối cùng thực hiện request
        lastRequest = new Date();

        // setTimeout để chạy chu trình tiếp theo
        $this.threadTimer[methodAjax + "_" + methodServer] = setTimeout(function () { $this.doTimer(methodAjax, methodServer, data, timeInterval, lastRequest, process, waiting, endWhen); }, ti);
    }
    
    this.getTimerGetOf = function (methodServer) { return this.threadTimer["GET_" + methodServer]; };
    this.getTimerPostOf = function (methodServer) { return this.threadTimer["POST_" + methodServer]; };
    this.clearThreadGet = function (methodServer) { this.clearThread("GET", methodServer); }
    this.clearThreadPOST = function (methodServer) { this.clearThread("POST", methodServer); }

    // clear timer of thread 
    this.clearThread = function (methodAjax, methodServer)
    {
        var request = this.threadTimerAjax[methodAjax + "_" + methodServer];
        if (request != null)
        {
            request.abort();
            this.threadTimerAjax[methodAjax + "_" + methodServer] = null;
        }

        // Lấy ra timer của phương thức ajax đang gọi
        var thisTimer = this.threadTimer[methodAjax + "_" + methodServer];
        if (thisTimer != null) 
        {            
            clearTimeout(thisTimer);
            this.threadTimer[methodAjax + "_" + methodServer] = null;
        }
    }
}

jQuery.cachedScript = function (url, options) {

    // Allow user to set any option except for dataType, cache, and url
    options = $.extend(options || {}, {
        dataType: "script",
        //cache: true,
        cache: false,
        url: url
    });

    // Use $.ajax() since it is more flexible than $.getScript
    // Return the jqXHR object so we can chain callbacks
    return jQuery.ajax(options);
};

//$.fn.serializeData = function()
//{
//    var form = $("<form>");
//    return JSON.stringify(form.append(this.html()).serializeArray());
//}
String.prototype.format = function ()
{
	var content = this;
	for (var i = 0; i < arguments.length; i++)
	{
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		content = content.replace(reg, arguments[i]);
	}
	return content;
};

function Core() { }
Core.goto = function (selector, delta)
{
	if (delta == null) delta = 0;
	if (typeof (selector) == "string") selector = $(selector);
	$('html,body').animate({ scrollTop: selector.offset().top + delta + "px" }, 500);
};
Core.random = function (number) { return parseInt(Math.random() * number); };
Core.replace = function (str, s1, s2, ignore) { return str.replace(new RegExp(s1, ignore ? "gi" : "g"), s2); };
Core.getSizeName = function ()
{
	var screen_size = '', screen_w = jQuery(window).width();
	if (screen_w > 1170) screen_size = "desktop_wide";
	else if (screen_w > 960 && screen_w <= 1169) screen_size = "desktop";
	else if (screen_w > 768 && screen_w <= 959) screen_size = "tablet";
	else if (screen_w > 300 && screen_w <= 767) screen_size = "mobile";
	else if (screen_w <= 300) screen_size = "mobile_portrait";
	return screen_size;
};
Core.isMobile = function () { var screen_size = Core.getSizeName(); return screen_size == "mobile" || screen_size == "mobile_portrait"; };


Core.isEmail = function (email) { var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; return regex.test(email); };
Core.isPhoneNumber = function (phone) { var regex = /[0-9\-\(\)\s]+/; return regex.test(phone); };
Core.isTablet = function () { return Core.getSizeName() == "tablet"; }
Core.loadModule = function (main, module, func, data, userOverlay, alertWhenFail)
{
	var ajax = new CoreAjax("Common.Modules.ModuleLoader");

	if (userOverlay == null) userOverlay = true; ajax.userOverlay = userOverlay;
	if (alertWhenFail == null) alertWhenFail = true; ajax.alertWhenFail = alertWhenFail;

	var dataPost = { control: module };
	if (data != null) $.extend(dataPost, data);

	ajax.post("LoadModuleByControl", dataPost, function (res)
	{
		if (main != null) main.html(res.Data.ModuleContent);
		Core.getScriptsNeedLoad(res.Data.Scripts, function () { if (func != null) func(res); });
	});
};
$.fn.loadModule = function (module, func, data, options, userOverlay, alertWhenFail) { Core.loadModule(this, module, func, data, options, userOverlay, alertWhenFail); };
Core.alert = function (content, func) { CoreAlert(content, func); };
Core.confirm = function (content, yes, no) { CoreAlertConfirm(content, yes, no); };
Core.getLabel = function (lexicon) { return lexicon; };
$.fn.btnClick = function (loading, action) { var $this = this; this.click(function (e) { e.preventDefault(); if (loading) $this.button('loading'); action($this); }); this.done = function () { $this.button('reset'); }; };
Core.cacheScripts = [];
Core.getScriptsNeedLoad = function (scripts, callback)
{
	if (scripts == null)
	{
		callback();
		return;
	}

	var paths = [];
	for (var i = 0; i < scripts.length; i++)
	{
		if (Core.cacheScripts.indexOf(scripts[i]) < 0)
			paths.push(scripts[i]);
	}

	Core.loadScripts(paths, function ()
	{
		for (var i = 0; i < paths.length; i++)
			Core.cacheScripts.push(paths[i]);
		callback();
	});
};
Core.loadScripts = function (scripts, onfinish)
{
	var length = scripts == null ? 0 : scripts.length;
	if (length == 0)
	{
		onfinish();
		return;
	}
	var fload = function (i) {
		$.cachedScript(scripts[i], {
			success: function (js, status) {
				i++;
				if (i >= length) onfinish();
				else fload(i);
			}
		});
	};
	fload(0);
};
Core.Module = { ajax: new CoreAjax("Common.Modules.ModuleLoader") };
Core.Module.load = function (module, data, func) {
	var dataPost = { control: module };
	if (data != null) $.extend(dataPost, data);
	Core.Module.ajax.post("LoadModuleByControl", dataPost, func);
};

$.fn.getValues = function (notSelector)
{
	var params = {};

	if (notSelector == undefined || notSelector == null) notSelector = "";

	var normalInput = this.find("input[type='text'][name], input[type='hidden'][name], input[type='number'][name],input[type='radio'][name]:checked, input[type='password'][name], select[name], textarea[name], input[type='email'][name]");
	if (notSelector != "") normalInput = normalInput.filter(function () { return $(this).parents(notSelector).length == 0; });
	normalInput.each(function () { params[$(this).attr("name")] = $(this).val(); });

	var checkbox = this.find("input[type='checkbox'][name]:not([data-group])");
	if (notSelector != "") checkbox = checkbox.filter(function () { return $(this).parents(notSelector).length == 0; });
	checkbox.each(function () { params[$(this).attr("name")] = this.checked; });
	
	return params;
};
$.fn.fillForm = function (values, notSelector)
{
	if (notSelector == undefined || notSelector == null) notSelector = "";
	for (var key in values)
	{
		var inputNormal = this.find("input[type='hidden'][name='" + key + "'], input[type='text'][name='" + key + "']:not([data-type-date]), input[type='password'][name='" + key + "'], select[name='" + key + "'], textarea[name='" + key + "']");
		if (notSelector != "") inputNormal = inputNormal.filter(function () { return $(this).parents(notSelector).length == 0; });
		inputNormal.val(values[key]);
	}
	return this;
};
$.fn.inputKeypress = function (func, options)
{
	var $this = this;
	var t = null;

	if (options == null) options = {};
	if (options.time == null) options.time = 200;

	var run = function (input, event, blur)
	{
		if (t != null) clearTimeout(t);
		t = setTimeout(function ()
		{
			if (input.attr("data-text-current") != input.val())
			{
				func($this, input);
				input.attr("data-text-current", input.val());
				input.trigger("sh-text-change");
			}
			else
			{
				if (blur == null) blur = false;
				if (!blur)
				{
					if (event != null)
					{
						if (event.keyCode == 8)
						{
							if (options.onBackspaceEmpty != null)
								options.onBackspaceEmpty($this);
						}
					}
					else
					{
						if (options.onNoChange != null) options.onNoChange($this);
					}
				}
			}
			t = null;
		}, options.time);
	};

	if (options.onFocus == null) options.onFocus = function ($this) { };
	if (options.onBlur == null) options.onBlur = function ($this) { run($this, null, true); };

	//this.on("input", function () { run(); });
	this.focus(function ()
	{
		var $this = $(this);
		$this.attr("data-text-current", $this.val());
		options.onFocus($this);
	});
	this.blur(function () { options.onBlur($(this)); });
	this.keypress(function (event) { run($(this)); });
	this.keyup(function (event)
	{		
		if (event.keyCode == 8 || event.keyCode == 46)
			run($(this), event);
	});
	this.on("t-back", function () { run($(this)); });
};
$.fn.getValueNumber = function () {
	if (this.length == 0) return 0;
	var value = Core.replace(this.val(), ",", "");
	value = $.trim(value);
	if (value == "") return 0;
	return parseFloat(value);
};
$.fn.bindCmd = function (target, cmd)
{
	if (cmd == null || cmd == "") cmd = "data-cmd";
	this.find('[' + cmd + ']').click(function () { target[$(this).attr(cmd)].bind(target)($(this)); });
	this.find('select[' + cmd + ']').change(function () { target[$(this).attr(cmd)].bind(target)($(this)); });
};
$.fn.setFocus = function ()
{
	if (this.length == 0) return;
	var length = this.val().length;
	this.focus();
	this[0].setSelectionRange(length, length);
}
Core.addFbSDK = function ()
{
	var sdk = $("script#facebook-jssdk");
	if (sdk.length == 0)
	{
		var appId = $("meta[property='fb:app_id']").attr("content");

		(function (d, s, id)
		{
			var language = $("[data-language-flag]").attr("data-language-flag");
			if (language == "vn") language = "vi_VN";
			else language = "en_US";

			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/" + language + "/sdk.js#xfbml=1&version=v3.2&appId=" + appId;
			fjs.parentNode.insertBefore(js, fjs);
		}
			(document, 'script', 'facebook-jssdk'));
		window.fbAsyncInit = function () {
			FB.init({
				appId: appId,
				status: true,
				xfbml: true,
				cookie: true,
				version: 'v3.2'
			});
		};
	}
};
$.fn.getQuery = function () { var query = null; eval("query = " + this.find("[data-query=page]").html()); return query; };
$(function () { Core.addFbSDK(); });
$(function ()
{
	var container = $("body");
	var currentPageLoad = null;
	var runPageLoad = function (query, content, page) {
		var ajaxLoading = query != null;
		if (query == null) query = container.getQuery();

		var page0 = "PageBase." + query.UrlEngine;
		page1 = page0 + "_" + query.prefix;

		if (currentPageLoad != null) {
			currentPageLoad.unLoad();
			currentPageLoad.afterUnload();
			currentPageLoad = null;
		}

		var js = "try { currentPageLoad = new " + page1 + "(); } catch(ex) { try { currentPageLoad = new " + page0 + "(); } catch(ex) { currentPageLoad = PageBase.DefaultPageLoadInstance(); } }";
		eval(js);

		currentPageLoad.container = container;
		currentPageLoad.query = query;
		currentPageLoad.content = content;
		currentPageLoad.page = page;
		currentPageLoad.ajaxLoading = ajaxLoading;
		currentPageLoad.load();
	};
	runPageLoad();

	var ajax = new CoreAjax();
	
});
function PageBase() { }
PageBase.DefaultPageLoad = function ()
{
	this.container = null;
	this.content = null;
	this.page = null;
	this.query = null;
	this.load = function ()
	{
		if (this.content != null)
		{
			var fbroot = this.container.find("#fb-root");

			this.container.html(this.content.html());
			this.container.prepend(fbroot);
			this.container.removeAttr("class").removeAttr("style");

			var head = $("head");
			head.find("meta").remove();
			head.append(this.page.find("meta"));

			var gaid = head.find("meta[name=gaid]").attr("content");
			try { gtag('config', gaid, { 'page_title': document.title, 'page_path': window.location.pathname + window.location.search }); }
			catch (e) { }
		}
		
		$(window).scrollTop(0);

		var $this = this;
		this.onBeforeLoad();
		this.runElement(this.container);
		this.onLoad();
		this.container.find("[data-control-after-load]").each(function ()
		{
			var $$this = $(this);
			var ff = $this[$$this.attr("data-control-after-load")];
			if (ff != null) setTimeout(function () { ff.bind($this)($$this); });
		});
	};

	this.runElement = function (element)
	{
		this.bindControlLoad(element);
		this.loadLazy(element);
		element.bindCmd(this);
	}
	this.loadLazy = function (element)
	{
		var $this = this;
		element.find("[data-lazy]").lazyLoadElement({
			onLazy: function (element) {
				var func = element.attr("data-lazy");
				if (func == null || func == "") func = element.attr("data-lazy-func");
				if (func != null && func != "") $this[func](element);
			}
		});
	}
	this.bindControlLoad = function (element)
	{
		var $this = this;
		element.find("[data-control-load]").each(function ()
		{
			var $$this = $(this);
			var ff = $this[$$this.attr("data-control-load")];
			if (ff != null) setTimeout(function () { ff.bind($this)($$this); });
		});
	}

	this.onBeforeLoad = function () { };
	this.onLoad = function () { };
	this.unLoad = function ()
	{
		var $this = this;
		this.container.find("[data-control-unLoad]").each(function ()
		{
			var $$this = $(this);
			var ff = $this[$$this.attr("data-control-unLoad")];
			if (ff != null) ff($$this);
		});
	};
	this.afterUnload = function () { };
	this.loadFbEmbed = function (element) { if (this.ajaxLoading) FB.XFBML.parse(element[0]); };
	this.thumb = function (element)
	{
		element.bind("error", function ()
		{
			var target = $(this);
			var t = target.attr("t");
			if (t == null || t == "") target.attr("t", "1");
			else target.attr("t", eval(t) + 1);

			if (eval(target.attr("t")) >= 2) return;
			else if (eval(target.attr("t")) >= 1)
			{
				var saveFolder = "Thumb";
				var sf = "/" + saveFolder + "/";
				var rex = new RegExp(sf + "(.*)_w([0-9]+)_h([0-9]+)_([^/]+)[.]([^/]+)", "g");

				var path = target.attr("src");
				// Replace để lấy đường link cần xử lý sau khi bị lỗi
				var path = path.replace(rex, "/w$2h$3/$4_$1.$5");
				target.attr("src", path);

				// target.attr("src", "/Common/Resources/images/noimage.png");
				var width = target.attr("data-width"); if (width != null && width != "" && width != "0" && width != 0) { width = parseInt(width); target.width(width); }
				var height = target.attr("data-height"); if (height != null && height != "" && height != "0" && height != 0) { height = parseInt(height); target.height(height); }
			}
		});

		let src = element.attr("data-src");
		let srcset = element.attr("data-srcset");
		let srcStyle = element.attr("data-style");

		if ("img" === element[0].tagName.toLowerCase())
		{
			if (src)
			{
				if (srcStyle == "bg") element[0].style.backgroundImage = "url(" + src + ")";
				else element[0].src = src;
			}
			if (srcset) element[0].srcset = srcset;
		}
		else
		{
			element[0].style.backgroundImage = "url(" + src + ")";
		}
	}
};
PageBase.DefaultPageLoadInstance = function () { return new PageBase.DefaultPageLoad(); };
PageBase.reloadPage = function () { $(window).trigger("pathchange"); };

(function (root, factory)
{
	if (typeof exports === "object") module.exports = factory(root);
	else if (typeof define === "function" && define.amd) define([], factory);
	else root.LazyLoadElement = factory(root);
})(typeof global !== "undefined" ? global : this.window || this.global, function (root)
{
	"use strict";
	if (typeof define === "function" && define.amd) root = window;
	const defaults = { root: null, rootMargin: "150px", threshold: 0 };
	function LazyLoadElement(elements, options)
	{
		if (elements == null || elements.length == 0) return;

		this.settings = $.extend(defaults, options || {}, true);
		this.elements = elements;

		this.init = function ()
		{
			/* Without observers load everything and bail out early. */
			if (!root.IntersectionObserver) { this.load(); return; };
			var $this = this;
			let observerConfig = {
				root: this.settings.root,
				rootMargin: this.settings.rootMargin,
				threshold: [this.settings.threshold]
			};

			this.observer = new IntersectionObserver(function (entries)
			{
				Array.prototype.forEach.call(entries, function (entry)
				{
					if (entry.isIntersecting) {
						$this.observer.unobserve(entry.target);
						$this.loadHelper(entry.target);
					}
				});
			}, observerConfig);

			Array.prototype.forEach.call(this.elements, function (element) { $this.observer.observe(element); });
		}

		this.load = function () { var $this = this; Array.prototype.forEach.call(this.elements, function (element) { $this.loadHelper(element); }); };
		this.loadHelper = function (element) { if (this.settings.onLazy != null) this.settings.onLazy($(element)); };
		this.destroy = function () { this.observer.disconnect(); this.settings = null; };
		this.loadAndDestroy = function () { this.load(); this.destroy(); };
		this.observer = null;
		this.init();
	}
	root.lazyLoadElement = function (elements, options) { return new LazyLoadElement(elements, options); };
	if (root.jQuery)
	{
		const $ = root.jQuery;
		$.fn.lazyLoadElement = function (options)
		{
			options = options || {};
			return new LazyLoadElement($.makeArray(this), options);
		};
	}
	return LazyLoadElement;
});
Core.play = function (options)
{
	if (options == null) return;
	if (options.src == null || options.src == "") return;

	var audioElement = document.createElement('audio');
	audioElement.setAttribute("src", options.src);

	if (options.repeat == null) options.repeat = false;
	if (options.reset == null) options.reset = true;
	if (options.autoPlay == null) options.autoPlay = true;

	audioElement.addEventListener("ended", function () {
		if (options.repeat == true) audioElement.play();
		else $(audioElement).remove();
	});
	if (options.reset) audioElement.currentTime = 0;
	if (options.autoPlay == true) audioElement.play();

	return audioElement;
}
/// <reference path="linq.js" />

function Popup() {
    this.template = '  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true"> \
          <div class="modal-dialog"> \
            <div class="modal-content"> \
              <div class="modal-header"> \
                <h5 class="modal-title"></h5> \
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
              </div> \
              <div class="modal-body"></div> \
              <div class="modal-footer"></div> \
            </div> \
          </div> \
        </div>';

    this.modal = null;                                              // Biến lưu trữ modal đang mở
    this.popupBody = null;                                          // Biến lưu trữ element nội dung popup
    this.header = null;                                             // Biến lưu trữ header của popup
    this.footer = null;                                             // Biến lưu trữ footer của popup
    this.dialogType = "";
    this.loadContentWhenShow = false;                               // Định nghĩa xem là mỗi lần hiển thị thì có lấy lại nội dung hay không
    this.clearWhenHide = true;                                      // Có xóa toàn bộ modal khỏi body khi tắt không
    var ajax = new CoreAjax(); ajax.typeAction = "Common.Modules.ModuleLoader";  // Đối tượng gọi hàm trên server     
    this.data = {};                                                 // Dữ liệu cần gửi đi lên server để lấy nội dung popup

    // control,module,content là 3 thuộc tính quyết định nên nội dung của popup
    this.control = "";                                          // Control chứa nội dung popup ở trên server
    this.module = "";                                           // Module được cấu hình trong menu.config
    this.content = "";                                          // Nội dung của popup - có thể là một function
    this.currentRes = null;

    this.title = "";                                            // Tiêu đề của popup
    this.minimized = false;                                     // Có button thu nhỏ không
    this.canFullScreen = false;                                 // Có button phóng to form hay không
    this.fullScreen = false;                                    // Có phóng to lúc mở popup
    this.parentFormKeys = null;                                 // Form cha có sử dụng phím nóng
    this.formKeys = null;                                       // Đối tượng control phím nóng của popup

    this.whenToogleFullScreen = null;                           // Sự kiện khi thay đổi màn hình từ full sang bình thường, từ bình thường sang full

    var clsButtonDefault = "btn btn-primary";
    var btnCancel = { value: "Đóng", icon: "fa fa-sign-out", cls: "btn btn-secondary cmd-cancel", func: function (element, scope) { scope.modal.find(".modal-header .close").click(); } };
    this.buttons = []; //this.buttons.push(btnCancel);

    this.resetButtonDefault = function() { this.buttons = []; this.buttons.push(btnCancel); }
    this.resetButtonDefault();

    // Sự kiện luôn thực hiện mỗi lần hiển thị popup
    this.onAlwaysShow = null;
    var alwaysShow = function () 
    {
        if (this.onAlwaysShow != null) this.onAlwaysShow();
        
        this.popupBody.bindCmd(this);
        var firstInput = this.popupBody.find("input").eq(0);
        firstInput.focus();
    }

    // Sự kiện sau khi tải control
    this.afterLoadControl = null;

    // Sự kiện khi tắt popup
    this.onHide = null;
    var fireHide = function () 
    {
        if (this.onHide != null) this.onHide();
    }

    var currentTypeShowModal = true;
    var currentTop = null;
    var currentLeft = null;

    this.resetContent = function(content)
    {
        this.popupBody.html("");        
        this.popupBody.append(content);
    }

    // Hiển thị Popup
    this.show = function (isModal, top, left) 
    {
        if (isModal == null || isModal) isModal = true;
        currentTypeShowModal = isModal;

        // Vị trí popup cần hiển thị
        currentTop = top;
        currentLeft = left;

        // clear lại toàn bộ nếu như có yêu cầu tạo mới lại nội dung mỗi lần hiển thị
        if (this.loadContentWhenShow && this.modal != null) clearModal.bind(this)();
        getModal.bind(this)();

        if (this.loadContentWhenShow || this.popupBody.html() == "") 
        {
            // Load nội dung theo control
            if (this.control != "") 
            {
                var $this = this;
                var data = typeof ($this.data) == "function" ? $this.data() : $this.data; $.extend(data, { control: $this.control });
                ajax.post("LoadModuleByControl", data, function (res)
                {
                    $this.resetContent(res.Data.ModuleContent)
                    $this.currentRes = res;
                    if ($this.afterLoadControl != null) $this.afterLoadControl(res);
                    doShow.bind($this)(true);

                    var title = $this.popupBody.find("[data-popup-title]").attr("data-popup-title");
                    if (title != null && title != "") $this.setTitle(title);
                });
            }

            // Load nội dung theo Module
            else if(this.module != "")
            {
                var $this = this;
                var data = typeof ($this.data) == "function" ? $this.data() : $this.data; $.extend(data, {});
                $this.popupBody.loadModule($this.module, function (res) 
                {
                    $this.popupBody.prepend("<div class='row'><div class='col-xs-12'><div class='popup-area-msg'></div></div></div>");
                    $this.currentRes = res;
                    if ($this.afterLoadControl != null) $this.afterLoadControl(res);
                    doShow.bind($this)(true);

                    var title = $this.popupBody.find("[data-popup-title]").attr("data-popup-title");
                    if (title != null && title != "") $this.setTitle(title);
                }, data);
            }

            // Theo nội dung có sẵn
            else
            {
                this.popupBody.append("<div class='row'><div class='col-xs-12'><div class='popup-area-msg'></div></div></div>");
                this.popupBody.append(typeof (this.content) == "function" ? this.content() : (this.content == "" ? " " : this.content));
                doShow.bind(this)(true);
            }
        }
        else doShow.bind(this)(false);

        this.modal.click(function (event) {
            if (!$(this).find('.modal-content').is(event.target) && !$(this).find('.modal-content').has(event.target).length) {
                $(this).modal('hide'); 
            }
        })
    }

    // Tắt Popup
    this.hide = function () 
    {
        if (this.modal == null) return;
        this.modal.modal('hide'); 
    }

    // Hiển thị thông báo
    this.showMsg = function (msg, title, timeOut, type)
    {
        if (this.fullScreen) Core.notify(msg, type, 2000, this.popupBody);
        else Core.notify(msg, type, 2000, this.popupBody);
    }

    this.showMsgSuccess = function (msg) { this.showMsg(msg, null, null, alertType.alertSuccess); }
    this.showMsgError = function (msg) { this.showMsg(msg, null, null, alertType.alertDanger); }

    this.resetTitle = function()
    {
        this.setTitle(typeof (this.title) == "function" ? this.title() : (this.title == "" ? " " : this.title));        
    }

    this.setTitle = function (title) { this.header.html(title); };

    this.resetButtons = function()
    {
        var $this = this;
        $this.footer.empty();
        for (var i = 0; i < $this.buttons.length; i++)
            $this.appendButton($this.buttons[i]);
    }
    this.appendButton = function(btnInfo)
    {
        this.footer.append(this.createButton(btnInfo));
    }
    var doShow = function (first) 
    {
        var $this = this;
        if (first) this.resetButtons();
        this.resetTitle();
        
        if(this.minimized)
        {
            var buttonMinimized = $('<button class="close" data-widget="collapse" style="margin-right: 5px; font-size:15px; margin-top:1px"><span aria-hidden="true"><i class="fa fa-minus"></i></span></button>');
            buttonMinimized.click(function()
            {
                if($(this).find("i").hasClass("fa-minus"))
                {
                    $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
                    $this.modal.attr("data-height", $this.modal.find(".modal-content").height());
                    $this.modal.height($this.header.parent().height());

                    $this.popupBody.hide(); $this.footer.hide();
                }
                else
                {
                    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
                    $this.popupBody.show(); $this.footer.show();
                    $this.modal.height($this.modal.attr("data-height"));
                    $this.modal.removeAttr("data-height");
                }
            });
            buttonMinimized.insertBefore(this.header);
        }

        if(this.canFullScreen)
        {
            var buttonFullScreen = $('<button class="close" data-widget="collapse" style="margin-right: 5px; font-size:15px; margin-top:2px"><span aria-hidden="true"><i class="fa fa-square-o"></i></span></button>');
            buttonFullScreen.click(function () 
            {
                if ($this.modal.hasClass("modal-fullscreen")) setUnFullScreen.bind($this)();
                else setFullScreen.bind($this)();
                if ($this.whenToogleFullScreen != null) $this.whenToogleFullScreen();
            });
            buttonFullScreen.insertBefore(this.header);
        }

        if (currentTypeShowModal) 
        {
            if(this.fullScreen)
                $this.modal.modal({ backdrop: false }).modal('show');
            else 
                $this.modal.modal({ backdrop: "static" }).modal('show');
        }
        else
        {
            // Tính toán cho ra giữa nếu như không có tọa độ ban đầu
            
            $this.modal.removeClass("modal").css("position", "fixed");
            if (currentTop == null) currentTop = ($(window).height() - $this.modal.height()) / 2;
            if (currentLeft == null) currentLeft = ($(window).width() - $this.modal.width()) / 2;

            $this.modal.css("top", currentTop).css("left", currentLeft).css("z-index", 10000);
            $this.modal.trigger("shown.bs.modal");
            $this.modal.find('[data-dismiss="modal"]').click(function()
            {
                $this.modal.hide();
                $this.modal.trigger("hidden.bs.modal");
            });

            $this.modal.find(".modal-content").attr("style", "box-shadow:0 3px 9px rgba(0,0,0, 0.8) !important");
        }
        //$this.modal.find(".modal-content").draggable({ handle: $this.header }); $this.header.css("cursor", "move");
    }
    this.createButton = function(btnInfo)
    {
        var $this = this;
        var btn = $("<button type='button'>");
        // btn.attr("value", btnInfo.value);
        if (btnInfo.icon != null)
            btn.append("<span class='" + btnInfo.icon + "'></span> ");
        btn.append(Core.getLabel(btnInfo.value));
        btn.addClass(btnInfo.cls == null || btnInfo.cls == "" ? clsButtonDefault : btnInfo.cls);
        //btn.addClass("btn-flat btn-sm");
        btn.addClass("btn-flat");
        btn.btnClick(btnInfo.loading, function (button) { btnInfo.func(button, $this); });
        return btn;
    }
    var setFullScreen = function(onShow)
    {   
        if (Core.isMobile() || Core.isTablet()) return;
        this.modal.addClass("modal-fullscreen");
        var wHeight = this.modal.outerHeight();
        var hHeight = this.header.parent().outerHeight();
        var fHeight = this.footer.outerHeight();
        this.popupBody.outerHeight(wHeight - hHeight - fHeight);
    }
    var setUnFullScreen = function()
    {
        if (Core.isMobile() || Core.isTablet()) return;
        this.modal.removeClass("modal-fullscreen");
        this.popupBody.height("auto");
    }
    var getModal = (function ()
    {
        var $this = this;
        if ($this.modal != null) return;
        $this.modal = $($this.template); $("body").append($this.modal);
        if ($this.fullScreen && !(Core.isMobile() || Core.isTablet())) $this.modal.addClass("modal-fullscreen");

        $this.popupBody = $this.modal.find(".modal-body");

        $this.header = $this.modal.find(".modal-title");
        $this.footer = $this.modal.find(".modal-footer");
        $this.modal.on("shown.bs.modal", function () 
        { 
            if ($this.fullScreen) setFullScreen.bind($this)(true);
            alwaysShow.bind($this)(); 
        });
        $this.modal.on("hidden.bs.modal", function () 
        { 
            fireHide.bind($this)(); 
            if ($this.clearWhenHide) clearModal.bind($this)();
        });
        $this.modal.find(".modal-dialog").addClass($this.dialogType);        
        $this.afterCreatePopupBody();
    });
    
    this.afterCreatePopupBody = function () { };
    var clearModal = function()
    {
        var $this = this;
        if($this.formKeys != null) { $this.formKeys.clearKeys(); $this.formKeys = null; }
        $this.modal.remove(); $this.modal = null; 
    }
    this.buttonNotifications = function(buttons)
    {
        this.popupBody.buttonNotifications(buttons);
    }
};

// Hiển thị thông báo
function CoreAlert(msg, callback) { return CoreAlertConfirm(Core.getLabel(msg), null, callback); }

// Hiển thị confirm
function CoreAlertConfirm(msg, yes, no)
{
    var popup = new Popup();
    popup.title = Core.getLabel("Thông báo");
    popup.content = Core.getLabel(msg);
    popup.clearWhenHide = true;
    popup.dialogType = "modal-sm";
    var yesClick = false;
    if (no != null) popup.onHide = function () { if (!yesClick) no(); };
    if (yes != null) popup.buttons.push({ value: Core.getLabel("Đồng ý"), icon: "fa fa-thumbs-o-up", cls: "btn btn-primary pull-left", func: function (element, scope) { yes(element, scope); yesClick = true; popup.hide(); } });
    popup.afterCreatePopupBody = function ()
    {        
        popup.popupBody.parents(".modal").addClass("quotation-modal");
        popup.popupBody.parents(".modal-content").addClass("rounded-0");
    };
    popup.show();
    return popup;
}
// Plugin that provides a "pathchange" event on the window object, notifying an application when the URL changes
// This is accomplished by watching the hash, using the hashchange event from HTML5 or a polling interval in older browsers.
// In addition, in some modern browsers, HTML5 History Management is used to support changing the URL's path without reloading the page.
// This plugin also provides a method to navigate to a URL safely, that will use HTML5 History Management to avoid a page load.
// Everything degrades gracefully, and supports RESTful client development.

// Browser Support:
//  Chrome  - Any recent version of Chrome supports everything.
//  Safari  - Any recent version of Safari supports everything.
//  Firefox - Newer versions of Firefox support the hashchange event
//            Firefox 4 betas also support HTML5 History Management
//  Internet Explorer - IE8 supports hashchange
//                      IE6 and 7 receive inferior hashchange support through a polling interval.
//  Others  - Other modern browsers probably support some subset of features.

// This plugin was authored by Ben Cherry (bcherry@gmail.com), and is released under an MIT License (do what you want with it).
// Some of the code in this plugin was adapted from Modernizr, which is also available under an MIT License.
(function ($) {
    // can use $(window).bind("pathchange", fn) or $(window).pathchange(fn)
    $.fn.pathchange = function (handler) {
        return handler ? this.bind("pathchange", handler) : this.trigger("pathchange");
    };

    var my = $.pathchange = {
        // default options
        options: {
            useHistory: true, // whether we use HTML5 History Management to change the current path
            useHashchange: true, // whether we use HTML5 Hashchange to listen to the URL hash
            pollingInterval: 250, // when using Hashchange in browsers without it, how often to poll the hash (in ms)
            interceptLinks: true, // do we intercept all relative links to avoid some page reloads?
            disableHashLinks: true // do we ensure all links with href=# are not followed (this would mess with our history)?
        },

        // call this once when your app is ready to use pathchange
        init: function (options) {
            var lastHash;
            $.extend(my.options, options);

            // Listen to the HTML5 "popstate" event, if supported and desired
            if (my.options.useHistory && my.detectHistorySupport()) {
                $(window).bind("popstate", function (e) {
                    $(window).trigger("pathchange");
                });
            }

            // Listen to the HTML5 "hashchange" event, if supported and desired
            if (my.options.useHashchange) {
                $(window).bind("hashchange", function (e) {
                    $(window).trigger("pathchange");
                });

                // Hashchange support for older browsers (IE6/7)
                if (!my.detectHashchangeSupport()) {
                    lastHash = window.location.hash;
                    setInterval(function () {
                        if (lastHash !== window.location.hash) {
                            $(window).trigger("hashchange");
                            lastHash = window.location.hash;
                        }
                    }, my.options.pollingInterval);
                }
            }

            //// Intercept all relative links on the page, to avoid unneccesary page refreshes
            //if (my.options.interceptLinks) {
            //    $("body").delegate("a[href^=/]", "click", function (e) {
            //        my.changeTo($(this).attr("href"));
            //        e.preventDefault();
            //    });
            //}

            //// Ensure all the href=# links on the page don't mess with things
            //if (my.options.disableHashLinks) {
            //    $("body").delegate("a[href=#]", "click", function (e) {
            //        e.preventDefault();
            //    });
            //}
        },

        // Call to manually navigate the app somewhere
        changeTo: function (path) {
            // If we're using History Management, just push an entry
            if (my.options.useHistory && my.detectHistorySupport()) {
                window.history.pushState(null, null, path);
                $(window).trigger("pathchange");
            } else {
                // Make sure there's a hash (going from foo.com#bar to foo.com would trigger a reload in Firefox, sadly)
                if (path.indexOf("#") < 0) {
                    path += "#";
                }
                // Otherwise, navigate to the new URL.  Might reload the browser.  Might trigger a hashchange.
                window.location.href = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + path;
            }
        },

        // Simple feature detection for History Management (borrowed from Modernizr)
        detectHistorySupport: function () {
            return !!(window.history && history.pushState);
        },

        // Simple feature detection for hashchange (adapted from Modernizr)
        detectHashchangeSupport: function () {
            var isSupported = "onhashchange" in window;
            if (!isSupported && window.setAttribute) {
                window.setAttribute("onhashchange", "return;");
                isSupported = typeof window.onhashchange === "function";
            }
            return isSupported;
        }
    };
}(jQuery));
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/**
 * name: fireworks-js
 * version: 2.10.7
 * author: Vitalij Ryndin (https://crashmax.ru)
 * homepage: https://fireworks.js.org
 * license MIT
 */
(function(c,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(c=typeof globalThis<"u"?globalThis:c||self,u(c.Fireworks={}))})(this,function(c){"use strict";function u(e){return Math.abs(Math.floor(e))}function p(e,t){return Math.random()*(t-e)+e}function o(e,t){return Math.floor(p(e,t+1))}function g(e,t,i,s){const n=Math.pow;return Math.sqrt(n(e-i,2)+n(t-s,2))}function f(e,t,i=1){if(e>360||e<0)throw new Error(`Expected hue 0-360 range, got \`${e}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(i>1||i<0)throw new Error(`Expected alpha 0-1 range, got \`${i}\``);return`hsla(${e}, 100%, ${t}%, ${i})`}const v=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},b=["__proto__","constructor","prototype"],w=(...e)=>e.reduce((t,i)=>(Object.keys(i).forEach(s=>{b.includes(s)||(Array.isArray(t[s])&&Array.isArray(i[s])?t[s]=i[s]:v(t[s])&&v(i[s])?t[s]=w(t[s],i[s]):t[s]=i[s])}),t),{});function S(e,t){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout(()=>e(...s),t)}}class O{x;y;ctx;hue;friction;gravity;flickering;lineWidth;explosionLength;angle;speed;brightness;coordinates=[];decay;alpha=1;constructor({x:t,y:i,ctx:s,hue:n,decay:h,gravity:a,friction:r,brightness:l,flickering:d,lineWidth:x,explosionLength:m}){for(this.x=t,this.y=i,this.ctx=s,this.hue=n,this.gravity=a,this.friction=r,this.flickering=d,this.lineWidth=x,this.explosionLength=m,this.angle=p(0,Math.PI*2),this.speed=o(1,10),this.brightness=o(l.min,l.max),this.decay=p(h.min,h.max);this.explosionLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=f(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=f(this.hue,this.flickering?p(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class E{constructor(t,i){this.options=t,this.canvas=i,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}active=!1;x;y;get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,i){const{click:s,move:n}=this.mouseOptions;(s||n)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=i)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class M{hue;rocketsPoint;opacity;acceleration;friction;gravity;particles;explosion;mouse;boundaries;sound;delay;brightness;decay;flickering;intensity;traceLength;traceSpeed;lineWidth;lineStyle;autoresize;constructor(){this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,w(this,t))}}class z{constructor(t,i){this.options=t,this.render=i}tick=0;rafId=0;fps=60;tolerance=.1;now;mount(){this.now=performance.now();const t=1e3/this.fps,i=s=>{this.rafId=requestAnimationFrame(i);const n=s-this.now;n>=t-this.tolerance&&(this.render(),this.now=s-n%t,this.tick+=n*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(i)}unmount(){cancelAnimationFrame(this.rafId)}}class L{constructor(t,i,s){this.options=t,this.updateSize=i,this.container=s}resizer;mount(){if(!this.resizer){const t=S(()=>this.updateSize(),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class T{constructor(t){this.options=t,this.init()}buffers=[];audioContext;onInit=!1;get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const i=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(i).then(s=>{this.buffers.push(s)}).catch(s=>{throw s})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),i=this.buffers[o(0,this.buffers.length-1)],s=this.audioContext.createGain();t.buffer=i,s.gain.value=p(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),s.connect(this.audioContext.destination),t.connect(s),t.start(0)}else this.init()}}class C{x;y;sx;sy;dx;dy;ctx;hue;speed;acceleration;traceLength;totalDistance;angle;brightness;coordinates=[];currentDistance=0;constructor({x:t,y:i,dx:s,dy:n,ctx:h,hue:a,speed:r,traceLength:l,acceleration:d}){for(this.x=t,this.y=i,this.sx=t,this.sy=i,this.dx=s,this.dy=n,this.ctx=h,this.hue=a,this.speed=r,this.traceLength=l,this.acceleration=d,this.totalDistance=g(t,i,s,n),this.angle=Math.atan2(n-i,s-t),this.brightness=o(50,70);this.traceLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const i=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.currentDistance=g(this.sx,this.sy,this.x+i,this.y+s),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=i,this.y+=s)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=f(this.hue,this.brightness),this.ctx.stroke()}}class y{target;container;canvas;ctx;width;height;traces=[];explosions=[];waitStopRaf;running=!1;opts;sound;resize;mouse;raf;constructor(t,i={}){this.target=t,this.container=t,this.opts=new M,this.createCanvas(this.target),this.updateOptions(i),this.sound=new T(this.opts),this.resize=new L(this.opts,this.updateSize.bind(this),this.container),this.mouse=new E(this.opts,this.canvas),this.raf=new z(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.7"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(!!this.running)return new Promise(i=>{this.waitStopRaf=()=>{!this.waitStopRaf||(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),i()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let i=0;i<t;i++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:i=this.container.clientHeight}={}){this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i,this.updateBoundaries({...this.opts.boundaries,width:t,height:i})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:i,lineWidth:s}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=i,this.ctx.lineJoin="round",this.ctx.lineWidth=p(s.trace.min,s.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:i,boundaries:s,traceLength:n,traceSpeed:h,acceleration:a,mouse:r}=this.opts;this.traces.push(new C({x:this.width*o(i.min,i.max)/100,y:this.height,dx:this.mouse.x&&r.move||this.mouse.active?this.mouse.x:o(s.x,s.width-s.x*2),dy:this.mouse.y&&r.move||this.mouse.active?this.mouse.y:o(s.y,s.height*.5),ctx:this.ctx,hue:o(t.min,t.max),speed:h,acceleration:a,traceLength:u(n)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:i}=this.opts;(this.raf.tick>o(t.min,t.max)||this.mouse.active&&i.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((i,s,n)=>{this.initExplosion(i,s,n),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,i,s){const{particles:n,flickering:h,lineWidth:a,explosion:r,brightness:l,friction:d,gravity:x,decay:m}=this.opts;let P=u(n);for(;P--;)this.explosions.push(new O({x:t,y:i,ctx:this.ctx,hue:s,friction:d,gravity:x,flickering:o(0,100)<=h,lineWidth:p(a.explosion.min,a.explosion.max),explosionLength:u(r),brightness:l,decay:m}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}c.Fireworks=y,c.default=y,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
(function (window, $) {
    "use strict";

    var defaultConfig = {
        type: '', autoDismiss: true, container: '#toasts', autoDismissDelay: 1000, transitionDuration: 50
    };

    $.toast = function (config) {
        var size = arguments.length;
        var isString = typeof (config) === 'string';

        if (isString && size === 1) {
            config = {
                ...defaultConfig, message: config, type: "success"
            };
        }

        if (isString && size === 2) {
            config = {
                ...defaultConfig, message: arguments[1], type: arguments[0]
            };
        }

        return new toast(config);
    };

    let toast = function (config) {
        config = $.extend({}, defaultConfig, config);

        // toast template
        let toast = $(['<div class="toast ' + config.type + '">', '<p>' + config.message + '</p>', '<div class="close">&times;</div>', '</div>'].join(''));

        // handle dismiss
        toast.find('.close').on('click', function () {
            let toast = $(this).parent();

            toast.addClass('hide');

            setTimeout(function () {
                toast.remove();
            }, config.transitionDuration);
        });

        // append toast to toasts container
        $(config.container).append(toast);

        // transition in
        setTimeout(function () {
            toast.addClass('show');
        }, config.transitionDuration);

        // if auto-dismiss, start counting
        if (config.autoDismiss) {
            setTimeout(function () {
                toast.addClass('hide');
                setTimeout(function () {
                    toast.remove();
                }, config.transitionDuration);
            }, config.autoDismissDelay);
        }

        return this;
    };

})(window, jQuery);
var Location = function () {
    $.extend(this, new CoreAjax());

    this.assembly = "Core.FrontEnds.SHome";
    this.typeAction = "Projects.Web.Utilities.Location";

    this.getDistrict = function (provinceId, element) {
        this.post2("GetDistrict", { provinceId: provinceId }, function (res) {
            let html = "<option selected disabled value='0'>Chọn Quận / Huyện</option>";
            for (let i = 0; i < res.Data.District.length; i++) {
                html += `<option value="` + res.Data.District[i]["LocationId"] + `">` + res.Data.District[i]["Name"] + `</option>`;
            }
            let district = element.find("#district")
            district.html(html);
            district.removeAttr('disabled');
        });
    }
    this.getWard = function (districtId, element) {
        this.post2("GetWard", { districtId: districtId }, function (res) {
            let html = "<option selected disabled value='0'>Chọn Phường / Xã</option>";
            for (let i = 0; i < res.Data.Ward.length; i++) {
                html += `<option value="` + res.Data.Ward[i]["LocationId"] + `">` + res.Data.Ward[i]["Name"] + `</option>`;
            }
            let district = element.find("#ward")
            district.html(html);
            district.removeAttr('disabled');
        });
    }
    this.updateProvince = function (provinceId, element) {
        this.post2("UpdateProvince", { provinceId: provinceId }, function (res) {
            element.hide();
            $("#address-province").text(res.Data.Province);
        });
    }

}
var Shopping = function () {
    $.extend(this, new CoreAjax());

    this.assembly = "Core.FrontEnds.SHome";
    this.typeAction = "Projects.Web.Utilities.Shopping";

    this.update = function (productId, quantity = 1, callback = null) {
        this.post2("Update", { productId: productId, quantity: quantity }, function (res) {
            $(".cart").attr("data-total-item", res.Data.TotalItem);
            $("#total-product").text(res.Data.TotalItem);
            $("#total-money").text(res.Data.Money);
            $(".container-cart").find(".row").children(".sale-cost-detail").text(res.Data.Money);
            if (res.Data.TotalItem == 0) {
                $(".btn-buy-now-100").addClass("disabled");
            }
            callback();
        });
    }

    this.getListTotal = function () {
        this.post("GetTotalItem", {}, function (res) {
            $("#cart").attr("data-total-item", res.Data.TotalItem);
            
        });
    }
    this.registerCustomer = function (data, form) {
        this.post("RegisterCustomer", data, function (res) {
            $.toast("<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Đăng ký thành công");
            form[0].reset();
        }, function (res) {
            Core.alert(res.Data.MessageError, function () {
                form.find("[name=" + res.Data.FieldError + "]").focus();
            });
        });
    }
    this.updateCustomer = function (customer, form) {
        this.post("FillCustomerInfo", customer, function (res) {
            window.location.href = "/xac-nhan-thanh-toan";
        }, function (res) {
            Core.alert(res.Data.MessageError, function () {
                form.find("[name=" + res.Data.FieldError + "]").focus();
            });
        });
    }

}
var ProductLoading = function () {
    $.extend(this, new CoreAjax());

    this.assembly = "Core.FrontEnds.SHome";
    this.typeAction = "Projects.Web.Utilities.ProductLoading";
}
var LuckyRound = function () {
    var $, ele, container, canvas, num, prizes, btn, deg = 0, optsPrize, fnbuttonClick;

    var cssPrefix,
        eventPrefix,
        vendors = {
            "": "",
            Webkit: "webkit",
            Moz: "",
            O: "o",
            ms: "ms"
        },
        testEle = document.createElement("p"),
        cssSupport = {};

    Object.keys(vendors).some(function (vendor) {
        if (
            testEle.style[vendor + (vendor ? "T" : "t") + "ransitionProperty"] !==
            undefined
        ) {
            cssPrefix = vendor ? "-" + vendor.toLowerCase() + "-" : "";
            eventPrefix = vendors[vendor];
            return true;
        }
    });

    /**
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    function normalizeEvent(name) {
        return eventPrefix ? eventPrefix + name : name.toLowerCase();
    }

    /**
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    function normalizeCss(name) {
        name = name.toLowerCase();
        return cssPrefix ? cssPrefix + name : name;
    }

    cssSupport = {
        cssPrefix: cssPrefix,
        transform: normalizeCss("Transform"),
        transitionEnd: normalizeEvent("TransitionEnd")
    };

    var transform = cssSupport.transform;
    var transitionEnd = cssSupport.transitionEnd;

    // alert(transform);
    // alert(transitionEnd);

    function init(opts) {
        fnbuttonClick = opts.buttonClick;
        opts.config(function (lengthItems) {
            num = lengthItems;
            //draw(opts);

            var id = opts.id,
            ele = $(id);
            container = ele.querySelector(".hc-luckywheel-container");
            btn = ele.querySelector(".hc-luckywheel-btn");
        });
        events();
    }

    /**
     * @param  {String} id
     * @return {Object} HTML element
     */
    $ = function (id) {
        return document.getElementById(id);
    };

    

    /**
     * @param  {String} msg [description]
     */
    function showMsg(msg) {
        alert(msg);
    }

    /**
     * @param  {[type]} deg [description]
     * @return {[type]}     [description]
     */
    function runRotate(deg) {
        // runInit();
        // setTimeout(function() {
        container.style[transform] = "rotate(" + deg + "deg)";
        // }, 10);
    }

    /**
     * @return {[type]} [description]
     */
    
    function events()
    {
        bind(btn, "click", function ()
        {

            fnbuttonClick(function (rand, prize) {
                                
                addClass(btn, "disabled");
                if (rand == null) {
                    return;
                }
                deg = deg || 0;
                deg = deg + (360 - (deg % 360)) + (360 * 20 - rand * (360 / num));
                runRotate(deg);

                var element = Core.play({ src: "/Projects/Web/Resources/mp3/nsx.mp3" });
                if (btn.nhacTrungThuong != null) btn.nhacTrungThuong.pause();

                container.addEventListener("transitionend", function () {

                    element.pause();
                    btn.nhacTrungThuong = Core.play({ src: "/Projects/Web/Resources/mp3/nrs.mp3" });
                    Core.alert(prize);
                    if (rand == null) {
                    } else {
                        removeClass(btn, "disabled");
                    }
                }, { once: true });
            });
        });
    }


    /**
     * Bind events to elements
     * @param {Object}    ele    HTML Object
     * @param {Event}     event  Event to detach
     * @param {Function}  fn     Callback function
     */
    function bind(ele, event, fn) {
        if (typeof addEventListener === "function") {
            ele.addEventListener(event, fn, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + event, fn);
        }
    }

    /**
     * hasClass
     * @param {Object} ele   HTML Object
     * @param {String} cls   className
     * @return {Boolean}
     */
    function hasClass(ele, cls) {
        if (!ele || !cls) return false;
        if (ele.classList) {
            return ele.classList.contains(cls);
        } else {
            return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
        }
    }

    // addClass
    function addClass(ele, cls) {
        if (ele.classList) {
            ele.classList.add(cls);
        } else {
            if (!hasClass(ele, cls)) ele.className += "" + cls;
        }
    }

    // removeClass
    function removeClass(ele, cls) {
        if (ele.classList) {
            ele.classList.remove(cls);
        } else {
            ele.className = ele.className.replace(
                new RegExp(
                    "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
                    "gi"
                ),
                " "
            );
        }
    }

    var hcLuckywheel = {
        init: function (opts) {
            return init(opts);
        }
    };

    this.hcLuckywheel === undefined && (this.hcLuckywheel = hcLuckywheel);

    if (typeof define == "function" && define.amd) {
        define("HellCat-Luckywheel", [], function () {
            return hcLuckywheel;
        });
    }
}
function GiftBox() {
    this.contact = null;
    this.resultGift = null;
    this.ajax = null;
    this.loadGiftBox = function (element) {
        element.find(".open-box").on("click", function () {
            $(this).hide();
        })
        element.find(".btn-show-role-popup").on("click", function () {
            element.find(".open-role-popup").show();
        })
        element.find(".btn-show-popup-contact").on("click", function () {
            if ($(this).fireClick == true) return;
            $(this).fireClick = true;
            this.showPopupContactGift(element);
            $(this).fireClick = false;
        }.bind(this));
        this.openBox = false;
        element.find(".gift-over-box").on("click", function () {
            if (this.contact == null) return;
            if (this.openBox) return;
            $this = this;
            $this.openBox = true;
            element.find(".open-gift-popup").find(".third").find('img').attr("src", this.resultGift.img);
            element.find(".gift-box-on-top").show();
            element.find(".gift-over-box").css("cursor", "-webkit-context-menu");
            element.find(".gift-over-box").css("cursor", "context-menu");
            element.find(".open-box-popup").show();
            setTimeout(function () {
                element.find(".open-box-popup").hide();
                element.find(".open-gift-popup").show();
                element.find(".open-gift-popup").find("img").css("animation", "zoom-out 0.5s ease infinite");
                setTimeout(function () {
                    element.find(".open-gift-popup").find("img").css("animation", "none");
                    $this.openBox = false
                }, 450);
            }, 2300);
           this.ajax.post("SaveCallForMe", this.contact, function (res) {},
                function (res) {
                    if (res.Data.FieldError != null && res.Data.FieldError != "")
                        Core.alert("Bạn chưa điền đầy đủ thông tin!", res.Data.FieldError);
                    else
                        if (res.Data.MessageError != null && res.Data.MessageError != "")
                            Core.alert(res.Data.MessageError);
                    var fieldError = popup.popupBody.find("input[name='" + res.Data.FieldError + "'], textarea[name='" + res.Data.FieldError + "']");
                    fieldError.focus();

                });
            this.contact = null;
            this.resultGift = null;
        }.bind(this));
    }


    this.showPopupContactGift = function (element) {
        var popup = new Popup();
        popup.module = "PopupContactGift";
        popup.afterCreatePopupBody = function () {
            popup.footer.hide();
            popup.popupBody.parents(".modal").addClass("quotation-modal");
            popup.popupBody.parents(".modal-content").addClass("rounded-0").addClass("border-0");
        };
        popup.onAlwaysShow = function () {
            this.currencyFormat();
            popup.popupBody.find(".btn").click(function () {
                this.ajax = new CoreAjax(); this.ajax.typeAction = "Projects.Web.Pages.Templates.PopupContactGift";
                var contact = popup.popupBody.getValues();
                contact.OrderMoney = parseInt(contact.OrderMoney.replaceAll(",", ""));
                var rand = null;
                if (contact.OrderMoney < 20000000) {
                    Core.alert("Giá trị đơn hàng dưới <b>20,000,000đ</b> không đủ điều kiện tham gia");
                    return
                }
                if (contact.SecurityCode == "TVP%Gr3fdgddf3$#Fn") {
                    rand = 6;
                }
                else if (contact.SecurityCode == "DN%Gr3fdgddf3$#Fn") {
                    contact.SecurityCode = "TVP%Gr3fdgddf3$#Fn";
                    rand = 6;
                }
                else {
                    if (contact.OrderMoney >= 20000000 && contact.OrderMoney < 50000000) {
                        contact.SpinRuleId = 5;
                        rand = this.randomIndexGift();
                    } if (contact.OrderMoney >= 50000000 && contact.OrderMoney < 100000000) {
                        contact.SpinRuleId = 4;
                        rand = this.randomIndexGiftRule2();
                    } else if (contact.OrderMoney >= 100000000) {
                        contact.SpinRuleId = 2;
                        rand = this.randomIndexGiftRule3();
                    }
                }
                if (rand == null) { Core.alert("Giá trị đơn hàng không hợp lệ"); return; }
                contact.SpinItemId = this.prizeGifts[rand].id;

                $this = this;
                this.ajax.post("CallValidate", contact, function (res) {
                    $this.resultGift = $this.prizeGifts[rand];
                    $this.contact = contact;
                    popup.popupBody.find("#frmQuotation")[0].reset();
                    popup.hide();
                    element.find(".gift-box-on-top").hide();
                    element.find(".gift-over-box").css("cursor", "-webkit-grab");
                    element.find(".gift-over-box").css("cursor", "grab");
                },
                    function (res) {
                        if (res.Data.FieldError != null && res.Data.FieldError != "")
                            Core.alert("Bạn chưa điền đầy đủ thông tin!", res.Data.FieldError);
                        else
                            if (res.Data.MessageError != null && res.Data.MessageError != "")
                                Core.alert(res.Data.MessageError);
                        var fieldError = popup.popupBody.find("input[name='" + res.Data.FieldError + "'], textarea[name='" + res.Data.FieldError + "']");
                        fieldError.focus();

                    });
            }.bind(this));
            this.bindControlLoad(popup.popupBody);
        }.bind(this);
        popup.show();
    }
    this.prizeGifts = [
        {
            id: 2,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/3per.png",
            value: "3%",
            index: 0 // không dùng để dev dễ phân biệt
        },
        {
            id: 26,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/1Tr.png",
            value: "1 triệu",
            index: 1 // không dùng để dev dễ phân biệt
        },
        {
            id: 25,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/2Tr.png",
            value: "2 triệu",
            index: 2 // không dùng để dev dễ phân biệt
        },
        {
            id: 22,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/3Tr.png",
            value: "3 triệu",
            index: 3 // không dùng để dev dễ phân biệt
        },
        {
            id: 23,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/5Tr.png",
            value: "5 triệu",
            index: 4 // không dùng để dev dễ phân biệt
        },

        {
            id: 4,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/5per.png",
            value: "5 %",
            index: 5 // không dùng để dev dễ phân biệt
        },

        {
            id: 1,
            text: "Chiết khấu",
            img: "/Projects/Web/Resources/image/image-gift-box/2per.png",
            value: "2 %",
            index: 6 // không dùng để dev dễ phân biệt
        },
    ];
    this.randomIndexGift = function () {
        let rand = Math.random();
        switch (true) {
            case rand < 0.6:
                prizeIndex = 0;
                break;
            default: prizeIndex = 1;
        }
        return prizeIndex;
    }
    this.randomIndexGiftRule2 = function () {
        let rand = Math.random();
        switch (true) {
            case rand < 0.6:
                prizeIndex = 0;
                break;
            default: prizeIndex = 2;
        }
        return prizeIndex;
    }
    this.randomIndexGiftRule3 = function () {
        let rand = Math.random();
        switch (true) {
            case rand < 0.5:
                prizeIndex = 4;
                break;
            case rand < 0.8:
                prizeIndex = 5;
                break;
            default: prizeIndex = 3;
        }
        return prizeIndex;
    }
    this.getPrize = function (index) {
        return prizeGifts[index];
    }






    this.currencyFormat = function () {

        $("input[data-type='currency']").on({
            keyup: function () {
                formatCurrency($(this));
            },
            blur: function () {
                formatCurrency($(this), "blur");
            }
        });


        function formatNumber(n) {
            // format number 1000000 to 1,234,567
            return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }


        function formatCurrency(input, blur) {
            // appends $ to value, validates decimal side
            // and puts cursor back in right position.

            // get input value
            var input_val = input.val();

            // don't validate empty input
            if (input_val === "") { return; }

            // original length
            var original_len = input_val.length;

            // initial caret position 
            var caret_pos = input.prop("selectionStart");

            // check for decimal
            if (input_val.indexOf(".") >= 0) {

                // get position of first decimal
                // this prevents multiple decimals from
                // being entered
                var decimal_pos = input_val.indexOf(".");

                // split number by decimal point
                var left_side = input_val.substring(0, decimal_pos);
                var right_side = input_val.substring(decimal_pos);

                // add commas to left side of number
                left_side = formatNumber(left_side);

                // validate right side
                right_side = formatNumber(right_side);

                // On blur make sure 2 numbers after decimal
                if (blur === "blur") {
                    right_side += "00";
                }

                // Limit decimal to only 2 digits
                right_side = right_side.substring(0, 2);

                // join number by .
                input_val = left_side + "." + right_side;

            } else {
                // no decimal entered
                // add commas to number
                // remove all non-digits
                input_val = formatNumber(input_val);
                input_val = input_val;

            }

            // send updated string to input
            input.val(input_val);

            // put caret back in the right position
            var updated_len = input_val.length;
            caret_pos = updated_len - original_len + caret_pos;
            input[0].setSelectionRange(caret_pos, caret_pos);
        }

    }
}
function LuckyRound() {

}
function Carousel($this) {
    this.loadLazyCarousel = function () {
        $this.loadLazy($("[data-control-load=carousel4]"))
        $this.loadLazy($("[data-control-load=carousel5]"))
        $this.loadLazy($("[data-control-load=carousel3]"))
        $this.loadLazy($("[data-control-load=carousel9]"))
    }
    let carouselSetting3 = {
        loop: true,
        margin: 10,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 50000,
        autoplayHoverPause: true,
        onRefreshed: this.loadLazyCarousel,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            }, 800: {
                items: 3
            }
        }
    };
    let carouselSetting5 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 2
            }, 800: {
                items: 3
            }, 1024: {
                items: 5
            }
        }
    }
    let carouselSetting4 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 2
            }, 800: {
                items: 2
            }, 1024: {
                items: 4
            }
        }
    }
    let carouselSetting9 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 4
            }, 800: {
                items: 7
            }, 1024: {
                items: 9
            }
        }, nav: false
    }
    let carouselSetting6 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 4
            }, 800: {
                items: 4
            }, 1024: {
                items: 6
            }
        }, nav: false
    }
    let carouselSetting3_2 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 2
            }, 800: {
                items: 3
            }
        }
    }

    let carouselSetting3_1 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 1
            }, 800: {
                items: 3
            }
        }
    }

    let carouselSetting2_1 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 1
            }, 800: {
                items: 2
            }
        }
    }
    let carouselSetting_1_5 = {
        ...carouselSetting3, responsive: {
            0: {
                items: 1.5
            }, 800: {
                items: 3
            }
        }
    }
    this.carousel5 = function (element) {
        element.owlCarousel(carouselSetting5)
    }
    this.carousel4 = function (element) {
        element.owlCarousel(carouselSetting4)
    }
    this.carousel9 = function (element) {
        element.owlCarousel(carouselSetting9)
    }
    this.carousel6 = function (element) {
        element.owlCarousel(carouselSetting6)
    }
    this.carousel_1_5 = function (element) {
        element.owlCarousel(carouselSetting_1_5)
    }
    this.carousel3 = function (element) {
        element.owlCarousel(carouselSetting3)
    }
    this.carousel3_2 = function (element) {
        element.owlCarousel(carouselSetting3_2)
    }
    this.carousel3_1 = function (element) {
        element.owlCarousel(carouselSetting3_1)
    }
    this.carousel2_1 = function (element) {
        element.owlCarousel(carouselSetting2_1)
    }

    this.carouselActive = function (element) {
        element.find('.target-search').click(function () {
            const id = $(this).attr('data-control');
            element.find('.carousel-item').removeClass('active');
            element.find('#' + id).addClass('active');
        });
    }
}
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.3",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.3",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.3",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,
d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{
parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==d.visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,
this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.3",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

var falling = true;

var container = document.getElementById("container-hoa-roi"), w = window.innerWidth, h = window.innerHeight;

if (container != null) {

    const mobileTimeout = parseInt(container.getAttribute('data-mobile-timeout'))*1000;
    const desktopTimeout = parseInt(container.getAttribute('data-desktop-timeout'))*1000;
    if (w < 1400 && mobileTimeout > 0) {
        setTimeout(function () {
            container.html("")
        }, mobileTimeout)
    } else if (w >= 1400 && desktopTimeout > 0) {
        setTimeout(function () {
            container.html("")
        }, desktopTimeout)
    }
    TweenLite.set("#container-hoa-roi", { perspective: 600 })
    container = document.getElementById("container-hoa-roi")
    for (i = 0; i < 9; i++) {
        var Div = document.createElement('div');
        var Div2 = document.createElement('div');
        var Div3 = document.createElement('div');
        TweenLite.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200), xPercent: "-50%", yPercent: "-50%" });
        TweenLite.set(Div2, { attr: { class: 'dot2' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200), xPercent: "-50%", yPercent: "-50%" });
        TweenLite.set(Div3, { attr: { class: 'dot3' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200), xPercent: "-50%", yPercent: "-50%" });
        container.appendChild(Div);
        container.appendChild(Div2);
        container.appendChild(Div3);
        animm(Div);
        animm2(Div2);
        animm3(Div3);
    }
}

function animm(elm) {
    TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
    TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
    TweenMax.to(elm, R(2, 8), { repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};
function animm2(elm) {
    TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -25 });
    TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
    TweenMax.to(elm, R(2, 8), { repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};
function animm3(elm) {
    TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -5 });
    TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
    TweenMax.to(elm, R(2, 8), { repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};

function R(min, max) { return min + Math.random() * (max - min) };

var containerFireworks = document.getElementById("container-fireworks")
if (containerFireworks != null) {
    const mobileTimeout = parseInt(containerFireworks.getAttribute('data-mobile-timeout')) * 1000;
    const desktopTimeout = parseInt(containerFireworks.getAttribute('data-desktop-timeout')) * 1000;
    var fireworks = new Fireworks.default(containerFireworks, {
        autoresize: false,
        opacity: 0.5,
        acceleration: 1,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 30,
            max: 50
        },
        delay: {
            min: 30,
            max: 60
        },
        rocketsPoint: {
            min: 50,
            max: 50
        },
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        }
    })
    fireworks.start()

    setTimeout(function () {
        fireworks.stop()
    }, w < 1400 ? mobileTimeout : desktopTimeout)
}

/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 22, 2023
 */

var Swiper=function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function l(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function o(){return Date.now()}function d(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let a=1;a<arguments.length;a+=1){const i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i&&(s=i,!("undefined"!=typeof window&&void 0!==window.HTMLElement?s instanceof HTMLElement:s&&(1===s.nodeType||11===s.nodeType)))){const s=Object.keys(Object(i)).filter((e=>t.indexOf(e)<0));for(let t=0,a=s.length;t<a;t+=1){const a=s[t],r=Object.getOwnPropertyDescriptor(i,a);void 0!==r&&r.enumerable&&(c(e[a])&&c(i[a])?i[a].__swiper__?e[a]=i[a]:p(e[a],i[a]):!c(e[a])&&c(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:p(e[a],i[a])):e[a]=i[a])}}}var s;return e}function u(e,t,s){e.style.setProperty(t,s)}function m(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}function h(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function g(e){try{return void console.warn(e)}catch(e){}}function v(e,t){void 0===t&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:n(t)),s}function w(e){const t=r(),s=a(),i=e.getBoundingClientRect(),n=s.body,l=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,d=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}function b(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function y(e){let t,s=e;if(s){for(t=0;null!==(s=s.previousSibling);)1===s.nodeType&&(t+=1);return t}}function E(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function x(e,t){t&&e.addEventListener("transitionend",(function s(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",s))}))}function S(e,t,s){const a=r();return s?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let T,M,C;function P(){return T||(T=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),T}function L(e){return void 0===e&&(e={}),M||(M=function(e){let{userAgent:t}=void 0===e?{}:e;const s=P(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!h&&(l.os="android",l.android=!0),(p||m||u)&&(l.os="ios",l.ios=!0),l}(e)),M}function A(){return C||(C=function(){const e=r();let t=!1;function s(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(s()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[e,a]=s.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&a<2}}return{isSafari:t||s(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),C}var I={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};const z=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(s){let t=s.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(s.shadowRoot?t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{s.shadowRoot&&(t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())}))),t&&t.remove()}},$=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},k=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,r=[s-t];return r.push(...Array.from({length:t}).map(((e,t)=>s+a+t))),void e.slides.forEach(((t,s)=>{r.includes(t.column)&&$(e,s)}))}const r=i+a-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=r+t;a+=1){const t=(a%s+s)%s;(t<i||t>r)&&$(e,t)}else for(let a=Math.max(i-t,0);a<=Math.min(r+t,s-1);a+=1)a!==i&&(a>r||a<i)&&$(e,a)};var O={updateSize:function(){const e=this;let t,s;const a=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a.clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a.clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(b(a,"padding-left")||0,10)-parseInt(b(a,"padding-right")||0,10),s=s-parseInt(b(a,"padding-top")||0,10)-parseInt(b(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t,s){return parseFloat(t.getPropertyValue(e.getDirectionLabel(s))||0)}const s=e.params,{wrapperEl:a,slidesEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&s.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=f(i,`.${e.params.slideClass}, swiper-slide`),p=o?e.virtual.slides.length:c.length;let m=[];const h=[],g=[];let v=s.slidesOffsetBefore;"function"==typeof v&&(v=s.slidesOffsetBefore.call(e));let w=s.slidesOffsetAfter;"function"==typeof w&&(w=s.slidesOffsetAfter.call(e));const y=e.snapGrid.length,E=e.slidesGrid.length;let x=s.spaceBetween,T=-v,M=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*r:"string"==typeof x&&(x=parseFloat(x)),e.virtualSize=-x,c.forEach((e=>{n?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),s.centeredSlides&&s.cssMode&&(u(a,"--swiper-centered-offset-before",""),u(a,"--swiper-centered-offset-after",""));const P=s.grid&&s.grid.rows>1&&e.grid;let L;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();const A="auto"===s.slidesPerView&&s.breakpoints&&Object.keys(s.breakpoints).filter((e=>void 0!==s.breakpoints[e].slidesPerView)).length>0;for(let a=0;a<p;a+=1){let i;if(L=0,c[a]&&(i=c[a]),P&&e.grid.updateSlide(a,i,c),!c[a]||"none"!==b(i,"display")){if("auto"===s.slidesPerView){A&&(c[a].style[e.getDirectionLabel("width")]="");const r=getComputedStyle(i),n=i.style.transform,l=i.style.webkitTransform;if(n&&(i.style.transform="none"),l&&(i.style.webkitTransform="none"),s.roundLengths)L=e.isHorizontal()?S(i,"width",!0):S(i,"height",!0);else{const e=t(r,"width"),s=t(r,"padding-left"),a=t(r,"padding-right"),n=t(r,"margin-left"),l=t(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)L=e+n+l;else{const{clientWidth:t,offsetWidth:r}=i;L=e+s+a+n+l+(r-t)}}n&&(i.style.transform=n),l&&(i.style.webkitTransform=l),s.roundLengths&&(L=Math.floor(L))}else L=(r-(s.slidesPerView-1)*x)/s.slidesPerView,s.roundLengths&&(L=Math.floor(L)),c[a]&&(c[a].style[e.getDirectionLabel("width")]=`${L}px`);c[a]&&(c[a].swiperSlideSize=L),g.push(L),s.centeredSlides?(T=T+L/2+M/2+x,0===M&&0!==a&&(T=T-r/2-x),0===a&&(T=T-r/2-x),Math.abs(T)<.001&&(T=0),s.roundLengths&&(T=Math.floor(T)),C%s.slidesPerGroup==0&&m.push(T),h.push(T)):(s.roundLengths&&(T=Math.floor(T)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&m.push(T),h.push(T),T=T+L+x),e.virtualSize+=L+x,M=L,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+w,n&&l&&("slide"===s.effect||"coverflow"===s.effect)&&(a.style.width=`${e.virtualSize+x}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),P&&e.grid.updateWrapperSize(L,m),!s.centeredSlides){const t=[];for(let a=0;a<m.length;a+=1){let i=m[a];s.roundLengths&&(i=Math.floor(i)),m[a]<=e.virtualSize-r&&t.push(i)}m=t,Math.floor(e.virtualSize-r)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-r)}if(o&&s.loop){const t=g[0]+x;if(s.slidesPerGroup>1){const a=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),i=t*s.slidesPerGroup;for(let e=0;e<a;e+=1)m.push(m[m.length-1]+i)}for(let a=0;a<e.virtual.slidesBefore+e.virtual.slidesAfter;a+=1)1===s.slidesPerGroup&&m.push(m[m.length-1]+t),h.push(h[h.length-1]+t),e.virtualSize+=t}if(0===m.length&&(m=[0]),0!==x){const t=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter(((e,t)=>!(s.cssMode&&!s.loop)||t!==c.length-1)).forEach((e=>{e.style[t]=`${x}px`}))}if(s.centeredSlides&&s.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(x||0)})),e-=x;const t=e-r;m=m.map((e=>e<=0?-v:e>t?t+w:e))}if(s.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(x||0)})),e-=x,e<r){const t=(r-e)/2;m.forEach(((e,s)=>{m[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:m,slidesGrid:h,slidesSizesGrid:g}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){u(a,"--swiper-centered-offset-before",-m[0]+"px"),u(a,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),m.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==E&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(o||s.cssMode||"slide"!==s.effect&&"fade"!==s.effect)){const t=`${s.containerModifierClass}backface-hidden`,a=e.el.classList.contains(t);p<=s.maxBackfaceHiddenSlides?a||e.el.classList.add(t):a&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.forEach((e=>{e.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;"string"==typeof l&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:"string"==typeof l&&(l=parseFloat(l));for(let e=0;e<a.length;e+=1){const o=a[e];let d=o.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const c=(n+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),u=-(n-d),m=u+t.slidesSizesGrid[e],h=u>=0&&u<=t.size-t.slidesSizesGrid[e];(u>=0&&u<t.size-1||m>1&&m<=t.size||u<=0&&m>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),a[e].classList.add(s.slideVisibleClass)),h&&a[e].classList.add(s.slideFullyVisibleClass),o.progress=i?-c:c,o.originalProgress=i?-p:p}},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n,progressLoop:l}=t;const o=r,d=n;if(0===a)i=0,r=!0,n=!0;else{i=(e-t.minTranslate())/a;const s=Math.abs(e-t.minTranslate())<1,l=Math.abs(e-t.maxTranslate())<1;r=s||i<=0,n=l||i>=1,s&&(i=0),l&&(i=1)}if(s.loop){const s=t.getSlideIndexByData(0),a=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[s],r=t.slidesGrid[a],n=t.slidesGrid[t.slidesGrid.length-1],o=Math.abs(e);l=o>=i?(o-i)/n:(o+n-r)/n,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,n=e.grid&&s.grid&&s.grid.rows>1,l=e=>f(a,`.${s.slideClass}${e}, swiper-slide${e}`)[0];let o,d,c;if(t.forEach((e=>{e.classList.remove(s.slideActiveClass,s.slideNextClass,s.slidePrevClass)})),r)if(s.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),o=l(`[data-swiper-slide-index="${t}"]`)}else o=l(`[data-swiper-slide-index="${i}"]`);else n?(o=t.filter((e=>e.column===i))[0],c=t.filter((e=>e.column===i+1))[0],d=t.filter((e=>e.column===i-1))[0]):o=t[i];o&&(o.classList.add(s.slideActiveClass),n?(c&&c.classList.add(s.slideNextClass),d&&d.classList.add(s.slidePrevClass)):(c=function(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c&&(c=t[0]),c&&c.classList.add(s.slideNextClass),d=function(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&0===!d&&(d=t[t.length-1]),d&&d.classList.add(s.slidePrevClass))),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:i,activeIndex:r,realIndex:n,snapIndex:l}=t;let o,d=e;const c=e=>{let s=e-t.virtual.slidesBefore;return s<0&&(s=t.virtual.slides.length+s),s>=t.virtual.slides.length&&(s-=t.virtual.slides.length),s};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?a>=t[e]&&a<t[e+1]-(t[e+1]-t[e])/2?i=e:a>=t[e]&&a<t[e+1]&&(i=e+1):a>=t[e]&&(i=e);return s.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),a.indexOf(s)>=0)o=a.indexOf(s);else{const e=Math.min(i.slidesPerGroupSkip,d);o=e+Math.floor((d-e)/i.slidesPerGroup)}if(o>=a.length&&(o=a.length-1),d===r&&!t.params.loop)return void(o!==l&&(t.snapIndex=o,t.emit("snapIndexChange")));if(d===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=c(d));const p=t.grid&&i.grid&&i.grid.rows>1;let u;if(t.virtual&&i.virtual.enabled&&i.loop)u=c(d);else if(p){const e=t.slides.filter((e=>e.column===d))[0];let s=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(s)&&(s=Math.max(t.slides.indexOf(e),0)),u=Math.floor(s/i.grid.rows)}else if(t.slides[d]){const e=t.slides[d].getAttribute("data-swiper-slide-index");u=e?parseInt(e,10):d}else u=d;Object.assign(t,{previousSnapIndex:l,snapIndex:o,previousRealIndex:n,realIndex:u,previousIndex:r,activeIndex:d}),t.initialized&&k(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(n!==u&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const s=this,a=s.params;let i=e.closest(`.${a.slideClass}, swiper-slide`);!i&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach((e=>{!i&&e.matches&&e.matches(`.${a.slideClass}, swiper-slide`)&&(i=e)}));let r,n=!1;if(i)for(let e=0;e<s.slides.length;e+=1)if(s.slides[e]===i){n=!0,r=e;break}if(!i||!n)return s.clickedSlide=void 0,void(s.clickedIndex=void 0);s.clickedSlide=i,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=r,a.slideToClickedSlide&&void 0!==s.clickedIndex&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}};var D={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=d(i,e);return r+=this.cssOverflowAdjustment(),s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,wrapperEl:r,progress:n}=s;let l,o=0,d=0;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d,i.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():d-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${d}px, 0px)`);const c=s.maxTranslate()-s.minTranslate();l=0===c?0:(e-s.minTranslate())/c,l!==n&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function G(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var X={slideTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r;if(r.animating&&l.preventInteractionOnTransition||!f&&!a&&!i)return!1;const g=Math.min(r.params.slidesPerGroupSkip,n);let v=g+Math.floor((n-g)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1);const w=-o[v];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&(u?w>r.translate&&w>r.minTranslate():w<r.translate&&w<r.minTranslate()))return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(w),b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[e?"scrollLeft":"scrollTop"]=s}))):h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){e=parseInt(e,10)}const i=this,r=i.grid&&i.params.grid&&i.params.grid.rows>1;let n=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)n+=i.virtual.slidesBefore;else{let e;if(r){const t=n*i.params.grid.rows;e=i.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===t))[0].column}else e=i.getSlideIndexByData(n);const t=r?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:s}=i.params;let a=i.params.slidesPerView;"auto"===a?a=i.slidesPerViewDynamic():(a=Math.ceil(parseFloat(i.params.slidesPerView,10)),s&&a%2==0&&(a+=1));let l=t-e<a;if(s&&(l=l||e<Math.ceil(a/2)),l){const a=s?e<i.activeIndex?"prev":"next":e-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:a,slideTo:!0,activeSlideIndex:"next"===a?e+1:e-t+1,slideRealIndex:"next"===a?i.realIndex:void 0})}if(r){const e=n*i.params.grid.rows;n=i.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0].column}else n=i.getSlideIndexByData(n)}return requestAnimationFrame((()=>{i.slideTo(n,t,s,a)})),i},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{enabled:i,params:r,animating:n}=a;if(!i)return a;let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<r.slidesPerGroupSkip?1:l,d=a.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame((()=>{a.slideTo(a.activeIndex+o,e,t,s)})),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,snapGrid:r,slidesGrid:n,rtlTranslate:l,enabled:o,animating:d}=a;if(!o)return a;const c=a.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=p(l?a.translate:-a.translate),m=r.map((e=>p(e)));let h=r[m.indexOf(u)-1];if(void 0===h&&i.cssMode){let e;r.forEach(((t,s)=>{u>=t&&(e=s)})),void 0!==e&&(h=r[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=n.indexOf(h),f<0&&(f=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=f-a.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return i.loop&&0===a.activeIndex&&i.cssMode?(requestAnimationFrame((()=>{a.slideTo(f,e,t,s)})),!0):a.slideTo(f,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const n=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var H={loopCreate:function(e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{f(a,`.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)}))},r=t.grid&&s.grid&&s.grid.rows>1,n=s.slidesPerGroup*(r?s.grid.rows:1),l=t.slides.length%n!=0,o=r&&t.slides.length%s.grid.rows!=0,d=e=>{for(let a=0;a<e;a+=1){const e=t.isElement?v("swiper-slide",[s.slideBlankClass]):v("div",[s.slideClass,s.slideBlankClass]);t.slidesEl.append(e)}};if(l){if(s.loopAddBlankSlides){d(n-t.slides.length%n),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(o){if(s.loopAddBlankSlides){d(s.grid.rows-t.slides.length%s.grid.rows),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:i,activeSlideIndex:r,byController:n,byMousewheel:l}=void 0===e?{}:e;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:u,params:m}=o,{centeredSlides:h}=m;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&m.virtual.enabled)return s&&(m.centeredSlides||0!==o.snapIndex?m.centeredSlides&&o.snapIndex<m.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0):o.slideTo(o.virtual.slides.length,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=p,void o.emit("loopFix");let f=m.slidesPerView;"auto"===f?f=o.slidesPerViewDynamic():(f=Math.ceil(parseFloat(m.slidesPerView,10)),h&&f%2==0&&(f+=1));const v=m.slidesPerGroupAuto?f:m.slidesPerGroup;let w=v;w%v!=0&&(w+=v-w%v),w+=m.loopAdditionalSlides,o.loopedSlides=w;const b=o.grid&&m.grid&&m.grid.rows>1;d.length<f+w?g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&"row"===m.grid.fill&&g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const y=[],E=[];let x=o.activeIndex;void 0===r?r=o.getSlideIndex(d.filter((e=>e.classList.contains(m.slideActiveClass)))[0]):x=r;const S="next"===a||!a,T="prev"===a||!a;let M=0,C=0;const P=b?Math.ceil(d.length/m.grid.rows):d.length,L=(b?d[r].column:r)+(h&&void 0===i?-f/2+.5:0);if(L<w){M=Math.max(w-L,v);for(let e=0;e<w-L;e+=1){const t=e-Math.floor(e/P)*P;if(b){const e=P-t-1;for(let t=d.length-1;t>=0;t-=1)d[t].column===e&&y.push(t)}else y.push(P-t-1)}}else if(L+f>P-w){C=Math.max(L-(P-2*w),v);for(let e=0;e<C;e+=1){const t=e-Math.floor(e/P)*P;b?d.forEach(((e,s)=>{e.column===t&&E.push(s)})):E.push(t)}}if(o.__preventObserver__=!0,requestAnimationFrame((()=>{o.__preventObserver__=!1})),T&&y.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.prepend(d[e]),d[e].swiperLoopMoveDOM=!1})),S&&E.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.append(d[e]),d[e].swiperLoopMoveDOM=!1})),o.recalcSlides(),"auto"===m.slidesPerView?o.updateSlides():b&&(y.length>0&&T||E.length>0&&S)&&o.slides.forEach(((e,t)=>{o.grid.updateSlide(t,e,o.slides)})),m.watchSlidesProgress&&o.updateSlidesOffset(),s)if(y.length>0&&T){if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x+M]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x+M,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else if(i){const e=b?y.length/m.grid.rows:y.length;o.slideTo(o.activeIndex+e,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(E.length>0&&S)if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x-C]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x-C,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else{const e=b?E.length/m.grid.rows:E.length;o.slideTo(o.activeIndex-e,0,!1,!0)}if(o.allowSlidePrev=c,o.allowSlideNext=p,o.controller&&o.controller.control&&!n){const e={slideRealIndex:t,direction:a,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===m.slidesPerView&&s})})):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...e,slideTo:o.controller.control.params.slidesPerView===m.slidesPerView&&s})}o.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;a[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),a.forEach((e=>{s.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function N(e,t,s){const a=r(),{params:i}=e,n=i.edgeSwipeDetection,l=i.edgeSwipeThreshold;return!n||!(s<=l||s>=a.innerWidth-l)||"prevent"===n&&(t.preventDefault(),!0)}function Y(e){const t=this,s=a();let i=e;i.originalEvent&&(i=i.originalEvent);const n=t.touchEventsData;if("pointerdown"===i.type){if(null!==n.pointerId&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(n.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type)return void N(t,i,i.targetTouches[0].pageX);const{params:l,touches:d,enabled:c}=t;if(!c)return;if(!l.simulateTouch&&"mouse"===i.pointerType)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=i.target;if("wrapper"===l.touchEventsTarget&&!t.wrapperEl.contains(p))return;if("which"in i&&3===i.which)return;if("button"in i&&i.button>0)return;if(n.isTouched&&n.isMoved)return;const u=!!l.noSwipingClass&&""!==l.noSwipingClass,m=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&m&&(p=m[0]);const h=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!i.target||!i.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(h,p):p.closest(h)))return void(t.allowClick=!0);if(l.swipeHandler&&!p.closest(l.swipeHandler))return;d.currentX=i.pageX,d.currentY=i.pageY;const g=d.currentX,v=d.currentY;if(!N(t,i,g))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=g,d.startY=v,n.touchStartTime=o(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1);let w=!0;p.matches(n.focusableElements)&&(w=!1,"SELECT"===p.nodeName&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==p&&s.activeElement.blur();const b=w&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!b||p.isContentEditable||i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function B(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:d}=s;if(!d)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c,p=e;if(p.originalEvent&&(p=p.originalEvent),"pointermove"===p.type){if(null!==i.touchId)return;if(p.pointerId!==i.pointerId)return}if("touchmove"===p.type){if(c=[...p.changedTouches].filter((e=>e.identifier===i.touchId))[0],!c||c.identifier!==i.touchId)return}else c=p;if(!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",p));const u=c.pageX,m=c.pageY;if(p.preventedByNestedSwiper)return n.startX=u,void(n.startY=m);if(!s.allowTouchMove)return p.target.matches(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m}),i.touchStartTime=o()));if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(u<n.startX&&s.translate<=s.maxTranslate()||u>n.startX&&s.translate>=s.minTranslate())return;if(t.activeElement&&p.target===t.activeElement&&p.target.matches(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);i.allowTouchCallbacks&&s.emit("touchMove",p),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=u,n.currentY=m;const h=n.currentX-n.startX,f=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(h**2+f**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:h*h+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(h))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",p),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&p.cancelable&&p.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&p.stopPropagation();let g=s.isHorizontal()?h:f,v=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(l?1:-1),v=Math.abs(v)*(l?1:-1)),n.diff=g,g*=r.touchRatio,l&&(g=-g,v=-v);const w=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=v>0?"prev":"next";const b=s.params.loop&&!r.cssMode,y="next"===s.touchesDirection&&s.allowSlideNext||"prev"===s.touchesDirection&&s.allowSlidePrev;if(!i.isMoved){if(b&&y&&s.loopFix({direction:s.swipeDirection}),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});s.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",p)}if((new Date).getTime(),i.isMoved&&i.allowThresholdMove&&w!==s.touchesDirection&&b&&y&&Math.abs(g)>=1)return Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,void(i.startTranslate=i.currentTranslate);s.emit("sliderMove",p),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let E=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),g>0?(b&&y&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>s.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+g)**x))):g<0&&(b&&y&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]:s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-("auto"===r.slidesPerView?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<s.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-g)**x))),E&&(p.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(g)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function R(e){const t=this,s=t.touchEventsData;let a,i=e;i.originalEvent&&(i=i.originalEvent);if("touchend"===i.type||"touchcancel"===i.type){if(a=[...i.changedTouches].filter((e=>e.identifier===s.touchId))[0],!a||a.identifier!==s.touchId)return}else{if(null!==s.touchId)return;if(i.pointerId!==s.pointerId)return;a=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)){if(!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return}s.pointerId=null,s.touchId=null;const{params:r,touches:n,rtlTranslate:d,slidesGrid:c,enabled:p}=t;if(!p)return;if(!r.simulateTouch&&"mouse"===i.pointerType)return;if(s.allowTouchCallbacks&&t.emit("touchEnd",i),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&r.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);r.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=o(),m=u-s.touchStartTime;if(t.allowClick){const e=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(e&&e[0]||i.target,e),t.emit("tap click",i),m<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(s.lastClickTime=o(),l((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=r.followFinger?d?t.translate:-t.translate:-s.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});const f=h>=-t.maxTranslate()&&!t.params.loop;let g=0,v=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==c[e+t]?(f||h>=c[e]&&h<c[e+t])&&(g=e,v=c[e+t]-c[e]):(f||h>=c[e])&&(g=e,v=c[c.length-1]-c[c.length-2])}let w=null,b=null;r.rewind&&(t.isBeginning?b=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(w=0));const y=(h-c[g])/v,E=g<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(m>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?w:g+E):t.slideTo(g)),"prev"===t.swipeDirection&&(y>1-r.longSwipesRatio?t.slideTo(g+E):null!==b&&y<0&&Math.abs(y)>r.longSwipesRatio?t.slideTo(b):t.slideTo(g))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(g+E):t.slideTo(g):("next"===t.swipeDirection&&t.slideTo(null!==w?w:g+E),"prev"===t.swipeDirection&&t.slideTo(null!==b?b:g))}}function q(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=n&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function V(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function F(e){const t=this;z(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function j(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const W=(e,t)=>{const s=a(),{params:i,el:r,wrapperEl:n,device:l}=e,o=!!i.nested,d="on"===t?"addEventListener":"removeEventListener",c=t;s[d]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),r[d]("touchstart",e.onTouchStart,{passive:!1}),r[d]("pointerdown",e.onTouchStart,{passive:!1}),s[d]("touchmove",e.onTouchMove,{passive:!1,capture:o}),s[d]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[d]("touchend",e.onTouchEnd,{passive:!0}),s[d]("pointerup",e.onTouchEnd,{passive:!0}),s[d]("pointercancel",e.onTouchEnd,{passive:!0}),s[d]("touchcancel",e.onTouchEnd,{passive:!0}),s[d]("pointerout",e.onTouchEnd,{passive:!0}),s[d]("pointerleave",e.onTouchEnd,{passive:!0}),s[d]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",e.onClick,!0),i.cssMode&&n[d]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",q,!0):e[c]("observerUpdate",q,!0),r[d]("load",e.onLoad,{capture:!0})};const U=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var K={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Z(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(!0===e[a]&&(e[a]={enabled:!0}),"navigation"===a&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),a in e&&"enabled"in i?("object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),p(t,s)):p(t,s)):p(t,s)}}const Q={eventsEmitter:I,update:O,translate:D,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=0===e?"0ms":""),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),G({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),G({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:X,loop:H,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=Y.bind(e),e.onTouchMove=B.bind(e),e.onTouchEnd=R.bind(e),e.onDocumentTouchStart=j.bind(e),t.cssMode&&(e.onScroll=_.bind(e)),e.onClick=V.bind(e),e.onLoad=F.bind(e),W(e,"on")},detachEvents:function(){W(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:s,params:a,el:i}=e,r=a.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!n||e.currentBreakpoint===n)return;const l=(n in r?r[n]:void 0)||e.originalParams,o=U(e,a),d=U(e,l),c=a.enabled;o&&!d?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!o&&d&&(i.classList.add(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===l[t])return;const s=a[t]&&a[t].enabled,i=l[t]&&l[t].enabled;s&&!i&&e[t].disable(),!s&&i&&e[t].enable()}));const u=l.direction&&l.direction!==a.direction,m=a.loop&&(l.slidesPerView!==a.slidesPerView||u),h=a.loop;u&&s&&e.changeDirection(),p(e.params,l);const f=e.params.enabled,g=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!f?e.disable():!c&&f&&e.enable(),e.currentBreakpoint=n,e.emit("_beforeBreakpoint",l),s&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!h&&g?(e.loopCreate(t),e.updateSlides()):h&&!g&&e.loopDestroy()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,el:i,device:r}=e,n=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...n),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},J={};class ee{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const n=a();if(t.el&&"string"==typeof t.el&&n.querySelectorAll(t.el).length>1){const e=[];return n.querySelectorAll(t.el).forEach((s=>{const a=p({},t,{el:s});e.push(new ee(a))})),e}const l=this;l.__swiper__=!0,l.support=P(),l.device=L({userAgent:t.userAgent}),l.browser=A(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const o={};l.modules.forEach((e=>{e({params:t,swiper:l,extendParams:Z(t,o),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})}));const d=p({},K,o);return l.params=p({},d,J,t),l.originalParams=p({},l.params),l.passedParams=p({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach((e=>{l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===l.params.direction,isVertical:()=>"vertical"===l.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=y(f(t,`.${s.slideClass}, swiper-slide`)[0]);return y(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=f(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if("number"==typeof s.slidesPerView)return s.slidesPerView;if(s.centeredSlides){let e,t=a[l]?a[l].swiperSlideSize:0;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&z(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&e.updateAutoHeight();else{if(("auto"===s.slidesPerView||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const t=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if("string"==typeof s&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&"SWIPER-CONTAINER"===s.parentNode.host.nodeName&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(s&&s.shadowRoot&&s.shadowRoot.querySelector){return s.shadowRoot.querySelector(a())}return f(s,a())[0]})();return!i&&t.params.createElements&&(i=v("div",t.params.wrapperClass),s.append(i),f(s,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:i,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction")),wrongRTL:"-webkit-box"===b(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach((e=>{e.complete?z(t,e):e.addEventListener("load",(e=>{z(t,e.target)}))})),k(t),t.initialized=!0,k(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),n&&n.length&&n.forEach((e=>{e.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.el.swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){p(J,e)}static get extendedDefaults(){return J}static get defaults(){return K}static installModule(e){ee.prototype.__modules__||(ee.prototype.__modules__=[]);const t=ee.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>ee.installModule(e))),ee):(ee.installModule(e),ee)}}function te(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach((i=>{if(!s[i]&&!0===s.auto){let r=f(e.el,`.${a[i]}`)[0];r||(r=v("div",a[i]),r.className=a[i],e.el.append(r)),s[i]=r,t[i]=r}})),s}function se(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ae(e){const t=this,{params:s,slidesEl:a}=t;s.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,a.append(t.children[0]),t.innerHTML=""}else a.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update()}function ie(e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;s.loop&&t.loopDestroy();let r=a+1;const n=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&n(e[t]);r=a+e.length}else n(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function re(e,t){const s=this,{params:a,activeIndex:i,slidesEl:r}=s;let n=i;a.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.recalcSlides());const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides[t];e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);o=n>e?n+t.length:n}else r.append(t);for(let e=0;e<d.length;e+=1)r.append(d[e]);s.recalcSlides(),a.loop&&s.loopCreate(),a.observer&&!s.isElement||s.update(),a.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function ne(e){const t=this,{params:s,activeIndex:a}=t;let i=a;s.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,n=i;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)r=e[s],t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1),n=Math.max(n,0);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function le(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function oe(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function de(e,t){const s=h(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function ce(e){let{swiper:t,duration:s,transformElements:a,allSlides:i}=e;const{activeIndex:r}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a:a.filter((e=>{const s=e.classList.contains("swiper-slide-transform")?(e=>{if(!e.parentElement)return t.slides.filter((t=>t.shadowRoot&&t.shadowRoot===e.parentNode))[0];return e.parentElement})(e):e;return t.getSlideIndex(s)===r})),e.forEach((e=>{x(e,(()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function pe(e,t,s){const a=`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,i=h(t);let r=i.querySelector(`.${a.split(" ").join(".")}`);return r||(r=v("div",a.split(" ")),i.append(r)),r}Object.keys(Q).forEach((e=>{Object.keys(Q[e]).forEach((t=>{ee.prototype[t]=Q[e][t]}))})),ee.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,s){void 0===s&&(s={});const a=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const s=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(s):l.setTimeout(s,0)}));a.observe(e,{attributes:void 0===s.attributes||s.attributes,childList:void 0===s.childList||s.childList,characterData:void 0===s.characterData||s.characterData}),n.push(a)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=E(t.hostEl);for(let t=0;t<e.length;t+=1)o(e[t])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const ue=[function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const l=a();s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=l.createElement("div");function d(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];let i;return a.renderSlide?(i=a.renderSlide.call(s,e,t),"string"==typeof i&&(o.innerHTML=i,i=o.children[0])):i=s.isElement?v("swiper-slide"):v("div",s.params.slideClass),i.setAttribute("data-swiper-slide-index",t),a.renderSlide||(i.innerHTML=e),a.cache&&(s.virtual.cache[t]=i),i}function c(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i,loop:r}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:c,to:p,slides:u,slidesGrid:m,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const g=s.activeIndex||0;let v,w,b;v=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(w=Math.floor(t/2)+a+o,b=Math.floor(t/2)+a+l):(w=t+(a-1)+o,b=(r?t:a)+l);let y=g-b,E=g+w;r||(y=Math.max(y,0),E=Math.min(E,u.length-1));let x=(s.slidesGrid[y]||0)-(s.slidesGrid[0]||0);function S(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),n("virtualUpdate")}if(r&&g>=b?(y-=b,i||(x+=s.slidesGrid[0])):r&&g<b&&(y=-b,i&&(x+=s.slidesGrid[0])),Object.assign(s.virtual,{from:y,to:E,offset:x,slidesGrid:s.slidesGrid,slidesBefore:b,slidesAfter:w}),c===y&&p===E&&!e)return s.slidesGrid!==m&&x!==h&&s.slides.forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),s.updateProgress(),void n("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:y,to:E,slides:function(){const e=[];for(let t=y;t<=E;t+=1)e.push(u[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?S():n("virtualUpdate"));const T=[],M=[],C=e=>{let t=e;return e<0?t=u.length+e:t>=u.length&&(t-=u.length),t};if(e)s.slides.filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e=>{e.remove()}));else for(let e=c;e<=p;e+=1)if(e<y||e>E){const t=C(e);s.slides.filter((e=>e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e=>{e.remove()}))}const P=r?-u.length:0,L=r?2*u.length:u.length;for(let t=P;t<L;t+=1)if(t>=y&&t<=E){const s=C(t);void 0===p||e?M.push(s):(t>p&&M.push(s),t<c&&T.push(s))}if(M.forEach((e=>{s.slidesEl.append(d(u[e],e))})),r)for(let e=T.length-1;e>=0;e-=1){const t=T[e];s.slidesEl.prepend(d(u[t],t))}else T.sort(((e,t)=>t-e)),T.forEach((e=>{s.slidesEl.prepend(d(u[e],e))}));f(s.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),S()}r("beforeInit",(()=>{if(!s.params.virtual.enabled)return;let e;if(void 0===s.passedParams.virtual.slides){const t=[...s.slidesEl.children].filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`)));t&&t.length&&(s.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),s.virtual.cache[t]=e,e.remove()})))}e||(s.virtual.slides=s.params.virtual.slides),s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,c()})),r("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{c()}),100)):c())})),r("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&u(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);c(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.getAttribute("data-swiper-slide-index");r&&a.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}c(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.params.virtual.cache&&(delete s.virtual.cache[e[a]],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e[a],1),e[a]<t&&(t-=1),t=Math.max(t,0);else s.params.virtual.cache&&(delete s.virtual.cache[e],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e,1),e<t&&(t-=1),t=Math.max(t,0);c(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),c(!0),s.slideTo(0,0)},update:c})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function d(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,m=38===i,h=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&h||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&m||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||m||h)){let e=!1;if(E(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===E(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,i=a.clientWidth,r=a.clientHeight,n=o.innerWidth,l=o.innerHeight,d=w(a);s&&(d.left-=a.scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||m||h)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||h)&&t.slideNext(),(d||m)&&t.slidePrev()),n("keyPress",i)}}function c(){t.keyboard.enabled||(l.addEventListener("keydown",d),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(l.removeEventListener("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&c()})),i("destroy",(()=>{t.keyboard.enabled&&p()})),Object.assign(t.keyboard,{enable:c,disable:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let d;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let c,p=o();const u=[];function m(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&o()-p<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&o()-p<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),p=(new n.Date).getTime(),!1)))}function g(e){let s=e,a=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget));const p=n&&n.contains(s.target);if(!t.mouseEntered&&!p&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let m=0;const h=t.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;m=-g.pixelX*h}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;m=-g.pixelY}else m=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*h:-g.pixelY;if(0===m)return!0;r.invert&&(m=-m);let v=t.getTranslate()+m*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:o(),delta:Math.abs(m),direction:Math.sign(m)},a=c&&e.time<c.time+500&&e.delta<=c.delta&&e.direction===c.direction;if(!a){c=void 0;let n=t.getTranslate()+m*r.sensitivity;const o=t.isBeginning,p=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!o&&t.isBeginning||!p&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(d),d=void 0,u.length>=15&&u.shift();const s=u.length?u[u.length-1]:void 0,a=u[0];if(u.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))u.splice(0);else if(u.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=m>0?.8:.2;c=e,u.splice(0),d=l((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}d||(d=l((()=>{c=e,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),r.releaseOnEdges&&(n===t.minTranslate()||n===t.maxTranslate()))return!0}}else{const s={time:o(),delta:Math.abs(m),direction:Math.sign(m),raw:e};u.length>=2&&u.shift();const a=u.length?u[u.length-1]:void 0;if(u.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(e){let s=t.el;"container"!==t.params.mousewheel.eventsTarget&&(s=document.querySelector(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",h),s[e]("wheel",g)}function w(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",g),!0):!t.mousewheel.enabled&&(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function b(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,g),!0):!!t.mousewheel.enabled&&(v("removeEventListener"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&b(),t.params.mousewheel.enabled&&w()})),a("destroy",(()=>{t.params.cssMode&&w(),t.mousewheel.enabled&&b()})),Object.assign(t.mousewheel,{enable:w,disable:b})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function n(e){let s;return e&&"string"==typeof e&&t.isElement&&(s=t.el.querySelector(e),s)?s:(e&&("string"==typeof e&&(s=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.el.querySelectorAll(e).length&&(s=t.el.querySelector(e))),e&&!s?e:s)}function l(e,s){const a=t.params.navigation;(e=r(e)).forEach((e=>{e&&(e.classList[s?"add":"remove"](...a.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=s),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](a.lockClass))}))}function o(){const{nextEl:e,prevEl:s}=t.navigation;if(t.params.loop)return l(s,!1),void l(e,!1);l(s,t.isBeginning&&!t.params.rewind),l(e,t.isEnd&&!t.params.rewind)}function d(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=te(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let s=n(e.nextEl),a=n(e.prevEl);Object.assign(t.navigation,{nextEl:s,prevEl:a}),s=r(s),a=r(a);const i=(s,a)=>{s&&s.addEventListener("click","next"===a?c:d),!t.enabled&&s&&s.classList.add(...e.lockClass.split(" "))};s.forEach((e=>i(e,"next"))),a.forEach((e=>i(e,"prev")))}function u(){let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s);const a=(e,s)=>{e.removeEventListener("click","next"===s?c:d),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>a(e,"next"))),s.forEach((e=>a(e,"prev")))}a("init",(()=>{!1===t.params.navigation.enabled?m():(p(),o())})),a("toEdge fromEdge lock unlock",(()=>{o()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s),t.enabled?o():[...e,...s].filter((e=>!!e)).forEach((e=>e.classList.add(t.params.navigation.lockClass)))})),a("click",((e,s)=>{let{nextEl:a,prevEl:n}=t.navigation;a=r(a),n=r(n);const l=s.target;if(t.params.navigation.hideOnClick&&!n.includes(l)&&!a.includes(l)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===l||t.pagination.el.contains(l)))return;let e;a.length?e=a[0].classList.contains(t.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...a,...n].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const m=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),o()},disable:m,update:o,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let l=0;const o=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function d(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e&&(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${a}-${s}`),(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&e.classList.add(`${a}-${s}-${s}`))}function p(e){const s=e.target.closest(se(t.params.pagination.bulletClass));if(!s)return;e.preventDefault();const a=y(s)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===a)return;t.slideToLoop(a)}else t.slideTo(a)}function u(){const e=t.rtl,s=t.params.pagination;if(d())return;let a,r,p=t.pagination.el;p=o(p);const u=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,m=t.params.loop?Math.ceil(u/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,a=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(a=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,a=t.activeIndex||0),"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let o,d,u;if(s.dynamicBullets&&(n=S(i[0],t.isHorizontal()?"width":"height",!0),p.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=n*(s.dynamicMainBullets+4)+"px"})),s.dynamicMainBullets>1&&void 0!==r&&(l+=a-(r||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),o=Math.max(a-l,0),d=o+(Math.min(i.length,s.dynamicMainBullets)-1),u=(d+o)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),p.length>1)i.forEach((e=>{const i=y(e);i===a?e.classList.add(...s.bulletActiveClass.split(" ")):t.isElement&&e.setAttribute("part","bullet"),s.dynamicBullets&&(i>=o&&i<=d&&e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),i===o&&c(e,"prev"),i===d&&c(e,"next"))}));else{const e=i[a];if(e&&e.classList.add(...s.bulletActiveClass.split(" ")),t.isElement&&i.forEach(((e,t)=>{e.setAttribute("part",t===a?"bullet-active":"bullet")})),s.dynamicBullets){const e=i[o],t=i[d];for(let e=o;e<=d;e+=1)i[e]&&i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(t,"next")}}if(s.dynamicBullets){const a=Math.min(i.length,s.dynamicMainBullets+4),r=(n*a-n)/2-u*n,l=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?l:"top"]=`${r}px`}))}}p.forEach(((e,r)=>{if("fraction"===s.type&&(e.querySelectorAll(se(s.currentClass)).forEach((e=>{e.textContent=s.formatFractionCurrent(a+1)})),e.querySelectorAll(se(s.totalClass)).forEach((e=>{e.textContent=s.formatFractionTotal(m)}))),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(a+1)/m;let n=1,l=1;"horizontal"===i?n=r:l=r,e.querySelectorAll(se(s.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===s.type&&s.renderCustom?(e.innerHTML=s.renderCustom(t,a+1,m),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass)}))}function m(){const e=t.params.pagination;if(d())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let a=t.pagination.el;a=o(a);let r="";if("bullets"===e.type){let a=t.params.loop?Math.ceil(s/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&a>s&&(a=s);for(let s=0;s<a;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],a.forEach((s=>{"custom"!==e.type&&(s.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...s.querySelectorAll(se(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",a[0])}function h(){t.params.pagination=te(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s;"string"==typeof e.el&&t.isElement&&(s=t.el.querySelector(e.el)),s||"string"!=typeof e.el||(s=[...document.querySelectorAll(e.el)]),s||(s=e.el),s&&0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(s)&&s.length>1&&(s=[...t.el.querySelectorAll(e.el)],s.length>1&&(s=s.filter((e=>E(e,".swiper")[0]===t.el))[0])),Array.isArray(s)&&1===s.length&&(s=s[0]),Object.assign(t.pagination,{el:s}),s=o(s),s.forEach((s=>{"bullets"===e.type&&e.clickable&&s.classList.add(...(e.clickableClass||"").split(" ")),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",p),t.enabled||s.classList.add(e.lockClass)})))}function f(){const e=t.params.pagination;if(d())return;let s=t.pagination.el;s&&(s=o(s),s.forEach((s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(s.classList.remove(...(e.clickableClass||"").split(" ")),s.removeEventListener("click",p))}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}a("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:s}=t.pagination;s=o(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),a("init",(()=>{!1===t.params.pagination.enabled?g():(h(),m(),u())})),a("activeIndexChange",(()=>{void 0===t.snapIndex&&u()})),a("snapIndexChange",(()=>{u()})),a("snapGridLengthChange",(()=>{m(),u()})),a("destroy",(()=>{f()})),a("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),a("lock unlock",(()=>{u()})),a("click",((e,s)=>{const a=s.target,r=o(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),f()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),h(),m(),u()},disable:g,render:m,update:u,init:h,destroy:f})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const o=a();let d,c,p,u,m=!1,h=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s}=t,{dragEl:a,el:i}=e,r=t.params.scrollbar,n=t.params.loop?t.progressLoop:t.progress;let l=c,o=(p-c)*n;s?(o=-o,o>0?(l=c-o,o=0):-o+c>p&&(l=p+o)):o<0?(l=c+o,o=0):o+c>p&&(l=p-o),t.isHorizontal()?(a.style.transform=`translate3d(${o}px, 0, 0)`,a.style.width=`${l}px`):(a.style.transform=`translate3d(0px, ${o}px, 0)`,a.style.height=`${l}px`),r.hide&&(clearTimeout(h),i.style.opacity=1,h=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function b(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:s,el:a}=e;s.style.width="",s.style.height="",p=t.isHorizontal()?a.offsetWidth:a.offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?p*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s.style.width=`${c}px`:s.style.height=`${c}px`,a.style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function y(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:s,rtlTranslate:a}=t,{el:i}=s;let r;r=(y(e)-w(i)[t.isHorizontal()?"left":"top"]-(null!==d?d:c/2))/(p-c),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n,dragEl:l}=a;m=!0,d=e.target===l?y(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",E(e),clearTimeout(f),n.style.transitionDuration="0ms",s.hide&&(n.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function S(e){const{scrollbar:s,wrapperEl:a}=t,{el:i,dragEl:n}=s;m&&(e.preventDefault?e.preventDefault():e.returnValue=!1,E(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",n.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function T(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n}=a;m&&(m=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),s.hide&&(clearTimeout(f),f=l((()=>{n.style.opacity=0,n.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function M(e){const{scrollbar:s,params:a}=t,i=s.el;if(!i)return;const r=i,n=!!a.passiveListeners&&{passive:!1,capture:!1},l=!!a.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const d="on"===e?"addEventListener":"removeEventListener";r[d]("pointerdown",x,n),o[d]("pointermove",S,n),o[d]("pointerup",T,l)}function C(){const{scrollbar:e,el:s}=t;t.params.scrollbar=te(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i,r;if("string"==typeof a.el&&t.isElement&&(i=t.el.querySelector(a.el)),i||"string"!=typeof a.el)i||(i=a.el);else if(i=o.querySelectorAll(a.el),!i.length)return;t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.querySelectorAll(a.el).length&&(i=s.querySelector(a.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),i&&(r=i.querySelector(se(t.params.scrollbar.dragClass)),r||(r=v("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&M("on"),i&&i.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))}function P(){const e=t.params.scrollbar,s=t.scrollbar.el;s&&s.classList.remove(...n(t.isHorizontal()?e.horizontalClass:e.verticalClass)),t.params.scrollbar.el&&t.scrollbar.el&&M("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?L():(C(),b(),g())})),i("update resize observerUpdate lock unlock",(()=>{b()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(s)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))})),i("destroy",(()=>{P()}));const L=()=>{t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),P()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),C(),b(),g()},disable:L,updateSize:b,setTranslate:g,init:C,destroy:P})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(e,s)=>{const{rtl:a}=t,i=a?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let n=e.getAttribute("data-swiper-parallax-x"),l=e.getAttribute("data-swiper-parallax-y");const o=e.getAttribute("data-swiper-parallax-scale"),d=e.getAttribute("data-swiper-parallax-opacity"),c=e.getAttribute("data-swiper-parallax-rotate");if(n||l?(n=n||"0",l=l||"0"):t.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*s*i+"%":n*s*i+"px",l=l.indexOf("%")>=0?parseInt(l,10)*s+"%":l*s+"px",null!=d){const t=d-(d-1)*(1-Math.abs(s));e.style.opacity=t}let p=`translate3d(${n}, ${l}, 0px)`;if(null!=o){p+=` scale(${o-(o-1)*(1-Math.abs(s))})`}if(c&&null!=c){p+=` rotate(${c*s*-1}deg)`}e.style.transform=p},n=()=>{const{el:e,slides:s,progress:a,snapGrid:n,isElement:l}=t,o=f(e,i);t.isElement&&o.push(...f(t.hostEl,i)),o.forEach((e=>{r(e,a)})),s.forEach(((e,s)=>{let l=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(l+=Math.ceil(s/2)-a*(n.length-1)),l=Math.min(Math.max(l,-1),1),e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e=>{r(e,l)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&n()})),a("setTranslate",(()=>{t.params.parallax.enabled&&n()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{el:s,hostEl:a}=t,r=[...s.querySelectorAll(i)];t.isElement&&r.push(...a.querySelectorAll(i)),r.forEach((t=>{let s=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.style.transitionDuration=`${s}ms`}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c=1,p=!1;const u=[],m={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function b(){if(u.length<2)return 1;const e=u[0].pageX,t=u[0].pageY,s=u[1].pageX,a=u[1].pageY;return Math.sqrt((s-e)**2+(a-t)**2)}function y(e){const s=t.isElement?"swiper-slide":`.${t.params.slideClass}`;return!!e.target.matches(s)||t.slides.filter((t=>t.contains(e.target))).length>0}function x(e){if("mouse"===e.pointerType&&u.splice(0,u.length),!y(e))return;const s=t.params.zoom;if(l=!1,o=!1,u.push(e),!(u.length<2)){if(l=!0,m.scaleStart=b(),!m.slideEl){m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=t.slides[t.activeIndex]);let a=m.slideEl.querySelector(`.${s.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=a,m.imageWrapEl=a?E(m.imageEl,`.${s.containerClass}`)[0]:void 0,!m.imageWrapEl)return void(m.imageEl=void 0);m.maxRatio=m.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio}if(m.imageEl){const[e,t]=function(){if(u.length<2)return{x:null,y:null};const e=m.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-e.x-n.scrollX)/c,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-e.y-n.scrollY)/c]}();m.originX=e,m.originY=t,m.imageEl.style.transitionDuration="0ms"}p=!0}}function S(e){if(!y(e))return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(u[i]=e),u.length<2||(o=!0,m.scaleMove=b(),m.imageEl&&(a.scale=m.scaleMove/m.scaleStart*c,a.scale>m.maxRatio&&(a.scale=m.maxRatio-1+(a.scale-m.maxRatio+1)**.5),a.scale<s.minRatio&&(a.scale=s.minRatio+1-(s.minRatio-a.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`))}function T(e){if(!y(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&u.splice(i,1),l&&o&&(l=!1,o=!1,m.imageEl&&(a.scale=Math.max(Math.min(a.scale,m.maxRatio),s.minRatio),m.imageEl.style.transitionDuration=`${t.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`,c=a.scale,p=!1,a.scale>1&&m.slideEl?m.slideEl.classList.add(`${s.zoomedSlideClass}`):a.scale<=1&&m.slideEl&&m.slideEl.classList.remove(`${s.zoomedSlideClass}`),1===a.scale&&(m.originX=0,m.originY=0,m.slideEl=void 0)))}function M(e){if(!y(e)||!function(e){const s=`.${t.params.zoom.containerClass}`;return!!e.target.matches(s)||[...t.hostEl.querySelectorAll(s)].filter((t=>t.contains(e.target))).length>0}(e))return;const s=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!m.slideEl)return;h.isMoved||(h.width=m.imageEl.offsetWidth,h.height=m.imageEl.offsetHeight,h.startX=d(m.imageWrapEl,"x")||0,h.startY=d(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");const a=h.width*s.scale,i=h.height*s.scale;if(a<m.slideWidth&&i<m.slideHeight)return;h.minX=Math.min(m.slideWidth/2-a/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-i/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:e.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:e.pageY;if(Math.max(Math.abs(h.touchesCurrent.x-h.touchesStart.x),Math.abs(h.touchesCurrent.y-h.touchesStart.y))>5&&(t.allowClick=!1),!h.isMoved&&!p){if(t.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x))return void(h.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y))return void(h.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),h.isMoved=!0;const r=(s.scale-c)/(m.maxRatio-t.params.zoom.minRatio),{originX:n,originY:l}=m;h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX+r*(h.width-2*n),h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY+r*(h.height-2*l),h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=h.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=h.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(h.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(h.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(h.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(h.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=h.touchesCurrent.x,g.prevPositionY=h.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function C(){const e=t.zoom;m.slideEl&&t.activeIndex!==t.slides.indexOf(m.slideEl)&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0,m.originX=0,m.originY=0)}function P(e){const s=t.zoom,a=t.params.zoom;if(!m.slideEl){e&&e.target&&(m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),m.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex]);let s=m.slideEl.querySelector(`.${a.containerClass}`);s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=s,m.imageWrapEl=s?E(m.imageEl,`.${a.containerClass}`)[0]:void 0}if(!m.imageEl||!m.imageWrapEl)return;let i,r,l,o,d,p,u,g,v,b,y,x,S,T,M,C,P,L;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${a.zoomedSlideClass}`),void 0===h.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=h.touchesStart.x,r=h.touchesStart.y);const A="number"==typeof e?e:null;1===c&&A&&(i=void 0,r=void 0),s.scale=A||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,c=A||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,!e||1===c&&A?(u=0,g=0):(P=m.slideEl.offsetWidth,L=m.slideEl.offsetHeight,l=w(m.slideEl).left+n.scrollX,o=w(m.slideEl).top+n.scrollY,d=l+P/2-i,p=o+L/2-r,v=m.imageEl.offsetWidth,b=m.imageEl.offsetHeight,y=v*s.scale,x=b*s.scale,S=Math.min(P/2-y/2,0),T=Math.min(L/2-x/2,0),M=-S,C=-T,u=d*s.scale,g=p*s.scale,u<S&&(u=S),u>M&&(u=M),g<T&&(g=T),g>C&&(g=C)),A&&1===s.scale&&(m.originX=0,m.originY=0),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${u}px, ${g}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`}function L(){const e=t.zoom,s=t.params.zoom;if(!m.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex];let e=m.slideEl.querySelector(`.${s.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=e,m.imageWrapEl=e?E(m.imageEl,`.${s.containerClass}`)[0]:void 0}m.imageEl&&m.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${s.zoomedSlideClass}`),m.slideEl=void 0,m.originX=0,m.originY=0)}function A(e){const s=t.zoom;s.scale&&1!==s.scale?L():P(e)}function I(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function z(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:s,activeListenerWithCapture:a}=I();t.wrapperEl.addEventListener("pointerdown",x,s),t.wrapperEl.addEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,T,s)})),t.wrapperEl.addEventListener("pointermove",M,a)}function $(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:s,activeListenerWithCapture:a}=I();t.wrapperEl.removeEventListener("pointerdown",x,s),t.wrapperEl.removeEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,T,s)})),t.wrapperEl.removeEventListener("pointermove",M,a)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.imageEl,s=m.slideEl;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&z()})),a("destroy",(()=>{$()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;if(!m.imageEl)return;if(h.isTouched)return;s.android&&e.cancelable&&e.preventDefault(),h.isTouched=!0;const a=u.length>0?u[0]:e;h.touchesStart.x=a.pageX,h.touchesStart.y=a.pageY}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!h.isMoved)return h.isTouched=!1,void(h.isMoved=!1);h.isTouched=!1,h.isMoved=!1;let s=300,a=300;const i=g.x*s,r=h.currentX+i,n=g.y*a,l=h.currentY+n;0!==g.x&&(s=Math.abs((r-h.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-h.currentY)/g.y));const o=Math.max(s,a);h.currentX=r,h.currentY=l;const d=h.width*e.scale,c=h.height*e.scale;h.minX=Math.min(m.slideWidth/2-d/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-c/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),m.imageWrapEl.style.transitionDuration=`${o}ms`,m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&A(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:z,disable:$,in:P,out:L,toggle:A})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const s=a=>{t.controller.control=a.detail[0],t.update(),e.removeEventListener("init",s)};e.addEventListener("init",s)}}else t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){if(e.destroyed)return;const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid)}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(r)&&Number.isFinite(r)||(r=1),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.destroyed||(s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&l((()=>{s.updateAutoHeight()})),x(s.wrapperEl,(()=>{i&&s.transitionEnd()}))))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const n=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function l(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function o(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function d(e,t){(e=n(e)).forEach((e=>{e.setAttribute("role",t)}))}function c(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function p(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function u(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function m(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function h(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=e.target;t.pagination&&t.pagination.el&&(a===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(se(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&a===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&a===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.matches(se(t.params.pagination.bulletClass))&&a.click())}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const w=(e,t,s)=>{l(e),"BUTTON"!==e.tagName&&(d(e,"button"),e.addEventListener("keydown",h)),p(e,s),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}(e,t)},b=()=>{t.a11y.clicked=!0},E=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},S=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&d(t.slides,e.slideRole);const s=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((a,i)=>{const r=t.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;p(a,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,s))}))},T=()=>{const e=t.params.a11y;t.el.append(i);const s=t.el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.wrapperEl,r=e.id||a.getAttribute("id")||`swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var l;const o=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var d;d=r,n(a).forEach((e=>{e.setAttribute("id",d)})),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}(a,o),S();let{nextEl:u,prevEl:m}=t.navigation?t.navigation:{};if(u=n(u),m=n(m),u&&u.forEach((t=>w(t,r,e.nextSlideMessage))),m&&m.forEach((t=>w(t,r,e.prevSlideMessage))),g()){n(t.pagination.el).forEach((e=>{e.addEventListener("keydown",h)}))}t.el.addEventListener("focus",x,!0),t.el.addEventListener("pointerdown",b,!0),t.el.addEventListener("pointerup",E,!0)};a("beforeInit",(()=>{i=v("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")})),a("afterInit",(()=>{t.params.a11y.enabled&&T()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&S()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:s}=t.navigation;s&&(t.isBeginning?(u(s),o(s)):(m(s),l(s))),e&&(t.isEnd?(u(e),o(e)):(m(e),l(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.forEach((s=>{t.params.pagination.clickable&&(l(s),t.params.pagination.renderBullet||(d(s,"button"),p(s,e.paginationBulletMessage.replace(/\{\{index\}\}/,y(s)+1)))),s.matches(se(t.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){i&&i.remove();let{nextEl:e,prevEl:s}=t.navigation?t.navigation:{};e=n(e),s=n(s),e&&e.forEach((e=>e.removeEventListener("keydown",h))),s&&s.forEach((e=>e.removeEventListener("keydown",h))),g()&&n(t.pagination.el).forEach((e=>{e.removeEventListener("keydown",h)}));t.el.removeEventListener("focus",x,!0),t.el.removeEventListener("pointerdown",b,!0),t.el.removeEventListener("pointerup",E,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides[s];let d=l(o.getAttribute("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e?`${e}/`:""}${d}`}else n.pathname.includes(e)||(d=`${e?`${e}/`:""}${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(l(r.getAttribute("data-history"))===s){const s=t.getSlideIndex(r);t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),n.key||n.value?(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p)):t.params.history.replaceState||e.addEventListener("popstate",p)}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),d=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,s){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===s))[0];if(!e)return 0;return parseInt(e.getAttribute("data-swiper-slide-index"),10)}return t.getSlideIndex(f(t.slidesEl,`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])}}});const c=()=>{i("hashChange");const e=o.location.hash.replace("#",""),s=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex];if(e!==(s?s.getAttribute("data-hash"):"")){const s=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===s||Number.isNaN(s))return;t.slideTo(s)}},p=()=>{if(!l||!t.params.hashNavigation.enabled)return;const e=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],s=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState?(d.history.replaceState(null,null,`#${s}`||""),i("hashSet")):(o.location.hash=s||"",i("hashSet"))};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0,a=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(a||0,s,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&d.addEventListener("hashchange",c)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d.removeEventListener("hashchange",c)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p()})),n("slideChange",(()=>{l&&t.params.cssMode&&p()}))},function(e){let t,s,{swiper:i,extendParams:r,on:n,emit:l,params:o}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,p,u,m,h,f,g,v=o&&o.autoplay?o.autoplay.delay:3e3,w=o&&o.autoplay?o.autoplay.delay:3e3,b=(new Date).getTime();function y(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",y),g||C())}const E=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(w=d,c=!1);const e=i.autoplay.paused?d:b+w-(new Date).getTime();i.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/v),s=requestAnimationFrame((()=>{E()}))},x=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(s),E();let a=void 0===e?i.params.autoplay.delay:e;v=i.params.autoplay.delay,w=i.params.autoplay.delay;const r=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===e&&(a=r,v=r,w=r),d=a;const n=i.params.speed,o=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,n,!0,!0),l("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,n,!0,!0),l("autoplay")),i.params.cssMode&&(b=(new Date).getTime(),requestAnimationFrame((()=>{x()}))))};return a>0?(clearTimeout(t),t=setTimeout((()=>{o()}),a)):requestAnimationFrame((()=>{o()})),a},S=()=>{b=(new Date).getTime(),i.autoplay.running=!0,x(),l("autoplayStart")},T=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(s),l("autoplayStop")},M=(e,s)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(f=!0);const a=()=>{l("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",y):C()};if(i.autoplay.paused=!0,s)return h&&(d=i.params.autoplay.delay),h=!1,void a();const r=d||i.params.autoplay.delay;d=r-((new Date).getTime()-b),i.isEnd&&d<0&&!i.params.loop||(d<0&&(d=0),a())},C=()=>{i.isEnd&&d<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(b=(new Date).getTime(),f?(f=!1,x(d)):x(),i.autoplay.paused=!1,l("autoplayResume"))},P=()=>{if(i.destroyed||!i.autoplay.running)return;const e=a();"hidden"===e.visibilityState&&(f=!0,M(!0)),"visible"===e.visibilityState&&C()},L=e=>{"mouse"===e.pointerType&&(f=!0,g=!0,i.animating||i.autoplay.paused||M(!0))},A=e=>{"mouse"===e.pointerType&&(g=!1,i.autoplay.paused&&C())};n("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",L),i.el.addEventListener("pointerleave",A)),a().addEventListener("visibilitychange",P),S())})),n("destroy",(()=>{i.el.removeEventListener("pointerenter",L),i.el.removeEventListener("pointerleave",A),a().removeEventListener("visibilitychange",P),i.autoplay.running&&T()})),n("_freeModeStaticRelease",(()=>{(u||f)&&C()})),n("_freeModeNoMomentumRelease",(()=>{i.params.autoplay.disableOnInteraction?T():M(!0,!0)})),n("beforeTransitionStart",((e,t,s)=>{!i.destroyed&&i.autoplay.running&&(s||!i.params.autoplay.disableOnInteraction?M(!0,!0):T())})),n("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?T():(p=!0,u=!1,f=!1,m=setTimeout((()=>{f=!0,u=!0,M(!0)}),200)))})),n("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return u=!1,void(p=!1);u&&i.params.cssMode&&C(),u=!1,p=!1}})),n("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(h=!0)})),Object.assign(i.autoplay,{start:S,stop:T,pause:M,resume:C})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;function l(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&a.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function o(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(c(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),n=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function d(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.forEach((e=>e.classList.remove(r))),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)f(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)s.slides[t.realIndex+e]&&s.slides[t.realIndex+e].classList.add(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){const i=s.activeIndex;let r,o;if(s.params.loop){const e=s.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=s.slides.indexOf(e),o=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,o=r>t.previousIndex?"next":"prev";l&&(r+="next"===o?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r=r>i?r-Math.floor(a/2)+1:r+Math.floor(a/2)-1:r>i&&s.params.slidesPerGroup,s.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const s=a(),i=()=>{const a="string"==typeof e.swiper?s.querySelector(e.swiper):e.swiper;if(a&&a.swiper)e.swiper=a.swiper,o(),d(!0);else if(a){const s=i=>{e.swiper=i.detail[0],a.removeEventListener("init",s),o(),d(!0),e.swiper.update(),t.update()};a.addEventListener("init",s)}return a},r=()=>{if(t.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),d(!0)})),i("slideChange update resize observerUpdate",(()=>{d()})),i("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&n&&e.destroy()})),Object.assign(t.thumbs,{init:o,update:d})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){if(t.params.cssMode)return;const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){if(t.params.cssMode)return;const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:o()})},onTouchEnd:function(e){let{currentPos:s}=e;if(t.params.cssMode)return;const{params:r,wrapperEl:n,rtlTranslate:l,snapGrid:d,touchEventsData:c}=t,p=o()-c.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),s=c.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||o()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let p=t.translate+s;l&&(p=-p);let u,m=!1;const h=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(p<t.maxTranslate())r.freeMode.momentumBounce?(p+t.maxTranslate()<-h&&(p=t.maxTranslate()-h),u=t.maxTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(p>t.minTranslate())r.freeMode.momentumBounce?(p-t.minTranslate()>h&&(p=t.minTranslate()+h),u=t.minTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-p){e=t;break}p=Math.abs(d[e]-p)<Math.abs(d[e-1]-p)||"next"===t.swipeDirection?d[e]:d[e-1],p=-p}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-p-t.translate)/t.velocity):Math.abs((p-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-p:p)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&m?(t.updateProgress(u),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,x(n,(()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||p>=r.longSwipesMs)&&(a("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,i,{swiper:r,extendParams:n,on:l}=e;n({grid:{rows:1,fill:"column"}});const o=()=>{let e=r.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*r.size:"string"==typeof e&&(e=parseFloat(e)),e};l("init",(()=>{i=r.params.grid&&r.params.grid.rows>1})),l("update",(()=>{const{params:e,el:t}=r,s=e.grid&&e.grid.rows>1;i&&!s?(t.classList.remove(`${e.containerModifierClass}grid`,`${e.containerModifierClass}grid-column`),a=1,r.emitContainerClasses()):!i&&s&&(t.classList.add(`${e.containerModifierClass}grid`),"column"===e.grid.fill&&t.classList.add(`${e.containerModifierClass}grid-column`),r.emitContainerClasses()),i=s})),r.grid={initSlides:e=>{const{slidesPerView:i}=r.params,{rows:n,fill:l}=r.params.grid,o=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:e.length;a=Math.floor(o/n),t=Math.floor(o/n)===o/n?o:Math.ceil(o/n)*n,"auto"!==i&&"row"===l&&(t=Math.max(t,i*n)),s=t/n},unsetSlides:()=>{r.slides&&r.slides.forEach((e=>{e.swiperSlideGridSet&&(e.style.height="",e.style[r.getDirectionLabel("margin-top")]="")}))},updateSlide:(e,i,n)=>{const{slidesPerGroup:l}=r.params,d=o(),{rows:c,fill:p}=r.params.grid,u=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:n.length;let m,h,f;if("row"===p&&l>1){const s=Math.floor(e/(l*c)),a=e-c*l*s,r=0===s?l:Math.min(Math.ceil((u-s*c*l)/c),l);f=Math.floor(a/r),h=a-f*r+s*l,m=h+f*t/c,i.style.order=m}else"column"===p?(h=Math.floor(e/c),f=e-h*c,(h>a||h===a&&f===c-1)&&(f+=1,f>=c&&(f=0,h+=1))):(f=Math.floor(e/s),h=e-f*s);i.row=f,i.column=h,i.style.height=`calc((100% - ${(c-1)*d}px) / ${c})`,i.style[r.getDirectionLabel("margin-top")]=0!==f?d&&`${d}px`:"",i.swiperSlideGridSet=!0},updateWrapperSize:(e,s)=>{const{centeredSlides:a,roundLengths:i}=r.params,n=o(),{rows:l}=r.params.grid;if(r.virtualSize=(e+n)*t,r.virtualSize=Math.ceil(r.virtualSize/l)-n,r.params.cssMode||(r.wrapperEl.style[r.getDirectionLabel("width")]=`${r.virtualSize+n}px`),a){const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];i&&(a=Math.floor(a)),s[t]<r.virtualSize+s[0]&&e.push(a)}s.splice(0,s.length),s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:ae.bind(t),prependSlide:ie.bind(t),addSlide:re.bind(t),removeSlide:ne.bind(t),removeAllSlides:le.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}}),oe({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t;t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let a=-e.swiperSlideOffset;t.params.virtualTranslate||(a-=t.translate);let i=0;t.isHorizontal()||(i=a,a=0);const r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=de(0,e);n.style.opacity=r,n.style.transform=`translate3d(${a}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),ce({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"left":"top")).split(" ")),e.append(a)),i||(i=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"right":"bottom")).split(" ")),e.append(i)),a&&(a.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};oe({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:d}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let m,h=0;c.shadow&&(p?(m=t.wrapperEl.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),t.wrapperEl.append(m)),m.style.height=`${r}px`):(m=e.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),e.append(m))));for(let e=0;e<a.length;e+=1){const s=a[e];let r=e;u&&(r=parseInt(s.getAttribute("data-swiper-slide-index"),10));let n=90*r,d=Math.floor(n/360);l&&(n=-n,d=Math.floor(-n/360));const m=Math.max(Math.min(s.progress,1),-1);let f=0,g=0,v=0;r%4==0?(f=4*-d*o,v=0):(r-1)%4==0?(f=0,v=4*-d*o):(r-2)%4==0?(f=o+4*d*o,v=o):(r-3)%4==0&&(f=-o,v=3*o+4*o*d),l&&(f=-f),p||(g=f,f=0);const w=`rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${g}px, ${v}px)`;m<=1&&m>-1&&(h=90*r+90*m,l&&(h=90*-r-90*m),t.browser&&t.browser.isSafari&&Math.abs(h)/90%2==1&&(h+=.001)),s.style.transform=w,c.slideShadows&&i(s,m,p)}if(s.style.transformOrigin=`50% 50% -${o/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(p)m.style.transform=`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;m.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`}const f=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;s.style.transform=`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${f}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,s)=>{let a=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=pe("flip",e,t.isHorizontal()?"left":"top")),i||(i=pe("flip",e,t.isHorizontal()?"right":"bottom")),a&&(a.style.opacity=Math.max(-s,0)),i&&(i.style.opacity=Math.max(s,0))};oe({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e[r];let l=n.progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n.progress,1),-1));const o=n.swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),t.browser&&t.browser.isSafari&&(Math.abs(d)/90%2==1&&(d+=.001),Math.abs(c)/90%2==1&&(c+=.001)),n.style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l);const m=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;de(0,n).style.transform=m}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),ce({swiper:t,duration:e,transformElements:s})},recreateShadows:()=>{t.params.flipEffect,t.slides.forEach((e=>{let s=e.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(e.progress,1),-1)),i(e,s)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),oe({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,s=a.length;e<s;e+=1){const s=a[e],l=i[e],p=(o-s.swiperSlideOffset-l/2)/l,u="function"==typeof r.modifier?r.modifier(p):p*r.modifier;let m=n?d*u:0,h=n?0:d*u,f=-c*Math.abs(u),g=r.stretch;"string"==typeof g&&-1!==g.indexOf("%")&&(g=parseFloat(r.stretch)/100*l);let v=n?0:g*u,w=n?g*u:0,b=1-(1-r.scale)*Math.abs(u);Math.abs(w)<.001&&(w=0),Math.abs(v)<.001&&(v=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(h)<.001&&(h=0),Math.abs(b)<.001&&(b=0),t.browser&&t.browser.isSafari&&(Math.abs(m)/90%2==1&&(m+=.001),Math.abs(h)/90%2==1&&(h+=.001));const y=`translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;if(de(0,s).style.transform=y,s.style.zIndex=1-Math.abs(Math.round(u)),r.slideShadows){let e=n?s.querySelector(".swiper-slide-shadow-left"):s.querySelector(".swiper-slide-shadow-top"),t=n?s.querySelector(".swiper-slide-shadow-right"):s.querySelector(".swiper-slide-shadow-bottom");e||(e=pe("coverflow",s,n?"left":"top")),t||(t=pe("coverflow",s,n?"right":"bottom")),e&&(e.style.opacity=u>0?u:0),t&&(t.style.opacity=-u>0?-u:0)}}},setTransition:e=>{t.slides.map((e=>h(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;oe({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${e}px))`}for(let s=0;s<e.length;s+=1){const a=e[s],o=a.progress,d=Math.min(Math.max(a.progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a.originalProgress,-r.limitProgress),r.limitProgress));const p=a.swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],m=[0,0,0];let h=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,h=!0):d>0&&(f=r.prev,h=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),m.forEach(((e,s)=>{let a=f.rotate[s]*Math.abs(d*n);t.browser&&t.browser.isSafari&&Math.abs(a)/90%2==1&&(a+=.001),m[s]=a})),a.style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,y=`translate3d(${g}) ${v} ${w}`;if(h&&f.shadow||!h){let e=a.querySelector(".swiper-slide-shadow");if(!e&&f.shadow&&(e=pe("creative",a)),e){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=de(0,a);E.style.transform=y,E.style.opacity=b,f.origin&&(E.style.transformOrigin=f.origin)}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),ce({swiper:t,duration:e,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),oe({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s,rtlTranslate:a}=t,i=t.params.cardsEffect,{startTranslate:r,isTouched:n}=t.touchEventsData,l=a?-t.translate:t.translate;for(let o=0;o<e.length;o+=1){const d=e[o],c=d.progress,p=Math.min(Math.max(c,-4),4);let u=d.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(u-=e[0].swiperSlideOffset);let m=t.params.cssMode?-u-t.translate:-u,h=0;const f=-100*Math.abs(p);let g=1,v=-i.perSlideRotate*p,w=i.perSlideOffset-.75*Math.abs(p);const b=t.virtual&&t.params.virtual.enabled?t.virtual.from+o:o,y=(b===s||b===s-1)&&p>0&&p<1&&(n||t.params.cssMode)&&l<r,E=(b===s||b===s+1)&&p<0&&p>-1&&(n||t.params.cssMode)&&l>r;if(y||E){const e=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;v+=-28*p*e,g+=-.5*e,w+=96*e,h=-25*e*Math.abs(p)+"%"}if(m=p<0?`calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))`:p>0?`calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))`:`${m}px`,!t.isHorizontal()){const e=h;h=m,m=e}const x=p<0?""+(1+(1-g)*p):""+(1-(1-g)*p),S=`\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;if(i.slideShadows){let e=d.querySelector(".swiper-slide-shadow");e||(e=pe("cards",d)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}d.style.zIndex=-Math.abs(Math.round(c))+e.length;de(0,d).style.transform=S}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),ce({swiper:t,duration:e,transformElements:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return ee.use(ue),ee}();
//# sourceMappingURL=swiper-bundle.min.js.map

PageBase.DefaultPageLoadBase = function () {
    $.extend(this, new PageBase.DefaultPageLoad());
};
PageBase.PageLoad = function () {
    $this = this;
    $.extend(this, new PageBase.DefaultPageLoadBase());

    this.onLoad = function () {
        /*-- Scroll totop button --*/
        var toTop = $('.back-to-top');
        toTop.click(function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: '0px' }, 800);
            return false;
        });
    };
    this.luckyPopup = function (element) {
        var modal = document.getElementById("modal-lucky");
        modal.style.display = "block";
        $("body").css("overflow", "hidden");

        // Get the <span> element that closes the modal
        var span = element.find(".close-lucky")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            $("body").css("overflow", "auto");
        }
    }

    $.extend(this, new LuckyRound());
    $.extend(this, new GiftBox());
    $.extend(this, new Carousel($this));
    let shopping = new Shopping();
    let location = new Location();
    shopping.getListTotal();

    this.fbComment = function (element) {
        var url = element.attr("data-fb-url");
        element.removeAttr("data-fb-url");

        var boxComment = $('<div class="fb-comments" data-width="100%" data-href="' + url + '"  data-numposts="5"></div>');
        element.append(boxComment);
        Core.runToCondition(function () {
            if (FB != null) {
                FB.XFBML.parse(element[0]);
                return true;
            }
            ;
            return false;
        }, 500);
    }
    this.pad = function (n) {
        return (n < 10 ? '0' : '') + n;
    }

    this.getCountdownFunction = function (element, target_date, pad) {
        var days, hours, minutes, seconds; // variables for time units

        var countdown = element.find(".tiles-count-down"); // get tag element
        var current_date = new Date().getTime();
        if (current_date >= target_date) {
            countdown.html("<span>00</span><span>:</span><span>00</span>><span>:</span><span>00</span>");
            return;
        }

        // find the amount of "seconds" between now and target
        var seconds_left = (target_date - current_date) / 1000;
        var dayNumber = parseInt(seconds_left / 86400);
        days = pad(dayNumber);
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;

        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));

        // format countdown string + set tag value
        if (dayNumber > 0)
            countdown.html("<span>" + days + "</span><span>:</span><span>" + hours + "</span><span>:</span><span>" + minutes + "</span><span>:</span><span>" + seconds + "</span>");
        else
            countdown.html("<span>" + hours + "</span><span>:</span><span>" + minutes + "</span><span>:</span><span>" + seconds + "</span>");

    }
    this.getCountdown = function (element) {
        var deadline = parseInt(element.attr("data-deadline"));
        var target_date = new Date().getTime() + deadline; // set the countdown date
        var pad = this.pad;
        this.getCountdownFunction(element, target_date, pad);
        var functionCount = this.getCountdownFunction;
        setInterval(function () { functionCount(element, target_date, pad); }, 1000);
        element.find(".btn-buy-now-100").click(function () {
            var $el = $(this);

            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
            var form = $("#get-promotion");
            form.show();
            form.find("[name='PromotionId']").val(parseInt($el.attr("data-promotion-id")));
            form.find("[name='ProductId']").val(parseInt($el.attr("data-product-id")));
            form.find("[name='Price']").val(parseInt($el.attr("data-price")));
            if ($el.attr("data-has-code") || $el.attr("data-has-code") == "true") form.find("#form-has-code").removeClass("hide")
            else form.find("#form-has-code").addClass("hide")
        })
    }
    this.commentActive = function (element) {
        element.click(function () {
            var form = $("#comment-popup");
            form.show();
        })
    }
    this.popupGetPromotion = function (element) {
        var $this = this;
        element.find("form").submit(function (e) {
            $this.clickPurchaseEvent();
            e.preventDefault();
            var data = $(this).getValues();
            var ajax = new CoreAjax(); ajax.typeAction = "Projects.Web.Pages.ProductDetail";
            ajax.post("AcceptPromotion", data, function (res) {
                element.hide();
                $("#done-promotion").show();
            },
            );
        })
        element.click(function (event) {
            if (!element.find('.popup-location').is(event.target) && !element.find('.popup-location').has(event.target).length) {
                element.hide();
                $('html, body').css({
                    overflow: 'auto',
                    height: '100%'
                });
            }
        });
    }
    this.popupComment = function (element) {
        element.find("form").submit(function (e) {
            e.preventDefault();
            var $this = $(this);
            var data = $this.getValues();
            if (data.Name == "" || data.Phone == "" || data.Desciption == "") {
                Core.alert("Bạn chưa điền đầy đủ thông tin!");
                return;
            }
            element.hide();
            $("#done-comment").show();
        })
        element.click(function (event) {
            if (!element.find('.popup-location').is(event.target) && !element.find('.popup-location').has(event.target).length) {
                element.hide();
                $('html, body').css({
                    overflow: 'auto',
                    height: '100%'
                });
            }
        });
    }
    this.clickToComments = function (element) {
        element.click(function (e) {
            e.preventDefault();

            var y = $("#comments-header").offset().top - 20;
            window.scrollTo({ top: y, behavior: 'smooth' });
        })
    }
    this.popupDonePromotion = function (element) {
        element.find("button").click(function (e) {
            element.hide();
            $('html, body').css({
                overflow: 'auto',
                height: '100%'
            });
        })
        element.click(function (event) {
            if (!element.find('.popup-location').is(event.target) && !element.find('.popup-location').has(event.target).length) {
                element.hide();
                $('html, body').css({
                    overflow: 'auto',
                    height: '100%'
                });
            }
        });
    }
    this.popupDoneComment = function (element) {
        element.find("button").click(function (e) {
            element.hide();
            $('html, body').css({
                overflow: 'auto',
                height: '100%'
            });
        })
        element.click(function (event) {
            if (!element.find('.popup-location').is(event.target) && !element.find('.popup-location').has(event.target).length) {
                element.hide();
                $('html, body').css({
                    overflow: 'auto',
                    height: '100%'
                });
            }
        });
    }
    this.filterPopup = function (element) {
        var width = screen.width;
        if (width < 750) {
            var filter = element.find(".filter-show");
            filter.css("width", "100vw");
            filter.each(function () {
                $(this).css("left", -($(this).parent().offset().left));
            });

        }

        element.find('.filter-item').click(function (event) {
            if ($(this).find('.filter-item__title').has(event.target).length) {
                let className = $(this).attr('class');
                if (className.includes("isShowing")) {
                    $(this).removeClass("isShowing");
                    $(this).find(".filter-show").hide();
                    $(this).find(".filter-item__title").removeClass("active showing");
                    if (Core.isMobile()) {
                        var parent = $(this).parents(".row.background-mobile-white");
                        var filterContainer = parent.find("#filter-container");
                        filterContainer.hide()
                    }
                } else {
                    element.find('.filter-item').removeClass("isShowing");
                    element.find("div.filter-show").hide();
                    element.find("div.filter-item__title").removeClass("active showing");
                    $(this).addClass("isShowing")
                    $(this).find("div.filter-item__title").addClass("active showing");
                    if (Core.isMobile()) {
                        // 

                        var filterItem = $(this);
                        var parent = filterItem.parents(".row.background-mobile-white");
                        var filterContainer = parent.find("#filter-container");
                        var id = filterItem.attr("data-attribute1");
                        var idContainer = filterContainer.find(".filter-list").attr("data-from");
                        if (id != idContainer) {
                            var current = $(this).find(".filter-list");
                            current.attr("data-from", id);
                            var old = filterContainer.find(".filter-list");
                            var oldFilterItem = parent.find("[data-attribute1=" + old.attr("data-from") + "]").find(".filter-show");
                            oldFilterItem.append(old);
                            filterContainer.append(current);
                        }
                        filterContainer.show()
                    } else {

                        $(this).find("div.filter-show").show();
                    }

                }
            }
        })
        $(window).click(function (event) {
            if (!element.find('.filter-item').is(event.target) && !element.find('.filter-item').has(event.target).length) {
                element.find('.filter-item').removeClass("isShowing");
                element.find("div.filter-show").css("display", "none");
                element.find("div.filter-item__title").removeClass("active showing");
                if (Core.isMobile()) {
                    $("#filter-container").hide()
                }
            }
        });
    }
    this.menuMobile = function (element) {
        element.find(".list-group-item-mobile>a").click(function (event) {

            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
                return;
            }
            element.find(".list-group-item-mobile").removeClass("active");

            $(this).parent().addClass("active");
        })

    }
    this.showMenuMobile = function (element) {
        $(".menu-bar-toggle").click(function () {
            $(".menu-mobile-full-screen").toggle();
            $("body").css("overflow", "hidden");
        })
        $(".fa.fa-times").click(function () {
            $(".menu-mobile-full-screen").hide();
            $("body").css("overflow", "auto");
        })
    }
    this.activeDescription = function (element) {
        element.click(function () {
            $(this).next().toggleClass('show');
        })
    }
    this.youtubeControl = function (element) {
        element.find('.item-youtube').click(function () {
            element.find('.item-youtube').removeClass('active')
            $(this).addClass('active')
            const url = $(this).attr('data-embed');
            element.find('#video-youtube').attr('src', url);
            element.find(".youtube>img").hide();
            element.find("iframe").show();
        })
        element.find(".youtube>img").click(function () {
            const url = element.attr('data-embed');
            element.find('#video-youtube').attr('src', url);
            $(this).hide();
            element.find("iframe").show();
        })
    }
    this.youtubeOpen = function (element) {
        element.find("img").click(function () {
            const url = $(this).attr('data-embed');
            element.find('#video-youtube').attr('src', url);
            $(this).hide();
            element.find("iframe").show();
        })
    }
    this.loadMoreNewsPost = function (element) {
        var $base = this;
        element.find('.button-load-more').click(function () {
            debugger
            var $this = $(this);
            let pageSize = parseInt($this.attr("data-page-size"));
            let pageIndex = parseInt($this.attr("data-page-index"));
            let pageTotal = parseInt($this.attr("data-page-total"));
            let categoryId = parseInt($this.attr("data-page-category"));
            pageIndex = pageIndex + 1;
            let ajax = new CoreAjax(); ajax.typeAction = "Projects.Web.Pages.ArticleCategory";
            $this.prop('disabled', true)
            ajax.post2("LoadMoreArticles", { pageSize: pageSize, pageIndex: pageIndex, categoryId:categoryId }, function (res) {
                element.find(".data-post").append(res.Data.Output);
                $base.runElement(element.find(".page-" + pageIndex));
                $this.prop('disabled', false)
                $this.attr("data-page-index", pageIndex)
                if (pageTotal <= (pageIndex * pageSize)) $this.hide();
            },
            );
        });
    }
    this.firstPlay = function (element) {
        element.attr("data-embed");
    }
    this.loadSearch = function (section) {
        let $this = this;
        section.find('.best-search-item').click(function () {
            const keyword = $(this).text();
            section.find('.search-input').val(keyword);
            section.find('.result-search').show();
        })
        section.find('.search-input').focus(function () {
            section.find('.best-search').show();
        })

        section.find('.search-input').on("keydown", function (event) {
            if (event.which === 13) {
                const search = section.find('.search-input').val();
                window.location.href = "/tim-kiem#q=" + search;
            }
        });
        section.find('.search-input').keyup(function () {
            const search = $(this).val();
            if (search.length > 2) {
                var url = "/tim-kiem?q=" + search;
                new ProductLoading().post2("Search", { urlLoading: url }, function (res) {
                    var newHtml = $("<div>").html(res.Data.Html);
                    section.find('.result-search').show();
                    section.find('.result-search').html(newHtml.find('.result-search').html());
                    section.find('.best-search').hide();
                    $this.runElement(section.find(".result-search"));
                    section.find(".redirect-search").click(function () {
                        const search = section.find('.search-input').val();
                        window.location.href = "/tim-kiem#q=" + search;
                    })
                })

            } else {
                section.find('.best-search').show();
                section.find('.result-search').hide();
            }
        })
        $(window).click(function () {
            if (!section.is(event.target) && !section.has(event.target).length) {
                section.find('.best-search').hide();
                section.find('.result-search').hide();
            }
        });
    }
    this.inputSearchMobile = function (element) {
        element.focus(function () {
            $("#menu-left-mobile").animate({ width: '0px', opacity: '0' }, 500);
        });
        element.blur(function () {
            $("#menu-left-mobile").animate({ width: '118px', opacity: '1' }, 500);
        });
    }
    this.addCart = function (element) {
        element.click(function () {
            const productId = $(this).attr("data-product-id");
            shopping.update(productId, 1,
                function () {
                    $.toast("<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Thêm vào giỏ hàng")
                });
        })
    }
    this.addCartAndChange = function (element) {
        element.click(function () {
            const productId = $(this).attr("data-product-id");
            shopping.update(productId, 1,
                function () {
                    window.location.href = "/gio-hang";
                });
        })
    }
    this.scrollX = function (element) {
        let isDragging = false;
        let dragStartX = 0;
        let dragCurrentX = 0;
        let scrollLeft = 0;

        element.on('mousedown', function (event) {
            isDragging = true;
            dragStartX = event.pageX;
            scrollLeft = $(this).scrollLeft();
        }).on('mousemove', function (event) {
            if (!isDragging) return;

            const dragOffset = dragStartX - event.pageX;
            $(this).scrollLeft(scrollLeft + dragOffset);
        }).on('mouseup', function (event) {
            isDragging = false;
        }).on('mouseleave', function (event) {
            if (!isDragging) return;

            isDragging = false;
        });
    }
    this.chooseNumber = function (element) {
        const id = element.attr("data-product-id");
        element.find(".minus").click(function () {
            let input = element.find("input").first();
            if (parseInt(input.val()) === 1) {
                shopping.update(id, -1, function () {
                    $("#pc-" + id).remove()
                })
            } else {
                shopping.update(id, -1, function () {
                    input.val(parseInt(input.val()) - 1)
                })
            }
        });
        element.find(".plus").click(function () {
            let input = element.find("input").first();
            shopping.update(id, 1, function () {
                input.val(parseInt(input.val()) + 1)
            })
        })
    }
    this.locationEvent = function (element) {
        element.find("#province").change(function () {
            location.getDistrict($(this).val(), element);
        })
        element.find("#district").change(function () {
            location.getWard($(this).val(), element);
        })
    }
    this.registerShopping = function (form) {
        form.submit(function (e) {
            e.preventDefault();
            shopping.updateCustomer($(this).getValues(), $(this));
            form.serialize()
            // đoạn này đang submit userinfor
        })
    }
    this.registerCustomer = function (form) {
        form.submit(function (e) {
            e.preventDefault();
            var data = $(this).getValues();
            if (data.Phone == null || data.Phone.length < 10) {

                $.toast({ message: "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>Số điện thoại là bắt buộc!", type: "error" })
                return
            }
            if ('FullName' in data && (data.FullName == null || data.FullName == '')) {
                $.toast({ message: "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>Họ và tên là bắt buộc!", type: "error" })
                return
            }
            shopping.registerCustomer(data, $(this));
            form.serialize();
            // đoạn này đang submit userinfor
        })
    }
    this.productListLoaded = function (element) {
        var $this = this;
        var replaceUrl = function (url, isReal) {
            if (isReal && url.indexOf('#') > -1) {

                url = url.replace("#", "?");
                return url;
            }
            if (isReal != true && url.indexOf('?') > -1) {
                url = url.replace("?", "#");
            }
            return url;

        }
        var setQueryParam = function (url, param, value) {
            url = replaceUrl(url, true);
            var urlObj = new URL(url);
            var searchParams = urlObj.searchParams;
            // Thêm tham số truy vấn
            searchParams.set(param, value);
            // Cập nhật chuỗi truy vấn mới
            urlObj.search = searchParams.toString();
            // Trả về URL mới
            url = replaceUrl(urlObj.toString(), false);
            return url;
        }
        var buildLink = function () {
            element.find("[data-link] a").unbind("click")
                .click(function () {
                    $(".loading").show();
                    $("body").css("overflow-y", "hidden");
                    var y = element.find("#product-list").offset().top - 420;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    var a = $(this);
                    var pageValue = a.attr("data-page-value");
                    var href = "";
                    if (pageValue != undefined && pageValue != null && pageValue > 1) {
                        href = setQueryParam(window.location.href, "p", pageValue)
                    }
                    else {
                        var a = $(this);
                        href = a.attr("href");
                        if (href == null || href == "") return true;
                        if (href.charAt(0) != "/") return true
                    }
                    $.pathchange.changeTo(href);
                    return false;
                });
        };

        $.pathchange.init();
        $(window).bind("pathchange", function (e) {
            var url = replaceUrl(window.location.href.replace(window.location.origin, ""), true);

            url = replaceUrl(url, true);
            $.get(url, function (data) {
                $('link[rel="canonical"]').attr('href', window.location.origin + window.location.pathname);

                $(".loading").hide();
                $("body").css("overflow-y", "auto");
                var newHtml = $("<div>").html(data);

                var oldHeight = element.find("#product-list").height();

                element.find("#product-list").css("min-height", oldHeight).html(newHtml.find("#product-list").html()).css("min-height", "");
                element.find("[data-attribute1]").each(function () {
                    var $thisFilter = $(this);
                    var newFilter = newHtml.find("[data-attribute1=" + $thisFilter.attr("data-attribute1") + "]");

                    $thisFilter.find(".filter-show").html(newFilter.find(".filter-show").html());
                    if (newFilter.find(".active-value").length > 0)
                        $thisFilter.find(".filter-item__title").removeClass("active-value").addClass("active-value")
                    else $thisFilter.find(".filter-item__title").removeClass("active-value");
                });
                element.find("#provider-group-icon").html(newHtml.find("#provider-group-icon").html());
                element.find("#sort-list").html(newHtml.find("#sort-list").html());
                element.find("#category-content").html(newHtml.find("#category-content").html());
                $('meta[name="description"]').attr('content', newHtml.find('meta[name="description"]').attr('content'));
                $('meta[name="keywords"]').attr('content', newHtml.find('meta[name="keywords"]').attr('content'));
                $('meta[property="og:image:alt"]').attr('content', newHtml.find('meta[property="og:image:alt"]').attr('content'));
                $('meta[property="og:title"]').attr('content', newHtml.find('meta[property="og:title"]').attr('content'));
                $('meta[property="og:description"]').attr('content', newHtml.find('meta[property="og:description"]').attr('content'));
                $('meta[property="og:image"]').attr('content', newHtml.find('meta[property="og:image"]').attr('content'));
                $('title').text(newHtml.find('title').text());
                $('meta[rel="icon"]').attr('content', newHtml.find('meta[rel="icon"]').attr('content'));
                $('.breadcrumb-custom').html(newHtml.find('.breadcrumb-custom').html());
                if (Core.isMobile()) {
                    var filterContainer = element.find("#filter-container");
                    var activeFilter = $(element.find(".isShowing")[0]);
                    var id = activeFilter.data("attribute1");
                    var current = activeFilter.find(".filter-list");
                    current.attr("data-from", id);
                    filterContainer.html(current);
                }

                $this.runElement(element.find("[data-link]"));
                $this.runElement(element.find("[data-control-load]").parent());
                $this.runElement(element.find("#product-list"));
                buildLink();
            });
        });
        if (window.location.href.indexOf('#') > -1) {
            $.pathchange.changeTo(window.location.href);
        } else {
            buildLink();
        }
    }
    this.productSearch = function (element) {
        var $this = this;
        var replaceUrl = function (url, isReal) {
            if (isReal && url.indexOf('#') > -1) {

                url = url.replace("#", "?");
                return url;
            }
            if (isReal != true && url.indexOf('?') > -1) {
                url = url.replace("?", "#");
            }
            return url;

        }
        var setQueryParam = function (url, param, value) {
            url = replaceUrl(url, true);
            var urlObj = new URL(url);
            var searchParams = urlObj.searchParams;
            // Thêm tham số truy vấn
            searchParams.set(param, value);
            // Cập nhật chuỗi truy vấn mới
            urlObj.search = searchParams.toString();
            // Trả về URL mới
            url = replaceUrl(urlObj.toString(), false);
            return url;
        }
        var buildLink = function () {
            element.find("[data-link] a").unbind("click")
                .click(function () {
                    var a = $(this);
                    var pageValue = a.attr("data-page-value");
                    var href = "";
                    if (pageValue != undefined && pageValue != null && pageValue > 1) {
                        href = setQueryParam(window.location.href, "p", pageValue)
                    }
                    else {
                        var a = $(this);
                        href = a.attr("href");
                        if (href == null || href == "") return true;
                        if (href.charAt(0) != "/") return true
                    }
                    $.pathchange.changeTo(href);
                    return false;
                });
        };
        $.pathchange.init();

        $(window).bind("pathchange", function (e) {
            var url = replaceUrl(window.location.href.replace(window.location.origin, ""), true);

            url = replaceUrl(url, true);
            element.find("#product-list").html("");
            $.get(url, function (data) {
                var newHtml = $("<div>").html(data);
                element.find("#product-list").html(newHtml.find("#product-list").html());
                $this.runElement(element.find("#product-list"));
                buildLink();
            })
        });
        if (window.location.href.indexOf('#') > -1) {
            $.pathchange.changeTo(window.location.href);
        } else {
            buildLink();
        }
    }
    this.loadMoreDetailProduct = function (element) {
        element.find(".load-more-product-detail").click(function () {
            element.find(".detail-product-box-1").css('height', 'auto');
            element.find(".detail-product-box-2").css('height', 'auto');
            element.find(".bg-article").css('display', 'none');
            $(this).hide();

        })
        element.find(".load-more-product-detail-mobile").click(function () {
            element.find(".detail-product-box-mobile").css('height', 'auto');
            element.find(".bg-article-mobile").css('display', 'none');
            $(this).hide();

        })
    }

    this.loadMap = function (element) {
        element.find(".map").click(function () {
            element.find(".map-view").html($(this).data("map"));
        });
    }

    this.locationOnlyShow = function (element) {
        element.find("#location-option").change(function () {
            location.updateProvince($(this).val(), element);
        })
    }
    this.showlocation = function (elemet) {
        elemet.click(function () {
            var locationOnlyShow = $("#locationOnlyShow");
            locationOnlyShow.show();
            locationOnlyShow.find("#location-option").val(0);
        })
    }


    function toggleFullscreen(elem) {
        elem = elem || document.documentElement;
        if (!document.fullscreenElement && !document.mozFullScreenElement &&
            !document.webkitFullscreenElement && !document.msFullscreenElement) {
            $(".header-bottom").css("position", "relative")
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            $(".header-bottom").css("position", "sticky")
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    this.luckyRound = function (element) {
        element.find("#rule-lucky-button").on("click", function () {
            var modal = document.getElementById("modal-lucky-result");
            modal.style.display = "block";
            $("body").css("overflow", "hidden");
        })
        var fullscreen = $("#viber-vr");
        fullscreen.show();
        fullscreen.on('click', function () {
            toggleFullscreen();
        })
        window.onresize = function (event) {
            var maxHeight = window.screen.height,
                maxWidth = window.screen.width,
                curHeight = window.innerHeight,
                curWidth = window.innerWidth;

            if (maxWidth == curWidth && maxHeight == curHeight) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#wrapper").offset().top
                }, 200);
            }
        }
        var $this = this;
        var lucky = new LuckyRound();
        lucky.hcLuckywheel.init({
            id: "luckywheel",
            config: function (callback) {
                callback &&
                    callback(12);
            },
            buttonClick: function (callback) {
                $this.showPopupContact(callback, element.attr("data-spin-session"));
            }
        });
    }

    this.wrapperPopular = function (ele) {
        var items = ele.find(".wrapper-popular-item");
        let numberItem = 6;
        if (window.screen.width < 780) {
            numberItem = 4
        }
        var n = Math.floor(items.length / numberItem); // Giá trị tối đa của n
        if (n * numberItem == items.length) {
            $(items[(n - 1) * numberItem]).css("border-radius", "0 0 0 15px")
            $(items[n * numberItem - 1]).css("border-radius", "0 0 15px 0")
        } else {
            $(items[n * numberItem]).css("border-radius", "0 0 0 15px")
        }

    }
    this.getPrize = function (index) {
        return prizes[index];
    }
    this.showPopupContact = function (callback, spinSessionId) {
        var $this = this;
        var popup = new Popup();
        popup.module = "PopupContact";
        popup.data = { SpinSessionId: spinSessionId };
        popup.afterCreatePopupBody = function () {
            popup.footer.hide();
            popup.popupBody.parents(".modal").addClass("quotation-modal");
            popup.popupBody.parents(".modal-content").addClass("rounded-0").addClass("border-0");
        };
        popup.onAlwaysShow = function () {
            $this.currencyFormat();
            popup.popupBody.find(".btn").click(function () {
                var ajax = new CoreAjax(); ajax.typeAction = "Projects.Web.Pages.Templates.PopupContact";
                var contact = popup.popupBody.getValues();

                contact.OrderMoney = parseInt(contact.OrderMoney.replaceAll(",", ""));
                ajax.post("SaveCallForMe", contact, function (resOK) {
                    popup.popupBody.find("#frmQuotation")[0].reset();
                    popup.hide();
                    callback && callback(resOK.Data.Output.Position, resOK.Data.Output.Message);
                },
                    function (res) {
                        if (res.Data.FieldError != null && res.Data.FieldError != "")
                            Core.alert("Bạn chưa điền đầy đủ thông tin!", res.Data.FieldError);
                        else
                            if (res.Data.MessageError != null && res.Data.MessageError != "")
                                Core.alert(res.Data.MessageError);
                        var fieldError = popup.popupBody.find("input[name='" + res.Data.FieldError + "'], textarea[name='" + res.Data.FieldError + "']");
                        fieldError.focus();

                    });
            });
            $this.bindControlLoad(popup.popupBody);
        }
        popup.show();
    }
    this.luckyPopupRule = function (element) {
        var modal = document.getElementById("modal-lucky-result");
        element.on('click', function (e) {
            if (document.getElementById('modal-lucky-result-content').contains(e.target)) {
                // Clicked in box
            } else {
                modal.style.display = "none";
                $("body").css("overflow", "auto");
            }
        });

        // Get the <span> element that closes the modal
        var span = element.find(".close-lucky")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            $("body").css("overflow", "auto");
        }
    }

    this.currencyFormat = function () {

        $("input[data-type='currency']").on({
            keyup: function () {
                formatCurrency($(this));
            },
            blur: function () {
                formatCurrency($(this), "blur");
            }
        });


        function formatNumber(n) {
            // format number 1000000 to 1,234,567
            return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }


        function formatCurrency(input, blur) {
            // appends $ to value, validates decimal side
            // and puts cursor back in right position.

            // get input value
            var input_val = input.val();

            // don't validate empty input
            if (input_val === "") { return; }

            // original length
            var original_len = input_val.length;

            // initial caret position 
            var caret_pos = input.prop("selectionStart");

            // check for decimal
            if (input_val.indexOf(".") >= 0) {

                // get position of first decimal
                // this prevents multiple decimals from
                // being entered
                var decimal_pos = input_val.indexOf(".");

                // split number by decimal point
                var left_side = input_val.substring(0, decimal_pos);
                var right_side = input_val.substring(decimal_pos);

                // add commas to left side of number
                left_side = formatNumber(left_side);

                // validate right side
                right_side = formatNumber(right_side);

                // On blur make sure 2 numbers after decimal
                if (blur === "blur") {
                    right_side += "00";
                }

                // Limit decimal to only 2 digits
                right_side = right_side.substring(0, 2);

                // join number by .
                input_val = left_side + "." + right_side;

            } else {
                // no decimal entered
                // add commas to number
                // remove all non-digits
                input_val = formatNumber(input_val);
                input_val = input_val;

            }

            // send updated string to input
            input.val(input_val);

            // put caret back in the right position
            var updated_len = input_val.length;
            caret_pos = updated_len - original_len + caret_pos;
            input[0].setSelectionRange(caret_pos, caret_pos);
        }

    }

    this.activeSwipperThumb = function (element) {
        var swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 0,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true
        });
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper2,
            },
        });
    }
    this.activeSwipperThumbImage = function (element) {
        var swiper2 = new Swiper(".mySwiperThumb", {
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true
        });
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper2,
            },
        });
    }
    this.activeSwipperPagination = function (element) {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    this.activeSwipper = function () {
        var swiper = new Swiper(".mySwiper3", {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        var mySwiper3slide = new Swiper(".mySwiper3slide",
            {
                spaceBetween: 10,
                slidesPerView: 1,
                breakpoints: {
                    720: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    }
                },
                freeMode: true,
                watchSlidesProgress: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            });
    }
    this.clickActiveVideo = function (element) {
        $(element).click(function () {
            $("body").css("overflow", "hidden");
            var screenWidth = $(window).width();
            var screenHeight = $(window).height();
            var sw = 0;
            var sh = 0;
            var pt = 0;
            if (screenWidth / screenHeight > 16 / 9) {
                sh = screenHeight - 90;
                sw = sh / 9 * 16;
            }
            else {
                sw = screenWidth * 90 / 100;
                sh = sw / 16 * 9;
                pt = (screenHeight - 150 - sh) / 2
            }
            var urlObj = new URL($(element).attr("data-video-url"));
            var searchParams = urlObj.searchParams;
            // Thêm tham số truy vấn
            searchParams.set("autoplay", 1);
            // Cập nhật chuỗi truy vấn mới
            urlObj.search = searchParams.toString();
            var url = '<iframe style="margin-top:' + pt + 'px" width="' + sw + '" height="' + sh + '" src="' + urlObj.toString() + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            $("#video-popup>.popup-location").html(url);
            $("#video-popup").show();
        })
    }
    this.loadIframePopup = function (element) {
        $(element).click(function () {
            $("body").css("overflow", "hidden");
            var screenWidth = $(window).width();
            var screenHeight = $(window).height();
            var sw = 0;
            var sh = 0;
            var pt = 0;
            if (screenWidth > screenHeight) {
                sh = screenHeight - 90;
                sw = sh;
            }
            else {
                sw = screenWidth * 90 / 100;
                sh = sw;
                pt = (screenHeight - 150 - sh) / 2
            }
            var urlObj = new URL($(element).attr("data-iframe"));
            var url = '<iframe style="margin-top:' + pt + 'px" width="' + sw + '" height="' + sh + '" src="' + urlObj.toString() + '" title="3D sản phẩm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            $("#video-popup>.popup-location").html(url);
            $("#video-popup").fadeIn(1000, function () {
                $(this).animate({ opacity: 1 }, 1000);
            });
        })
    }
    this.clickActiveVideoOffline = function (element) {

        element.click(function () {
            var url = '<video src="' + $(element).attr("data-video-url") + '" controls autoplay="true" style="object-fit: cover; height: 100%; "></video>';

            setTimeout(function () {
                $("#test-videoss").html(url)
            }, 50);

        })
    }

    this.videoPopup = function (element) {
        $(element).find(".fa-times").click(function () {
            $(element).hide();
            $("body").css("overflow", "auto");
        })
        $(element).click(function (event) {
            if (!$(element).find('iframe').is(event.target)) {
                $(element).hide();
                $("body").css("overflow", "auto");
                $("#video-popup>.popup-location").html("");
            }
        })
    }
    this.bannerPopup = function (element) {
        setTimeout(function () {
            element.show();
            $("body").css("overflow", "hidden");
        }, 5000);
        $(element).find(".fa-times").click(function () {
            $(element).hide();
            $("body").css("overflow", "auto");
        })
        $(element).click(function (event) {
            if (!$(element).find('img').is(event.target)) {
                $(element).hide();
                $("body").css("overflow", "auto");
            }
        })
    }

    this.productCommentPopup = function (element) {

        var $this = this;
        element.find("li").click(function () {
            var popup = new Popup();
            popup.data = { CommentId: $(this).attr("data-comment-id"), ImageIndex: $(this).attr("data-comment-index") };
            popup.dialogType = "modal-lg"
            popup.module = "SlideImageCommentProduct";
            popup.afterCreatePopupBody = function () {
                popup.footer.hide();
                popup.popupBody.parents(".modal").addClass("quotation-modal");
                popup.popupBody.parents(".modal-content").addClass("rounded-0").addClass("border-0");
            };

            popup.onAlwaysShow = function () {
                var swiper2 = new Swiper(".mySwiperCommentThumb", {
                    spaceBetween: 10,
                    slidesPerView: 6,
                    freeMode: true,
                    watchSlidesProgress: true
                });
                var swiper = new Swiper(".mySwiperComment", {
                    initialSlide: popup.data.ImageIndex,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    thumbs: {
                        swiper: swiper2,
                    },
                });
                $this.bindControlLoad(popup.popupBody);
                $this.runElement(popup.popupBody);
            }
            popup.show();


        })
    }

    this.descriptionEvent = function (element) {
        var width = element.width();
        var height = width / 16 * 9;
        if (height < 360) height = 360;
        element.find("iframe").css("height", height + "px");
        element.find("iframe").css("width", "100%");
    }
    this.isDesktop = function (ele) {

        if (screen.width < 1200 || ele.children().length == 0) {
            ele.hide();
        }
    }
    this.checkHeight = function (ele) {

        if (screen.width > 1200) {
            ele.find(".menu-list-box").css("min-height", 36 * ele.children().length);
        }
    }
    this.clickPurchaseEvent = function () {
        fbq('track', 'Purchase');
    }
}

PageBase.DefaultPageLoadInstance = function () {
    return new PageBase.PageLoad();
};




