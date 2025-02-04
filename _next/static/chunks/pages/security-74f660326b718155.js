(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{2702:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/security",function(){return n(4129)}])},4129:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var a=n(5893),i=n(2673),s=n(3451),r=n(1860);n(9488);var o=n(2643);n(7294);var l=n(2154),c=n(9923);let d=[{depth:2,value:"Database",id:"database"},{depth:2,value:"Sensitive data management",id:"sensitive-data-management"},{depth:2,value:"File Storage",id:"file-storage"},{depth:2,value:"Codebase",id:"codebase"},{depth:2,value:"User/Admin Accounts",id:"useradmin-accounts"},{depth:2,value:"References",id:"references"},{depth:3,value:"Firebase Authentication",id:"firebase-authentication"},{depth:3,value:"Database",id:"database-1"},{depth:3,value:"Online Storage",id:"online-storage"}];function h(e){let t=Object.assign({h1:"h1",p:"p",em:"em",a:"a",strong:"strong",h2:"h2",ol:"ol",li:"li",ul:"ul",h3:"h3"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Security Guidelines"}),"\n",(0,a.jsxs)(t.p,{children:["ACAP adheres to strict security practices and development patterns defined by its technology stack ",(0,a.jsxs)("u",{children:['"',(0,a.jsx)(t.em,{children:"while considering the limited options of its (default) standard-pricing tier cloud services"}),'"']})," starting from its initial ",(0,a.jsx)(t.a,{href:"/changelog/#version-1-acap-10",children:"1.0"})," version."]}),"\n",(0,a.jsxs)(t.p,{children:["Please ensure continued compliance with these security standards when extending ACAP to add or enhance new features while actively considering its currently available plans, options, and ",(0,a.jsx)(t.strong,{children:"features requirements"})," at hand."]}),"\n",(0,a.jsx)(l.UW,{type:"error",emoji:"☠️",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"NOTE:"})," Further enhancements and feature updates to the initial ",(0,a.jsx)(t.a,{href:"/changelog/#version-1-acap-10",children:(0,a.jsx)(t.strong,{children:"ACAP 1.0"})})," version may introduce new requirements to address additional use cases. Please ensure that security measures meet the expectations outlined in these new requirements."]})}),"\n",(0,a.jsx)(t.h2,{id:"database",children:"Database"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Manually test and ensure using the ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Firestore Web API"})," and ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/use-rest-api",children:"Firestore REST APIs"})," that:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["(a) Signed-in users cannot perform ",(0,a.jsx)(t.strong,{children:"CREATE/EDIT/DELETE"})," operations in the Firestore collections and documents defined in the Firestore Rules."]}),"\n",(0,a.jsxs)(l.UW,{type:"warning",children:[(0,a.jsxs)(t.p,{children:["NOTE: If there is a need to perform ",(0,a.jsx)(t.strong,{children:"CREATE/EDIT/DELETE"})," operations ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:'"directly"'})})," in the Firestore collections or documents using the ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Firestore Web API"})," or ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/use-rest-api",children:"Firestore REST APIs"}),", please ensure the creation and testing of robust, new ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/security/get-started",children:"Firestore Rules"}),' that will meet the "new" requirements (ACAP ',(0,a.jsx)("span",{className:"text-xl font-bold text-red-600",children:"1.0"})," only performs such operations thru the ",(0,a.jsx)(t.a,{href:"/directories/server",children:"backend NodeJS REST APIs"}),", ",(0,a.jsx)(t.strong,{children:"Database #2"}),", ",(0,a.jsx)(t.strong,{children:"Database #3"}),"). This ensures manageable security and safety, preventing security breaches like the cross-site scripting (XSS) attack example detailed at:",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsxs)(c.Z,{anchorText:"XSS Vulnerability Awareness in ACAP 2.0",children:[(0,a.jsxs)(t.p,{children:["A YouTube video detailing steps for exploiting XSS vulnerabilities in the ",(0,a.jsx)(t.strong,{children:"ACAP 2.0 crop recommendations"})," at ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=b9UZ6_OCTaY",children:"https://www.youtube.com/watch?v=b9UZ6_OCTaY"})," has been set to private permissions to limit exposure. This video is a resource for understanding the security challenges associated with these vulnerabilities and ACAP, which occurred starting on ",(0,a.jsx)(t.strong,{children:"version 2.0"})," due to new development approaches and priorities."]}),(0,a.jsx)(t.p,{children:"For ACAP Maintainers or developers interested in exploring the content, please contact the current active ACAP Maintainer(s) for an invitation to access the video. Engaging with this material can provide insights into the security considerations that have been acknowledged and inform future enhancements to the system's security measures."})]})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["(b) Signed-in users cannot ",(0,a.jsx)(t.strong,{children:"CREATE"})," new Firestore collections and documents"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["(c) Public users without sign-in authentication cannot ",(0,a.jsx)(t.strong,{children:"VIEW"})," sensitive information such as phonebook contacts and email information"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Ensure that all mutative ",(0,a.jsx)(t.strong,{children:'"WRITE"'})," operations in the Firestore database occur only through authenticated HTTPS requests in the backend (NodeJS) REST APIs. ",(0,a.jsxs)(t.em,{children:["(see also ",(0,a.jsx)(t.a,{href:"/directories/server",children:"Server"})," for more information)."]})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["(a) ACAP 1.0's Firestore Rules strictly prohibits ",(0,a.jsx)(t.strong,{children:"Database #1.a"})," and ",(0,a.jsx)(t.strong,{children:"Database #1.b"})," to enforce this."]}),"\n",(0,a.jsxs)(t.li,{children:["(b) If new requirements allow item ",(0,a.jsx)(t.strong,{children:"Database #1.a"}),' to "directly" perform ',(0,a.jsx)(t.strong,{children:"CREATE/EDIT/DELETE"})," operations in Firestore collections or documents using the ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Firestore Web API"})," or ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/use-rest-api",children:"Firestore REST APIs"}),", please ensure that ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:'"new"'})})," and robust ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/security/get-started",children:"Firestore Rules"})," are created and thoroughly tested. These Rules may need to be separate from ACAP ",(0,a.jsx)("span",{className:"text-xl font-bold text-red-600",children:"1.0"}),", which ",(0,a.jsx)(t.em,{children:'"discourages this approach unless Firestore Rules can be properly enforced"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Ensure proper server-side validation when mutating data through the backend (NodeJS) REST APIs using\xa0",(0,a.jsx)(t.strong,{children:"validation scripts"})," in ",(0,a.jsx)(t.em,{children:"middleware"})," or the\xa0",(0,a.jsx)(t.em,{children:"controller"}),"\xa0scripts."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Firestore database security relies on properly tested Firestore Rules to ensure security, especially if its rules do not disable all ",(0,a.jsx)(t.strong,{children:"VIEW/CREATE/EDIT/DELETE"})," operations."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Please ensure that "new" and robust Firestore Rules are created and thoroughly tested, in case new database components or requirements need to be added to the ACAP 1.0 Firestore database.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"sensitive-data-management",children:"Sensitive data management"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Ensure that sensitive data and environment variables are never statically generated and deployed to the GitHub Pages or Firebase Hosting static hosting websites."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Sensitive data, secured with Firebase Authentication, Firebase Custom Claims (",(0,a.jsx)(t.strong,{children:"User/Admin Accounts #1, #2"}),") and Firestore Rules (",(0,a.jsx)(t.strong,{children:"Database #1.c"}),") is dynamically fetched from the Firestore Database using the Firestore Web APIs or the secure (NodeJS) REST APIs."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"file-storage",children:"File Storage"}),"\n",(0,a.jsx)(t.p,{children:"Manually test and ensure, using the Firebase Storage Web APIs, that:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'Public and signed-in users can only "READ" or download the PDF bulletin files.'}),"\n",(0,a.jsx)(t.li,{children:"Public and signed-in users cannot UPLOAD or DELETE files."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"codebase",children:"Codebase"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Ensure that forked\xa0",(0,a.jsx)(t.strong,{children:"climate-services-webportal-v1"}),"\xa0(ACAP 1.0) or\xa0",(0,a.jsx)(t.strong,{children:"acap-v2"}),"\xa0(ACAP 2.0) monorepo code base or copies remain PRIVATE in GitHub and other public platforms."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"useradmin-accounts",children:"User/Admin Accounts"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Ensure that Admin accounts are created by the superadmin in the NodeJS backend using ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/",children:"Firebase Authentication"})," with ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/admin/custom-claims",children:"Firebase Custom Claims"}),", leveraging the ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/admin/setup",children:"Firebase Admin SDK"})," to ensure maximum security."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["More information about ACAP 1.0's Security requirements are available in its Software Requirements Specifications document available in this ",(0,a.jsx)(t.a,{href:"https://github.com/amia-cis/acap-v2/blob/dev/docs/acap_1.0_software_requirements_specification_v4.0.pdf",children:"link"})," (accessible only for developers with access)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,a.jsx)(t.h3,{id:"firebase-authentication",children:"Firebase Authentication"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Firebase Authentication ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/",children:"[link]"})]}),"\n",(0,a.jsxs)(t.li,{children:["Firebase Custom Claims ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/admin/custom-claims",children:"[link]"})]}),"\n",(0,a.jsxs)(t.li,{children:["Firebase Admin SDK ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/admin/setup",children:"[link]"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"database-1",children:"Database"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Firestore Web API ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"[link]"})]}),"\n",(0,a.jsxs)(t.li,{children:["Firestore REST APIs ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/use-rest-api",children:"[link]"})]}),"\n",(0,a.jsxs)(t.li,{children:["Firestore Rules ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/security/get-started",children:"[link]"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"online-storage",children:"Online Storage"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Firebase Storage Web APIs ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/storage/web/upload-files",children:"[link]"})]}),"\n"]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/security.mdx",route:"/security",timestamp:1738688524e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},announcements:{title:"Announcements",type:"page"},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"announcements",route:"/announcements",children:[{kind:"Meta",data:{"firebase-storage-2024":{title:"Firebase Storage Pricing Plan Changes (2024)",type:"page"}}},{kind:"MdxPage",name:"firebase-storage-2024",route:"/announcements/firebase-storage-2024"}]},{kind:"MdxPage",name:"announcements",route:"/announcements"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"Security Guidelines",headings:d},pageNextRoute:"/security",nextraLayout:s.ZP,themeConfig:r.Z};t.default=(0,i.j)(u)},9923:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(5893),i=n(7294),s=n(5697),r=n.n(s),o=n(2010);function l(e){let{children:t,title:n,isOpen:s=!1,onClose:r}=e,{resolvedTheme:l}=(0,o.F)(),c=(0,i.useMemo)(()=>{let e="dark"===l?"bg-neutral-800":"bg-neutral-50";return"".concat(e," rounded-lg shadow-lg p-6 max-w-md w-full")},[l]);return s?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("h2",{className:"text-xl font-semibold mb-4",children:n}),t,(0,a.jsx)("div",{className:"flex justify-end mt-4",children:(0,a.jsx)("button",{onClick:r,className:"bg-neutral-500 text-white rounded-lg px-4 py-2 hover:bg-neutral-600 transition duration-200",children:"Close"})})]})}):null}function c(e){let{children:t,anchorText:n="Click Me",modalTitle:s}=e,[r,o]=(0,i.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{href:"#",className:"underline hover:text-blue-600",onClick:e=>{e.preventDefault(),o(e=>!e)},children:n}),(0,a.jsx)(l,{title:null!=s?s:n,isOpen:r,onClose:()=>o(e=>!e),children:t})]})}l.propTypes={children:r().node,title:r().string,isOpen:r().bool,onClose:r().func},c.propTypes={children:r().node,anchorText:r().string,modalTitle:r().string};var d=c},1860:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(5893),i=n(1163),s=n(3451),r=n(5675),o=n.n(r),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=n(9548),d=n.n(c),h={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,a.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:t,locale:n}=(0,i.useRouter)(),{frontMatter:r}=(0,s.ZR)(),o="https://acaptutorials.github.io"+(t===n?e:"/".concat(n).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"description",content:c}),(0,a.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap 2.1, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, climate information system, climate information system (cis), climate information services, climate information services (cis), agro-climatic advisory portal, agro-climatic advisory portal (acap), agro-climatic advisory portal (ACAP), agro climatic advisory portal, agroclimatic advisory portal (acap), agroclimatic advisory portal (ACAP)"}),(0,a.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,a.jsx)("meta",{property:"og:url",content:o}),(0,a.jsx)("meta",{property:"og:title",content:r.title||l}),(0,a.jsx)("meta",{property:"og:description",content:r.description||c}),(0,a.jsx)("meta",{property:"og:site_name",content:l}),(0,a.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,a.jsx)("meta",{property:"og:image:height",content:"630"}),(0,a.jsx)("meta",{property:"og:image:alt",content:l}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:l}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,a.jsx)(function(){return(0,a.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,a.jsx)(function(){return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,a.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,a.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,a.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,a.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,a.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=2702)}),_N_E=e.O()}]);