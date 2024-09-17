(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{8630:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog",function(){return i(1588)}])},1588:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return d}});var a=i(5893),t=i(2673),s=i(2169),r=i(6595);i(9488);var o=i(2643),l=i(2154);let d=[{depth:3,value:"Version 2 (ACAP 2.0)",id:"version-2-acap-20"},{depth:4,value:"Added",id:"added"},{depth:4,value:"Changed",id:"changed"},{depth:4,value:"Fixed",id:"fixed"},{depth:3,value:"Version 1 (ACAP 1.0)",id:"version-1-acap-10"},{depth:4,value:"Added",id:"added-1"},{depth:4,value:"Changed",id:"changed-1"},{depth:4,value:"Fixed",id:"fixed-1"}];function c(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",em:"em",a:"a",strong:"strong",h4:"h4",ol:"ol",li:"li",ul:"ul",hr:"hr",code:"code"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"ACAP Change Log"}),"\n",(0,a.jsx)(n.p,{children:"This page contains summary of features and enhancements on major ACAP versions and their programming-development timelines."}),"\n",(0,a.jsxs)(l.Rg,{children:[(0,a.jsx)(n.h3,{id:"version-2-acap-20",children:"Version 2 (ACAP 2.0)"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"June 2024 - ongoing"})}),(0,a.jsxs)(n.p,{children:["Version 2.0 highlights ongoing improvements and newly added features, expanding and enhancing the initial ",(0,a.jsx)(n.a,{href:"#version-1-acap-10",children:"ACAP"})," version."]}),(0,a.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,a.jsxs)(n.p,{children:["ACAP 2.0 is the latest ACAP version. It's latest stable version is Release/Tag version ",(0,a.jsx)("b",{children:(0,a.jsx)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",children:(0,a.jsx)("u",{children:"v10.1.0-alpha.10"})})}),", dev branch ",(0,a.jsxs)("b",{children:["@","590e3e1"]})," accessible in the ",(0,a.jsx)(n.strong,{children:"acap-v2"})," code repository."]})}),(0,a.jsx)(l.UW,{children:(0,a.jsxs)(n.p,{children:["Version 2.0 and later versions may have new requirements that will thrive on new development approaches loosely tied to the recommended\xa0",(0,a.jsx)(n.a,{href:"/security",children:"Security"}),"\xa0and\xa0",(0,a.jsx)(n.a,{href:"/directories/server",children:"Server"}),"\xa0guidelines of\xa0",(0,a.jsx)(n.strong,{children:"ACAP 1.0"}),", requiring thorough testing and validation."]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"text-semibold text-sm text-slate-500 no-underline",children:[(0,a.jsx)(n.h4,{id:"added",children:"Added"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Integration of climate risk trigger in public/admin crop recommendations and bulletin PDF generation"}),"\n",(0,a.jsxs)(n.li,{children:["Support for multiple crops (cropping calendar and crop recommendations)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Support new multiple recommendations/cropping calendar Excel files with new formats and structure"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Admin Pages","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Cropping Calendar Excel file uploader"}),"\n",(0,a.jsx)(n.li,{children:"Crop Recommendations Excel file uploader"}),"\n",(0,a.jsxs)(n.li,{children:["Manage Recommendations","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"View the uploaded recommendations list"}),"\n",(0,a.jsx)(n.li,{children:"View an uploaded recommendation"}),"\n",(0,a.jsx)(n.li,{children:"Edit an uploaded recommendation"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Phonebook: tag a contact to a province/municipality"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Use of tropical cyclone wind signals as a trigger for generating special weather recommendations"}),"\n",(0,a.jsx)(n.li,{children:'Allow the creation of "general" special weather recommendations'}),"\n",(0,a.jsxs)(n.li,{children:["Optional search engine optimization ",(0,a.jsx)(n.a,{href:"/post-installation/google-search",children:"(SEO) settings"})," with Google Search Console"]}),"\n",(0,a.jsxs)(n.li,{children:["REST APIs (NodeJS)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"New endpoints for processing cropping calendar and recommendations Excel file uploads"}),"\n",(0,a.jsxs)(n.li,{children:["Migration of the ",(0,a.jsx)(n.a,{href:"/post-installation/acap-rcmas-api",children:"ACAP-RCMAS REST APIs"})," from the (forked) mirror environment with optional activation and deployment"]}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsx)(n.h4,{id:"changed",children:"Changed"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Public/admin seasonal recommendations and bulletin PDF generation","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Removal of the single-month selection trigger for determining the crop stage/s"}),"\n",(0,a.jsx)(n.li,{children:"Removal of the rainfall condition trigger"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Public/admin 10-day recommendations and bulletin PDF generation","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Removal of the dates trigger within the active PAGASA 10-day date range for determining the crop stage/s"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Deprecation of the ",(0,a.jsx)(n.strong,{children:"uploaders"})," group of Node Package Manager (NPM) scripts in favor of cropping calendar/recommendations Excel file upload through the UI"]}),"\n",(0,a.jsx)(n.li,{children:"Allow creating seasonal bulletin PDFs with more than one (1) page."}),"\n",(0,a.jsx)(n.li,{children:"Text blast recipients by province/municipality instead of individual selection"}),"\n"]}),(0,a.jsx)(n.h4,{id:"fixed",children:"Fixed"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Various bug fixes and minor updates with summary in the ",(0,a.jsx)(n.strong,{children:"acap-v2"})," Releases ",(0,a.jsx)(n.a,{href:"https://github.com/amia-cis/acap-v2/releases",children:"page"})," for more information."]}),"\n"]})]}),(0,a.jsx)(n.h3,{id:"version-1-acap-10",children:"Version 1 (ACAP 1.0)"}),(0,a.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,a.jsxs)(n.p,{children:["ACAP 1.0's last stable version is Release/Tag version ",(0,a.jsx)(n.a,{href:"https://github.com/amia-cis/climate-services-webportal-v1/releases/tag/v9.5.6",children:(0,a.jsx)(n.strong,{children:"v9.5.6"})}),", accessible in the ",(0,a.jsx)(n.strong,{children:"climate-services-webportal-v1"})," and ",(0,a.jsx)(n.strong,{children:"acap-v2"})," code repositories."]})}),(0,a.jsxs)(n.p,{children:["Version 1.0 marks the initial ACAP Bicol release used as a base model and template for subsequent developer training and sharing with other regions in the succeeding years starting on ",(0,a.jsx)(n.a,{href:"https://uplbfi.org/?p=2097",children:(0,a.jsx)(n.strong,{children:"July 2023"})}),"."]}),(0,a.jsxs)(n.p,{children:["It has the following features, strictly following and is tested compatible with the recommended\xa0",(0,a.jsx)(n.a,{href:"/security",children:"Security"}),"\xa0and\xa0 ",(0,a.jsx)(n.a,{href:"/directories/server",children:"Server"}),"\xa0guidelines:"]}),(0,a.jsxs)("div",{className:"text-semibold text-sm text-slate-500 no-underline",children:[(0,a.jsx)(n.h4,{id:"added-1",children:"Added"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"March - December 2022"})}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Login and User Authentication"}),"\n",(0,a.jsx)(n.li,{children:"User (Admin) Accounts Management"}),"\n",(0,a.jsxs)(n.li,{children:["PDF Bulletins Generator","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/articles/pdf-development",children:"Generated bulletins"})," match the given JPEG layout, and all content fits on one (1) page"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Site Search"}),"\n",(0,a.jsxs)(n.li,{children:["Public Pages","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Home Page"}),"\n",(0,a.jsxs)(n.li,{children:["ACAP Services Page (Weather Services)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"10-Day Weather Forecast Summary"}),"\n",(0,a.jsx)(n.li,{children:"Seasonal Weather Forecast Summary"}),"\n",(0,a.jsx)(n.li,{children:"Special Weather Forecast Summary"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Cropping Calendar: support for one (1) crop (Rice)"}),"\n",(0,a.jsxs)(n.li,{children:["Crop Recommendations Generator","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Seasonal Climate Outlook and Advisory Recommendations (using month, crop stages, and rainfall conditions as triggers)"}),"\n",(0,a.jsx)(n.li,{children:"10-Day Farm Weather Outlook and Advisory Recommendations (using current date and crop stage/s as triggers)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"PDF Bulletins Downloads"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Admin Pages","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Crop Recommendations Management","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Regional Seasonal Climate Outlook and Advisory PDF Bulletins and Reports Creator"}),"\n",(0,a.jsx)(n.li,{children:"10-Day Farm Outlook and Weather Advisory PDF Bulletins and Reports Creator"}),"\n",(0,a.jsx)(n.li,{children:"Special Weather Forecast PDF Bulletins and Reports Creator"}),"\n",(0,a.jsx)(n.li,{children:"View created reports/bulletins list"}),"\n",(0,a.jsx)(n.li,{children:"View a created report/bulletin"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["SMS Management","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Phonebook"}),"\n",(0,a.jsx)(n.li,{children:"Send SMS"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["ACAP Settings","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Weather Forecast Data Management","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"PAGASA seasonal weather forecast Excel file uploader"}),"\n",(0,a.jsx)(n.li,{children:"Manual weather systems input editor"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["10-Day Weather Forecast Data Management","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"PAGASA 10-Day weather forecast Excel files uploader"}),"\n",(0,a.jsx)(n.li,{children:"Manual moon phases input editor"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Cyclone Typhoon Advisory Data Management","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Manual trigger of syncing the PAGASA Severe Tropical Cyclone web page data"}),"\n",(0,a.jsx)(n.li,{children:"Manual wind speed list and affected municipalities editor"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"User Profile Management"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Cloud deployment setup to\xa0",(0,a.jsx)(n.strong,{children:"development"}),"\xa0and\xa0",(0,a.jsx)(n.strong,{children:"production"}),"\xa0environments using GitHub Actions","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Automatic deployment to Heroku/Render (backend) and Firebase Hosting/GitHub Pages (frontend)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Docker setup for development and Render deployment"}),"\n",(0,a.jsxs)(n.li,{children:["REST API Endpoints","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A set of secure and authenticated REST API endpoints for allowing signed-in admins to mutate ACAP data over HTTPS"}),"\n",(0,a.jsx)(n.li,{children:"Processes the seasonal/10-day weather forecast Excel file uploads"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Cron Jobs (NPM scripts) for Automatic Weather Forecast Data Syncing to the ACAP Database"}),"\n"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Daily 10-Day Weather Forecast Excel Files from PAGASA data syncing"}),"\n",(0,a.jsx)(n.li,{children:"Weekly El Nino/La Nina PAGASA web page contents syncing"}),"\n",(0,a.jsx)(n.li,{children:"Regular daily syncing of PAGASA's Severe Tropical Cyclone Bulletin web page"}),"\n"]}),(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsx)(n.li,{children:"Data Processing and Upload Scripts"}),"\n"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"NPM scripts for uploading cropping calendar data (CSV file) and crop recommendations (Excel file) to the database"}),"\n",(0,a.jsx)(n.li,{children:"NPM scripts for seeding the Firestore database with default data"}),"\n"]}),(0,a.jsxs)(n.ol,{start:"12",children:["\n",(0,a.jsxs)(n.li,{children:["Software development planning documentation (available at ",(0,a.jsx)(n.a,{href:"https://github.com/amia-cis/acap-v2/tree/dev/docs",children:"link"}),")."]}),"\n"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"June 2023 onwards"})}),(0,a.jsx)(n.h4,{id:"changed-1",children:"Changed"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Used ",(0,a.jsx)(n.code,{children:".env"})," variables to manage region-specific static text in the front end, ensuring the base model of the application can be extended and adapted for multiple regions with different (text content) requirements, allowing easier regional static text replacement."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use\xa0",(0,a.jsx)(n.code,{children:"nda"}),"\xa0values for null/empty seasonal weather forecast data in the backend and front end, borrowed from the ongoing ACAP-RCMAS API development."]}),"\n"]}),"\n"]}),(0,a.jsx)(n.h4,{id:"fixed-1",children:"Fixed"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Various bug fixes and minor updates with summary in the ",(0,a.jsx)(n.strong,{children:"climate-services-webportal-v1"})," (ACAP 1.0 repository) ",(0,a.jsx)(n.a,{href:"https://github.com/amia-cis/climate-services-webportal-v1/releases",children:"Releases"})," page for more information."]}),"\n"]})]})]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/changelog.mdx",route:"/changelog",timestamp:172661243e4,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"ACAP Change Log",headings:d},pageNextRoute:"/changelog",nextraLayout:s.ZP,themeConfig:r.Z};n.default=(0,t.j)(h)},6595:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var a=i(5893),t=i(1163),s=i(2169),r=i(5675),o=i.n(r),l={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,a.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:n,locale:i}=(0,t.useRouter)(),{frontMatter:r}=(0,s.ZR)(),o="ACAP Tutorials",l="https://acaptutorials.github.io"+(n===i?e:"/".concat(i).concat(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,a.jsx)("meta",{property:"og:url",content:l}),(0,a.jsx)("meta",{property:"og:title",content:r.title||o}),(0,a.jsx)("meta",{property:"og:description",content:r.description||"Development notes"}),(0,a.jsx)("meta",{property:"og:site_name",content:o}),(0,a.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,a.jsx)("meta",{property:"og:image:height",content:"630"}),(0,a.jsx)("meta",{property:"og:image:alt",content:o}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:o}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,a.jsx)(function(){return(0,a.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","590e3e1"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,a.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,a.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=8630)}),_N_E=e.O()}]);