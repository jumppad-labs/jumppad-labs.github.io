(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{6305:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cli/exec",function(){return n(4939)}])},4939:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return t}});var a=n(5893),o=n(1151);function l(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},(0,o.ah)(),e.components),{Intro:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Intro",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:"Exec"}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)(s.p,{children:"Execute a command in a Resource or start a Tools resource and execute."})}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(s.p,{children:["Depending on the resource type, ",(0,a.jsx)(s.code,{children:"target"})," can consist of multiple elements."]}),"\n",(0,a.jsx)(s.pre,{language:"shell",code:"jumppad exec <target> -- <command>\n",children:(0,a.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad </span><span style="color: var(--shiki-token-function)">exec</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">target</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> -- </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">command</span><span style="color: var(--shiki-token-keyword)">&gt;</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.pre,{language:"shell",code:"jumppad exec k8s_cluster.k3s mypod -- ls -las\n",children:(0,a.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad </span><span style="color: var(--shiki-token-function)">exec</span><span style="color: var(--shiki-color-text)"> k8s_cluster.k3s mypod -- ls -las</span></span>\n<span></span>'}),title:"Execute a command in the first container of a Kubernetes pod"}),"\n",(0,a.jsx)(s.pre,{language:"shell",code:"jumppad exec k8s_cluster.k3s mypod web -- ls -las\n",children:(0,a.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad </span><span style="color: var(--shiki-token-function)">exec</span><span style="color: var(--shiki-color-text)"> k8s_cluster.k3s mypod web -- ls -las</span></span>\n<span></span>'}),title:"Execute a command in the named container of a Kubernetes pod"}),"\n",(0,a.jsx)(s.pre,{language:"shell",code:"jumppad exec container.consul -- bash\n",children:(0,a.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad </span><span style="color: var(--shiki-token-function)">exec</span><span style="color: var(--shiki-color-text)"> container.consul -- bash</span></span>\n<span></span>'}),title:"Create a bash shell in a container"}),"\n",(0,a.jsx)(s.pre,{language:"shell",code:"jumppad exec container.consul\n",children:(0,a.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad </span><span style="color: var(--shiki-token-function)">exec</span><span style="color: var(--shiki-color-text)"> container.consul</span></span>\n<span></span>'}),title:"Create a default shell in a container"})]})}var t=!0;s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6305)}),_N_E=e.O()}]);