(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{9740:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/client-setup",function(){return n(3894)}])},3894:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var i=n(5893),s=n(2673),a=n(2169),l=n(6595);n(9488);var r=n(2643),o=n(2154);let c=[{depth:3,value:"Setup environment variables",id:"setup-environment-variables"},{depth:3,value:"Copy template files",id:"copy-template-files"},{depth:3,value:"Update environment variables after deployment",id:"update-environment-variables-after-deployment"}];function d(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",strong:"strong",code:"code",pre:"pre",span:"span",ol:"ol",li:"li",ul:"ul"},(0,r.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"C. Client Setup"}),"\n",(0,i.jsx)(t.p,{children:"Please read the client's README file in /client/README.md as reference for more information on the client environment variables."}),"\n",(0,i.jsx)(o.UW,{emoji:"ℹ️",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://youtu.be/f3icH3jmnTo",children:"09 Client setup for localhost development"})," video tutorial shows how to initialize the server for localhost development in more detail."]})}),"\n",(0,i.jsxs)(o.Rg,{children:[(0,i.jsx)(t.h3,{id:"setup-environment-variables",children:"Setup environment variables"}),(0,i.jsxs)(t.p,{children:["Update the ",(0,i.jsx)(t.strong,{children:"client"})," ",(0,i.jsx)(t.code,{children:".env"})," file, copying the keys and values from the ",(0,i.jsx)(t.code,{children:".env.example"})," file. You can leave the default values for now, but be sure to update the following with new values:"]}),(0,i.jsx)(t.pre,{"data-language":"env","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(t.code,{"data-language":"env","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_NAME"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"DEFAULT_PROVINCE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"DEFAULT_MUNICIPALITY // --> Any municipality under the DEFAULT_PROVINCE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_API_KEY"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_AUTHDOMAIN"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_MESSAGING_SENDER_ID"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_APP_ID"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NEXT_PUBLIC_FIREBASE_WEB_MEASUREMENT_ID"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_CODE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_LAT_AND_LNG"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGIONAL_FIELD_OFFICE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"REGION_URL"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"CROPPING_CALENDAR_RICE_EXCEL_FILE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"CROPPING_CALENDAR_CORN_EXCEL_FILE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"RECOMMENDATIONS_RICE_EXCEL_FILE"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"RECOMMENDATIONS_CORN_EXCEL_FILE"})})]})}),(0,i.jsx)(t.h3,{id:"copy-template-files",children:"Copy template files"}),(0,i.jsxs)(t.p,{children:["Create a directory named ",(0,i.jsx)(t.strong,{children:'"files"'})," under the /client/public directory: ",(0,i.jsx)(t.strong,{children:'"/client/public/files"'}),"."]}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Copy the Excel files from the ",(0,i.jsx)(t.strong,{children:'"/server/src/scripts/data/dataset_v2.0"'})," directory to the ",(0,i.jsx)(t.strong,{children:'"files"'})," directory"]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the the ",(0,i.jsx)(t.strong,{children:"/server/src/scripts/data/pagasa_seasonal_v2.xlsx"})," Excel file to the ",(0,i.jsx)(t.strong,{children:'"files"'})," directory"]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.strong,{children:'"files"'})," directory and its contents on localhost development but not push it to the repository."]}),"\n"]}),(0,i.jsx)(t.h3,{id:"update-environment-variables-after-deployment",children:"Update environment variables after deployment"}),(0,i.jsxs)(t.p,{children:["Certain client environment variables, such as URLs (i.e., ",(0,i.jsx)(t.code,{children:"BASE_URL_PROD"}),") will become available after deployment. Update the rest of the ",(0,i.jsx)(t.code,{children:".env"})," variables later after:"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Setting-up and deploying the (development and production) servers respectively to their own Render.com cloud services"}),"\n",(0,i.jsx)(t.li,{children:"Deploying the development website to Firebase Hosting"}),"\n",(0,i.jsx)(t.li,{children:"Deploying the production website to GitHub Pages"}),"\n"]})]})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/installation/client-setup.mdx",route:"/installation/client-setup",timestamp:1722935451e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting",video:{title:"Video Tutorials",type:"page"},about:{title:"About",type:"page"},references:"References"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"}]},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins",opengraph:"Opengraph Settings","google-search":"Google Search Console"}},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"C. Client Setup",headings:c},pageNextRoute:"/installation/client-setup",nextraLayout:a.ZP,themeConfig:l.Z};t.default=(0,s.j)(p)},6595:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893),s=n(1163),a=n(2169),l=n(5675),r=n.n(l),o={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,i.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:n}=(0,s.useRouter)(),{frontMatter:l}=(0,a.ZR)(),r="ACAP Tutorials",o="https://acaptutorials.github.io"+(t===n?e:"/".concat(n).concat(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:url",content:o}),(0,i.jsx)("meta",{property:"og:title",content:l.title||r}),(0,i.jsx)("meta",{property:"og:description",content:l.description||"Development notes"}),(0,i.jsx)("meta",{property:"og:site_name",content:r}),(0,i.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{property:"og:image:alt",content:r}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:r}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.6",text:(0,i.jsx)(function(){return(0,i.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.6",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","v10.1.0-alpha.6",", dev branch @","e2df7bf"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,i.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,i.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=9740)}),_N_E=e.O()}]);