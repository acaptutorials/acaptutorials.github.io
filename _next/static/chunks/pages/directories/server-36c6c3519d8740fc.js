(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{7067:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/directories/server",function(){return s(128)}])},128:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return c}});var n=s(5893),i=s(2673),a=s(3451),r=s(1860);s(9488);var o=s(2643),l=s(2154);let c=[{depth:2,value:"Files",id:"files"},{depth:2,value:"Folders",id:"folders"},{depth:3,value:"/api",id:"api"},{depth:2,value:"Express server (Folder)",id:"express-server-folder"},{depth:3,value:"/middleware",id:"middleware"},{depth:3,value:"/controllers/index.js",id:"controllersindexjs"},{depth:3,value:"/controllers",id:"controllers"},{depth:3,value:"/models (classes)",id:"models-classes"},{depth:2,value:"/scripts (Folder)",id:"scripts-folder"},{depth:3,value:"/scripts/cron",id:"scriptscron"},{depth:3,value:"/scripts/data",id:"scriptsdata"},{depth:3,value:"/scripts/seeders",id:"scriptsseeders"},{depth:3,value:"/scripts/uploaders",id:"scriptsuploaders"},{depth:3,value:"/scripts/generate-docs",id:"scriptsgenerate-docs"},{depth:3,value:"/scripts/tools",id:"scriptstools"},{depth:2,value:"/utils (Folder)",id:"utils-folder"},{depth:3,value:"/utils/pdf",id:"utilspdf"},{depth:2,value:"File Tree",id:"file-tree"}];function d(e){let t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",em:"em",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},(0,o.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Server"}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"server"}),"\xa0directory contains backend JavaScript (NodeJS/Express) codes for running and managing ACAP's REST APIs."]}),"\n",(0,n.jsxs)(t.p,{children:['ACAP promotes using REST APIs running on the backend to securely perform mutative "WRITE" operations in the Firestore database to allow the creation of more robust server-side input validation scripts for simple to complex input data than relying alone on limited ',(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/security/get-started",children:"Firestore Rules"})," for access checks and data validation."]}),"\n",(0,n.jsxs)(t.p,{children:["Maintaining a separate backend for securely performing database WRITE operations also syncs with ACAP's requirements to host its frontend UI in GitHub Pages while having access to a secure, remote backend protected by established\xa0",(0,n.jsx)(t.a,{href:"/security",children:"Security"}),"\xa0guidelines and adhering to best practices in enforcing web security to maintain sensitive data protection and integrity."]}),"\n",(0,n.jsx)(l.UW,{type:"warning",children:(0,n.jsxs)(t.p,{children:["While using the ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Firestore WEB APIs"})," ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:'"directly"'})})," in the UI instead of going through the Node backend is also an alternate option, developers should be aware of possible security attack vectors that could open up and how to counter them by having a thorough understanding of how the ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/",children:"Firebase Authentication"}),", ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/admin/custom-claims",children:"Firebase Custom Claims"})," and ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/security/get-started",children:"Firestore Rules"})," work in sync to keep sensitive user information safe and secure."]})}),"\n",(0,n.jsxs)(l.UW,{children:[(0,n.jsxs)(t.p,{children:["One of the key things to note here is that using the\xa0serverless ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Firestore WEB APIs"}),"\xa0to manage data\xa0",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:'"directly"'})}),"\xa0in the Firestore database through the frontend UI with client-side validation logic, where we install its JavaScript APIs, also enables the\xa0",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/use-rest-api",children:"Firestore REST APIs"}),"\xa0along with it, which is accessible on other clients, such as a browser console, or Postman, outside the\xa0",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:'"safety"'})}),"\xa0confines of the frontend UI."]}),(0,n.jsxs)(t.p,{children:["Knowing that there are two ",(0,n.jsx)(t.em,{children:"(2) points of data entry"})," to anticipate and the ",(0,n.jsx)(t.em,{children:"nature of input data"})," should enable developers to make informed decisions about when to use the\xa0",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Firestore WEB APIs"}),"\xa0(preferably with fool-proof ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/security/get-started",children:"Firestore Rules"}),") directly or if they need to delegate operations in a more secure environment, such as the Node backend server."]})]}),"\n",(0,n.jsx)(t.h2,{id:"files",children:"Files"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:".env"})," - Dotenv: NodeJS library that loads configuration files from a ",(0,n.jsx)(t.code,{children:".env"})," file"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:".env.example"})," - example keys and values to put in the server ",(0,n.jsx)(t.code,{children:".env"})," file"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Dockerfile.acap"})," - multi-stage build Dockerfile definition for running the ",(0,n.jsx)(t.strong,{children:"server"})," on localhost development with livereload using the nodemon library, or built to run for production deployment without livereload"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Dockerfile"})," - Used for running the server production deployment on Render"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"package.json / package-lock.json"})," - Contains definitions of the server's NodeJS dependency libraries"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"/src/index.js"})," - server program entry point"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"folders",children:"Folders"}),"\n",(0,n.jsx)(t.h3,{id:"api",children:"/api"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Contains the ",(0,n.jsx)(t.code,{children:"index.js"})," file that converts the stand-alone Express app into a single serverless function format recognized by Vercel."]}),"\n",(0,n.jsx)(t.li,{children:"This option only becomes available if deployment to Vercel is activated."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"express-server-folder",children:"Express server (Folder)"}),"\n",(0,n.jsx)(t.h3,{id:"middleware",children:"/middleware"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains scripts that handles Cross-Origin Requests (CORS), router-level data validation and user authentication"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"controllersindexjs",children:"/controllers/index.js"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains routing scripts that associates URLs with controller actions"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"controllers",children:"/controllers"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains scripts that handles requests, mapping them to target models (classes) and returns success or error responses"}),"\n",(0,n.jsxs)(t.li,{children:["These sripts, along with the ",(0,n.jsx)(t.code,{children:"/middleware"})," and ",(0,n.jsx)(t.code,{children:"/models"})," make up the REST APIs."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"models-classes",children:"/models (classes)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"provides methods, organized into categories (classes) for interacting with the database"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"scripts-folder",children:"/scripts (Folder)"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"scripts"})," directory contains a large collection of Node Package Manager (NPM) scripts used for data processing, uploading and cleanup functions. More information about these scripts are available in the ",(0,n.jsx)(t.code,{children:"/server/README.md"})," file's ",(0,n.jsx)(t.strong,{children:"Available Scripts - server"})," section."]}),"\n",(0,n.jsx)(t.h3,{id:"scriptscron",children:"/scripts/cron"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains NPM scripts that run as cron jobs in GitHub Actions Scheduled Workflows"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"scriptsdata",children:"/scripts/data"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains sample data files in JSON, CSV and EXCEL formats for reference on established data structures and formatting"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"scriptsseeders",children:"/scripts/seeders"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains NPM scripts for initializing the Firestore database with default data"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"scriptsuploaders",children:"/scripts/uploaders"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains NPM scripts for facilitating raw data file uploads to the Firestore database"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"scriptsgenerate-docs",children:"/scripts/generate-docs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains scripts for generating ACAP's REST API documentation"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"scriptstools",children:"/scripts/tools"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains functions for archiving and deleting old PAGASA weather forecast data"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"utils-folder",children:"/utils (Folder)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"contains various utility helper functions i.e., for date, processing strings, and others"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"utilspdf",children:"/utils/pdf"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["contains scripts that manages the ",(0,n.jsx)(t.a,{href:"/articles/pdf-development",children:"bulletin PDF layouts"})," for seasonal, 10-day and special bulletins"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"file-tree",children:"File Tree"}),"\n",(0,n.jsx)(t.p,{children:"This tree shows only the relevant server files and directories."}),"\n",(0,n.jsx)(l.zH,{children:(0,n.jsxs)(l.zH.Folder,{name:"server",defaultOpen:!0,children:[(0,n.jsx)(l.zH.Folder,{name:"api",children:(0,n.jsx)(l.zH.File,{name:"index.js"})}),(0,n.jsxs)(l.zH.Folder,{name:"src",defaultOpen:!0,children:[(0,n.jsx)(l.zH.Folder,{name:"classes"}),(0,n.jsx)(l.zH.Folder,{name:"controllers"}),(0,n.jsx)(l.zH.Folder,{name:"middleware"}),(0,n.jsxs)(l.zH.Folder,{name:"scripts",defaultOpen:!0,children:[(0,n.jsx)(l.zH.Folder,{name:"cron"}),(0,n.jsx)(l.zH.Folder,{name:"data"}),(0,n.jsx)(l.zH.Folder,{name:"generate-docs"}),(0,n.jsx)(l.zH.Folder,{name:"pagasaexcel"}),(0,n.jsx)(l.zH.Folder,{name:"page_indexer"}),(0,n.jsx)(l.zH.Folder,{name:"seeders"}),(0,n.jsx)(l.zH.Folder,{name:"tools"}),(0,n.jsx)(l.zH.Folder,{name:"uploaders"})]}),(0,n.jsx)(l.zH.Folder,{name:"utils",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"pdf",defaultOpen:!0,children:(0,n.jsxs)(l.zH.Folder,{name:"livereload",children:[(0,n.jsx)(l.zH.Folder,{name:"public"}),(0,n.jsx)(l.zH.Folder,{name:"templates"})]})})}),(0,n.jsx)(l.zH.File,{name:"index.js"})]}),(0,n.jsx)(l.zH.File,{name:".env"}),(0,n.jsx)(l.zH.File,{name:".env.example"}),(0,n.jsx)(l.zH.File,{name:".dockerignore"}),(0,n.jsx)(l.zH.File,{name:"Dockerfile"}),(0,n.jsx)(l.zH.File,{name:"Dockerfile.acap"}),(0,n.jsx)(l.zH.File,{name:"package-lock.json"}),(0,n.jsx)(l.zH.File,{name:"package.json"})]})})]})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/directories/server.mdx",route:"/directories/server",timestamp:1732805238e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"Server",headings:c},pageNextRoute:"/directories/server",nextraLayout:a.ZP,themeConfig:r.Z};t.default=(0,i.j)(h)},1860:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var n=s(5893),i=s(1163),a=s(3451),r=s(5675),o=s.n(r),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=s(9548),d=s.n(c),p={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:s}=(0,i.useRouter)(),{frontMatter:r}=(0,a.ZR)(),o="https://acaptutorials.github.io"+(t===s?e:"/".concat(s).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,n.jsx)("meta",{property:"og:url",content:o}),(0,n.jsx)("meta",{property:"og:title",content:r.title||l}),(0,n.jsx)("meta",{property:"og:description",content:r.description||c}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsx)(function(){return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,n.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,n.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,n.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,n.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=7067)}),_N_E=e.O()}]);