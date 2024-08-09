(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{5187:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/weather-forecasts/seasonal-forecast",function(){return t(6045)}])},6045:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return c}});var n=t(5893),s=t(2673),i=t(2169),o=t(6595);t(9488);var r=t(2643),l=t(2154);let c=[{depth:2,value:"Introduction",id:"introduction"},{depth:2,value:"PAGASA Seasonal Weather Forecast Excel File",id:"pagasa-seasonal-weather-forecast-excel-file"},{depth:2,value:"Update the Seasonal Weather Forecast",id:"update-the-seasonal-weather-forecast"},{depth:3,value:"Obtain Seasonal Weather Forecast Data",id:"obtain-seasonal-weather-forecast-data"},{depth:3,value:"Upload the Seasonal Weather Forecast Excel File",id:"upload-the-seasonal-weather-forecast-excel-file"},{depth:3,value:"Update Weather Systems Data",id:"update-weather-systems-data"},{depth:2,value:"El Nino / La Nina Data",id:"el-nino--la-nina-data"},{depth:2,value:"ACAP REST API",id:"acap-rest-api"},{depth:2,value:"Recommendations",id:"recommendations"}];function d(e){let a=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",strong:"strong",img:"img",em:"em",code:"code",h3:"h3",ol:"ol",li:"li",pre:"pre",span:"span",ul:"ul"},(0,r.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"PAGASA Seasonal Weather Forecast"}),"\n",(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(a.p,{children:["After achieving a successful initialization from following the steps in the ",(0,n.jsx)(a.a,{href:"/installation",children:"Installation"})," section, developers will notice a blank, default Seasonal weather forecast table in the public ",(0,n.jsx)(a.strong,{children:"ACAP Services → Seasonal Forecast"})," page."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FxHwCJYnRqaxO4eKjjXPV_thumbnail?alt=media&token=e25471b0-6855-4dc6-b021-7674b3b6faa9",alt:"seasonal-init"})}),"\n",(0,n.jsx)(a.p,{children:"Follow these steps to update it with the latest PAGASA seasonal weather forecast data."}),"\n",(0,n.jsx)(a.h2,{id:"pagasa-seasonal-weather-forecast-excel-file",children:"PAGASA Seasonal Weather Forecast Excel File"}),"\n",(0,n.jsx)(a.p,{children:"ACAP Bicol, having a Memorandum of Agreement (MOA) with PAGASA, regularly receives PASAGSA seasonal weather forecast data in Excel file format through email. ACAP Bicol Admins upload these to the portal to update the seasonal weather forecast data."}),"\n",(0,n.jsx)(l.UW,{type:"warning",children:(0,n.jsxs)(a.p,{children:["For consistency, ACAP's seasonal weather forecast processing scripts ",(0,n.jsx)(a.em,{children:"expect"})," an Excel data format similar to the ",(0,n.jsx)(a.code,{children:'"/server/src/scripts/data/pagasa_seasonal_v2.xlsx"'})," Excel file. PAGASA shared this file for Bicol's\xa0",(0,n.jsx)(a.strong,{children:"November 2022 - April 2023"}),"\xa0seasonal weather forecast."]})}),"\n",(0,n.jsx)(l.zH,{children:(0,n.jsx)(l.zH.Folder,{name:"server",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"src",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"scripts",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"data",defaultOpen:!0,children:(0,n.jsx)(l.zH.File,{name:"pagasa_seasonal_v2.xlsx"})})})})})}),"\n",(0,n.jsxs)(a.p,{children:["For reference, the data in the seasonal weather forecast Excel file is also available in JPEG/picture format at the PAGASA ",(0,n.jsx)(a.strong,{children:"Seasonal Forecast"})," web page at ",(0,n.jsx)(a.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast"})," under the ",(0,n.jsx)(a.strong,{children:"Forecast Rainfall Analysis"})," section."]}),"\n",(0,n.jsx)(a.h2,{id:"update-the-seasonal-weather-forecast",children:"Update the Seasonal Weather Forecast"}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(a.h3,{id:"obtain-seasonal-weather-forecast-data",children:"Obtain Seasonal Weather Forecast Data"}),(0,n.jsx)(a.p,{children:"Obtain the latest PAGASA seasonal weather forecast Excel file."}),(0,n.jsxs)(a.p,{children:["Developers (or Admins) can use the default seasonal weather forecast Excel file described in the\xa0",(0,n.jsx)(a.a,{href:"#pagasa-seasonal-weather-forecast-excel-file",children:"PAGASA Seasonal Weather Forecast Excel File"}),", using values for their respective region, if the PAGASA-shared seasonal weather forecast Excel file is not readily available."]}),(0,n.jsx)(a.h3,{id:"upload-the-seasonal-weather-forecast-excel-file",children:"Upload the Seasonal Weather Forecast Excel File"}),(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Sign in as an ACAP Admin, then go to the ",(0,n.jsx)(a.strong,{children:"ACAP Settings"})," → ",(0,n.jsx)(a.strong,{children:"SEASONAL"})," tab. This page is accessible in the localhost route:"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(a.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"https://localhost:3000/admin/weather/"})})})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Press the ",(0,n.jsx)(a.strong,{children:"SEARCH"})," icon button under the ",(0,n.jsx)(a.strong,{children:"Upload an Excel file"})," label. Look for and select the target PAGASA seasonal weather forecast Excel file from the local hard drive."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FCcnoVvo5Eh7Jp3HnpJ3B_thumbnail?alt=media&token=1e019579-cb34-4943-a90f-7fe2abaf7d28",alt:"search-excel"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Fill in the\xa0input values under the ",(0,n.jsx)(a.strong,{children:"Tropical Cyclone Input"}),"\xa0section. Refer to the seasonal Excel file's 3rd tab, which contains pictures of the expected number of tropical cyclones in JPEG/picture format to populate these values. This step is required to upload the Excel file on ",(0,n.jsx)(a.strong,{children:"step #4"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FSWft12B3Olh52MASPYZ3_thumbnail?alt=media&token=6364d5ff-0721-41c3-9ca9-c8e2c48a2222",alt:"tropica-cyclone-count"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Press the ",(0,n.jsx)(a.strong,{children:"UPLOAD"})," button beside the ",(0,n.jsx)(a.strong,{children:"SEARCH"})," icon to upload the Excel file. A successful upload should update the default seasonal weather forecast data with new data defined in the Excel file."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2Fr3eKqHtFf39IZblyPXHT_thumbnail?alt=media&token=f51db117-6ca9-4591-ac42-987c7b218699",alt:"seaonal-upload-success"})}),"\n"]}),"\n"]}),(0,n.jsx)(a.h3,{id:"update-weather-systems-data",children:"Update Weather Systems Data"}),(0,n.jsxs)(a.p,{children:["Add, edit or delete items under the ",(0,n.jsx)(a.strong,{children:"Weather Systems that May Affect the Region"})," section in the ",(0,n.jsx)(a.strong,{children:"ACAP Settings"})," → ",(0,n.jsx)(a.strong,{children:"SEASONAL"})," tab."]})]}),"\n",(0,n.jsx)(a.h2,{id:"el-nino--la-nina-data",children:"El Nino / La Nina Data"}),"\n",(0,n.jsxs)(a.p,{children:["ACAP displays El Nino / La Nina information with data sourced from the PAGASA ",(0,n.jsx)(a.strong,{children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page at ",(0,n.jsx)(a.a,{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",children:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"It updates the data using a cron job, running in a GitHub Actions Scheduled Workflow every Sunday."}),"\n",(0,n.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,n.jsx)(a.p,{children:"Manual mechanisms for triggering the update are currently not available."})}),"\n",(0,n.jsx)(a.h2,{id:"acap-rest-api",children:"ACAP REST API"}),"\n",(0,n.jsxs)(a.p,{children:["Seasonal weather forecast data is available in the REST API endpoints (plus other query parameters) if the ",(0,n.jsx)(a.a,{href:"/post-installation/acap-rcmas-api",children:"ACAP-RCMAS REST APIs"})," are active:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Current data:"})," ",(0,n.jsx)(a.code,{children:"GET /api/weatherforecast?type=seasonal"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Historical data:"})," ",(0,n.jsx)(a.code,{children:"GET /api/weatherforecast/archives?type=seasonal"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,n.jsxs)(a.p,{children:["PAGASA has discussed creating a REST API for sharing weather forecast data. ACAP should integrate with this API after becoming available as an upgrade to its ",(0,n.jsx)(a.a,{href:"#upload-the-seasonal-weather-forecast-excel-file",children:"semi-automatic method"})," of uploading PAGASA-shared seasonal weather forecast Excel files."]})]})}function p(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/weather-forecasts/seasonal-forecast.mdx",route:"/post-installation/weather-forecasts/seasonal-forecast",timestamp:1723171558e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting",video:{title:"Video Tutorials",type:"page"},about:{title:"About",type:"page"},references:"References"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"}]},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"PAGASA Seasonal Weather Forecast",headings:c},pageNextRoute:"/post-installation/weather-forecasts/seasonal-forecast",nextraLayout:i.ZP,themeConfig:o.Z};a.default=(0,s.j)(h)},6595:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var n=t(5893),s=t(1163),i=t(2169),o=t(5675),r=t.n(o),l={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:a,locale:t}=(0,s.useRouter)(),{frontMatter:o}=(0,i.ZR)(),r="ACAP Tutorials",l="https://acaptutorials.github.io"+(a===t?e:"/".concat(t).concat(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap requirements, acap installation, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture"}),(0,n.jsx)("meta",{property:"og:url",content:l}),(0,n.jsx)("meta",{property:"og:title",content:o.title||r}),(0,n.jsx)("meta",{property:"og:description",content:o.description||"Development notes"}),(0,n.jsx)("meta",{property:"og:site_name",content:r}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:r}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.6",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.6",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","v10.1.0-alpha.6",", dev branch @","e2df7bf"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=5187)}),_N_E=e.O()}]);