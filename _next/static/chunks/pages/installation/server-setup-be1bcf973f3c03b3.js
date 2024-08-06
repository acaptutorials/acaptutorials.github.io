(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[961],{8234:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/server-setup",function(){return t(4051)}])},4051:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return c}});var i=t(5893),s=t(2673),a=t(2169),r=t(6595);t(9488);var l=t(2643),o=t(2154);let c=[{depth:3,value:"Setup environment variables",id:"setup-environment-variables"},{depth:3,value:"Initialize provinces and municipalities",id:"initialize-provinces-and-municipalities"},{depth:3,value:"Create new superadmin password",id:"create-new-superadmin-password"},{depth:3,value:"Seed default data",id:"seed-default-data"},{depth:3,value:"Initialize 10-day weather forecast",id:"initialize-10-day-weather-forecast"},{depth:3,value:"Build the API docs (Optional)",id:"build-the-api-docs-optional"}];function d(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",code:"code",strong:"strong",ol:"ol",li:"li",ul:"ul",em:"em",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"B. Server Setup"}),"\n",(0,i.jsx)(n.p,{children:"Please read the server's README file in /server/README.md as reference for more information on the server environment variables."}),"\n",(0,i.jsx)(o.UW,{emoji:"ℹ️",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=yse71BamaoI",children:"08 Server Setup for Localhost Development"})," video tutorial shows how to initialize the server for localhost development in more detail."]})}),"\n",(0,i.jsxs)(o.Rg,{children:[(0,i.jsx)(n.h3,{id:"setup-environment-variables",children:"Setup environment variables"}),(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:".env"})," file inside the ",(0,i.jsx)(n.strong,{children:"/server"})," directory. Copy the contents of the ",(0,i.jsx)(n.code,{children:".env.example"})," file in it."]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"FIREBASE_SERVICE_ACC"})," variable with the Firebase project's private key from it's service account JSON file."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"FIREBASE_PRIVATE_KEY"})," variable with the ",(0,i.jsx)(n.code,{children:"FIREBASE_SERVICE_ACC"}),"'s private_key entry."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"FIREBASE_STORAGE_BUCKET"})," variable with your Firebase project's storage bucket"]}),"\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"REGION_NAME"})," variable with a string (no white space) representing the name of your new target region","\n",(0,i.jsx)(o.UW,{type:"info",emoji:"ℹ️",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"server"})," ",(0,i.jsx)(n.code,{children:"REGION_NAME"})," should be similar with the ",(0,i.jsx)(n.strong,{children:"client"})," ",(0,i.jsx)(n.code,{children:"REGION_NAME"})," value."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"AXIOS_SSL_REJECT_INVALID"})," to ",(0,i.jsx)(n.code,{children:"0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"AXIOS_SSL_REJECT_INVALID"})," does not yet exist, please make sure that your forked repository have the most recent update from the upstream repository."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"AXIOS_SSL_REJECT_INVALID"})," variable was added recently in ACAP-Bicol 1.0 ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"v9.3.13"})})," to fix a new bug that fails web scraping PAGASA's tropical cyclone and El Nino / La Nina web pages."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Initially set ",(0,i.jsx)(n.code,{children:"CHECK_RANGE_YEAR"})," to ",(0,i.jsx)(n.code,{children:"0"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This variable validates that the 10-day PAGASA Excel files downloads contain the latest year."}),"\n",(0,i.jsxs)(n.li,{children:["Running the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"npm run seed:all"})})," script below will throw an error if this variable set to ",(0,i.jsx)(n.code,{children:"1"}),", since the sample local 10-day PAGASA Excel files used for seeding initial data have outdated dates"]}),"\n",(0,i.jsxs)(n.li,{children:["Set it back to ",(0,i.jsx)(n.code,{children:"CHECK_RANGE_YEAR=1"})," after running the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"seed:all"})})," script."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"SPECIAL_CHARACTERS"})," to ",(0,i.jsx)(n.code,{children:"├\xe2┬▒:\xf1,\xe2:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This variable converts the ",(0,i.jsx)(n.code,{children:"├\xe2┬▒"})," garbled text to ",(0,i.jsx)(n.code,{children:"\xf1"})," from municipality names containing the \xf1 character in the PAGASA 10-day weather forecast Excel files."]}),"\n",(0,i.jsx)(n.li,{children:"Add other key-value pairs of special characters and their normalized values, delimited by a comma as needed"}),"\n",(0,i.jsxs)(n.li,{children:["Read on this ",(0,i.jsx)(n.a,{href:"https://github.com/ciatph/ph-municipalities/issues/61",children:"reference"})," for more information about this bug."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"ACAP 2.0 introduces several new environment variables."})})," Add the following, while refering to the server's README file in /server/README.md for more information about these variables. Some variables need to be added or excluded in order to enable or disable the ACAP-RCMAS APIs.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SPECIAL_CHARACTERS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DEPLOYMENT_PLATFORM=default"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PROVINCES_ARCHIVE"})," - Set its value after running ",(0,i.jsx)(n.a,{href:"#initialize-provinces-and-municipalities",children:"2. Initialize provinces and municipalities"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ACAP_API_KEYS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"IS_RMCAS_API_ACTIVE=0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ROOT_API_URL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ROOT_API_URL_VERCEL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CHECK_RANGE_YEAR"})}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"initialize-provinces-and-municipalities",children:"Initialize provinces and municipalities"}),(0,i.jsxs)(n.p,{children:["Run ACAP's ",(0,i.jsx)(n.code,{children:'"pagasa:municipalities"'})," NPM script to get a list of the latest  PAGASA-updated municipalities and province names."]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["First navigate to the server directory from the command line then run:","\n",(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"pagasa:municipalities"})]})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Enter PAGASA's 10-day excel file URL when prompted.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["These files, updated daily around 8:00 AM are available on ",(0,i.jsx)(n.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast"})]}),"\n",(0,i.jsxs)(n.li,{children:["Enter a specific PAGASA's 10-day excel file URL when prompted:","\n",(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"https://pubfiles.pagasa.dost.gov.ph/pagasaweb/files/climate/tendayweatheroutlook/day1.xlsx"})})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"PROVINCES"})," and ",(0,i.jsx)(n.code,{children:"PROVINCES_ARCHIVE"})," variables with the comma-separated province names of your new target region resulting from ",(0,i.jsx)(n.strong,{children:"step #2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"DEFAULT_PROVINCE"})," .env variable with any province name from the ",(0,i.jsx)(n.code,{children:"PROVINCES"})," comma-separated province names."]}),"\n"]}),(0,i.jsx)(n.h3,{id:"create-new-superadmin-password",children:"Create new superadmin password"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the the file: ",(0,i.jsx)(n.code,{children:"/server/src/scripts/seeders/00_superadmin/index.js"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.code,{children:"password"})," parameter to the ",(0,i.jsx)(n.code,{children:"params"})," object. Enter a random password, and remember its value.","\n",(0,i.jsx)(n.pre,{"data-language":"js","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"params"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  displayname"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Super Admin'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  account_level"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  password"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'some_super_secret_password'"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"seed-default-data",children:"Seed default data"}),(0,i.jsxs)(n.p,{children:["This script initializes the Firestore database with default values. Navigate to the ",(0,i.jsx)(n.strong,{children:"server"})," folder from the command line and run the NPM script:"]}),(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"seed:all"})]})})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This script will create default, mock (empty) values to designated Firestore collections and documents using the defined region and provinces in the .env file, which should be updated later with real values."}),"\n",(0,i.jsx)(n.li,{children:"This script expects to finish without errors. Re-trace, debug and troubleshoot errors, if any will show, before proceeding to the Client Set-up section."}),"\n"]}),(0,i.jsx)(n.h3,{id:"initialize-10-day-weather-forecast",children:"Initialize 10-day weather forecast"}),(0,i.jsx)(n.p,{children:"Run this server NPM script to fetch and upload the @latest PAGASA 10-day weather forecast data to the Firestore database. Navigate to the server folder from the command line and run the NPM script:"}),(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"cron:tenday"})]})})}),(0,i.jsx)(n.h3,{id:"build-the-api-docs-optional",children:"Build the API docs (Optional)"}),(0,i.jsx)(n.p,{children:"(Optional) Build ACAP server's REST API documentation website for reference."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to the server folder from the command line and run the NPM script:","\n",(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"gen:docs"})]})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"/server/src/public/docs"})," folder and click the index.html file to view the generated API documentation.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The API documentation website is also available on ",(0,i.jsx)(n.code,{children:"http://localhost:3001/docs"})," after running the server app."]}),"\n"]}),"\n"]}),"\n"]})]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/installation/server-setup.mdx",route:"/installation/server-setup",timestamp:1722935451e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting",video:{title:"Video Tutorials",type:"page"},about:{title:"About",type:"page"},references:"References"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"}]},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins",opengraph:"Opengraph Settings","google-search":"Google Search Console"}},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"B. Server Setup",headings:c},pageNextRoute:"/installation/server-setup",nextraLayout:a.ZP,themeConfig:r.Z};n.default=(0,s.j)(h)},6595:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(5893),s=t(1163),a=t(2169),r=t(5675),l=t.n(r),o={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,i.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:n,locale:t}=(0,s.useRouter)(),{frontMatter:r}=(0,a.ZR)(),l="ACAP Tutorials",o="https://acaptutorials.github.io"+(n===t?e:"/".concat(t).concat(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:url",content:o}),(0,i.jsx)("meta",{property:"og:title",content:r.title||l}),(0,i.jsx)("meta",{property:"og:description",content:r.description||"Development notes"}),(0,i.jsx)("meta",{property:"og:site_name",content:l}),(0,i.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{property:"og:image:alt",content:l}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:l}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.6",text:(0,i.jsx)(function(){return(0,i.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.6",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","v10.1.0-alpha.6",", dev branch @","e2df7bf"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,i.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,i.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=8234)}),_N_E=e.O()}]);