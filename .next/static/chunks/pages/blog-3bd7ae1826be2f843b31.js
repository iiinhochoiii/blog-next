_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{HfOp:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("bFfw");n.default=function(){return Object(r.jsx)(o.a,{children:"/blog"})}},YFqc:function(e,n,t){e.exports=t("cTJO")},bFfw:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var r=t("nKUr"),o=t("q1tI"),c=t("vOnD"),i=t("YFqc"),a=t.n(i),s=c.c.div.withConfig({displayName:"headers__HeaderWrap",componentId:"sc-1cy9sxb-0"})(["background:none;box-shadow:rgba(0,0,0,0.05) 0px 5px 10px -5px;padding:20px 0px;width:100%;position:fixed;top:0;"]),l=c.c.div.withConfig({displayName:"headers__HeaderContainer",componentId:"sc-1cy9sxb-1"})(["width:1180px;max-width:100%;margin:0 auto;"]),d=c.c.div.withConfig({displayName:"headers__HeaderContent",componentId:"sc-1cy9sxb-2"})(["display:flex;justify-content:space-between;&>div{&>p{margin:0;}&>a{color:#333333;text-decoration:none;cursor:pointer;color:#ffffff;}}&>.logo{font-family:'Audiowide',cursive;&>a{font-size:22px;}}&>.menu{display:flex;&>a{margin:0px 10px;font-weight:bold;}}&>.auth{display:flex;&>a{margin-left:10px;}}"]),f=function(){var e=Object(o.useState)(0),n=e[0],t=e[1];return Object(o.useEffect)((function(){var e=function(){t(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[n]),Object(r.jsx)(s,{style:n>0?{backgroundColor:"#00020B"}:{},children:Object(r.jsx)(l,{children:Object(r.jsxs)(d,{children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{children:"Choi Tech"})})}),Object(r.jsxs)("div",{className:"menu",children:[Object(r.jsx)(a.a,{href:"/blog",children:Object(r.jsx)("a",{children:"\ube14\ub85c\uadf8"})}),Object(r.jsx)(a.a,{href:"/project",children:Object(r.jsx)("a",{children:"\ud504\ub85c\uc81d\ud2b8"})}),Object(r.jsx)(a.a,{href:"/qna",children:Object(r.jsx)("a",{children:"QnA"})})]}),Object(r.jsxs)("div",{className:"auth",children:[Object(r.jsx)(a.a,{href:"/login",children:Object(r.jsx)("a",{children:"\ub85c\uadf8\uc778"})}),Object(r.jsx)(a.a,{href:"/join",children:Object(r.jsx)("a",{children:"\ud68c\uc6d0\uac00\uc785"})})]})]})})})},u=c.c.div.withConfig({displayName:"footer__FooterWrap",componentId:"sc-16sz3fp-0"})(["width:100%;border-top:1px solid rgb(229,229,229);"]),p=c.c.div.withConfig({displayName:"footer__FooterContainer",componentId:"sc-16sz3fp-1"})(["width:1180px;margin:0 auto;max-width:100%;padding:25px 0px;&>p{margin:0;font-size:12px;line-height:20px;}&>.footer_copyright{font-weight:bold;}"]),h=function(){return Object(r.jsx)(u,{children:Object(r.jsxs)(p,{children:[Object(r.jsx)("p",{children:"\ubcf8 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \ubaa9\uc801\uc73c\ub85c \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)("p",{children:"\ubb38\uc758 \uc0ac\ud56d \ubc0f \uac74\uc758 \uc0ac\ud56d\uc740 dlsgh120@gmail.com \uc73c\ub85c \ubcf4\ub0b4\uc8fc\uc2dc\uba74 \ub2f5\ubcc0 \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)("p",{className:"footer_copyright",children:"Copyright \xa9 2021 by ChoiLog, Inc. All rights reserved"})]})})},j=c.c.div.withConfig({displayName:"baseTemplate__Wrap",componentId:"sc-1swpnwj-0"})(["width:100%;"]),b=c.c.div.withConfig({displayName:"baseTemplate__Header",componentId:"sc-1swpnwj-1"})([""]),x=c.c.div.withConfig({displayName:"baseTemplate__Content",componentId:"sc-1swpnwj-2"})([""]),v=function(e){var n=e.children;return Object(r.jsxs)(j,{children:[Object(r.jsx)(b,{children:Object(r.jsx)(f,{})}),Object(r.jsx)(x,{children:n}),Object(r.jsx)("footer",{children:Object(r.jsx)(h,{})})]})}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),i=t("elyg"),a=t("nOHt"),s=t("vNVm"),l={};function d(e,n,t,r){if((0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),u=f.href,p=f.as,h=e.children,j=e.replace,b=e.shallow,x=e.scroll,v=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var w=c.Children.only(h),g=w&&"object"===typeof w&&w.ref,m=(0,s.useIntersection)({rootMargin:"200px"}),O=r(m,2),y=O[0],_=O[1],C=c.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,c.useEffect)((function(){var e=_&&n&&(0,i.isLocalURL)(u),r="undefined"!==typeof v?v:t&&t.locale,o=l[u+"%"+p+(r?"%"+r:"")];e&&!o&&d(t,u,p,{locale:r})}),[p,u,_,v,n,t]);var N={ref:C,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,u,p,j,b,x,v)},onMouseEnter:function(e){(0,i.isLocalURL)(u)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(t,u,p,{priority:!0}))}};return(e.passHref||"a"===w.type&&!("href"in w.props))&&(N.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof v?v:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(w,N)};n.default=f},uh6c:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t("HfOp")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,o=(0,c.useRef)(),l=(0,c.useState)(!1),d=r(l,2),f=d[0],u=d[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){c.unobserve(e),0===i.size&&(c.disconnect(),s.delete(o))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){a||f||(0,i.default)((function(){return u(!0)}))}),[f]),[p,f]};var c=t("q1tI"),i=o(t("0G5g")),a="undefined"!==typeof IntersectionObserver;var s=new Map}},[["uh6c",0,2,1,3]]]);