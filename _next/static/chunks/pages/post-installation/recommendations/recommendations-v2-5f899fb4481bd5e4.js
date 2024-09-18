(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{1161:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/recommendations/recommendations-v2",function(){return t(718)}])},718:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return l}});var n=t(5893),o=t(2673),i=t(3451),r=t(6595);t(9488);var s=t(2643),c=t(2154);let l=[{depth:2,value:"Introduction",id:"introduction"},{depth:2,value:"Data Format",id:"data-format"},{depth:2,value:"Upload Recommendations",id:"upload-recommendations"},{depth:3,value:"Prepare the frontend / backend",id:"prepare-the-frontend--backend"},{depth:3,value:"Login as Admin",id:"login-as-admin"},{depth:3,value:"Upload Recommendations",id:"upload-recommendations-1"}];function d(e){let a=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",code:"code",h3:"h3",ol:"ol",li:"li"},(0,s.a)(),e.components);return c.zH||p("FileTree",!1),c.zH.File||p("FileTree.File",!0),c.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"ACAP 2.0 Crop Recommendations"}),"\n",(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(c.UW,{type:"info",emoji:"ℹ️",children:[(0,n.jsxs)(a.p,{children:["This section describes methods for uploading the ",(0,n.jsx)(a.strong,{children:"ACAP 2.0"})," recommendations dataset, whose latest stable version is Release/Tag version ",(0,n.jsx)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("b",{children:"v10.1.0-alpha.10"})}),",\xa0accessible in the\xa0",(0,n.jsx)(a.strong,{children:"acap-v2"}),"\xa0repository."]}),(0,n.jsxs)(a.p,{children:["Follow this\xa0",(0,n.jsx)(a.a,{href:"/post-installation/recommendations/recommendations-v1",children:"link"})," to view upload instructions for the older ",(0,n.jsx)(a.strong,{children:"ACAP 1.0"})," recommendations dataset."]})]}),"\n",(0,n.jsx)(a.h2,{id:"data-format",children:"Data Format"}),"\n",(0,n.jsxs)(a.p,{children:["ACAP 2.0 uses recommendations data similar to the ACAP 1.0 raw data, added with climate risk information and exclusion of several Excel columns. View its raw EXCEL data files in the\xa0",(0,n.jsx)(a.code,{children:"/server/src/scripts/data/dataset_v2.0"}),"\xa0directory to gain insight into its new contents and data structure."]}),"\n",(0,n.jsx)(a.p,{children:"The samples only display the ACAP 2.0 recommendations dataset for the Rice and Corn crops."}),"\n",(0,n.jsx)(c.zH,{children:(0,n.jsx)(c.zH.Folder,{name:"server",defaultOpen:!0,children:(0,n.jsx)(c.zH.Folder,{name:"src",defaultOpen:!0,children:(0,n.jsx)(c.zH.Folder,{name:"scripts",defaultOpen:!0,children:(0,n.jsx)(c.zH.Folder,{name:"data",defaultOpen:!0,children:(0,n.jsxs)(c.zH.Folder,{name:"dataset_v2",defaultOpen:!0,children:[(0,n.jsx)(c.zH.File,{name:"rice_cropping_calendar.xlsx"}),(0,n.jsx)(c.zH.File,{name:"corn_recommendations_v3.xlsx"})]})})})})})}),"\n",(0,n.jsx)(c.UW,{type:"warning",children:(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.strong,{children:"crop stage codes"})," should match the ",(0,n.jsx)(a.strong,{children:"crop stage codes"})," defined in the ",(0,n.jsx)(a.a,{href:"/post-installation/cropping-calendar/calendar-v2#crop-stage-codes-and-labels",children:"ACAP 2.0 cropping calendar"})," raw CSV files specific to target crops to ensure the correct association of crop stages with target recommendations."]})}),"\n",(0,n.jsx)(c.UW,{children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Support for Multiple Crops"})," ",(0,n.jsx)("br",{}),"\r\nDevelopers can add crop stages and labels for other crops, following the crop stages code and label format in the\xa0",(0,n.jsx)(a.code,{children:"/client/src/utils/constants.js"}),"\xa0file and by creating recommendations datasets for other crops similar to the sample recommendations Excel files described in the\xa0",(0,n.jsx)(a.a,{href:"#data-format",children:"Data Format"}),"\xa0section as a reference."]})}),"\n",(0,n.jsx)(a.h2,{id:"upload-recommendations",children:"Upload Recommendations"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"ACAP 2.0"})," uploads its recommendations dataset using an upload form on the ",(0,n.jsx)(a.strong,{children:"Manage Recommendations"})," page, requiring Admin login."]}),"\n",(0,n.jsx)(c.UW,{type:"warning",children:(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.strong,{children:"crop stage codes"})," should match the ",(0,n.jsx)(a.strong,{children:"crop stage codes"})," defined in the ",(0,n.jsx)(a.a,{href:"/post-installation/cropping-calendar/calendar-v2#crop-stage-codes-and-labels",children:"ACAP 2.0 cropping calendar"})," raw CSV files specific to target crops to ensure the correct association of crop stages with target recommendations."]})}),"\n",(0,n.jsxs)(c.Rg,{children:[(0,n.jsx)(a.h3,{id:"prepare-the-frontend--backend",children:"Prepare the frontend / backend"}),(0,n.jsxs)(a.p,{children:["Update the frontend and backend codes with necessary data for supporting other crops, with data formats described in the ",(0,n.jsx)(a.a,{href:"#data-format",children:"Data Format"})," section."]}),(0,n.jsx)(a.h3,{id:"login-as-admin",children:"Login as Admin"}),(0,n.jsxs)(a.p,{children:["Login as an ACAP admin, then, navigate to the ",(0,n.jsx)(a.strong,{children:"Recommendations Management"})," page in the ",(0,n.jsx)(a.code,{children:"/admin/manage-recommendations"})," route."]}),(0,n.jsx)(a.h3,{id:"upload-recommendations-1",children:"Upload Recommendations"}),(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Upload Recommendations:"}),' Select a\xa0"Crop Type"\xa0from the available\xa0crops list and select options.']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Upload an Excel file:"})," Press the SEARCH icon."]}),"\n",(0,n.jsxs)(a.li,{children:["Browse for a recommendations Excel dataset that corresponds to the selected\xa0",(0,n.jsx)(a.strong,{children:"Crop Type"}),"\xa0in\xa0",(0,n.jsx)(a.strong,{children:"step #1"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Press the UPLOAD button."}),"\n",(0,n.jsx)(a.li,{children:"Wait for the upload success or fail status response to appear."}),"\n"]})]})]})}function p(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/recommendations/recommendations-v2.mdx",route:"/post-installation/recommendations/recommendations-v2",timestamp:1726673471e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"ACAP 2.0 Crop Recommendations",headings:l},pageNextRoute:"/post-installation/recommendations/recommendations-v2",nextraLayout:i.ZP,themeConfig:r.Z};a.default=(0,o.j)(m)},6595:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var n=t(5893),o=t(1163),i=t(3451),r=t(5675),s=t.n(r),c={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:a,locale:t}=(0,o.useRouter)(),{frontMatter:r}=(0,i.ZR)(),s="ACAP Tutorials",c="https://acaptutorials.github.io"+(a===t?e:"/".concat(t).concat(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{property:"og:url",content:c}),(0,n.jsx)("meta",{property:"og:title",content:r.title||s}),(0,n.jsx)("meta",{property:"og:description",content:r.description||"Development notes"}),(0,n.jsx)("meta",{property:"og:site_name",content:s}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:s}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:s}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","590e3e1"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=1161)}),_N_E=e.O()}]);