async function u(e){let n=[];for(let t of e.config.languages){let r=e.pluginConfig.pathPattern.replace("{language}",t),s=JSON.parse(await e.$fs.readFile(r,"utf-8"));n.push(a(s,t))}return n}async function c(e){for(let n of e.resources){let t=e.pluginConfig.pathPattern.replace("{language}",n.languageTag.language);await e.$fs.writeFile(t,o(n))}}function a(e,n){return{type:"Resource",languageTag:{type:"LanguageTag",language:n},body:Object.entries(e).map(([t,r])=>i(t,r))}}function i(e,n){return{type:"Message",id:{type:"Identifier",name:e},pattern:{type:"Pattern",elements:[{type:"Text",value:n}]}}}function o(e){let n=Object.fromEntries(e.body.map(g));return JSON.stringify(n,null,2)}function g(e){return[e.id.name,e.pattern.elements[0].value]}export{u as readResources,c as writeResources};