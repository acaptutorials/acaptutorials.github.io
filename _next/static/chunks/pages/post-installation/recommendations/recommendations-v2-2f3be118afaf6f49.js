(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{1161:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/recommendations/recommendations-v2",function(){return a(718)}])},718:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(5893),o=a(2673),i=a(3451),r=a(1860);a(9488);var s=a(2643),l=a(2154);let c=[{depth:2,value:"Introduction",id:"introduction"},{depth:2,value:"Data Format",id:"data-format"},{depth:2,value:"Upload Recommendations",id:"upload-recommendations"},{depth:3,value:"Prepare the frontend / backend",id:"prepare-the-frontend--backend"},{depth:3,value:"Login as Admin",id:"login-as-admin"},{depth:3,value:"Upload Recommendations",id:"upload-recommendations-1"}];function d(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",blockquote:"blockquote",code:"code",h3:"h3",ol:"ol",li:"li"},(0,s.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"ACAP 2.0 Crop Recommendations"}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(l.UW,{type:"info",emoji:"ℹ️",children:[(0,n.jsxs)(t.p,{children:["This section describes methods for uploading the ",(0,n.jsx)(t.strong,{children:"ACAP 2.0"})," recommendations dataset, whose latest stable version is Release/Tag version ",(0,n.jsx)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("b",{children:"v10.1.0-alpha.10"})}),",\xa0accessible in the\xa0",(0,n.jsx)(t.strong,{children:"acap-v2"}),"\xa0repository."]}),(0,n.jsxs)(t.p,{children:["Follow this\xa0",(0,n.jsx)(t.a,{href:"/post-installation/recommendations/recommendations-v1",children:"link"})," to view upload instructions for the older ",(0,n.jsx)(t.strong,{children:"ACAP 1.0"})," recommendations dataset."]})]}),"\n",(0,n.jsx)(t.h2,{id:"data-format",children:"Data Format"}),"\n",(0,n.jsxs)(l.UW,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["The latest updates for ",(0,n.jsx)(t.strong,{children:"ACAP 2.1"}),", starting with @commit ",(0,n.jsx)(t.strong,{children:"95a97cd"})," in the ",(0,n.jsx)(t.strong,{children:"acap-v2 dev"})," branch, use a new Crop Recommendations Excel template different from the ones mentioned on this page."]}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["These Crop Recommendations are only compatible up to @commit ",(0,n.jsx)(t.strong,{children:"ee49568"})," in the ",(0,n.jsx)(t.strong,{children:"acap-v2 dev"})," branch."]}),"\n"]}),(0,n.jsx)(t.p,{children:"Kindly chat the ACAP group chat for more information about the new Crop Recommendations Excel file for ACAP 2.1."})]}),"\n",(0,n.jsxs)(t.p,{children:["ACAP 2.0 uses recommendations data similar to the ACAP 1.0 raw data, added with climate risk information and exclusion of several Excel columns. View its raw EXCEL data files in the\xa0",(0,n.jsx)(t.code,{children:"/server/src/scripts/data/dataset_v2.0"}),"\xa0directory to gain insight into its new contents and data structure."]}),"\n",(0,n.jsx)(t.p,{children:"The samples only display the ACAP 2.0 recommendations dataset for the Rice and Corn crops."}),"\n",(0,n.jsx)(l.zH,{children:(0,n.jsx)(l.zH.Folder,{name:"server",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"src",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"scripts",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"data",defaultOpen:!0,children:(0,n.jsxs)(l.zH.Folder,{name:"dataset_v2",defaultOpen:!0,children:[(0,n.jsx)(l.zH.File,{name:"rice_recommendations_v4.xlsx"}),(0,n.jsx)(l.zH.File,{name:"corn_recommendations_v3.xlsx"})]})})})})})}),"\n",(0,n.jsx)(l.UW,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"crop stage labels"})," should match the ",(0,n.jsx)(t.strong,{children:"crop stage codes"})," defined in the ",(0,n.jsx)(t.a,{href:"/post-installation/cropping-calendar/calendar-v2#crop-stage-codes-and-labels",children:"ACAP 2.0 cropping calendar"})," Excel files specific to target crops to ensure the correct association of crop stages with target recommendations."]})}),"\n",(0,n.jsx)(l.UW,{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Support for Multiple Crops"})," ",(0,n.jsx)("br",{}),"\r\nDevelopers can add crop stages and labels for other crops, following the crop stages code and label format in the\xa0",(0,n.jsx)(t.code,{children:"/client/src/utils/constants.js"}),"\xa0file and by creating recommendations datasets for other crops similar to the sample recommendations Excel files described in the\xa0",(0,n.jsx)(t.a,{href:"#data-format",children:"Data Format"}),"\xa0section as a reference."]})}),"\n",(0,n.jsx)(t.h2,{id:"upload-recommendations",children:"Upload Recommendations"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"ACAP 2.0"})," uploads its recommendations dataset using an upload form on the ",(0,n.jsx)(t.strong,{children:"Manage Recommendations"})," page, requiring Admin login."]}),"\n",(0,n.jsx)(l.UW,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"crop stage labels"})," should match the ",(0,n.jsx)(t.strong,{children:"crop stage codes"})," defined in the ",(0,n.jsx)(t.a,{href:"/post-installation/cropping-calendar/calendar-v2#crop-stage-codes-and-labels",children:"ACAP 2.0 cropping calendar"})," Excel files specific to target crops to ensure the correct association of crop stages with target recommendations."]})}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(t.h3,{id:"prepare-the-frontend--backend",children:"Prepare the frontend / backend"}),(0,n.jsxs)(t.p,{children:["Update the frontend and backend codes with necessary data for supporting other crops, with data formats described in the ",(0,n.jsx)(t.a,{href:"#data-format",children:"Data Format"})," section."]}),(0,n.jsxs)(l.UW,{type:"info",emoji:"ℹ️",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Overwrite"})," and ",(0,n.jsx)(t.strong,{children:"commit"})," the sample cropping calendar Excel template files ",(0,n.jsx)(t.code,{children:"rice_recommendations_v4.xlsx"})," and ",(0,n.jsx)(t.code,{children:"corn_recommendations_v3.xlsx"})," in the ",(0,n.jsx)(t.strong,{children:"server"})," directory with the ",(0,n.jsx)(t.strong,{children:"regional recommendation files"})," to change the default sample Excel templates during live deployment."]}),(0,n.jsxs)(t.p,{children:["Also, change the values of the environment variables (",(0,n.jsx)(t.code,{children:"RECOMMENDATIONS_RICE_EXCEL_FILE"}),", ",(0,n.jsx)(t.code,{children:"RECOMMENDATIONS_CORN_EXCEL_FILE"}),") associated with its file names in the ",(0,n.jsx)(t.strong,{children:"client"})," ",(0,n.jsx)(t.code,{children:".env"})," file and ",(0,n.jsx)(t.strong,{children:"GitHub Secrets"})," if there is a need to use different file names or add new templates."]}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE:"})," This step is only compatible until @commit ",(0,n.jsx)(t.strong,{children:"ee49568"})," (pre-ACAP 2.1) in the ",(0,n.jsx)(t.strong,{children:"acap-v2 dev"})," branch. Kindly chat the ACAP group chat for more information about the new Crop Recommendations Excel file format and management for ACAP 2.1 if it's missing in the online documentation."]}),"\n"]})]}),(0,n.jsx)(t.h3,{id:"login-as-admin",children:"Login as Admin"}),(0,n.jsxs)(t.p,{children:["Login as an ACAP admin, then, navigate to the ",(0,n.jsx)(t.strong,{children:"Recommendations Management"})," page in the ",(0,n.jsx)(t.code,{children:"/admin/manage-recommendations"})," route."]}),(0,n.jsx)(t.h3,{id:"upload-recommendations-1",children:"Upload Recommendations"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Upload Recommendations:"}),' Select a\xa0"Crop Type"\xa0from the available\xa0crops list and select options.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Upload an Excel file:"})," Press the SEARCH icon."]}),"\n",(0,n.jsxs)(t.li,{children:["Browse for a recommendations Excel dataset that corresponds to the selected\xa0",(0,n.jsx)(t.strong,{children:"Crop Type"}),"\xa0in\xa0",(0,n.jsx)(t.strong,{children:"step #1"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Press the UPLOAD button."}),"\n",(0,n.jsx)(t.li,{children:"Wait for the upload success or fail status response to appear."}),"\n"]})]})]})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/recommendations/recommendations-v2.mdx",route:"/post-installation/recommendations/recommendations-v2",timestamp:1735207507e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"ACAP 2.0 Crop Recommendations",headings:c},pageNextRoute:"/post-installation/recommendations/recommendations-v2",nextraLayout:i.ZP,themeConfig:r.Z};t.default=(0,o.j)(m)},1860:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(5893),o=a(1163),i=a(3451),r=a(5675),s=a.n(r),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=a(9548),d=a.n(c),p={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:a}=(0,o.useRouter)(),{frontMatter:r}=(0,i.ZR)(),s="https://acaptutorials.github.io"+(t===a?e:"/".concat(a).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap 2.1, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, climate information system, climate information system (cis), agro-climatic advisory portal, agro-climatic advisory portal (acap), agro-climatic advisory portal (ACAP), agro climatic advisory portal, agroclimatic advisory portal (acap), agroclimatic advisory portal (ACAP)"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,n.jsx)("meta",{property:"og:url",content:s}),(0,n.jsx)("meta",{property:"og:title",content:r.title||l}),(0,n.jsx)("meta",{property:"og:description",content:r.description||c}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsx)(function(){return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,n.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,n.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,n.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,n.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=1161)}),_N_E=e.O()}]);