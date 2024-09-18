(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{6368:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/provinces-municipalities",function(){return n(4272)}])},4272:function(e,i,n){"use strict";n.r(i),n.d(i,{FAQBox:function(){return p},__toc:function(){return h}});var a=n(5893),t=n(2673),s=n(3451),o=n(6595);n(9488);var r=n(2643),c=n(7294),l=n(2154),d=n(2010);function p(e){let{title:i,children:n,open:t=!1}=e,s=Object.assign({div:"div",details:"details",summary:"summary",strong:"strong"},(0,r.a)()),[o,l]=(0,c.useState)(!1),{theme:p,resolvedTheme:h}=(0,d.F)();(0,c.useEffect)(()=>{l(!0)},[]);let m=(0,c.useMemo)(()=>{let e="dark"===h?"bg-neutral-800":"bg-neutral-50";return"last-of-type:mb-0 rounded-lg ".concat(e," p-2 mt-4")},[h]);return o?(0,a.jsxs)(s.details,{open:t,className:m,children:[(0,a.jsx)(s.summary,{children:(0,a.jsx)(s.strong,{className:"text-md",children:i})}),(0,a.jsx)(s.div,{className:"nx-p-2",children:n})]}):(0,a.jsx)(s.div,{children:"..."})}let h=[{depth:2,value:"Data Source",id:"data-source"},{depth:2,value:"FAQs",id:"faqs"},{depth:2,value:"Regional Provinces / Municipalities Inconsistency",id:"regional-provinces--municipalities-inconsistency"},{depth:2,value:"Updating Regional Provinces",id:"updating-regional-provinces"},{depth:3,value:"Confirm target provinces",id:"confirm-target-provinces"},{depth:3,value:"Add province to a region",id:"add-province-to-a-region"},{depth:3,value:"Remove a province",id:"remove-a-province"},{depth:3,value:"Sync new provinces",id:"sync-new-provinces"},{depth:2,value:"Intensive Province/Municipalities Customizations",id:"intensive-provincemunicipalities-customizations"},{depth:2,value:"References",id:"references"}];function m(e){let i=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",blockquote:"blockquote",em:"em",strong:"strong",pre:"pre",span:"span",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,r.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{children:"Provinces and Municipalities"}),"\n",(0,a.jsx)(i.h2,{id:"data-source",children:"Data Source"}),"\n",(0,a.jsxs)(i.p,{children:["ACAP uses a combination of the ",(0,a.jsx)(i.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA 10-day weather forecast Excel files"})," and the ",(0,a.jsx)(i.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"PAGASA Seasonal Forecast- Forecast Rainfall Analysis Table"})," as a data source for its region, provinces, and municipalities list."]}),"\n",(0,a.jsx)(i.h2,{id:"faqs",children:"FAQs"}),"\n",(0,a.jsx)(p,{title:"Where does ACAP source its provinces and municipalities list?",children:(0,a.jsxs)(i.p,{children:["ACAP uses the provinces and municipalities list defined in the ",(0,a.jsx)(i.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA 10-day weather forecast Excel files"}),", initializing or updating its internal list (per region) after running the ",(0,a.jsx)(i.code,{children:"npm run cron:tenday"})," NPM script."]})}),"\n",(0,a.jsxs)(p,{title:"The PAGASA 10-day weather forecast Excel files do not have region names. How does ACAP know which provinces belong to a region?",children:[(0,a.jsxs)(i.p,{children:["ACAP uses the region-province grouping from the ",(0,a.jsx)(i.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"PAGASA Seasonal Forecast"})," - Forecast Rainfall Analysis Table to determine which provinces belong to a region as a reference since it also processes provincial seasonal weather forecast information from the PAGASA Seasonal Forecast. ACAP expects province naming from the two (2) data sources (PAGASA 10-day and Seasonal weather forecasts) to match since both are data products produced by PAGASA."]}),(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"Regions with a memorandum of agreement with PAGASA also receive Seasonal Weather Forecast data in an Excel file containing the Seasonal Forecast Rainfall Analysis Table through email."}),"\n"]}),(0,a.jsxs)(i.p,{children:["ACAP initializes its province list during the ",(0,a.jsx)(i.a,{href:"/installation/server-setup/#initialize-provinces-and-municipalities",children:"Server Setup"})," stage."]})]}),"\n",(0,a.jsxs)(p,{title:"Do province names from the PAGASA Seasonal Forecast data always match with the province names in the PAGASA 10-day Excel files?",children:[(0,a.jsxs)(i.p,{children:["No. After more recent tests, it came to light that some province names defined in the ",(0,a.jsx)("u",{children:"PAGASA Seasonal Forecast (Forecast Rainfall Analysis Table)"})," may not always match the province names defined in the ",(0,a.jsx)("u",{children:"PAGASA 10-day Excel"})," files."]}),(0,a.jsxs)(i.p,{children:["For example, as of ",(0,a.jsx)(i.em,{children:"September 17, 2024"}),", the ",(0,a.jsx)(i.code,{children:'"Davao Occidental"'})," province is present in the PAGASA Seasonal Forecast (Forecast Rainfall Analysis Table) under ",(0,a.jsx)(i.strong,{children:"Region XI (Davao Region)"}),". However, it is missing in the PAGASA 10-Day Excel files."]}),(0,a.jsxs)(i.p,{children:["Similarly, the ",(0,a.jsx)(i.code,{children:'"Shariff Kabunsuan"'})," province is available in the PAGASA 10-Day Excel files, but it is nowhere to be found in the PAGASA Seasonal Forecast (Forecast Rainfall Analysis Table)."]}),(0,a.jsxs)(i.p,{children:["Refer to the\xa0",(0,a.jsx)(i.a,{href:"#regional-provinces--municipalities-inconsistency",children:"Regional Provinces / Municipalities Inconsistency"}),"\xa0section for more information about possible causes of region/province/municipality naming inconsistencies."]})]}),"\n",(0,a.jsxs)(p,{title:"How should ACAP approach inconsistent region/province/municipality naming conventions from the PAGASA 10-Day and Seasonal data?",children:[(0,a.jsx)(i.p,{children:'ACAP does not yet support syncing drastic national geopolitical or administrative divisions updates within the PAGSA 10-day weather forecast Excel files since it aims to use and display raw, un-altered 10-day weather forecast data "as-is" from PAGASA, including provinces and municipality names.'}),(0,a.jsx)(l.UW,{children:(0,a.jsxs)(i.p,{children:["However, there are ways to update or change the region in which a province belongs,\xa0",(0,a.jsx)(i.em,{children:(0,a.jsx)(i.strong,{children:"provided its name is present"})})," in the PAGASA 10-day Excel file. Refer to the\xa0",(0,a.jsx)(i.a,{href:"#updating-regional-provinces",children:"Updating Regional Provinces"}),"\xa0section to know more about this method."]})}),(0,a.jsxs)(l.UW,{type:"warning",children:[(0,a.jsxs)(i.p,{children:["Drastic updates to the region/province/municipalities naming convention or regional/provincial grouping that will thoroughly transform the original PAGASA 10-day weather forecast Excel file contents will require customization of forked ACAP\xa0",(0,a.jsx)(i.strong,{children:"backend"}),"\xa0or\xa0",(0,a.jsx)(i.strong,{children:"frontend"}),"\xa0codes and\xa0",(0,a.jsx)(i.strong,{children:"NPM scripts"}),"\xa0that facilitate 10-day weather forecast updating and seasonal weather forecast uploading to accommodate custom naming or grouping needs."]}),(0,a.jsxs)(i.p,{children:["Refer to the ",(0,a.jsx)(i.a,{href:"#intensive-provincemunicipalities-customizations",children:"Intensive Province/Municipalities Customizations"})," section for more information about this approach."]})]})]}),"\n",(0,a.jsxs)(p,{title:"Are the regional province lists generated by the 'npm run pagasa:municipalities' script updated?",children:[(0,a.jsxs)(i.p,{children:["It is not yet thoroughly tested if the regional province lists generated by ACAP's ",(0,a.jsx)(i.code,{children:"npm run pagasa:municipalities"})," script are updated (synced with the latest ",(0,a.jsx)(i.a,{href:"https://psa.gov.ph/classification/psgc",children:"PSCG"})," administrative divisions) for ALL regions, except Region 5."]}),(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"pagasa:municipalities"})," NPM script, which uses the ",(0,a.jsx)(i.a,{href:"https://www.npmjs.com/package/ph-municipalities",children:"ph-municipalities"})," library's ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.code,{children:"npm run list:region"})})," CLI script under the hood uses a static-defined region-to-province ",(0,a.jsx)(i.a,{href:"https://github.com/ciatph/ph-municipalities/blob/dev/app/config/regions.json",children:"mapping file"})," updated on 2024 regarding the available ",(0,a.jsx)(i.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"PAGASA Seasonal Forecast- Rainfall Analysis Table"}),"."]}),(0,a.jsx)(l.UW,{type:"warning",children:(0,a.jsxs)(i.p,{children:["It is also subject to possible outdated region/province/municipality naming content mentioned in the ",(0,a.jsx)(i.a,{href:"#regional-provinces--municipalities-inconsistency",children:"Regional Provinces / Municipalities Inconsistency"})," section."]})}),(0,a.jsxs)(i.p,{children:["Refer to the ",(0,a.jsx)(i.a,{href:"#updating-regional-provinces",children:"Updating Regional Provinces"})," section for more troubleshooting information if this script generates regional province lists with missing or extra provinces."]})]}),"\n",(0,a.jsxs)(p,{title:"Why are some municipalities greyed out (disabled) from dropdown lists?",children:[(0,a.jsx)(i.p,{children:"Sometimes, ACAP users or developers may notice several greyed out (disabled) municipalities listed from the dropdown menus in the Cropping Calendar, 10-day weather forecast, or crop recommendations pages."}),(0,a.jsx)(i.p,{children:'Inconsistent (or missing) municipality names between cropping calendars and the PAGASA 10-day weather forecast, which ACAP considers its "official" source of provinces and municipality listing, often causes municipalities to be disabled or greyed out.'}),(0,a.jsxs)(l.UW,{children:[(0,a.jsxs)(i.p,{children:["ACAP tracks inconsistent-named municipalities between these two (2) sources to promote consistent municipality naming conventions on every successful upload of cropping calendars or run of the\xa0",(0,a.jsx)(i.code,{children:"npm run cron:tenday"}),"\xa0script, flagging those which it finds inconsistent."]}),(0,a.jsx)(i.p,{children:"Since ACAP officially uses the PAGASA 10-day weather forecast municipality names, it will not find missing (or misspelled) municipality names in the cropping calendar when determining a selected municipality's crop stage(s) during recommendations generation."})]}),(0,a.jsxs)(i.p,{children:["To enable the greyed-out municipalities, upload cropping calendars that follow the PAGASA 10-day weather forecast municipality names and ",(0,a.jsx)(i.a,{href:"/post-installation/cropping-calendar/calendar-v2/#data-format",children:"cropping calendar Excel format"}),". Inconsistent-named municipalities are available for viewing in the development and production\xa0",(0,a.jsx)(i.strong,{children:"Firestore document"}),"\xa0for reference:"]}),(0,a.jsx)(i.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(i.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"/constant_data/diffs"})})})})]}),"\n",(0,a.jsx)(i.h2,{id:"regional-provinces--municipalities-inconsistency",children:"Regional Provinces / Municipalities Inconsistency"}),"\n",(0,a.jsx)(i.p,{children:"While ACAP Bicol (Region 5) or other regions generally may sync well with its provinces and municipalities listed from the PAGASA 10-day weather forecast Excel data source, several factors may affect its consistency in the long run."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Updates in the Philippine geopolitical or administrative divisions in the future (usually mandated by the ",(0,a.jsx)(i.a,{href:"https://psa.gov.ph/classification/psgc",children:"Philippine Standard Geographic Code"})," (PSGC)) may take some time to reflect on the contents and naming convention within the\xa0",(0,a.jsx)("u",{children:"PAGASA 10-day weather forecast Excel"}),"\xa0files ",(0,a.jsx)("u",{children:"or\xa0Seasonal Forecast - Rainfall Analysis Table"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["It is not yet thoroughly tested if ALL regions, provinces, and municipality names from\xa0",(0,a.jsx)("u",{children:"PAGASA's 10-day weather forecast Excel files"})," (",(0,a.jsx)(i.code,{children:"provinces and municipalities"}),") and their ",(0,a.jsx)("u",{children:"Seasonal Weather Forecast - Rainfall Analysis table"})," (",(0,a.jsx)(i.code,{children:"regions and provinces"}),") are up to date with the latest Philippine administrative divisions."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"updating-regional-provinces",children:"Updating Regional Provinces"}),"\n",(0,a.jsx)(i.p,{children:"This simple region-province grouping method assigns the PAGASA 10-day Excel files' provinces (and their associated municipalities) to a region without transforming or altering the original province/municipalities naming contents of the 10-day Excel files."}),"\n",(0,a.jsx)(l.UW,{type:"warning",children:(0,a.jsx)(i.p,{children:"It requires target province(s) defined in the PAGASA 10-day Excel file to work."})}),"\n",(0,a.jsxs)(l.Rg,{children:[(0,a.jsx)(i.h3,{id:"confirm-target-provinces",children:"Confirm target provinces"}),(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Download and open a PAGASA 10-day weather forecast Excel file from the ",(0,a.jsx)(i.a,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA 10-Day Climate Forecast web page"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Find the province(s) in the downloaded Excel file to add to your region."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["These province(s) may belong to other regions generated by the\xa0",(0,a.jsx)(i.code,{children:"npm run pagasa:municipalities"}),"\xa0script, or they may be missing from the list but exist in the 10-day Excel files."]}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"add-province-to-a-region",children:"Add province to a region"}),(0,a.jsxs)(i.p,{children:["Add new provinces(s) to a region's list of provinces from province names confirmed on ",(0,a.jsx)(i.strong,{children:"step #1"}),". For example to add the ",(0,a.jsx)(i.code,{children:'"Isabela"'})," province to ACAP Bicol's list of provinces, add ",(0,a.jsx)(i.code,{children:'"Isabela"'})," to the server's ",(0,a.jsx)(i.code,{children:"PROVINCES"})," variable in the ",(0,a.jsx)(i.code,{children:".env"})," file."]}),(0,a.jsx)(i.pre,{"data-language":"env","data-theme":"default",hasCopyCode:!0,children:(0,a.jsxs)(i.code,{"data-language":"env","data-theme":"default",children:[(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PROVINCES=Albay,Camarines Norte,Camarines Sur,Catanduanes,Masbate,Sorsogon,Isabela"})}),"\n",(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PROVINCES_ARCHIVE..."})})]})}),(0,a.jsx)(i.h3,{id:"remove-a-province",children:"Remove a province"}),(0,a.jsxs)(i.p,{children:["Similarly to remove a province from a region, remove its text string from the ",(0,a.jsx)(i.code,{children:"PROVINCES"})," (or ",(0,a.jsx)(i.code,{children:"PROVINCES_ARCHIVE"}),") server environment variables."]}),(0,a.jsx)(i.h3,{id:"sync-new-provinces",children:"Sync new provinces"}),(0,a.jsxs)(i.p,{children:["Run the script after ",(0,a.jsx)(i.a,{href:"#add-province-to-a-region",children:"adding"})," or ",(0,a.jsx)(i.a,{href:"#remove-a-province",children:"removing"})," a province from a region to update ACAP's list of provinces and municipalities."]}),(0,a.jsx)(i.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(i.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(i.span,{className:"line",children:[(0,a.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(i.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(i.span,{style:{color:"var(--shiki-token-string)"},children:"cron:tenday"})]})})})]}),"\n",(0,a.jsx)(i.h2,{id:"intensive-provincemunicipalities-customizations",children:"Intensive Province/Municipalities Customizations"}),"\n",(0,a.jsxs)(i.p,{children:["For ",(0,a.jsx)(i.strong,{children:"intensive naming and grouping transformation"})," beyond the simple method covered in the ",(0,a.jsx)(i.a,{href:"#updating-regional-provinces",children:"Updating Regional Provinces"})," section, developers can start checking the ",(0,a.jsx)(i.code,{children:"/server/src/scripts/cron/update_tenday_weather"})," ",(0,a.jsx)(i.strong,{children:'"group" of scripts'}),", possibly extending and overriding its ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.code,{children:"/classes/exceladapter/index.js"})})," class. This class ",(0,a.jsx)(i.a,{href:"https://javascript.info/class-inheritance#the-extends-keyword",children:(0,a.jsx)(i.em,{children:"extends"})})," the ",(0,a.jsx)(i.strong,{children:"ph-municipalities"})," library's ",(0,a.jsx)(i.code,{children:"ExcelFile"})," class for managing the PAGASA 10-day Excel provinces/municipality lists."]}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"ExcelFile"})," class has available ",(0,a.jsx)(i.a,{href:"https://ciatph.github.io/ph-municipalities/ExcelFile.html",children:"class methods, functions, and constructors"})," dedicated and tested to parsing provinces/municipality lists from a PAGASA 10-day weather forecast Excel file, which developers can ",(0,a.jsx)(i.a,{href:"https://javascript.info/class-inheritance#overriding-a-method",children:(0,a.jsx)(i.em,{children:"override"})})," and ",(0,a.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends",children:(0,a.jsx)(i.em,{children:"extend"})})," within ACAP's existing class scripts to customize region/province/municipality grouping and naming processing."]}),"\n",(0,a.jsxs)(i.p,{children:["Some parts of the ",(0,a.jsx)(i.strong,{children:"front end"})," may also need updating depending on the level of customization required."]}),"\n",(0,a.jsxs)(l.UW,{type:"warning",children:[(0,a.jsxs)(i.p,{children:["This method will\xa0",(0,a.jsx)(i.em,{children:"alter"}),"\xa0the original (province and municipalities) naming convention of a PAGASA 10-day weather forecast Excel file. Consult and deliberate first if this is a requirement before proceeding."]}),(0,a.jsx)(i.p,{children:"Indicate notices and messages in the public ACAP front end about these changes to the PAGASA 10-day provinces and municipalities naming and grouping for transparency."})]}),"\n",(0,a.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["This page is related to the ",(0,a.jsx)(i.a,{href:"/installation/server-setup/#initialize-provinces-and-municipalities",children:"Server Setup - Initialize provinces and municipalities"})," section."]}),"\n"]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,r.a)(),e.components);return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/articles/provinces-municipalities.mdx",route:"/articles/provinces-municipalities",timestamp:1726673471e3,pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",installation:"Installation and Setup","post-installation":"Post-Installation Setup",checklist:"Checklist",security:"Security","---":{type:"separator"},directories:{title:"Folder Structure"},articles:{title:"Articles"},troubleshooting:"Troubleshooting","acap-bicol":{title:"ACAP Bicol",href:"https://acap-bicol.github.io",type:"page",newWindow:!0},video:{title:"Video Tutorials",type:"page"},showcase:{title:"Showcase",type:"page"},about:{title:"About",type:"page"},references:"References","----":{type:"separator"},changelog:"Change Log"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"articles",route:"/articles",children:[{kind:"Meta",data:{deployment:"Deployment","pdf-development":"PDF Development","provinces-municipalities":"Provinces and Municipalities","opensource-libraries":"Open Source Libraries"}},{kind:"MdxPage",name:"deployment",route:"/articles/deployment"},{kind:"MdxPage",name:"opensource-libraries",route:"/articles/opensource-libraries"},{kind:"MdxPage",name:"pdf-development",route:"/articles/pdf-development"},{kind:"MdxPage",name:"provinces-municipalities",route:"/articles/provinces-municipalities"}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"checklist",route:"/checklist"},{kind:"Folder",name:"directories",route:"/directories",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/directories/client"},{kind:"MdxPage",name:"server",route:"/directories/server"}]},{kind:"MdxPage",name:"directories",route:"/directories"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{firebase:"Firebase Initialization","server-setup":"Server Setup","client-setup":"Client Setup",integration:"Integration",accounts:"Accounts",conclusion:"Conclusion"}},{kind:"MdxPage",name:"accounts",route:"/installation/accounts"},{kind:"MdxPage",name:"client-setup",route:"/installation/client-setup"},{kind:"MdxPage",name:"conclusion",route:"/installation/conclusion"},{kind:"MdxPage",name:"firebase",route:"/installation/firebase"},{kind:"MdxPage",name:"integration",route:"/installation/integration"},{kind:"MdxPage",name:"server-setup",route:"/installation/server-setup"}]},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"post-installation",route:"/post-installation",children:[{kind:"Meta",data:{webmap:"Web Map / AMIA Villages",pdf:"PDF Bulletins","weather-forecasts":"PAGASA Weather Forecasts","cropping-calendar":"Cropping Calendar",recommendations:"Recommendations Dataset","acap-rcmas-api":"ACAP-RCMAS REST APIs",opengraph:"Opengraph Settings","google-search":"Google Search Console","province-codes":"Province Codes"}},{kind:"MdxPage",name:"acap-rcmas-api",route:"/post-installation/acap-rcmas-api"},{kind:"Folder",name:"cropping-calendar",route:"/post-installation/cropping-calendar",children:[{kind:"Meta",data:{"calendar-v1":"ACAP 1.0 Cropping Calendar","calendar-v2":"ACAP 2.0 Cropping Calendar"}},{kind:"MdxPage",name:"calendar-v1",route:"/post-installation/cropping-calendar/calendar-v1"},{kind:"MdxPage",name:"calendar-v2",route:"/post-installation/cropping-calendar/calendar-v2"}]},{kind:"MdxPage",name:"cropping-calendar",route:"/post-installation/cropping-calendar"},{kind:"MdxPage",name:"google-search",route:"/post-installation/google-search"},{kind:"MdxPage",name:"opengraph",route:"/post-installation/opengraph"},{kind:"MdxPage",name:"pdf",route:"/post-installation/pdf"},{kind:"MdxPage",name:"province-codes",route:"/post-installation/province-codes"},{kind:"Folder",name:"recommendations",route:"/post-installation/recommendations",children:[{kind:"Meta",data:{"recommendations-v1":"ACAP 1.0 Recommendations","recommendations-v2":"ACAP 2.0 Recommendations"}},{kind:"MdxPage",name:"recommendations-v1",route:"/post-installation/recommendations/recommendations-v1"},{kind:"MdxPage",name:"recommendations-v2",route:"/post-installation/recommendations/recommendations-v2"}]},{kind:"MdxPage",name:"recommendations",route:"/post-installation/recommendations"},{kind:"Folder",name:"weather-forecasts",route:"/post-installation/weather-forecasts",children:[{kind:"Meta",data:{"seasonal-forecast":"Seasonal Forecast","tenday-forecast":"10-Day Forecast","special-forecast":"Special Forecast"}},{kind:"MdxPage",name:"seasonal-forecast",route:"/post-installation/weather-forecasts/seasonal-forecast"},{kind:"MdxPage",name:"special-forecast",route:"/post-installation/weather-forecasts/special-forecast"},{kind:"MdxPage",name:"tenday-forecast",route:"/post-installation/weather-forecasts/tenday-forecast"}]},{kind:"MdxPage",name:"weather-forecasts",route:"/post-installation/weather-forecasts"},{kind:"MdxPage",name:"webmap",route:"/post-installation/webmap"}]},{kind:"MdxPage",name:"post-installation",route:"/post-installation"},{kind:"MdxPage",name:"references",route:"/references"},{kind:"MdxPage",name:"requirements",route:"/requirements"},{kind:"MdxPage",name:"security",route:"/security"},{kind:"MdxPage",name:"showcase",route:"/showcase"},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"},{kind:"MdxPage",name:"video",route:"/video"}],flexsearch:{codeblocks:!0},title:"Provinces and Municipalities",headings:h},pageNextRoute:"/articles/provinces-municipalities",nextraLayout:s.ZP,themeConfig:o.Z};i.default=(0,t.j)(u)},6595:function(e,i,n){"use strict";n.d(i,{Z:function(){return c}});var a=n(5893),t=n(1163),s=n(3451),o=n(5675),r=n.n(o),c={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{src:"/images/logos/logo-acaptutorials.png",width:"24",height:"24",alt:"logo"}),"\xa0",(0,a.jsx)("span",{children:"ACAP Development Docs"})]}),project:{link:"https://github.com/acaptutorials/acaptutorials.github.io"},docsRepositoryBase:"https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs",useNextSeoProps:()=>({titleTemplate:"ACAP Tutorials - %s"}),head:function(){let{asPath:e,defaultLocale:i,locale:n}=(0,t.useRouter)(),{frontMatter:o}=(0,s.ZR)(),r="ACAP Tutorials",c="https://acaptutorials.github.io"+(i===n?e:"/".concat(n).concat(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"keywords",content:"acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal"}),(0,a.jsx)("meta",{property:"og:url",content:c}),(0,a.jsx)("meta",{property:"og:title",content:o.title||r}),(0,a.jsx)("meta",{property:"og:description",content:o.description||"Development notes"}),(0,a.jsx)("meta",{property:"og:site_name",content:r}),(0,a.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,a.jsx)("meta",{property:"og:image:height",content:"630"}),(0,a.jsx)("meta",{property:"og:image:alt",content:r}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:r}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://firebasestorage.googleapis.com/v0/b/assets-cms.appspot.com/o/users%2FAwryJ0MU8zdxQFh9y0L0x2sSt8z1%2FuPnwyOrhmzVvbwQ6Cizy_thumbnail?alt=media&token=e04950f1-be4f-4d95-b8ee-d4c794b512bf"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})},banner:{key:"v10.1.0-alpha.10",text:(0,a.jsx)(function(){return(0,a.jsxs)("a",{href:"https://github.com/amia-cis/acap-v2/releases/tag/v10.1.0-alpha.10",target:"_blank",rel:"noreferrer",children:["\uD83C\uDF89 ","acap-v2"," - ","v10.1.0-alpha.10",", dev branch @","590e3e1"," is released. Read more →"]})},{})},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,a.jsxs)("span",{children:["ACAP Dev Documentation ",new Date().getFullYear()," \xa9"," ",(0,a.jsx)("a",{href:"https://github.com/acaptutorials",target:"_blank",rel:"noreferrer",children:"acaptutorials"})]})}}},5789:function(){}},function(e){e.O(0,[773,888,774,179],function(){return e(e.s=6368)}),_N_E=e.O()}]);