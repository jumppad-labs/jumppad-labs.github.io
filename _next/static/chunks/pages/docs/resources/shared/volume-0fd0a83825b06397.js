(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8687],{6003:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/shared/volume",function(){return i(5312)}])},5312:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return s}});var t=i(5893),r=i(1151);function o(e){let n=Object.assign({hr:"hr",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components),{Properties:i,Property:o}=n;return i||l("Properties",!0),o||l("Property",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"volume",children:"volume"}),"\n",(0,t.jsx)(n.p,{children:"A volume type allows the specification of an attached volume."}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)(o,{name:"source",type:"string",required:"true",value:"",children:(0,t.jsxs)(n.p,{children:["The source volume to mount in the container, can be specified as a relative ",(0,t.jsx)(n.code,{children:"./"})," or absolute path ",(0,t.jsx)(n.code,{children:"/usr/local/bin"}),". Relative paths are relative to\nthe file declaring the container."]})}),(0,t.jsx)(o,{name:"destination",type:"string",required:"true",value:"",children:(0,t.jsx)(n.p,{children:"The destination in the container to mount the volume to, must be an absolute path."})}),(0,t.jsxs)(o,{name:"type",type:"string",required:"false",value:"bind",children:[(0,t.jsx)(n.p,{children:"The type of the mount, can be one of the following values:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"bind: bind the source path to the destination path in the container"}),"\n",(0,t.jsx)(n.li,{children:"volume: source is a Docker volume"}),"\n",(0,t.jsx)(n.li,{children:"tmpfs: create a temporary filesystem"}),"\n"]})]}),(0,t.jsxs)(o,{name:"bind_propagation",type:"string",required:"false",value:"rprivate",children:[(0,t.jsx)(n.p,{children:"Configures bind propagation for Docker volume mounts, only applies to bind mounts, can be one of the following values:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"shared"}),"\n",(0,t.jsx)(n.li,{children:"slave"}),"\n",(0,t.jsx)(n.li,{children:"private"}),"\n",(0,t.jsx)(n.li,{children:"rslave"}),"\n",(0,t.jsx)(n.li,{children:"rprivate"}),"\n"]}),(0,t.jsxs)(n.p,{children:["For more information please see the Docker documentation ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation",children:"https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation"})]})]}),(0,t.jsx)(o,{name:"bind_propagation_non_recursive",type:"boolean",required:"false",value:"false",children:(0,t.jsxs)(n.p,{children:["Configures recursiveness of the bind mount. By default Docker mounts with the equivalent of ",(0,t.jsx)(n.code,{children:"mount --rbind"})," meaning that mounts below the the source directory are visible in the container.\nFor instance running ",(0,t.jsx)(n.code,{children:"docker run --rm --mount type=bind,src=/,target=/host,readonly busybox"})," will make ",(0,t.jsx)(n.code,{children:"/run"})," of the host available as ",(0,t.jsx)(n.code,{children:"/host/run"})," in the container -- and to make matters\neven worse it will be writable (since only the toplevel bind is set readonly, not the children). If ",(0,t.jsx)(n.code,{children:"bind_propagation_non_recursive"})," is set to ",(0,t.jsx)(n.code,{children:"true"})," then the container will only see an\nempty ",(0,t.jsx)(n.code,{children:"/host/run"}),", meaning the ",(0,t.jsx)(n.code,{children:"tmpfs"})," which is typically mounted to ",(0,t.jsx)(n.code,{children:"/run"})," on the host is not propagated into the container."]})}),(0,t.jsxs)(o,{name:"selinux_relabel",type:"string",required:"false",value:"",children:[(0,t.jsx)(n.p,{children:"Configures Selinux relabeling for the container (usually specified as :z or :Z) and can be one of the following values:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"shared (Equivalent to :z)"}),"\n",(0,t.jsx)(n.li,{children:"private (Equivalent to :Z)"}),"\n"]})]})]})]})}var s=!0;function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=6003)}),_N_E=e.O()}]);