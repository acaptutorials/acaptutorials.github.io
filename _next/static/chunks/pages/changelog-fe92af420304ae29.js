(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{8630:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog",function(){return i(1588)}])},1588:function(e,n,i){"use strict";i.r(n),i.d(n,{FAQBoxError:function(){return p},__toc:function(){return u}});var t=i(5893),a=i(2673),r=i(3451),s=i(1860);i(9488);var o=i(2643),l=i(7294),c=i(2154),d=i(2010),h=i(9923);function p(e){let{title:n,children:i,open:a=!1}=e,r=Object.assign({div:"div",details:"details",summary:"summary",strong:"strong"},(0,o.a)()),[s,c]=(0,l.useState)(!1),{theme:h,resolvedTheme:p}=(0,d.F)();(0,l.useEffect)(()=>{c(!0)},[]);let u=(0,l.useMemo)(()=>({details:"last-of-type:mb-0 p-2 mt-4 nx-rounded-lg nx-border nx-py-2 contrast-more:nx-border-current contrast-more:dark:nx-border-current nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200",summary:"nx-flex nx-items-center nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:".concat(p," dark:hover:").concat(p," before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert before:nx-shrink-0 rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90")}),[p]);return s?(0,t.jsxs)(r.details,{open:a,className:u.details,children:[(0,t.jsx)(r.summary,{className:u.summary,children:(0,t.jsx)(r.strong,{className:"text-md",children:n})}),(0,t.jsx)(r.div,{className:"nx-p-2",children:i})]}):(0,t.jsx)(r.div,{children:"..."})}let u=[{depth:3,value:"Version 2 (ACAP 2.0)",id:"version-2-acap-20"},{depth:4,value:"Added",id:"added"},{depth:4,value:"Changed",id:"changed"},{depth:4,value:"Fixed",id:"fixed"},{depth:3,value:"Version 1 (ACAP 1.0)",id:"version-1-acap-10"},{depth:4,value:"Added",id:"added-1"},{depth:4,value:"Changed",id:"changed-1"},{depth:4,value:"Fixed",id:"fixed-1"}];function m(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",em:"em",a:"a",strong:"strong",ol:"ol",li:"li",blockquote:"blockquote",h4:"h4",ul:"ul",code:"code",hr:"hr"},(0,o.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"ACAP Change Log"}),"\n",(0,t.jsx)(n.p,{children:"This page contains summary of features and enhancements on major ACAP versions and their programming-development timelines."}),"\n",(0,t.jsxs)(c.Rg,{children:[(0,t.jsx)(n.h3,{id:"version-2-acap-20",children:"Version 2 (ACAP 2.0)"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"June 2024 - December 2024"})}),(0,t.jsxs)(n.p,{children:["Versions from 2.0+ highlight improvements and newly added features, expanding and enhancing the initial ",(0,t.jsx)(n.a,{href:"#version-1-acap-10",children:"ACAP"})," version."]}),(0,t.jsx)(c.UW,{type:"info",emoji:"ℹ️",children:(0,t.jsxs)(n.p,{children:["ACAP 2.0 is the latest ACAP version. Its latest stable version is Release/Tag version ",(0,t.jsx)("b",{children:(0,t.jsx)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",children:(0,t.jsx)("u",{children:"v10.1.0-alpha.10"})})}),", dev branch ",(0,t.jsxs)("b",{children:["@","95a97cd"]})," accessible in the ",(0,t.jsx)(n.strong,{children:"acap-v2"})," code repository."]})}),(0,t.jsx)(c.UW,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Version 2.0 and later versions may have new requirements that will thrive on new development approaches loosely tied to the recommended\xa0",(0,t.jsx)(n.a,{href:"/security",children:"Security"}),"\xa0and\xa0",(0,t.jsx)(n.a,{href:"/directories/server",children:"Server"}),"\xa0guidelines of\xa0",(0,t.jsx)(n.strong,{children:"ACAP 1.0"}),", requiring thorough testing and validation."]})}),(0,t.jsxs)(p,{title:"\uD83D\uDC80 Version 2.0 - 2.1 Security Technical Debts",children:[(0,t.jsx)("div",{id:"acap-2-security-debts"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Flexible Firestore Database Use:"})," Version 2.0+ adopted a more flexible approach for handling data management, facilitating faster feature development by performing ",(0,t.jsx)(n.em,{children:(0,t.jsx)("u",{children:"WRITE operations to the database directly from the web front end"})})," coupled with more ",(0,t.jsx)(n.em,{children:(0,t.jsx)("u",{children:"lenient Firestore database Rules"})}),". However, this shift also introduced the potential for data to enter the database without the usual front-end controls through the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/firestore/docs/reference/rest/",children:"Firestore REST APIs"}),". While this was ",(0,t.jsx)("u",{children:(0,t.jsx)("b",{children:(0,t.jsx)("i",{children:"not an issue in Version 1.0"})})}),", it emerged as part of the effort to enhance development speed and feature delivery starting with Version 2.0."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cross-Site Scripting (XSS) Vulnerability in Crop Recommendations:"})," Related to item 1, the new process for editing WYSIWYG HTML-form crop recommendations input may allow unsafe or inaccurate content due to limited validation through the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/firestore/docs/reference/rest/",children:"Firestore REST APIs"}),". Risks associated with this were recognized early in the process, but the focus on delivering core features led to a delay in integrating security measures."]}),"\n",(0,t.jsxs)(h.Z,{anchorText:"XSS Vulnerability Awareness in ACAP 2.0",children:[(0,t.jsxs)(n.p,{children:["A YouTube video detailing steps for exploiting XSS vulnerabilities in the ",(0,t.jsx)(n.strong,{children:"ACAP 2.0 crop recommendations"})," at ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=b9UZ6_OCTaY",children:"https://www.youtube.com/watch?v=b9UZ6_OCTaY"})," has been set to private permissions to limit exposure. This video is a resource for understanding the security challenges associated with these vulnerabilities and ACAP, which occurred starting on ",(0,t.jsx)(n.strong,{children:"version 2.0"})," due to new development approaches and priorities."]}),(0,t.jsx)(n.p,{children:"For ACAP Maintainers or developers interested in exploring the content, please contact the current active ACAP Maintainer(s) for an invitation to access the video. Engaging with this material can provide insights into the security considerations that have been acknowledged and inform future enhancements to the system's security measures."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Crop recommendations data integrity:"})," Ensuring that data presentations in PDF bulletins remain unaltered, trustworthy, and accurate is crucial for users and future developers. This priority stems from the concerns identified in items 1 and 2."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Firestore database pollution:"})," Also related to item 1, the new ",(0,t.jsx)(n.strong,{children:'"Support Services"'})," data with insufficient validation, if pushed through the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/firestore/docs/reference/rest/",children:"Firestore REST APIs"}),", can potentially allow writing unlimited key-value pairs with unlimited text or Object content length in Firestore Documents or creating Collections/Documents recursively outside the developer's intended schema or structure. If left unchecked, this can speed up the consumption of the Firebase standard plan quota (or drive up the billing if subscribed to the Firebase Blaze plan) in the long run."]}),"\n"]}),"\n"]}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["These issues, raised during the early 2.0 development phase (June 2024), have been communicated to the new main ACAP code Maintainer, who is also the ",(0,t.jsx)(n.a,{href:"https://github.com/amia-cis/acap-v2/issues/57",children:"new primary developer/programmer"})," leading the creation and enhancement of new features for Version 2.0. The new code Maintainer has made thoughtful decisions for balancing development speed with feature delivery, reflecting their understanding of the project's scope and the perceived security needs. They are open to addressing these issues as time and priorities allow within the ACAP project timeline."]}),"\n"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Related topic:"})," ",(0,t.jsx)(n.a,{href:"/announcements/firebase-storage-2024#security-considerations",children:"Security Concerns"})]})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"text-semibold text-sm text-slate-500 no-underline",children:[(0,t.jsx)(n.h4,{id:"added",children:"Added"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Integration of climate risk trigger in public/admin crop recommendations and bulletin PDF generation"}),"\n",(0,t.jsxs)(n.li,{children:["Support for multiple crops (cropping calendar and crop recommendations)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support new multiple recommendations/cropping calendar Excel files with new formats and structure."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Admin Pages","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cropping Calendar Excel file uploader"}),"\n",(0,t.jsx)(n.li,{children:"Crop Recommendations Excel file uploader"}),"\n",(0,t.jsxs)(n.li,{children:["Manage Recommendations","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View the uploaded recommendations list"}),"\n",(0,t.jsx)(n.li,{children:"View an uploaded recommendation"}),"\n",(0,t.jsx)(n.li,{children:"Edit an uploaded recommendation"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Phonebook: tag a contact to a province/municipality"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Use of tropical cyclone wind signals as a trigger for generating special weather recommendations"}),"\n",(0,t.jsx)(n.li,{children:'Allow the creation of "general" special weather recommendations'}),"\n",(0,t.jsxs)(n.li,{children:["Optional search engine optimization ",(0,t.jsx)(n.a,{href:"/post-installation/google-search",children:"(SEO) settings"})," with Google Search Console"]}),"\n",(0,t.jsxs)(n.li,{children:["REST APIs (NodeJS)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New endpoints for processing cropping calendar and recommendations Excel file uploads"}),"\n",(0,t.jsxs)(n.li,{children:["Migration of the ",(0,t.jsx)(n.a,{href:"/post-installation/acap-rcmas-api",children:"ACAP-RCMAS REST APIs"})," from the (forked) mirror environment with optional activation and deployment"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["(More ",(0,t.jsx)(n.strong,{children:'"ACAP 2.1"'})," feature update details to follow, starting from the ",(0,t.jsx)(n.code,{children:"dev"})," branch @commit ",(0,t.jsx)(n.strong,{children:"95a97cd"}),". In the meantime, see the ",(0,t.jsx)(n.a,{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",children:"link"})," for more information.)"]})}),"\n"]}),(0,t.jsx)(n.h4,{id:"changed",children:"Changed"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Public/admin seasonal recommendations and bulletin PDF generation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Removal of the single-month selection trigger for determining the crop stage/s"}),"\n",(0,t.jsx)(n.li,{children:"Removal of the rainfall condition trigger"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Public/admin 10-day recommendations and bulletin PDF generation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Removal of the single-date selection trigger within the active PAGASA 10-day date range for determining the crop stage/s"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deprecation of the ",(0,t.jsx)(n.strong,{children:"uploaders"})," group of Node Package Manager (NPM) scripts in favor of cropping calendar/recommendations Excel file upload through the UI"]}),"\n",(0,t.jsx)(n.li,{children:"Allow creating seasonal bulletin PDFs with more than one (1) page."}),"\n",(0,t.jsx)(n.li,{children:"Text blast recipients by province/municipality instead of individual selection"}),"\n"]}),(0,t.jsx)(n.h4,{id:"fixed",children:"Fixed"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Various bug fixes and minor updates with summary in the ",(0,t.jsx)(n.strong,{children:"acap-v2"})," Releases ",(0,t.jsx)(n.a,{href:"https://github.com/amia-cis/acap-v2/releases",children:"page"})," for more information."]}),"\n"]})]}),(0,t.jsx)(n.h3,{id:"version-1-acap-10",children:"Version 1 (ACAP 1.0)"}),(0,t.jsx)(c.UW,{type:"info",emoji:"ℹ️",children:(0,t.jsxs)(n.p,{children:["ACAP 1.0's last stable version is Release/Tag version ",(0,t.jsx)(n.a,{href:"https://github.com/amia-cis/climate-services-webportal-v1/releases/tag/v9.5.6",children:(0,t.jsx)(n.strong,{children:"v9.5.6"})}),", accessible in the ",(0,t.jsx)(n.strong,{children:"climate-services-webportal-v1"})," and ",(0,t.jsx)(n.strong,{children:"acap-v2"})," code repositories."]})}),(0,t.jsxs)(n.p,{children:["Version 1.0 marks the initial ACAP Bicol release used as a base model and template for subsequent developer training and sharing with other regions in the succeeding years starting on ",(0,t.jsx)(n.a,{href:"https://uplbfi.org/?p=2097",children:(0,t.jsx)(n.strong,{children:"July 2023"})}),"."]}),(0,t.jsx)(n.p,{children:"Developed with a Security-first approach, ACAP 1.0 especially notes common Firestore security pitfalls and keeps a watchful eye on Cross-Site Scripting (XSS) attacks since it uses What-You-See-Is-What-You-Get (WYSIWYG) HTML input for crop recommendations and PDF generation."}),(0,t.jsxs)(n.p,{children:["It has the following features, strictly following and is tested compatible with the recommended\xa0",(0,t.jsx)(n.a,{href:"/security",children:"Security"}),"\xa0and ",(0,t.jsx)(n.a,{href:"/directories/server",children:"Server"}),"\xa0guidelines:"]}),(0,t.jsxs)("div",{className:"text-semibold text-sm text-slate-500 no-underline",children:[(0,t.jsx)(n.h4,{id:"added-1",children:"Added"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"March - December 2022"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login and User Authentication"}),"\n",(0,t.jsx)(n.li,{children:"User (Admin) Accounts Management"}),"\n",(0,t.jsxs)(n.li,{children:["PDF Bulletins Generator","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/articles/pdf-development",children:"Generated bulletins"})," match the given JPEG layout, and all content fits on one (1) page"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Site Search"}),"\n",(0,t.jsxs)(n.li,{children:["Public Pages","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Home Page"}),"\n",(0,t.jsxs)(n.li,{children:["ACAP Services Page (Weather Services)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"10-Day Weather Forecast Summary"}),"\n",(0,t.jsx)(n.li,{children:"Seasonal Weather Forecast Summary"}),"\n",(0,t.jsx)(n.li,{children:"Special Weather Forecast Summary"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Cropping Calendar: support for one (1) crop (Rice)"}),"\n",(0,t.jsxs)(n.li,{children:["Crop Recommendations Generator","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Seasonal Climate Outlook and Advisory Recommendations (using month, crop stages, and rainfall conditions as triggers)"}),"\n",(0,t.jsx)(n.li,{children:"10-Day Farm Weather Outlook and Advisory Recommendations (using current date and crop stage/s as triggers)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"PDF Bulletins Downloads"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Admin Pages","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Crop Recommendations Management","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Regional Seasonal Climate Outlook and Advisory PDF Bulletins and Reports Creator"}),"\n",(0,t.jsx)(n.li,{children:"10-Day Farm Outlook and Weather Advisory PDF Bulletins and Reports Creator"}),"\n",(0,t.jsx)(n.li,{children:"Special Weather Forecast PDF Bulletins and Reports Creator"}),"\n",(0,t.jsx)(n.li,{children:"View created reports/bulletins list"}),"\n",(0,t.jsx)(n.li,{children:"View a created report/bulletin"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["SMS Management","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Phonebook"}),"\n",(0,t.jsx)(n.li,{children:"Send SMS"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["ACAP Settings","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Weather Forecast Data Management","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PAGASA seasonal weather forecast Excel file uploader"}),"\n",(0,t.jsx)(n.li,{children:"Manual weather systems input editor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["10-Day Weather Forecast Data Management","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PAGASA 10-Day weather forecast Excel files uploader"}),"\n",(0,t.jsx)(n.li,{children:"Manual moon phases input editor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Cyclone Typhoon Advisory Data Management","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Manual trigger of syncing the PAGASA Severe Tropical Cyclone web page data"}),"\n",(0,t.jsx)(n.li,{children:"Manual wind speed list and affected municipalities editor"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"User Profile Management"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Cloud deployment setup to\xa0",(0,t.jsx)(n.strong,{children:"development"}),"\xa0and\xa0",(0,t.jsx)(n.strong,{children:"production"}),"\xa0environments using GitHub Actions","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatic deployment to Heroku/Render (backend) and Firebase Hosting/GitHub Pages (frontend)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Docker setup for development and Render deployment"}),"\n",(0,t.jsxs)(n.li,{children:["REST API Endpoints","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A set of secure and authenticated REST API endpoints for allowing signed-in admins to mutate ACAP data over HTTPS"}),"\n",(0,t.jsx)(n.li,{children:"Processes the seasonal/10-day weather forecast Excel file uploads"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Cron Jobs (NPM scripts) for Automatic Weather Forecast Data Syncing to the ACAP Database"}),"\n"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Daily 10-Day Weather Forecast Excel Files from PAGASA data syncing"}),"\n",(0,t.jsx)(n.li,{children:"Weekly El Nino/La Nina PAGASA web page contents syncing"}),"\n",(0,t.jsx)(n.li,{children:"Regular daily syncing of PAGASA's Severe Tropical Cyclone Bulletin web page"}),"\n"]}),(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsx)(n.li,{children:"Data Processing and Upload Scripts"}),"\n"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NPM scripts for uploading cropping calendar data (CSV file) and crop recommendations (Excel file) to the database"}),"\n",(0,t.jsx)(n.li,{children:"NPM scripts for seeding the Firestore database with default data"}),"\n"]}),(0,t.jsxs)(n.ol,{start:"12",children:["\n",(0,t.jsxs)(n.li,{children:["Software development planning documentation (available at ",(0,t.jsx)(n.a,{href:"https://github.com/amia-cis/acap-v2/tree/dev/docs",children:"link"}),")."]}),"\n"]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"June 2023 onwards"})}),(0,t.jsx)(n.h4,{id:"changed-1",children:"Changed"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Used ",(0,t.jsx)(n.code,{children:".env"})," variables to manage region-specific static text in the front end, ensuring the base model of the application can be easily adapted for multiple regions with different text content requirements, allowing easier regional static text replacement."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use\xa0",(0,t.jsx)(n.code,{children:"nda"}),"\xa0values for null/empty seasonal weather forecast data in the backend and front end, borrowed from the ongoing ACAP-RCMAS API development."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.h4,{id:"fixed-1",children:"Fixed"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Various bug fixes and minor updates with summary in the ",(0,t.jsx)(n.strong,{children:"climate-services-webportal-v1"})," (ACAP 1.0 repository) ",(0,t.jsx)(n.a,{href:"https://github.com/amia-cis/climate-services-webportal-v1/releases",children:"Releases"})," page for more information."]}),"\n"]})]})]})]})}let g={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/changelog.mdx",route:"/changelog",timestamp:1739060516e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},announcements:{title:"Announcements",type:"page"},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"announcements",route:"/announcements",children:[{kind:"Meta",data:{"firebase-storage-2024":{title:"Firebase Storage Pricing Plan Changes (2024)",type:"page"}}},{kind:"MdxPage",name:"firebase-storage-2024",route:"/announcements/firebase-storage-2024"}]},{kind:"MdxPage",name:"announcements",route:"/announcements"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","deployment-vercel":"Deployment to Vercel","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment-vercel",route:"/articles/deployment-vercel"},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"ACAP Change Log",headings:u},pageNextRoute:"/changelog",nextraLayout:r.ZP,themeConfig:s.Z};n.default=(0,a.j)(g)},9923:function(e,n,i){"use strict";i.d(n,{Z:function(){return d}});var t=i(5893),a=i(7294),r=i(5697),s=i.n(r),o=i(2010);function l(e){let{children:n,title:i,isOpen:r=!1,onClose:s}=e,{resolvedTheme:l}=(0,o.F)(),c=(0,a.useMemo)(()=>{let e="dark"===l?"bg-neutral-800":"bg-neutral-50";return"".concat(e," rounded-lg shadow-lg p-6 max-w-md w-full")},[l]);return r?(0,t.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,t.jsxs)("div",{className:c,children:[(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:i}),n,(0,t.jsx)("div",{className:"flex justify-end mt-4",children:(0,t.jsx)("button",{onClick:s,className:"bg-neutral-500 text-white rounded-lg px-4 py-2 hover:bg-neutral-600 transition duration-200",children:"Close"})})]})}):null}function c(e){let{children:n,anchorText:i="Click Me",modalTitle:r}=e,[s,o]=(0,a.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{href:"#",className:"underline hover:text-blue-600",onClick:e=>{e.preventDefault(),o(e=>!e)},children:i}),(0,t.jsx)(l,{title:null!=r?r:i,isOpen:s,onClose:()=>o(e=>!e),children:n})]})}l.propTypes={children:s().node,title:s().string,isOpen:s().bool,onClose:s().func},c.propTypes={children:s().node,anchorText:s().string,modalTitle:s().string};var d=c},1860:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(5893),a=i(1163),r=i(3451),s=i(5675),o=i.n(s),l=JSON.parse('{"$":[{"label":"Home","url":"https://acaptutorials.github.io/"},{"label":"Changelog","url":"https://acaptutorials.github.io/changelog"},{"label":"Installation and Setup","url":"/installation"},{"label":"Post-Installation Setup","url":"/post-installation"},{"label":"Security","url":"/security"},{"label":"Checklist","url":"/checklist"},{"label":"References","url":"/references"}]}'),c=i(9548),d=i.n(c),h={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,t.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:n,locale:i}=(0,a.useRouter)(),{frontMatter:s}=(0,r.ZR)(),o="https://acaptutorials.github.io"+(n===i?e:"/".concat(i).concat(e)),l="ACAP Tutorials",c="The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol).";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"description",content:c}),(0,t.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap 2.1, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, climate information system, climate information system (cis), climate information services, climate information services (cis), agro-climatic advisory portal, agro-climatic advisory portal (acap), agro-climatic advisory portal (ACAP), agro climatic advisory portal, agroclimatic advisory portal (acap), agroclimatic advisory portal (ACAP)"}),(0,t.jsx)("meta",{httpEquiv:"content-language",content:"en-gb"}),(0,t.jsx)("meta",{property:"og:url",content:o}),(0,t.jsx)("meta",{property:"og:title",content:s.title||l}),(0,t.jsx)("meta",{property:"og:description",content:s.description||c}),(0,t.jsx)("meta",{property:"og:site_name",content:l}),(0,t.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,t.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,t.jsx)("meta",{property:"og:image:height",content:"630"}),(0,t.jsx)("meta",{property:"og:image:alt",content:l}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:title",content:l}),(0,t.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,t.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,t.jsx)(function(){return(0,t.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","95a97cd"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("h3",{className:"text-md font-semibold mb-4",children:"Main Topics"}),(0,t.jsx)("ul",{className:d().links,children:l.$.map(e=>(0,t.jsx)("li",{className:"pl-[6px] text-[12px]",children:(0,t.jsx)("a",{href:e.url,className:"text-slate-500 hover:underline hover:text-blue-500",children:e.label})},e.label))}),(0,t.jsxs)("div",{className:"mt-5 w-full flex justify-center",children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,t.jsx)("a",{href:"https://acaptutorials.github.com/",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})]})},{})}}},9548:function(e){e.exports={links:"Footer_styles_links__Zvdmh"}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=8630)}),_N_E=e.O()}]);