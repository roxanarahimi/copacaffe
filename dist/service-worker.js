if(!self.define){let e,i={};const o=(o,s)=>(o=new URL(o+".js",s).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const r=e=>o(e,c),d={module:{uri:c},exports:a,require:r};i[c]=Promise.all(s.map((e=>d[e]||r(e)))).then((e=>(f(...e),a)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"copa-cafe"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.bd071c00.css",revision:null},{url:"/css/bootstrap.css",revision:"df2424636dec2e5aa14c683a3eeb8772"},{url:"/css/font-awesome.min.css",revision:"04425bbdc6243fc6e54bf8984fe50330"},{url:"/css/jquery-ui.css",revision:"8dc199ba480ce4ab57d308fefadbaf09"},{url:"/css/main.css",revision:"aef8d3dce945de73bcdac318a59e945e"},{url:"/css/normalize.css",revision:"c9bf05c838588f5589811d1511e24594"},{url:"/css/picto-foundry-food.css",revision:"22bda4038a22ca0246c340be5511501d"},{url:"/css/style-portfolio.css",revision:"e81d979c7a511cd2d3bb0481fab5e22f"},{url:"/favicon-1.ico",revision:"b9bda65a06c40f146539209c9ce11483"},{url:"/fonts/FontAwesome.otf",revision:"0b462f5cc07779cab3bef252c0271f2b"},{url:"/fonts/fontawesome-webfont.eot",revision:"f7c2b4b747b1a225eb8dee034134a1b0"},{url:"/fonts/fontawesome-webfont.svg",revision:"2980083682e94d33a66eef2e7d612519"},{url:"/fonts/fontawesome-webfont.ttf",revision:"706450d7bba6374ca02fe167d86685cb"},{url:"/fonts/fontawesome-webfont.woff",revision:"d9ee23d59d0e0e727b51368b458a0bff"},{url:"/fonts/fontawesome-webfont.woff2",revision:"97493d3f11c0a3bd5cbd959f5d19b699"},{url:"/fonts/icomoonacfe.eot",revision:"dba6609a4c77b78b18c28a5c44dd897f"},{url:"/fonts/icomoonacfe.svg",revision:"68c43a505093e77aab9c02d3a1c1af8b"},{url:"/fonts/icomoonacfe.ttf",revision:"fb2856c949c2392bd66b7b6a2af87979"},{url:"/fonts/icomoonacfe.woff",revision:"f4d706cf79257224695dd07b8bc47c1d"},{url:"/fonts/icomoond41d.eot",revision:"dba6609a4c77b78b18c28a5c44dd897f"},{url:"/fonts/picto-foundry-food.eot",revision:"79cb467b41cabf78cbcf6c6246b5eeea"},{url:"/fonts/picto-foundry-food.svg",revision:"1c734d6455ad0ebb123368ea3fc88e35"},{url:"/fonts/picto-foundry-food.ttf",revision:"ab10d205fef3b9031d751674a1860919"},{url:"/fonts/picto-foundry-food.woff",revision:"f125a10fcd351b36ff84635077c56d66"},{url:"/images/bagel.jpg",revision:"1d1a66b0bfa40dd424ef1b422ab885b1"},{url:"/images/beer.jpg",revision:"25c1c535bdc6bf6b90efc92bec05de32"},{url:"/images/beer_spec.jpg",revision:"0d66ac4711c4a0b7155c1fbfce7c8492"},{url:"/images/bread.jpg",revision:"5080e75b9d7757719bfbce01df3a21f2"},{url:"/images/bread1.jpg",revision:"a84c95c35880d17e8c5f1b8d4494b118"},{url:"/images/bread2.jpg",revision:"ee2a5f762968a09377fe4a193f11ce59"},{url:"/images/breakfast.jpg",revision:"f98aae1381de4dba0ffcf2623a52c69c"},{url:"/images/corn.jpg",revision:"1e5e4efa12a02d2af943a39a8383c455"},{url:"/images/featured.jpg",revision:"093f7235158bb3e69332765f0fc44989"},{url:"/images/food_icon01.jpg",revision:"304919b1257b41434578848fc628afb2"},{url:"/images/food_icon02.jpg",revision:"63ba8ea4c97a70d50c69e11e4318e998"},{url:"/images/food_icon03.jpg",revision:"ef81951070e61c9e24826bc29d43dd65"},{url:"/images/food_icon04.jpg",revision:"47cdda380f7a9a044c99a7ebf9228aee"},{url:"/images/food_icon05.jpg",revision:"4a4f38bf6c88b28b2f83b1abd80f7e8c"},{url:"/images/food_icon06.jpg",revision:"cb0552cd20242c15f8b9ebe4442ac65c"},{url:"/images/food_icon07.jpg",revision:"8fd7ff738ab251704cc1b14ae8219a51"},{url:"/images/food_icon08.jpg",revision:"df022deb837ef5f297444ab2f57c93ee"},{url:"/images/kabob.jpg",revision:"8d6b7f81d54ce722368488fdd554c9ba"},{url:"/images/limes.jpg",revision:"41016a62223a8451f192749ff4b30258"},{url:"/images/pricing.jpg",revision:"8cc99d5184ed7905f5ec22e487f5dcf6"},{url:"/images/radish.jpg",revision:"55912d2c8db6bfe394511f049cdceeb8"},{url:"/images/reservation-seat.jpg",revision:"fec9899911babc12463de33de78d0911"},{url:"/images/seeds.jpg",revision:"439dc285b650f239f3fcc0f91ba57ccb"},{url:"/images/slider1.jpg",revision:"f1a87417444981b1151ef64a559e107d"},{url:"/images/slider2.jpg",revision:"7eed77f8d23b765d7e1b4bf9d7f09896"},{url:"/images/slider3.JPG",revision:"e201c527fa5b75a5b1ee3aa870aba9e1"},{url:"/images/steak.jpg",revision:"47cac62960c1c8a7665602691a6553a5"},{url:"/index.html",revision:"ba714a89d6a87b2328559117a1c36242"},{url:"/js/about.7df34c12.js",revision:null},{url:"/js/app.c150a4e5.js",revision:null},{url:"/js/bootstrap.min.js",revision:"abda843684d022f3bc22bc83927fe05f"},{url:"/js/chunk-vendors.6796f670.js",revision:null},{url:"/js/jquery-1.10.2.js",revision:"b36eb23c18580f715487f3907d39da9e"},{url:"/js/jquery-1.10.2.min.js",revision:"9e0fc95e071e2914ddbcdfe0fcd76d70"},{url:"/js/jquery.mixitup.min.js",revision:"16e75928feab53148e20a2e6324076bf"},{url:"/js/main.js",revision:"51f5a35584ca103eea0c91d62ca82481"},{url:"/manifest.json",revision:"80a3c6f88c433d28f6ef6ef3284d7291"}],{})}));
//# sourceMappingURL=service-worker.js.map
