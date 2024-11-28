(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{1919:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-installation/webmap",function(){return t(2737)}])},2737:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return c}});var n=t(5893),i=t(2673),o=t(3451),s=t(1860);t(9488);var r=t(2643),l=t(2154);let c=[{depth:3,value:"Required Files",id:"required-files"},{depth:3,value:"Normalize the SHAPEFILE",id:"normalize-the-shapefile"},{depth:3,value:"Upload the GeoJSON file",id:"upload-the-geojson-file"},{depth:4,value:"MapBox Hosting",id:"mapbox-hosting"},{depth:4,value:"Firebase Storage Hosting",id:"firebase-storage-hosting"},{depth:3,value:"Use a Target Environment",id:"use-a-target-environment"},{depth:3,value:"Upload the AMIA Villages Data",id:"upload-the-amia-villages-data"}];function d(e){let a=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h3:"h3",ol:"ol",li:"li",code:"code",strong:"strong",h4:"h4",pre:"pre",span:"span"},(0,r.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"Web Map on Home Page"}),"\n",(0,n.jsx)(a.p,{children:"This section covers how to update the GeoJSON map boundaries on the Home Page (the colored province overlays)."}),"\n",(0,n.jsxs)(a.p,{children:["This step is labelled (Optional) because the SHAPEFILE and new AMIA Villages data for the target region may yet not be readily available during ",(0,n.jsx)(a.a,{href:"/installation",children:"Installation"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2Fvk8AYU72X90C1JsoQWKv_thumbnail?alt=media&token=4ba0965e-12c1-4b22-bb40-bbe3115d734f",alt:"homepage"})}),"\n",(0,n.jsx)(a.h3,{id:"required-files",children:"Required Files"}),"\n",(0,n.jsx)(a.p,{children:"These steps require the files:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"SHAPEFILE (.shp, .shx, .prj, .dbf and .cpg files) of the new region"}),"\n",(0,n.jsxs)(a.li,{children:["New AMIA Villages information of the new region in a CSV file, following the format in the\r\n",(0,n.jsx)(a.code,{children:"/server/src/scripts/data/amia_villages_r5.csv"})," file."]}),"\n"]}),"\n",(0,n.jsx)(l.zH,{children:(0,n.jsx)(l.zH.Folder,{name:"server",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"src",defaultOpen:!0,children:(0,n.jsx)(l.zH.Folder,{name:"scripts",defaultOpen:!0,children:(0,n.jsxs)(l.zH.Folder,{name:"data",defaultOpen:!0,children:[(0,n.jsx)(l.zH.File,{name:"amia_villages_r5.csv"}),(0,n.jsx)(l.zH.Folder,{name:"geojson",defaultOpen:!0,children:(0,n.jsx)(l.zH.File,{name:"acap-bicol.geojson"})})]})})})})}),"\n",(0,n.jsx)(l.UW,{children:(0,n.jsxs)(a.p,{children:["Since ACAP uses the provinces and municipality naming conventions from the PAGASA 10-day weather forecast Excel file, please ensure the ",(0,n.jsx)(a.strong,{children:"SHAPEFILE"})," and ",(0,n.jsx)(a.strong,{children:"AMIA Villages CSV file"})," share similar naming conventions with it."]})}),"\n",(0,n.jsxs)(l.Rg,{children:[(0,n.jsx)(a.h3,{id:"normalize-the-shapefile",children:"Normalize the SHAPEFILE"}),(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Convert the SHAPEFILE to a normalized, web-friendly GeoJSON file format. (Recommended GeoJSON file size is approximately less than 500KB)."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["(Optional) Use QGIS to check the SHAPEFILE for errors. Follow steps No. 2, No. 3 and No. 4 described in the URL link to check and fix SHAPEFILE errors.\r\n",(0,n.jsx)(a.a,{href:"https://github.com/ciatph/ciatph.github.io/issues/33#issuecomment-769405843",children:"https://github.com/ciatph/ciatph.github.io/issues/33#issuecomment-769405843"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["(Optional) Use the ",(0,n.jsx)(a.a,{href:"https://github.com/ciatph/shapefile-simplify",children:"https://github.com/ciatph/shapefile-simplify"})," tool to normalize, simplify and convert the SHAPEFILE to GeoJSON, playing around with PERCENTAGE % values that lead to a small file size with acceptable visual effects when loaded on the Home page."]}),"\n",(0,n.jsxs)(a.p,{children:["ACAP 1.0's GeoJSON file is available in ",(0,n.jsx)(a.code,{children:"/server/src/scripts/data/geojson/acap-bicol.geojson"})," file for reference."]}),"\n"]}),"\n"]}),(0,n.jsx)(a.h3,{id:"upload-the-geojson-file",children:"Upload the GeoJSON file"}),(0,n.jsx)(a.h4,{id:"mapbox-hosting",children:"MapBox Hosting"}),(0,n.jsxs)(a.p,{children:["Upload the normalized GeoJSON file to MapBox, or any hosting service that allows serving GeoJSON content over HTTP from ",(0,n.jsx)(a.strong,{children:"Normalize the SHAPEFILE"})," step ",(0,n.jsx)(a.strong,{children:"#2"})," or ",(0,n.jsx)(a.strong,{children:"#3"}),". The original ACAP 1.0 uses MapBox (Datasets) for hosting."]}),(0,n.jsx)(a.p,{children:"Update the following variables when using MapBox:"}),(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"MAPBOX_BASEMAP_STYLE_ID"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"MAPBOX_DATASET_ID"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"MAPBOX_API_KEY"})})]})}),(0,n.jsx)(a.h4,{id:"firebase-storage-hosting",children:"Firebase Storage Hosting"}),(0,n.jsx)(a.p,{children:"You can use Firebase Storage in case a new MapBox account is not readily available."}),(0,n.jsxs)(a.p,{children:["Replace the ",(0,n.jsx)(a.code,{children:"NEXT_PUBLIC_GEOJSON_URL"})," variable with the GeoJSON file's remote URL after uploading it to Firebase Storage."]}),(0,n.jsx)(a.h3,{id:"use-a-target-environment",children:"Use a Target Environment"}),(0,n.jsxs)(a.p,{children:["Open the server ",(0,n.jsx)(a.code,{children:".env"})," file. Update the ",(0,n.jsx)(a.code,{children:"FIREBASE_SERVICE_ACC"})," and ",(0,n.jsx)(a.code,{children:"FIREBASE_PRIVATE_KEY"})," keys with the ",(0,n.jsx)(a.strong,{children:"development"})," key values."]}),(0,n.jsx)(a.h3,{id:"upload-the-amia-villages-data",children:"Upload the AMIA Villages Data"}),(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Upload the new AMIA Villages information (CSV file) to Firestore."}),"\n",(0,n.jsxs)(a.li,{children:["Copy the new CSV file to ",(0,n.jsx)(a.code,{children:"/server/src/scripts/data/amia_villages_r5.csv"})]}),"\n",(0,n.jsxs)(a.li,{children:["Run the server NPM script:","\n",(0,n.jsx)(a.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(a.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(a.span,{className:"line",children:[(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"seed:01_amiavillages"})]})})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["Re-deploy to the ",(0,n.jsx)(a.code,{children:"development"})," environment to view the updates on the live site."]}),"\n",(0,n.jsxs)(a.li,{children:["Repeat starting from the ",(0,n.jsx)(a.a,{href:"#use-a-target-environment",children:"Use a Target Environment"})," using the ",(0,n.jsx)(a.code,{children:"production"})," Firebase keys to view the updates on the live production GitHub Pages site."]}),"\n"]})]})]})}function p(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/post-installation/webmap.mdx",route:"/post-installation/webmap",timestamp:1732805238e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"Web Map on Home Page",headings:c},pageNextRoute:"/post-installation/webmap",nextraLayout:o.ZP,themeConfig:s.Z};a.default=(0,i.j)(h)},1860:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n=t(5893),i=t(1163),o=t(3451),s=t(5675),r=t.n(s),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=t(9548),d=t.n(c),p={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,n.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:a,locale:t}=(0,i.useRouter)(),{frontMatter:s}=(0,o.ZR)(),r="https://acaptutorials.github.io"+(a===t?e:"/".concat(t).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,n.jsx)("meta",{property:"og:url",content:r}),(0,n.jsx)("meta",{property:"og:title",content:s.title||l}),(0,n.jsx)("meta",{property:"og:description",content:s.description||c}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,n.jsx)(function(){return(0,n.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsx)(function(){return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,n.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,n.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,n.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,n.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=1919)}),_N_E=e.O()}]);