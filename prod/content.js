!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire86bc;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire86bc=o);var i=o("dgWlw"),r=function(){"use strict";function e(){i.classCallCheck(this,e),this.realSupernavTag="real-supernav",this.cloneSupernavTag="cloned-supernav",this.previousTop=window.scrollY,this.currentTop=0,this.viewportWidth=window.innerWidth,this.scrollThreshold=25,this._createClassDefinitions(),this._siloFixes(),this._cloneNav(),this._handleScroll(),this._handleResizing()}return i.createClass(e,[{key:"_createClassDefinitions",value:function(){var e="\n      .navigation-clone {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: transparent;\n        z-index: 1000;\n        border-bottom: 1px solid transparent;\n        pointer-events: none;\n        transition: all 100ms ease-in-out;\n      }\n\n      .navigation-clone .supernav {\n        opacity: 0;\n        transition: all 150ms ease-in-out;\n      }\n\n      .navigation-clone .banner-text {\n        pointer-events: auto;\n      }\n\n      .navigation-clone .logo-container {\n        opacity: 0;\n        transition: all 150ms ease-in-out;\n      }\n\n      .sticky-nav-show {\n        background-color: white;\n        border-bottom-color: rgba(35, 31, 32, 0.10);\n        pointer-events: auto;\n      }\n\n      .sticky-nav-show.navigation-clone .supernav {\n        opacity: 1;\n      }\n\n      .sticky-nav-show.navigation-clone .logo-container {\n        opacity: 1;\n      }\n    ";this.styleClassDefRef?this.styleClassDefRef.innerHTML=e:(this.styleClassDefRef=document.createElement("style"),this.styleClassDefRef.type="text/css",this.styleClassDefRef.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(this.styleClassDefRef))}},{key:"_createCompansatingStyles",value:function(){var e="";e+="\n      @media (min-width: 1023px) {\n        #silo-container {\n          top: ".concat(88,"px !important;\n        }\n      }\n    "),this.styleCompansationDefRef?this.styleCompansationDefRef.innerHTML=e:(this.styleCompansationDefRef=document.createElement("style"),this.styleCompansationDefRef.type="text/css",this.styleCompansationDefRef.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(this.styleCompansationDefRef))}},{key:"_siloFixes",value:function(){var e=document.querySelector(".banner").getBoundingClientRect().height,t=document.querySelector(".supernav").getBoundingClientRect().height,n=window.innerHeight,o="";o+="\n      @media (min-width: 1023px) {\n        #silo-container {\n          top: ".concat(18+e,"px !important;\n          max-height: ").concat(n-(36+e),"px !important;\n          transition: all 125ms ease-in-out;\n          overflow: overlay;\n        }\n\n\n        #silo-container.push-down {\n          top: ").concat(18+e+t,"px !important;\n          max-height: ").concat(n-(36+e+t),"px !important;\n        }\n      }\n\n\n      @media (min-width: 1279px) {\n        #silo-container {\n          top: ").concat(18,"px !important;\n        }\n      }\n    "),this.styleCompansationDefRef?this.styleCompansationDefRef.innerHTML=o:(this.styleCompansationDefRef=document.createElement("style"),this.styleCompansationDefRef.type="text/css",this.styleCompansationDefRef.innerHTML=o,document.getElementsByTagName("head")[0].appendChild(this.styleCompansationDefRef))}},{key:"_cloneNav",value:function(){var e=document.body,t=document.querySelector(".navigation-layout"),n=t.cloneNode(!0),o=document.createElement("nav");o.classList.add("navigation-clone"),t.parentElement.classList.add("navigation-real"),o.append(n),e.prepend(o),this.navClone=o,this.navReal=t.parentElement}},{key:"_autoHideNavigation",value:function(){var e=document.querySelector("#silo-container");this.currentTop=window.scrollY;var t=Math.abs(this.previousTop-this.currentTop)>this.scrollThreshold;this.currentTop>=this.navReal.getBoundingClientRect().height?t&&(this.previousTop>=this.currentTop?(this.navClone.classList.add("sticky-nav-show"),null==e||e.classList.add("push-down")):(this.navClone.classList.remove("sticky-nav-show"),null==e||e.classList.remove("push-down"))):(this.navClone.classList.remove("sticky-nav-show"),null==e||e.classList.remove("push-down")),this.previousTop=this.currentTop}},{key:"_resizeHandler",value:function(){this.viewportWidth!==window.innerWidth&&(this._createClassDefinitions(),this._siloFixes(),this.viewportWidth=window.innerWidth)}},{key:"_handleScroll",value:function(){var e=this;this._autoHideNavigation();window.addEventListener("scroll",(function(){return window.requestAnimationFrame?requestAnimationFrame(e._autoHideNavigation.bind(e)):setTimeout(e._autoHideNavigation.bind(e),250)}),{passive:!0})}},{key:"_handleResizing",value:function(){var e=this;this._resizeHandler();window.addEventListener("resize",(function(){return window.requestAnimationFrame?requestAnimationFrame(e._resizeHandler.bind(e)):setTimeout(e._resizeHandler.bind(e),250)}),{passive:!0})}}]),e}();try{new r}catch(e){console.error("Could not init Sticky Nav: ".concat(e))}var a,l,c=[];try{document.querySelectorAll(".accordion").forEach((function(e,t){c.push({container:e,activeElement:null}),e.querySelectorAll(".accordion-navigation").forEach((function(n){n.classList.contains("active")&&(c[t].activeElement=n),n.querySelector("a").onclick=function(t){t.preventDefault(),function(e,t){for(var n=0;n<c.length;n++)if(e===c[n].container){if(c[n].activeElement&&(c[n].activeElement.classList.remove("active"),c[n].activeElement===t)){c[n].activeElement=null;break}t.classList.add("active"),c[n].activeElement=t;break}}(e,n)}}))}))}catch(e){console.error("Could not init Accordion: ".concat(e))}try{a=document.querySelector("#silo-menu-button"),l=document.querySelector("#silo-container"),null==a||a.addEventListener("click",(function(){l.classList.toggle("show")}))}catch(e){console.error("Could not init Silo: ".concat(e))}i=o("dgWlw");var s=function(){"use strict";function e(){i.classCallCheck(this,e),this.previousTop=window.scrollY,this.currentTop=0,this.viewportWidth=window.innerWidth,this.scrollThreshold=25,this._getSupernavs(),this._configureSuperNav(),this._handleScroll(),this._handleClickOutside()}return i.createClass(e,[{key:"_getSupernavs",value:function(){this.supernavs=document.querySelectorAll(".supernav")}},{key:"_configureSuperNav",value:function(){var e=this;this.supernavs.forEach((function(t){var n=e,o=e,i=t.querySelector(".menu-button"),r=t.querySelector(".level-1.small"),a=t.querySelectorAll(".with-children");i.addEventListener("click",(function(){r.classList.contains("show")&&n._resetAll(r,a),r.classList.toggle("show")})),a.forEach((function(e){var t=o,n=o,i=e.querySelector(".dropdown"),l=e.querySelector(".level-2");i.addEventListener("click",(function(){return t._goDeeper(a,r,l)})),l.querySelector(".return-level-1").addEventListener("click",(function(){return n._goShallow(r)}))}))}))}},{key:"_goDeeper",value:function(e,t,n){this._resetSubMenus(e),t.classList.add("nest"),n.classList.add("show")}},{key:"_goShallow",value:function(e){e.classList.remove("nest")}},{key:"_resetSubMenus",value:function(e){e.forEach((function(e){e.querySelector(".level-2").classList.remove("show")}))}},{key:"_resetAll",value:function(e,t){e.classList.remove("nest"),t.forEach((function(e){e.querySelector(".level-2").classList.remove("show")}))}},{key:"_hideOnScroll",value:function(){var e=this;this.currentTop=window.scrollY,Math.abs(this.previousTop-this.currentTop)>this.scrollThreshold&&this.supernavs.forEach((function(t){var n=t.querySelector(".level-1.small"),o=t.querySelectorAll(".with-children");n.classList.contains("show")&&e._resetAll(n,o),n.classList.remove("show")})),this.previousTop=this.currentTop}},{key:"_handleScroll",value:function(){var e=this;document.addEventListener("scroll",(function(){return window.requestAnimationFrame?requestAnimationFrame(e._hideOnScroll.bind(e)):setTimeout(e._hideOnScroll.bind(e),250)}),{passive:!0})}},{key:"_handleClickOutside",value:function(){var e=this;this.supernavs.forEach((function(t){var n=e,o=t.querySelector(".menu-button"),i=t.querySelector(".level-1.small"),r=t.querySelectorAll(".with-children");document.addEventListener("click",(function(e){var t=e.composedPath().includes(i),a=e.composedPath().includes(o);t||a||(i.classList.contains("show")&&n._resetAll(i,r),i.classList.remove("show"))}))}))}}]),e}();try{new s}catch(e){console.error("Could not init Mobile supernav: ".concat(e))}i=o("dgWlw");
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(e){return"IMG"===e.tagName},m=function(e){return e&&1===e.nodeType},h=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},v=function(e){try{return Array.isArray(e)?e.filter(u):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(u):m(e)?[e].filter(u):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(u):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},f=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},p=function(e){var t=e.getBoundingClientRect(),n=t.top,o=t.left,i=t.width,r=t.height,a=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=n+l+"px",a.style.left=o+c+"px",a.style.width=i+"px",a.style.height=r+"px",a.style.transform="",a},g=function(e,t){var n=d({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,n);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var y,w=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=window.Promise||function(e){function t(){}e(t,t)},i=function(e){var t=e.target;t!==A?-1!==S.indexOf(t)&&L({target:t}):z()},r=function(){if(!T&&x.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(q-e)>H.scrollOffset&&setTimeout(z,150)}},a=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||z()},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(A.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=d({},H.container,e.container)),e.template){var n=m(e.template)?e.template:document.querySelector(e.template);t.template=n}return H=d({},H,t),S.forEach((function(e){e.dispatchEvent(g("medium-zoom:update",{detail:{zoom:D}}))})),D},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(d({},H,t))},s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.reduce((function(e,t){return[].concat(e,v(t))}),[]);return o.filter((function(e){return-1===S.indexOf(e)})).forEach((function(e){S.push(e),e.classList.add("medium-zoom-image")})),_.forEach((function(e){var t=e.type,n=e.listener,i=e.options;o.forEach((function(e){e.addEventListener(t,n,i)}))})),D},u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];x.zoomed&&z();var o=t.length>0?t.reduce((function(e,t){return[].concat(e,v(t))}),[]):S;return o.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(g("medium-zoom:detach",{detail:{zoom:D}}))})),S=S.filter((function(e){return-1===o.indexOf(e)})),D},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(o){o.addEventListener("medium-zoom:"+e,t,n)})),_.push({type:"medium-zoom:"+e,listener:t,options:n}),D},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(o){o.removeEventListener("medium-zoom:"+e,t,n)})),_=_.filter((function(n){return!(n.type==="medium-zoom:"+e&&n.listener.toString()===t.toString())})),D},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(H.container)if(H.container instanceof Object)t=(e=d({},e,H.container)).width-e.left-e.right-2*H.margin,n=e.height-e.top-e.bottom-2*H.margin;else{var o=(m(H.container)?H.container:document.querySelector(H.container)).getBoundingClientRect(),i=o.width,r=o.height,a=o.left,l=o.top;e=d({},e,{width:i,height:r,left:a,top:l})}t=t||e.width-2*H.margin,n=n||e.height-2*H.margin;var c=x.zoomedHd||x.original,s=h(c)?t:c.naturalWidth||t,u=h(c)?n:c.naturalHeight||n,v=c.getBoundingClientRect(),f=v.top,p=v.left,g=v.width,y=v.height,w=Math.min(s,t)/g,b=Math.min(u,n)/y,z=Math.min(w,b),L="scale("+z+") translate3d("+((t-g)/2-p+H.margin+e.left)/z+"px, "+((n-y)/2-f+H.margin+e.top)/z+"px, 0)";x.zoomed.style.transform=L,x.zoomedHd&&(x.zoomedHd.style.transform=L)};return new o((function(e){if(t&&-1===S.indexOf(t))e(D);else{if(x.zoomed)e(D);else{if(t)x.original=t;else{if(!(S.length>0))return void e(D);var o=S;x.original=o[0]}if(x.original.dispatchEvent(g("medium-zoom:open",{detail:{zoom:D}})),q=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,T=!0,x.zoomed=p(x.original),document.body.appendChild(A),H.template){var i=m(H.template)?H.template:document.querySelector(H.template);x.template=document.createElement("div"),x.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(x.template)}if(document.body.appendChild(x.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),x.original.classList.add("medium-zoom-image--hidden"),x.zoomed.classList.add("medium-zoom-image--opened"),x.zoomed.addEventListener("click",z),x.zoomed.addEventListener("transitionend",(function t(){T=!1,x.zoomed.removeEventListener("transitionend",t),x.original.dispatchEvent(g("medium-zoom:opened",{detail:{zoom:D}})),e(D)})),x.original.getAttribute("data-zoom-src")){x.zoomedHd=x.zoomed.cloneNode(),x.zoomedHd.removeAttribute("srcset"),x.zoomedHd.removeAttribute("sizes"),x.zoomedHd.src=x.zoomed.getAttribute("data-zoom-src"),x.zoomedHd.onerror=function(){clearInterval(r),console.warn("Unable to reach the zoom image target "+x.zoomedHd.src),x.zoomedHd=null,n()};var r=setInterval((function(){x.zoomedHd.complete&&(clearInterval(r),x.zoomedHd.classList.add("medium-zoom-image--opened"),x.zoomedHd.addEventListener("click",z),document.body.appendChild(x.zoomedHd),n())}),10)}else if(x.original.hasAttribute("srcset")){x.zoomedHd=x.zoomed.cloneNode(),x.zoomedHd.removeAttribute("sizes"),x.zoomedHd.removeAttribute("loading");var a=x.zoomedHd.addEventListener("load",(function(){x.zoomedHd.removeEventListener("load",a),x.zoomedHd.classList.add("medium-zoom-image--opened"),x.zoomedHd.addEventListener("click",z),document.body.appendChild(x.zoomedHd),n()}))}else n()}}}))},z=function(){return new o((function(e){if(!T&&x.original){T=!0,document.body.classList.remove("medium-zoom--opened"),x.zoomed.style.transform="",x.zoomedHd&&(x.zoomedHd.style.transform=""),x.template&&(x.template.style.transition="opacity 150ms",x.template.style.opacity=0),x.original.dispatchEvent(g("medium-zoom:close",{detail:{zoom:D}})),x.zoomed.addEventListener("transitionend",(function t(){x.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(x.zoomed),x.zoomedHd&&document.body.removeChild(x.zoomedHd),document.body.removeChild(A),x.zoomed.classList.remove("medium-zoom-image--opened"),x.template&&document.body.removeChild(x.template),T=!1,x.zoomed.removeEventListener("transitionend",t),x.original.dispatchEvent(g("medium-zoom:closed",{detail:{zoom:D}})),x.original=null,x.zoomed=null,x.zoomedHd=null,x.template=null,e(D)}))}else e(D)}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return x.original?z():b({target:t})},E=function(){return H},C=function(){return S},k=function(){return x.original},S=[],_=[],T=!1,q=0,H=n,x={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?H=t:(t||"string"==typeof t)&&s(t),H=d({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},H);var A=f(H.background);document.addEventListener("click",i),document.addEventListener("keyup",a),document.addEventListener("scroll",r),window.addEventListener("resize",z);var D={open:b,close:z,toggle:L,update:l,clone:c,attach:s,detach:u,on:y,off:w,getOptions:E,getImages:C,getZoomedImage:k};return D},b=function(){"use strict";function e(){i.classCallCheck(this,e),this.lightboxLinks=document.querySelectorAll(".lightbox"),this._configure(),this._run()}return i.createClass(e,[{key:"_configure",value:function(){var e=this;this.lightboxLinks.forEach((function(t){e._setHDLink(t),e._preventNavigation(t)}))}},{key:"_setHDLink",value:function(e){var t=e.querySelector("img"),n=e.href;t.setAttribute("data-zoom-src",n)}},{key:"_preventNavigation",value:function(e){null==e||e.addEventListener("click",(function(e){return e.preventDefault()}))}},{key:"_run",value:function(){w(".lightbox img",{background:"rgba(0, 0, 0, 0.75)",margin:32})}}]),e}();try{new b}catch(e){console.error("Could not init Lightbox: ".concat(e))}null==(y=document.querySelector("#related_page"))||y.addEventListener("change",(function(e){"0"!==y.value&&(window.location.href=y.value+"?cache=0&dev_template=1&test=1")}));i=o("dgWlw");var z=function(){"use strict";function e(){i.classCallCheck(this,e),this.templateOptions={templateID:"zoom-template",imageContainerID:"zoom-container",contentID:"zoom-content"},this.colorLinks=document.querySelectorAll(".colorlink"),this._createTemplateItem(),this._configure(),this._run(),this._handleEvents()}return i.createClass(e,[{key:"_createTemplateItem",value:function(){var e=document.createElement("template");e.setAttribute("id",this.templateOptions.templateID),e.innerHTML='  \n      <div class="template-colorlink-wrapper">\n        <div class="colorlink-content">\n          <aside id="'.concat(this.templateOptions.imageContainerID,'"></aside>\n          <article id="').concat(this.templateOptions.contentID,'"></article>\n        </div>\n      </div>\n    '),document.querySelector("body").appendChild(e)}},{key:"_configure",value:function(){var e=this;this.colorLinks.forEach((function(t){e._preventNavigation(t),e._setHDLink(t),e._handleColorLinkAction(t)}))}},{key:"_handleColorLinkAction",value:function(e){var t=this;e.addEventListener("click",(function(n){var o=document.querySelector("".concat(e.getAttribute("href")," .popupimagetext"));t.activeColorLinkInnerHTML=o.innerHTML}))}},{key:"_preventNavigation",value:function(e){e.addEventListener("click",(function(e){return e.preventDefault()}))}},{key:"_setHDLink",value:function(e){var t=e.querySelector("img"),n=document.querySelector("".concat(e.getAttribute("href")," img")).src;t.setAttribute("data-zoom-src",n)}},{key:"_setColorLinkContent",value:function(){var e=this;setTimeout((function(){var t=document.querySelector("#".concat(e.templateOptions.contentID));t&&(t.innerHTML=e.activeColorLinkInnerHTML)}),0),document.body.style.overflow="hidden"}},{key:"_run",value:function(){this.zoomInstance=w(".colorlink img",{template:"#".concat(this.templateOptions.templateID),container:"#".concat(this.templateOptions.imageContainerID),background:"rgba(0, 0, 0, 0.75)",margin:32})}},{key:"_handleEvents",value:function(){var e,t;null===(e=this.zoomInstance)||void 0===e||e.on("open",this._setColorLinkContent.bind(this)),null===(t=this.zoomInstance)||void 0===t||t.on("closed",(function(){document.body.style.overflow="auto"}))}}]),e}();try{new z}catch(e){console.error("Could not init Colorlink: ".concat(e))}var L=[];try{document.querySelectorAll(".qa-wrap").forEach((function(e,t){L.push({container:e,activeElement:null}),e.querySelectorAll(".qa-item").forEach((function(n){n.classList.contains("active")&&(L[t].activeElement=n),n.querySelector(".qa-header").onclick=function(t){!function(e,t){for(var n=0;n<L.length;n++)if(e===L[n].container){if(L[n].activeElement&&(L[n].activeElement.classList.remove("active"),L[n].activeElement===t)){L[n].activeElement=null;break}t.classList.add("active"),L[n].activeElement=t;break}}(e,n)}}))}))}catch(e){console.error("Could not init QA: ".concat(e))}try{!function(){var e=document.querySelector("#content_selector"),t=document.querySelector("#tabs-written"),n=document.querySelector("#tabs-video");null==e||e.addEventListener("change",(function(o){"video"===e.value&&(null==t||t.classList.add("hide"),null==n||n.classList.remove("hide")),"written"===e.value&&(null==t||t.classList.remove("hide"),null==n||n.classList.add("hide"))}))}()}catch(e){console.error("Could not init Content Selector: ".concat(e))}}();