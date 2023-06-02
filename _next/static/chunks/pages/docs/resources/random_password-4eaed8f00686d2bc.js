(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2083],{1185:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/random_password",function(){return r(8637)}])},8637:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSG:function(){return i}});var n=r(5893),o=r(1151),a=r(8691);function t(e){let s=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre"},(0,o.ah)(),e.components),{Intro:r,Properties:t,Property:i}=s;return r||c("Intro",!0),t||c("Properties",!0),i||c("Property",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{children:["Random Password ",(0,n.jsx)(s.code,{children:"random_password"})]}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"random_password"})," resource allows the creation of random passwords."]})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)(i,{name:"length",type:"int",required:"true",value:"0",children:(0,n.jsx)(s.p,{children:"The length of the generated value."})}),(0,n.jsx)(i,{name:"special",type:"bool",required:"false",value:"true",children:(0,n.jsx)(s.p,{children:"Wether or not to include special characters in the generated password."})}),(0,n.jsx)(i,{name:"numeric",type:"bool",required:"false",value:"true",children:(0,n.jsx)(s.p,{children:"Wether or not to include numeric characters in the generated password."})}),(0,n.jsx)(i,{name:"upper",type:"bool",required:"false",value:"true",children:(0,n.jsx)(s.p,{children:"Wether or not to include uppercase characters in the generated password."})}),(0,n.jsx)(i,{name:"lower",type:"bool",required:"false",value:"true",children:(0,n.jsx)(s.p,{children:"Wether or not to include lowercase characters in the generated password."})}),(0,n.jsx)(i,{name:"min_special",type:"int",required:"false",value:"0",children:(0,n.jsx)(s.p,{children:"The minimum number of special characters to include in the generated password."})}),(0,n.jsx)(i,{name:"min_numeric",type:"int",required:"false",value:"0",children:(0,n.jsx)(s.p,{children:"The minimum number of numeric characters to include in the generated password."})}),(0,n.jsx)(i,{name:"min_upper",type:"int",required:"false",value:"0",children:(0,n.jsx)(s.p,{children:"The minimum number of uppercase characters to include in the generated password."})}),(0,n.jsx)(i,{name:"min_lower",type:"int",required:"false",value:"0",children:(0,n.jsx)(s.p,{children:"The minimum number of lowercase characters to include in the generated password."})}),(0,n.jsx)(i,{name:"value",type:"int",value:"",readonly:!0,children:(0,n.jsx)(s.p,{children:"The generated password."})})]}),"\n",(0,n.jsx)(a.default,{}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{language:"hcl",code:'resource "random_password" "password" {\n    length = 32\n}\n\noutput "password" {\n    value = resource.random_password.password.value\n}\n',children:(0,n.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;random_password&quot; &quot;password&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    length </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">32</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;password&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">random_password</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">password</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">value</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var i=!0;function c(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}},8691:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSG:function(){return t}});var n=r(5893),o=r(1151);function a(e){let s=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,n.jsxs)(s.p,{children:["In addition to the main properties, all resources have meta properties, such\nas the ",(0,n.jsx)(s.code,{children:"id"})," of the resource. To see the list of these properties please see the\n",(0,n.jsx)(s.code,{children:"Meta Properties"})," section in the documentation ",(0,n.jsx)(s.a,{href:"/docs/resources/meta",children:"/docs/resources/meta"}),"."]})]})}var t=!0;s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=1185)}),_N_E=e.O()}]);