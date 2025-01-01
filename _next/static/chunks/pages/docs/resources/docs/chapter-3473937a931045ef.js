(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6083],{2357:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/docs/chapter",function(){return e(9246)}])},9246:function(n,s,e){"use strict";e.r(s),e.d(s,{__N_SSG:function(){return r}});var t=e(5893),a=e(1151);function o(n){let s=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",hr:"hr",h3:"h3",pre:"pre"},(0,a.ah)(),n.components),{Intro:e,Properties:o,Property:r}=s;return e||i("Intro",!0),o||i("Properties",!0),r||i("Property",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{children:["Chapter ",(0,t.jsx)(s.code,{children:"chapter"})]}),"\n",(0,t.jsx)(e,{children:(0,t.jsxs)(s.p,{children:["Bundles ",(0,t.jsx)(s.code,{children:"chapter"})," resources together so it can be displayed in the ",(0,t.jsx)(s.code,{children:"docs"})," resource."]})}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{name:"title",type:"string",value:"",children:(0,t.jsx)(s.p,{children:"The title of the chapter."})}),(0,t.jsxs)(r,{name:"page",type:"#page",required:"true",value:"",children:[(0,t.jsx)(s.p,{children:"A page to include in the chapter."}),(0,t.jsx)(s.p,{children:"This stanza can be specified multiple times."})]}),(0,t.jsx)(r,{name:"prerequisites",type:"[]string",value:"",children:(0,t.jsxs)(s.p,{children:["A list containing the IDs of ",(0,t.jsx)(s.code,{children:"chapter"})," resources that need to be completed before the tasks in this chapter unlock."]})}),(0,t.jsxs)(r,{name:"tasks",type:"map[string]#task",value:"",children:[(0,t.jsx)(s.p,{children:"Allows you to include tasks in the pages of the chapter."}),(0,t.jsxs)(s.p,{children:["The key will be the ID that you can reference in the ",(0,t.jsx)(s.code,{children:"Task"})," component within the content.\nThe value is a reference to the ID of a ",(0,t.jsx)(s.code,{children:"task"})," resource."]})]}),(0,t.jsx)(r,{name:"index",type:"string",value:"",readonly:!0,children:(0,t.jsx)(s.p,{children:"A JSON index generated from the pages of the chapter."})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h3,{children:["Page ",(0,t.jsx)(s.code,{children:"page"})]}),"\n",(0,t.jsxs)(s.p,{children:["A page containing content and tasks.\nThe first h1 (",(0,t.jsx)(s.code,{children:"# Title"}),") header in the content will be used as the title of the page."]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{name:"id",type:"string",value:"",children:(0,t.jsx)(s.p,{children:"The ID of the page."})}),(0,t.jsx)(r,{name:"content",type:"string",value:"",children:(0,t.jsx)(s.p,{children:"The content of the page."})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{language:"hcl",code:'resource "chapter" "installation" {\n  title = "Install terraform"\n\n  tasks = {\n    manual_installation = resource.task.manual_installation\n    verify_installation = resource.task.verify_installation\n    terraform_version = resource.task.terraform_version\n  }\n\n  page "manual_installation" {\n    content = file("docs/installation/manual_installation.mdx")\n  }\n\n  page "verify_installation" {\n    content = file("docs/installation/verify_installation.mdx")\n  }\n  \n  page "terraform_version" {\n    content = file("docs/installation/terraform_version.mdx")\n  }\n}\n',children:(0,t.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;chapter&quot; &quot;installation&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  title </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Install terraform&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  tasks </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    manual_installation = resource.task.manual_installation</span></span>\n<span><span style="color: var(--shiki-color-text)">    verify_installation = resource.task.verify_installation</span></span>\n<span><span style="color: var(--shiki-color-text)">    terraform_version = resource.task.terraform_version</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">page</span><span style="color: var(--shiki-token-string-expression)"> &quot;manual_installation&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    content </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> file(</span><span style="color: var(--shiki-token-string-expression)">&quot;docs/installation/manual_installation.mdx&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">page</span><span style="color: var(--shiki-token-string-expression)"> &quot;verify_installation&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    content </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> file(</span><span style="color: var(--shiki-token-string-expression)">&quot;docs/installation/verify_installation.mdx&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">page</span><span style="color: var(--shiki-token-string-expression)"> &quot;terraform_version&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    content </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> file(</span><span style="color: var(--shiki-token-string-expression)">&quot;docs/installation/terraform_version.mdx&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var r=!0;function i(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.ah)(),n.components);return s?(0,t.jsx)(s,Object.assign({},n,{children:(0,t.jsx)(o,n)})):o(n)}}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=2357)}),_N_E=n.O()}]);