(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1191],{5170:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/helm",function(){return n(9965)}])},9965:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var o=n(5893),a=n(1151),r=n(8691);function t(s){let e=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre",h3:"h3"},(0,a.ah)(),s.components),{Intro:n,Properties:t,Property:l}=e;return n||i("Intro",!0),t||i("Properties",!0),l||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{children:["Helm ",(0,o.jsx)(e.code,{children:"helm"})]}),"\n",(0,o.jsx)(n,{children:(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"helm"})," resource allows Helm charts to be provisioned to ",(0,o.jsx)(e.code,{children:"k8s_cluster"}),"\nresources."]})}),"\n",(0,o.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)(l,{name:"cluster",type:"k8s_cluster",required:"true",value:"",children:[(0,o.jsx)(e.p,{children:"A reference to a kubernetes clusters to apply the chart to. Jumppad\nwaits until the referenced cluster is healthy before attempting t\napply any charts."}),(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "consul" {\n  cluster = resource.k8s_cluster.k3s\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;consul&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,o.jsx)(l,{name:"repository",type:"#helm_repository",required:"optional",value:"",children:(0,o.jsx)(e.p,{children:"The details for the Helm chart repository where the chart exists. If this\nproperty is not specifed, the chart location is assumed to be either a local\ndirectory or Git reference."})}),(0,o.jsx)(l,{name:"chart",type:"string",required:"true",value:"",children:(0,o.jsx)(e.p,{children:"The name of the chart within the repository, or a souce\nsuch as a git repository, URL, or file path where the chart\nfile exist."})}),(0,o.jsx)(l,{name:"version",type:"string",required:"optional",value:"",children:(0,o.jsxs)(e.p,{children:["Semver of the chart to install, only used when ",(0,o.jsx)(e.code,{children:"repository"})," is\nspecified."]})}),(0,o.jsxs)(l,{name:"values",type:"string",required:"optional",value:"",children:[(0,o.jsx)(e.p,{children:"File path to a valid Helm values file to be used when applying the config."}),(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "mychart" {\n  values = "./values.yaml"\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;mychart&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  values </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./values.yaml&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,o.jsxs)(l,{name:"values_string",type:"map[string]string",required:"optional",value:"",children:[(0,o.jsx)(e.p,{children:"Map containing helm values to apply with the chart."}),(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "mychart" {\n  values_string = {\n    "global.storage" = "128Mb"\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;mychart&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  values_string </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    &quot;global.storage&quot; = &quot;128Mb&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,o.jsx)(l,{name:"namespace",type:"string",required:"optional",value:"default",children:(0,o.jsx)(e.p,{children:"Kubernetes namespace to apply the chart to."})}),(0,o.jsx)(l,{name:"create_namespace",type:"boolean",required:"optional",value:"false",children:(0,o.jsx)(e.p,{children:"If the namespace does not exist, should the helm resource attempt to create it."})}),(0,o.jsx)(l,{name:"skip_crds",type:"boolean",required:"optional",value:"false",children:(0,o.jsx)(e.p,{children:"If the chart defines custom resource definitions, should these be ignored."})}),(0,o.jsx)(l,{name:"retry",type:"int",required:"optional",value:"1",children:(0,o.jsx)(e.p,{children:"Enables the ability to retry the installation of a chart."})}),(0,o.jsx)(l,{name:"timeout",type:"string",required:"optional",value:"300s",children:(0,o.jsxs)(e.p,{children:["Maximum time the application phase of a chart can run before failing.\nThis duration is different to the ",(0,o.jsx)(e.code,{children:"health_check"})," that runs after\na chart has been applied."]})}),(0,o.jsx)(l,{name:"health_check",type:"#health_check",required:"optional",value:"",children:(0,o.jsx)(e.p,{children:"Health check to run after installing the chart."})})]}),"\n",(0,o.jsx)(e.h2,{id:"helm_repository",children:"helm_repository"}),"\n",(0,o.jsxs)(e.p,{children:["A ",(0,o.jsx)(e.code,{children:"helm_repository"})," stanza defines the details for a remote helm\nrepository."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)(l,{name:"name",type:"string",required:"true",value:"",children:(0,o.jsx)(e.p,{children:"The name of the repository."})}),(0,o.jsx)(l,{name:"url",type:"string",required:"true",value:"",children:(0,o.jsx)(e.p,{children:"The repository URL."})})]}),"\n",(0,o.jsx)(e.h2,{id:"health_check",children:"health_check"}),"\n",(0,o.jsx)(e.p,{children:"A health_check stanza allows the definition of a health check which must\npass before the resource is marked as successfully created."}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'health_check {\n  timeout = "60s"\n  pods = [\n    "component=server,app=consul", \n    "component=client,app=consul"\n  ]\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">health_check</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  timeout </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;60s&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  pods </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;component=server,app=consul&quot;</span><span style="color: var(--shiki-color-text)">, </span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;component=client,app=consul&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)(l,{name:"timeout",type:"duration",required:"true",value:"",children:(0,o.jsxs)(e.p,{children:["The maximum duration to wait before marking the health check as failed.\nExpressed as a Go duration, e.g. ",(0,o.jsx)(e.code,{children:"1s"})," = 1 second, ",(0,o.jsx)(e.code,{children:"100ms"})," = 100 milliseconds."]})}),(0,o.jsx)(l,{name:"pods",type:"[]string",required:"true",value:"",children:(0,o.jsx)(e.p,{children:"An array of kubernetes selector syntax. The healthcheck ensures that all\ncontainers defined by the selector are running before passing the healthcheck."})})]}),"\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.h3,{children:"Install Helm Chart from a Helm Repository"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "consul" {\n  cluster = resource.k8s_cluster.k3s\n\n  repository {\n    name = "hashicorp"\n    url  = "https://helm.releases.hashicorp.com"\n  }\n\n  chart   = "hashicorp/consul"\n  version = "v0.40.0"\n\n  values = "./helm/consul-values.yaml"\n\n  health_check {\n    timeout = "240s"\n    pods = [\n      "component=connect-injector",\n      "component=client",\n      "component=controller",\n      "component=server",\n    ]\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;consul&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">repository</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hashicorp&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    url  </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://helm.releases.hashicorp.com&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  chart   </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hashicorp/consul&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  version </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;v0.40.0&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  values </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./helm/consul-values.yaml&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">health_check</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    timeout </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;240s&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    pods </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=connect-injector&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=client&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=controller&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=server&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    ]</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(e.h3,{children:"Install Helm Chart from a GitHub Repository"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "vault" {\n  cluster = resource.k8s_cluster.k3s\n  chart = "github.com/hashicorp/vault-helm"\n\n  values_string = {\n    "server.dataStorage.size" = "128Mb"\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;vault&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span></span>\n<span><span style="color: var(--shiki-color-text)">  chart </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;github.com/hashicorp/vault-helm&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  values_string </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    &quot;server.dataStorage.size&quot; = &quot;128Mb&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(e.h3,{children:"Install Helm Chart from a Local Folder"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "vault" {\n  cluster = resource.k8s_cluster.k3s\n  chart   = "./files/helm/vault"\n\n  values_string = {\n    "server.dataStorage.size" = "128Mb"\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;vault&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span></span>\n<span><span style="color: var(--shiki-color-text)">  chart   </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./files/helm/vault&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  values_string </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    &quot;server.dataStorage.size&quot; = &quot;128Mb&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var l=!0;function i(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}},8691:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return t}});var o=n(5893),a=n(1151);function r(s){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,o.jsxs)(e.p,{children:["In addition to the main properties, all resources have meta properties, such\nas the ",(0,o.jsx)(e.code,{children:"id"})," of the resource. To see the list of these properties please see the\n",(0,o.jsx)(e.code,{children:"Meta Properties"})," section in the documentation ",(0,o.jsx)(e.a,{href:"/docs/resources/meta",children:"/docs/resources/meta"}),"."]})]})}var t=!0;e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(r,s)})):r(s)}}},function(s){s.O(0,[9774,2888,179],function(){return s(s.s=5170)}),_N_E=s.O()}]);