(self.webpackChunkf97a_portfolio=self.webpackChunkf97a_portfolio||[]).push([[445,865,994],{7183:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(3552),i=n(7294);function o(e,t){return Math.random()*(t-e)+e}var c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={asteroids:[{left:10,top:20,offset:50}]},t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){for(var e=[],t=0;t<6;t++)e.push({left:o(0,window.innerWidth),top:o(0,window.innerHeight),offset:o(-100,100)});this.setState({asteroids:e})},n.render=function(){return this.state.asteroids.map((function(e,t){return i.createElement(i.Fragment,null,i.createElement("img",{style:{left:e.left+"px",position:"absolute",top:e.top,transfrom:"translateY("+e.offset+"%)"},src:"data:image/png;base64,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",key:t}))}))},t}(i.Component)},8352:function(e,t,n){"use strict";n.r(t);var a=n(18),i=n(7294),o=n(9925).ZP.div.withConfig({displayName:"Stars__SingleStar",componentId:"sc-1ngydz6-0"})(["position:absolute;background:#fff;border-radius:50%;box-shadow:0px 0px 6px 2px rgba(#fff,.52);"]);function c(e,t){return Math.random()*(t-e)+e}var r=function(){return{left:c(0,"undefined"==typeof navigator?0:window.innerWidth),top:c(0,"undefined"==typeof navigator?0:window.innerHeight),size:c(4,10),changingVelocity:Math.random(),opacity:1}};t.default=function(){var e=(0,i.useState)(new Array(60).fill(null).map((function(){return r()}))),t=e[0],n=e[1],c=(0,i.useCallback)((function(){n((function(e){return[].concat((0,a.Z)(t.map((function(e){return Object.assign({},e,{opacity:e.opacity-=.1*e.changingVelocity})})).filter((function(e){return e.opacity>0}))),(0,a.Z)(new Array(60-e.length).fill(null).map((function(){return r()}))))})),setTimeout(c,1e3)}),[t]);return(0,i.useEffect)((function(){c()}),[c]),i.createElement("div",null,t.map((function(e,t){return i.createElement(o,{key:t,style:{top:e.top,left:e.left,height:e.size+"px",width:e.size+"px",opacity:e.opacity}})})))}},7782:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a,i=n(5761),o=n(7294),c=n.p+"static/logo-1be69704caa1faa771fd9d2038f25943.png",r=n(5186),l=n(7183),s=n(8352),d=n(9925),p=n.p+"static/background-6f8df6341fb636c5c1bf6646fa906c65.png",f=(0,d.vJ)(a||(a=(0,i.Z)(['\n    background: url("','");\n    background-size: cover;\n    background-repeat: no-repeat;\n'])),p),u=d.ZP.main.withConfig({displayName:"spacechains-landing__MainArea",componentId:"xti3i1-0"})(["overflow:hidden;"]),g=d.ZP.img.withConfig({displayName:"spacechains-landing__RocketImg",componentId:"xti3i1-1"})(["position:absolute;left:20px;top:80px;"]),A=d.ZP.img.withConfig({displayName:"spacechains-landing__SpacechainsLogo",componentId:"xti3i1-2"})(["max-height:400px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]),m=d.ZP.img.withConfig({displayName:"spacechains-landing__GetOnGoogle",componentId:"xti3i1-3"})(["max-width:206px;position:absolute;bottom:70px;left:53px;"]),w=function(){return o.createElement(o.Fragment,null,o.createElement(r.Z,null,o.createElement("title",null,"Space Chains"),o.createElement("meta",{name:"description",content:""}),o.createElement("meta",{name:"keywords",content:"game, android game, chess, boarding game, computer game, phone, multiplayer"})),o.createElement(f,null),o.createElement(u,null,o.createElement(s.default,null),o.createElement(l.default,null),o.createElement(g,{src:"data:image/png;base64,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"}),o.createElement(A,{src:c}),o.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.spacechess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},o.createElement(m,{alt:"Get it on Google Play' className={spacechainsStyles['get_on_google']} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"}))))}}}]);
//# sourceMappingURL=component---src-pages-spacechains-landing-js-6bfd9a09257f578ef964.js.map