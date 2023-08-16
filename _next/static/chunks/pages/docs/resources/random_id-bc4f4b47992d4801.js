(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4885],{4799:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/random_id",function(){return n(9111)}])},9111:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return i}});var o=n(5893),r=n(1151),t=n(8691);function a(s){let e=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre"},(0,r.ah)(),s.components),{Intro:n,Properties:a,Property:i}=e;return n||l("Intro",!0),a||l("Properties",!0),i||l("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{children:["Random ID ",(0,o.jsx)(e.code,{children:"random_id"})]}),"\n",(0,o.jsx)(n,{children:(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"random_id"})," resource allows the creation of random IDs."]})}),"\n",(0,o.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)(i,{name:"byte_length",type:"int",required:"true",value:"",children:(0,o.jsx)(e.p,{children:"The number of random bytes to produce.\nThe minimum value is 1, which produces eight bits of randomness."})}),(0,o.jsx)(i,{name:"base64",type:"string",value:"",readonly:!0,children:(0,o.jsx)(e.p,{children:"The generated ID presented in base64."})}),(0,o.jsx)(i,{name:"hex",type:"string",value:"",readonly:!0,children:(0,o.jsx)(e.p,{children:"The generated ID presented in padded hexadecimal digits.\nThis result will always be twice as long as the requested byte length."})}),(0,o.jsx)(i,{name:"dec",type:"string",value:"",readonly:!0,children:(0,o.jsx)(e.p,{children:"The generated ID presented in non-padded decimal digits."})})]}),"\n",(0,o.jsx)(t.default,{}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "random_id" "id" {\n    byte_length = 4\n}\n\noutput "id_base64" {\n    value = resource.random_id.id.base64\n}\n\noutput "id_hex" {\n    value = resource.random_id.id.hex\n}\n\noutput "id_dec" {\n    value = resource.random_id.id.dec\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;random_id&quot; &quot;id&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    byte_length </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;id_base64&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">random_id</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">base64</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;id_hex&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">random_id</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">hex</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;id_dec&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">random_id</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">dec</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var i=!0;function l(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(a,s)})):a(s)}},8691:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return a}});var o=n(5893),r=n(1151);function t(s){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,o.jsxs)(e.p,{children:["In addition to the main properties, all resources have meta properties, such\nas the ",(0,o.jsx)(e.code,{children:"id"})," of the resource. To see the list of these properties please see the\n",(0,o.jsx)(e.code,{children:"Meta Properties"})," section in the documentation ",(0,o.jsx)(e.a,{href:"/docs/resources/meta",children:"/docs/resources/meta"}),"."]})]})}var a=!0;e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}}},function(s){s.O(0,[9774,2888,179],function(){return s(s.s=4799)}),_N_E=s.O()}]);