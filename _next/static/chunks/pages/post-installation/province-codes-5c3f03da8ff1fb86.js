(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{9077:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/province-codes",function(){return a(1364)}])},1364:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(5893),i=a(2673),o=a(3451),r=a(1860);a(9488);var s=a(2643),l=a(2154);let c=[{depth:2,value:"Default Values",id:"default-values"},{depth:2,value:"Update the Default Values",id:"update-the-default-values"},{depth:3,value:"Edit the codes JSON file",id:"edit-the-codes-json-file"},{depth:3,value:"Upload the new province shortcodes",id:"upload-the-new-province-shortcodes"}];function d(e){let t=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",a:"a",h3:"h3",code:"code",ol:"ol",li:"li",strong:"strong",pre:"pre",span:"span"},(0,s.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Province Codes"}),"\n",(0,n.jsx)(t.p,{children:"Province codes refer to the three-letter or two-letter shortcodes abbreviation for a province. For example Region 5 Bicol has:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Province"}),(0,n.jsx)(t.th,{children:"Code"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Albay"}),(0,n.jsx)(t.td,{children:"ALB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Camarines Norte"}),(0,n.jsx)(t.td,{children:"CN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Camarines Sur"}),(0,n.jsx)(t.td,{children:"CS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Catanduanes"}),(0,n.jsx)(t.td,{children:"CAT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Masbate"}),(0,n.jsx)(t.td,{children:"MAS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sorsogon"}),(0,n.jsx)(t.td,{children:"SOR"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"default-values",children:"Default Values"}),"\n",(0,n.jsxs)(t.p,{children:["The seeder scripts assigns the first three letter of a provice for its short code during the ",(0,n.jsx)(t.a,{href:"/installation/server-setup/#seed-default-data",children:"Installation - Seed default data"})," step."]}),"\n",(0,n.jsx)(t.h2,{id:"update-the-default-values",children:"Update the Default Values"}),"\n",(0,n.jsx)(t.p,{children:"These steps are optional if there is a need to change the default-generated province shortcodes. Follow the steps to update the provinces' default three-letter short code."}),"\n",(0,n.jsx)(l.UW,{children:(0,n.jsxs)(t.p,{children:["These steps require a successful run of the ",(0,n.jsx)(t.a,{href:"/initialization",children:"Initialization"})," steps before proceeding."]})}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(t.h3,{id:"edit-the-codes-json-file",children:"Edit the codes JSON file"}),(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.code,{children:"/server/src/scripts/uploaders/province_codes/data.json"})," file."]}),(0,n.jsx)(l.zH,{children:(0,n.jsx)(l.zH.Folder,{name:"server",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"src",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"scripts",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"uploaders",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"province_codes",defaultOpen:!0,children:(0,n.jsx)(l.zH.File,{name:"data.json"})})})})})})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Replace the JSON keys with new ",(0,n.jsx)(t.code,{children:'"province names"'})," matching those entered in the server ",(0,n.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["Replace the ",(0,n.jsx)(t.code,{children:'"code"'})," JSON key values with new two or three-letter province shortcodes."]}),"\n",(0,n.jsxs)(t.li,{children:["Update the ",(0,n.jsx)(t.code,{children:'"full"'})," JSON key values with new ",(0,n.jsx)(t.code,{children:'"province names."'})]}),"\n"]}),(0,n.jsx)(t.h3,{id:"upload-the-new-province-shortcodes",children:"Upload the new province shortcodes"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to the server directory using a terminal."}),"\n",(0,n.jsxs)(t.li,{children:["Run this command switching between the ",(0,n.jsx)(t.strong,{children:"development"})," and ",(0,n.jsx)(t.strong,{children:"production"})," ",(0,n.jsx)(t.code,{children:".env"})," files."]}),"\n"]}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"upload:province_codes"})]})})})]})]})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/province-codes.mdx",route:"/post-installation/province-codes",timestamp:1738688524e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},announcements:{title:"Announcements",type:"page"},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"announcements",route:"/announcements",children:[{kind:"Meta",data:{"firebase-storage-2024":{title:"Firebase Storage Pricing Plan Changes (2024)",type:"page"}}},{kind:"MdxPage",name:"firebase-storage-2024",route:"/announcements/firebase-storage-2024"}]},{kind:"MdxPage",name:"announcements",route:"/announcements"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"Province Codes",headings:c},pageNextRoute:"/post-installation/province-codes",nextraLayout:o.ZP,themeConfig:r.Z};t.default=(0,i.j)(h)},1860:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(5893),i=a(1163),o=a(3451),r=a(5675),s=a.n(r),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=a(9548),d=a.n(c),p={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:a}=(0,i.useRouter)(),{frontMatter:r}=(0,o.ZR)(),s="https://acaptutorials.github.io"+(t===a?e:"/".concat(a).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap 2.1, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, climate information system, climate information system (cis), climate information services, climate information services (cis), agro-climatic advisory portal, agro-climatic advisory portal (acap), agro-climatic advisory portal (ACAP), agro climatic advisory portal, agroclimatic advisory portal (acap), agroclimatic advisory portal (ACAP)"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,n.jsx)("meta",{property:"og:url",content:s}),(0,n.jsx)("meta",{property:"og:title",content:r.title||l}),(0,n.jsx)("meta",{property:"og:description",content:r.description||c}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsx)(function(){return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,n.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,n.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,n.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,n.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=9077)}),_N_E=e.O()}]);