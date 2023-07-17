(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9657],{2070:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/certificate_ca",function(){return r(1082)}])},1082:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a}});var s=r(5893),n=r(1151),c=r(8691);function o(e){let t=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre"},(0,n.ah)(),e.components),{Intro:r,Properties:o,Property:a}=t;return r||i("Intro",!0),o||i("Properties",!0),a||i("Property",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{children:["Root Certificate ",(0,s.jsx)(t.code,{children:"certificate_ca"})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"certificate_ca"})," resource allows you to create x509 Root Certificates and the associated Private Key."]}),(0,s.jsx)(t.p,{children:"The following parameters are available for creating certificate_ca resources,\nwhen a new resource is created jumppad will create the certificate and associated\nprivate key and write them to the output folder. Certificates do not perisist\nthe lifecycle of a blueprint, when a blueprint is destroyed the created certs\nand keys are removed from the output folder."}),(0,s.jsx)(t.p,{children:"Root Certificates have a pre-set Common Name corresponding to the name of the resource"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{name:"output",type:"string",required:"true",value:"",children:(0,s.jsx)(t.p,{children:"Output folder to write the certifcate and private key to."})}),(0,s.jsx)(a,{name:"private_key",type:"#file",value:"",readonly:!0,children:(0,s.jsxs)(t.p,{children:["Details related to the private key generated by the ",(0,s.jsx)(t.code,{children:"certificate_ca"})," resource."]})}),(0,s.jsx)(a,{name:"public_key_pem",type:"#file",value:"",readonly:!0,children:(0,s.jsxs)(t.p,{children:["Details related to the PEM encoded public key generated by the ",(0,s.jsx)(t.code,{children:"certificate_ca"})," resource."]})}),(0,s.jsx)(a,{name:"public_key_ssh",type:"#file",value:"",readonly:!0,children:(0,s.jsxs)(t.p,{children:["Details related to the SSH encoded public key generated by the ",(0,s.jsx)(t.code,{children:"certificate_ca"})," resource."]})}),(0,s.jsx)(a,{name:"certificate",type:"#file",value:"",readonly:!0,children:(0,s.jsxs)(t.p,{children:["Details related to the certificate generated by the ",(0,s.jsx)(t.code,{children:"certificate_ca"})," resource."]})})]}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{language:"hcl",code:'resource "certificate_ca" "cd_consul_ca" {\n  output = data("certs")\n}\n',children:(0,s.jsx)(t.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;certificate_ca&quot; &quot;cd_consul_ca&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  output </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> data(</span><span style="color: var(--shiki-token-string-expression)">&quot;certs&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var a=!0;function i(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},8691:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o}});var s=r(5893),n=r(1151);function c(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the main properties, all resources have meta properties, such\nas the ",(0,s.jsx)(t.code,{children:"id"})," of the resource. To see the list of these properties please see the\n",(0,s.jsx)(t.code,{children:"Meta Properties"})," section in the documentation ",(0,s.jsx)(t.a,{href:"/docs/resources/meta",children:"/docs/resources/meta"}),"."]})]})}var o=!0;t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=2070)}),_N_E=e.O()}]);