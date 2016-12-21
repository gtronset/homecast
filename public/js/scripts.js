/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return od.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){od=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function g(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function h(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function i(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function j(a,b){for(var c in b)i(b,c)&&(a[c]=b[c]);return i(b,"toString")&&(a.toString=b.toString),i(b,"valueOf")&&(a.valueOf=b.valueOf),a}function k(a,b,c,d){return rb(a,b,c,d,!0).utc()}function l(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function m(a){return null==a._pf&&(a._pf=l()),a._pf}function n(a){if(null==a._isValid){var b=m(a),c=qd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function o(a){var b=k(NaN);return null!=a?j(m(b),a):m(b).userInvalidated=!0,b}function p(a){return void 0===a}function q(a,b){var c,d,e;if(p(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),p(b._i)||(a._i=b._i),p(b._f)||(a._f=b._f),p(b._l)||(a._l=b._l),p(b._strict)||(a._strict=b._strict),p(b._tzm)||(a._tzm=b._tzm),p(b._isUTC)||(a._isUTC=b._isUTC),p(b._offset)||(a._offset=b._offset),p(b._pf)||(a._pf=m(b)),p(b._locale)||(a._locale=b._locale),rd.length>0)for(c in rd)d=rd[c],e=b[d],p(e)||(a[d]=e);return a}
// Moment prototype object
function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
sd===!1&&(sd=!0,a.updateOffset(this),sd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}
// compare two arrays, return the number of differences
function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return j(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),td[b]||(w(c),td[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=j({},a);for(c in b)i(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},j(e[c],a[c]),j(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)i(a,c)&&!i(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=j({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Dd[c]=Dd[c+"s"]=Dd[b]=a}function K(a){return"string"==typeof a?Dd[a]||Dd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)i(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Ed[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Ed[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Id[a]=e),b&&(Id[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Id[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Fd);for(b=0,c=d.length;b<c;b++)Id[d[b]]?d[b]=Id[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Hd[b]=Hd[b]||W(b),Hd[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gd.lastIndex=0;d>=0&&Gd.test(a);)a=a.replace(Gd,c),Gd.lastIndex=0,d-=1;return a}function Z(a,b,c){$d[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return i($d,a)?$d[a](b._strict,b._locale):new RegExp(_(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),f(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)_d[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&i(_d,a)&&_d[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||ke).test(b)?"format":"standalone"][a.month()]:this._months}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[ke.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=k([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:null):(e=je.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:(e=je.call(this._longMonthsParse,g),e!==-1?e:null)):(e=je.call(this._longMonthsParse,g),e!==-1?e:(e=je.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ja(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),!f(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ne),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=oe),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)
// make the regex if we don't have it already
c=k([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ua(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}
// HELPERS
// LOCALES
function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}
// MOMENTS
function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=k([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=ue),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ve),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=we),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)
// make the regex if we don't have it already
c=k([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ua(a,b){return b._meridiemParse}
// LOCALES
function Va(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Za(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!Be[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=xe._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
$a(b)}catch(a){}return Be[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function $a(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=p(b)?bb(a):_a(a,b),c&&(xe=c)),xe._abbr}function _a(a,b){if(null!==b){var c=Ae;if(b.abbr=a,null!=Be[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Be[a]._config;else if(null!=b.parentLocale){if(null==Be[b.parentLocale])return Ce[b.parentLocale]||(Ce[b.parentLocale]=[]),Ce[b.parentLocale].push({name:a,config:b}),null;c=Be[b.parentLocale]._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return Be[a]=new C(B(c,b)),Ce[a]&&Ce[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Be[a]}
// useful for testing
return delete Be[a],null}function ab(a,b){if(null!=b){var c,d=Ae;
// MERGE
null!=Be[a]&&(d=Be[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Be[a],Be[a]=c,
// backwards compat for now: also set the locale
$a(a)}else
// pass null for config to unupdate, useful for tests
null!=Be[a]&&(null!=Be[a].parentLocale?Be[a]=Be[a].parentLocale:null!=Be[a]&&delete Be[a]);return Be[a]}
// returns locale data
function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return xe;if(!c(a)){if(
//short-circuit everything else
b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return wd(Be)}function db(a){var b,c=a._a;return c&&m(a).overflow===-2&&(b=c[be]<0||c[be]>11?be:c[ce]<1||c[ce]>ea(c[ae],c[be])?ce:c[de]<0||c[de]>24||24===c[de]&&(0!==c[ee]||0!==c[fe]||0!==c[ge])?de:c[ee]<0||c[ee]>59?ee:c[fe]<0||c[fe]>59?fe:c[ge]<0||c[ge]>999?ge:-1,m(a)._overflowDayOfYear&&(b<ae||b>ce)&&(b=ce),m(a)._overflowWeeks&&b===-1&&(b=he),m(a)._overflowWeekday&&b===-1&&(b=ie),m(a).overflow=b),a}
// date from iso format
function eb(a){var b,c,d,e,f,g,h=a._i,i=De.exec(h)||Ee.exec(h);if(i){for(m(a).iso=!0,b=0,c=Ge.length;b<c;b++)if(Ge[b][1].exec(i[1])){e=Ge[b][0],d=Ge[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=He.length;b<c;b++)if(He[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+He[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Fe.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),kb(a)}else a._isValid=!1}
// date from iso format or fallback
function fb(b){var c=Ie.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function gb(a,b,c){return null!=a?a:null!=b?b:c}function hb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function ib(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=hb(a),
//compute day of the year from weeks and weekdays
a._w&&null==a._a[ce]&&null==a._a[be]&&jb(a),
//if the day of the year is set, figure out what it is
a._dayOfYear&&(e=gb(a._a[ae],d[ae]),a._dayOfYear>pa(e)&&(m(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[be]=c.getUTCMonth(),a._a[ce]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[de]&&0===a._a[ee]&&0===a._a[fe]&&0===a._a[ge]&&(a._nextDay=!0,a._a[de]=0),a._d=(a._useUTC?ta:sa).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[de]=24)}}function jb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
c=gb(b.GG,a._a[ae],wa(sb(),1,4).year),d=gb(b.W,1),e=gb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(sb(),f,g);c=gb(b.gg,a._a[ae],j.year),
// Default to current week.
d=gb(b.w,j.week),null!=b.d?(
// weekday -- low day numbers are considered next week
e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(
// local weekday -- counting starts from begining of week
e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):
// default to begining of week
e=f}d<1||d>xa(c,f,g)?m(a)._overflowWeeks=!0:null!=i?m(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ae]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function kb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void eb(b);b._a=[],m(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Fd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&m(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),
// don't parse if it's not a known token
Id[f]?(d?m(b).empty=!1:m(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&m(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
m(b).charsLeftOver=i-j,h.length>0&&m(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[de]<=12&&m(b).bigHour===!0&&b._a[de]>0&&(m(b).bigHour=void 0),m(b).parsedDateParts=b._a.slice(0),m(b).meridiem=b._meridiem,
// handle meridiem
b._a[de]=lb(b._locale,b._a[de],b._meridiem),ib(b),db(b)}function lb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function mb(a){var b,c,d,e,f;if(0===a._f.length)return m(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],kb(b),n(b)&&(
// if there is any input that was not parsed add a penalty for that format
f+=m(b).charsLeftOver,
//or tokens
f+=10*m(b).unusedTokens.length,m(b).score=f,(null==d||f<d)&&(d=f,c=b));j(a,c||b)}function nb(a){if(!a._d){var b=L(a._i);a._a=h([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),ib(a)}}function ob(a){var b=new r(db(pb(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function pb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?o({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(g(b)?a._d=b:c(d)?mb(a):d?kb(a):qb(a),n(a)||(a._d=null),a))}function qb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):g(d)?b._d=new Date(d.valueOf()):"string"==typeof d?fb(b):c(d)?(b._a=h(d.slice(0),function(a){return parseInt(a,10)}),ib(b)):"object"==typeof d?nb(b):f(d)?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function rb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,ob(i)}function sb(a,b,c,d){return rb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function tb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return sb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function ub(){var a=[].slice.call(arguments,0);return tb("isBefore",a)}function vb(){var a=[].slice.call(arguments,0);return tb("isAfter",a)}function wb(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function xb(a){return a instanceof wb}function yb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}
// FORMATTING
function zb(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Ab(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Me)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Bb(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(s(b)||g(b)?b.valueOf():sb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):sb(b).local()}function Cb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Db(b,c){var d,e=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Ab(Xd,b),null===b)return this}else Math.abs(b)<16&&(b=60*b);return!this._isUTC&&c&&(d=Cb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Tb(this,Ob(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?e:Cb(this)}function Eb(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Fb(a){return this.utcOffset(0,a)}function Gb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Cb(this),"m")),this}function Hb(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=Ab(Wd,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Ib(a){return!!this.isValid()&&(a=a?sb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Jb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Kb(){if(!p(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=pb(a),a._a){var b=a._isUTC?k(a._a):sb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Lb(){return!!this.isValid()&&!this._isUTC}function Mb(){return!!this.isValid()&&this._isUTC}function Nb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ob(a,b){var c,d,e,g=a,
// matching against regexp is expensive, do it on demand
h=null;// checks for null or undefined
return xb(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:f(a)?(g={},b?g[b]=a:g.milliseconds=a):(h=Ne.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:u(h[ce])*c,h:u(h[de])*c,m:u(h[ee])*c,s:u(h[fe])*c,ms:u(yb(1e3*h[ge]))*c}):(h=Oe.exec(a))?(c="-"===h[1]?-1:1,g={y:Pb(h[2],c),M:Pb(h[3],c),w:Pb(h[4],c),d:Pb(h[5],c),h:Pb(h[6],c),m:Pb(h[7],c),s:Pb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Rb(sb(g.from),sb(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new wb(g),xb(a)&&i(a,"_locale")&&(d._locale=a._locale),d}function Pb(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Qb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Rb(a,b){var c;return a.isValid()&&b.isValid()?(b=Bb(b,a),a.isBefore(b)?c=Qb(a,b):(c=Qb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Sb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ob(c,d),Tb(this,e,a),this}}function Tb(b,c,d,e){var f=c._milliseconds,g=yb(c._days),h=yb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Ub(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Vb(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||sb(),e=Bb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,sb(d)))}function Wb(){return new r(this)}function Xb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function Yb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function Zb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function $b(a,b){var c,d=s(a)?a:sb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function _b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ac(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function bc(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Bb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=cc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function cc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function dc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ec(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function fc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function gc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function hc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.from(sb(),a)}function jc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function kc(a){return this.to(sb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function lc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function mc(){return this._locale}function nc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=K(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function oc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function pc(){return this._d.valueOf()-6e4*(this._offset||0)}function qc(){return Math.floor(this.valueOf()/1e3)}function rc(){return new Date(this.valueOf())}function sc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function tc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function uc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function vc(){return n(this)}function wc(){return j({},m(this))}function xc(){return m(this).overflow}function yc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function zc(a,b){U(0,[a,a.length],0,b)}
// MOMENTS
function Ac(a){return Ec.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Bc(a){return Ec.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Cc(){return xa(this.year(),1,4)}function Dc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ec(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Fc.call(this,a,b,c,d,e))}function Fc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Gc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Hc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Ic(a,b){b[ge]=u(1e3*("0."+a))}
// MOMENTS
function Jc(){return this._isUTC?"UTC":""}function Kc(){return this._isUTC?"Coordinated Universal Time":""}function Lc(a){return sb(1e3*a)}function Mc(){return sb.apply(null,arguments).parseZone()}function Nc(a){return a}function Oc(a,b,c,d){var e=bb(),f=k().set(d,b);return e[c](f,a)}function Pc(a,b,c){if(f(a)&&(b=a,a=void 0),a=a||"",null!=b)return Oc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Oc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Qc(a,b,c,d){"boolean"==typeof a?(f(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,f(b)&&(c=b,b=void 0),b=b||"");var e=bb(),g=a?e._week.dow:0;if(null!=c)return Oc(b,(c+g)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Oc(b,(h+g)%7,d,"day");return i}function Rc(a,b){return Pc(a,b,"months")}function Sc(a,b){return Pc(a,b,"monthsShort")}function Tc(a,b,c){return Qc(a,b,c,"weekdays")}function Uc(a,b,c){return Qc(a,b,c,"weekdaysShort")}function Vc(a,b,c){return Qc(a,b,c,"weekdaysMin")}function Wc(){var a=this._data;return this._milliseconds=Ze(this._milliseconds),this._days=Ze(this._days),this._months=Ze(this._months),a.milliseconds=Ze(a.milliseconds),a.seconds=Ze(a.seconds),a.minutes=Ze(a.minutes),a.hours=Ze(a.hours),a.months=Ze(a.months),a.years=Ze(a.years),this}function Xc(a,b,c,d){var e=Ob(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Yc(a,b){return Xc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Zc(a,b){return Xc(this,a,b,-1)}function $c(a){return a<0?Math.floor(a):Math.ceil(a)}function _c(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*$c(bd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ad(g)),h+=e,g-=$c(bd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ad(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function bd(a){
// the reverse of daysToMonths
return 146097*a/4800}function cd(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ad(b),"month"===a?c:c/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
b=this._days+Math.round(bd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function dd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)}function ed(a){return function(){return this.as(a)}}function fd(a){return a=K(a),this[a+"s"]()}function gd(a){return function(){return this._data[a]}}function hd(){return t(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function id(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function jd(a,b,c){var d=Ob(a).abs(),e=of(d.as("s")),f=of(d.as("m")),g=of(d.as("h")),h=of(d.as("d")),i=of(d.as("M")),j=of(d.as("y")),k=e<pf.s&&["s",e]||f<=1&&["m"]||f<pf.m&&["mm",f]||g<=1&&["h"]||g<pf.h&&["hh",g]||h<=1&&["d"]||h<pf.d&&["dd",h]||i<=1&&["M"]||i<pf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,id.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function kd(a){return void 0===a?of:"function"==typeof a&&(of=a,!0)}
// This function allows you to set a threshold for relative time strings
function ld(a,b){return void 0!==pf[a]&&(void 0===b?pf[a]:(pf[a]=b,!0))}function md(a){var b=this.localeData(),c=jd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function nd(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=qf(this._milliseconds)/1e3,e=qf(this._days),f=qf(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
a=t(d/60),b=t(a/60),d%=60,a%=60,
// 12 months -> 1 year
c=t(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var od,pd;pd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var qd=pd,rd=a.momentProperties=[],sd=!1,td={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var ud;ud=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)i(a,b)&&c.push(b);return c};var vd,wd=ud,xd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},yd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},zd="Invalid date",Ad="%d",Bd=/\d{1,2}/,Cd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Dd={},Ed={},Fd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Gd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Hd={},Id={},Jd=/\d/,Kd=/\d\d/,Ld=/\d{3}/,Md=/\d{4}/,Nd=/[+-]?\d{6}/,Od=/\d\d?/,Pd=/\d\d\d\d?/,Qd=/\d\d\d\d\d\d?/,Rd=/\d{1,3}/,Sd=/\d{1,4}/,Td=/[+-]?\d{1,6}/,Ud=/\d+/,Vd=/[+-]?\d+/,Wd=/Z|[+-]\d\d:?\d\d/gi,Xd=/Z|[+-]\d\d(?::?\d\d)?/gi,Yd=/[+-]?\d+(\.\d{1,3})?/,Zd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$d={},_d={},ae=0,be=1,ce=2,de=3,ee=4,fe=5,ge=6,he=7,ie=8;vd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var je=vd;
// FORMATTING
U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),
// ALIASES
J("month","M"),
// PRIORITY
M("month",8),
// PARSING
Z("M",Od),Z("MM",Od,Kd),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[be]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
// if we didn't find a month name, mark the date as invalid.
null!=e?b[be]=e:m(c).invalidMonth=a});
// LOCALES
var ke=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,le="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),me="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ne=Zd,oe=Zd;
// FORMATTING
U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
J("year","y"),
// PRIORITIES
M("year",1),
// PARSING
Z("Y",Vd),Z("YY",Od,Kd),Z("YYYY",Sd,Md),Z("YYYYY",Td,Nd),Z("YYYYYY",Td,Nd),ba(["YYYYY","YYYYYY"],ae),ba("YYYY",function(b,c){c[ae]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ae]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ae]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};
// MOMENTS
var pe=O("FullYear",!0);
// FORMATTING
U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),
// ALIASES
J("week","w"),J("isoWeek","W"),
// PRIORITIES
M("week",5),M("isoWeek",5),
// PARSING
Z("w",Od),Z("ww",Od,Kd),Z("W",Od),Z("WW",Od,Kd),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var qe={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),
// ALIASES
J("day","d"),J("weekday","e"),J("isoWeekday","E"),
// PRIORITY
M("day",11),M("weekday",11),M("isoWeekday",11),
// PARSING
Z("d",Od),Z("e",Od),Z("E",Od),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:m(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});
// LOCALES
var re="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),se="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),te="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ue=Zd,ve=Zd,we=Zd;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),
// ALIASES
J("hour","h"),
// PRIORITY
M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Od),Z("h",Od),Z("HH",Od,Kd),Z("hh",Od,Kd),Z("hmm",Pd),Z("hmmss",Qd),Z("Hmm",Pd),Z("Hmmss",Qd),ba(["H","HH"],de),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[de]=u(a),m(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d)),m(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e)),m(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e))});var xe,ye=/[ap]\.?m?\.?/i,ze=O("Hours",!0),Ae={calendar:xd,longDateFormat:yd,invalidDate:zd,ordinal:Ad,ordinalParse:Bd,relativeTime:Cd,months:le,monthsShort:me,week:qe,weekdays:re,weekdaysMin:te,weekdaysShort:se,meridiemParse:ye},Be={},Ce={},De=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ee=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fe=/Z|[+-]\d\d(?::?\d\d)?/,Ge=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],He=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ie=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var Je=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:o()}),Ke=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:o()}),Le=function(){return Date.now?Date.now():+new Date};zb("Z",":"),zb("ZZ",""),
// PARSING
Z("Z",Xd),Z("ZZ",Xd),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ab(Xd,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Me=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var Ne=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Oe=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ob.fn=wb.prototype;var Pe=Sb(1,"add"),Qe=Sb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Re=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),zc("gggg","weekYear"),zc("ggggg","weekYear"),zc("GGGG","isoWeekYear"),zc("GGGGG","isoWeekYear"),
// ALIASES
J("weekYear","gg"),J("isoWeekYear","GG"),
// PRIORITY
M("weekYear",1),M("isoWeekYear",1),
// PARSING
Z("G",Vd),Z("g",Vd),Z("GG",Od,Kd),Z("gg",Od,Kd),Z("GGGG",Sd,Md),Z("gggg",Sd,Md),Z("GGGGG",Td,Nd),Z("ggggg",Td,Nd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
U("Q",0,"Qo","quarter"),
// ALIASES
J("quarter","Q"),
// PRIORITY
M("quarter",7),
// PARSING
Z("Q",Jd),ba("Q",function(a,b){b[be]=3*(u(a)-1)}),
// FORMATTING
U("D",["DD",2],"Do","date"),
// ALIASES
J("date","D"),
// PRIOROITY
M("date",9),
// PARSING
Z("D",Od),Z("DD",Od,Kd),Z("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),ba(["D","DD"],ce),ba("Do",function(a,b){b[ce]=u(a.match(Od)[0],10)});
// MOMENTS
var Se=O("Date",!0);
// FORMATTING
U("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
J("dayOfYear","DDD"),
// PRIORITY
M("dayOfYear",4),
// PARSING
Z("DDD",Rd),Z("DDDD",Ld),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),
// FORMATTING
U("m",["mm",2],0,"minute"),
// ALIASES
J("minute","m"),
// PRIORITY
M("minute",14),
// PARSING
Z("m",Od),Z("mm",Od,Kd),ba(["m","mm"],ee);
// MOMENTS
var Te=O("Minutes",!1);
// FORMATTING
U("s",["ss",2],0,"second"),
// ALIASES
J("second","s"),
// PRIORITY
M("second",15),
// PARSING
Z("s",Od),Z("ss",Od,Kd),ba(["s","ss"],fe);
// MOMENTS
var Ue=O("Seconds",!1);
// FORMATTING
U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
J("millisecond","ms"),
// PRIORITY
M("millisecond",16),
// PARSING
Z("S",Rd,Jd),Z("SS",Rd,Kd),Z("SSS",Rd,Ld);var Ve;for(Ve="SSSS";Ve.length<=9;Ve+="S")Z(Ve,Ud);for(Ve="S";Ve.length<=9;Ve+="S")ba(Ve,Ic);
// MOMENTS
var We=O("Milliseconds",!1);
// FORMATTING
U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var Xe=r.prototype;Xe.add=Pe,Xe.calendar=Vb,Xe.clone=Wb,Xe.diff=bc,Xe.endOf=oc,Xe.format=gc,Xe.from=hc,Xe.fromNow=ic,Xe.to=jc,Xe.toNow=kc,Xe.get=R,Xe.invalidAt=xc,Xe.isAfter=Xb,Xe.isBefore=Yb,Xe.isBetween=Zb,Xe.isSame=$b,Xe.isSameOrAfter=_b,Xe.isSameOrBefore=ac,Xe.isValid=vc,Xe.lang=Re,Xe.locale=lc,Xe.localeData=mc,Xe.max=Ke,Xe.min=Je,Xe.parsingFlags=wc,Xe.set=S,Xe.startOf=nc,Xe.subtract=Qe,Xe.toArray=sc,Xe.toObject=tc,Xe.toDate=rc,Xe.toISOString=ec,Xe.inspect=fc,Xe.toJSON=uc,Xe.toString=dc,Xe.unix=qc,Xe.valueOf=pc,Xe.creationData=yc,
// Year
Xe.year=pe,Xe.isLeapYear=ra,
// Week Year
Xe.weekYear=Ac,Xe.isoWeekYear=Bc,
// Quarter
Xe.quarter=Xe.quarters=Gc,
// Month
Xe.month=ka,Xe.daysInMonth=la,
// Week
Xe.week=Xe.weeks=Ba,Xe.isoWeek=Xe.isoWeeks=Ca,Xe.weeksInYear=Dc,Xe.isoWeeksInYear=Cc,
// Day
Xe.date=Se,Xe.day=Xe.days=Ka,Xe.weekday=La,Xe.isoWeekday=Ma,Xe.dayOfYear=Hc,
// Hour
Xe.hour=Xe.hours=ze,
// Minute
Xe.minute=Xe.minutes=Te,
// Second
Xe.second=Xe.seconds=Ue,
// Millisecond
Xe.millisecond=Xe.milliseconds=We,
// Offset
Xe.utcOffset=Db,Xe.utc=Fb,Xe.local=Gb,Xe.parseZone=Hb,Xe.hasAlignedHourOffset=Ib,Xe.isDST=Jb,Xe.isLocal=Lb,Xe.isUtcOffset=Mb,Xe.isUtc=Nb,Xe.isUTC=Nb,
// Timezone
Xe.zoneAbbr=Jc,Xe.zoneName=Kc,
// Deprecations
Xe.dates=x("dates accessor is deprecated. Use date instead.",Se),Xe.months=x("months accessor is deprecated. Use month instead",ka),Xe.years=x("years accessor is deprecated. Use year instead",pe),Xe.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Eb),Xe.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Kb);var Ye=C.prototype;Ye.calendar=D,Ye.longDateFormat=E,Ye.invalidDate=F,Ye.ordinal=G,Ye.preparse=Nc,Ye.postformat=Nc,Ye.relativeTime=H,Ye.pastFuture=I,Ye.set=A,
// Month
Ye.months=fa,Ye.monthsShort=ga,Ye.monthsParse=ia,Ye.monthsRegex=na,Ye.monthsShortRegex=ma,
// Week
Ye.week=ya,Ye.firstDayOfYear=Aa,Ye.firstDayOfWeek=za,
// Day of Week
Ye.weekdays=Fa,Ye.weekdaysMin=Ha,Ye.weekdaysShort=Ga,Ye.weekdaysParse=Ja,Ye.weekdaysRegex=Na,Ye.weekdaysShortRegex=Oa,Ye.weekdaysMinRegex=Pa,
// Hours
Ye.isPM=Va,Ye.meridiem=Wa,$a("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var Ze=Math.abs,$e=ed("ms"),_e=ed("s"),af=ed("m"),bf=ed("h"),cf=ed("d"),df=ed("w"),ef=ed("M"),ff=ed("y"),gf=gd("milliseconds"),hf=gd("seconds"),jf=gd("minutes"),kf=gd("hours"),lf=gd("days"),mf=gd("months"),nf=gd("years"),of=Math.round,pf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},qf=Math.abs,rf=wb.prototype;
// Deprecations
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
return rf.abs=Wc,rf.add=Yc,rf.subtract=Zc,rf.as=cd,rf.asMilliseconds=$e,rf.asSeconds=_e,rf.asMinutes=af,rf.asHours=bf,rf.asDays=cf,rf.asWeeks=df,rf.asMonths=ef,rf.asYears=ff,rf.valueOf=dd,rf._bubble=_c,rf.get=fd,rf.milliseconds=gf,rf.seconds=hf,rf.minutes=jf,rf.hours=kf,rf.days=lf,rf.weeks=hd,rf.months=mf,rf.years=nf,rf.humanize=md,rf.toISOString=nd,rf.toString=nd,rf.toJSON=nd,rf.locale=lc,rf.localeData=mc,rf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nd),rf.lang=Re,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Vd),Z("X",Yd),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.17.1",b(sb),a.fn=Xe,a.min=ub,a.max=vb,a.now=Le,a.utc=k,a.unix=Lc,a.months=Rc,a.isDate=g,a.locale=$a,a.invalid=o,a.duration=Ob,a.isMoment=s,a.weekdays=Tc,a.parseZone=Mc,a.localeData=bb,a.isDuration=xb,a.monthsShort=Sc,a.weekdaysMin=Vc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Uc,a.normalizeUnits=K,a.relativeTimeRounding=kd,a.relativeTimeThreshold=ld,a.calendarFormat=Ub,a.prototype=Xe,a});
/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function i(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););
return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function c(n,t){return!(null==n||!n.length)&&-1<d(n,t,0)}function a(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];
return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function _(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function g(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function d(n,t,r){if(t===t)n:{
--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=g(n,b,r);return n}function y(n,t,r,e){--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function b(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:P}function j(n){return function(t){return null==t?F:t[n]}}function w(n){return function(t){return null==n?F:n[t]}}function m(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;
return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==F&&(r=r===F?i:r+i)}return r}function E(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function O(n,t){return l(t,function(t){return[t,n[t]]})}function S(n){return function(t){return n(t)}}function I(n,t){return l(t,function(t){return n[t]})}function R(n,t){return n.has(t)}function z(n,t){for(var r=-1,e=n.length;++r<e&&-1<d(t,n[r],0););return r}function W(n,t){for(var r=n.length;r--&&-1<d(t,n[r],0););return r}function B(n){
return"\\"+Tn[n]}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function U(n,t){return function(r){return n(t(r))}}function C(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function M(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function T(n){if(Bn.test(n)){
for(var t=zn.lastIndex=0;zn.test(n);)++t;n=t}else n=tt(n);return n}function $(n){return Bn.test(n)?n.match(zn)||[]:n.split("")}var F,N=1/0,P=NaN,Z=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],q=/\b__p\+='';/g,V=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,H=/[&<>"']/g,J=RegExp(G.source),Y=RegExp(H.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/,en=/^\./,un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/[\\^$.*+?()[\]{}|]/g,fn=RegExp(on.source),cn=/^\s+|\s+$/g,an=/^\s+/,ln=/\s+$/,sn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,hn=/\{\n\/\* \[wrapped with (.+)\] \*/,pn=/,? & /,_n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vn=/\\(\\)?/g,gn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,dn=/\w*$/,yn=/^[-+]0x[0-9a-f]+$/i,bn=/^0b[01]+$/i,xn=/^\[object .+?Constructor\]$/,jn=/^0o[0-7]+$/i,wn=/^(?:0|[1-9]\d*)$/,mn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An=/($^)/,kn=/['\n\r\u2028\u2029\\]/g,En="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",On="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+En,Sn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",In=RegExp("['\u2019]","g"),Rn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),zn=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Sn+En,"g"),Wn=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+",On].join("|"),"g"),Bn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ln=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Un="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Cn={};
Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=false;
var Dn={};Dn["[object Arguments]"]=Dn["[object Array]"]=Dn["[object ArrayBuffer]"]=Dn["[object DataView]"]=Dn["[object Boolean]"]=Dn["[object Date]"]=Dn["[object Float32Array]"]=Dn["[object Float64Array]"]=Dn["[object Int8Array]"]=Dn["[object Int16Array]"]=Dn["[object Int32Array]"]=Dn["[object Map]"]=Dn["[object Number]"]=Dn["[object Object]"]=Dn["[object RegExp]"]=Dn["[object Set]"]=Dn["[object String]"]=Dn["[object Symbol]"]=Dn["[object Uint8Array]"]=Dn["[object Uint8ClampedArray]"]=Dn["[object Uint16Array]"]=Dn["[object Uint32Array]"]=true,
Dn["[object Error]"]=Dn["[object Function]"]=Dn["[object WeakMap]"]=false;var Mn,Tn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$n=parseFloat,Fn=parseInt,Nn=typeof global=="object"&&global&&global.Object===Object&&global,Pn=typeof self=="object"&&self&&self.Object===Object&&self,Zn=Nn||Pn||Function("return this")(),qn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vn=qn&&typeof module=="object"&&module&&!module.nodeType&&module,Kn=Vn&&Vn.exports===qn,Gn=Kn&&Nn.process;
n:{try{Mn=Gn&&Gn.binding&&Gn.binding("util");break n}catch(n){}Mn=void 0}var Hn=Mn&&Mn.isArrayBuffer,Jn=Mn&&Mn.isDate,Yn=Mn&&Mn.isMap,Qn=Mn&&Mn.isRegExp,Xn=Mn&&Mn.isSet,nt=Mn&&Mn.isTypedArray,tt=j("length"),rt=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
"\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
"\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
"\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
"\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
"\u0149":"'n","\u017f":"s"}),et=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),ut=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),it=function w(En){function On(n){if(bu(n)&&!cf(n)&&!(n instanceof Mn)){if(n instanceof zn)return n;if(fi.call(n,"__wrapped__"))return Ne(n)}return new zn(n)}function Sn(){}function zn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=F}function Mn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function qn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Pn;++t<r;)this.add(n[t])}function Vn(n){
this.size=(this.__data__=new Nn(n)).size}function Gn(n,t){var r,e=cf(n),u=!e&&ff(n),i=!e&&!u&&lf(n),o=!e&&!u&&!i&&vf(n),u=(e=e||u||i||o)?E(n.length,ti):[],f=u.length;for(r in n)!t&&!fi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function tt(n){var t=n.length;return t?n[ar(0,t-1)]:F}function ot(n,t){return Me(Tr(n),dt(t,0,n.length))}function ft(n){return Me(Tr(n))}function ct(n,t,r,e){return n===F||su(n,ui[r])&&!fi.call(e,r)?t:n;
}function at(n,t,r){(r===F||su(n[t],r))&&(r!==F||t in n)||vt(n,t,r)}function lt(n,t,r){var e=n[t];fi.call(n,t)&&su(e,r)&&(r!==F||t in n)||vt(n,t,r)}function st(n,t){for(var r=n.length;r--;)if(su(n[r][0],t))return r;return-1}function ht(n,t,r,e){return io(n,function(n,u,i){t(e,n,r(n),i)}),e}function pt(n,t){return n&&$r(t,Bu(t),n)}function _t(n,t){return n&&$r(t,Lu(t),n)}function vt(n,t,r){"__proto__"==t&&ki?ki(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function gt(n,t){for(var r=-1,e=t.length,u=Gu(e),i=null==n;++r<e;)u[r]=i?F:zu(n,t[r]);
return u}function dt(n,t,r){return n===n&&(r!==F&&(n=n<=r?n:r),t!==F&&(n=n>=t?n:t)),n}function yt(n,t,r,e,i,o){var f,c=1&t,a=2&t,l=4&t;if(r&&(f=i?r(n,e,i,o):r(n)),f!==F)return f;if(!yu(n))return n;if(e=cf(n)){if(f=Ae(n),!c)return Tr(n,f)}else{var s=go(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(lf(n))return Br(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:ke(n),!c)return a?Nr(n,_t(f,n)):Fr(n,pt(f,n))}else{if(!Dn[s])return i?n:{};f=Ee(n,s,yt,c)}}if(o||(o=new Vn),
i=o.get(n))return i;o.set(n,f);var a=l?a?ge:ve:a?Lu:Bu,p=e?F:a(n);return u(p||n,function(e,u){p&&(u=e,e=n[u]),lt(f,u,yt(e,t,r,u,n,o))}),f}function bt(n){var t=Bu(n);return function(r){return xt(r,n,t)}}function xt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Xu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===F&&!(u in n)||!i(o))return false}return true}function jt(n,t,r){if(typeof n!="function")throw new ri("Expected a function");return xo(function(){n.apply(F,r)},t)}function wt(n,t,r,e){var u=-1,i=c,o=true,f=n.length,s=[],h=t.length;
if(!f)return s;r&&(t=l(t,S(r))),e?(i=a,o=false):200<=t.length&&(i=R,o=false,t=new qn(t));n:for(;++u<f;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(o&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function mt(n,t){var r=true;return io(n,function(n,e,u){return r=!!t(n,e,u)}),r}function At(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===F?o===o&&!mu(o):r(o,f)))var f=o,c=i}return c}function kt(n,t){var r=[];return io(n,function(n,e,u){
t(n,e,u)&&r.push(n)}),r}function Et(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Oe),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?Et(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function Ot(n,t){return n&&fo(n,t,Bu)}function St(n,t){return n&&co(n,t,Bu)}function It(n,t){return f(t,function(t){return vu(n[t])})}function Rt(n,t){t=zr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Te(t[r++])];return r&&r==e?n:F}function zt(n,t,r){return t=t(n),cf(n)?t:s(t,r(n))}function Wt(n){if(null==n)return n===F?"[object Undefined]":"[object Null]";
n=Xu(n);var t;if(Ai&&Ai in n){var r=fi.call(n,Ai),e=n[Ai];try{n[Ai]=F,t=true}catch(n){}var u=li.call(n);t&&(r?n[Ai]=e:delete n[Ai]),t=u}else t=li.call(n);return t}function Bt(n,t){return n>t}function Lt(n,t){return null!=n&&fi.call(n,t)}function Ut(n,t){return null!=n&&t in Xu(n)}function Ct(n,t,r){for(var e=r?a:c,u=n[0].length,i=n.length,o=i,f=Gu(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,S(t))),s=Di(p.length,s),f[o]=!r&&(t||120<=u&&120<=p.length)?new qn(o&&p):F}var p=n[0],_=-1,v=f[0];n:for(;++_<u&&h.length<s;){
var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!R(v,d):!e(h,d,r)){for(o=i;--o;){var y=f[o];if(y?!R(y,d):!e(n[o],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Dt(n,t,r){var e={};return Ot(n,function(n,u,i){t(e,r(n),u,i)}),e}function Mt(n,t,e){return t=zr(t,n),n=2>t.length?n:Rt(n,gr(t,0,-1)),t=null==n?n:n[Te(Ke(t))],null==t?F:r(t,n,e)}function Tt(n){return bu(n)&&"[object Arguments]"==Wt(n)}function $t(n){return bu(n)&&"[object ArrayBuffer]"==Wt(n)}function Ft(n){return bu(n)&&"[object Date]"==Wt(n);
}function Nt(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!yu(n)&&!bu(t))t=n!==n&&t!==t;else n:{var i=cf(n),o=cf(t),f="[object Array]",c="[object Array]";i||(f=go(n),f="[object Arguments]"==f?"[object Object]":f),o||(c=go(t),c="[object Arguments]"==c?"[object Object]":c);var a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&lf(n)){if(!lf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Vn),t=i||vf(n)?he(n,t,r,e,Nt,u):pe(n,t,f,r,e,Nt,u);else{if(!(1&r)&&(i=a&&fi.call(n,"__wrapped__"),f=o&&fi.call(t,"__wrapped__"),
i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Vn),t=Nt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Vn),i=1&r,f=Bu(n),o=f.length,c=Bu(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:fi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===F?h!==p&&!Nt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),
u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Pt(n){return bu(n)&&"[object Map]"==go(n)}function Zt(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Xu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===F&&!(c in n))return false}else{if(f=new Vn,e)var s=e(a,l,c,n,t,f);if(s===F?!Nt(l,a,3,e,f):!s)return false}}return true}function qt(n){return!(!yu(n)||ai&&ai in n)&&(vu(n)?pi:xn).test($e(n))}function Vt(n){
return bu(n)&&"[object RegExp]"==Wt(n)}function Kt(n){return bu(n)&&"[object Set]"==go(n)}function Gt(n){return bu(n)&&du(n.length)&&!!Cn[Wt(n)]}function Ht(n){return typeof n=="function"?n:null==n?Fu:typeof n=="object"?cf(n)?nr(n[0],n[1]):Xt(n):qu(n)}function Jt(n){if(!We(n))return Ui(n);var t,r=[];for(t in Xu(n))fi.call(n,t)&&"constructor"!=t&&r.push(t);return r}function Yt(n,t){return n<t}function Qt(n,t){var r=-1,e=hu(n)?Gu(n.length):[];return io(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Xt(n){
var t=je(n);return 1==t.length&&t[0][2]?Be(t[0][0],t[0][1]):function(r){return r===n||Zt(r,n,t)}}function nr(n,t){return Re(n)&&t===t&&!yu(t)?Be(Te(n),t):function(r){var e=zu(r,n);return e===F&&e===t?Wu(r,n):Nt(t,e,3)}}function tr(n,t,r,e,u){n!==t&&fo(t,function(i,o){if(yu(i)){u||(u=new Vn);var f=u,c=n[o],a=t[o],l=f.get(a);if(l)at(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):F,s=l===F;if(s){var h=cf(a),p=!h&&lf(a),_=!h&&!p&&vf(a),l=a;h||p||_?cf(c)?l=c:pu(c)?l=Tr(c):p?(s=false,l=Br(a,true)):_?(s=false,l=Ur(a,true)):l=[]:ju(a)||ff(a)?(l=c,
ff(c)?l=Iu(c):(!yu(c)||r&&vu(c))&&(l=ke(a))):s=false}s&&(f.set(a,l),tr(l,a,r,e,f),f.delete(a)),at(n,o,l)}}else f=e?e(n[o],i,o+"",n,t,u):F,f===F&&(f=i),at(n,o,f)},Lu)}function rr(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:F}function er(n,t,r){var e=-1;return t=l(t.length?t:[Fu],S(be())),n=Qt(n,function(n){return{a:l(t,function(t){return t(n)}),b:++e,c:n}}),A(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Cr(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);
break n}}e=n.b-t.b}return e})}function ur(n,t){return n=Xu(n),ir(n,t,function(t,r){return Wu(n,r)})}function ir(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Rt(n,o);r(f,o)&&_r(i,zr(o,n),f)}return i}function or(n){return function(t){return Rt(t,n)}}function fr(n,t,r,e){var u=e?y:d,i=-1,o=t.length,f=n;for(n===t&&(t=Tr(t)),r&&(f=l(n,S(r)));++i<o;)for(var c=0,a=t[i],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==n&&ji.call(f,c,1),ji.call(n,c,1);return n}function cr(n,t){for(var r=n?t.length:0,e=r-1;r--;){
var u=t[r];if(r==e||u!==i){var i=u;Se(u)?ji.call(n,u,1):Ar(n,u)}}}function ar(n,t){return n+Ri($i()*(t-n+1))}function lr(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ri(t/2))&&(n+=n);while(t);return r}function sr(n,t){return jo(Ue(n,t,Fu),n+"")}function hr(n){return tt(Cu(n))}function pr(n,t){var r=Cu(n);return Me(r,dt(t,0,r.length))}function _r(n,t,r,e){if(!yu(n))return n;t=zr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Te(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):F;
a===F&&(a=yu(l)?l:Se(t[u+1])?[]:{})}lt(f,c,a),f=f[c]}return n}function vr(n){return Me(Cu(n))}function gr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Gu(u);++e<u;)r[e]=n[e+t];return r}function dr(n,t){var r;return io(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function yr(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!mu(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return br(n,t,Fu,r);
}function br(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=mu(t),a=t===F;u<i;){var l=Ri((u+i)/2),s=r(n[l]),h=s!==F,p=null===s,_=s===s,v=mu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Di(i,4294967294)}function xr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!su(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function jr(n){return typeof n=="number"?n:mu(n)?P:+n}function wr(n){if(typeof n=="string")return n;
if(cf(n))return l(n,wr)+"";if(mu(n))return eo?eo.call(n):"";var t=n+"";return"0"==t&&1/n==-N?"-0":t}function mr(n,t,r){var e=-1,u=c,i=n.length,o=true,f=[],l=f;if(r)o=false,u=a;else if(200<=i){if(u=t?null:ho(n))return D(u);o=false,u=R,l=new qn}else l=t?[]:f;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(o&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function Ar(n,t){return t=zr(t,n),n=2>t.length?n:Rt(n,gr(t,0,-1)),
null==n||delete n[Te(Ke(t))]}function kr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?gr(n,e?0:i,e?i+1:u):gr(n,e?i+1:0,e?u:i)}function Er(n,t){var r=n;return r instanceof Mn&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function Or(n,t,r){var e=n.length;if(2>e)return e?mr(n[0]):[];for(var u=-1,i=Gu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=wt(i[u]||o,n[f],t,r));return mr(Et(i,1),t,r)}function Sr(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:F);
return o}function Ir(n){return pu(n)?n:[]}function Rr(n){return typeof n=="function"?n:Fu}function zr(n,t){return cf(n)?n:Re(n,t)?[n]:wo(Ru(n))}function Wr(n,t,r){var e=n.length;return r=r===F?e:r,!t&&r>=e?n:gr(n,t,r)}function Br(n,t){if(t)return n.slice();var r=n.length,r=di?di(r):new n.constructor(r);return n.copy(r),r}function Lr(n){var t=new n.constructor(n.byteLength);return new gi(t).set(new gi(n)),t}function Ur(n,t){return new n.constructor(t?Lr(n.buffer):n.buffer,n.byteOffset,n.length)}function Cr(n,t){
if(n!==t){var r=n!==F,e=null===n,u=n===n,i=mu(n),o=t!==F,f=null===t,c=t===t,a=mu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Dr(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Ci(i-o,0),l=Gu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Mr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Ci(i-f,0),s=Gu(l+a);
for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Tr(n,t){var r=-1,e=n.length;for(t||(t=Gu(e));++r<e;)t[r]=n[r];return t}function $r(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):F;c===F&&(c=n[f]),u?vt(r,f,c):lt(r,f,c)}return r}function Fr(n,t){return $r(n,_o(n),t)}function Nr(n,t){return $r(n,vo(n),t)}function Pr(n,t){return function(r,u){var i=cf(r)?e:ht,o=t?t():{};return i(r,n,be(u,2),o);
}}function Zr(n){return sr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:F,o=2<u?r[2]:F,i=3<n.length&&typeof i=="function"?(u--,i):F;for(o&&Ie(r[0],r[1],o)&&(i=3>u?F:i,u=1),t=Xu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function qr(n,t){return function(r,e){if(null==r)return r;if(!hu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Xu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Vr(n){return function(t,r,e){var u=-1,i=Xu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
}return t}}function Kr(n,t,r){function e(){return(this&&this!==Zn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Jr(n);return e}function Gr(n){return function(t){t=Ru(t);var r=Bn.test(t)?$(t):F,e=r?r[0]:t.charAt(0);return t=r?Wr(r,1).join(""):t.slice(1),e[n]()+t}}function Hr(n){return function(t){return h(Tu(Mu(t).replace(In,"")),n,"")}}function Jr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=uo(n.prototype),t=n.apply(r,t);return yu(t)?t:r}}function Yr(n,t,e){function u(){for(var o=arguments.length,f=Gu(o),c=o,a=ye(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:C(f,a),o-=c.length,o<e?ce(n,t,ne,u.placeholder,F,f,c,F,F,e-o):r(this&&this!==Zn&&this instanceof u?i:n,this,f);
}var i=Jr(n);return u}function Qr(n){return function(t,r,e){var u=Xu(t);if(!hu(t)){var i=be(r,3);t=Bu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:F}}function Xr(n){return _e(function(t){var r=t.length,e=r,u=zn.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ri("Expected a function");if(u&&!o&&"wrapper"==de(i))var o=new zn([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=de(i),f="wrapper"==u?po(i):F,o=f&&ze(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[de(f[0])].apply(o,f[3]):1==i.length&&ze(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&cf(e)&&200<=e.length)return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function ne(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Gu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=ye(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Dr(y,e,u,_)),i&&(y=Mr(y,i,o,_)),d-=x,_&&d<a)return j=C(y,j),ce(n,t,ne,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;
for(var w=Di(f.length,x),m=Tr(y);w--;){var A=f[w];y[w]=Se(A,x)?m[A]:F}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Zn&&this instanceof l&&(b=g||Jr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?F:Jr(n);return l}function te(n,t){return function(r,e){return Dt(r,n,t(e))}}function re(n,t){return function(r,e){var u;if(r===F&&e===F)return t;if(r!==F&&(u=r),e!==F){if(u===F)return e;typeof r=="string"||typeof e=="string"?(r=wr(r),e=wr(e)):(r=jr(r),e=jr(e)),u=n(r,e)}return u;
}}function ee(n){return _e(function(t){return t=l(t,S(be())),sr(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ue(n,t){t=t===F?" ":wr(t);var r=t.length;return 2>r?r?lr(t,n):t:(r=lr(t,Ii(n/T(t))),Bn.test(t)?Wr($(r),0,n).join(""):r.slice(0,n))}function ie(n,t,e,u){function i(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Gu(l+c),h=this&&this!==Zn&&this instanceof i?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,o?e:this,s)}var o=1&t,f=Jr(n);return i;
}function oe(n){return function(t,r,e){e&&typeof e!="number"&&Ie(t,r,e)&&(r=e=F),t=ku(t),r===F?(r=t,t=0):r=ku(r),e=e===F?t<r?1:-1:ku(e);var u=-1;r=Ci(Ii((r-t)/(e||1)),0);for(var i=Gu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function fe(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ce(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:F;o=l?F:o;var h=l?i:F;return i=l?F:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(F,u),ze(n)&&bo(r,u),
r.placeholder=e,Ce(r,n,t)}function ae(n){var t=Qu[n];return function(n,r){if(n=Su(n),r=Di(Eu(r),292)){var e=(Ru(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Ru(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function le(n){return function(t){var r=go(t);return"[object Map]"==r?L(t):"[object Set]"==r?M(t):O(t,n(t))}}function se(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ri("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=F),o=o===F?o:Ci(Eu(o),0),f=f===F?f:Eu(f),
a-=u?u.length:0,64&t){var l=e,s=u;e=u=F}var h=c?F:po(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Dr(e,r,h[4]):r,i[4]=e?C(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Mr(e,r,h[6]):r,i[6]=e?C(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Di(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],
i[1]=t),n=i[0],t=i[1],r=i[2],e=i[3],u=i[4],f=i[9]=null==i[9]?c?0:n.length:Ci(i[9]-a,0),!f&&24&t&&(t&=-25),Ce((h?ao:bo)(t&&1!=t?8==t||16==t?Yr(n,t,f):32!=t&&33!=t||u.length?ne.apply(F,i):ie(n,t,r,e):Kr(n,t,r),i),n,t)}function he(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new qn:F;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],h=t[c];if(e)var p=o?e(h,s,c,t,n,i):e(s,h,c,n,t,i);if(p!==F){if(p)continue;a=false;break}if(l){
if(!_(t,function(n,t){if(!R(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==h&&!u(s,h,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function pe(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new gi(n),new gi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return su(+n,+t);case"[object Error]":
return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=D),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=he(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(ro)return ro.call(n)==ro.call(t)}return false}function _e(n){return jo(Ue(n,F,qe),n+"")}function ve(n){return zt(n,Bu,_o)}function ge(n){return zt(n,Lu,vo)}function de(n){for(var t=n.name+"",r=Hi[t],e=fi.call(Hi,t)?r.length:0;e--;){
var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function ye(n){return(fi.call(On,"placeholder")?On:n).placeholder}function be(){var n=On.iteratee||Nu,n=n===Nu?Ht:n;return arguments.length?n(arguments[0],arguments[1]):n}function xe(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map}function je(n){for(var t=Bu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!yu(u)]}return t;
}function we(n,t){var r=null==n?F:n[t];return qt(r)?r:F}function me(n,t,r){t=zr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Te(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&du(u)&&Se(o,u)&&(cf(n)||ff(n)))}function Ae(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&fi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function ke(n){return typeof n.constructor!="function"||We(n)?{}:uo(yi(n))}function Ee(r,e,u,i){var o=r.constructor;
switch(e){case"[object ArrayBuffer]":return Lr(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object DataView]":return e=i?Lr(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ur(r,i);case"[object Map]":return e=i?u(L(r),1):L(r),
h(e,n,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,dn.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=i?u(D(r),1):D(r),h(e,t,new r.constructor);case"[object Symbol]":return ro?Xu(ro.call(r)):{}}}function Oe(n){return cf(n)||ff(n)||!!(wi&&n&&n[wi])}function Se(n,t){return t=null==t?9007199254740991:t,!!t&&(typeof n=="number"||wn.test(n))&&-1<n&&0==n%1&&n<t}function Ie(n,t,r){if(!yu(r))return false;
var e=typeof t;return!!("number"==e?hu(r)&&Se(t,r.length):"string"==e&&t in r)&&su(r[t],n)}function Re(n,t){if(cf(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!mu(n))||(rn.test(n)||!tn.test(n)||null!=t&&n in Xu(t))}function ze(n){var t=de(n),r=On[t];return typeof r=="function"&&t in Mn.prototype&&(n===r||(t=po(r),!!t&&n===t[0]))}function We(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ui)}function Be(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==F||n in Xu(r)));
}}function Le(n,t,r,e,u,i){return yu(n)&&yu(t)&&(i.set(t,n),tr(n,t,F,Le,i),i.delete(t)),n}function Ue(n,t,e){return t=Ci(t===F?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Ci(u.length-t,0),f=Gu(o);++i<o;)f[i]=u[t+i];for(i=-1,o=Gu(t+1);++i<t;)o[i]=u[i];return o[t]=e(f),r(n,this,o)}}function Ce(n,t,r){var e=t+"";t=jo;var u,i=Fe;return u=(u=e.match(hn))?u[1].split(pn):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(sn,"{\n/* [wrapped with "+r+"] */\n")),
t(n,e)}function De(n){var t=0,r=0;return function(){var e=Mi(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(F,arguments)}}function Me(n,t){var r=-1,e=n.length,u=e-1;for(t=t===F?e:t;++r<t;){var e=ar(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Te(n){if(typeof n=="string"||mu(n))return n;var t=n+"";return"0"==t&&1/n==-N?"-0":t}function $e(n){if(null!=n){try{return oi.call(n)}catch(n){}return n+""}return""}function Fe(n,t){return u(Z,function(r){var e="_."+r[0];
t&r[1]&&!c(n,e)&&n.push(e)}),n.sort()}function Ne(n){if(n instanceof Mn)return n.clone();var t=new zn(n.__wrapped__,n.__chain__);return t.__actions__=Tr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Pe(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Eu(r),0>r&&(r=Ci(e+r,0)),g(n,be(t,3),r)):-1}function Ze(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==F&&(u=Eu(r),u=0>r?Ci(e+u,0):Di(u,e-1)),g(n,be(t,3),u,true)}function qe(n){return(null==n?0:n.length)?Et(n,1):[];
}function Ve(n){return n&&n.length?n[0]:F}function Ke(n){var t=null==n?0:n.length;return t?n[t-1]:F}function Ge(n,t){return n&&n.length&&t&&t.length?fr(n,t):n}function He(n){return null==n?n:Fi.call(n)}function Je(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(pu(n))return t=Ci(n.length,t),true}),E(t,function(t){return l(n,j(t))})}function Ye(n,t){if(!n||!n.length)return[];var e=Je(n);return null==t?e:l(e,function(n){return r(t,F,n)})}function Qe(n){return n=On(n),n.__chain__=true,n;
}function Xe(n,t){return t(n)}function nu(){return this}function tu(n,t){return(cf(n)?u:io)(n,be(t,3))}function ru(n,t){return(cf(n)?i:oo)(n,be(t,3))}function eu(n,t){return(cf(n)?l:Qt)(n,be(t,3))}function uu(n,t,r){return t=r?F:t,t=n&&null==t?n.length:t,se(n,128,F,F,F,F,t)}function iu(n,t){var r;if(typeof t!="function")throw new ri("Expected a function");return n=Eu(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=F),r}}function ou(n,t,r){return t=r?F:t,n=se(n,8,F,F,F,F,F,t),n.placeholder=ou.placeholder,
n}function fu(n,t,r){return t=r?F:t,n=se(n,16,F,F,F,F,F,t),n.placeholder=fu.placeholder,n}function cu(n,t,r){function e(t){var r=c,e=a;return c=a=F,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===F||r>=t||0>r||g&&n>=l}function i(){var n=Ho();if(u(n))return o(n);var r,e=xo;r=n-_,n=t-(n-p),r=g?Di(n,l-r):n,h=e(i,r)}function o(n){return h=F,d&&c?e(n):(c=a=F,s)}function f(){var n=Ho(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===F)return _=n=p,h=xo(i,t),v?e(n):s;if(g)return h=xo(i,t),e(p)}return h===F&&(h=xo(i,t)),
s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ri("Expected a function");return t=Su(t)||0,yu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Ci(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==F&&so(h),_=0,c=p=a=h=F},f.flush=function(){return h===F?s:o(Ho())},f}function au(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ri("Expected a function");
return r.cache=new(au.Cache||Pn),r}function lu(n){if(typeof n!="function")throw new ri("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function su(n,t){return n===t||n!==n&&t!==t}function hu(n){return null!=n&&du(n.length)&&!vu(n)}function pu(n){return bu(n)&&hu(n)}function _u(n){if(!bu(n))return false;var t=Wt(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!ju(n);
}function vu(n){return!!yu(n)&&(n=Wt(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function gu(n){return typeof n=="number"&&n==Eu(n)}function du(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function yu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function bu(n){return null!=n&&typeof n=="object"}function xu(n){return typeof n=="number"||bu(n)&&"[object Number]"==Wt(n)}function ju(n){return!(!bu(n)||"[object Object]"!=Wt(n))&&(n=yi(n),
null===n||(n=fi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&oi.call(n)==si))}function wu(n){return typeof n=="string"||!cf(n)&&bu(n)&&"[object String]"==Wt(n)}function mu(n){return typeof n=="symbol"||bu(n)&&"[object Symbol]"==Wt(n)}function Au(n){if(!n)return[];if(hu(n))return wu(n)?$(n):Tr(n);if(mi&&n[mi]){n=n[mi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=go(n),("[object Map]"==t?L:"[object Set]"==t?D:Cu)(n)}function ku(n){return n?(n=Su(n),
n===N||n===-N?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Eu(n){n=ku(n);var t=n%1;return n===n?t?n-t:n:0}function Ou(n){return n?dt(Eu(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(mu(n))return P;if(yu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=yu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(cn,"");var t=bn.test(n);return t||jn.test(n)?Fn(n.slice(2),t?2:8):yn.test(n)?P:+n}function Iu(n){return $r(n,Lu(n))}function Ru(n){return null==n?"":wr(n);
}function zu(n,t,r){return n=null==n?F:Rt(n,t),n===F?r:n}function Wu(n,t){return null!=n&&me(n,t,Ut)}function Bu(n){return hu(n)?Gn(n):Jt(n)}function Lu(n){if(hu(n))n=Gn(n,true);else if(yu(n)){var t,r=We(n),e=[];for(t in n)("constructor"!=t||!r&&fi.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Xu(n))t.push(r);n=t}return n}function Uu(n,t){if(null==n)return{};var r=l(ge(n),function(n){return[n]});return t=be(t),ir(n,r,function(n,r){return t(n,r[0])})}function Cu(n){return null==n?[]:I(n,Bu(n));
}function Du(n){return Ff(Ru(n).toLowerCase())}function Mu(n){return(n=Ru(n))&&n.replace(mn,rt).replace(Rn,"")}function Tu(n,t,r){return n=Ru(n),t=r?F:t,t===F?Ln.test(n)?n.match(Wn)||[]:n.match(_n)||[]:n.match(t)||[]}function $u(n){return function(){return n}}function Fu(n){return n}function Nu(n){return Ht(typeof n=="function"?n:yt(n,1))}function Pu(n,t,r){var e=Bu(t),i=It(t,e);null!=r||yu(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=It(t,Bu(t)));var o=!(yu(r)&&"chain"in r&&!r.chain),f=vu(n);return u(i,function(r){
var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Tr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function Zu(){}function qu(n){return Re(n)?j(Te(n)):or(n)}function Vu(){return[]}function Ku(){return false}En=null==En?Zn:it.defaults(Zn.Object(),En,it.pick(Zn,Un));var Gu=En.Array,Hu=En.Date,Ju=En.Error,Yu=En.Function,Qu=En.Math,Xu=En.Object,ni=En.RegExp,ti=En.String,ri=En.TypeError,ei=Gu.prototype,ui=Xu.prototype,ii=En["__core-js_shared__"],oi=Yu.prototype.toString,fi=ui.hasOwnProperty,ci=0,ai=function(){
var n=/[^.]+$/.exec(ii&&ii.keys&&ii.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),li=ui.toString,si=oi.call(Xu),hi=Zn._,pi=ni("^"+oi.call(fi).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_i=Kn?En.Buffer:F,vi=En.Symbol,gi=En.Uint8Array,di=_i?_i.f:F,yi=U(Xu.getPrototypeOf,Xu),bi=Xu.create,xi=ui.propertyIsEnumerable,ji=ei.splice,wi=vi?vi.isConcatSpreadable:F,mi=vi?vi.iterator:F,Ai=vi?vi.toStringTag:F,ki=function(){try{var n=we(Xu,"defineProperty");
return n({},"",{}),n}catch(n){}}(),Ei=En.clearTimeout!==Zn.clearTimeout&&En.clearTimeout,Oi=Hu&&Hu.now!==Zn.Date.now&&Hu.now,Si=En.setTimeout!==Zn.setTimeout&&En.setTimeout,Ii=Qu.ceil,Ri=Qu.floor,zi=Xu.getOwnPropertySymbols,Wi=_i?_i.isBuffer:F,Bi=En.isFinite,Li=ei.join,Ui=U(Xu.keys,Xu),Ci=Qu.max,Di=Qu.min,Mi=Hu.now,Ti=En.parseInt,$i=Qu.random,Fi=ei.reverse,Ni=we(En,"DataView"),Pi=we(En,"Map"),Zi=we(En,"Promise"),qi=we(En,"Set"),Vi=we(En,"WeakMap"),Ki=we(Xu,"create"),Gi=Vi&&new Vi,Hi={},Ji=$e(Ni),Yi=$e(Pi),Qi=$e(Zi),Xi=$e(qi),no=$e(Vi),to=vi?vi.prototype:F,ro=to?to.valueOf:F,eo=to?to.toString:F,uo=function(){
function n(){}return function(t){return yu(t)?bi?bi(t):(n.prototype=t,t=new n,n.prototype=F,t):{}}}();On.templateSettings={escape:Q,evaluate:X,interpolate:nn,variable:"",imports:{_:On}},On.prototype=Sn.prototype,On.prototype.constructor=On,zn.prototype=uo(Sn.prototype),zn.prototype.constructor=zn,Mn.prototype=uo(Sn.prototype),Mn.prototype.constructor=Mn,Tn.prototype.clear=function(){this.__data__=Ki?Ki(null):{},this.size=0},Tn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Tn.prototype.get=function(n){var t=this.__data__;return Ki?(n=t[n],"__lodash_hash_undefined__"===n?F:n):fi.call(t,n)?t[n]:F},Tn.prototype.has=function(n){var t=this.__data__;return Ki?t[n]!==F:fi.call(t,n)},Tn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Ki&&t===F?"__lodash_hash_undefined__":t,this},Nn.prototype.clear=function(){this.__data__=[],this.size=0},Nn.prototype.delete=function(n){var t=this.__data__;return n=st(t,n),!(0>n)&&(n==t.length-1?t.pop():ji.call(t,n,1),
--this.size,true)},Nn.prototype.get=function(n){var t=this.__data__;return n=st(t,n),0>n?F:t[n][1]},Nn.prototype.has=function(n){return-1<st(this.__data__,n)},Nn.prototype.set=function(n,t){var r=this.__data__,e=st(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Pn.prototype.clear=function(){this.size=0,this.__data__={hash:new Tn,map:new(Pi||Nn),string:new Tn}},Pn.prototype.delete=function(n){return n=xe(this,n).delete(n),this.size-=n?1:0,n},Pn.prototype.get=function(n){return xe(this,n).get(n);
},Pn.prototype.has=function(n){return xe(this,n).has(n)},Pn.prototype.set=function(n,t){var r=xe(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},qn.prototype.add=qn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},qn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.clear=function(){this.__data__=new Nn,this.size=0},Vn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Vn.prototype.get=function(n){
return this.__data__.get(n)},Vn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Nn){var e=r.__data__;if(!Pi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Pn(e)}return r.set(n,t),this.size=r.size,this};var io=qr(Ot),oo=qr(St,true),fo=Vr(),co=Vr(true),ao=Gi?function(n,t){return Gi.set(n,t),n}:Fu,lo=ki?function(n,t){return ki(n,"toString",{configurable:true,enumerable:false,value:$u(t),writable:true})}:Fu,so=Ei||function(n){
return Zn.clearTimeout(n)},ho=qi&&1/D(new qi([,-0]))[1]==N?function(n){return new qi(n)}:Zu,po=Gi?function(n){return Gi.get(n)}:Zu,_o=zi?U(zi,Xu):Vu,vo=zi?function(n){for(var t=[];n;)s(t,_o(n)),n=yi(n);return t}:Vu,go=Wt;(Ni&&"[object DataView]"!=go(new Ni(new ArrayBuffer(1)))||Pi&&"[object Map]"!=go(new Pi)||Zi&&"[object Promise]"!=go(Zi.resolve())||qi&&"[object Set]"!=go(new qi)||Vi&&"[object WeakMap]"!=go(new Vi))&&(go=function(n){var t=Wt(n);if(n=(n="[object Object]"==t?n.constructor:F)?$e(n):"")switch(n){
case Ji:return"[object DataView]";case Yi:return"[object Map]";case Qi:return"[object Promise]";case Xi:return"[object Set]";case no:return"[object WeakMap]"}return t});var yo=ii?vu:Ku,bo=De(ao),xo=Si||function(n,t){return Zn.setTimeout(n,t)},jo=De(lo),wo=function(n){n=au(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return en.test(n)&&t.push(""),n.replace(un,function(n,r,e,u){t.push(e?u.replace(vn,"$1"):r||n)}),t}),mo=sr(function(n,t){return pu(n)?wt(n,Et(t,1,pu,true)):[];
}),Ao=sr(function(n,t){var r=Ke(t);return pu(r)&&(r=F),pu(n)?wt(n,Et(t,1,pu,true),be(r,2)):[]}),ko=sr(function(n,t){var r=Ke(t);return pu(r)&&(r=F),pu(n)?wt(n,Et(t,1,pu,true),F,r):[]}),Eo=sr(function(n){var t=l(n,Ir);return t.length&&t[0]===n[0]?Ct(t):[]}),Oo=sr(function(n){var t=Ke(n),r=l(n,Ir);return t===Ke(r)?t=F:r.pop(),r.length&&r[0]===n[0]?Ct(r,be(t,2)):[]}),So=sr(function(n){var t=Ke(n),r=l(n,Ir);return(t=typeof t=="function"?t:F)&&r.pop(),r.length&&r[0]===n[0]?Ct(r,F,t):[]}),Io=sr(Ge),Ro=_e(function(n,t){
var r=null==n?0:n.length,e=gt(n,t);return cr(n,l(t,function(n){return Se(n,r)?+n:n}).sort(Cr)),e}),zo=sr(function(n){return mr(Et(n,1,pu,true))}),Wo=sr(function(n){var t=Ke(n);return pu(t)&&(t=F),mr(Et(n,1,pu,true),be(t,2))}),Bo=sr(function(n){var t=Ke(n),t=typeof t=="function"?t:F;return mr(Et(n,1,pu,true),F,t)}),Lo=sr(function(n,t){return pu(n)?wt(n,t):[]}),Uo=sr(function(n){return Or(f(n,pu))}),Co=sr(function(n){var t=Ke(n);return pu(t)&&(t=F),Or(f(n,pu),be(t,2))}),Do=sr(function(n){var t=Ke(n),t=typeof t=="function"?t:F;
return Or(f(n,pu),F,t)}),Mo=sr(Je),To=sr(function(n){var t=n.length,t=1<t?n[t-1]:F,t=typeof t=="function"?(n.pop(),t):F;return Ye(n,t)}),$o=_e(function(n){function t(t){return gt(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Mn&&Se(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Xe,args:[t],thisArg:F}),new zn(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(F),n})):this.thru(t)}),Fo=Pr(function(n,t,r){fi.call(n,r)?++n[r]:vt(n,r,1);
}),No=Qr(Pe),Po=Qr(Ze),Zo=Pr(function(n,t,r){fi.call(n,r)?n[r].push(t):vt(n,r,[t])}),qo=sr(function(n,t,e){var u=-1,i=typeof t=="function",o=hu(n)?Gu(n.length):[];return io(n,function(n){o[++u]=i?r(t,n,e):Mt(n,t,e)}),o}),Vo=Pr(function(n,t,r){vt(n,r,t)}),Ko=Pr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Go=sr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Ie(n,t[0],t[1])?t=[]:2<r&&Ie(t[0],t[1],t[2])&&(t=[t[0]]),er(n,Et(t,1),[])}),Ho=Oi||function(){return Zn.Date.now();
},Jo=sr(function(n,t,r){var e=1;if(r.length)var u=C(r,ye(Jo)),e=32|e;return se(n,e,t,r,u)}),Yo=sr(function(n,t,r){var e=3;if(r.length)var u=C(r,ye(Yo)),e=32|e;return se(t,e,n,r,u)}),Qo=sr(function(n,t){return jt(n,1,t)}),Xo=sr(function(n,t,r){return jt(n,Su(t)||0,r)});au.Cache=Pn;var nf=sr(function(n,t){t=1==t.length&&cf(t[0])?l(t[0],S(be())):l(Et(t,1),S(be()));var e=t.length;return sr(function(u){for(var i=-1,o=Di(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),tf=sr(function(n,t){
return se(n,32,F,t,C(t,ye(tf)))}),rf=sr(function(n,t){return se(n,64,F,t,C(t,ye(rf)))}),ef=_e(function(n,t){return se(n,256,F,F,F,t)}),uf=fe(Bt),of=fe(function(n,t){return n>=t}),ff=Tt(function(){return arguments}())?Tt:function(n){return bu(n)&&fi.call(n,"callee")&&!xi.call(n,"callee")},cf=Gu.isArray,af=Hn?S(Hn):$t,lf=Wi||Ku,sf=Jn?S(Jn):Ft,hf=Yn?S(Yn):Pt,pf=Qn?S(Qn):Vt,_f=Xn?S(Xn):Kt,vf=nt?S(nt):Gt,gf=fe(Yt),df=fe(function(n,t){return n<=t}),yf=Zr(function(n,t){if(We(t)||hu(t))$r(t,Bu(t),n);else for(var r in t)fi.call(t,r)&&lt(n,r,t[r]);
}),bf=Zr(function(n,t){$r(t,Lu(t),n)}),xf=Zr(function(n,t,r,e){$r(t,Lu(t),n,e)}),jf=Zr(function(n,t,r,e){$r(t,Bu(t),n,e)}),wf=_e(gt),mf=sr(function(n){return n.push(F,ct),r(xf,F,n)}),Af=sr(function(n){return n.push(F,Le),r(If,F,n)}),kf=te(function(n,t,r){n[t]=r},$u(Fu)),Ef=te(function(n,t,r){fi.call(n,t)?n[t].push(r):n[t]=[r]},be),Of=sr(Mt),Sf=Zr(function(n,t,r){tr(n,t,r)}),If=Zr(function(n,t,r,e){tr(n,t,r,e)}),Rf=_e(function(n,t){var r={};if(null==n)return r;var e=false;t=l(t,function(t){return t=zr(t,n),
e||(e=1<t.length),t}),$r(n,ge(n),r),e&&(r=yt(r,7));for(var u=t.length;u--;)Ar(r,t[u]);return r}),zf=_e(function(n,t){return null==n?{}:ur(n,t)}),Wf=le(Bu),Bf=le(Lu),Lf=Hr(function(n,t,r){return t=t.toLowerCase(),n+(r?Du(t):t)}),Uf=Hr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Cf=Hr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Df=Gr("toLowerCase"),Mf=Hr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Tf=Hr(function(n,t,r){return n+(r?" ":"")+Ff(t)}),$f=Hr(function(n,t,r){
return n+(r?" ":"")+t.toUpperCase()}),Ff=Gr("toUpperCase"),Nf=sr(function(n,t){try{return r(n,F,t)}catch(n){return _u(n)?n:new Ju(n)}}),Pf=_e(function(n,t){return u(t,function(t){t=Te(t),vt(n,t,Jo(n[t],n))}),n}),Zf=Xr(),qf=Xr(true),Vf=sr(function(n,t){return function(r){return Mt(r,n,t)}}),Kf=sr(function(n,t){return function(r){return Mt(n,r,t)}}),Gf=ee(l),Hf=ee(o),Jf=ee(_),Yf=oe(),Qf=oe(true),Xf=re(function(n,t){return n+t},0),nc=ae("ceil"),tc=re(function(n,t){return n/t},1),rc=ae("floor"),ec=re(function(n,t){
return n*t},1),uc=ae("round"),ic=re(function(n,t){return n-t},0);return On.after=function(n,t){if(typeof t!="function")throw new ri("Expected a function");return n=Eu(n),function(){if(1>--n)return t.apply(this,arguments)}},On.ary=uu,On.assign=yf,On.assignIn=bf,On.assignInWith=xf,On.assignWith=jf,On.at=wf,On.before=iu,On.bind=Jo,On.bindAll=Pf,On.bindKey=Yo,On.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return cf(n)?n:[n]},On.chain=Qe,On.chunk=function(n,t,r){if(t=(r?Ie(n,t,r):t===F)?1:Ci(Eu(t),0),
r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Gu(Ii(r/t));e<r;)i[u++]=gr(n,e,e+=t);return i},On.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},On.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Gu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return s(cf(r)?Tr(r):[r],Et(t,1))},On.cond=function(n){var t=null==n?0:n.length,e=be();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new ri("Expected a function");
return[e(n[0]),n[1]]}):[],sr(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})},On.conforms=function(n){return bt(yt(n,1))},On.constant=$u,On.countBy=Fo,On.create=function(n,t){var r=uo(n);return null==t?r:pt(r,t)},On.curry=ou,On.curryRight=fu,On.debounce=cu,On.defaults=mf,On.defaultsDeep=Af,On.defer=Qo,On.delay=Xo,On.difference=mo,On.differenceBy=Ao,On.differenceWith=ko,On.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Eu(t),gr(n,0>t?0:t,e)):[];
},On.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Eu(t),t=e-t,gr(n,0,0>t?0:t)):[]},On.dropRightWhile=function(n,t){return n&&n.length?kr(n,be(t,3),true,true):[]},On.dropWhile=function(n,t){return n&&n.length?kr(n,be(t,3),true):[]},On.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Ie(n,t,r)&&(r=0,e=u),u=n.length,r=Eu(r),0>r&&(r=-r>u?0:u+r),e=e===F||e>u?u:Eu(e),0>e&&(e+=u),e=r>e?0:Ou(e);r<e;)n[r++]=t;return n},On.filter=function(n,t){
return(cf(n)?f:kt)(n,be(t,3))},On.flatMap=function(n,t){return Et(eu(n,t),1)},On.flatMapDeep=function(n,t){return Et(eu(n,t),N)},On.flatMapDepth=function(n,t,r){return r=r===F?1:Eu(r),Et(eu(n,t),r)},On.flatten=qe,On.flattenDeep=function(n){return(null==n?0:n.length)?Et(n,N):[]},On.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===F?1:Eu(t),Et(n,t)):[]},On.flip=function(n){return se(n,512)},On.flow=Zf,On.flowRight=qf,On.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){
var u=n[t];e[u[0]]=u[1]}return e},On.functions=function(n){return null==n?[]:It(n,Bu(n))},On.functionsIn=function(n){return null==n?[]:It(n,Lu(n))},On.groupBy=Zo,On.initial=function(n){return(null==n?0:n.length)?gr(n,0,-1):[]},On.intersection=Eo,On.intersectionBy=Oo,On.intersectionWith=So,On.invert=kf,On.invertBy=Ef,On.invokeMap=qo,On.iteratee=Nu,On.keyBy=Vo,On.keys=Bu,On.keysIn=Lu,On.map=eu,On.mapKeys=function(n,t){var r={};return t=be(t,3),Ot(n,function(n,e,u){vt(r,t(n,e,u),n)}),r},On.mapValues=function(n,t){
var r={};return t=be(t,3),Ot(n,function(n,e,u){vt(r,e,t(n,e,u))}),r},On.matches=function(n){return Xt(yt(n,1))},On.matchesProperty=function(n,t){return nr(n,yt(t,1))},On.memoize=au,On.merge=Sf,On.mergeWith=If,On.method=Vf,On.methodOf=Kf,On.mixin=Pu,On.negate=lu,On.nthArg=function(n){return n=Eu(n),sr(function(t){return rr(t,n)})},On.omit=Rf,On.omitBy=function(n,t){return Uu(n,lu(be(t)))},On.once=function(n){return iu(2,n)},On.orderBy=function(n,t,r,e){return null==n?[]:(cf(t)||(t=null==t?[]:[t]),
r=e?F:r,cf(r)||(r=null==r?[]:[r]),er(n,t,r))},On.over=Gf,On.overArgs=nf,On.overEvery=Hf,On.overSome=Jf,On.partial=tf,On.partialRight=rf,On.partition=Ko,On.pick=zf,On.pickBy=Uu,On.property=qu,On.propertyOf=function(n){return function(t){return null==n?F:Rt(n,t)}},On.pull=Io,On.pullAll=Ge,On.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?fr(n,t,be(r,2)):n},On.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?fr(n,t,F,r):n},On.pullAt=Ro,On.range=Yf,On.rangeRight=Qf,On.rearg=ef,On.reject=function(n,t){
return(cf(n)?f:kt)(n,lu(be(t,3)))},On.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=be(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return cr(n,u),r},On.rest=function(n,t){if(typeof n!="function")throw new ri("Expected a function");return t=t===F?t:Eu(t),sr(n,t)},On.reverse=He,On.sampleSize=function(n,t,r){return t=(r?Ie(n,t,r):t===F)?1:Eu(t),(cf(n)?ot:pr)(n,t)},On.set=function(n,t,r){return null==n?n:_r(n,t,r)},On.setWith=function(n,t,r,e){return e=typeof e=="function"?e:F,
null==n?n:_r(n,t,r,e)},On.shuffle=function(n){return(cf(n)?ft:vr)(n)},On.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Ie(n,t,r)?(t=0,r=e):(t=null==t?0:Eu(t),r=r===F?e:Eu(r)),gr(n,t,r)):[]},On.sortBy=Go,On.sortedUniq=function(n){return n&&n.length?xr(n):[]},On.sortedUniqBy=function(n,t){return n&&n.length?xr(n,be(t,2)):[]},On.split=function(n,t,r){return r&&typeof r!="number"&&Ie(n,t,r)&&(t=r=F),r=r===F?4294967295:r>>>0,r?(n=Ru(n))&&(typeof t=="string"||null!=t&&!pf(t))&&(t=wr(t),
!t&&Bn.test(n))?Wr($(n),0,r):n.split(t,r):[]},On.spread=function(n,t){if(typeof n!="function")throw new ri("Expected a function");return t=t===F?0:Ci(Eu(t),0),sr(function(e){var u=e[t];return e=Wr(e,0,t),u&&s(e,u),r(n,this,e)})},On.tail=function(n){var t=null==n?0:n.length;return t?gr(n,1,t):[]},On.take=function(n,t,r){return n&&n.length?(t=r||t===F?1:Eu(t),gr(n,0,0>t?0:t)):[]},On.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Eu(t),t=e-t,gr(n,0>t?0:t,e)):[]},On.takeRightWhile=function(n,t){
return n&&n.length?kr(n,be(t,3),false,true):[]},On.takeWhile=function(n,t){return n&&n.length?kr(n,be(t,3)):[]},On.tap=function(n,t){return t(n),n},On.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ri("Expected a function");return yu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),cu(n,t,{leading:e,maxWait:t,trailing:u})},On.thru=Xe,On.toArray=Au,On.toPairs=Wf,On.toPairsIn=Bf,On.toPath=function(n){return cf(n)?l(n,Te):mu(n)?[n]:Tr(wo(Ru(n)))},On.toPlainObject=Iu,
On.transform=function(n,t,r){var e=cf(n),i=e||lf(n)||vf(n);if(t=be(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:yu(n)&&vu(o)?uo(yi(n)):{}}return(i?u:Ot)(n,function(n,e,u){return t(r,n,e,u)}),r},On.unary=function(n){return uu(n,1)},On.union=zo,On.unionBy=Wo,On.unionWith=Bo,On.uniq=function(n){return n&&n.length?mr(n):[]},On.uniqBy=function(n,t){return n&&n.length?mr(n,be(t,2)):[]},On.uniqWith=function(n,t){return t=typeof t=="function"?t:F,n&&n.length?mr(n,F,t):[]},On.unset=function(n,t){return null==n||Ar(n,t);
},On.unzip=Je,On.unzipWith=Ye,On.update=function(n,t,r){return null==n?n:_r(n,t,Rr(r)(Rt(n,t)),void 0)},On.updateWith=function(n,t,r,e){return e=typeof e=="function"?e:F,null!=n&&(n=_r(n,t,Rr(r)(Rt(n,t)),e)),n},On.values=Cu,On.valuesIn=function(n){return null==n?[]:I(n,Lu(n))},On.without=Lo,On.words=Tu,On.wrap=function(n,t){return tf(Rr(t),n)},On.xor=Uo,On.xorBy=Co,On.xorWith=Do,On.zip=Mo,On.zipObject=function(n,t){return Sr(n||[],t||[],lt)},On.zipObjectDeep=function(n,t){return Sr(n||[],t||[],_r);
},On.zipWith=To,On.entries=Wf,On.entriesIn=Bf,On.extend=bf,On.extendWith=xf,Pu(On,On),On.add=Xf,On.attempt=Nf,On.camelCase=Lf,On.capitalize=Du,On.ceil=nc,On.clamp=function(n,t,r){return r===F&&(r=t,t=F),r!==F&&(r=Su(r),r=r===r?r:0),t!==F&&(t=Su(t),t=t===t?t:0),dt(Su(n),t,r)},On.clone=function(n){return yt(n,4)},On.cloneDeep=function(n){return yt(n,5)},On.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:F,yt(n,5,t)},On.cloneWith=function(n,t){return t=typeof t=="function"?t:F,yt(n,4,t)},
On.conformsTo=function(n,t){return null==t||xt(n,t,Bu(t))},On.deburr=Mu,On.defaultTo=function(n,t){return null==n||n!==n?t:n},On.divide=tc,On.endsWith=function(n,t,r){n=Ru(n),t=wr(t);var e=n.length,e=r=r===F?e:dt(Eu(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},On.eq=su,On.escape=function(n){return(n=Ru(n))&&Y.test(n)?n.replace(H,et):n},On.escapeRegExp=function(n){return(n=Ru(n))&&fn.test(n)?n.replace(on,"\\$&"):n},On.every=function(n,t,r){var e=cf(n)?o:mt;return r&&Ie(n,t,r)&&(t=F),e(n,be(t,3));
},On.find=No,On.findIndex=Pe,On.findKey=function(n,t){return v(n,be(t,3),Ot)},On.findLast=Po,On.findLastIndex=Ze,On.findLastKey=function(n,t){return v(n,be(t,3),St)},On.floor=rc,On.forEach=tu,On.forEachRight=ru,On.forIn=function(n,t){return null==n?n:fo(n,be(t,3),Lu)},On.forInRight=function(n,t){return null==n?n:co(n,be(t,3),Lu)},On.forOwn=function(n,t){return n&&Ot(n,be(t,3))},On.forOwnRight=function(n,t){return n&&St(n,be(t,3))},On.get=zu,On.gt=uf,On.gte=of,On.has=function(n,t){return null!=n&&me(n,t,Lt);
},On.hasIn=Wu,On.head=Ve,On.identity=Fu,On.includes=function(n,t,r,e){return n=hu(n)?n:Cu(n),r=r&&!e?Eu(r):0,e=n.length,0>r&&(r=Ci(e+r,0)),wu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<d(n,t,r)},On.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Eu(r),0>r&&(r=Ci(e+r,0)),d(n,t,r)):-1},On.inRange=function(n,t,r){return t=ku(t),r===F?(r=t,t=0):r=ku(r),n=Su(n),n>=Di(t,r)&&n<Ci(t,r)},On.invoke=Of,On.isArguments=ff,On.isArray=cf,On.isArrayBuffer=af,On.isArrayLike=hu,On.isArrayLikeObject=pu,
On.isBoolean=function(n){return true===n||false===n||bu(n)&&"[object Boolean]"==Wt(n)},On.isBuffer=lf,On.isDate=sf,On.isElement=function(n){return bu(n)&&1===n.nodeType&&!ju(n)},On.isEmpty=function(n){if(null==n)return true;if(hu(n)&&(cf(n)||typeof n=="string"||typeof n.splice=="function"||lf(n)||vf(n)||ff(n)))return!n.length;var t=go(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(We(n))return!Jt(n).length;for(var r in n)if(fi.call(n,r))return false;return true},On.isEqual=function(n,t){return Nt(n,t);
},On.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:F)?r(n,t):F;return e===F?Nt(n,t,F,r):!!e},On.isError=_u,On.isFinite=function(n){return typeof n=="number"&&Bi(n)},On.isFunction=vu,On.isInteger=gu,On.isLength=du,On.isMap=hf,On.isMatch=function(n,t){return n===t||Zt(n,t,je(t))},On.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:F,Zt(n,t,je(t),r)},On.isNaN=function(n){return xu(n)&&n!=+n},On.isNative=function(n){if(yo(n))throw new Ju("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
return qt(n)},On.isNil=function(n){return null==n},On.isNull=function(n){return null===n},On.isNumber=xu,On.isObject=yu,On.isObjectLike=bu,On.isPlainObject=ju,On.isRegExp=pf,On.isSafeInteger=function(n){return gu(n)&&-9007199254740991<=n&&9007199254740991>=n},On.isSet=_f,On.isString=wu,On.isSymbol=mu,On.isTypedArray=vf,On.isUndefined=function(n){return n===F},On.isWeakMap=function(n){return bu(n)&&"[object WeakMap]"==go(n)},On.isWeakSet=function(n){return bu(n)&&"[object WeakSet]"==Wt(n)},On.join=function(n,t){
return null==n?"":Li.call(n,t)},On.kebabCase=Uf,On.last=Ke,On.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==F&&(u=Eu(r),u=0>u?Ci(e+u,0):Di(u,e-1)),t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=g(n,b,u,true);return n},On.lowerCase=Cf,On.lowerFirst=Df,On.lt=gf,On.lte=df,On.max=function(n){return n&&n.length?At(n,Fu,Bt):F},On.maxBy=function(n,t){return n&&n.length?At(n,be(t,2),Bt):F},On.mean=function(n){return x(n,Fu)},On.meanBy=function(n,t){return x(n,be(t,2))},On.min=function(n){
return n&&n.length?At(n,Fu,Yt):F},On.minBy=function(n,t){return n&&n.length?At(n,be(t,2),Yt):F},On.stubArray=Vu,On.stubFalse=Ku,On.stubObject=function(){return{}},On.stubString=function(){return""},On.stubTrue=function(){return true},On.multiply=ec,On.nth=function(n,t){return n&&n.length?rr(n,Eu(t)):F},On.noConflict=function(){return Zn._===this&&(Zn._=hi),this},On.noop=Zu,On.now=Ho,On.pad=function(n,t,r){n=Ru(n);var e=(t=Eu(t))?T(n):0;return!t||e>=t?n:(t=(t-e)/2,ue(Ri(t),r)+n+ue(Ii(t),r))},On.padEnd=function(n,t,r){
n=Ru(n);var e=(t=Eu(t))?T(n):0;return t&&e<t?n+ue(t-e,r):n},On.padStart=function(n,t,r){n=Ru(n);var e=(t=Eu(t))?T(n):0;return t&&e<t?ue(t-e,r)+n:n},On.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Ti(Ru(n).replace(an,""),t||0)},On.random=function(n,t,r){if(r&&typeof r!="boolean"&&Ie(n,t,r)&&(t=r=F),r===F&&(typeof t=="boolean"?(r=t,t=F):typeof n=="boolean"&&(r=n,n=F)),n===F&&t===F?(n=0,t=1):(n=ku(n),t===F?(t=n,n=0):t=ku(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=$i(),Di(n+r*(t-n+$n("1e-"+((r+"").length-1))),t)):ar(n,t);
},On.reduce=function(n,t,r){var e=cf(n)?h:m,u=3>arguments.length;return e(n,be(t,4),r,u,io)},On.reduceRight=function(n,t,r){var e=cf(n)?p:m,u=3>arguments.length;return e(n,be(t,4),r,u,oo)},On.repeat=function(n,t,r){return t=(r?Ie(n,t,r):t===F)?1:Eu(t),lr(Ru(n),t)},On.replace=function(){var n=arguments,t=Ru(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},On.result=function(n,t,r){t=zr(t,n);var e=-1,u=t.length;for(u||(u=1,n=F);++e<u;){var i=null==n?F:n[Te(t[e])];i===F&&(e=u,i=r),n=vu(i)?i.call(n):i;
}return n},On.round=uc,On.runInContext=w,On.sample=function(n){return(cf(n)?tt:hr)(n)},On.size=function(n){if(null==n)return 0;if(hu(n))return wu(n)?T(n):n.length;var t=go(n);return"[object Map]"==t||"[object Set]"==t?n.size:Jt(n).length},On.snakeCase=Mf,On.some=function(n,t,r){var e=cf(n)?_:dr;return r&&Ie(n,t,r)&&(t=F),e(n,be(t,3))},On.sortedIndex=function(n,t){return yr(n,t)},On.sortedIndexBy=function(n,t,r){return br(n,t,be(r,2))},On.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){
var e=yr(n,t);if(e<r&&su(n[e],t))return e}return-1},On.sortedLastIndex=function(n,t){return yr(n,t,true)},On.sortedLastIndexBy=function(n,t,r){return br(n,t,be(r,2),true)},On.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=yr(n,t,true)-1;if(su(n[r],t))return r}return-1},On.startCase=Tf,On.startsWith=function(n,t,r){return n=Ru(n),r=dt(Eu(r),0,n.length),t=wr(t),n.slice(r,r+t.length)==t},On.subtract=ic,On.sum=function(n){return n&&n.length?k(n,Fu):0},On.sumBy=function(n,t){return n&&n.length?k(n,be(t,2)):0;
},On.template=function(n,t,r){var e=On.templateSettings;r&&Ie(n,t,r)&&(t=F),n=Ru(n),t=xf({},t,e,ct),r=xf({},t.imports,e.imports,ct);var u,i,o=Bu(r),f=I(r,o),c=0;r=t.interpolate||An;var a="__p+='";r=ni((t.escape||An).source+"|"+r.source+"|"+(r===nn?gn:An).source+"|"+(t.evaluate||An).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(kn,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),
e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(q,""):a).replace(V,"$1").replace(K,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Nf(function(){return Yu(o,l+"return "+a).apply(F,f)}),t.source=a,_u(t))throw t;return t},On.times=function(n,t){if(n=Eu(n),1>n||9007199254740991<n)return[];
var r=4294967295,e=Di(n,4294967295);for(t=be(t),n-=4294967295,e=E(e,t);++r<n;)t(r);return e},On.toFinite=ku,On.toInteger=Eu,On.toLength=Ou,On.toLower=function(n){return Ru(n).toLowerCase()},On.toNumber=Su,On.toSafeInteger=function(n){return dt(Eu(n),-9007199254740991,9007199254740991)},On.toString=Ru,On.toUpper=function(n){return Ru(n).toUpperCase()},On.trim=function(n,t,r){return(n=Ru(n))&&(r||t===F)?n.replace(cn,""):n&&(t=wr(t))?(n=$(n),r=$(t),t=z(n,r),r=W(n,r)+1,Wr(n,t,r).join("")):n},On.trimEnd=function(n,t,r){
return(n=Ru(n))&&(r||t===F)?n.replace(ln,""):n&&(t=wr(t))?(n=$(n),t=W(n,$(t))+1,Wr(n,0,t).join("")):n},On.trimStart=function(n,t,r){return(n=Ru(n))&&(r||t===F)?n.replace(an,""):n&&(t=wr(t))?(n=$(n),t=z(n,$(t)),Wr(n,t).join("")):n},On.truncate=function(n,t){var r=30,e="...";if(yu(t))var u="separator"in t?t.separator:u,r="length"in t?Eu(t.length):r,e="omission"in t?wr(t.omission):e;n=Ru(n);var i=n.length;if(Bn.test(n))var o=$(n),i=o.length;if(r>=i)return n;if(i=r-T(e),1>i)return e;if(r=o?Wr(o,0,i).join(""):n.slice(0,i),
u===F)return r+e;if(o&&(i+=r.length-i),pf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=ni(u.source,Ru(dn.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===F?i:c)}}else n.indexOf(wr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},On.unescape=function(n){return(n=Ru(n))&&J.test(n)?n.replace(G,ut):n},On.uniqueId=function(n){var t=++ci;return Ru(n)+t},On.upperCase=$f,On.upperFirst=Ff,On.each=tu,On.eachRight=ru,On.first=Ve,Pu(On,function(){var n={};return Ot(On,function(t,r){
fi.call(On.prototype,r)||(n[r]=t)}),n}(),{chain:false}),On.VERSION="4.17.2",u("bind bindKey curry curryRight partial partialRight".split(" "),function(n){On[n].placeholder=On}),u(["drop","take"],function(n,t){Mn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new Mn(this);r=r===F?1:Ci(Eu(r),0);var u=this.clone();return e?u.__takeCount__=Di(r,u.__takeCount__):u.__views__.push({size:Di(r,4294967295),type:n+(0>u.__dir__?"Right":"")}),u},Mn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse();
}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Mn.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:be(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Mn.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Mn.prototype[n]=function(){return this.__filtered__?new Mn(this):this[r](1)}}),Mn.prototype.compact=function(){
return this.filter(Fu)},Mn.prototype.find=function(n){return this.filter(n).head()},Mn.prototype.findLast=function(n){return this.reverse().find(n)},Mn.prototype.invokeMap=sr(function(n,t){return typeof n=="function"?new Mn(this):this.map(function(r){return Mt(r,n,t)})}),Mn.prototype.reject=function(n){return this.filter(lu(be(n)))},Mn.prototype.slice=function(n,t){n=Eu(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Mn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==F&&(t=Eu(t),r=0>t?r.dropRight(-t):r.take(t-n)),
r)},Mn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Mn.prototype.toArray=function(){return this.take(4294967295)},Ot(Mn.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=On[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(On.prototype[t]=function(){function t(n){return n=u.apply(On,s([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Mn,a=f[0],l=c||cf(o);l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);
var h=this.__chain__,p=!!this.__actions__.length,a=i&&!h,c=c&&!p;return!i&&l?(o=c?o:new Mn(this),o=n.apply(o,f),o.__actions__.push({func:Xe,args:[t],thisArg:F}),new zn(o,h)):a&&c?n.apply(this,f):(o=this.thru(t),a?e?o.value()[0]:o.value():o)})}),u("pop push shift sort splice unshift".split(" "),function(n){var t=ei[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);On.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(cf(u)?u:[],n);
}return this[r](function(r){return t.apply(cf(r)?r:[],n)})}}),Ot(Mn.prototype,function(n,t){var r=On[t];if(r){var e=r.name+"";(Hi[e]||(Hi[e]=[])).push({name:t,func:r})}}),Hi[ne(F,2).name]=[{name:"wrapper",func:F}],Mn.prototype.clone=function(){var n=new Mn(this.__wrapped__);return n.__actions__=Tr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Tr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Tr(this.__views__),n},Mn.prototype.reverse=function(){
if(this.__filtered__){var n=new Mn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Mn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=cf(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Di(n,f+s);break;case"takeRight":f=Ci(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,u=u?f:o-1,o=this.__iteratees__,f=o.length,
c=0,a=Di(n,this.__takeCount__),!e||200>i||i==n&&a==n)return Er(t,this.__actions__);e=[];n:for(;n--&&c<a;){for(u+=r,i=-1,l=t[u];++i<f;){var h=o[i],s=h.type,h=(0,h.iteratee)(l);if(2==s)l=h;else if(!h){if(1==s)continue n;break n}}e[c++]=l}return e},On.prototype.at=$o,On.prototype.chain=function(){return Qe(this)},On.prototype.commit=function(){return new zn(this.value(),this.__chain__)},On.prototype.next=function(){this.__values__===F&&(this.__values__=Au(this.value()));var n=this.__index__>=this.__values__.length;
return{done:n,value:n?F:this.__values__[this.__index__++]}},On.prototype.plant=function(n){for(var t,r=this;r instanceof Sn;){var e=Ne(r);e.__index__=0,e.__values__=F,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},On.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Mn?(this.__actions__.length&&(n=new Mn(this)),n=n.reverse(),n.__actions__.push({func:Xe,args:[He],thisArg:F}),new zn(n,this.__chain__)):this.thru(He)},On.prototype.toJSON=On.prototype.valueOf=On.prototype.value=function(){
return Er(this.__wrapped__,this.__actions__)},On.prototype.first=On.prototype.head,mi&&(On.prototype[mi]=nu),On}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=it, define(function(){return it})):Vn?((Vn.exports=it)._=it,qn._=it):Zn._=it}).call(this);
var isModule = typeof module !== "undefined" && module.exports;

if (isModule) {
  http = require('http');
  URL = require('url');
}

var Weather = {
  Utils: {},
  apiKey: ''
};

Weather.VERSION = "0.0.3";

var jsonp = Weather.Utils.jsonp = function (uri, callback){
  return new Promise(function(resolve, reject){
    var id = '_' + Math.round(10000 * Math.random());
    var callbackName = 'jsonp_callback_' + id;
    var el = (document.getElementsByTagName('head')[0] || document.body || document.documentElement);
    var script = document.createElement('script');
    var src = uri + '&callback=' + callbackName;

    window[callbackName] = function(data){
      delete window[callbackName];
      var ele = document.getElementById(id);
      ele.parentNode.removeChild(ele);
      resolve(data);
    };

    script.src = src;
    script.id = id;
    script.addEventListener('error', reject);
    el.appendChild(script);
  } );
};

Weather.kelvinToFahrenheit = function (value) {
  return (this.kelvinToCelsius(value) * 1.8) + 32;
};

Weather.kelvinToCelsius = function (value) {
  return value - 273.15;
};

Weather.getCurrent = function (city, callback) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&units=imperial&&APPID=" + Weather.apiKey;

  return this._getJSON(url, function (data) {
    callback(new Weather.Current(data));
  } );
};

Weather.getForecast = function (city, callback) {
  var url = "http://openweathermap.org/data/2.1/forecast/city?q=" + encodeURIComponent(city) + "&cnt=1";

  return this._getJSON(url, function (data) {
    callback(new Weather.Forecast(data));
  } );
};

Weather._getJSON = function( url, callback ) {
  if (isModule) {
    return http.get(URL.parse(url), function(response) {
      return callback(response.body);
    } );
  } else {
    jsonp(url).then(callback);
  }
};

var maxBy = Weather.Utils.maxBy = function (list, iterator) {
  var max;
  var f = function (memo, d) {
    var val = iterator(d);

    if (memo === null || val > max) {
      max = val;
      memo = d;
    }

    return memo;
  };

  return list.reduce(f, null);
};

var minBy = Weather.Utils.minBy = function (list, iterator) {
  var min;
  var f = function (memo, d) {
    var val = iterator(d);

    if (memo === null || val < min) {
      min = val;
      memo = d;
    }

    return memo;
  };

  return list.reduce(f, null);
};

var isOnDate = Weather.Utils.isOnDate = function (a, b) {
  var sameYear = a.getYear() === b.getYear();
  var sameMonth = a.getMonth() === b.getMonth();
  var sameDate = a.getDate() === b.getDate();

  return sameYear && sameMonth && sameDate;
};

Weather.Forecast = function (data) {
  this.data = data;
};

Weather.Forecast.prototype.startAt = function () {
  return new Date(minBy(this.data.list, function (d) { return d.dt; }).dt * 1000);
};

Weather.Forecast.prototype.endAt = function () {
  return new Date(maxBy(this.data.list, function (d) { return d.dt; }).dt * 1000);
};

Weather.Forecast.prototype.day = function (date) {
  return new Weather.Forecast(this._filter(date));
};

Weather.Forecast.prototype.low = function () {
  if (this.data.list.length === 0) return;

  var output = minBy(this.data.list, function (item) {
    return item.main.temp_min;
  } );

  return output.main.temp_min;
};

Weather.Forecast.prototype.high = function () {
  if (this.data.list.length === 0) return;

  var output = maxBy( this.data.list, function (item) {
    return item.main.temp_max;
  } );

  return output.main.temp_max;
};

Weather.Forecast.prototype._filter = function (date) {
  return {
    list: this.data.list.filter(function (range) {
      var dateTimestamp = (range.dt * 1000);

      if (isOnDate(new Date(dateTimestamp), date)) {
        return range;
      }
    })
  };
};

Weather.Current = function (data) {
  //console.log(data)
  this.data = data;
};

Weather.Current.prototype.temperature = function () {
  return this.data.main.temp;
};

Weather.Current.prototype.conditions = function () {
  return this.data.weather[0].description;
};

Weather.Current.prototype.icon = function () {
  return {
    code: this.data.weather[0].icon,
    id: this.data.weather[0].id
  }
};

if (isModule) { module.exports = Weather; }
else { window.Weather = Weather; }


var backgrounds = [
    {
        "url": "https://lh6.googleusercontent.com/-A0tXm8gjfMU/U08VDMRGtuI/AAAAAAAAvrI/IQEscTGZyJY/s1920-w1920-h1080-c/IMG_0293%2Bhe.jpg",
        "author": "Ziv Horesh"
    },
    {
        "url": "https://lh6.googleusercontent.com/-3LiF-MBl6OE/UO5TXZ724aI/AAAAAAAAE50/JWLqdeEM9QY/s1920-w1920-h1080-c/Colorado%2BRiver%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-wkrGBuk0DoA/Us9JnUoXnTI/AAAAAAAAkTA/yDQexzLKhKY/s1920-w1920-h1080-c/DSC_0660.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-1xZqgaRDIec/Tg1dMJq1vBI/AAAAAAAAALc/7m0Tpv2htVc/s1920-w1920-h1080-c/071227-4144-PtLomaReef.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-36YdSRh6q9w/TgtZEChvrkI/AAAAAAAJA0M/zVvIUAdwQ3Q/s1920-w1920-h1080-c/976865336_a%2Bview%2Bof%2Bqueenstown.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/--L7AhWZit78/TysVss3ThoI/AAAAAAAARho/n2ToQ-2Kw7g/s1920-w1920-h1080-c/GGB-MarshallBeach-lightSky.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-ciHScPkPIjY/USd_CK03c5I/AAAAAAAAm9o/6CWLX5P59aI/s1920-w1920-h1080-c/RayofHope.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-dXBA-gHPDPU/UPSOYTL_lpI/AAAAAAAALn4/jH17jwSZeYk/s1920-w1920-h1080-c/Dare%2Bto%2BDream.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-JvGl0iUdb58/UfvkbbsvXtI/AAAAAAAAaJc/1aANEbTHeK4/s1920-w1920-h1080-c/DSC_1644-Edit-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-ePzy0PYNkjY/ToE9F9iPxKI/AAAAAAAAsWg/o7LkkqWEs2o/s1920-w1920-h1080-c/DSC01079%2B%25281%2529.JPG",
        "author": "Gretchen Chappelle"
    },
    {
        "url": "https://lh5.googleusercontent.com/-5inyrU95-M4/UTrLw33X2FI/AAAAAAAAdvw/A48rORvWG_g/s1920-w1920-h1080-c/20130307-%252812_35_23%2529-tahoe-iq180-16274.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-pnosgcd6G2c/UbheNBeniVI/AAAAAAAAWp0/hSEX3IwAgyI/s1920-w1920-h1080-c/DSC_8492_HDR-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-El8tXEJMqm4/UOD9tk8_rkI/AAAAAAAAkM0/sZP34rwkVsQ/s1920-w1920-h1080-c/02202012-04.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh4.googleusercontent.com/-EpsKJMBxb6I/TBpXudG4_PI/AAAAAAABEHk/_knVZZOptTY/s1920-w1920-h1080-c/20100530_120257_0273-Edit-2.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Ot1wFdQdaqw/UBSl7ewGOkI/AAAAAAAAPd4/3tUkrKTWDgM/s1920-w1920-h1080-c/Lines.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-WbNq4f1kE7Y/Tu9tVtXGCYI/AAAAAAABFWY/N9NL1MKUt4A/s1920-w1920-h1080-c/DunesEdge.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-YPiBdTDD5Vo/UpExbztAgWI/AAAAAAAAFg8/8n5CyP4w8Ps/s1920-w1920-h1080-c/DSC_2857.jpg",
        "author": "Sharon Chen"
    },
    {
        "url": "https://lh5.googleusercontent.com/-CY6T5q8rqmA/UZWyvmYhLYI/AAAAAAAAAw4/Pi0Uy3nq19I/s1920-w1920-h1080-c/DSC_0513-edited.jpeg",
        "author": "Andrew Brown"
    },
    {
        "url": "https://lh6.googleusercontent.com/-fc8aRqsAEzk/U0MjlhykUtI/AAAAAAAJF1s/nRoV1Yk1z2E/s1920-w1920-h1080-c/stuck_04.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ExqBtlpobeE/T-aKZZzVcKI/AAAAAAABhl4/jrErtktlcuA/s1920-w1920-h1080-c/Dandelion_.jpg",
        "author": "Elena Solomon"
    },
    {
        "url": "https://lh3.googleusercontent.com/-3nqLFWiEm3E/UXXCrC5RBeI/AAAAAAAANoY/8_ktEhLdCLs/s1920-w1920-h1080-c/8670434759_91e92fd1ee_k.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-gJmej39yU_c/TgtZECWgTtI/AAAAAAAJFFY/Y0nVr5_Tchg/s1920-w1920-h1080-c/2049233526_19f97ff57f_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-teMxOetSsy0/TwNDboHbM0I/AAAAAAABFao/F9yQHylkRdo/s1920-w1920-h1080-c/RodeoBeach-firespinning-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-G_wJmFcGDaM/UeAGqoSizxI/AAAAAAAAYwo/OrQTf8ec-3o/s1920-w1920-h1080-c/calm%2Bbefore.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-rF8zodn1xAI/U_yjoZyDgcI/AAAAAAAB-38/U62D7hi4-NU/s1920-w1920-h1080-c/20140204_Iceland_0234_5_6_32bit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-GmQO1Vlmg7s/UJy4LyPVnvI/AAAAAAAANRU/ZuYXmzQhebE/s1920-w1920-h1080-c/img_0001_03.jpg",
        "author": "Luke Ravitch"
    },
    {
        "url": "https://lh6.googleusercontent.com/-KiRwrTTHEWk/UdFoWqh2bFI/AAAAAAAAXhA/6PIDVYH9nFY/s1920-w1920-h1080-c/DSC_6887-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-6_QxmRRnJO8/TwjqsB2kshI/AAAAAAABFZw/__-irT00R2k/s1920-w1920-h1080-c/SealRocks-sunset-beach-rock.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-A7Ahpb0-m1I/TmBVlD7kYrI/AAAAAAAACUs/mPbCyWf9LXA/s1920-w1920-h1080-c/IMG_6904.jpg",
        "author": "Henry Lien"
    },
    {
        "url": "https://lh6.googleusercontent.com/-HWAadtEQKQE/UtTyRxs2u4I/AAAAAAAAOhk/Y3jT0QJtdhQ/s1920-w1920-h1080-c/DSC_7112.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-BNreXonTg-k/ThCQ_bm_4nI/AAAAAAAAAZ0/WJcnGWiY5yI/s1920-w1920-h1080-c/090407-0587-ForkInTheRoad.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-5NKrifl_xpo/UUxwAqoj7nI/AAAAAAAAwGk/82Dkiz_sEaw/s1920-w1920-h1080-c/Invitation.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-br0TcMf3OVc/UlMfoCpTKpI/AAAAAAAAGHU/Qo2d54KlDrc/s1920-w1920-h1080-c/GMZzGwX.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh3.googleusercontent.com/-W5qc4LH_lpo/U_yjzHjSpzI/AAAAAAAB-7E/8MQAw4fsEJc/s1920-w1920-h1080-c/_DX_7114-Edit-Recovered.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-F_p_m0vyQqg/UO5Tq_9TirI/AAAAAAAAE-4/Zkw4bRQjGdU/s1920-w1920-h1080-c/Rice%2BFields.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-sy3wa9ofb38/UQtPlF6YOQI/AAAAAAAAfXc/9uYpeM68vOc/s1920-w1920-h1080-c/IMGP8993.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh5.googleusercontent.com/-cFySK9YoOOI/SwTDSXWTa2I/AAAAAAABNnY/1VFL3dYXkgA/s1920-w1920-h1080-c/dsc_4194.jpg",
        "author": "Jean-Christophe Lilot"
    },
    {
        "url": "https://lh5.googleusercontent.com/-WDd72zqvAY4/URlS5WAGihI/AAAAAAAAXLs/MJ9Z1UId3gA/s1920-w1920-h1080-c/by%2BRuss%2BBishop.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh4.googleusercontent.com/-V8ifxhq3-Yw/T43ivW-pQgI/AAAAAAAAQrM/OeAQZzV5LcE/s1920-w1920-h1080-c/071229-4231-SandstNSky1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-JoKkOqJLegk/T7KQORntaBI/AAAAAAABjLg/FbmDYu5k3DY/s1920-w1920-h1080-c/panthercreek_7509-Edit.jpg",
        "author": "Nicole S. Young"
    },
    {
        "url": "https://lh6.googleusercontent.com/-RYt_J-BlGJs/UmBWyVrQZII/AAAAAAAAFAA/9Y9zqjdXQeU/s1920-w1920-h1080-c/DSC_6464.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh3.googleusercontent.com/-6IrulujJPwU/Tg1d_n1nptI/AAAAAAAAAMc/O4OAV6udX8Y/s1920-w1920-h1080-c/080820-5209-MakenaLL.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-qVYB2If-0sM/UTRIR7d-1AI/AAAAAAAALws/gtkAAfaMVr0/s1920-w1920-h1080-c/Another%2BRockaway%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-cn-CS-vxFn4/UtTvqLzjmrI/AAAAAAAAX3Y/OdfK9XhRGeE/s1920-w1920-h1080-c/DSC_5300.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-mwobIYTjtko/Tg1dd90GDjI/AAAAAAAAAL0/M_NjYSMqoG0/s1920-w1920-h1080-c/080327-4706-JoshuaTreeOasis.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-3FonOuZnam0/VA8AWKnghyI/AAAAAAAA938/OJPovwgFd74/s1920-w1920-h1080-c/rainier-bridge-07-22-2014.jpg",
        "author": "Jeff Moreau"
    },
    {
        "url": "https://lh5.googleusercontent.com/-EjnJBBcvhrU/TgtZEIVpLlI/AAAAAAAJJ5s/CQK74NolX7E/s1920-w1920-h1080-c/217440037_8ca190627e_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-lM1sKRbIu7A/T_mdon8mP-I/AAAAAAAAAwc/SJMO-kWHQLY/s1920-w1920-h1080-c/MSU_1184.jpg",
        "author": "Martin Suess"
    },
    {
        "url": "https://lh3.googleusercontent.com/-oM2bHS-0OjU/TyPjUdi6QZI/AAAAAAAATXw/_Ev7-zKoPQ8/s1920-w1920-h1080-c/Granite%2Bsectional%2Band%2BSunken%2Blivingroom.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh3.googleusercontent.com/-HfCYnCbpqww/Us1HNtNz00I/AAAAAAAAkFE/UJChD7bbmm0/s1920-w1920-h1080-c/DSC_0537-Edit-Edit-Edit-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-gi8-azW5hAQ/UGdSQqk9G_I/AAAAAAAAJto/inIHRwOCy3c/s1920-w1920-h1080-c/TetonShwabacher.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-3Swi7wFMOME/UO5TfJnFHEI/AAAAAAAAE7w/E-dFl6rGAro/s1920-w1920-h1080-c/Horseshoe%2BBend%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-CG1URfN2uVc/UO5TcRpeeHI/AAAAAAAALrs/VtigytwmSyA/s1920-w1920-h1080-c/Golden%2BGate%2BAfternoon.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-hWK_1zxD5Uw/UmnZCLjfmxI/AAAAAAAAUb0/QViF9TLUCDM/s1920-w1920-h1080-c/HerbertLake-2.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-zAuJ1AZC34Y/TrsJH22VV5I/AAAAAAAAEvc/EzBqDb6tQRE/s1920-w1920-h1080-c/PVK_5178.jpg",
        "author": "Marek Antoži"
    },
    {
        "url": "https://lh4.googleusercontent.com/-QgFnhS9tfuI/U0tzKPZox-I/AAAAAAAAvhg/EjRaa8ETaYM/s1920-w1920-h1080-c/IMG_3824%2Bpe.jpg",
        "author": "Ziv Horesh"
    },
    {
        "url": "https://lh6.googleusercontent.com/-gb7vG0Z6jrU/Tg1gas5e87I/AAAAAAAAAPY/4zsNQt6LotI/s1920-w1920-h1080-c/101016-4858-GrayWhaleGran1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-F1T9flY075Y/U0Mgnwr2AJI/AAAAAAAJBJY/eeooel6-ZXY/s1920-w1920-h1080-c/Trey%2BRatcliff%2B-%2BQueenstown%2BAurora%2BAustralis.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DVLhwntrByk/UHWaN49pObI/AAAAAAAAQ5E/OeeF4jq71GY/s1920-w1920-h1080-c/DSC_0540_39_41-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-RtJjOCkuYL8/UtTvDO3sraI/AAAAAAAAX3c/VVVtMV1yPW0/s1920-w1920-h1080-c/DSC_4393.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-6rBZbgkCtuw/UjoKEecXVbI/AAAAAAAALF8/slKFWg2p5Ik/s1920-w1920-h1080-c/Mono-Lake-Tufa-State-Park.png",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh6.googleusercontent.com/-8c36eMOJDRg/UGMwCiZcJaI/AAAAAAAAk8o/9kpsS3VNMCA/s1920-w1920-h1080-c/_dsc9224-edit.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh6.googleusercontent.com/-i4e_A0G2XE8/T-3JTkaWWBI/AAAAAAAAYo0/fUubashRUxU/s1920-w1920-h1080-c/050907-0078-TamalpaisSunset.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-2Lhxkz2EBz4/U0MlX7aExHI/AAAAAAAJXMc/Lh1kPpcrBi8/s1920-w1920-h1080-c/trey-ratcliff-road-to-paradise.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-7X44UiG6ohw/Ua2Qmj06zkI/AAAAAAAAfYA/owBHOfu6u_I/s1280-w1280-c-h720-k-no/Sunrise%2Bin%2BSangam",
        "author": "Apurva Mathad"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ZH912PHEET8/URRP1BvQZ1I/AAAAAAAALEI/2ATrI0hnjis/s1920-w1920-h1080-c/PescaderoBench.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh3.googleusercontent.com/-r3D0LQrT3K4/Tg1bQhpX5hI/AAAAAAAAAIs/ONg4BWnADUM/s1920-w1920-h1080-c/061012-1109-PigeonPEve.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-7TR8O10YSfU/T7qGSJFIecI/AAAAAAAAAwU/-lcl_0HKKg8/s1920-w1920-h1080-c/JFU%2BPOD%2B2012-05-21.jpg",
        "author": "J.F. Unson"
    },
    {
        "url": "https://lh6.googleusercontent.com/-eYFfx8sHLZY/UBSl8KkdpRI/AAAAAAAAPeA/5sJreKxzLYc/s1920-w1920-h1080-c/Motion.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-GYfXywevB-4/UtTtugxGWlI/AAAAAAAAXpw/e5tyHYdIIK0/s1920-w1920-h1080-c/GGate%2BDawn%2Bfrom%2BSlacker%2BHill.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh4.googleusercontent.com/-iqs_ihvxlzM/Ur0B20OjdgI/AAAAAAAAF7Y/yJ1rAuyEQjQ/s1920-w1920-h1080-c/IMG_7006-Edit.jpg",
        "author": "Benjamin Poiesz"
    },
    {
        "url": "https://lh6.googleusercontent.com/-hup9z5XvHSs/TrjLSY-Y9YI/AAAAAAAAh4o/s_xtAaJ0Y8I/s1920-w1920-h1080-c/David%2BMorrow-1-53.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-YNlHO0F-y_U/UoazYeYqMvI/AAAAAAAAVqg/h8tLY6Zwktw/s1920-w1920-h1080-c/MoraineLake.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-gk37ZdcHsx4/UOe5ofNzmlI/AAAAAAAAdO0/O6j0AouJGWs/s1920-w1920-h1080-c/Sutro%2BBaths%2BSunset.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-BTVdYl7cQqQ/UrIOEKZzzOI/AAAAAAAAHmQ/Dd6NXdNjT6c/s1920-w1920-h1080-c/iJQAXfNjtKoqS.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Od5t3ElfFE8/T5lgwM70d7I/AAAAAAAAIzA/uaZpaOxyYWo/s1920-w1920-h1080-c/Quiet%2BCity.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh5.googleusercontent.com/-qdhLu3VPZU8/Uqjrkz-1dzI/AAAAAAAAYTY/Is8QaEy3rZo/s1920-w1920-h1080-c/12-11-12-original.jpg",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh5.googleusercontent.com/-0EQ-4alz8RY/S9aXij2EEzI/AAAAAAABDQ8/SUAUmq9rm60/s1920-w1920-h1080-c/20090411_132734_.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh5.googleusercontent.com/-BK4o8MjAzHY/T6vkuyTuQ7I/AAAAAAAIovQ/rWAnhK0bJqQ/s1920-w1920-h1080-c/Seattle_BrianMatiash.jpg",
        "author": "Brian Matiash"
    },
    {
        "url": "https://lh6.googleusercontent.com/-vCWMbf5t3RI/U0MbNIFWMsI/AAAAAAAJA-w/hbek0tN8Oqk/s1920-w1920-h1080-c/The%2BInfinity%2Bof%2BTokyo.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-YesZvzPs3V0/UlIYsgGdgFI/AAAAAAAAJdU/P4P9yZoMAa4/s1920-w1920-h1080-c/space_needle_scarlet.jpg",
        "author": "Eric Guevremont"
    },
    {
        "url": "https://lh4.googleusercontent.com/-oMSn89uorIA/UktkPI4oEVI/AAAAAAAAVqo/d_0ZasIPfnc/s1920-w1920-h1080-c/PatriciaLake.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh5.googleusercontent.com/-_ApXZ5TKn2Y/UOD9xbbz3OI/AAAAAAAAkNY/p6fXkvjZNY8/s1920-w1920-h1080-c/02212012-08.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh5.googleusercontent.com/-zBN37HRetIk/UY2cBUsqo0I/AAAAAAAAgSE/M6tCXMbetFc/s1920-w1920-h1080-c/8272381830_825c27ae6b_k.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-aqN5sgbqggQ/T3sLvuIoTmI/AAAAAAABFlQ/jxR2IgWbFM4/s1920-w1920-h1080-c/LandsEnds-le-sunset.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-bEYj5hwZ1G8/U0MSbgTqo4I/AAAAAAAJF9c/ijCLJ4jvSuU/s1920-w1920-h1080-c/Approaching%2BYosemite.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-n5TITcFGMP8/T14kNU1ceGI/AAAAAAAAlPQ/05L5zFSPNS0/s1920-w1920-h1080-c/cleardrop.jpg",
        "author": "Erika Thornes"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DBsFTxUtcks/UmhdaoL7ljI/AAAAAAAAGuU/_wGo1r_vqlo/s1920-w1920-h1080-c/Sharpened-version.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh3.googleusercontent.com/-iiQtbhs785o/TopIKj0aLKI/AAAAAAAA3YY/Ron80PW4p8Y/s1920-w1920-h1080-c/Houston%252C%2B5-28-2011-160.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-B7_iA_X9u6k/UBSl-nRhkxI/AAAAAAAAPeg/QCRwYky8OXM/s1920-w1920-h1080-c/Rust.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-eP8f0UBDdio/T_MvcdO96oI/AAAAAAAAK4Y/205FfbtO1-c/s1920-w1920-h1080-c/IMG_5755.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh6.googleusercontent.com/-KilhfjagQZw/TgtZGB0uBJI/AAAAAAAJXZc/rjj3xvxSkso/s1920-w1920-h1080-c/3054580997_b9c89c7d9f_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-3dXv-q-kMJg/Ute8DoCJgSI/AAAAAAAAlHI/A3PJNXvm8g4/s1920-w1920-h1080-c/DSC_0853-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-N0nCxT3CoyI/TiBebjgu72I/AAAAAAAAB_o/FA2Yie4J-Ng/s1920-w1920-h1080-c/101230-6559-OceansideSurf.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-30UpbeUHcOQ/T9tEJNtPhVI/AAAAAAAAc3E/4CJZttm4KWY/s1920-w1920-h1080-c/050618-0071-Impact.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-PJeiU1A4uro/UX7t-K3fjDI/AAAAAAAAgRQ/a_dTtUzUiSI/s1920-w1920-h1080-c/G%252B.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-h782AeqXwL4/U0MTcwzNuyI/AAAAAAAJBlg/B0ICHy6uj-I/s1920-w1920-h1080-c/Across%2Bthe%2BAlaskan%2BFjords.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-rOuBbaxoNAU/T-zOq9MmziI/AAAAAAAABdU/y24M7n3oj70/s1920-w1920-h1080-c/IMGP0592.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh4.googleusercontent.com/-n0u3jK1pUOU/T4cRTBLMFeI/AAAAAAAAQQE/I4UL0p_QZHg/s1920-w1920-h1080-c/100530-3924-Orbs1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-X5n9ak4dE1s/Tg1c8c9xvWI/AAAAAAAAALE/M9bf_hSgUHI/s1920-w1920-h1080-c/071121-3891-MontcitoMorn.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-0QWWEWkAEkA/UTmo6qnkIgI/AAAAAAAAWsU/VIzT5UsUyh8/s1920-w1920-h1080-c/DSC_8551.png",
        "author": "Matt Williamson"
    },
    {
        "url": "https://lh5.googleusercontent.com/-f1YF98XfEmY/UVmHsvQBxvI/AAAAAAAAT9g/0Uk7XjxUFCw/s1920-w1920-h1080-c/IMG_20130330_120430-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-cE9kbdGkRcY/UO5T0dsJ69I/AAAAAAAAFCc/WTAjl9itAog/s1920-w1920-h1080-c/The%2BNight%2Bis%2BComing.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-zcGhuTDGZ7Q/TvI44kbopOI/AAAAAAABFaY/677iL2Z8O8s/s1920-w1920-h1080-c/SutroSunset-surf-burn.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-lMCO5r3MLUQ/UZURZdDoWWI/AAAAAAAAPOU/FayJm6cQrN4/s1920-w1920-h1080-c/The%2BBeach.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh3.googleusercontent.com/-bJINgh9Vi4o/Tj7Oe8q92OI/AAAAAAAAE1A/FacUTB4yhuo/s1920-w1920-h1080-c/ViewToKilauea-1920.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-jrCbEVo5pok/UTUniMfAPQI/AAAAAAAAMlc/taFKyOwN7ro/s1920-w1920-h1080-c/Take%2BIt%2Bor%2BLeave%2BIt.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh3.googleusercontent.com/-JMRLCkgYWUI/UR0He_hKbyI/AAAAAAAAOyM/Fjml1QshbrU/s1920-w1920-h1080-c/ENS-%2BMacro%2BSnow-.jpg",
        "author": "Elena Solomon"
    },
    {
        "url": "https://lh6.googleusercontent.com/-q_QW7a6v8Jg/UO5TrFH3WqI/AAAAAAAAE-8/lS-BrM2wbIE/s1920-w1920-h1080-c/Rockaway%2BFire%2BSky.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-DHg264B2vlg/Ul9y7zxl9iI/AAAAAAAAE6A/KNGHpq_cH1M/s1920-w1920-h1080-c/DSC_1351.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh6.googleusercontent.com/-lA8lfuSjpBY/U0tzavr8B0I/AAAAAAAAvh8/YNJ4VVT6axk/s1920-w1920-h1080-c/IMG_7939%2Bhe.jpg",
        "author": "Ziv Horesh"
    },
    {
        "url": "https://lh4.googleusercontent.com/-vQXExn8x3Wo/Tg1dCJ3WSJI/AAAAAAAAALM/j6v5p4iMLDc/s1920-w1920-h1080-c/071124-3917-BigSurSky.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-mA6_1F0fM7U/TgtZGJt2oII/AAAAAAAJKTg/te1m0BOVycg/s1920-w1920-h1080-c/3189889363_6357f5f645_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-gc_DtPYoi8Q/UYUMQbjFoQI/AAAAAAAAA18/nO-qo4dVR54/s1920-w1920-h1080-c/dock-3.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh5.googleusercontent.com/-aqAzpcuVQ78/URskKwHK_oI/AAAAAAAALvw/-tqkwx8OaU8/s1920-w1920-h1080-c/Bonzai%2BRock%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-nCN9lgyjKd0/UpBNC_yRLBI/AAAAAAAAD_s/xH5Pb5wEGH4/s1920-w1920-h1080-c/DSC01070%2BMosaic.jpg",
        "author": "Dominik Behr"
    },
    {
        "url": "https://lh3.googleusercontent.com/-2y17u99oVV8/TwyPAbOBPqI/AAAAAAAAF9w/EQOhIwGaHiA/s1920-w1920-h1080-c/IMG_1182.CR2.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-wbgMEtWkW5w/UIAoOUnOGII/AAAAAAAARq0/TO0jcE2k6tE/s1920-w1920-h1080-c/IMG_8311.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Y_Bp6GUWfSE/U0Maxnb6OyI/AAAAAAAJA4U/a05iPi39_7c/s1920-w1920-h1080-c/The%2BGrassy%2BRoof.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-rQdS7R8LdHM/T1Jy2z5kZcI/AAAAAAABFZY/Cqb-Q9aWw2Q/s1920-w1920-h1080-c/Seal%2BRocks-Edit.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-f6OToCJWRrg/UUsOySkJXoI/AAAAAAAATgk/DWwubrzxFPY/s1920-w1920-h1080-c/MountainSplendor.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-GQv4Q_NZKH8/UDZ1v6AEcSI/AAAAAAAA6ik/i90ZeH2jexc/s1920-w1920-h1080-c/IMG_4460.jpg",
        "author": "Michal Pecek"
    },
    {
        "url": "https://lh4.googleusercontent.com/-tw3AkYSVojM/U0MlwltSINI/AAAAAAAJBMA/7_5x_BUOOww/s1920-w1920-h1080-c/untitled%2B%2528101%2Bof%2B207%2529.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-X3k5JeDbKW4/UZtfuMrJ49I/AAAAAAAAVpI/Qy3yA3weGXM/s1920-w1920-h1080-c/DSC_6674-Edit-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-NE7B7ZtjC9M/UknSexY2-_I/AAAAAAAAN6g/od62b4KTS9U/s1920-w1920-h1080-c/5-07-13-hodgeman-ks-lightning-supercell.png",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh5.googleusercontent.com/-FvCQfPFdiSo/T6MJ8NChHrI/AAAAAAAASuE/R4M6tzLZJhg/s1920-w1920-h1080-c/061120-1380-HanaleiBonfire.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-gvCvkN6ll9Y/UtRUq4mYc8I/AAAAAAAAGpo/RecztlhW01k/s1920-w1920-h1080-c/Thamserku.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh5.googleusercontent.com/-lKPOvxP_3hQ/U0MjW1IS8QI/AAAAAAAJBP4/qTn4pFXZq_8/s1920-w1920-h1080-c/ohau-cliff-hawaii-trey-ratcliff.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-PBAhFhrSEPM/Ugj3wyodrvI/AAAAAAAAIOs/Fo7lNmwWNu0/s1920-w1920-h1080-c/7439storm2.jpg",
        "author": "Michael Hawk"
    },
    {
        "url": "https://lh6.googleusercontent.com/-OuaQJ-ktrms/TmH7HMco5NI/AAAAAAAADYk/CvmoywXR_ck/s1920-w1920-h1080-c/bondi_sml.jpg",
        "author": "Sub Szabolcs Feczak"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Bm8YwGRxgzI/U0MfR72bkDI/AAAAAAAJKHE/TKs1mWF8US4/s1920-w1920-h1080-c/Trey%2BRatcliff%2B-%2BChina%2B2011%2B-%2BA%2BGreat%2BWall%2Bat%2BSunset.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-WiGnP1yACq0/T2-Ib08jHdI/AAAAAAABFaw/uRs4YlY_qss/s1920-w1920-h1080-c/TwilightRocks_SanMateoCoast-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Nqk_FdA42Zc/Tjs-KP7DWkI/AAAAAAAAEns/7Ut-bahz1P8/s1920-w1920-h1080-c/GoldenFalls-1920b.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-To5JBx7eAO4/U0MaTRPOM4I/AAAAAAAJEWM/8Bgvm9uL6Do/s1920-w1920-h1080-c/The%2BFarm%2Bof%2BEden.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-m3p3BqCIHFo/UO5TjnJe1UI/AAAAAAAALsU/selrswTfUb0/s1920-w1920-h1080-c/Lone%2BPine%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-dT6mqzdFoxo/UO5TsJMf_yI/AAAAAAAALss/vBxJiFUqYzo/s1920-w1920-h1080-c/Rockaway%2BSunset%2BSky.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-VeCrM9fKDYw/UkPR39wFICI/AAAAAAAALrQ/1VmRr7zq_N4/s1920-w1920-h1080-c/8031438226_5713c1a86c_o.jpg",
        "author": "Mel Foody"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Hn2QgYPEDxo/Tg1bUgAlTfI/AAAAAAAAAI0/R33ZpN3IaJ8/s1920-w1920-h1080-c/061012-1078-PelicanCove.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Lpppujp4Qb4/UpBTNYFdx7I/AAAAAAAAD_4/SCgq46wEvcU/s1920-w1920-h1080-c/DSC03916%2BGreen%2BLeaf%2BTexture.jpg",
        "author": "Dominik Behr"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Z9mJn5vva2U/T6sVZGdrvgI/AAAAAAAAdAo/rdpy_ia2NS8/s1920-w1920-h1080-c/The%2BFickle%2BMistress.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-BaJK0XmLmG4/Ujs1Ol1HI4I/AAAAAAAAd1M/NMw9W4j_NwE/s1920-w1920-h1080-c/20120820_road_to_bourg_00001.jpg",
        "author": "Robbie Shade"
    },
    {
        "url": "https://lh5.googleusercontent.com/-K7DKKrLhMec/Tg1eUKdLbXI/AAAAAAAAAM4/BaH6ytbEX4U/s1920-w1920-h1080-c/090227-0384-McCluresPoint.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-tCgHZWwSulc/Tg1dtfmRPHI/AAAAAAAAAMI/ol6-WLOo7WU/s1920-w1920-h1080-c/080816-4952-WaianSands.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-O4UDPDQfLZQ/TzdFRAwT0EI/AAAAAAAASj4/lm9Zvq3vzdk/s1920-w1920-h1080-c/MArshallBeach-sky-surf-rocks.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-xOVjmeJjM3o/TqtYP_buAoI/AAAAAAAAFlA/xUHqJSkr-MU/s1920-w1920-h1080-c/IMG_0684.JPG",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh3.googleusercontent.com/-nVVTXe9Sxgo/UpenL7x02oI/AAAAAAAAf-Q/ZILGpGcTQxY/s1920-w1920-h1080-c/DSC_2022-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-9onoNvWLv90/TlATZJzzWXI/AAAAAAAABuk/XQFlEb58qHU/s1920-w1920-h1080-c/Pole%2BWith%2BThe%2BView.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh3.googleusercontent.com/-e6TcvHbkNxo/Tg1dYGAJKTI/AAAAAAAAALw/_t-M3-wmbeg/s1920-w1920-h1080-c/071229-4276-LaJollaFalls.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-n76GULHmI8U/Tg1fNmGyDbI/AAAAAAAAAOA/pNieTMoo0ro/s1920-w1920-h1080-c/090911-2088-AngelIslandSky2.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-xbaZ1sXXy24/ThTso6EAUgI/AAAAAAAAW80/LXj2arce9P4/s1920-w1920-h1080-c/DSC_0267_8_9_tonemapped-Edit-1.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DyPcaS42LZA/Um8ho-wDUtI/AAAAAAAAJdE/_E5m-Mwwr10/s1920-w1920-h1080-c/shades_of_blue.jpg",
        "author": "Eric Guevremont"
    },
    {
        "url": "https://lh6.googleusercontent.com/-08NVs0omPPw/TgtZEFlihuI/AAAAAAAJBBo/KKdqrpOP5Z0/s1920-w1920-h1080-c/1134103121_gateway%2Bto%2Bthe%2Btemple%2Bof%2Bheaven.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-8oFgnBE2GNc/TuwIRBNgBtI/AAAAAAABFW4/LxAGhsVUVcA/s1920-w1920-h1080-c/OceanBeach_sunset_ripples.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-F3ZyOr4idOI/TpmrTH1nvwI/AAAAAAAAXDw/SVqTj5GOvos/s1920-w1920-h1080-c/_MG_0139.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh3.googleusercontent.com/-WHdVljxASJk/UOue-BcvLNI/AAAAAAAAwoo/ENRQQBJtKsA/s1920-w1920-h1080-c/DolphinWalk.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-1OMPOm50As0/Ua2didd-IjI/AAAAAAAAfX4/afXkw0vQ4Nc/s1280-w1280-c-h720-k-no/Red%2Bpaint%2Bon%2Brock%2521",
        "author": "Apurva Mathad"
    },
    {
        "url": "https://lh6.googleusercontent.com/-sVsjQwFKpM0/UFN9mKAiexI/AAAAAAAASuM/qpOQevOJY8k/s1920-w1920-h1080-c/5-20-11-sunset-clouds365-kdelay.jpg",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh6.googleusercontent.com/-A5xnIm26hoM/UQ6xWBcP60I/AAAAAAAAFZI/xCilpfxW-3Y/s1920-w1920-h1080-c/maui-13.jpg",
        "author": "Jim Rowson"
    },
    {
        "url": "https://lh5.googleusercontent.com/-2oWY5eMxbnY/TwJ1W3DnAII/AAAAAAABFbs/V9UTfZKkOnM/s1920-w1920-h1080-c/Sloat-SunsetBeachFoam.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-c9B7jGfHr6o/UTrH-HohBFI/AAAAAAACVNI/djRS4kfUWfI/s1920-w1920-h1080-c/20130307-%252812_46_39%2529-tahoe-5d3-15940.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Hjg_1FAJV7k/T8miVTXavMI/AAAAAAAAIgo/Ksveh_v5Pws/s1920-w1920-h1080-c/DSC_6436.jpg",
        "author": "Amarpreet Singh"
    },
    {
        "url": "https://lh5.googleusercontent.com/-duWLWrx3RtU/Tg1erB-vvtI/AAAAAAAAANU/3iD8-ATfJsw/s1920-w1920-h1080-c/090501-0963-CycloneOfLt.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-zAb56uSfuX0/TgtZEG6yqnI/AAAAAAAJBDQ/5prXR1sSzyU/s1920-w1920-h1080-c/1189866210_spanish%2Bsunset.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-dN576MDlyEM/TiRJgIjUtZI/AAAAAAAD6lY/sbNK1sQOiow/s1920-w1920-h1080-c/IMG_5433.jpg",
        "author": "Thomas Kang"
    },
    {
        "url": "https://lh4.googleusercontent.com/-7EJI2_bMWrg/U0_6WXfnu0I/AAAAAAAA2IA/qnv2qDY374E/s1920-w1920-h1080-c/388A4957.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-_X4BN2gmOh4/TqTdEJ8Q95I/AAAAAAAAEx4/4HIX-pD4OuI/s1920-w1920-h1080-c/Olmsted-Sunset-1.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-qB_Ig_4y9Rw/TitXwn3BB5I/AAAAAAAAJy8/RZUJEs4KWZk/s1920-w1920-h1080-c/Darker%2BSort%2Bof%2BLove.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-z9s9Br2P5fo/UKZedhD_eYI/AAAAAAAACfk/2-qRWoFQDcs/s1920-w1920-h1080-c/new-england-4.jpg",
        "author": "Jim Rowson"
    },
    {
        "url": "https://lh5.googleusercontent.com/-qblqQRK-QW4/UMFUCEQ3zeI/AAAAAAAAyOI/SnSVoJqMuIk/s1280-w1280-c-h720-k-no/2012%2B-%2B1",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Qg8_rThEaGY/Tu6-8Ra_PHI/AAAAAAAAJfU/gGCCRd2tfgI/s1920-w1920-h1080-c/dsc_0056.jpg",
        "author": "Michael Grigoriev"
    },
    {
        "url": "https://lh4.googleusercontent.com/-9VBXTbvWld0/U_yjmbN6zVI/AAAAAAAB-3c/rSgR3kL3uTQ/s1920-w1920-h1080-c/20101103_TorresDelPaine_Cuernos_Horns_6215_blended-Edit-Edit-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-NFuPWEa3vrE/UFs2mhJrWQI/AAAAAAAAST4/QAg74w1fZpI/s1920-w1920-h1080-c/bodie-11.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh4.googleusercontent.com/-xjlOWCsBOHg/UL2Bg7-fWJI/AAAAAAAAEQM/_Af3LToQDmg/s1920-w1920-h1080-c/IMGP8003.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-GN97YhnT3Qo/Tj1SVC1wv-I/AAAAAAAADi0/upwFGIqVhPQ/s1920-w1920-h1080-c/20110710-160024.jpg",
        "author": "Peter Valchev"
    },
    {
        "url": "https://lh4.googleusercontent.com/-mdbG7ZFFzKQ/U0MX5tKa1vI/AAAAAAAJCBM/XGhf_-p25Ys/s1920-w1920-h1080-c/River%2Band%2BMount.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-GqlicgZD75w/UQvyE1jYq_I/AAAAAAAALvA/m-lVwnXNd8E/s1920-w1920-h1080-c/Stream.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-mE6abdyWyeI/T33QrDV7lfI/AAAAAAAAbX8/Py6I0C7QoW8/s1920-w1920-h1080-c/02212012-01.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh4.googleusercontent.com/-USkNl2UVpk8/Tg1a6ynrEKI/AAAAAAAAc0c/fcUJz1E5SKw/s1920-w1920-h1080-c/060607-0405-PillarsPast.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-rU4h5IKilhs/UbC8PJyZCII/AAAAAAAABBo/tPQZAwV8nxA/s1920-w1920-h1080-c/8949932059_416d4806ab_o.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh6.googleusercontent.com/-iXtTEIicPCE/Thz5P1Y-mFI/AAAAAAACqmA/QwzDzmHWk94/s1920-w1920-h1080-c/untitled-5.jpg",
        "author": "Alan Shapiro"
    },
    {
        "url": "https://lh5.googleusercontent.com/-kM5nzgAtWSI/Us2ewqEBtFI/AAAAAAAABiM/iwvLzC2OMEk/s1920-w1920-h1080-c/20140105-untitled%2Bshoot-2908_HDR_HDR.jpg",
        "author": "Eric Wu"
    },
    {
        "url": "https://lh3.googleusercontent.com/-EF8NaWPwjTM/Tg1gLGBR_9I/AAAAAAAAAPE/3DlU_Kv1HHQ/s1920-w1920-h1080-c/100731-4524-HapunaLight1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-RCFt3utBaXk/UE5kxyUxo6I/AAAAAAAAJWQ/jtgzKjcGfuU/s1920-w1920-h1080-c/TetonSnakeOverlook.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh3.googleusercontent.com/-gaopZCkIyjM/UAANMufYpbI/AAAAAAAAA8g/W8pUBA6vZg0/s1920-w1920-h1080-c/JFU%2BPOD%2B2012-07-12.jpg",
        "author": "J.F. Unson"
    },
    {
        "url": "https://lh4.googleusercontent.com/-5FV5VQzT0WQ/Tzy0dNznpGI/AAAAAAAAEwc/5uIfwjNBMhc/s1920-w1920-h1080-c/20120212-IMG_4250.jpg",
        "author": "Tim St. Clair"
    },
    {
        "url": "https://lh6.googleusercontent.com/-KKZmrbmQdYM/Tg1fx0f9EaI/AAAAAAAAAOs/zg07LmkK2eg/s1920-w1920-h1080-c/100312-3521-MonolithicLight1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-p3T0Z0zLK5E/UJhoD6_Ac1I/AAAAAAAAgMQ/fqQxNGKpL-c/s1920-w1920-h1080-c/8156803630_fcb67dbe98_k.jpeg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh5.googleusercontent.com/-yX9BOjrswig/TgtZEPKtS_I/AAAAAAAJEmo/jrnHGoDlpHw/s1920-w1920-h1080-c/4088949046_5d094cb2e2_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-1cqsYzBc5Ro/T52sqyhyh1I/AAAAAAAAh4Q/mI3H5Ae6e3U/s1920-w1920-h1080-c/final%2Bcopy%2BSecond%2BBeach.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-4eLicoBRkAQ/Uc7OMQqqKMI/AAAAAAAAXbw/eMQHZ3fhXGA/s1920-w1920-h1080-c/DSC_8621-2-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-PQQBBUfBmNs/TgtZENaPpRI/AAAAAAAJA1Y/mfOoa5PJw4g/s1920-w1920-h1080-c/1171692863_the%2Beiffel%2Bfrom%2Bbeneath.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-p5_F7m7xK9s/UW3Mgp2DRbI/AAAAAAAAgQw/cpRI342HQUU/s1920-w1920-h1080-c/Galaxy%2BNumber%2B9%252B.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-9-6Sd41GxEQ/U0MR8Gvqf4I/AAAAAAAJRB0/9fYITnA4fQk/s1920-w1920-h1080-c/A%2BSunset%2Bon%2Ba%2BTexas%2BFarm.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-0EtkLRGwW-M/T9frF1W1iXI/AAAAAAAAQXA/CiueoUGCsjo/s1280-w1280-c-h720-k-no/12%2B-%2B1",
        "author": "Brian Matiash"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DfDrf9tZth0/TgtZGBjmXqI/AAAAAAAJA_A/e6jq_VQrXaY/s1920-w1920-h1080-c/300928932_3bf6d408df_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-B7gaJXyGoIs/UHOmYB8GzPI/AAAAAAAAwHA/MGpwJlaw7Yw/s1920-w1920-h1080-c/Reflecting%25252520Moonlight.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-zuD-bqjkRMs/U0MdYYTiWJI/AAAAAAAJJLE/xEEn0-D32-Q/s1920-w1920-h1080-c/The%2BSolar%2BFlower.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-qgsWOzSSaFo/UdM8cyyfXkI/AAAAAAAASkE/qpSIr8W4rO4/s1920-w1920-h1080-c/Western%2BPoint%252C%2BAcadia.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh5.googleusercontent.com/-zM9H0TZ7zvU/UL2SzgOxbCI/AAAAAAAARmg/NtJsEYpJ4bI/s1920-w1920-h1080-c/StormyWater.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-lhJ5LTmfI1s/ThOhJnp6kwI/AAAAAAAAi-U/ckIPTHZDIww/s1920-w1920-h1080-c/Have%2BYou%2BEver%2BLoved%2Ba%2BWoman-3.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DtOOMCEQEzs/Tg1baI_IkFI/AAAAAAAAc0g/4HYnmK0I21k/s1920-w1920-h1080-c/061119-1290-HaenaSurf.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-W4QK8u2RidQ/T5rzpYg_42I/AAAAAAAARuc/kddS3Teg8gU/s1920-w1920-h1080-c/071022-3473-NightScape.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Mo0DARoQ5pg/TgtZGObV66I/AAAAAAAJA4A/x3NBiBZ1T08/s1920-w1920-h1080-c/3425202839_7a6b829432_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-EGI_DF6_jjM/U0_6WeYaAcI/AAAAAAAA2IA/onrkX5wYXC0/s1920-w1920-h1080-c/388A3302.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-uWYftkrNY7Y/U08nbhRFXEI/AAAAAAAAvt8/Jvqvy9ZX7Rw/s1920-w1920-h1080-c/IMG_2388%2Be.jpg",
        "author": "Ziv Horesh"
    },
    {
        "url": "https://lh6.googleusercontent.com/-mB0CsB02334/Tg1a0rca9TI/AAAAAAAAc0M/poMn2aae0XU/s1920-w1920-h1080-c/060506-0094-Farscape.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-rqPXOCN3Sf4/Tg1eJr7jzJI/AAAAAAAAAMs/neSQj8_NJbQ/s1920-w1920-h1080-c/090102-0143-SeaAndStorm.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-kIjVQfr42sA/T0igl-kt1oI/AAAAAAAAa3E/v2ZuxXNeLDs/s1920-w1920-h1080-c/02202012-01.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh6.googleusercontent.com/-_9KsThqIDII/TsKQNHpnMcI/AAAAAAABFcM/myl4tBgFSMs/s1920-w1920-h1080-c/GGB-Wave_mono-square.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-KTagpsQRiZw/Tk84FHT3wvI/AAAAAAABMJE/lGUSRehuqK0/s1920-w1920-h1080-c/DSC_2817.JPG",
        "author": "Jean-Christophe Lilot"
    },
    {
        "url": "https://lh4.googleusercontent.com/-r9JZ23uiJdw/U0MRzWVvfDI/AAAAAAAJA5Q/4xCghAQGdp8/s1920-w1920-h1080-c/A%2BMorning%2Bat%2Bthe%2BSecret%2BLak2e.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-358nxwhPeBY/UO-mWyIxuvI/AAAAAAAAdPk/6rj6mX5jnnY/s1920-w1920-h1080-c/A%2BDeep%2BBlue.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-XtY_wBr5voE/Tj10jc3tbrI/AAAAAAAAA8Q/otx2Eva9T1Y/s1920-w1920-h1080-c/FoxtailsInSummer2.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh3.googleusercontent.com/-s8Arhr77hCs/UqTF_xWLYVI/AAAAAAAAXK8/uRcPFpV7CPM/s1920-w1920-h1080-c/C21T0817.jpg",
        "author": "Michael Fang"
    },
    {
        "url": "https://lh6.googleusercontent.com/-6rkit8ybzeU/Ulc_F2x7LhI/AAAAAAAAVqY/g3x7cwjn77c/s1920-w1920-h1080-c/BeautyCreek.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-VeOuV8_xtzQ/Tg1fcY4BfBI/AAAAAAAAAOQ/y0D10NZbTOw/s1920-w1920-h1080-c/091009-2169-LibOfAges3.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-NZ_Ll43savw/TzCKeTsXQHI/AAAAAAAASAc/n4AJeYm6ehA/s1920-w1920-h1080-c/SFBay-Sunrise-Hank-n-Pilings-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-q7WJKw9Oqog/U0MSH9OpjdI/AAAAAAAJGxU/FDOzRfCcMro/s1920-w1920-h1080-c/Adventure%2Bin%2BArgentina-7283-March%2B31%252C%2B2009-2.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/--s1xvTZu_8s/TvEFum2qOkI/AAAAAAABFiQ/RVtjU4CacrI/s1920-w1920-h1080-c/SunetReflection_16x9-Edit.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-id9Mf91TyIg/UQmGXFzYiAI/AAAAAAAAlfo/n2RM1udWSeM/s1920-w1920-h1080-c/IMG_1221.jpg",
        "author": "Grzegorz Głowaty"
    },
    {
        "url": "https://lh4.googleusercontent.com/-4-wMlkvbnxI/U0MiMX47iJI/AAAAAAAJJJ8/lstLqeHqMOM/s1920-w1920-h1080-c/Trey-Ratcliff-New-Zealand%2B%2528362%2Bof%2B696%2529.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-AzTPYuHHGUE/TvWWawSal0I/AAAAAAAAh4k/6hc4d8JYtzE/s1920-w1920-h1080-c/David%2BMorrow-1-2.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-7EENXFBPvH8/U0Mc5Ty31YI/AAAAAAAJBIY/d9kb4PcgsXc/s1920-w1920-h1080-c/The%2BRocks%2Bof%2BIceland.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-_TPUkTQ0foE/UOu3R1Fih9I/AAAAAAAAUwU/n2BcAi9lFAI/s1920-w1920-h1080-c/2012-Favorites-3.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh4.googleusercontent.com/-p2S6pYJG8TY/UkLZ-2heppI/AAAAAAAAdAo/UEwJsuYTGXM/s1920-w1920-h1080-c/Exclamation-4.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-AM_AYNzr-a0/UpBNRCa9JbI/AAAAAAAAD_w/gATI2Qr7EHw/s1920-w1920-h1080-c/DSC01099%2BPlant.jpg",
        "author": "Dominik Behr"
    },
    {
        "url": "https://lh4.googleusercontent.com/-k85UvBDxqso/UbdXjw35hhI/AAAAAAAAFh4/E7cP1B2hXgg/s1920-w1920-h1080-c/1-24-13.jpg",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Hy-GW9jdRmM/UOOY4T51IhI/AAAAAAAAKiI/dj3WLyRqMJE/s1920-w1920-h1080-c/LowerAntelope1.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh3.googleusercontent.com/-lTCOr1mGi98/T0m262j2RnI/AAAAAAAAGbs/4Ab-Mhv-4_A/s1920-w1920-h1080-c/DelicateArch.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh3.googleusercontent.com/-dzQdFd1d2cg/UpExTYfIJ6I/AAAAAAAAFgo/jW1vrNByXqg/s1920-w1920-h1080-c/DSC_3091-Edit.jpg",
        "author": "Sharon Chen"
    },
    {
        "url": "https://lh5.googleusercontent.com/-SPVIRuebjx0/U0MWpwm-GJI/AAAAAAAJJKQ/b1X__UQq1K8/s1920-w1920-h1080-c/Lorne%2BRoad.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-4uiERrKdNVE/Usue1k7IcmI/AAAAAAAAIQk/7Zc85PO1bqg/s1920-w1920-h1080-c/CC%2B-%2BDry%2BTortuga.jpg",
        "author": "Karthik Ravindran"
    },
    {
        "url": "https://lh5.googleusercontent.com/-_DnjtLU9fJY/UcOb6hTz8uI/AAAAAAAAMAQ/VfYmdlBSXdE/s1920-w1920-h1080-c/ConvictLake%2B%25282%2Bof%2B3%2529.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh3.googleusercontent.com/-9evAJAwXovk/Tg1aR0viDRI/AAAAAAAAc0I/TecuJZTaV44/s1920-w1920-h1080-c/110429-7971-Faultlines.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-2Q98cG0kiX8/U0MgMcXhJgI/AAAAAAAJKoU/iqJaKYOi6J0/s1920-w1920-h1080-c/Trey%2BRatcliff%2B-%2BNEX%2B7-%2BSunset%2B2.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-ree1zkofuLM/UPBTkiEo3pI/AAAAAAAAfWU/t0UKepl53qw/s1920-w1920-h1080-c/IMGP8556-Edit.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh5.googleusercontent.com/-GG5F6MX07hk/UUXWTSgeTDI/AAAAAAADw8s/p2Pna7yQMKk/s1920-w1920-h1080-c/Return%2Bto%2BLand.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Cp1EGSOiT7o/U0MbuGaep5I/AAAAAAAJIA0/Hi4dBFthsQE/s1920-w1920-h1080-c/The%2BMost%2BBeautiful%2BRoad%2Bin%2Bthe%2BWorld.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-KxjcNjAfrow/U0MTi1JasjI/AAAAAAAJKS4/JcqmHStMKgE/s1920-w1920-h1080-c/Chicago.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-YtY0G_DC_BE/ThCRJMW7AqI/AAAAAAAAc2I/DzfI9N2Env0/s1920-w1920-h1080-c/110121-7113-LightForce.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-p8gu7w4UaB0/Tg1cD-zJRXI/AAAAAAAAAJw/xKPs4AJ8WTU/s1920-w1920-h1080-c/070211-2329-GarrapataSurf1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-KwGZ0753oAA/T_SUbhKUrmI/AAAAAAAAhqg/aN2q0nhUYNA/s1920-w1920-h1080-c/Day%2BBreak%2BG%252B.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-CO0rt1QKLBY/UEfrQR0h-iI/AAAAAAAACcQ/rZb2-XD-OW4/s1920-w1920-h1080-c/IMGP4685-2_HDRmasked-Edit.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-n7fShLdIZsA/Um6zuoddyaI/AAAAAAAAGy8/FN0L87rCmkE/s1920-w1920-h1080-c/_MG_2470-copy.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh4.googleusercontent.com/-sZP4kIJezCc/UMaZbSGsmXI/AAAAAAAAfWA/K0mexT_XvUg/s1920-w1920-h1080-c/IMGP0430.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh3.googleusercontent.com/-EIrEuHD0skg/Tg1cUtz3htI/AAAAAAAAc00/ykp5Z4-BtGg/s1920-w1920-h1080-c/070902-3129-BowlingBall1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-cOLDtwfvFrk/UgxevfE7NnI/AAAAAAAAHEg/X4vxKor8iCc/s1920-w1920-h1080-c/DSC_3987-2-Edit.JPG",
        "author": "Michael Himawan"
    },
    {
        "url": "https://lh4.googleusercontent.com/-HvYn37TmYdE/T47rXzZ6UHI/AAAAAAAAQ4Y/0-0YxHRkSPg/s1920-w1920-h1080-c/071229-4235-SandstNSky2.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-ggjaMcHz6Fw/U0Mgf-CsIDI/AAAAAAAJFdQ/iyuO6PIuUdg/s1920-w1920-h1080-c/Trey%2BRatcliff%2B-%2BOTW%2Bto%2BGlen.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-HLd03aGGzhw/UBAPzClIeUI/AAAAAAAAZKk/et_uw5nFzMY/s1920-w1920-h1080-c/050925-0107-MontereySunrise.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DZDQ-Jc4VPA/TSjtGSyY5lI/AAAAAAAAkNQ/r8BTRHGP7qI/s1920-w1920-h1080-c/136.JPG",
        "author": "Dave Sparks"
    },
    {
        "url": "https://lh5.googleusercontent.com/-smKqSEXvptA/UpZ3FAZqrSI/AAAAAAAAf5w/iIG6Dg0XSKs/s1920-w1920-h1080-c/DSC_1311-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-5vOp8Qd9Cr0/UZURZbC6EvI/AAAAAAAAgTY/jZBHwF9W4VU/s1920-w1920-h1080-c/In%2Ba%2BForeign%2BLand%2B-%2BWest%2BFjords%252C%2BIceland.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-sZXaqdy-xcA/UKzgVo7pqnI/AAAAAAAAIaA/tvF7kHoKH2I/s1920-w1920-h1080-c/Hell%2527s%2BGate%2BBridge-6.jpg",
        "author": "Elena Solomon"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Q8Zbytpv6JA/UEAyM_ia8oI/AAAAAAAACUQ/lQa6sFuf0A0/s1920-w1920-h1080-c/full_moon_rise.jpg",
        "author": "Eric Guevremont"
    },
    {
        "url": "https://lh6.googleusercontent.com/-vYrcLbr_syE/UO0CdVlLb_I/AAAAAAAAgOE/-NoOWCD3-LY/s1920-w1920-h1080-c/End%2BGame%252B.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-3vQd4cgTVRA/TkdHBh16EbI/AAAAAAAGbYw/RHF-nrxNW5Y/s1920-w1920-h1080-c/Spins%2BFree-3.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh3.googleusercontent.com/-fSZtzjxYoBk/U0MfcOvbsrI/AAAAAAAJBP8/prm689xvgE4/s1920-w1920-h1080-c/Trey%2BRatcliff%2B-%2BChina%2B2011%2B-%2BThe%2BEgg%2Bat%2BSunset.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-yHcNU3C0yO0/UOD1MEKDoTI/AAAAAAAAyNE/TsP4j-IK7pM/s1920-w1920-h1080-c/IMGP4467.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh5.googleusercontent.com/-IFmqkzp2Z74/SlgjPMN0INI/AAAAAAAAJlI/cVrfkqJwBj4/s1920-w1920-h1080-c/IMG_8642.jpg",
        "author": "Bill Luan"
    },
    {
        "url": "https://lh6.googleusercontent.com/-kg9t4FrQyas/Tn6pwfEijkI/AAAAAAAAiW0/haslXD3HlCo/s1920-w1920-h1080-c/Interlocking.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh6.googleusercontent.com/-MgYPNY6H73c/T20O6cenwEI/AAAAAAAAPHc/eyeCppVifDw/s1920-w1920-h1080-c/HaenaReflections-1920.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-m0c1Pjr0q1Q/UfCx9lnrqpI/AAAAAAAAJP8/UhVd_XuxdTQ/s1920-w1920-h1080-c/Column%2Bof%2BLight.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Sg-zeby8vAo/ThJbwzfgG5I/AAAAAAAADyg/_LAL3Ise3U8/s1920-w1920-h1080-c/Houston%252C%2B5-28-2011-744.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh6.googleusercontent.com/-KzaJBCbUUeM/UO5Tehcd8nI/AAAAAAAALsA/6P6qE--L_GI/s1920-w1920-h1080-c/Highway%2B1.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-81O00JEe7GY/U0_6WV9qs6I/AAAAAAAA2IA/xSYNSA5zuIo/s1920-w1920-h1080-c/388A3234.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh4.googleusercontent.com/-4fN6GrHUn3w/UUKwgYRk6AI/AAAAAAAALxE/uAdXgt10m8Y/s1920-w1920-h1080-c/Sailing%2BStones.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-I4GE1irzNkM/Ufni9OVR0TI/AAAAAAAAJRg/Ku-bWlbcnZk/s1920-w1920-h1080-c/Sierra%2BHeavens.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-6C8xp-ROJp0/TzZ9bS7Y77I/AAAAAAAAh4c/VFnkX6FRZlw/s1920-w1920-h1080-c/final.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Xb-0VhFJErE/U0_6WZpo_5I/AAAAAAAA2IA/3wWOfPmtuno/s1920-w1920-h1080-c/388A4648-Edit.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-0gRcRJvCyq8/UYWMMwK-xyI/AAAAAAAAgOg/YAmwDINMMW4/s1920-w1920-h1080-c/MOL_2238-Edit.jpg",
        "author": "Amarpreet Singh"
    },
    {
        "url": "https://lh4.googleusercontent.com/-EgToYDexIWA/TugFtw6MbOI/AAAAAAAAJ_E/AFdXppomBHM/s1920-w1920-h1080-c/Kona-Hawaii-Stormy-Sky.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-zabx6mtDOEg/UtrJztwa_YI/AAAAAAAAX3M/Z7BuWJ7hkzQ/s1920-w1920-h1080-c/Mysore%2BPalace.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-AGyN05vOAVg/Trv455hOvXI/AAAAAAABFag/ruA7zfHRDik/s1920-w1920-h1080-c/BakerBeach-SunsetColor.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-voPn3r8W5cQ/TgtZEGX9FFI/AAAAAAAJG7g/wotb_OlghAE/s1920-w1920-h1080-c/red%2Bbridge%2Bin%2Blate%2Bafternoon.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/--tINsDo9zCo/UZkiyExZsAI/AAAAAAAAMz4/HHxhV2jHyLE/s1920-w1920-h1080-c/In%2BMotion.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-dzFPTHa-Swg/ToZOQcwZIUI/AAAAAAAAnRU/SFjGa8St464/s1920-w1920-h1080-c/Stay%2BWith%2BMe.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh5.googleusercontent.com/-7SfkIA4pi0I/T9n0Hi21zNI/AAAAAAAAXpk/qbXS1xI61Gc/s1920-w1920-h1080-c/051108-1047-HarvestGold.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-pwKZhLAOAHY/TlAwJa0IQwI/AAAAAAAABh8/2QNrMTQubk0/s1920-w1920-h1080-c/DryLeaf.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh3.googleusercontent.com/-i1rPphMhUYQ/T1l7sJNRR5I/AAAAAAABFaA/ISCx26OdOHM/s1920-w1920-h1080-c/LandsEnd-sunset-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-3d-tkshy_0Y/Um32gHQ1usI/AAAAAAAACGA/O4ZCsNcd1-M/s1920-w1920-h1080-c/20130915-7372-34873c91-2048.jpg",
        "author": "Andrew Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-KKLEMMadjkQ/UO8V4We8BYI/AAAAAAAAwHI/245vkVmGU8w/s1920-w1920-h1080-c/Ocean%2BSigh.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-cFtlqrFqSy0/Tpr3ij-CA7I/AAAAAAABC7g/PhNSHOv9-dw/s1920-w1920-h1080-c/RodeoCove-SmallSunset-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-01ZxJyYSOq4/UtTs57pjoXI/AAAAAAAAOYg/L4SWL7LqweM/s1920-w1920-h1080-c/DSC_1556-Edit.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-8qlhIVuze7g/TnPdmuiZiBI/AAAAAAAAGcI/nI4WJB4sNs0/s1920-w1920-h1080-c/SauMorn2-1920.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-wBaT-XTU5lw/U0McsiS2QGI/AAAAAAAJG6g/emxVwa5ILwo/s1920-w1920-h1080-c/The%2BRoad%2Bto%2BLindis%2BPass.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-l87Wq35DtwM/UZyzIUuVM1I/AAAAAAAAm-g/sEAR_OY8oWU/s1920-w1920-h1080-c/Outflow.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-t4GuDMvJgtk/TPK0WgSeLBI/AAAAAAADI4c/zYc1x7I-S9k/s1920-w1920-h1080-c/Life%2Bin%2Bthe%2Bgreenhouse-3.jpg",
        "author": "Alan Shapiro"
    },
    {
        "url": "https://lh5.googleusercontent.com/-dVPjiuCL-og/UNi-6EF0QjI/AAAAAAAAK5E/33w0ipRlzuc/s1920-w1920-h1080-c/7995122298_d4743a46ce_k.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-4J2fjwHlZpk/UtTyvD-FnJI/AAAAAAAAX1k/TuYoeLc-Ku8/s1920-w1920-h1080-c/McWay%2BMilky%2BWay.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uxsx0IEs6eA/U0MlLb1IerI/AAAAAAAJP20/dPosYR9XVxw/s1920-w1920-h1080-c/trey-ratcliff-queenstown-nz-nikon-d800.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-YB4kZ5ge9Cc/U0MTgZTfmZI/AAAAAAAJQpw/V9nAX7xkgF0/s1920-w1920-h1080-c/Chef%2Bat%2BSunset.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-FAIPD0L_XLs/UBctAcHLwcI/AAAAAAAAJAo/fsicVZWEcT8/s1920-w1920-h1080-c/ConvictLakeSunrise.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-k1Op3rHp90U/ToFAGEMaH4I/AAAAAAAAraU/f_xZikhzlCY/s1920-w1920-h1080-c/DSC01009%2B%25281%2529.JPG",
        "author": "Gretchen Chappelle"
    },
    {
        "url": "https://lh3.googleusercontent.com/-jrgfA86uc28/UOPNWRjaV9I/AAAAAAAALJI/fTplIVkaJgw/s1920-w1920-h1080-c/6979723276_d91841e9f1_k.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh5.googleusercontent.com/-UHWxgek6Ei0/T58Hpp9zkeI/AAAAAAAANzY/M8D4GtsE6cY/s1920-w1920-h1080-c/DSC_0444_5_6-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-11Rt4H5Dp6M/UOHsoRqUnlI/AAAAAAAAyQ8/Tahr7dU22K0/s1920-w1920-h1080-c/IMGP9276.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-9FMwjMIo6MU/Tg1efx1FWSI/AAAAAAAAANE/NuC3xJSPApo/s1920-w1920-h1080-c/090424-0690-CrystCvBreakers.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-rYUyEz24110/U0MddxVVpKI/AAAAAAAJI0g/Yo2Aeee9akk/s1920-w1920-h1080-c/The%2BSky%2BForever.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-bjac3OgFBG8/U_yjp004PtI/AAAAAAAB-4U/jq6sA93FbVI/s1920-w1920-h1080-c/20140310_Iceland_1392-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh4.googleusercontent.com/-1oYAqn8Hi9o/TgtZEE_8tKI/AAAAAAAJJKI/8CbtKab2l0U/s1920-w1920-h1080-c/3410783929_310572ed16_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-CI9_3fghPp8/UcrcsOC7IZI/AAAAAAAAXSQ/EJskXUVPyUY/s1920-w1920-h1080-c/DSC_1879-Edit-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-udPQ4zAGUYg/UZURZTfLDhI/AAAAAAAAPSc/ptIJgEKd2LQ/s1920-w1920-h1080-c/G%252B.jpeg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh5.googleusercontent.com/-v6_xr8m1Nh4/UqTF_6FhNQI/AAAAAAAATJY/VWbCHgg5quc/s1920-w1920-h1080-c/C21T0861.jpg",
        "author": "Michael Fang"
    },
    {
        "url": "https://lh6.googleusercontent.com/-TVzStzhfexU/S_5S8_zMy5I/AAAAAAADFE0/fN7-JZzP46I/s1920-w1920-h1080-c/3505475407_d776e4d589_o-1.jpg",
        "author": "Alan Shapiro"
    },
    {
        "url": "https://lh4.googleusercontent.com/-DteiBArt5UI/U0MYH6zthEI/AAAAAAAJFtY/UU1t1FU6uX4/s1920-w1920-h1080-c/Seattle.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-eOzWq5Yn-SY/Tg1f10Dgx4I/AAAAAAAAAOw/PiXj6h2JAio/s1920-w1920-h1080-c/100409-3657-PinnacleRock3.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-XHORXAoxd1k/Ul2tqkZjs1I/AAAAAAAAGps/H5_HOaP4bLs/s1920-w1920-h1080-c/paoWS.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh4.googleusercontent.com/-HZwlUFyjw3E/UUFRgy6jb3I/AAAAAAAALxA/cfd9Ns083U0/s1920-w1920-h1080-c/Despair.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-2qWDoVHW1Y0/UNFFNq4PEqI/AAAAAAAAyNs/n6GCZIyIIKw/s1920-w1920-h1080-c/IMGP7287.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh4.googleusercontent.com/-InCrrvmnv6E/ToZiCHNNfZI/AAAAAAAAc2s/vTPnWH8kyxk/s1920-w1920-h1080-c/060518-0190-TamBreeze.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-PwjNo1puYPI/U0MiQaw-PxI/AAAAAAAJF3M/gyTiKomggGc/s1920-w1920-h1080-c/Trey-Ratcliff-Milford-Sound-100.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-5E0jD9xU4kU/Tg1brt6WipI/AAAAAAAAc0s/2YRKYYKsEkM/s1920-w1920-h1080-c/061125-1635-Maelstrom3.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-zrMZyIFb_wM/U0_6WbX2k0I/AAAAAAAA2IA/EM_Lt3L7XOg/s1920-w1920-h1080-c/388A1865_HDR.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uxwr24FdX3I/TwZMCaKx4XI/AAAAAAAAQnE/DcLxR0jnfqE/s1920-w1920-h1080-c/IMG_2337.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh3.googleusercontent.com/-8gs5J9HR8yc/UelgWPTpiXI/AAAAAAAAZis/s2g2ivzRzdY/s1920-w1920-h1080-c/DarkSide.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-B5SqCuBNEsk/TjnpasGyBjI/AAAAAAAAEck/Xj6LbTcHnC8/s1920-w1920-h1080-c/GoldenFalls-1920.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-EIEk1-tv81w/TGD0hHBXZEI/AAAAAAAAav0/MfGEerqGlfk/s1920-w1920-h1080-c/IMG_1531.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh3.googleusercontent.com/-KN7d8PlNOxU/UA7HP8WNpTI/AAAAAAAASLc/esv8pSYjYmQ/s1920-w1920-h1080-c/FI4C4577.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh6.googleusercontent.com/-TiuUGmgrIJo/T2fhWrPoAtI/AAAAAAAAX-0/KhLFCt5muZ0/s1920-w1920-h1080-c/RaceTrack-tilted.JPG",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-tmuu1YozMOI/UhrGFkLc3PI/AAAAAAAADlQ/J94soV7MgXM/s1920-w1920-h1080-c/florida-5.jpg",
        "author": "Jim Rowson"
    },
    {
        "url": "https://lh4.googleusercontent.com/-h-vt9eIy_8s/UfcdLIDQOZI/AAAAAAAAIag/9gJ-tqCaWjA/s1920-w1920-h1080-c/Panamint_Dunes.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh4.googleusercontent.com/-aN5bGPX4Rig/UW_esdzHpZI/AAAAAAAAUYo/lhx3gIuY2Tc/s1920-w1920-h1080-c/tempest%2B%25281%2529-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-BqdD6DbXnso/TgtZGH_h6AI/AAAAAAAJA0Q/VNpKkFnn1eg/s1920-w1920-h1080-c/the%2Blonely%2Bgrass%2Bhouse.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-bhHK29YjgVc/T3CquVOc6hI/AAAAAAABFZI/Z-FfTyBzwLI/s1920-w1920-h1080-c/BeanHollow-sunset-surf.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-00ZgxETtHHs/Tl5zMVz704I/AAAAAAAAB-E/2-yvoOVIN3o/s1920-w1920-h1080-c/SkyBird.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh3.googleusercontent.com/-JOT24t6ZLx4/U_yjrKLK2zI/AAAAAAAB-4o/KC0ZWVXh110/s1920-w1920-h1080-c/20140328_Hawaii_2209-Edit-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh4.googleusercontent.com/-WmTFENP7D5Y/TpaO6koPX7I/AAAAAAAAKH4/I9C49D5Hj98/s1920-w1920-h1080-c/IMGP0184.jpg",
        "author": "Sasha Sobol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-8C6-1R0jdzQ/T_s980NGjLI/AAAAAAAAc3U/UoSAcwuW-H4/s1920-w1920-h1080-c/060408-1938-GarrapataFlow.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-a860A9miaZQ/ThtTuOdNWNI/AAAAAAABSE0/tjO54r6kego/s1920-w1920-h1080-c/RHeaRy_402.jpg",
        "author": "Vivienne Gucwa"
    },
    {
        "url": "https://lh4.googleusercontent.com/-G2eUy0RSP0Q/UZXDVvTQx0I/AAAAAAAAH60/wODn9bb1Aog/s1920-w1920-h1080-c/DSC_0404-edited.jpeg",
        "author": "Andrew Brown"
    },
    {
        "url": "https://lh3.googleusercontent.com/-w_It3dmq8_Q/Tr26ZtIDRNI/AAAAAAAAGVg/qOM8lD2pCpU/s1920-w1920-h1080-c/MorningBlue-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-3l1ZJxwb6rI/Tg1czp-9MFI/AAAAAAAAAK0/rdFg0gGfCqg/s1920-w1920-h1080-c/071118-3765-LvrsPtMorn.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-f3E6blFBDVk/Tg0tjUx3BJI/AAAAAAAAgMY/f8tnlRGQisU/s1920-w1920-h1080-c/forest%2Bfog%2Bv2.jpg",
        "author": "Henry Lien"
    },
    {
        "url": "https://lh6.googleusercontent.com/-cQXP45_tLq0/T0m27oIexHI/AAAAAAAAGb8/keNzP_2lN60/s1920-w1920-h1080-c/oil3.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh5.googleusercontent.com/-BWPU-Podeno/UU2Y6mxF_YI/AAAAAAAARAA/9GhrWLIqvSs/s1920-w1920-h1080-c/IMG_2630_HDR.jpg",
        "author": "Grzegorz Głowaty"
    },
    {
        "url": "https://lh5.googleusercontent.com/-3YVsyL2jESM/UO5TbdIB-7I/AAAAAAAALrg/FdPErt8hu5c/s1920-w1920-h1080-c/Fitzgerald%2BStreaks.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-nwpgAk2m0O8/ToM1yp5NLQI/AAAAAAABC64/ExPWPjc-oLE/s1920-w1920-h1080-c/FoggySunrise-HawkHill-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-s-CrcrZfoEY/TzlsdNVcPpI/AAAAAAAAS2I/vgewR4SWII0/s1920-w1920-h1080-c/GGB-SlackersRidge-Sunrise-fog-headlights-wide.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-PFORpB2nRWU/TgtZEBZXStI/AAAAAAAJG78/sg8P1h1FTu4/s1920-w1920-h1080-c/4%2Bhorses.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-LuTnYJ-_AcA/UbdXj-v1fMI/AAAAAAAAFhg/emAw_2y06Ak/s1920-w1920-h1080-c/1-02-12-part2.jpg",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh6.googleusercontent.com/-qqRE8win5yw/UUafTaPaStI/AAAAAAAALxI/WSP8Fpu5P8g/s1920-w1920-h1080-c/Bean%2BHollow%2BSunset%2B2048.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-mWoPAMsZ8qM/TgtZECWsZDI/AAAAAAAJGYQ/mGJ5umfc76I/s1920-w1920-h1080-c/1071616194_the%2Bfarm%2Bof%2Beden.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-RSiJh5g9vqA/T0_ST0uI4SI/AAAAAAAADV0/r6W52GJYgp4/s1920-w1920-h1080-c/David%2BMorrow-11.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-PhwGGpwHldU/UlhL9kOnwoI/AAAAAAAAGeU/ewNH2L2o1PE/s1920-w1920-h1080-c/tree.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh6.googleusercontent.com/-ll7ATwQQOnE/UkPP_YH9WKI/AAAAAAAALoA/_9E2BHedhG4/s1920-w1920-h1080-c/MWF_2155.jpg",
        "author": "Mel Foody"
    },
    {
        "url": "https://lh5.googleusercontent.com/-hDuDewqWJhc/ThYuDF3m4II/AAAAAAABSc8/OMs4oB1Xj6U/s1920-w1920-h1080-c/RHeaRy_465.jpg",
        "author": "Vivienne Gucwa"
    },
    {
        "url": "https://lh3.googleusercontent.com/-lOZvJ3yPdfc/Tg1gbgvj2bI/AAAAAAAAAPc/bgWip6MWRVI/s1920-w1920-h1080-c/101027-4887-TestOfTime.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Ov6cnpCqcKo/Ue52zucefaI/AAAAAAAAZuc/Ya8H97MGDxo/s1920-w1920-h1080-c/DSC_1272-Edit-Edit-2-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-BjCgH3F-OtM/ToojnEsMoHI/AAAAAAAAFNw/RMun2UfSHvI/s1920-w1920-h1080-c/MarshallBeachSunset.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-97xpqb5qg-4/UO5TepJ3YVI/AAAAAAAAE7o/G2jMbprpVD4/s1920-w1920-h1080-c/Hanging%2BLeaf.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-5L66J8m3eOc/US-gTtMRQbI/AAAAAAAAX5c/kyQnx5QiiKw/s1920-w1920-h1080-c/by%2BChris%2BChabot.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Gw74paeyBQ0/TouJkmwcg7I/AAAAAAAA3Ys/3Kk-1AovcuE/s1920-w1920-h1080-c/Evidence.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh5.googleusercontent.com/-oeJbNPb-T-M/UZURZeo6N9I/AAAAAAAAPQU/py94YP9ogqg/s1920-w1920-h1080-c/Chasing%2Bthe%2BSunset.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh3.googleusercontent.com/-KK0a8yX7hUc/TnemEmslOEI/AAAAAAAAG4I/qj90bfgIkqs/s1920-w1920-h1080-c/IMG_1428.jpg",
        "author": "Jeremy Joslin"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Fz5s5Sq3uSc/UqXO06_DNPI/AAAAAAAAhPw/UNBDEnOdEhs/s1920-w1920-h1080-c/DSC_6160-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-GGY-AaDQgJc/UgG4BcMHLWI/AAAAAAAAVgA/pUfLz3uxV-w/s1920-w1920-h1080-c/20130805_mit_and_river_00001-2.jpg",
        "author": "Robbie Shade"
    },
    {
        "url": "https://lh6.googleusercontent.com/-8XtMTUCZA9w/UO5Tjv99GgI/AAAAAAAAE84/--Y7_Pr-tIs/s1920-w1920-h1080-c/Little%2BBit%2Bof%2BParadise.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-OIKJTN2YWhU/TgtZGPb42zI/AAAAAAAJA5c/IY3N83zJARw/s1920-w1920-h1080-c/tree%2Bin%2Bthe%2Bpark.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-qLopnv-fFT0/TxYB5_vxoEI/AAAAAAABFlo/0zpzDJeTYYk/s1920-w1920-h1080-c/_MG_1449.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-4x17JQmbu1s/Ur0CrKBRTzI/AAAAAAAAGH4/t-G8zEmm1jU/s1920-w1920-h1080-c/3K9C4807.jpg",
        "author": "Benjamin Poiesz"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Hhp_SMvb6a0/UOSjNI1cZnI/AAAAAAAAGjU/0XLFokAU-bw/s1920-w1920-h1080-c/IMGP4090-Edit.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh5.googleusercontent.com/-09ABoHtC0j4/TmED5vaJurI/AAAAAAAAF9M/DBiTCNGUIgA/s1920-w1920-h1080-c/090102-0157-BirdRock.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-wMwewnkaerk/UKMcK5ZFpfI/AAAAAAAAKx8/rJ2i755EOyM/s1920-w1920-h1080-c/20121030-%252808_21_49%2529-salisbury-plain-ample-bay-5167-Edit.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-ZVK5-96bzpA/UtTypXkQUHI/AAAAAAAARwI/_iTqNhaMZ6c/s1920-w1920-h1080-c/DSC_8703.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh4.googleusercontent.com/-z3ejUbpYBEo/UgItzN0RkuI/AAAAAAAAwzk/ji4HaCRx_wU/s1280-w1280-c-h720-k-no/13%2B-%2B1",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-ISfFDxxtu-s/U0MkxpnU1rI/AAAAAAAJBQQ/gmuXSo3KcFQ/s1920-w1920-h1080-c/trey-ratcliff-milford11.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-sVAg7ixe6zM/US-gUOy49yI/AAAAAAAAXrM/6iXuvw5XdBw/s1920-w1920-h1080-c/by%2BJoel%2B%2BTjintjelaar.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh5.googleusercontent.com/-V4KqnGwqPtA/Ur0CJf-GmTI/AAAAAAAAGBA/LO0uFjb-Erc/s1920-w1920-h1080-c/IMG_3857-Edit-Edit-2.jpg",
        "author": "Benjamin Poiesz"
    },
    {
        "url": "https://lh3.googleusercontent.com/-iP3tCwa11Jc/TijweNwS-nI/AAAAAAAAJSk/ktZv6uGs6v0/s1920-w1920-h1080-c/Houston%252C%2B5-28-2011-634.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-ZMApajhE4dk/Tm_qPMgcN0I/AAAAAAAAZwQ/785YyByl5hs/s1920-w1920-h1080-c/Not%2BEnough%2BWonder%2Bin%2Bthe%2BWorld.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-9n3C3hJmGGc/UQmHUE2y6RI/AAAAAAAAlfs/6JKtNnI29Uk/s1920-w1920-h1080-c/IMG_1311.jpg",
        "author": "Grzegorz Głowaty"
    },
    {
        "url": "https://lh5.googleusercontent.com/-NZsqwlPxJ08/Ulff-DU9xQI/AAAAAAAAdbg/pJkMnw8uLCk/s1920-w1920-h1080-c/DSC_6743-Edit-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-SJVoHwlizr0/UD-b-BXXbHI/AAAAAAAAJUY/E2t4LVuOhjU/s1920-w1920-h1080-c/GrayWhaleCove.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh5.googleusercontent.com/-LgOFtMvFMrs/T6n8U8BgiaI/AAAAAAAADec/JwuvBwPefJM/s1920-w1920-h1080-c/3550Levitate.jpg",
        "author": "Michael Hawk"
    },
    {
        "url": "https://lh5.googleusercontent.com/-qiK0GrZEcpQ/TtZtCl10xrI/AAAAAAAAHow/WGJu8GP6dmA/s1920-w1920-h1080-c/GGB_DarkMorningWindyFog.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-HiLp9PsqEEg/U0MiTxSu0yI/AAAAAAAJP3w/ZWMfpXVaQVI/s1920-w1920-h1080-c/Trey-ratcliff-toronto-Recovered.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-VGh9JQ9DCzM/Tg1cKU7qBRI/AAAAAAAAAJ4/Dyi6MrlgffU/s1920-w1920-h1080-c/070319-2657-PathToLight.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-UBxJsB_kCVU/UettpK1i2BI/AAAAAAAAK3s/siEVsMTSHIg/s1920-w1920-h1080-c/MWF_6244-7.jpg",
        "author": "Mel Foody"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Fje9gDslRI0/U0_6WU_6rMI/AAAAAAAA2IA/m4PXkm_hAvI/s1920-w1920-h1080-c/388A3363.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-sTiWMAC13YQ/UTmo6ED7v9I/AAAAAAAAWsQ/PfI4WYswhJw/s1920-w1920-h1080-c/DSC_8520.png",
        "author": "Matt Williamson"
    },
    {
        "url": "https://lh6.googleusercontent.com/-z9--AbA5ubA/UfwrClbfIjI/AAAAAAAAS1c/cjBqDVkQiMo/s1920-w1920-h1080-c/20130724-DSC_6280-Edit.jpg",
        "author": "Jeremy Joslin"
    },
    {
        "url": "https://lh3.googleusercontent.com/-YifreVFp77c/UMoTI_wpC6I/AAAAAAAAMRw/6VACc_ubeaU/s1920-w1920-h1080-c/Tufa%2Bat%2BNight.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-YOIwgQ1uXcM/SRGZJ-A3yvI/AAAAAAAADMI/6qvORkHqWS4/s1920-w1920-h1080-c/700_1870.JPG",
        "author": "Alexander Levitskiy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-rnHZE6G5-sk/T5HgcMFmwEI/AAAAAAAARDs/7BrBc3_zc6E/s1920-w1920-h1080-c/110205-7264-GrayWCoveSurf.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-k_dZMBjIKUI/UTv53v4CP-I/AAAAAAAALw4/Rq5XjyU6XVs/s1920-w1920-h1080-c/After%2Bthe%2BStorm.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-skB9ljKV58M/UXp3kiaG3DI/AAAAAAAAgRM/hZ3rTbu1XwU/s1920-w1920-h1080-c/The%2BDream%2BCatcher%2B-%2BPalouse%252CWA.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-H8NDmFzpF_A/TgtZEOagTaI/AAAAAAAIPp0/eTfdvWDBvt4/s1920-w1920-h1080-c/Farewell%2BIndia.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-lJYwk4xQiUA/ULo0GPWaWxI/AAAAAAAAQg0/QAa1NUzuFzU/s1920-w1920-h1080-c/The%2BEdge%2Bof%2Bthe%2BDay%2Bat%2BGarrapata%2BBeach.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh3.googleusercontent.com/-x0qCPDjYL9w/T2Z8tuYaHII/AAAAAAABFXc/empnlAhR_eY/s1920-w1920-h1080-c/SonomaCoast-Arch-surf-longexp.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-bXrGY2Cafa0/TgtZGEzbZDI/AAAAAAAJA5g/JWbeuWkbTLc/s1920-w1920-h1080-c/2398605326_bf7dde0cf7_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-a9TigXwwjtk/UjxD7agyHBI/AAAAAAAAcws/SsypFxOntFA/s1920-w1920-h1080-c/DSC_2099-Edit-2-Edit-Edit-Edit-Edit-Edit-2.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-vuMxvWwikX4/UkOmyv5oUTI/AAAAAAAALmA/KyVRXS8HVsQ/s1920-w1920-h1080-c/MWF_8382-3ps.jpg",
        "author": "Mel Foody"
    },
    {
        "url": "https://lh3.googleusercontent.com/-LuG3-JsAEls/UO5TnfNrKjI/AAAAAAAAE-I/k0OqnhHevYs/s1920-w1920-h1080-c/Moving%2BRock.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-HjafRBCDM8A/TkwDAvYSuPI/AAAAAAAARuU/jSvW7LiFHm4/s1920-w1920-h1080-c/Murmurs%2Bof%2Bthe%2BHeart%252C%2BPlate%2B4.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh5.googleusercontent.com/-w0MmDQv7rvc/UdtSzEBp38I/AAAAAAAATLM/bUYXgdTwM4E/s1920-w1920-h1080-c/Low%2BTide%2BTextures%2Bat%2BLittle%2BHunter%2BBeach.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh5.googleusercontent.com/-txUs9Q95dM8/U0MR9lvvDNI/AAAAAAAJIA8/vY9TD4TiPzw/s1920-w1920-h1080-c/A%2BView%2Bfrom%2Bthe%2BRanch%2Bin%2BArgentina.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-bPOoudXULu4/UgOWLbio5UI/AAAAAAAAawU/Ma_pYxO79dY/s1920-w1920-h1080-c/DSC_2421-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-5uz5EzVcvNU/UEpN7gJg2nI/AAAAAAAAI7s/-Xwxg57SCn0/s1920-w1920-h1080-c/inverness-to-istanbul-00077.jpg",
        "author": "Robbie Shade"
    },
    {
        "url": "https://lh3.googleusercontent.com/-465XgZS4LQo/UOuDAiDRcrI/AAAAAAAAKng/4m7maZotsgg/s1920-w1920-h1080-c/SanGregorioCliffReflection.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-U0yjKIXF2fs/U0MjfTbjf1I/AAAAAAAJEbY/MkqCoe1DfG4/s1920-w1920-h1080-c/santa-cruz-trey-ratcliff.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-pcOMMd6OI2o/Uiw3WADukxI/AAAAAAAATJo/GtXGDlprXqM/s1920-w1920-h1080-c/Chrysler%2BBuilding%252C%2BNYC.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh3.googleusercontent.com/-zX2lLT2UczY/UoGKomezWaI/AAAAAAAAVqs/1d5RcSpIeqk/s1920-w1920-h1080-c/SecondBeach2.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh5.googleusercontent.com/-7Zi62qJ-NNg/Tg1bfusNzfI/AAAAAAAAAJA/P4bDaf-68Ys/s1920-w1920-h1080-c/061122-1421-LtAtEndOfPier.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-vA0vdrM3_ro/UnDyzCqXFaI/AAAAAAAAGxw/GAtvLCwZbAM/s1920-w1920-h1080-c/_SUE4322.jpg",
        "author": "Martin Suess"
    },
    {
        "url": "https://lh4.googleusercontent.com/-bkNEhcz00Z8/U0MZQ3MdO3I/AAAAAAAJGy4/S-coTfmsQfE/s1920-w1920-h1080-c/The%2BBamboo%2BForest.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-o_PverS3j18/URzejiclpcI/AAAAAAAFFuw/Vuba_zjj0PI/s1920-w1920-h1080-c/Last%2BLight%2Bat%2BGarrapata.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-OfMrsi0J6OE/TvNVvRo18YI/AAAAAAAAKVU/2ujQTeUYDtA/s1920-w1920-h1080-c/060518-0179-TamRedwoods.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-9P50g_XwKdI/UVaDJFo8Q9I/AAAAAAAAEfA/fwhphg7LPtA/s1920-w1920-h1080-c/bubble_junky.jpg",
        "author": "Eric Guevremont"
    },
    {
        "url": "https://lh5.googleusercontent.com/-tyOlTzJRvmw/UpBQXuuK_JI/AAAAAAAAD_0/PL7enPiYUT8/s1920-w1920-h1080-c/DSC02146%2BRed%2BPlant.jpg",
        "author": "Dominik Behr"
    },
    {
        "url": "https://lh5.googleusercontent.com/-YHEf8jl_LDg/Tgxgtdub2iI/AAAAAAAAAMQ/zmkWf0WkFTI/s1920-w1920-h1080-c/01_MG_3677.jpg",
        "author": "João Pedro Gonçalves"
    },
    {
        "url": "https://lh5.googleusercontent.com/-C1RSakcv1dU/TzCvquGq9DI/AAAAAAAAGD0/hPAJn5frb-o/s1920-w1920-h1080-c/Engagement-2567.jpg",
        "author": "Erika Thornes"
    },
    {
        "url": "https://lh6.googleusercontent.com/-feW_gVKW6j8/UI5fg6xQBXI/AAAAAAAAWQY/DIOuGTieAMM/s1920-w1920-h1080-c/RedTide.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-DSLWRXoXU78/UGepJ162NSI/AAAAAAAAPq0/q33XGA1DKHI/s1920-w1920-h1080-c/IMG_2452.jpg",
        "author": "Henry Lien"
    },
    {
        "url": "https://lh4.googleusercontent.com/-lR3vG062kEk/Tg1fjlh053I/AAAAAAAAAOc/Sv1zKPXPkPQ/s1920-w1920-h1080-c/091220-2536-TheCurl.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Q1AA5A9uiYU/U0MkdTp90YI/AAAAAAAJJIw/SuamKxYgwts/s1920-w1920-h1080-c/trey-ratcliff-close-to-tepako-new-zealand.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Hqmu2H_l2XY/SwIysuFOIiI/AAAAAAABLWk/W9rX5qlmk4c/s1920-w1920-h1080-c/DSC_6837_CropBrightContrast.JPG",
        "author": "Jean-Christophe Lilot"
    },
    {
        "url": "https://lh3.googleusercontent.com/-uk3X52XK3rg/URqc-c9_xcI/AAAAAAAAQLo/x0bOb_WsjE0/s1920-w1920-h1080-c/IMG_0725.jpg",
        "author": "Grzegorz Głowaty"
    },
    {
        "url": "https://lh3.googleusercontent.com/-VZ8vGJ6Qfvc/Tg1bgCMJ1HI/AAAAAAAAAJE/QMa5LYy7phM/s1920-w1920-h1080-c/061121-1389-UndPierHanalei.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-eCSjsP08EcA/T_0K5wVePeI/AAAAAAAARxk/I-Qx3ciOzUE/s1920-w1920-h1080-c/20100924-IMG_5794-HDR-Edit.jpg",
        "author": "Brian Matiash"
    },
    {
        "url": "https://lh3.googleusercontent.com/-dC0w7LzozKU/UQHmKMFBVEI/AAAAAAAALuM/I16og01x0Ao/s1920-w1920-h1080-c/Secret%2BCove.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-N7h4Iit041g/U0MUZ6H8WdI/AAAAAAAJKok/V-IfPQ_XXK4/s1920-w1920-h1080-c/Farewell%2BSan%2BFrancisco.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-JP3zdT38UJI/UPNRH9qPXBI/AAAAAAAAfWY/tNG_UYaC8Gg/s1920-w1920-h1080-c/IMGP1485-Edit.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh3.googleusercontent.com/-GCr_cZIif7g/Tnarp7XhOMI/AAAAAAAABPU/WNrHyAJOLNA/s1920-w1920-h1080-c/stream.JPG",
        "author": "Gretchen Chappelle"
    },
    {
        "url": "https://lh3.googleusercontent.com/-0DC0pkVJw5g/Tg1cjeX4YpI/AAAAAAAAAKc/bNEDQtv0J4A/s1920-w1920-h1080-c/071110-3579-HvnsGate.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-WhiIbcFeKrE/UNw77NZO40I/AAAAAAAALqU/58Bu7TncSjM/s1920-w1920-h1080-c/The%2BCave.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-m-0LmCqZxSo/Tg1gLoaJJKI/AAAAAAAAAPI/KNkzyqLgUa0/s1920-w1920-h1080-c/100726-4239-LightAtAhalanui.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-4026KDnYCqc/ThYb2MMKRLI/AAAAAAABSEs/3N3nOtyl_lI/s1920-w1920-h1080-c/RHeaRy_380.jpg",
        "author": "Vivienne Gucwa"
    },
    {
        "url": "https://lh6.googleusercontent.com/-OwU2batkg6A/TrbvnMATI7I/AAAAAAAAF3w/q_7_jgF0ngE/s1920-w1920-h1080-c/CrissyField-SaltMarsh-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-mGgW1ovI2PE/U0Mjzq2YJuI/AAAAAAAJA0o/aLuxOVgUjlY/s1920-w1920-h1080-c/tekapo-new-zealand-trey-ratcliff-2.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-patMHu2oyfs/RJBWFz5TABI/AAAAAAACnSo/ZP9KYfCSFM8/s1920-w1920-h1080-c/p1000284.jpg",
        "author": "Dave Cohen"
    },
    {
        "url": "https://lh4.googleusercontent.com/-_p1iKjPzjGc/TIW63f_px1I/AAAAAAAAOck/NCDLhcVRam8/s1920-w1920-h1080-c/IMG_2617.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh4.googleusercontent.com/-FTGbjO5omdQ/UZN9QSHfH3I/AAAAAAAALJc/onwS9Caanto/s1920-w1920-h1080-c/bike-9.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh3.googleusercontent.com/-NeMzsWIU6RU/UZURZR7U_aI/AAAAAAAAgSY/-AtSrt0ig5Q/s1920-w1920-h1080-c/8280686512_7820f388dc_k.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-lq04FFj_KIE/UIWF420LCDI/AAAAAAAAwHM/IXvSQ8wMzmk/s1920-w1920-h1080-c/ToxawayLake.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-9Nj6ilPU0NI/Ts9Gk0pfW_I/AAAAAAAAD4I/GWbtz0c91tE/s1920-w1920-h1080-c/DSC02700.JPG",
        "author": "Gretchen Chappelle"
    },
    {
        "url": "https://lh4.googleusercontent.com/-jTQjx2iGz84/U0_6WWCDwxI/AAAAAAAA2IA/FmHhYqwC0Y8/s1920-w1920-h1080-c/388A6457.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uk4W-F3OXbM/Tqwm9e_vuJI/AAAAAAABFcE/zPYFePKqTxs/s1920-w1920-h1080-c/TufaSunset-1-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-7ZuJOGpJ5-0/UHRHfwcGEUI/AAAAAAAAKsU/s31OrXjVZ9A/s1920-w1920-h1080-c/P1142336.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh3.googleusercontent.com/-49Av-ZEwnzM/UFni18NCwpI/AAAAAAAAdYk/axOjoxNm428/s1920-w1920-h1080-c/120917-Coit1920.jpeg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-GLI6OIXGcq4/UHtyC6FCcgI/AAAAAAAAQ8I/c0KEb2GpFo4/s1920-w1920-h1080-c/Exposed.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-YxXTf0j_MTQ/UtTwF4t9yEI/AAAAAAAAW8g/dYsGmWzs81Y/s1920-w1920-h1080-c/Glacier%2BPoint%2BMilky%2BWay%2BPanorama.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-gBb9HtLb3zw/U_yjyTFvcAI/AAAAAAAB-64/G_Jt5mnm-mU/s1920-w1920-h1080-c/_DX_6908_09_10_11_32bit-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-yCO0vebn5x0/UFBrOZtDNZI/AAAAAAAAJO8/jX4MgPfHQbE/s1920-w1920-h1080-c/inverness-to-istanbul-00177.jpg",
        "author": "Robbie Shade"
    },
    {
        "url": "https://lh5.googleusercontent.com/-59MYsAxhB_I/UtTzqg1a7VI/AAAAAAAAWds/BLWELYZHUWE/s1920-w1920-h1080-c/DSC_0554.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-p4V1WVO8Dhw/UBSl6P5W35I/AAAAAAAAPdg/UFIS4M1KDBE/s1920-w1920-h1080-c/Blue.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-5IpprOs0T78/T3PwhE-VJ9I/AAAAAAAAYzA/-2X-oY9C3N0/s1920-w1920-h1080-c/BayBridge-night-mono.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-vCDzgd8tRpg/UGSfn6BZeCI/AAAAAAAAM4g/Ooi26GvJ_fc/s1920-w1920-h1080-c/_dsc9194-edit.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh4.googleusercontent.com/-mv9J8ga_tWI/Tj8WkTOrASI/AAAAAAABUhg/ZsO6MehpN-0/s1920-w1920-h1080-c/Hanging%2Bfrom%2Bthe%2BChandeliers%2BSame%2BSmall%2BWorld%2Bat%2BYour%2BHeels.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh6.googleusercontent.com/-utp4ouvAO10/Ud6okYh24yI/AAAAAAAAYrg/fRr-tnaqxBI/s1920-w1920-h1080-c/DSC_9645-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-bCmJvz5jD9s/U_yj0wk6KLI/AAAAAAAB-7s/t7dIu3T7nvw/s1920-w1920-h1080-c/_X7A8818-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh3.googleusercontent.com/-8GqcqFQGtvY/ThZQlU7nDhI/AAAAAAAAEXc/F_yh36G40vM/s1920-w1920-h1080-c/Tell%2BMe%2BThat%2BYour%2BLove%2BFor%2BMe%2BWill%2BNever%2BBe%2BDead-3.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Pg1HXtyXBZ0/UGHWhKaSrhI/AAAAAAAASZE/q3omNbvxCJU/s1920-w1920-h1080-c/FI4C6008.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh3.googleusercontent.com/-boXHwu7eW_g/UjjGBMhSzwI/AAAAAAAANJE/9w555NqrJws/s1920-w1920-h1080-c/10-13-12highres.jpg",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh4.googleusercontent.com/-gKcKe_o5slw/RapYX1Oyx0I/AAAAAAAAa9Q/P9rYqEPs7dc/s1920-w1920-h1080-c/P1080441.JPG",
        "author": "Sasha Sobol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-PtAU0On5OII/Tr8FOZ3yVuI/AAAAAAAAGY4/IYyAYzHZzo0/s1920-w1920-h1080-c/Seal_Rocks-centered.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-8nA73JnvHSg/T5YOYxpuwOI/AAAAAAAAEhA/ShFBObBiLT4/s1920-w1920-h1080-c/David%2BMorrow-1-5.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh4.googleusercontent.com/-129Q91osfKU/UKsTjV0_Q0I/AAAAAAACKD0/ejMXCx6_w14/s1920-w1920-h1080-c/IMG_3144-3.jpg",
        "author": "Kushagra Shrivastava"
    },
    {
        "url": "https://lh6.googleusercontent.com/-fcUdSJXGEdU/Tm7LgNdHxvI/AAAAAAAADY4/qxF_Pvzf5-Y/s1920-w1920-h1080-c/Basses2.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh3.googleusercontent.com/-7wj7ipdaCbI/U_yj0qysNgI/AAAAAAAB-7k/dl8d2M4N5vE/s1920-w1920-h1080-c/_X7A5208-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-dELtU2dJO3s/UelgDtAVclI/AAAAAAAAZiU/zb5ywUbdfZ0/s1920-w1920-h1080-c/theedge.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-vK7sTdwps8g/UKPHFTynz-I/AAAAAAAARas/_RETAXGVU9g/s1920-w1920-h1080-c/Red%2Bby%2BAlistair%2BNicol.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-DArub5w7veQ/ToyVWFUZ5bI/AAAAAAAABJs/NL4PjtDKI90/s1920-w1920-h1080-c/David%2BMorrow-1-28.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-MCafikFkHf4/UKPwjzPXn_I/AAAAAAAAyQs/zbEtDS6EZMs/s1920-w1920-h1080-c/IMGP8440.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh5.googleusercontent.com/-rQ9SZ0dfJ_I/UtTzyqBufcI/AAAAAAAAOj4/zAOnrvu9aG8/s1920-w1920-h1080-c/Silver%2BLake%2BStarTrails.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh4.googleusercontent.com/-fOXNAoVsl2E/UONnO-Zp2zI/AAAAAAAAyPo/kjEzrMZXylk/s1920-w1920-h1080-c/IMGP7962.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh3.googleusercontent.com/-q2yAJwhwIic/Th0QR-JaxiI/AAAAAAAABCo/YIGFyyYRXBI/s1920-w1920-h1080-c/untitled-19.jpg",
        "author": "Alan Shapiro"
    },
    {
        "url": "https://lh3.googleusercontent.com/-cjUv9eE6oRE/Tg1dXWtEjRI/AAAAAAAAc1E/ScCXWwu6HbM/s1920-w1920-h1080-c/080229-4653-GraytonStream.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-x838dk0Z5UE/UaXxyeQ21gI/AAAAAAAAm-o/7OSZeQrHSO0/s1920-w1920-h1080-c/DSC_6902-Edit-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-oWXc6hihoxM/UAQ2flp_ioI/AAAAAAAAgLE/wL2UgiGSdRk/s1920-w1920-h1080-c/Lupines.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh3.googleusercontent.com/-WezQ8ChK1Io/Uk4CMLzsLuI/AAAAAAAAJpQ/z2kY1WLZm8U/s1920-w1920-h1080-c/Hot%2BSand.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-k1-SvxtkRaI/TzW2PE5LU_I/AAAAAAAA14A/JuGDMoDvbCQ/s1920-w1920-h1080-c/BayBridgeSunrise-LE.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-ArQa9VITcnY/UAouyPek9jI/AAAAAAAAJ5s/4RM43r1aI58/s1920-w1920-h1080-c/IMG_1564-1.JPG",
        "author": "Luke Ravitch"
    },
    {
        "url": "https://lh5.googleusercontent.com/-fJVeA8ZcZSU/UAbPQdXxfbI/AAAAAAAAgLI/tIVVrrPINVs/s1920-w1920-h1080-c/Iceland.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh3.googleusercontent.com/-qgrD43YBcXk/TlJ4-bA_XPI/AAAAAAAAc2k/OieTCvSeDQA/s1920-w1920-h1080-c/070823-3044-PinnacleRock1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-B4s7SDef3U8/TwttGH3PVKI/AAAAAAAAR8k/Gp5uWnBs4JE/s1920-w1920-h1080-c/the%2Btrane%2Band%2Bthe%2Bpharoah.jpg",
        "author": "Brian Day"
    },
    {
        "url": "https://lh6.googleusercontent.com/-F44_mY6bA2c/UaiW3nWnsrI/AAAAAAAAWKk/pVPuQcy_ygQ/s1920-w1920-h1080-c/DSC_6930-Edit-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-hs9pldJQseQ/Tw9Z3Mea0PI/AAAAAAABFTs/u8KBBQQ9At4/s1920-w1920-h1080-c/Funston-Sunset.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-ouB3hbNdnVY/Tzlw8hO_W7I/AAAAAAAAAVQ/GNAVkaDa0lw/s1920-w1920-h1080-c/IMGP0913.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh3.googleusercontent.com/-wFqcH25l4-k/T9iiAqxUuMI/AAAAAAAAXhY/yo1c2xFs75g/s1920-w1920-h1080-c/050518-2044-KeeEvening.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-weHoTQAURX0/UErVyAsqYJI/AAAAAAAAPO4/6Kdr9pL7qls/s1920-w1920-h1080-c/IMG_1064-2.jpg",
        "author": "Henry Lien"
    },
    {
        "url": "https://lh6.googleusercontent.com/-YiCUO9G6Vfg/ULgv8pQPeGI/AAAAAAAAD-k/NGhYvPuu5bc/s1920-w1920-h1080-c/IMGP5017.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-JkxqJu_ZG6I/Tg1b6ZErN-I/AAAAAAAAAJk/sD_vHpTz-hU/s1920-w1920-h1080-c/061228-2049-UTPScripps1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-o11hGOKretw/Tg1cW-5ZUOI/AAAAAAAAAKQ/bz8-ylAE0_A/s1920-w1920-h1080-c/071010-3287-SausMorn1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-uw6YFcXJKbo/U0MgUuctfgI/AAAAAAAJEXg/rLxRH7N4ths/s1920-w1920-h1080-c/Trey%2BRatcliff%2B-%2BNew%2BYork%2B-%2BInception.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-lEy_31bnK1A/TyYVYFaoUxI/AAAAAAAAPxc/_4v9O3EKy6c/s1920-w1920-h1080-c/LandsEnd-Sunset.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-MjADvnIjxV0/U0MdmA5ytOI/AAAAAAAJKn4/0ZUjaXODMKA/s1920-w1920-h1080-c/The%2BSpires-2.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-4gvirpq7Z4I/T3XFAicaCxI/AAAAAAAAPjU/AgNim9VX8K0/s1920-w1920-h1080-c/100722-4061-LaupahoehoeCove.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-AR4eJKeFOyU/ToywYB2z2XI/AAAAAAAC-7E/EaLfIMB9kb0/s1920-w1920-h1080-c/TheMomentAfterSheLeft.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh5.googleusercontent.com/-lrqZ6BqyciM/Tx_xZWCgcJI/AAAAAAAATYA/u9oyMwbXT3o/s1920-w1920-h1080-c/Seal%2BCove.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh6.googleusercontent.com/-xbmT1vIDvZc/UZURZTZzmhI/AAAAAAAAgSo/f1msNjQ2YSw/s1920-w1920-h1080-c/32%2BHours%2B%2526%2BCounting.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-_xQ6opNRsjQ/TmjGeIjNPxI/AAAAAAAAYRY/hu0v_bXVbcY/s1920-w1920-h1080-c/California%2BState%2BFair%2B2009-395.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh3.googleusercontent.com/-p3UZPEXa-g4/UQHvlG71-3I/AAAAAAAALuU/gryte_D143c/s1920-w1920-h1080-c/Ripples.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-IPbUv2dc9E4/Ugotamqb0xI/AAAAAAAAbME/zTVKgdkCdRY/s1920-w1920-h1080-c/DSC_2018-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-tFk1NsophJc/UqWc4p6NF9I/AAAAAAAAHws/4zvvKSi-qRk/s1920-w1920-h1080-c/MSU_9976.jpg",
        "author": "Martin Suess"
    },
    {
        "url": "https://lh3.googleusercontent.com/-FkWjIG6vjPA/ULwIs34zq5I/AAAAAAAALVk/vLO8nn0LRXo/s1920-w1920-h1080-c/20121026-%252812_10_32%2529-cumberland-bay-3122-Edit.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-LNdj11zIg3c/TkCpecqI2cI/AAAAAAAAAQQ/tumWzhv4WWU/s1920-w1920-h1080-c/mendocino-21.jpg",
        "author": "Jim Rowson"
    },
    {
        "url": "https://lh3.googleusercontent.com/-5-bmm_yEw8Q/ToaN8JLAR1I/AAAAAAABC7I/eMpXTtyj67Y/s1920-w1920-h1080-c/Reef-mono.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh5.googleusercontent.com/-BZdFp25ow2A/UO5T2-ybjWI/AAAAAAAAFDE/ebHbSPV2Jlo/s1920-w1920-h1080-c/Valley%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Lgovjq61QJU/ULYz4W5rQQI/AAAAAAAAQVA/MnFx_4QgSuw/s1920-w1920-h1080-c/Changing%2BLight%2BOver%2BGarrapata%2BBeach.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh4.googleusercontent.com/-wWAxuHAMqWo/UZURZU59sUI/AAAAAAAAPOY/bxIdsdlg4DE/s1920-w1920-h1080-c/Dreams.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-_7emm-uy2UI/UME0pfuDKtI/AAAAAAAAEdY/Bd5FeJ4avDM/s1920-w1920-h1080-c/IMGP7962-2.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh4.googleusercontent.com/-D-a8TeEMxVU/T0u5OcN_KcI/AAAAAAAAQ3A/buaoFgy2i-Y/s1920-w1920-h1080-c/IMG_2705.jpg",
        "author": "Brandon Falls"
    },
    {
        "url": "https://lh3.googleusercontent.com/-F3PyWBuTa9A/Txo6n6KVzRI/AAAAAAABFQ4/bhv0lJobcUE/s1920-w1920-h1080-c/SutroSunset-WaterfallRock.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-x4y2TvRrOug/Uk4CB5VijtI/AAAAAAAAMR0/pIxmQdmYxHw/s1920-w1920-h1080-c/Dark%2Bvs%2BLight.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-LU82H2zqqcE/Utl6FE67exI/AAAAAAAAICU/NYDKzdArJ68/s1920-w1920-h1080-c/Screen%2BShot%2B2014-01-17%2Bat%2B9.32.50%2BAM.png",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh5.googleusercontent.com/-m6gJXedR5K0/Tg1bJIJrdDI/AAAAAAAAAIk/luzGf-NHcC0/s1920-w1920-h1080-c/060820-0818-ThePhotogs.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-VJzzCp_tzFo/UpoDZCkFH_I/AAAAAAAAc7E/3_qQAsveH00/s1920-w1920-h1080-c/110627-8240-Myst.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-r6FVbIshHi4/UgJ7nWMESWI/AAAAAAAACy8/GO5WxpDNIUM/s1920-w1920-h1080-c/DSC_9065.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh5.googleusercontent.com/-F33Ezsq01cw/TgkRlUvin5I/AAAAAAAI6wA/g434OYIBJiA/s1920-w1920-h1080-c/Portofino2.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-QOLm5NyrBAg/Tg1hGjt7CQI/AAAAAAAAc2A/oW-ErAUPpKY/s1920-w1920-h1080-c/110521-8046-PacificaLt2.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-QVbxD_ZZCa0/U_yjxBJn4WI/AAAAAAAB-6k/fAnDqFKCfh4/s1920-w1920-h1080-c/_DX_3511_2_3_4_5_32bit-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-vopmIeMOqIU/UsuelJcRx0I/AAAAAAAAIQk/8HllXmvftuY/s1920-w1920-h1080-c/CC%2B-%2BSunrise%2Bat%2BMiami%2BBeach.jpg",
        "author": "Karthik Ravindran"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uNim7D5ywdM/UqTGRcbr78I/AAAAAAAAXKY/2Fv7yLI2kZc/s1920-w1920-h1080-c/C21T0880.jpg",
        "author": "Michael Fang"
    },
    {
        "url": "https://lh3.googleusercontent.com/-x1RrL5wbWWo/UcnrHfyETwI/AAAAAAAAC0g/kcwDMpFLFBo/s1920-w1920-h1080-c/213125_1600x1200%2B%25283%2529.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh4.googleusercontent.com/-FNrstx8M7hY/TyH51o60WuI/AAAAAAAAGTY/3nRvYRuPjEU/s1920-w1920-h1080-c/Pescadero.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh4.googleusercontent.com/-2CDL-fq1YuU/UMzZVMona_I/AAAAAAAAyQc/B2bUWHwc4a0/s1920-w1920-h1080-c/Startrails_Nov3.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-I7qT8fiUqZU/TgkSotvmFkI/AAAAAAAI6h0/ASyt4FPWAso/s1920-w1920-h1080-c/Temple%2BOver%2BKyoto.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-dJgpQyZK89k/UQOBedpoASI/AAAAAAAALuk/kWhI3-xIX1w/s1920-w1920-h1080-c/reunion.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-7FTPwrBoDBs/Ufb1a1gM-UI/AAAAAAAADK0/NrOPNAfCG7I/s1920-w1920-h1080-c/DSC_4154b.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh6.googleusercontent.com/-JLMulqzQsQQ/UqBrOg83JWI/AAAAAAAAgsY/vzUeMdvC-h0/s1920-w1920-h1080-c/DSC_0663-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-IevMmNQigxY/Uc3F-z0I5qI/AAAAAAAAItw/eRKlk6yr6TY/s1920-w1920-h1080-c/GGB_130628_MCu_1-2.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh4.googleusercontent.com/-SUKN-r5lw5A/Tg1fNM6yIEI/AAAAAAAAAN8/PULlaJpHBkI/s1920-w1920-h1080-c/090810-1930-NeedleAndHaystack.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh3.googleusercontent.com/-vtVHPLJKT3w/T9KLSzUhuOI/AAAAAAAABiY/3a5M4phhFs0/s1920-w1920-h1080-c/2012.%2Bpurple%2Bis%2Bmy%2Bfavorite%2Bcolor.jpg",
        "author": "Elena Solomon"
    },
    {
        "url": "https://lh6.googleusercontent.com/-55UeILqE2s0/T0PDELei3HI/AAAAAAABFbU/4_nqVtef2m8/s1920-w1920-h1080-c/SealRocks-sunset-reflection.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-sAv5_U_Ruj0/UKmUpf47ApI/AAAAAAADw8w/fJFIGDHSxLU/s1920-w1920-h1080-c/20121024-%252808_52_33%2529-right-whale-beach-1842-Edit.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-XxP1oir93Fg/U0MW6gL3miI/AAAAAAAJA0U/hP0D1e9JC-w/s1920-w1920-h1080-c/New%2BYork%2B-%2BNEX7%2B-%2BTrey%2BRatcliff%2B%25288%2Bof%2B21%2529.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-mjNGUjWQFHc/UhhscU7WuPI/AAAAAAAATJk/A0bk2bEc-c8/s1920-w1920-h1080-c/Full%2BMoon%2BPull%2B1.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh5.googleusercontent.com/-04JglLQCFT8/T6GOUvWNO0I/AAAAAAAAiVY/kbOl6qvwKVY/s1920-w1920-h1080-c/David%2BMorrow-1.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-emfqCBNSX20/T7LJkVJeh-I/AAAAAAAAUM0/8YmQs3cs1nw/s1920-w1920-h1080-c/061226-1970-SantaMonicaSpn2.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-d6Jpt55R8Jk/UeUFbFHWC0I/AAAAAAAAMRw/n-wIpeIqXLc/s1920-w1920-h1080-c/Bryce%2BCanyon.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-uR5II-Ijj6U/TlGPDcJxVJI/AAAAAAAATJQ/v4dDy4iMAbo/s1920-w1920-h1080-c/Rainy%2BDays%2BWatching%2BMovies%2BIn%2BBed%2BWith%2BYou.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Gp7BKH79U6k/T_rPHeEUv4I/AAAAAAAAPL8/LSoFOwB9QNU/s1920-w1920-h1080-c/Patience.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-tnR2GwYBqOc/Undw8snKZjI/AAAAAAAATLQ/pQ519VN9CX4/s1920-w1920-h1080-c/Birch%2Band%2BOak%2BLeaves%2BILM%2BAbstract.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh4.googleusercontent.com/-RZKOyMbLobw/UONnVGAE9tI/AAAAAAAAyPM/60as7LUVuHI/s1920-w1920-h1080-c/IMGP8828.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-9716Bwr-5Y4/T0kPYgsWxnI/AAAAAAAAM-g/kl-lkPpwX-w/s1920-w1920-h1080-c/SanGregLight1800.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh4.googleusercontent.com/-oYOr7AcS0F4/UZUYFMNixiI/AAAAAAAAGL0/6fp4ZSWjH90/s1920-w1920-h1080-c/5-01-13-spider-crawler-lightning-road-albany-tx.png",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh4.googleusercontent.com/-4wJlrgKnUsI/U0MZbQCL-5I/AAAAAAAJOwE/yL0yy2OMWtI/s1920-w1920-h1080-c/The%2BBlue%2BCity.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-vZdfIWcvnhY/TnyLvq6DPpI/AAAAAAAAgiQ/NKRZZvFKvR0/s1920-w1920-h1080-c/One%2BTrick%2BPony.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh5.googleusercontent.com/-GC7USQu7t-8/UPSscZYnrUI/AAAAAAAAB5w/DHTn38KC8Ng/s1920-w1920-h1080-c/POD%2B2013-01-13.jpg",
        "author": "J.F. Unson"
    },
    {
        "url": "https://lh5.googleusercontent.com/-9oo0Fg4_Jpc/UNE8v9jIKSI/AAAAAAAAyRc/5EpBopF519w/s1920-w1920-h1080-c/IMGP7317_18_19_20_tonemapped.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-_OVIBu35BFs/UOD9ybxkzmI/AAAAAAAAkNo/YyQXlMNgeEk/s1920-w1920-h1080-c/06152012-12.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh4.googleusercontent.com/-2aSwMRqvR1g/UO5TSw3ukII/AAAAAAAAE4s/mrqAFHOapp8/s1920-w1920-h1080-c/Antelope%2BHallway.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh6.googleusercontent.com/-lqDTb1TDOgQ/T1jLj4GqltI/AAAAAAAADlQ/l-JqlEm2U3Y/s1920-w1920-h1080-c/David%2BMorrow-22.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-onm54VnIRFQ/SBnwVTP3Y4I/AAAAAAAAvJc/jJxlxmTu5t8/s1920-w1920-h1080-c/D30_0895.JPG",
        "author": "Alexander Levitskiy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-TKsDKeRS95U/Tkrw6TiAyPI/AAAAAAAC4HY/bygELaJa5-s/s1920-w1920-h1080-c/Metal-1.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh6.googleusercontent.com/-b_ZyO6A8eec/UNcwXdvdtMI/AAAAAAAAR4k/YcThGSa1EHE/s1920-w1920-h1080-c/DSC_0300.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Mc32ZHV--b0/SwIy9sStc0I/AAAAAAABLXg/AB-YvtyK-wk/s1920-w1920-h1080-c/DSC_6868.JPG",
        "author": "Jean-Christophe Lilot"
    },
    {
        "url": "https://lh5.googleusercontent.com/-EUrlRFim4uQ/Uo5D2fBJduI/AAAAAAAABZU/73PLVw3Xxk0/s1920-w1920-h1080-c/class3_05.JPG",
        "author": "Cheng Ee"
    },
    {
        "url": "https://lh3.googleusercontent.com/-_SFDsIPPKzI/TxhNwgko__I/AAAAAAABFhY/uz_fTrjtNFg/s1920-w1920-h1080-c/MarshalBeach-sunset-rocks-.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-WrzPVL3SMFs/Uq-D3XLVHUI/AAAAAAAAPBY/JQpQw38ggyM/s1920-w1920-h1080-c/_O9V5569_HDR.jpg",
        "author": "Sridatta Chegu"
    },
    {
        "url": "https://lh6.googleusercontent.com/-n8kCRwIAl3I/U0MlTxDHALI/AAAAAAAJEL0/VwbBzYmP0nQ/s1920-w1920-h1080-c/trey-ratcliff-road-to-mountain-forever.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-6Ucgze7TOT4/UO5TcOkC0nI/AAAAAAAALro/nmJwsIpdl_o/s1920-w1920-h1080-c/Foggy%2BSunset.jpg",
        "author": "Romain Guy"
    },
    {
        "url": "https://lh4.googleusercontent.com/-grccgI_cL8k/TwH0-_dHIvI/AAAAAAABFbM/sqNxtA-Gi30/s1920-w1920-h1080-c/RodeoBeach-sunset-16x9.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-XZGw1LIoIQk/Ua2ANshiwmI/AAAAAAAAfX8/PIcgUJRHb3M/s1280-w1280-c-h720-k-no/Sky%2BPainting",
        "author": "Apurva Mathad"
    },
    {
        "url": "https://lh4.googleusercontent.com/-dKrL8_a8MmE/UrWktdbZX_I/AAAAAAAAilY/2Ce0qzN9r3s/s1920-w1920-h1080-c/DSC_0816-Edit-Edit-Edit-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-NvzWYFZm9b0/UQmFrRIGaDI/AAAAAAAAlew/em5aqVHnV3M/s1920-w1920-h1080-c/IMG_1204.jpg",
        "author": "Grzegorz Głowaty"
    },
    {
        "url": "https://lh6.googleusercontent.com/-9SBIVQE_N98/UnDyKXBM-VI/AAAAAAAAGw8/JRqWBIObFek/s1920-w1920-h1080-c/_MSU8463.jpg",
        "author": "Martin Suess"
    },
    {
        "url": "https://lh4.googleusercontent.com/-oVqvzpNBaE8/UlmYCAD6pNI/AAAAAAAAQPQ/xDn8iGotkyo/s1920-w1920-h1080-c/DSC_4067.jpg",
        "author": "Amarpreet Singh"
    },
    {
        "url": "https://lh6.googleusercontent.com/-SzwsBTne5SM/U_yjvpyvA6I/AAAAAAAB-6A/q0imuvbf0Yw/s1920-w1920-h1080-c/_D3_0763-Edit-Edit.jpg",
        "author": "Colby Brown"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uXesNMoRpN8/U08k4CCBTsI/AAAAAAAAvr0/7ZtIaGpNfHU/s1920-w1920-h1080-c/IMG_4772%2Bp4.JPG",
        "author": "Ziv Horesh"
    },
    {
        "url": "https://lh4.googleusercontent.com/-zI3eI5Oospo/Tl5dK3VCCSI/AAAAAAAAWDU/EpakErRwjmg/s1920-w1920-h1080-c/New%2BAmerican%2BBridge%252C%2BNew%2BAmerican%2BSunset.jpg",
        "author": "Thomas Hawk"
    },
    {
        "url": "https://lh4.googleusercontent.com/-PEqdToxzXnY/UtcZqxgVtoI/AAAAAAAAX3Q/9Q-5NiHHp58/s1920-w1920-h1080-c/DSC_1557-Edit.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-RYXaUp5nlzo/TlUZoGOjknI/AAAAAAAAc2o/yU49A-iYNoY/s1920-w1920-h1080-c/061112-1181-Portal2BigSur.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-qYAocFAB-Hk/UDUjFs_h8rI/AAAAAAAAArY/JtCIY7M7QrY/s1920-w1920-h1080-c/8-17-12-dusk-lightning.jpg",
        "author": "Kelly DeLay"
    },
    {
        "url": "https://lh3.googleusercontent.com/-oV2c81gGLms/UUD7dThVqiI/AAAAAAAFJJE/koPfO08QuDE/s1920-w1920-h1080-c/20111009-%252807_08_56%2529-sierras-5d2-7923And2more-Edit-Edit.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh3.googleusercontent.com/-u-IRMNTT1dU/UQV8kWk4AEI/AAAAAAAAle0/jdVDuIjzpTE/s1920-w1920-h1080-c/IMG_1109_HDR.jpg",
        "author": "Grzegorz Głowaty"
    },
    {
        "url": "https://lh6.googleusercontent.com/-3uV7CIuShrs/UCXuA3dtLTI/AAAAAAAAX6M/033_DgMlkQE/s1920-w1920-h1080-c/4906675796_ee995b11c1_o%2B%2528salt%2Bflats%252C%2Butah%2B2011%2529.jpg",
        "author": "Nabil Shahid"
    },
    {
        "url": "https://lh6.googleusercontent.com/-sSh1MI_KB_c/TwXF_f9Tr4I/AAAAAAAAL-g/ivbuKnmkfLI/s1920-w1920-h1080-c/SutroSunset-rocks-misty.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-djAiXa_L7EU/TgtZGJZPcFI/AAAAAAAJBA0/Ih2FgNUBZYE/s1920-w1920-h1080-c/the%2Bdocs.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-eHYL53TK0qY/Us1wtLc6TDI/AAAAAAAAIVw/CPrfUXcyL8E/s1920-w1920-h1080-c/CC%2B-%2BManuel%2BAntonio%2BSunset.jpg",
        "author": "Karthik Ravindran"
    },
    {
        "url": "https://lh4.googleusercontent.com/-25-BIcSpaLU/UX-tEB0seYI/AAAAAAAAU2Y/SX0W4AL4YQM/s1920-w1920-h1080-c/AtAnchor.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-WUT3n130gGw/U0MR8lh-SbI/AAAAAAAIpgw/VO52olLVJN8/s1920-w1920-h1080-c/A%2BRazor%2Bto%2Bthe%2BSky.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh5.googleusercontent.com/-WZA98-oWpx0/UQRbtQrHGHI/AAAAAAAAWks/tEFC-Vmn1XU/s1920-w1920-h1080-c/MakingTracksForHome.jpg",
        "author": "Ivan Makarov"
    },
    {
        "url": "https://lh5.googleusercontent.com/--ETG9eU1_Xw/Tgt5l8cyMwI/AAAAAAAIWTg/nWSbj2O5c6w/s1920-w1920-h1080-c/4070581709_a1c668a779_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh6.googleusercontent.com/-tvwabhWAP2U/UszsNaw0kVI/AAAAAAAAIS0/E3RbN6bl6WA/s1920-w1920-h1080-c/CC%2B-%2BSanta%2BCruz%2BNatural%2BBridges.jpg",
        "author": "Karthik Ravindran"
    },
    {
        "url": "https://lh4.googleusercontent.com/-8vn-0e0IMEg/TvJcOSrsSmI/AAAAAAAAK6U/3fbd-GS1GxU/s1920-w1920-h1080-c/SutroFalls_sunset.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/-PAZT1pXjMM8/UrM5S_Ht1cI/AAAAAAAACVE/adGv8TflzYc/s1920-w1920-h1080-c/IMG_6165.JPG",
        "author": "Wingchi Poon"
    },
    {
        "url": "https://lh5.googleusercontent.com/-jTHJFPzaDCM/T1F5nO4H8kI/AAAAAAAADbE/IxyGInI2xN0/s1920-w1920-h1080-c/shanghai%2Btunnel%2Borange.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-aIBq7YhM6-M/TxMQytFssDI/AAAAAAAANXs/9RurRnKmOOw/s1920-w1920-h1080-c/CliffHouseSunset.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh4.googleusercontent.com/--Km5pB3lBaM/Ua3DdDBGtcI/AAAAAAAAPV4/p_BFy_Ps50w/s2560/DSC01034",
        "author": "Apurva Mathad"
    },
    {
        "url": "https://lh3.googleusercontent.com/-LVkYomDgo1g/TwoREmpuoLI/AAAAAAAAMiE/duaVKfg5Blg/s1920-w1920-h1080-c/Big-Sur-Coastal-Seascape-2.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh6.googleusercontent.com/-hXPVBw1iPyc/Tg1gUs9WABI/AAAAAAAAAPU/J-g25o_00Gk/s1920-w1920-h1080-c/100804-4696-PololuMorn1.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh6.googleusercontent.com/-GwSLzDzfyGA/UWoqCg-pk2I/AAAAAAAAMh0/JeyhZ3UqFys/s1920-w1920-h1080-c/MOL_1600.jpg",
        "author": "Amarpreet Singh"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Sm0TD1_vzFo/ULrHwJOPf3I/AAAAAAAAEMY/NGUYdwUEtGY/s1920-w1920-h1080-c/IMGP0652_3_4_tonemapped.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh4.googleusercontent.com/-gE1QbuQR45Q/TqiD0bdOG7I/AAAAAAAAE8w/fawdaKhXGu4/s1920-w1920-h1080-c/CGPier-storm-mono.jpg",
        "author": "Joe Azure"
    },
    {
        "url": "https://lh3.googleusercontent.com/-8h4vm06cRYo/UZURZQG4KwI/AAAAAAAAPOE/GltqdZojKKE/s1920-w1920-h1080-c/Night%2BFalls%2Bon%2BCrater%2BLake%2B-%2BCrater%2BLake%252C%2BOR1.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uaGTbkMBysI/R7qYVHTGv6I/AAAAAAAABiQ/IU0yK7OgvYc/s1920-w1920-h1080-c/IMG_0213.JPG",
        "author": "Michael Wyszomierski"
    },
    {
        "url": "https://lh5.googleusercontent.com/-14sNcCfmulY/UOj-YBSQ8oI/AAAAAAAALsk/v-C7ZmZ-UIk/s1920-w1920-h1080-c/IMGP1985_stitch.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh6.googleusercontent.com/-obzQWN6F6HI/UBgYTGLpkDI/AAAAAAAAL68/BQaBAEmv7Ro/s1920-w1920-h1080-c/IMG_7808.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh6.googleusercontent.com/-qd290nJU0FM/UZYXTBbrzeI/AAAAAAAAVhI/gNH2tEzLT80/s1920-w1920-h1080-c/Reflection.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ee4PsGvjU6E/T12UiPm3_lI/AAAAAAAAJxk/7iG8ltiRL2Y/s1920-w1920-h1080-c/blue4.jpg",
        "author": "Erika Thornes"
    },
    {
        "url": "https://lh3.googleusercontent.com/-QyxGZeaBON4/TgtZEYemvZI/AAAAAAAAgVE/_VepyvNFiTE/s1920-w1920-h1080-c/ibiza%2Bdock.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-kHs8UW2H8Aw/UC5IFHiMmmI/AAAAAAAAPo0/wC96A5DdRfU/s1920-w1920-h1080-c/Perfect%2BSpot.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-wTFLKVhkXZQ/UIQnr9nfSTI/AAAAAAAAR8I/WpQlXB_-Ahs/s1920-w1920-h1080-c/388A1845.jpg",
        "author": "Leo Deegan"
    },
    {
        "url": "https://lh5.googleusercontent.com/-b4ZiJXUmZLg/TUCPhc_z2pI/AAAAAAAAAgM/uY37UMRjGsw/s1920-w1920-h1080-c/Trippin%2527-3.jpg",
        "author": "Alan Shapiro"
    },
    {
        "url": "https://lh5.googleusercontent.com/-2A31P4WBC8s/UtT1BndamcI/AAAAAAAAO1E/Qj5CF7S1UeU/s1920-w1920-h1080-c/DSC_1612.jpg",
        "author": "Raja Ramakrishnan"
    },
    {
        "url": "https://lh3.googleusercontent.com/-1dANL8dJDT0/T6h0JShpn-I/AAAAAAAAIDk/l_dKhWvFXUs/s1920-w1920-h1080-c/YosemiteFalls.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh6.googleusercontent.com/-NJROcJSqb8g/UYj6Ol2_AjI/AAAAAAAABOQ/pIQr9cbv5Os/s1920-w1920-h1080-c/thing.jpg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh6.googleusercontent.com/-jGFm3VEUfWs/T8ZYvGvjuhI/AAAAAAAAOeg/pNzaz3TXxX0/s1920-w1920-h1080-c/DSC_0645_3_4-Edit.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-UDg246afc7Q/UEUifribRBI/AAAAAAAALlo/iOUErvKdRCg/s1920-w1920-h1080-c/Sand%2BBeach%2BTexture-4.jpg",
        "author": "Nate Parker"
    },
    {
        "url": "https://lh3.googleusercontent.com/-8kQQYYzz_l8/UZSathUsJGI/AAAAAAAAsUM/3Z4WK9CG8wE/s1920-w1920-h1080-c/07_20090416.jpg",
        "author": "Mike Wiacek"
    },
    {
        "url": "https://lh4.googleusercontent.com/-yYJUfqBHHXw/UoffDIFgJOI/AAAAAAAARpQ/M7Nskp7pTDg/s1920-w1920-h1080-c/DSC_7222-Edit-2.jpg",
        "author": "Amarpreet Singh"
    },
    {
        "url": "https://lh6.googleusercontent.com/-gcU_icksx-A/TnuyXEh2MeI/AAAAAAAAFhE/sjZHDkU_Vlg/s1920-w1920-h1080-c/IMG_9581.JPG",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh6.googleusercontent.com/--y_TRuOOPTA/T_0KxukaPeI/AAAAAAAARw0/VTeenM1J2xI/s1920-w1920-h1080-c/20100525-IMG_6788-HDR-Edit.jpg",
        "author": "Brian Matiash"
    },
    {
        "url": "https://lh3.googleusercontent.com/-6nBwDVfR-BE/UXrL2u6iqII/AAAAAAAAUro/CL47d2nXDzE/s1920-w1920-h1080-c/MagicBallContest.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-71rGVgWwPVs/UV2EkSYIYdI/AAAAAAAAjJ0/2jhJTt1iWzU/s1920-w1920-h1080-c/20130331-%252809_01_49%2529-yosemite-iq180-16451_HDR.jpg",
        "author": "Aravind Krishnaswamy"
    },
    {
        "url": "https://lh5.googleusercontent.com/-eDbulGr2hu8/Ur0CIxLk-FI/AAAAAAAAGA4/R7oAYMeXRws/s1920-w1920-h1080-c/IMG_3857-Edit-Edit.jpg",
        "author": "Benjamin Poiesz"
    },
    {
        "url": "https://lh4.googleusercontent.com/-K258GmbSDxM/T_TBV0i4kLI/AAAAAAAABro/rW_nlHdct7U/s1920-w1920-h1080-c/IMGP9268.jpg",
        "author": "Derek Kind"
    },
    {
        "url": "https://lh4.googleusercontent.com/-31H2j9KKMi0/UTpeMK5JrEI/AAAAAAAAPHo/4QOl-12J750/s1920-w1920-h1080-c/Hooded%2BLady%2Bof%2Bthe%2BValley.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh6.googleusercontent.com/-MxVUPW7j-L0/UCFpW985f5I/AAAAAAAAJI8/HQfELZDoN7I/s1920-w1920-h1080-c/_MG_4776.CR2.jpg",
        "author": "Saurabh Paranjape"
    },
    {
        "url": "https://lh4.googleusercontent.com/-1cz2zcbiz-4/Th0QVgyAMBI/AAAAAAAABC4/gVc-Bp_mFGs/s1920-w1920-h1080-c/untitled-3-2.jpg",
        "author": "Alan Shapiro"
    },
    {
        "url": "https://lh3.googleusercontent.com/-1o-jUyycpcE/UIdjwEWDS3I/AAAAAAAAED4/7Mj-xSqdO5E/s1920-w1920-h1080-c/sky_leaves.jpg",
        "author": "Eric Guevremont"
    },
    {
        "url": "https://lh5.googleusercontent.com/-SzZfj9JRR_E/T_GSkSXaEOI/AAAAAAAAPHQ/2L1sfG55pxM/s1920-w1920-h1080-c/In%2Ba%2BRow.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-GGVPhdUiKwY/UOOZDe9JFQI/AAAAAAAAKiY/Noq6gsZlXxk/s1920-w1920-h1080-c/TunnelViewWinter.jpg",
        "author": "Aravind Ravisankar"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ZGfUihferj8/TgtZGKAJjOI/AAAAAAAAdd8/e-EXjm51hhA/s1920-w1920-h1080-c/3674678524_f49854f3b1_o.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Zj8Aex6oXYo/UW6x5FfAtjI/AAAAAAAANiY/lukbqNiI2go/s1920-w1920-h1080-c/I%2BCover%2Bthe%2BWaterfront%2B-%2BAlki%2BBeach%252C%2BWA.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh5.googleusercontent.com/-HdhuOcwGEcs/TgtZEZtITGI/AAAAAAAAVmw/nPx5UAR0qic/s1920-w1920-h1080-c/morning%2Bwith%2Bcoffee%2Bin%2Byellowstone.jpg",
        "author": "Trey Ratcliff"
    },
    {
        "url": "https://lh4.googleusercontent.com/-NERMWW1BkL0/UscUP7RlrUI/AAAAAAAAGa4/i0NvN8TpTnM/s1920-w1920-h1080-c/Pier%2B7.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh5.googleusercontent.com/-xu-TTAEZtQo/UbtDr65unqI/AAAAAAAABKo/-2asqRlMolw/s1920-w1920-h1080-c/Bristlecone_Stars.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Bz1rXnbAy1s/UQNThZKgMRI/AAAAAAAAScM/eUItE7glPn0/s1920-w1920-h1080-c/StillStanding.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-FDe6_2rxtEs/UkBgjq9ZJmI/AAAAAAAAELo/zT29ZhT2NAA/s1920-w1920-h1080-c/Salt_Point.jpg",
        "author": "Mason Cummings"
    },
    {
        "url": "https://lh5.googleusercontent.com/-KPCupfttZeg/UYEMyuiN84I/AAAAAAAAU5k/74L4iR6gMDk/s1920-w1920-h1080-c/untouched.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-Rt9EwCW6WKQ/UYFWmnuzqtI/AAAAAAAAAhc/gGdskZasg-I/s1920-w1920-h1080-c/OQkMj.jpeg",
        "author": "Jesse Summers"
    },
    {
        "url": "https://lh6.googleusercontent.com/--LqjPK05as8/TsSfH1cu69I/AAAAAAAATUE/JyMyDxcW1Ms/s1920-w1920-h1080-c/TacomaChiluly--10.jpg",
        "author": "Cliff Redeker"
    },
    {
        "url": "https://lh5.googleusercontent.com/-v_osPPHl71I/Tj_5Wsgr4mI/AAAAAAAAE3c/5yJ3mkXKdlU/s1920-w1920-h1080-c/KeeSummer-1920.jpg",
        "author": "Patrick Smith"
    },
    {
        "url": "https://lh5.googleusercontent.com/-Bw1ez5kyvxU/UdQKsby_ggI/AAAAAAAAXnY/wrBUUoCk3ZQ/s1920-w1920-h1080-c/IMG_20130703_062950.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh6.googleusercontent.com/-5ntl45J8Lxg/UiHZG2mJ1nI/AAAAAAAAb8s/f10TxWDh2zA/s1920-w1920-h1080-c/DSC_5165-Edit-Edit.JPG",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh4.googleusercontent.com/-HbF8zRNZt-o/UMPHYkBuCMI/AAAAAAAAKUQ/GYFSC7-LVqs/s1920-w1920-h1080-c/Group%2BTWO.jpg",
        "author": "Dave Morrow"
    },
    {
        "url": "https://lh3.googleusercontent.com/-8KDJntL6YEw/UT3FHch4HiI/AAAAAAAATTs/C4ItuhGEYbA/s1920-w1920-h1080-c/Ice%2BWaterfall.jpg",
        "author": "Alistair Nicol"
    },
    {
        "url": "https://lh3.googleusercontent.com/-5lm5qxI06OU/TqkYjHdt_lI/AAAAAAAAKOc/Eqb40U2Jsiw/s1920-w1920-h1080-c/CrackedIsSometimesGood.jpg",
        "author": "Karen Hutton"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ot6zDqm0p1s/UM-oZwFOYBI/AAAAAAAAImc/_9QNnbQXa5Y/s1920-w1920-h1080-c/IMG_0472.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-HW1I0DVsq6A/UlmXtm9TvGI/AAAAAAAAQOM/MBQeGBzVB2M/s1920-w1920-h1080-c/MOL_2167.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-r3jKfQruwv4/Uc6B8fRsKmI/AAAAAAAAIAg/VCLgE4EqjtY/s1920-w1920-h1080-c/T3_IMG_3936.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-TFEx1ptMuoc/UpN7a9C-YlI/AAAAAAAAKUI/A3KeBF2vSnE/s1920-w1920-h1080-c/8941Autumn.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-v9vzbU410FQ/ULmbpPz6zFI/AAAAAAAAIYI/cGTod47GVTQ/s1920-w1920-h1080-c/MWF_6016.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-l9peRQpmVRQ/T54s3ZTfGBI/AAAAAAAAJQk/-_8lDImWzwE/s1920-w1920-h1080-c/IMG_6682.JPG"
    },
    {
        "url": "https://lh6.googleusercontent.com/-td6fULxlHH8/Tov1iYD5pMI/AAAAAAAAltk/QBqFLY9LLhI/s1920-w1920-h1080-c/DSC_4440_BriCon.JPG"
    },
    {
        "url": "https://lh4.googleusercontent.com/-nFgpOv4T3M0/TWLTD6xOiJI/AAAAAAAAPFs/PSfnLjBIrVU/s1920-w1920-h1080-c/IMG_5908.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-CnE_UaGPvOw/UUf6lj3dueI/AAAAAAAADgM/5XqafEH-bac/s1920-w1920-h1080-c/IMG_4426_2.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-acdH1dPsUdk/ToQNXK7HgDI/AAAAAAAATyM/95rFxKIy_Dw/s1920-w1920-h1080-c/IMG_0935.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-ko4QbKawOzs/UMrlGpBHGtI/AAAAAAAAMbA/TVYDrsxchf4/s1920-w1920-h1080-c/11-17-12-India%2BTrip-Kanheri%2BCaves%2B%2528JPEGs%2529-20.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-E5h_DjLkO9g/UJGAP4Q_1jI/AAAAAAAABI0/xb_a1wwuddA/s1920-w1920-h1080-c/_MSU3203.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-3vJ7YydpvVU/T3Fad0DfOvI/AAAAAAAAIIg/rJ5piFMcgKg/s1920-w1920-h1080-c/IMG_5328.JPG"
    },
    {
        "url": "https://lh6.googleusercontent.com/-qwOaqE4cYCg/Ur0CAf2nO5I/AAAAAAAAF-I/b2vYQp-TxW4/s1920-w1920-h1080-c/IMG_5974.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-nVpMVoplcjA/UlmXtr57GiI/AAAAAAAAQOo/YPNo51GXyLU/s1920-w1920-h1080-c/MOL_1755.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-RM253k65h0g/RuWXqF2PN3I/AAAAAAAAASw/bWQAJ47AvxQ/s1920-w1920-h1080-c/IMG_2828.JPG"
    },
    {
        "url": "https://lh3.googleusercontent.com/--Kc7-ixIguw/TmLkC9Rx6WI/AAAAAAAABHw/7j_5yz__Ikk/s1920-w1920-h1080-c/img_0571.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-JhsS5Efemfw/UAUNCf1J1aI/AAAAAAAACno/1178JtnVPVQ/s1920-w1920-h1080-c/IMG_T3_0788.JPG"
    },
    {
        "url": "https://lh4.googleusercontent.com/-IOB7UYjdfKk/UWxRNQruJpI/AAAAAAAAqYo/ZYOTEFEaUUQ/s1920-w1920-h1080-c/DSC_0471-Edit-Edit.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-97kOELXyRw0/UpKzpdSGLsI/AAAAAAAACU8/t7toymdF9ys/s1920-w1920-h1080-c/IMG_8176.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-v5W9oXSutcs/UjX_nq7Q1DI/AAAAAAAAPVE/A201XC4J5qs/s1920-w1920-h1080-c/DSCF0155-Edit.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-OvptEVwUDuA/UE_P875OPoI/AAAAAAAAPWM/ocqkejUt5AQ/s1920-w1920-h1080-c/IMG_1017.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-SCc_19Vl5Ng/SuoniirQlZI/AAAAAAAAGOo/UsRZ0o6GJeI/s1920-w1920-h1080-c/IMG_4701.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-IHVKwUTyFSg/UUskvJsiPtI/AAAAAAAAHiw/aVNne_b6CaU/s1920-w1920-h1080-c/Islands.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-GMJoozxAcgE/Tk7h8aldhrI/AAAAAAAAFZ8/SnFiv5CZcYE/s1920-w1920-h1080-c/IMG_6000.JPG"
    },
    {
        "url": "https://lh4.googleusercontent.com/-G4bChH6K3mY/ULdpTli69GI/AAAAAAAAJIg/cfku63jtnY4/s1920-w1920-h1080-c/austin%2B2.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-11t9DgvNYhY/UG3HjpR9T9I/AAAAAAAAIO4/FSkNbPYzUMA/s1920-w1920-h1080-c/IMG_2526-3b.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-YtE41zDzZZM/UBCa4Ui2cuI/AAAAAAAAOMg/Uzs03aPfWak/s1920-w1920-h1080-c/IMG_6451.JPG"
    },
    {
        "url": "https://lh3.googleusercontent.com/-F1Ocj6sBzTY/TjW2-AiZ1DI/AAAAAAAAAkg/fCWFj-Tar7E/s1920-w1920-h1080-c/20110718_chamonix_00164.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-mPicgJz8Yes/USOzc3Ki2TI/AAAAAAAADVA/QzQqtctMISI/s1920-w1920-h1080-c/IMG_4369%2B-%2BLarge.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-1n2blvh-lkQ/TX_WqEAkKAI/AAAAAAAAAI4/xlaLPLcp6nI/s1920-w1920-h1080-c/DSC_0109.JPG"
    },
    {
        "url": "https://lh4.googleusercontent.com/-HBDE39Hgv9M/TyXGMvNUzjI/AAAAAAAAA_A/nBMmnHMcT0o/s1920-w1920-h1080-c/20120128-20120128-ENS_3119_20_21_tonemapped-Edit.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-iTxENBfrZfY/T5ZLrTvoeCI/AAAAAAAAJD8/ik0c31ZcTOw/s1920-w1920-h1080-c/IMG_6499.JPG"
    },
    {
        "url": "https://lh6.googleusercontent.com/-8K8X3n7zPKE/UOOZGSlNvjI/AAAAAAAAKig/yTCbEVh-lCw/s1920-w1920-h1080-c/MorningGlory.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-MXAy1Q1e8pw/TtPRnPCM4AI/AAAAAAAAQc0/Vvc74HYL35s/s1920-w1920-h1080-c/IMG_1984.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-N0Ic1VbN2UE/Ui_eJHugZ2I/AAAAAAAAFzg/P9N-QNQisVI/s1920-w1920-h1080-c/farm_in_the_prairie.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-LQXZpNUUdw8/UWoqJONj7-I/AAAAAAAAMh0/7m100XOFcEo/s1920-w1920-h1080-c/MOL_1841.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-iVr5r1Yycbs/UkPSMp_2CZI/AAAAAAAALrA/ME5aBtr5fdM/s1920-w1920-h1080-c/9082667654_c7919ec6ed_o.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-jwJEWGscrls/T-dsvGIbyRI/AAAAAAAABp4/Pgn_t5V2LNs/s1920-w1920-h1080-c/Wyoming-5.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-FeRCoqwVOB4/Tkgq-geJE3I/AAAAAAAAFYo/xdj-91ytvg8/s1920-w1920-h1080-c/IMG_8981.JPG"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ENSOsH-5iPQ/UZSar_1xTLI/AAAAAAAAsTo/CjPKgR3jXAs/s1920-w1920-h1080-c/04_20080526.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-A_Rp-ExnI5U/UO5TUa7uYGI/AAAAAAAAHOI/Y0o_s4Anxh4/s1920-w1920-h1080-c/Antelope%2BWeeping%2BEye.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Jfnoug03_bw/UBtLVctL2II/AAAAAAAACFU/C4OLrgnJsYc/s1920-w1920-h1080-c/color_globe.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-LkJl5QI3PFw/Uga6XsTaeBI/AAAAAAAAN9g/OV76LD0NTa8/s1920-w1920-h1080-c/1-DSC_3739-Edit.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-jmMSVP61kaQ/TqtX5OPLfZI/AAAAAAAAFkk/8dE_CxpTiHM/s1920-w1920-h1080-c/IMG_0432.JPG"
    },
    {
        "url": "https://lh6.googleusercontent.com/-N-jkCCpnvmM/Tg0t85f5-dI/AAAAAAAABj8/otdYcgGq4ZU/s1920-w1920-h1080-c/tah%2Bprohm%2Bruins.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Lk6txIIotmM/ToZuJ99slYI/AAAAAAAAQIg/y0jvaiYTIHA/s1920-w1920-h1080-c/IMG_0642.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-R2ZajxFWfwU/UfBzXlvSt4I/AAAAAAAAMec/UMxC7oEGnlw/s1920-w1920-h1080-c/RubyBeachSunset.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-QpB1YMuAXEA/TikI95S2KmI/AAAAAAAAPSw/kJPeHft92m4/s1920-w1920-h1080-c/MC2_8779.JPG"
    },
    {
        "url": "https://lh4.googleusercontent.com/-E57LJIzkkd8/UM-oHjiKHJI/AAAAAAAAIjY/QKAP7QTXBNY/s1920-w1920-h1080-c/IMG_0366.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-K6vQiYdEpGE/TwLJ3MnryaI/AAAAAAAAYVM/m6Vz2nSG1eI/s1920-w1920-h1080-c/12262010-01.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-r__WtJ8w6hA/Ug2yiJOnbWI/AAAAAAAAJWs/f-xaVC9sowQ/s1920-w1920-h1080-c/Lonely%2BRock.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-AcZs6m29qSs/UDp-sz3LFWI/AAAAAAAALt0/_20UV0bSdhg/s1920-w1920-h1080-c/DSC_1781-Edit.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-XPrln_uhgmo/UilA1nTO7HI/AAAAAAAAFws/DbmMNor3q98/s1920-w1920-h1080-c/frolicking_worker_bee.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/--qL9ddvO4gs/UWoqHffdewI/AAAAAAAAMh0/uf5mp_xqsHI/s1920-w1920-h1080-c/MOL_1818.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-Xdz2ceNVzdw/Tm5L7A9tdYI/AAAAAAAAFsg/k4Tjwbi73Cw/s1920-w1920-h1080-c/IMG_3027.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ejLi6Bg7IUI/TonR_AZLYLI/AAAAAAAAQWk/A1bVgL3p2A4/s1920-w1920-h1080-c/IMG_0242.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-iNpCGNJTrRo/Ugbk1ZMLczI/AAAAAAAAOE0/FZWVWqXGdT8/s1920-w1920-h1080-c/DSC_0423-Edit.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-jwtEYxBKhUo/Tjg1cB0Ip3I/AAAAAAAABYM/vzBW6V1pJmk/s1920-w1920-h1080-c/DSC_6121.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-q9gWC1ZIAvg/UbZrg9lIcAI/AAAAAAAAL4I/xzSlyLfAGrQ/s1920-w1920-h1080-c/WahclelaFalls.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-8FVgQzZVqbA/UTegGsWii4I/AAAAAAAACLo/RTaF_E72tU8/s1920-w1920-h1080-c/PVK_5085.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-rQRNNECkzd4/URCMBmHeCiI/AAAAAAAAETM/BCOHRv5Gjb4/s1920-w1920-h1080-c/rose_of_love_and_light.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-8B1qxa11Sc8/UGZxaoFhaYI/AAAAAAAAC50/SndOZy14pe0/s1920-w1920-h1080-c/bird_of_paradise.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-CaqC7SHp_2w/SF8sHokHjwI/AAAAAAAACyw/gC4j26zZen8/s1920-w1920-h1080-c/DSC_9166.JPG"
    },
    {
        "url": "https://lh6.googleusercontent.com/-Bo0_R3Hshio/UOUefGb4bpI/AAAAAAAARno/EBZGWRhWwzk/s1920-w1920-h1080-c/IMG_7449.jpg"
    },
    {
        "url": "https://lh3.googleusercontent.com/-y9mHkm6F9NI/UJH6oUvIN3I/AAAAAAAADqU/ueLAmjtceMI/s1920-w1920-h1080-c/path_of_leaves.jpg"
    },
    {
        "url": "https://lh5.googleusercontent.com/-uEpX9L-4T2c/UQiEqLpUxvI/AAAAAAAAEHU/OyyJXuWn_q4/s1920-w1920-h1080-c/on_the_road.jpg"
    },
    {
        "url": "https://lh4.googleusercontent.com/-nEEPZA887gc/SRGbDPl6jgI/AAAAAAAADOc/LH5WYu-Vc1k/s1920-w1920-h1080-c/700_1905.JPG"
    },
    {
        "url": "https://lh5.googleusercontent.com/-ps4uT_pEdCE/RpKjlC16MuI/AAAAAAAAAt0/n09gNExGMl0/s1920-w1920-h1080-c/DSC_2079-1.JPG"
    },
    {
        "url": "https://lh3.googleusercontent.com/-mgMvF53YBMM/UNbG3fnrFFI/AAAAAAAACQU/-u_8-yRrG24/s1920-w1920-h1080-c/Double%2BRainbow.jpg"
    },
    {
        "url": "https://lh6.googleusercontent.com/-M6BRAUZHPyo/UfbbKobVOKI/AAAAAAAAK_M/4WIHtFv7Idk/s1920-w1920-h1080-c/MWF_6457-2.jpg"
    }
];

window.Backgrounds = backgrounds;
var icons = {
	i11d: {
		defaultIcon: {
			iconName: '33',
			iconClass: 'i-thunder'
		},
		defaultCodes: [
			200, 201, 210, 211, 230, 231
		],
		altIcon: {
			iconName: '42',
			iconClass: 'i-thunderstorm'
		},
		altCodes: [
			202, 212, 221, 232
		],
	},
	i09d: {
		defaultIcon: {
			iconName: '34',
			iconClass: 'i-drizzle'
		},
		defaultCodes: [
			300, 301, 302, 310, 311, 500
		],
		altIcon: {
			iconName: '35',
			iconClass: 'i-rain'
		},
		altCodes: [
			312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531
		],
	},
	i09n: {
		parentCode: 'i09d'
	},
	i10d: {
		parentCode: 'i09d'
	},
	i10n: {
		parentCode: 'i09d'
	},
	i13d: {
		defaultIcon: {
			iconName: '38',
			iconClass: 'i-flake'
		},
		defaultCodes: [
			600, 601, 615, 616, 620
		],
		altIcon: {
			iconName: '39',
			iconClass: 'i-snow'
		},
		altCodes: [
			602, 611, 612, 621, 622
		],
	},

	i50d: {
		defaultIcon: {
			iconName: '13',
			iconClass: 'i-mist'
		},
		defaultCodes: [
			701, 711, 741
		],
		altIcon: {
			iconName: '5',
			iconClass: 'i-haze'
		},
		altCodes: [
			721, 751, 761, 762
		],

		i731: {
			iconName: '6',
			iconClass: 'i-whirls'
		},
		i771: {
			parentCode: '1731'
		},
		i781: {
			parentCode: '1731'
		},
	},
	i50n: {
		parentCode: 'i50d'
	},
	i01d: {
		defaultIcon: {
			iconName: '28',
			iconClass: 'i-clear-d'
		},
		defaultCodes: [
			800
		],
		altIcon: {},
		altCodes: [],
	},
	i01n: {
		defaultIcon: {
			iconName: '29',
			iconClass: 'i-clear-n'
		},
		defaultCodes: [
			800
		],
		altIcon: {},
		altCodes: [],
	},

	i02d: {
		defaultIcon: {
			iconName: '30',
			iconClass: 'i-cloud-d'
		},
		defaultCodes: [
			801, 802
		],
		altIcon: {
			iconName: '41',
			iconClass: 'i-cloudy'
		},
		altCodes: [
			813, 814
		],
	},
	i02n: {
		defaultIcon: {
			iconName: '31',
			iconClass: 'i-cloud-n'
		},
		defaultCodes: [
			801, 802
		],
		altIcon: {
			iconName: '31',
			iconClass: 'i-cloud-n'
		},
		altCodes: [],
	},

	i03d: {
		parentCode: 'i02d'
	},
	i03n: {
		parentCode: 'i02n'
	},

	i04d: {
		parentCode: 'i02d'
	},

	i04n: {
		parentCode: 'i02d'
	},

	i906: {
		iconName: '40',
		iconClass: 'i-hail'
	},

	i903: {
		iconName: '7',
		iconClass: 'i-cold'
	},

	i904: {
		iconName: '43',
		iconClass: 'i-hot'
	},

	wind: {
		iconName: '6',
		iconClass: 'i-wind'
	}
};

window.Icons = icons;

function displayTime() {
    var time = moment().format('h:mm a');
    $('#clock').html(time);
    setTimeout(displayTime, 500);
}

function displayWeather(){
    Weather.getCurrent( "Tacoma", function( current ) {
        var $weather = $("#weather");
        var $icon = $weather.find('.icon');

        var temp = Math.floor(current.temperature()),
            weatherCond = toTitleCase(current.conditions()),
            icon = getIcon(current.icon());

        //console.log(icon);

        $weather.find('.temp').html(temp);

        $icon.removeClass (function (index, css) {
            return (css.match (/(^|\s)i-\S+/g) || []).join(' ');
        });
        $icon.addClass(icon.iconClass);

        changeFavicon('images/icons/'+icon.iconName+'.ico');
        $weather.find('.description').html(weatherCond);

        $('title').html(temp + '° ' + weatherCond)
    });

    setTimeout(displayWeather, 30000);
}

function backgroundImage(){
    var src = bgPluck();

    var img = new Image();
    img.onload = function(){
        if ('naturalHeight' in this) {
            if (this.naturalHeight + this.naturalWidth === 0) {
                this.onerror();
                return;
            }
        } else if (this.width + this.height == 0) {
            this.onerror();
            return;
        }

        $('body').css('backgroundImage', 'url('+src.url+')');

        var imgAuthor = '-';
        if(_.has(src, 'author')) {
            imgAuthor = src.author;
        }
        $('#image-description').animate({'opacity': 0}, 1000, function () {
            $(this).text(imgAuthor)
        }).animate({'opacity': 1}, 1000);

        setTimeout(backgroundImage, 30000);
    };
    img.onerror = function(err) {
        console.log('Image Err:', err);
        setTimeout(backgroundImage, 5000);
    };

    img.src = src.url;

}

function changeFavicon(src) {
    $('link[rel="shortcut icon"]').attr('href', src)
}

function selectBackground(array) {
    var copy = array.slice(0);
    return function() {
        if (copy.length < 1) { copy = array.slice(0); }
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index, 1);
        return item;
    };
}

function getIcon(iconObj){
    var iconID = 'i'+iconObj.id,
        iconCode = 'i'+iconObj.code,
        res = {};

    if(_.has(Icons, iconID)){
        res = Icons[iconID];
    } else if (_.has(Icons, iconCode)) {
        var iconCat = Icons[iconCode];

        if(_.has(iconCat, 'parentCode')){
            iconCat = Icons[iconCat.parentCode];
        }

        if (_.has(iconCat, iconID)) {
            var iconIDCat = iconCat[iconID];
            if(_.has(iconIDCat, 'parentCode')){
                iconIDCat = iconCat[iconIDCat.parentCode];
            }
            res = iconIDCat;
        } else if (_.includes(iconCat.altCodes, iconCode)) {
            res = iconCat.altIcon;
        } else {
            res = iconCat.defaultIcon;
        }
    } else {
        console.log('Error!', iconObj);
        res = {
            iconName: '44',
            iconClass: 'i-'+iconObj.code
        }
    }

    return res;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function() {
    window.bgPluck = selectBackground(Backgrounds);
    backgroundImage();

    displayTime();

    Weather.apiKey = 'b148c2be8cc81a234345e3f64f5dd14b';
    displayWeather();

});
