if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,d)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let c={};const s=e=>n(e,b),f={module:{uri:b},exports:c,require:s};i[b]=Promise.all(r.map((e=>f[e]||s(e)))).then((e=>(d(...e),c)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"portfolio"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.0ac110bb.css",revision:null},{url:"/css/chunk-vendors.923cbcb4.css",revision:null},{url:"/img/about.png",revision:"9ac8e42347e71d8ba6e6b7e7dd5d076f"},{url:"/img/cloudtype.png",revision:"e773559d8df01c86abfb219e0f5c5741"},{url:"/img/css.png",revision:"594aa284c4862d5ee3766d6d0bd42547"},{url:"/img/everland.png",revision:"49760bf557a41590a6ec617796d1569d"},{url:"/img/express.png",revision:"97c301cd8e242913a72ed23bac02c422"},{url:"/img/figma.png",revision:"396dc84f0aa0722bf115ddb567be0462"},{url:"/img/finder.e45c7345.png",revision:null},{url:"/img/finder.png",revision:"b1533a92eb3927372f90a7b406d1d411"},{url:"/img/fullpage.png",revision:"a074254e9b715092381d989ee8033610"},{url:"/img/github.png",revision:"81e93e7c4180fb263fdb958124229335"},{url:"/img/github2.png",revision:"6bcdf386752c27e542400fe2339b2aac"},{url:"/img/html.png",revision:"fb1e7f9db2540c3194a9179094a925e2"},{url:"/img/instagram.png",revision:"9084b7d32172b9fdd518f0d91452dcfa"},{url:"/img/jquery.png",revision:"48fe746eb012b145d687abf191d27415"},{url:"/img/js.png",revision:"a00831a712bb4f59eba35cb2c4c7a737"},{url:"/img/link.png",revision:"607e929de521842bccd961370d2b8a07"},{url:"/img/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/img/mail.png",revision:"805374a1d3bdaee29877dd651ffa7686"},{url:"/img/mariadb.png",revision:"8e25515d10989614b6d86f1990980669"},{url:"/img/mongodb.png",revision:"0fbd04cba8e061b55e9da307a880f8f3"},{url:"/img/moviefinder.png",revision:"cab00eb1bd44dd9989575bff4fd54565"},{url:"/img/mysql.png",revision:"995dba0baad861b51315365b0c2ad547"},{url:"/img/netlify.png",revision:"3d9f9920da8712e7c6014ad5be7caeb3"},{url:"/img/next.png",revision:"1c871f393a4ea92ea80b13b8d15af440"},{url:"/img/nodejs.png",revision:"4c6c0929cc58f241847a744b2de75e2f"},{url:"/img/notion.png",revision:"50cde159fc4ddd1824fa0cd26d38261b"},{url:"/img/npm.png",revision:"cedf6c0bcea24bef375b62df98721933"},{url:"/img/petsalon.png",revision:"41fe8492f59e0e5304ddbfa097e89e4e"},{url:"/img/phone.png",revision:"94272bb8252ece86d2d8663f2fbe5c5f"},{url:"/img/postman.png",revision:"73bb49edb42db9daf6cb32614e970ef4"},{url:"/img/react.png",revision:"28ad6305640283f7e86fcc76d2eb51e5"},{url:"/img/scaryhouse.png",revision:"939ee160f4900bac1fce9d3a1f5aef87"},{url:"/img/scss.png",revision:"6d454ae448825df4cd80fb76bd0bbd6a"},{url:"/img/swiper.png",revision:"b62e99ec203ad8ab1dbff7984371dc7c"},{url:"/img/textpoint.png",revision:"5f6ef28985ce950ed78b161eb26333fd"},{url:"/img/togrocery.png",revision:"4fc3c9b4abcb8d4d293c6e4bd2d88734"},{url:"/img/typescript.png",revision:"5ff1f323c240b720c3ea24111b9043c1"},{url:"/img/velog.png",revision:"44fb660d99e66a641dbef3e743432e49"},{url:"/img/vercel.png",revision:"e7f7a879a811da4b60c4cd57a25b46c7"},{url:"/img/vue.png",revision:"923cb2223d722233d5abcbfb583b73e7"},{url:"/img/wonderplace.png",revision:"bed7f160d9db77505782bfbf8f9adee2"},{url:"/img/zeplin.png",revision:"3ef0dd6ade97bcb64f016adb5b3c524e"},{url:"/index.html",revision:"5ce20762572b97c069441a4cda5065eb"},{url:"/js/app.1a289ad6.js",revision:null},{url:"/js/chunk-vendors.3767ed46.js",revision:null},{url:"/manifest.json",revision:"1770c2524b653c4741436956a1f7f256"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
