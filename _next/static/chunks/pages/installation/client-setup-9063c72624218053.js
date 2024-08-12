(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{9740:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/client-setup",function(){return a(3894)}])},3894:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(5893),i=a(2673),s=a(2169),o=a(6595);a(9488);var r=a(2643),l=a(2154);let c=[{depth:3,value:"Setup environment variables",id:"setup-environment-variables"},{depth:3,value:"Copy template files",id:"copy-template-files"},{depth:3,value:"Update environment variables after deployment",id:"update-environment-variables-after-deployment"}];function d(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",strong:"strong",code:"code",pre:"pre",span:"span",ol:"ol",li:"li",ul:"ul"},(0,r.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"C. Client Setup"}),"\n",(0,n.jsx)(t.p,{children:"Please read the client's README file in /client/README.md as reference for more information on the client environment variables."}),"\n",(0,n.jsx)(l.UW,{emoji:"ℹ️",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://youtu.be/f3icH3jmnTo",children:"09 Client setup for localhost development"})," video tutorial shows how to initialize the server for localhost development in more detail."]})}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(t.h3,{id:"setup-environment-variables",children:"Setup environment variables"}),(0,n.jsxs)(t.p,{children:["Update the ",(0,n.jsx)(t.strong,{children:"client"})," ",(0,n.jsx)(t.code,{children:".env"})," file, copying the keys and values from the ",(0,n.jsx)(t.code,{children:".env.example"})," file. You can leave the default values for now, but be sure to update the following with new values:"]}),(0,n.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"client"})," ",(0,n.jsx)(t.code,{children:"REGION_NAME"})," should be similar with the ",(0,n.jsx)(t.strong,{children:"server"})," ",(0,n.jsx)(t.code,{children:"REGION_NAME"})," value."]})}),(0,n.jsx)(t.pre,{"data-language":"env","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(t.code,{"data-language":"env","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_NAME"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"DEFAULT_PROVINCE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"DEFAULT_MUNICIPALITY // --> Any municipality under the DEFAULT_PROVINCE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_API_KEY"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_AUTHDOMAIN"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_MESSAGING_SENDER_ID"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_APP_ID"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_MEASUREMENT_ID"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_CODE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_LAT_AND_LNG"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGIONAL_FIELD_OFFICE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_URL"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"CROPPING_CALENDAR_RICE_EXCEL_FILE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"CROPPING_CALENDAR_CORN_EXCEL_FILE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"RECOMMENDATIONS_RICE_EXCEL_FILE"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"RECOMMENDATIONS_CORN_EXCEL_FILE"})})]})}),(0,n.jsx)(t.h3,{id:"copy-template-files",children:"Copy template files"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a directory named ",(0,n.jsx)(t.strong,{children:'"files"'})," under the /client/public directory: ",(0,n.jsx)(t.strong,{children:'"/client/public/files"'}),"."]}),"\n"]}),(0,n.jsx)(l.zH,{children:(0,n.jsx)(l.zH.Folder,{name:"client",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"public",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"files"})})})}),(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Copy the Excel files from the ",(0,n.jsx)(t.strong,{children:'"/server/src/scripts/data/dataset_v2.0"'})," directory to the ",(0,n.jsx)(t.strong,{children:'"files"'})," directory"]}),"\n"]}),(0,n.jsx)(l.zH,{children:(0,n.jsx)(l.zH.Folder,{name:"server",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"src",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"scripts",defaultOpen:!0,children:(0,n.jsxs)(l.zH.Folder,{name:"data",defaultOpen:!0,children:[(0,n.jsxs)(l.zH.Folder,{name:"dataset_v2.0",defaultOpen:!0,children:[(0,n.jsx)(l.zH.File,{name:"corn_cropping_calendar.xlsx"}),(0,n.jsx)(l.zH.File,{name:"corn_recommendations_v3.xlsx"}),(0,n.jsx)(l.zH.File,{name:"rice_cropping_calendar.xlsx"}),(0,n.jsx)(l.zH.File,{name:"rice_recommendations_v4.xlsx"})]}),(0,n.jsx)(l.zH.File,{name:"pagasa_seasonal_v2.xlsx"})]})})})})}),(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Copy the the ",(0,n.jsx)(t.strong,{children:"/server/src/scripts/data/pagasa_seasonal_v2.xlsx"})," Excel file to the ",(0,n.jsx)(t.strong,{children:'"files"'})," directory"]}),"\n",(0,n.jsxs)(t.li,{children:["Use the ",(0,n.jsx)(t.strong,{children:'"files"'})," directory and its contents on localhost development but not push it to the repository."]}),"\n"]}),(0,n.jsx)(t.h3,{id:"update-environment-variables-after-deployment",children:"Update environment variables after deployment"}),(0,n.jsxs)(t.p,{children:["Certain client environment variables, such as URLs (i.e., ",(0,n.jsx)(t.code,{children:"BASE_URL_PROD"}),") will become available after deployment. Update the rest of the ",(0,n.jsx)(t.code,{children:".env"})," variables later after:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Setting-up and deploying the (development and production) servers respectively to their own Render.com cloud services"}),"\n",(0,n.jsx)(t.li,{children:"Deploying the development website to Firebase Hosting"}),"\n",(0,n.jsx)(t.li,{children:"Deploying the production website to GitHub Pages"}),"\n"]})]})]})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/installation/client-setup.mdx",route:"/installation/client-setup",timestamp:1723476263e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting",video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"C. Client Setup",headings:c},pageNextRoute:"/installation/client-setup",nextraLayout:s.ZP,themeConfig:o.Z};t.default=(0,i.j)(h)},6595:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),i=a(1163),s=a(2169),o=a(5675),r=a.n(o),l={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:a}=(0,i.useRouter)(),{frontMatter:o}=(0,s.ZR)(),r="ACAP Tutorials",l="https://acaptutorials.github.io"+(t===a?e:"/".concat(a).concat(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{property:"og:url",content:l}),(0,n.jsx)("meta",{property:"og:title",content:o.title||r}),(0,n.jsx)("meta",{property:"og:description",content:o.description||"Development notes"}),(0,n.jsx)("meta",{property:"og:site_name",content:r}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:r}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.7",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.7",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","v10.1.0-alpha.7",", dev branch @","a200e11"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=9740)}),_N_E=e.O()}]);