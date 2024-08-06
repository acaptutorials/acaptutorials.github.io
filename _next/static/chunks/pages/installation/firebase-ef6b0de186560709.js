(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{4048:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/firebase",function(){return n(711)}])},711:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var i=n(5893),s=n(2673),o=n(2169),a=n(6595);n(9488);var r=n(2643),l=n(2154);let c=[{depth:3,value:"Checkout the latest ACAP 2.0 source codes",id:"checkout-the-latest-acap-20-source-codes"},{depth:3,value:"Create a new Firebase Project for the new Region",id:"create-a-new-firebase-project-for-the-new-region"},{depth:3,value:"Initialize the Firebase Storage",id:"initialize-the-firebase-storage"},{depth:3,value:"Initialize the Firestore Database",id:"initialize-the-firestore-database"},{depth:3,value:"Initialize the Firebase Authentication",id:"initialize-the-firebase-authentication"}];function h(e){let t=Object.assign({h1:"h1",h3:"h3",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",span:"span"},(0,r.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"A. Firebase Initialization"}),"\n",(0,i.jsxs)(l.Rg,{children:[(0,i.jsx)(t.h3,{id:"checkout-the-latest-acap-20-source-codes",children:"Checkout the latest ACAP 2.0 source codes"}),(0,i.jsx)(t.p,{children:"Fork the latest repository to get the latest updates and bug fixes, if you haven't already done so."}),(0,i.jsxs)(t.p,{children:["Read about the latest repository version and forking notes in the ",(0,i.jsx)(t.a,{href:"/installation",children:"Installation and Setup"})," section for more information."]}),(0,i.jsx)(t.h3,{id:"create-a-new-firebase-project-for-the-new-region",children:"Create a new Firebase Project for the new Region"}),(0,i.jsxs)(t.p,{children:["Create a new Firebase project for the development environment of the new region. Follow the steps in the ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=CgN--jl_zJ0",children:"03 Create Firebase Projects"})," video tutorial for more information."]}),(0,i.jsx)(t.h3,{id:"initialize-the-firebase-storage",children:"Initialize the Firebase Storage"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Copy the contents of the /client/storage.rules file to the Rules tab"}),"\n",(0,i.jsxs)(t.li,{children:["Set the Firebase Storage's ",(0,i.jsx)(t.strong,{children:"Cross Origin Resource Sharing (CORS)"})," permissions using the ",(0,i.jsx)(t.strong,{children:"Google Cloud Shell"}),".","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to your Firebase project’s google cloud console on ",(0,i.jsx)(t.a,{href:"https://console.cloud.google.com/home",children:"https://console.cloud.google.com/home"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Activate the cloud shell by clicking the Activate Cloud Shell button on the upper right menu."}),"\n",(0,i.jsxs)(t.li,{children:["Create a cors.json file on the cloud shell using any of it's cloud-based text editors. Copy and paste the following contents to the JSON file:","\n",(0,i.jsx)(t.pre,{"data-language":"json","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"["})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"origin"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"*"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"method"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"GET"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"maxAgeSeconds"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"})]}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})})]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Run the command on cloud shell. Replace BUCKET_NAME with your Firebase Storage bucket name.","\n",(0,i.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"gsutil"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"cors"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"set"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"cors.json"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"gs://"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"FIREBASE_PROJECT_I"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"D"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:".appspot.com"})]})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["View the current cors configuration of a bucket:","\n",(0,i.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"gsutil"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"cors"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"get"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"gs://"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"FIREBASE_PROJECT_I"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"D"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:".appspot.com"})]})})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(t.h3,{id:"initialize-the-firestore-database",children:"Initialize the Firestore Database"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Copy the contents of the ",(0,i.jsx)(t.code,{children:"/client/firestore.rules"})," file to the Firestore ",(0,i.jsx)(t.strong,{children:"Rules"})," tab"]}),"\n"]}),(0,i.jsx)(t.h3,{id:"initialize-the-firebase-authentication",children:"Initialize the Firebase Authentication"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Enable Email/Password Authentication"}),"\n"]})]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/installation/firebase.mdx",route:"/installation/firebase",timestamp:1722935451e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting",video:{title:"Video Tutorials",type:"page"},about:{title:"About",type:"page"},references:"References"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"}]},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins",opengraph:"Opengraph Settings","google-search":"Google Search Console"}},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"A. Firebase Initialization",headings:c},pageNextRoute:"/installation/firebase",nextraLayout:o.ZP,themeConfig:a.Z};t.default=(0,s.j)(d)},6595:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(5893),s=n(1163),o=n(2169),a=n(5675),r=n.n(a),l={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,i.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:n}=(0,s.useRouter)(),{frontMatter:a}=(0,o.ZR)(),r="ACAP Tutorials",l="https://acaptutorials.github.io"+(t===n?e:"/".concat(n).concat(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:url",content:l}),(0,i.jsx)("meta",{property:"og:title",content:a.title||r}),(0,i.jsx)("meta",{property:"og:description",content:a.description||"Development notes"}),(0,i.jsx)("meta",{property:"og:site_name",content:r}),(0,i.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{property:"og:image:alt",content:r}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:r}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.6",text:(0,i.jsx)(function(){return(0,i.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.6",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","v10.1.0-alpha.6",", dev branch @","e2df7bf"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,i.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,i.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=4048)}),_N_E=e.O()}]);