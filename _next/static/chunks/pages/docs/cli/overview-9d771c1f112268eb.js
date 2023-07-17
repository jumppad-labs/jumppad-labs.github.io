(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9301],{2600:function(n,o,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cli/overview",function(){return s(8336)}])},8336:function(n,o,s){"use strict";s.r(o),s.d(o,{__N_SSG:function(){return l}});var e=s(5893),a=s(1151);function t(n){let o=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,a.ah)(),n.components),{Intro:s,CodeGroup:t,Properties:l,Property:i}=o;return t||p("CodeGroup",!0),s||p("Intro",!0),l||p("Properties",!0),i||p("Property",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h1,{children:"Overview"}),"\n",(0,e.jsx)(s,{children:(0,e.jsxs)(o.p,{children:["Jumppad is controlled via a very easy to use command-line interface (CLI). Jumppad is only a single command-line application: ",(0,e.jsx)(o.code,{children:"jumppad"}),", which takes a subcommand such as ",(0,e.jsx)(o.code,{children:"up"})," or ",(0,e.jsx)(o.code,{children:"status"}),". The complete list of subcommands is in the navigation to the left."]})}),"\n",(0,e.jsx)(o.h2,{id:"help",children:"Help"}),"\n",(0,e.jsxs)(o.p,{children:["The Jumppad CLI is a well-behaved command line application. In erroneous cases, a non-zero exit status will be returned. It also responds to ",(0,e.jsx)(o.code,{children:"-h"})," and ",(0,e.jsx)(o.code,{children:"--help"})," as you would most likely expect."]}),"\n",(0,e.jsxs)(o.p,{children:["To view a list of the available commands at any time, just run Jumppad with no arguments. To get help for any specific subcommand, run the subcommand with the ",(0,e.jsx)(o.code,{children:"-h"})," argument."]}),"\n",(0,e.jsx)(o.p,{children:"Each command has been conveniently documented on this website. Links to each command can be found on the left."}),"\n",(0,e.jsx)(o.h2,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,e.jsx)(o.p,{children:"Jumppad's CLI supports command autocomplete. Autocomplete can be installed or uninstalled by running the following on bash, zsh or fish shells:"}),"\n",(0,e.jsx)(o.pre,{language:"shell",code:"jumppad completion [bash|zsh|fish|powershell]\n",children:(0,e.jsx)(o.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad completion [bash</span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)">zsh</span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)">fish</span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)">powershell]</span></span>\n<span></span>'})}),"\n",(0,e.jsxs)(t,{title:"Loading completions for your shell.",children:[(0,e.jsx)(o.pre,{language:"bash",code:"source <(yourprogram completion bash)\n\n# To load completions for each session, execute once:\n# Linux:\njumppad completion bash > /etc/bash_completion.d/jumppad\n\n# macOS:\njumppad completion bash > /usr/local/etc/bash_completion.d/jumppad\n",children:(0,e.jsx)(o.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-token-function)">source</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&lt;(yourprogram completion bash)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># To load completions for each session, execute once:</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Linux:</span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad completion bash </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> /etc/bash_completion.d/jumppad</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># macOS:</span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad completion bash </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> /usr/local/etc/bash_completion.d/jumppad</span></span>\n<span></span>'}),title:"bash"}),(0,e.jsx)(o.pre,{language:"zsh",code:'# If shell completion is not already enabled in your environment,\n# you will need to enable it.  You can execute the following once:\n\necho "autoload -U compinit; compinit" >> ~/.zshrc\n\n# To load completions for each session, execute once:\njumppad completion zsh > "${fpath[1]}/_jumppad"\n\n# You will need to start a new shell for this setup to take effect.\n# I also had to disable oh-my-zsh calls in ~/.zshrc\n',children:(0,e.jsx)(o.code,{className:"language-zsh",children:'<span><span style="color: var(--shiki-token-comment)"># If shell completion is not already enabled in your environment,</span></span>\n<span><span style="color: var(--shiki-token-comment)"># you will need to enable it.  You can execute the following once:</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-function)">echo</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;autoload -U compinit; compinit&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&gt;&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/.zshrc</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># To load completions for each session, execute once:</span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad completion zsh </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;${fpath[1]}/_jumppad&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># You will need to start a new shell for this setup to take effect.</span></span>\n<span><span style="color: var(--shiki-token-comment)"># I also had to disable oh-my-zsh calls in ~/.zshrc</span></span>\n<span></span>'}),title:"zsh"}),(0,e.jsx)(o.pre,{language:"zsh",code:'# If shell completion is not already enabled in your environment,\n# you will need to enable it.  You can execute the following once:\n\necho "autoload -U compinit; compinit" >> ~/.zshrc\n\n# Install the completion code for jumppad into the oh-my-zsh completion folder\njumppad completion zsh > ~/.oh-my-zsh/completions/_shipyard\n',children:(0,e.jsx)(o.code,{className:"language-zsh",children:'<span><span style="color: var(--shiki-token-comment)"># If shell completion is not already enabled in your environment,</span></span>\n<span><span style="color: var(--shiki-token-comment)"># you will need to enable it.  You can execute the following once:</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-function)">echo</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;autoload -U compinit; compinit&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&gt;&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/.zshrc</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># Install the completion code for jumppad into the oh-my-zsh completion folder</span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad completion zsh </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/.oh-my-zsh/completions/_shipyard</span></span>\n<span></span>'}),title:"oh-my-zsh"}),(0,e.jsx)(o.pre,{language:"shell",code:"jumppad completion fish | source\n\n# To load completions for each session, execute once:\njumppad completion fish > ~/.config/fish/completions/jumppad.fish\n",children:(0,e.jsx)(o.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad completion fish </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">source</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># To load completions for each session, execute once:</span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad completion fish </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/.config/fish/completions/jumppad.fish</span></span>\n<span></span>'}),title:"fish"}),(0,e.jsx)(o.pre,{language:"powershell",code:"jumppad completion powershell | Out-String | Invoke-Expression\n\n# To load completions for every new session, run:\njumppad completion powershell > jumppad.ps1\n# and source this file from your PowerShell profile.\n",children:(0,e.jsx)(o.code,{className:"language-powershell",children:'<span><span style="color: var(--shiki-color-text)">jumppad completion powershell </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Out-String</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Invoke-Expression</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># To load completions for every new session, run:</span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad completion powershell </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> jumppad.ps1</span></span>\n<span><span style="color: var(--shiki-token-comment)"># and source this file from your PowerShell profile.</span></span>\n<span></span>'}),title:"powershell"})]}),"\n",(0,e.jsx)(o.h2,{id:"environment_variables",children:"Environment variables"}),"\n",(0,e.jsx)(o.p,{children:"Jumppad can use environment variables to configure command-line tool options. These environment variables can be overridden as needed using individual flags."}),"\n",(0,e.jsx)(l,{children:(0,e.jsx)(i,{name:"LOG_LEVEL",type:"string",value:"info",children:(0,e.jsxs)(o.p,{children:["Set the log level for the jumppad command to either ",(0,e.jsx)(o.code,{children:"debug"}),", ",(0,e.jsx)(o.code,{children:"info"}),", ",(0,e.jsx)(o.code,{children:"warning"})," or ",(0,e.jsx)(o.code,{children:"error"}),"."]})})})]})}var l=!0;function p(n,o){throw Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}o.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,a.ah)(),n.components);return o?(0,e.jsx)(o,Object.assign({},n,{children:(0,e.jsx)(t,n)})):t(n)}}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=2600)}),_N_E=n.O()}]);