(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{4495:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/integration",function(){return a(3096)}])},3096:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(5893),s=a(2673),i=a(2169),o=a(6595);a(9488);var r=a(2643),l=a(2154);let c=[{depth:2,value:"Using NodeJS",id:"using-nodejs"},{depth:3,value:"Run the client app",id:"run-the-client-app"},{depth:3,value:"Run the server app",id:"run-the-server-app"},{depth:3,value:"Load the ACAP website",id:"load-the-acap-website"},{depth:2,value:"Using Docker",id:"using-docker"},{depth:3,value:"Build images",id:"build-images"},{depth:3,value:"Run containers",id:"run-containers"},{depth:3,value:"Stop containers",id:"stop-containers"},{depth:3,value:"Load the ACAP website",id:"load-the-acap-website-1"}];function d(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",strong:"strong",pre:"pre",code:"code",span:"span"},(0,r.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"D. Integration"}),"\n",(0,n.jsx)(l.UW,{type:"warning",emoji:"⚠️",children:(0,n.jsxs)(t.p,{children:["This section requires a successful set-up of the ",(0,n.jsx)(t.a,{href:"/installation/client-setup",children:"Client"})," and ",(0,n.jsx)(t.a,{href:"/installation/server-setup",children:"Server"})," to proceed."]})}),"\n",(0,n.jsx)(t.h2,{id:"using-nodejs",children:"Using NodeJS"}),"\n",(0,n.jsx)(t.p,{children:"Do the following steps to run the client and server apps when using NodeJS for local development."}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(t.h3,{id:"run-the-client-app",children:"Run the client app"}),(0,n.jsxs)(t.p,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"client"})," app using the commandline then run the script:"]}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(t.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"client"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"dev"})]})]})}),(0,n.jsx)(t.h3,{id:"run-the-server-app",children:"Run the server app"}),(0,n.jsxs)(t.p,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"server"})," app using the commandline then run the script:"]}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(t.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"server"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"dev"})]})]})}),(0,n.jsx)(t.h3,{id:"load-the-acap-website",children:"Load the ACAP website"}),(0,n.jsx)(t.p,{children:"Open a web browser and navigate to this local site to load the ACAP website on localhost:"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"http://localhost:3000"})})})})]}),"\n",(0,n.jsx)(t.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,n.jsx)(l.UW,{type:"default",emoji:"\uD83D\uDCA1",children:(0,n.jsxs)(t.p,{children:["ACAP uses Docker to run the production server app in Render using the server ",(0,n.jsx)(t.code,{children:"Dockerfile"}),". You can use this or the ",(0,n.jsx)(t.code,{children:"Dockerfile.acap"})," files in the ",(0,n.jsx)(t.strong,{children:"/server"})," directory to run the server app in production mode."]})}),"\n",(0,n.jsxs)(t.p,{children:["Using Docker for local development is optional. Do the following steps when using Docker for ",(0,n.jsx)(t.strong,{children:"localhost development"}),". Navigate to the project's root directory then:"]}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(t.h3,{id:"build-images",children:"Build images"}),(0,n.jsx)(t.p,{children:"Build the client and server containers for localhost development."}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"compose"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-f"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"docker-compose.dev.yml"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})})}),(0,n.jsx)(t.h3,{id:"run-containers",children:"Run containers"}),(0,n.jsx)(t.p,{children:"Create and start the development client and server containers."}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"compose"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-f"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"docker-compose.dev.yml"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"up"})]})})}),(0,n.jsx)(t.h3,{id:"stop-containers",children:"Stop containers"}),(0,n.jsx)(t.p,{children:"Stop and remove the development containers, networks, images and volumes"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"compose"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-f"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"docker-compose.dev.yml"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"down"})]})})}),(0,n.jsx)(t.h3,{id:"load-the-acap-website-1",children:"Load the ACAP website"}),(0,n.jsx)(t.p,{children:"Open a web browser and navigate to this local site to load the ACAP website on localhost:"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"http://localhost:3000"})})})})]})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/installation/integration.mdx",route:"/installation/integration",timestamp:1725321922e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting",video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"D. Integration",headings:c},pageNextRoute:"/installation/integration",nextraLayout:i.ZP,themeConfig:o.Z};t.default=(0,s.j)(p)},6595:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),s=a(1163),i=a(2169),o=a(5675),r=a.n(o),l={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:a}=(0,s.useRouter)(),{frontMatter:o}=(0,i.ZR)(),r="ACAP Tutorials",l="https://acaptutorials.github.io"+(t===a?e:"/".concat(a).concat(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{property:"og:url",content:l}),(0,n.jsx)("meta",{property:"og:title",content:o.title||r}),(0,n.jsx)("meta",{property:"og:description",content:o.description||"Development notes"}),(0,n.jsx)("meta",{property:"og:site_name",content:r}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:r}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.9",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.9",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","v10.1.0-alpha.9",", dev branch @","595f21c"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=4495)}),_N_E=e.O()}]);