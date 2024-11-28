(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{6497:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/weather-forecasts/special-forecast",function(){return a(7846)}])},7846:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(5893),i=a(2673),s=a(3451),o=a(1860);a(9488);var r=a(2643),l=a(2154);let c=[{depth:2,value:"Introduction",id:"introduction"},{depth:2,value:"Manual Update",id:"manual-update"},{depth:3,value:"Use a target environment",id:"use-a-target-environment"},{depth:3,value:"Run the NPM Script",id:"run-the-npm-script"},{depth:3,value:"Re-run on GitHub Actions",id:"re-run-on-github-actions"},{depth:3,value:"Trigger Update in ACAP Settings",id:"trigger-update-in-acap-settings"},{depth:2,value:"ACAP REST API",id:"acap-rest-api"},{depth:2,value:"Recommendations",id:"recommendations"}];function d(e){let t=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",strong:"strong",a:"a",h3:"h3",code:"code",ol:"ol",li:"li",pre:"pre",span:"span",ul:"ul"},(0,r.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"PAGASA Special (Severe Cyclone) Weather Forecast"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FBNtOxjNrZXTLQf045M8e_thumbnail?alt=media&token=53bdc0b7-9ef0-4c6c-b734-cef0a44baad2",alt:"pagasa-special"})}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["ACAP displays tropical cyclone data sourced from PAGASA's ",(0,n.jsx)(t.strong,{children:"Tropical Cyclone Bulletin"})," web page at ",(0,n.jsx)(t.a,{href:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin",children:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin"}),"."]}),"\n",(0,n.jsx)(l.UW,{children:(0,n.jsx)(t.p,{children:"It regularly syncs with data from the PAGASA web page using a cron job that runs every two (2) hours in a GitHub Actions Scheduled Workflow, following a successful initialization and deployment setup."})}),"\n",(0,n.jsx)(t.h2,{id:"manual-update",children:"Manual Update"}),"\n",(0,n.jsx)(t.p,{children:"These steps describe running the cron script to trigger a manual update to ACAP's Special (Severe Cyclone) Weather Forecast data."}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(t.h3,{id:"use-a-target-environment",children:"Use a target environment"}),(0,n.jsxs)(t.p,{children:["Open the server ",(0,n.jsx)(t.code,{children:".env"})," file. Update the ",(0,n.jsx)(t.code,{children:"FIREBASE_SERVICE_ACC"})," and ",(0,n.jsx)(t.code,{children:"FIREBASE_PRIVATE_KEY"})," keys with the ",(0,n.jsx)(t.strong,{children:"development"})," or ",(0,n.jsx)(t.strong,{children:"production"})," key values."]}),(0,n.jsx)(t.h3,{id:"run-the-npm-script",children:"Run the NPM Script"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Navigate to the ",(0,n.jsx)(t.code,{children:"/server"})," directory from a terminal."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Run the command:"}),"\n",(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"cron:cyclone"})]})})}),"\n"]}),"\n"]}),(0,n.jsx)(t.h3,{id:"re-run-on-github-actions",children:"Re-run on GitHub Actions"}),(0,n.jsxs)(t.p,{children:["This method is an alternate option for running the NPM script aside from\xa0",(0,n.jsx)(t.strong,{children:"step #2"}),", available after confirming a successful setup and deployment of the GitHub Actions cron jobs."]}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to the forked repository's ",(0,n.jsx)(t.strong,{children:"Actions"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the ",(0,n.jsx)(t.strong,{children:"CRON Scrape and Update Cyclone Information"})," workflow in the left-side menu."]}),"\n",(0,n.jsx)(t.li,{children:"Select and click one of the latest successful workflow runs."}),"\n",(0,n.jsxs)(t.li,{children:["Press the button on the upper right with the label ",(0,n.jsx)(t.strong,{children:'"Re-run all jobs."'})]}),"\n"]}),(0,n.jsx)(t.h3,{id:"trigger-update-in-acap-settings",children:"Trigger Update in ACAP Settings"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Sign in as an Admin to the ACAP website."}),"\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.strong,{children:"ACAP Settings"})," → ",(0,n.jsx)(t.strong,{children:"TROPICAL CYCLONE"})," tab."]}),"\n",(0,n.jsx)(t.li,{children:"Press the SYNC button."}),"\n",(0,n.jsxs)(t.li,{children:["Wait for the update success or fail status response to appear. A successful trigger will display an updated ",(0,n.jsx)(t.strong,{children:'"Date synced"'})," field in the ",(0,n.jsx)(t.strong,{children:"Current Data Update Summary"})," section, displaying the latest time and date of the successful update."]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"acap-rest-api",children:"ACAP REST API"}),"\n",(0,n.jsxs)(t.p,{children:["Special weather forecast data is available in the REST API endpoints (plus other query parameters) if the ",(0,n.jsx)(t.a,{href:"/post-installation/acap-rcmas-api",children:"ACAP-RCMAS REST APIs"})," are active:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Current data:"})," ",(0,n.jsx)(t.code,{children:"GET /api/weatherforecast?type=special"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Historical data:"})," ",(0,n.jsx)(t.code,{children:"GET /api/weatherforecast/archives?type=special"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,n.jsx)(t.p,{children:"Since the special weather forecast updater runs in an NPM script, options are available for running it in OS-native cron or task schedulers as an alternative to using GitHub Actions Scheduled Workflow."})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/weather-forecasts/special-forecast.mdx",route:"/post-installation/weather-forecasts/special-forecast",timestamp:1732805238e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"PAGASA Special (Severe Cyclone) Weather Forecast",headings:c},pageNextRoute:"/post-installation/weather-forecasts/special-forecast",nextraLayout:s.ZP,themeConfig:o.Z};t.default=(0,i.j)(p)},1860:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(5893),i=a(1163),s=a(3451),o=a(5675),r=a.n(o),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=a(9548),d=a.n(c),p={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:a}=(0,i.useRouter)(),{frontMatter:o}=(0,s.ZR)(),r="https://acaptutorials.github.io"+(t===a?e:"/".concat(a).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,n.jsx)("meta",{property:"og:url",content:r}),(0,n.jsx)("meta",{property:"og:title",content:o.title||l}),(0,n.jsx)("meta",{property:"og:description",content:o.description||c}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsx)(function(){return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,n.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,n.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,n.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,n.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=6497)}),_N_E=e.O()}]);