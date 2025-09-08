(()=>{var a={};a.id=953,a.ids=[953],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},7556:(a,b,c)=>{Promise.resolve().then(c.bind(c,53949))},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},15303:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(28731).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21060:(a,b,c)=>{Promise.resolve().then(c.bind(c,94712))},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30029:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(28731).A)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]])},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},43709:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,61400)),"c:\\xampp\\htdocs\\Murivest Website\\src\\app\\blog\\[slug]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,51472)),"c:\\xampp\\htdocs\\Murivest Website\\src\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.bind(c,59732)),"c:\\xampp\\htdocs\\Murivest Website\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["c:\\xampp\\htdocs\\Murivest Website\\src\\app\\blog\\[slug]\\page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/blog/[slug]/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw aF||b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},53949:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"c:\\\\xampp\\\\htdocs\\\\Murivest Website\\\\src\\\\components\\\\BlogPost.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"c:\\xampp\\htdocs\\Murivest Website\\src\\components\\BlogPost.tsx","default")},61400:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>f});var d=c(75338),e=c(53949);let f={title:"Real Estate Investment Insights - Blog Post | Murivest Realty Group",description:"Expert insights and analysis on Kenya's real estate market. Professional commentary on investment strategies, market trends, and opportunities for discerning investors.",keywords:"real estate insights Kenya, property investment analysis, commercial real estate trends Kenya, investment strategies Kenya, property market commentary",openGraph:{title:"Real Estate Investment Insights - Blog Post | Murivest Realty Group",description:"Expert insights and analysis on Kenya's real estate market.",images:["/image.png"]}};function g(){return(0,d.jsx)(e.default,{})}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},72567:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(28731).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},94712:(a,b,c)=>{"use strict";c.d(b,{default:()=>r});var d=c(21124),e=c(38301),f=c(78711),g=c(79944),h=c(10578),i=c(72567),j=c(15303),k=c(30029),l=c(28731);let m=(0,l.A)("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]),n=(0,l.A)("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);var o=c(3991),p=c.n(o),q=c(42378);(0,q.useRouter)();let r=()=>{let{id:a}=(0,q.useParams)();(0,e.useEffect)(()=>{window.scrollTo(0,0)},[a]);let b={18:{title:"Affordable Housing Investment: Government Initiatives and Opportunities",author:"Margaret Wanjiku",date:"December 2, 2024",readTime:"8 min read",category:"Residential Investment",image:"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",content:`
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Kenya's affordable housing agenda presents significant investment opportunities backed by government incentives, favorable financing, and massive demand. With a housing deficit of 2 million units and strong policy support, this sector offers investors stable returns while addressing critical social needs.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Government Housing Agenda</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The Kenyan government has prioritized affordable housing as one of its key development pillars, targeting the delivery of 500,000 affordable housing units by 2027. This ambitious program includes substantial incentives for private sector participation, creating attractive investment opportunities.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">2M</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Housing Deficit</div>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">500K</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Target Units by 2027</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">9-12%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Expected Investment Yields</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Government Incentives and Support</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Investment Incentives Package</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #0369a1; margin-bottom: 1rem;">💰 Tax Benefits</h4>
              <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                <li>15% corporate tax rate (vs. 30% standard)</li>
                <li>VAT exemption on construction materials</li>
                <li>Stamp duty exemption on land transfers</li>
                <li>Withholding tax exemption on dividends</li>
                <li>Capital gains tax relief</li>
              </ul>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #166534; margin-bottom: 1rem;">🏦 Financing Support</h4>
              <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                <li>Kenya Mortgage Refinance Company funding</li>
                <li>Affordable Housing Fund contributions</li>
                <li>Development finance from government</li>
                <li>Blended finance mechanisms</li>
                <li>Concessional loan rates</li>
              </ul>
            </div>

            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #a16207; margin-bottom: 1rem;">🏗️ Development Support</h4>
              <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                <li>Fast-tracked approval processes</li>
                <li>Serviced land at subsidized rates</li>
                <li>Infrastructure development support</li>
                <li>Technical assistance programs</li>
                <li>Public-private partnership opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Affordable Housing Categories</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">🏠 Social Housing</h4>
            <div style="margin-bottom: 1rem;">
              <div style="font-size: 0.875rem; color: #374151;">
                <strong>Price Range:</strong> KSh 1-3M<br>
                <strong>Target Income:</strong> KSh 15-50K/month<br>
                <strong>Unit Size:</strong> 30-60 m\xb2<br>
                <strong>Yield:</strong> 8-10%
              </div>
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Government-subsidized housing for low-income earners with rent-to-own options.</p>
          </div>
          
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Affordable Apartments</h4>
            <div style="margin-bottom: 1rem;">
              <div style="font-size: 0.875rem; color: #374151;">
                <strong>Price Range:</strong> KSh 3-6M<br>
                <strong>Target Income:</strong> KSh 50-100K/month<br>
                <strong>Unit Size:</strong> 60-90 m\xb2<br>
                <strong>Yield:</strong> 9-12%
              </div>
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Middle-income housing with modern amenities and financing support.</p>
          </div>
          
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">🏘️ Affordable Communities</h4>
            <div style="margin-bottom: 1rem;">
              <div style="font-size: 0.875rem; color: #374151;">
                <strong>Price Range:</strong> KSh 2-5M<br>
                <strong>Target Income:</strong> KSh 30-80K/month<br>
                <strong>Unit Size:</strong> 45-75 m\xb2<br>
                <strong>Yield:</strong> 10-13%
              </div>
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Integrated developments with schools, healthcare, and commercial facilities.</p>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Key Development Locations</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Location</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Target Units</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Price Range</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Park Road (Ngara)</td>
                <td style="padding: 1rem;">1,370 units</td>
                <td style="padding: 1rem;">KSh 1.8-4.2M</td>
                <td style="padding: 1rem;"><span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Ongoing</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Mavoko (Athi River)</td>
                <td style="padding: 1rem;">2,000 units</td>
                <td style="padding: 1rem;">KSh 2.1-3.8M</td>
                <td style="padding: 1rem;"><span style="background: #fef3c7; color: #a16207; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Planning</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Kibera Soweto East</td>
                <td style="padding: 1rem;">5,000 units</td>
                <td style="padding: 1rem;">KSh 1.5-2.8M</td>
                <td style="padding: 1rem;"><span style="background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Design</span></td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">Mukuru (Embakasi)</td>
                <td style="padding: 1rem;">3,500 units</td>
                <td style="padding: 1rem;">KSh 1.2-2.5M</td>
                <td style="padding: 1rem;"><span style="background: #fef3c7; color: #a16207; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Planning</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Models</h2>
        
        <div style="background: #dcfce7; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #166534;">
          <h4 style="color: #166534; margin-bottom: 1rem;">🤝 Partnership Structures</h4>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <div>
              <strong style="color: #374151;">Public-Private Partnerships (PPPs):</strong> Joint ventures with government entities providing land and infrastructure support while private investors handle construction and management.
            </div>
            <div>
              <strong style="color: #374151;">Developer Partnerships:</strong> Collaborate with established developers who have government approvals and technical expertise in affordable housing.
            </div>
            <div>
              <strong style="color: #374151;">REIT Participation:</strong> Invest through specialized affordable housing REITs that pool investor funds for large-scale developments.
            </div>
            <div>
              <strong style="color: #374151;">Direct Development:</strong> Independent development with government incentives and support programs.
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Financing Mechanisms</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">🏦 Government Financing</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Kenya Mortgage Refinance Company</li>
              <li>Affordable Housing Fund</li>
              <li>National Housing Corporation</li>
              <li>Development Bank of Kenya</li>
              <li>Blended finance facilities</li>
            </ul>
          </div>
          
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🌍 International Funding</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>World Bank housing programs</li>
              <li>African Development Bank</li>
              <li>UN-Habitat initiatives</li>
              <li>Bilateral development agencies</li>
              <li>Impact investment funds</li>
            </ul>
          </div>
          
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">🏢 Private Sector</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Commercial bank construction loans</li>
              <li>SACCO development financing</li>
              <li>Private equity real estate funds</li>
              <li>Pension fund investments</li>
              <li>Insurance company funding</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Success Factors and Considerations</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #dcfce7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #bbf7d0;">
            <h4 style="color: #166534; margin-bottom: 1rem;">✅ Success Factors</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Strong government partnerships</li>
              <li>Experienced development teams</li>
              <li>Efficient construction methods</li>
              <li>Comprehensive financing packages</li>
              <li>Community engagement programs</li>
              <li>Quality but cost-effective design</li>
            </ul>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">⚠️ Key Challenges</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Affordability vs. profitability balance</li>
              <li>Land acquisition complexities</li>
              <li>Infrastructure development costs</li>
              <li>Buyer financing challenges</li>
              <li>Construction cost management</li>
              <li>Long development timelines</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Market Outlook</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The affordable housing sector is positioned for sustained growth, supported by continued government commitment, increasing urbanization, and growing middle-class demand. With proper execution, investors can achieve attractive returns while contributing to Kenya's social and economic development goals.</p>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Invest in Kenya's Housing Future</h3>
          <p style="margin-bottom: 1.5rem;">Affordable housing offers the unique opportunity to generate solid returns while addressing Kenya's critical housing needs. Our affordable housing specialists can help you navigate government programs and identify the best investment opportunities.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Affordable Housing Projects</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Government Partnership Strategy</a>
        </div>
      `,tags:["Affordable Housing","Government Initiatives","Social Impact Investment","Housing Deficit","Public-Private Partnership"]},19:{title:"REIT Dividend Strategies: Maximizing Income from Real Estate Trusts",author:"Patricia Wanjiku",date:"November 22, 2024",readTime:"8 min read",category:"REITs",image:"https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",content:`
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">REIT dividend strategies can significantly enhance your real estate investment returns. By understanding dividend timing, reinvestment options, and tax implications, investors can optimize their income streams and build substantial wealth through compounding returns.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Understanding REIT Dividends</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">80%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Minimum Distribution Required</div>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">8-12%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Average Annual Yields</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">Quarterly</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Payment Frequency</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Dividend Optimization Strategies</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Core Optimization Techniques</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #0369a1; margin-bottom: 1rem;">📈 Dividend Reinvestment Plans (DRIPs)</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Automatically reinvest dividends to purchase additional REIT shares, leveraging compound growth over time.</p>
              <div style="background: #dcfce7; padding: 1rem; border-radius: 0.5rem;">
                <p style="color: #166534; font-weight: bold; margin: 0;">Benefits: No transaction fees, dollar-cost averaging, compound growth</p>
              </div>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #166534; margin-bottom: 1rem;">⏰ Timing Strategies</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Strategic timing of REIT purchases around ex-dividend dates can optimize income capture.</p>
              <div style="background: #e0f2fe; padding: 1rem; border-radius: 0.5rem;">
                <p style="color: #0369a1; font-weight: bold; margin: 0;">Key Dates: Declaration, ex-dividend, record, and payment dates</p>
              </div>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Tax Optimization</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Dividend Type</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Tax Treatment</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Optimization Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Ordinary Income</td>
                <td style="padding: 1rem;">Regular tax rates</td>
                <td style="padding: 1rem; color: #0369a1;">Hold in tax-advantaged accounts</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Return of Capital</td>
                <td style="padding: 1rem;">Reduces cost basis</td>
                <td style="padding: 1rem; color: #166534;">Track basis adjustments</td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">Capital Gains</td>
                <td style="padding: 1rem;">Capital gains rates</td>
                <td style="padding: 1rem; color: #a16207;">Consider holding periods</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Optimize Your REIT Dividend Strategy</h3>
          <p style="margin-bottom: 1.5rem;">Maximize your REIT investment returns with professional dividend optimization strategies tailored to your financial goals.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">REIT Portfolio Review</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Dividend Strategy Guide</a>
        </div>
      `,tags:["REIT Dividends","Income Optimization","Tax Strategy","Compound Growth","Investment Returns"]},20:{title:"Shopping Mall Investment: Retail Real Estate in the Digital Age",author:"Joyce Mutindi",date:"November 27, 2024",readTime:"7 min read",category:"Commercial Investment",image:"https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",content:`
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Shopping mall investments in Kenya are evolving beyond traditional retail to become experiential destinations. Success requires understanding changing consumer preferences, embracing mixed-use concepts, and leveraging technology integration.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Modern Mall Concepts</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">🎭 Experience Centers</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Entertainment complexes</li>
              <li>Dining and social spaces</li>
              <li>Event and exhibition areas</li>
              <li>Wellness and fitness facilities</li>
            </ul>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Mixed-Use Integration</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Office spaces above retail</li>
              <li>Residential components</li>
              <li>Hotel and hospitality</li>
              <li>Co-working spaces</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Metrics</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">8-12%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Annual Yields</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">85%+</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Occupancy Rates</div>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">15-25</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Year Leases</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Success Factors</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Key Success Elements</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <div style="background: #e0f2fe; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #bae6fd;">
              <h4 style="color: #0369a1; margin-bottom: 0.5rem;">📍 Strategic Location</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Prime locations with high foot traffic, accessibility, and growing demographics drive mall success.</p>
            </div>
            <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
              <h4 style="color: #166534; margin-bottom: 0.5rem;">🎯 Tenant Mix</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Balanced combination of anchor tenants, specialty retailers, and experiential offerings.</p>
            </div>
            <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
              <h4 style="color: #a16207; margin-bottom: 0.5rem;">💡 Innovation</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Technology integration, sustainable design, and adaptable spaces for changing retail needs.</p>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Explore Mall Investment Opportunities</h3>
          <p style="margin-bottom: 1.5rem;">Discover modern shopping centers and mixed-use developments that redefine retail real estate.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">View Mall Properties</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Retail Investment Guide</a>
        </div>
      `,tags:["Shopping Malls","Retail Investment","Mixed-Use Development","Experience Centers","Commercial Real Estate"]},21:{title:"Property Tax Optimization: Legal Strategies for Real Estate Investors",author:"Samuel Kiprotich",date:"November 20, 2024",readTime:"9 min read",category:"Tax Strategy",image:"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",content:`
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Strategic property tax optimization can significantly enhance real estate investment returns. Understanding Kenya's tax landscape, available deductions, and legal structures enables investors to minimize tax liability while maintaining full compliance.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Kenya's Property Tax Framework</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏠 Rental Income Tax</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>10% for resident individuals</li>
              <li>30% for non-residents</li>
              <li>Monthly withholding required</li>
              <li>Deductions available</li>
            </ul>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">💰 Capital Gains Tax</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>5% on property disposal</li>
              <li>Exemptions available</li>
              <li>Principal residence relief</li>
              <li>Rollover relief options</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Optimization Strategies</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Tax Minimization Techniques</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #0369a1; margin-bottom: 1rem;">📋 Allowable Deductions</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Maximize deductions to reduce taxable rental income legally and effectively.</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem;">
                  <h5 style="color: #374151; margin-bottom: 0.5rem; font-weight: bold;">Operating Expenses</h5>
                  <ul style="color: #6b7280; font-size: 0.75rem; margin: 0; padding-left: 1rem;">
                    <li>Property management fees</li>
                    <li>Maintenance and repairs</li>
                    <li>Insurance premiums</li>
                    <li>Professional fees</li>
                  </ul>
                </div>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem;">
                  <h5 style="color: #374151; margin-bottom: 0.5rem; font-weight: bold;">Capital Allowances</h5>
                  <ul style="color: #6b7280; font-size: 0.75rem; margin: 0; padding-left: 1rem;">
                    <li>Building depreciation</li>
                    <li>Furniture and fittings</li>
                    <li>Equipment depreciation</li>
                    <li>Improvement costs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Corporate Structures</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Strategic use of corporate entities can provide tax advantages and asset protection.</p>
              <div style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem; border: 1px solid #fde68a;">
                <p style="color: #a16207; font-weight: bold; margin: 0;">Consider: Limited companies, partnerships, and trust structures for optimal tax efficiency</p>
              </div>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Tax Planning Calendar</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Period</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Tax Obligation</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Optimization Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Monthly</td>
                <td style="padding: 1rem;">Rental income withholding</td>
                <td style="padding: 1rem; color: #0369a1;">Maximize deductions</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Annually</td>
                <td style="padding: 1rem;">Income tax returns</td>
                <td style="padding: 1rem; color: #166534;">Claim all allowances</td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">On disposal</td>
                <td style="padding: 1rem;">Capital gains tax</td>
                <td style="padding: 1rem; color: #a16207;">Structure transactions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Optimize Your Property Tax Strategy</h3>
          <p style="margin-bottom: 1.5rem;">Professional tax planning can significantly enhance your real estate investment returns while ensuring full compliance.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Tax Strategy Review</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Compliance Audit</a>
        </div>
      `,tags:["Property Tax","Tax Optimization","Legal Strategy","Real Estate Tax","Investment Returns"]},"financing-options-for-residential-investment-in-nakuru":{id:"financing-options-for-residential-investment-in-nakuru",title:"Financing Options for residential Investment in Nakuru",excerpt:"Navigate the complexities of financing options for residential investment in nakuru with our comprehensive guide covering trends, regulations, and best practices.",author:"Francis Ochieng",category:"Development",date:"2025-09-02",readTime:"11 min read",image:"https://www.businessdailyafrica.com/resource/image/view/-/5947234/medRes/3058656-3058656.jpg",content:"`<p>The dynamics of financing options for residential investment in nakuru continue to shape Kenya's real estate landscape in 2025. Navigate the complexities of financing options for residential investment in nakuru with our comprehensive guide covering trends, regulations, and best practices. This comprehensive analysis provides insights for stakeholders navigating this evolving market environment.</p>\n    <h2>1. Current Market Overview and Trends</h2>\n    <p>Kenya's real estate market demonstrates resilience and growth potential across various segments. Understanding current market conditions, pricing trends, and demand drivers is essential for making informed property decisions in today's competitive environment.</p>\n    <h2>2. Key Development Factors and Drivers</h2>\n    <p>Several factors influence real estate development including government policies, infrastructure projects, demographic changes, and economic conditions. These factors create opportunities and challenges that shape investment strategies and market outcomes.</p>\n    <h2>3. Strategic Considerations for Stakeholders</h2>\n    <p>Successful navigation of the real estate market requires strategic thinking about location selection, timing, financing, and risk management. Professional guidance and thorough market research are essential components of effective property strategies.</p>\n    <h2>4. Future Outlook and Market Projections</h2>\n    <p>Looking ahead, Kenya's real estate market is positioned for continued growth driven by urbanization, infrastructure development, and economic expansion. Stakeholders should focus on sustainable practices, regulatory compliance, and strategic partnerships to maximize opportunities.</p>\n    <h2>Conclusion</h2>\n    <p>The opportunities in financing options for residential investment in nakuru reflect the dynamic nature of Kenya's real estate market in 2025. By staying informed about market trends, regulatory requirements, and best practices, stakeholders can successfully navigate this landscape and achieve their property investment objectives. Professional consultation and continuous market monitoring remain essential for optimal outcomes in this evolving sector.</p>`",tags:["Kenya real estate","property investment Kenya","Kenya property market","Development","Kenya Property Market","Real Estate Investment","Property Development"],featured:!1}}[a];return b?(0,d.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,d.jsx)("div",{className:"bg-white shadow-sm",children:(0,d.jsx)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:(0,d.jsxs)(p(),{href:"/blog",className:"inline-flex items-center text-gold-600 hover:text-gold-700 font-elegant font-medium mb-4",children:[(0,d.jsx)(g.A,{className:"h-4 w-4 mr-2"}),"Back to Blog"]})})}),(0,d.jsxs)("article",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,d.jsxs)(f.P.header,{...{className:"mb-12"},initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[(0,d.jsx)("div",{className:"mb-6",children:(0,d.jsx)("span",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-elegant font-semibold",children:b.category})}),(0,d.jsx)("h1",{className:"text-4xl md:text-5xl font-luxury font-bold text-navy-900 mb-6 leading-tight",children:b.title}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8",children:[(0,d.jsxs)("div",{className:"flex items-center text-gray-600 mb-4 sm:mb-0",children:[(0,d.jsx)(h.A,{className:"h-5 w-5 mr-2"}),(0,d.jsxs)("span",{className:"font-elegant mr-4",children:["By ",b.author]}),(0,d.jsx)(i.A,{className:"h-5 w-5 mr-2"}),(0,d.jsx)("span",{className:"font-elegant mr-4",children:b.date}),(0,d.jsx)(j.A,{className:"h-5 w-5 mr-2"}),(0,d.jsx)("span",{className:"font-elegant",children:b.readTime})]}),(0,d.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,d.jsxs)("button",{className:"flex items-center text-gray-600 hover:text-gold-600 transition-colors",children:[(0,d.jsx)(k.A,{className:"h-5 w-5 mr-1"}),(0,d.jsx)("span",{className:"font-elegant text-sm",children:"Share"})]}),(0,d.jsxs)("button",{className:"flex items-center text-gray-600 hover:text-gold-600 transition-colors",children:[(0,d.jsx)(m,{className:"h-5 w-5 mr-1"}),(0,d.jsx)("span",{className:"font-elegant text-sm",children:"Save"})]}),(0,d.jsxs)("button",{className:"flex items-center text-gray-600 hover:text-gold-600 transition-colors",children:[(0,d.jsx)(n,{className:"h-5 w-5 mr-1"}),(0,d.jsx)("span",{className:"font-elegant text-sm",children:"Like"})]})]})]})]}),(0,d.jsx)(f.P.div,{...{className:"mb-12"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:(0,d.jsx)("img",{src:b.image,alt:b.title,className:"w-full h-96 object-cover rounded-2xl shadow-lg"})}),(0,d.jsx)(f.P.div,{...{className:"prose prose-lg max-w-none mb-12"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:(0,d.jsx)("div",{className:"font-elegant text-gray-700 leading-relaxed",dangerouslySetInnerHTML:{__html:b.content},style:{fontSize:"1.125rem",lineHeight:"1.75"}})}),(0,d.jsxs)(f.P.div,{...{className:"mb-12"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[(0,d.jsx)("h3",{className:"font-luxury font-bold text-navy-900 mb-4",children:"Tags"}),(0,d.jsx)("div",{className:"flex flex-wrap gap-2",children:b.tags.map((a,b)=>(0,d.jsx)("span",{className:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-elegant",children:a},b))})]}),(0,d.jsx)(f.P.div,{...{className:"bg-white p-8 rounded-2xl shadow-lg mb-12"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:(0,d.jsxs)("div",{className:"flex items-start",children:[(0,d.jsx)("img",{src:"https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",alt:b.author,className:"w-16 h-16 rounded-full object-cover mr-4"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{className:"font-luxury font-bold text-navy-900 mb-2",children:b.author}),(0,d.jsx)("p",{className:"text-gray-600 font-elegant",children:"Senior Market Analyst at Murivest Realty Group with over 10 years of experience in commercial real estate investment and market research. Sarah specializes in identifying emerging market trends and investment opportunities in Nairobi's commercial property sector."})]})]})}),(0,d.jsxs)(f.P.div,{...{className:"bg-navy-950 rounded-2xl p-8 text-white"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[(0,d.jsx)("h3",{className:"text-2xl font-luxury font-bold mb-6",children:"Related Articles"}),(0,d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,d.jsx)(p(),{href:"/blog/2",className:"group",children:(0,d.jsxs)("div",{className:"bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors",children:[(0,d.jsx)("h4",{className:"font-luxury font-bold mb-2 group-hover:text-gold-400 transition-colors",children:"Top 5 Commercial Property Investment Strategies"}),(0,d.jsx)("p",{className:"text-gray-300 font-elegant text-sm",children:"Expert insights on maximizing returns through strategic investments..."})]})}),(0,d.jsx)(p(),{href:"/blog/3",className:"group",children:(0,d.jsxs)("div",{className:"bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors",children:[(0,d.jsx)("h4",{className:"font-luxury font-bold mb-2 group-hover:text-gold-400 transition-colors",children:"Westlands District: The New Hub for Premium Offices"}),(0,d.jsx)("p",{className:"text-gray-300 font-elegant text-sm",children:"Why Westlands has become the preferred location for corporations..."})]})})]})]})]})]}):(0,d.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)("h2",{className:"text-2xl font-luxury font-bold text-gray-900 mb-4",children:"Article Not Found"}),(0,d.jsx)(p(),{href:"/blog",className:"text-gold-600 hover:text-gold-700 font-elegant",children:"← Back to Blog"})]})})}}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[678,342],()=>b(b.s=43709));module.exports=c})();