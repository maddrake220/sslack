(self.webpackChunksslack=self.webpackChunksslack||[]).push([[477],{9250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),l=n(5692),o=n(4219),r=n(8678),s=n(9669),i=n.n(s),c=n(5723),p=n(3564),d=n(5977),m=n(9249);const u=({show:e,onCloseModal:t,setShowInviteChannelModal:n})=>{const[s,u,h]=(0,r.Z)(""),{data:g}=(0,c.ZP)("/api/users",p.Z,{dedupingInterval:2e3}),{workspace:b,channel:x}=(0,d.UO)(),{revalidate:w}=(0,c.ZP)(g&&x?`/api/workspaces/${b}/channels/${x}/members`:null,p.Z),k=(0,a.useCallback)((e=>{e.preventDefault(),s&&s.trim()&&i().post(`/api/workspaces/${b}/channels/${x}/members`,{email:s}).then((()=>{w(),h(""),n(!1)})).catch((e=>{console.dir(e),m.Am.error(e.response.data,{position:"bottom-center"})}))}),[s]);return a.createElement(l.Z,{show:e,onCloseModal:t},a.createElement("form",{onSubmit:k},a.createElement(o.__,null,a.createElement("span",null,"이메일"),a.createElement(o.II,{id:"member",type:"email",value:s,onChange:u})),a.createElement(o.zx,{type:"submit"},"사용자 초대")))}},5692:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7294),l=n(8401);const o=(0,l.Z)("div",{target:"e16iyary1"})({name:"1lwy7lv",styles:"position:fixed;top:30;right:0;left:30;bottom:0;z-index:1000;&>div{position:absolute;display:inline-block;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;min-width:360px;z-index:512;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),r=(0,l.Z)("button",{target:"e16iyary0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),s=({children:e,show:t,onCloseModal:n})=>{const l=(0,a.useCallback)((e=>{e.stopPropagation()}),[]);return t?a.createElement(o,{onClick:n},a.createElement("div",{onClick:l},a.createElement(r,{onClick:n},"×"),e)):null}},2951:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(6809),l=n.n(a),o=n(7294);const r={},s=e=>{const t=(0,o.useCallback)((()=>{e&&(r[e].disconnect,delete r[e])}),[]);return console.log(e),e?(r[e]||(r[e]=l().connect(`http://localhost:3095/ws-${e}`,{transports:["websocket"]})),[r[e],t]):[void 0,t]}},2867:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>X});var a=n(7294),l=n(3564),o=n(9669),r=n.n(o),s=n(4219),i=n(5977),c=n(3727),p=n(5723),d=n(6182),m=n.n(d),u=n(2168),h=n(9249),g=n(8401);const b=(0,g.Z)("div",{target:"e1wxv8ts13"})({name:"tjo4qw",styles:"float:right"}),x=(0,g.Z)("header",{target:"e1wxv8ts12"})({name:"fvf0bi",styles:"height:38px;background:#350d36;color:#ffffff;box-shadow:0 1px 0 0 rgba(255, 255, 255, 0.1);padding:5px;text-align:center"}),w=(0,g.Z)("img",{target:"e1wxv8ts11"})({name:"1ly4jlu",styles:"width:28px;height:28px;position:absolute;top:5px;right:16px"}),k=(0,g.Z)("div",{target:"e1wxv8ts10"})({name:"47px7v",styles:"display:flex;padding:20px;& img{display:flex;}&>div{display:flex;flex-direction:column;margin-left:10px;}& #profile-name{font-weight:bold;display:inline-flex;}& #profile-active{font-size:13px;display:inline-flex;}"}),v=(0,g.Z)("button",{target:"e1wxv8ts9"})({name:"bl1q1k",styles:"border:none;width:100%;border-top:1px solid rgb(29, 28, 29);background:transparent;display:block;height:33px;padding:5px 20px 5px;outline:none;cursor:pointer"}),f=(0,g.Z)("div",{target:"e1wxv8ts8"})({name:"36bnqj",styles:"display:flex;flex:1"}),E=(0,g.Z)("div",{target:"e1wxv8ts7"})({name:"17lvj7e",styles:"width:65px;display:inline-flex;flex-direction:column;align-items:center;background:#3f0e40;border-top:1px solid rgb(82, 38, 83);border-right:1px solid rgb(82, 38, 83);vertical-align:top;text-align:center;padding:15px 0 0"}),C=(0,g.Z)("nav",{target:"e1wxv8ts6"})({name:"2pkygn",styles:"width:260px;display:inline-flex;flex-direction:column;background:#3f0e40;color:rgb(188, 171, 188);vertical-align:top;& a{padding-left:36px;color:inherit;text-decoration:none;height:28px;line-height:28px;display:flex;align-items:center;&.selected{color:white;}}& .bold{color:white;font-weight:bold;}& .count{margin-left:auto;background:#cd2553;border-radius:16px;display:inline-block;font-size:12px;font-weight:700;height:18px;line-height:18px;padding:0 9px;color:white;margin-right:16px;}& h2{height:36px;line-height:36px;margin:0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:15px;}"}),Z=(0,g.Z)("button",{target:"e1wxv8ts5"})({name:"1rmthq7",styles:"height:64px;line-height:64px;border:none;width:100%;text-align:left;border-top:1px solid rgb(82, 38, 83);border-bottom:1px solid rgb(82, 38, 83);font-weight:900;font-size:24px;background:transparent;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:0;padding-left:16px;margin:0;color:white;cursor:pointer"}),y=(0,g.Z)("div",{target:"e1wxv8ts4"})({name:"1146j5j",styles:"height:calc(100vh - 102px);overflow-y:auto"}),_=(0,g.Z)("div",{target:"e1wxv8ts3"})({name:"192o1ir",styles:"padding:10px 0 0;& h2{padding-left:20px;}&>button{width:100%;height:28px;padding:4px;border:none;background:transparent;border-top:1px solid rgb(28, 29, 28);cursor:pointer;&:last-of-type{border-bottom:1px solid rgb(28, 29, 28);}}"}),S=(0,g.Z)("div",{target:"e1wxv8ts2"})({name:"82a6rk",styles:"flex:1"}),M=(0,g.Z)("button",{target:"e1wxv8ts1"})({name:"9tlmej",styles:"color:white;font-size:24px;display:inline-block;width:40px;height:40px;background:transparent;border:none;cursor:pointer"}),I=(0,g.Z)("button",{target:"e1wxv8ts0"})({name:"wsqixl",styles:"display:inline-block;width:40px;height:40px;border-radius:10px;background:white;border:3px solid #3f0e40;margin-bottom:15px;font-size:18px;font-weight:700;color:black;cursor:pointer"}),P=(0,g.Z)("div",{target:"e1q7y8xa1"})({name:"3nqusf",styles:"position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;&>div{position:absolute;display:inline-block;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;min-width:360px;z-index:512;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),z=(0,g.Z)("button",{target:"e1q7y8xa0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),$=({children:e,style:t,show:n,onCloseModal:l,closeButton:o})=>{const r=(0,a.useCallback)((e=>{e.stopPropagation()}),[]);return n?a.createElement(P,{onClick:l},a.createElement("div",{style:t,onClick:r},o&&a.createElement(z,{onClick:l},"×"),e)):null};$.defaultProps={closeButton:!0};const q=$;var O=n(5692),A=n(8678);const D=({show:e,onCloseModal:t,setShowCreateChannelModal:n})=>{console.log(e);const[o,c,d]=(0,A.Z)(""),{workspace:m,channel:u}=(0,i.UO)(),{data:g,error:b,revalidate:x,mutate:w}=(0,p.ZP)("/api/users",l.Z,{dedupingInterval:2e3}),{data:k,revalidate:v}=(0,p.ZP)(g?`/api/workspaces/${m}/channels`:null,l.Z),f=(0,a.useCallback)((e=>{e.preventDefault(),r().post(`/api/workspaces/${m}/channels`,{name:o},{withCredentials:!0}).then((()=>{n(!1),v(),d("")})).catch((e=>{console.dir(e),h.Am.error(e.response.data,{position:"bottom-center"})}))}),[o]);return a.createElement(O.Z,{show:e,onCloseModal:t},a.createElement("form",{onSubmit:f},a.createElement(s.__,{id:"channel-label"},a.createElement("span",null,"채널 이름"),a.createElement(s.II,{id:"channel",value:o,onChange:c})),a.createElement(s.zx,{type:"submit"},"생성하기")))},U=({show:e,onCloseModal:t,setShowInviteWorkspaceModal:n})=>{const[o,c,d]=(0,A.Z)(""),{data:m}=(0,p.ZP)("/api/users",l.Z,{dedupingInterval:2e3}),{workspace:u,channel:g}=(0,i.UO)(),{revalidate:b}=(0,p.ZP)(m?`/api/workspaces/${u}/members`:null,l.Z),x=(0,a.useCallback)((e=>{e.preventDefault(),o&&o.trim()&&r().post(`/api/workspaces/${u}/members`,{email:o}).then((()=>{b(),d(""),n(!1)})).catch((e=>{console.dir(e),h.Am.error(e.response.data,{position:"bottom-center"})}))}),[o]);return a.createElement(O.Z,{show:e,onCloseModal:t},a.createElement("form",{onSubmit:x},a.createElement(s.__,null,a.createElement("span",null,"이메일"),a.createElement(s.II,{id:"member",type:"email",value:o,onChange:c})),a.createElement(s.zx,{type:"submit"},"사용자 초대")))};var j=n(9250);const L=(0,g.Z)("button",{target:"e1khdtzc0"})("background:transparent;border:none;width:26px;height:26px;display:inline-flex;justify-content:center;align-items:center;color:white;margin-left:10px;cursor:pointer;",(({collapse:e})=>e&&"\n    & i {\n      transform: none;\n    }\n  "),";"),W=()=>{const{workspace:e}=(0,i.UO)(),{data:t,error:n,revalidate:o,mutate:r}=(0,p.ZP)("/api/users",l.Z,{dedupingInterval:2e3}),{data:s}=(0,p.ZP)(t?`/api/workspaces/${e}/channels`:null,l.Z),[d,m]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{m((e=>!e))}),[]);return a.createElement(a.Fragment,null,a.createElement("h2",null,a.createElement(L,{collapse:d,onClick:u},a.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),a.createElement("span",null,"Channels")),a.createElement("div",null,!d&&(null==s?void 0:s.map((t=>a.createElement(c.OL,{key:t.name,activeClassName:"selected",to:`/workspace/${e}/channel/${t.name}`},a.createElement("span",null,"# ",t.name)))))))};var N=n(2951);const B=()=>{const{workspace:e}=(0,i.UO)(),{data:t,error:n,revalidate:o,mutate:r}=(0,p.ZP)("/api/users",l.Z,{dedupingInterval:2e3}),{data:s}=(0,p.ZP)(t?`/api/workspaces/${e}/members`:null,l.Z),[d,m]=(0,a.useState)(!1),[u,h]=(0,a.useState)([]),[g,b]=(0,N.Z)(e),x=(0,a.useCallback)((()=>{m((e=>!e))}),[]);return(0,a.useEffect)((()=>{console.log("DMList: workspace 바꼈다",e),h([])}),[e]),(0,a.useEffect)((()=>(null==g||g.on("onlineList",(e=>{console.log("DDATA: ",e),h(e)})),()=>{null==g||g.off("onlineList")})),[g]),a.createElement(a.Fragment,null,a.createElement("h2",null,a.createElement(L,{collapse:d,onClick:x},a.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),a.createElement("span",null,"Direct Messages")),a.createElement("div",null,u&&console.log("onlineList: ",u),!d&&(null==s?void 0:s.map((n=>{const l=u.includes(n.id);return console.log("isOnline ? ",l,"onlineList ? ",u,"  memberID: ",n.id),a.createElement(c.OL,{key:n.id,activeClassName:"selected",to:`/workspace/${e}/dm/${n.id}`},a.createElement("span",null,l?"O":"X"),a.createElement("span",null,n.nickname),n.id===(null==t?void 0:t.id)&&a.createElement("span",null," (나)"))})))))},F=(0,u.ZP)((()=>Promise.all([n.e(725),n.e(13),n.e(256)]).then(n.bind(n,5256)))),T=(0,u.ZP)((()=>Promise.all([n.e(725),n.e(13),n.e(94)]).then(n.bind(n,3094)))),X=()=>{var e;const[t,n]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1),[u,g,P]=(0,A.Z)(""),[z,$,L]=(0,A.Z)(""),[X,G]=(0,a.useState)(!1),[H,J]=(0,a.useState)(!1),[K,Q]=(0,a.useState)(!1),[R,V]=(0,a.useState)(!1),{workspace:Y}=(0,i.UO)(),{data:ee,error:te,revalidate:ne,mutate:ae}=(0,p.ZP)("/api/users",l.Z,{dedupingInterval:2e3}),{data:le}=(0,p.ZP)(ee?`/api/workspaces/${Y}/channels`:null,l.Z),[oe,re]=(0,N.Z)(Y);(0,a.useEffect)((()=>{le&&ee&&oe&&(console.log("Socket",oe),oe.emit("login",{id:ee.id,channels:le.map((e=>e.id))}))}),[le,ee,oe]),(0,a.useEffect)((()=>()=>{re()}),[Y,re]);const se=(0,a.useCallback)((()=>{r().post("/api/users/logout",null,{withCredentials:!0}).then((()=>{ae(!1,!1)})).catch((e=>{}))}),[]),ie=(0,a.useCallback)((e=>{e.stopPropagation(),n((e=>!e))}),[]),ce=(0,a.useCallback)((e=>{d(!0)}),[]),pe=(0,a.useCallback)((e=>{e.preventDefault(),u&&u.trim()&&z&&z.trim()&&r().post("/api/workspaces",{workspace:u,url:z},{withCredentials:!0}).then((()=>{ne(),d(!1),P(""),L("")})).catch((e=>{var t;console.dir(e),h.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[u,z]),de=(0,a.useCallback)((()=>{d(!1),J(!1),Q(!1),V(!1)}),[]),me=(0,a.useCallback)((()=>{G((e=>!e))}),[]),ue=(0,a.useCallback)((e=>{J(!0)}),[]),he=(0,a.useCallback)((e=>{Q(!0)}),[]);return ee?void 0===ee?a.createElement("div",null,"로딩 중..."):a.createElement("div",null,a.createElement(x,null,a.createElement(b,null,a.createElement("span",{onClick:ie},a.createElement(w,{src:m().url(ee.email,{s:"20px",d:"retro"}),alt:ee.email}),t&&a.createElement(q,{style:{right:0,top:38},show:t,onCloseModal:ie},a.createElement(k,null,a.createElement("img",{src:m().url(ee.email,{s:"30px",d:"retro"}),alt:ee.email}),a.createElement("div",null,a.createElement("span",{id:"profile-name"},ee.nickname),a.createElement("span",{id:"profile-active"},"Active"))),a.createElement(v,{onClick:se},"로그아웃"))))),a.createElement(f,null,a.createElement(E,null,null==ee||null===(e=ee.Workspaces)||void 0===e?void 0:e.map((e=>a.createElement(c.rU,{key:e.id,to:"/workspace/123/channel/일반"},a.createElement(I,null,e.name.slice(0,1).toUpperCase())))),a.createElement(M,{onClick:ce},"+")),a.createElement(C,null,a.createElement(Z,{onClick:me},"SSlack"),a.createElement(y,null,a.createElement(q,{show:X,onCloseModal:me,style:{top:95,left:80}},a.createElement(_,null,a.createElement("h2",null,"SSlack"),a.createElement("button",{onClick:he},"워크스페이스에 사용자 초대"),a.createElement("button",{onClick:ue},"채널만들기"),a.createElement("button",{onClick:se},"로그아웃"))),a.createElement(W,null),a.createElement(B,null))),a.createElement(S,null,a.createElement(i.rs,null,a.createElement(i.AW,{path:"/workspace/:workspace/channel/:channel",component:F}),a.createElement(i.AW,{path:"/workspace/:workspace/dm/:id",component:T})))),a.createElement(O.Z,{show:o,onCloseModal:de},a.createElement("form",{onSubmit:pe},a.createElement(s.__,{id:"workspace-label"},a.createElement("span",null,"워크스페이스 이름"),a.createElement(s.II,{id:"workspace",value:u,onChange:g})),a.createElement(s.__,{id:"workspace-url-label"},a.createElement("span",null,"워크스페이스 Url"),a.createElement(s.II,{id:"workspace",value:z,onChange:$})),a.createElement(s.zx,{type:"submit"},"생성하기"))),a.createElement(D,{show:H,onCloseModal:de,setShowCreateChannelModal:J}),a.createElement(U,{show:K,onCloseModal:de,setShowInviteWorkspaceModal:Q}),a.createElement(j.Z,{show:R,onCloseModal:de,setShowInviteChannelModal:V})):a.createElement(i.l_,{to:"/login"})}},7020:()=>{}}]);