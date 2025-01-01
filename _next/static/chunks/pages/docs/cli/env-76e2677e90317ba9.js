(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9049],{5215:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cli/env",function(){return e(5307)}])},5307:function(n,s,e){"use strict";e.r(s),e.d(s,{__N_SSG:function(){return t}});var o=e(5893),a=e(1151);function r(n){let s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),n.components),{Intro:e,CodeGroup:r,Properties:t,Property:l}=s;return r||i("CodeGroup",!0),e||i("Intro",!0),t||i("Properties",!0),l||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"Env"}),"\n",(0,o.jsx)(e,{children:(0,o.jsx)(s.p,{children:"The env command prints a formatted list of environment variables defined in a blueprint which can be interpreted by the operating system."})}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"jumppad env [flags]\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad env [flags]</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"This can be very useful to either set or unset environment variables on your current session."}),"\n",(0,o.jsxs)(r,{title:"Set environment variables on your current session.",children:[(0,o.jsx)(s.pre,{language:"bash",code:"  eval $(jumppad env)\n",children:(0,o.jsx)(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">eval</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">$(jumppad env)</span></span>\n<span></span>'}),title:"Linux"}),(0,o.jsx)(s.pre,{language:"powershell",code:'Invoke-Expression "jumppad env" | ForEach-Object { Invoke-Expression $_ }\n',children:(0,o.jsx)(s.code,{className:"language-powershell",children:'<span><span style="color: var(--shiki-token-function)">Invoke-Expression</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;jumppad env&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ForEach-Object</span><span style="color: var(--shiki-color-text)"> { </span><span style="color: var(--shiki-token-function)">Invoke-Expression</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">$_</span><span style="color: var(--shiki-color-text)"> }</span></span>\n<span></span>'}),title:"Windows"})]}),"\n",(0,o.jsxs)(r,{title:"Unset environment variables on your current session.",children:[(0,o.jsx)(s.pre,{language:"bash",code:"eval $(jumppad env --unset)\n",children:(0,o.jsx)(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-token-function)">eval</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">$(jumppad env --unset)</span></span>\n<span></span>'}),title:"Linux"}),(0,o.jsx)(s.pre,{language:"powershell",code:'Invoke-Expression "jumppad env --unset" | ForEach-Object { Remove-Item $_ }\n',children:(0,o.jsx)(s.code,{className:"language-powershell",children:'<span><span style="color: var(--shiki-token-function)">Invoke-Expression</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;jumppad env --unset&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ForEach-Object</span><span style="color: var(--shiki-color-text)"> { </span><span style="color: var(--shiki-token-function)">Remove-Item</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">$_</span><span style="color: var(--shiki-color-text)"> }</span></span>\n<span></span>'}),title:"Windows"})]}),"\n",(0,o.jsx)(s.h2,{id:"flags",children:"Flags"}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)(l,{name:"unset",type:"bool",required:"false",value:"false",children:(0,o.jsx)(s.p,{children:"When set to true Jumppad will print unset commands for environment variables defined by the blueprint."})})}),"\n",(0,o.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(s.pre,{language:"hcl",code:'output "KUBECONFIG" {\n  value = k8s_config("k3s")\n}\n',children:(0,o.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;KUBECONFIG&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> k8s_config(</span><span style="color: var(--shiki-token-string-expression)">&quot;k3s&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Example defining environment variables using output resources."})]})}var t=!0;function i(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.ah)(),n.components);return s?(0,o.jsx)(s,Object.assign({},n,{children:(0,o.jsx)(r,n)})):r(n)}}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=5215)}),_N_E=n.O()}]);