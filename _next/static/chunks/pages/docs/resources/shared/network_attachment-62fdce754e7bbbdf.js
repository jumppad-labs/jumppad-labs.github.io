(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{687:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/shared/network_attachment",function(){return s(7206)}])},7206:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return o}});var a=s(5893),t=s(1151);function r(e){let n=Object.assign({hr:"hr",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components),{Properties:s,Property:r}=n;return s||i("Properties",!0),r||i("Property",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"network_attachment",children:"network_attachment"}),"\n",(0,a.jsx)(n.p,{children:"Network attachment defines a network to which the container is attached."}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)(r,{name:"id",type:"string",required:"true",value:"",children:[(0,a.jsxs)(n.p,{children:["ID of the network to attach the container to, specified in reference format. e.g. to attach to a network called ",(0,a.jsx)(n.code,{children:"cloud"})]}),(0,a.jsx)(n.pre,{language:"hcl",code:'network {\n  id = "network.cloud"\n}\n',children:(0,a.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">network</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  id </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;network.cloud&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,a.jsx)(r,{name:"ip_address",type:"string",required:"false",value:"",children:(0,a.jsx)(n.p,{children:"Static IP address to assign container for the network, the ip address must be within range defined by the network subnet.\nIf this parameter is omitted an IP address will be automatically assigned."})}),(0,a.jsxs)(r,{name:"aliases",type:"[]string",required:"false",value:"",children:[(0,a.jsxs)(n.p,{children:["Aliases allow alternate names to specified for the container. Aliases can be used to reference a container across the network, the container\nwill respond to ping and other network resolution using the primary assigned name ",(0,a.jsx)(n.code,{children:"[name].container.shipyard.run"})," and the aliases."]}),(0,a.jsx)(n.pre,{language:"hcl",code:'network {\n  name    = "network.cloud"\n  aliases = [\n    "alt1.container.shipyard.run", \n    "alt2.container.shipyard.run"\n  ]\n}\n',children:(0,a.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">network</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  name    </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;network.cloud&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  aliases </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;alt1.container.shipyard.run&quot;</span><span style="color: var(--shiki-color-text)">, </span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;alt2.container.shipyard.run&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,a.jsx)(r,{name:"name",type:"string",required:"false",value:"",readonly:!0,children:(0,a.jsx)(n.p,{children:"Name will equal the name of the network as created by jumppad."})})]})]})}var o=!0;function i(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=687)}),_N_E=e.O()}]);