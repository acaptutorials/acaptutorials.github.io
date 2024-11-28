(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{8174:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/acap-rcmas-api",function(){return a(6814)}])},6814:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(5893),i=a(2673),o=a(3451),r=a(1860);a(9488);var s=a(2643),l=a(2154);let c=[];function d(e){let t=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",code:"code",blockquote:"blockquote",em:"em"},(0,s.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"ACAP-RCMAS REST APIs"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"ACAP-RCMAS REST APIs"}),", aiming to share ACAP's internal PAGASA weather forecast data in a structured, organized format and secure manner to collaborators, are a new addition to ACAP's REST APIs. Merging its feature updates from the forked development repository and environment into the official ACAP Bicol aims to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Unify ",(0,n.jsx)(t.strong,{children:"data sources"})," and ",(0,n.jsx)(t.strong,{children:"processes"}),", merging specific updates from the ACAP Bicol's ",(0,n.jsx)(t.strong,{children:"mirror environment"})," to the ",(0,n.jsx)(t.strong,{children:"official"})," ACAP Bicol environment."]}),"\n",(0,n.jsx)(t.li,{children:"Make the APIs readily available for other regions should the DA request its activation and availability."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These APIs, accessible in the ",(0,n.jsx)(t.code,{children:"/api/weatherforecast"})," and ",(0,n.jsx)(t.code,{children:"/api/weatherforecast/archives"})," REST API endpoints, provide GET query methods for retrieving seasonal, 10-day, and severe cyclone weather forecasts. Furthermore, its inclusion in ACAP allowed the archiving of historical weather forecast data, also available by query in these API endpoints."]}),"\n",(0,n.jsxs)(t.p,{children:["These APIs are in their prototype stage, currently intended for use only by the ",(0,n.jsx)(t.strong,{children:"Bicol"})," region for sharing structured and organized weather forecast data with IRRI as part of their collaboration project."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Activation of the ACAP-RCMAS APIs is made into an optional feature for ACAP 2.0 that can be triggered by supplying certain backend environment variables and GitHub Secrets/Variables to ensure smooth integration with the standardized ACAP 1.0 deployments for other regions, which does not yet require these APIs."}),"\n"]}),"\n",(0,n.jsxs)(l.UW,{type:"info",emoji:"ℹ️",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Regions"})," outside Bicol ",(0,n.jsxs)(t.em,{children:["are encouraged to ",(0,n.jsx)(t.strong,{children:"prevent"})," these APIs and their respective archiving and deletion functions from running and being accessible until further notice by the DA."]})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"While ACAP does not yet endorse activating the ACAP-RCMAS REST APIs for other regions"}),", other regions can also start activating and using it earlier."]})]}),"\n",(0,n.jsx)(l.UW,{children:(0,n.jsxs)(t.p,{children:["To\xa0prevent the ",(0,n.jsx)(t.strong,{children:"ACAP-RCMAS REST API"})," and functions from running, please supply the\xa0",(0,n.jsx)(t.strong,{children:'"disabled"'}),"\xa0values of its server\xa0",(0,n.jsx)(t.code,{children:".env"}),"\xa0file, GitHub Actions Secrets/Variables, and Render Secrets/Variables described in the\xa0",(0,n.jsx)(t.strong,{children:"acap-v2"}),"'s root and server README files."]})})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/acap-rcmas-api.mdx",route:"/post-installation/acap-rcmas-api",timestamp:1732812566e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"ACAP-RCMAS REST APIs",headings:c},pageNextRoute:"/post-installation/acap-rcmas-api",nextraLayout:o.ZP,themeConfig:r.Z};t.default=(0,i.j)(p)},1860:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(5893),i=a(1163),o=a(3451),r=a(5675),s=a.n(r),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=a(9548),d=a.n(c),p={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:a}=(0,i.useRouter)(),{frontMatter:r}=(0,o.ZR)(),s="https://acaptutorials.github.io"+(t===a?e:"/".concat(a).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,n.jsx)("meta",{property:"og:url",content:s}),(0,n.jsx)("meta",{property:"og:title",content:r.title||l}),(0,n.jsx)("meta",{property:"og:description",content:r.description||c}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsx)(function(){return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,n.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,n.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,n.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,n.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=8174)}),_N_E=e.O()}]);