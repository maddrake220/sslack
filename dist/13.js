(self.webpackChunksslack=self.webpackChunksslack||[]).push([[13],{2309:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(7294),r=n(8401),o=n(1753);const l=(0,r.Z)("div",{target:"e1pkgxzn5"})({name:"ra6cyy",styles:"display:flex;width:100%;padding:20px;padding-top:0"}),i=(0,r.Z)("form",{target:"e1pkgxzn4"})({name:"33ihw2",styles:"color:rgb(29, 28, 29);font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29)"}),s=(0,r.Z)(o.r,{target:"e1pkgxzn3"})({name:"bka2jr",styles:"font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;width:100%;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}"}),c=(0,r.Z)("div",{target:"e1pkgxzn2"})({name:"13ie2qx",styles:"position:relative;background:rgb(248, 248, 248);height:41px;display:flex;border-top:1px solid rgb(221, 221, 221);align-items:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px"}),p=(0,r.Z)("button",{target:"e1pkgxzn1"})({name:"xrrdm2",styles:"position:absolute;right:5px;top:5px"}),d=(0,r.Z)("button",{target:"e1pkgxzn0"})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}",(({focus:e})=>e&&"\n    background: #1264a3;\n    color: white;\n  "),";");var u=n(4950),m=n(5723),g=n(5977),x=n(3564),h=n(6182),b=n.n(h);const y=({chat:e,onChangeChat:t,onSubmitForm:n,placeholder:r})=>{const{data:h}=(0,m.ZP)("/api/users"),{workspace:y}=(0,g.UO)(),{data:k}=(0,m.ZP)(h?`/api/workspaces/${y}/members`:null,x.Z),f=(0,a.useCallback)((t=>{console.log("CHAT:",e),console.log(t.key),"Enter"===t.key&&(t.shiftKey||(t.preventDefault(),n(t)))}),[n]),E=(0,a.useRef)(null);(0,a.useEffect)((()=>{E.current&&(0,u.Z)(E.current)}),[]);const v=(0,a.useCallback)(((e,t,n,r,o)=>{if(k)return a.createElement(d,{focus:o},a.createElement("img",{src:b().url(k[r].email,{s:"20px",d:"retro"}),alt:k[r].nickname}),a.createElement("span",null,n))}),[k]);return a.createElement(l,null,a.createElement(i,{onSubmit:n},a.createElement(s,{id:"editor-chat",value:e,onChange:t,onKeyPress:f,placeholder:r,inputRef:E,allowSuggestionsAboveCursor:!0},a.createElement(o.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==k?void 0:k.map((e=>({id:e.id,display:e.nickname}))))||[],renderSuggestion:v})),a.createElement(c,null,a.createElement(p,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=e&&e.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=e&&e.trim())},a.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(7294),r=n(8401);const o=(0,r.Z)("div",{target:"e1qx5lyk2"})({name:"1op36e9",styles:"width:100%;display:flex;flex:1"}),l=(0,r.Z)("section",{target:"e1qx5lyk1"})({name:"10zp55f",styles:"margin-top:20px;border-top:1px solid #eee"}),i=(0,r.Z)("div",{target:"e1qx5lyk0"})({name:"16cu5ak",styles:"display:flex;justify-content:center;flex:1;width:100%;position:sticky;top:14px;& button{font-weight:bold;font-size:13px;height:28px;line-height:27px;padding:0 16px;z-index:2;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 1px 3px 0 rgba(0, 0, 0, 0.08);border-radius:24px;position:relative;top:-13px;background:white;border:none;outline:none;}"});var s=n(1298);const c=(0,r.Z)("div",{target:"ew2o3iv0"})({name:"1gm3yh0",styles:"display:flex;padding:8px 20px;&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}"});var p=n(6182),d=n.n(p),u=n(7484),m=n.n(u),g=n(3727),x=n(8817);const h=({data:e})=>{const t="Sender"in e?e.Sender:e.User,n=(0,a.useMemo)((()=>(0,x.Z)({input:e.content,pattern:/@\[(.+?)\]\((\d+?)\)|[\n]/g,decorator(e,t){const n=e.match(/@\[(.+?)\]\((\d+?)\)/);return console.log(n),n?a.createElement(g.rU,{key:e+t,to:`${n[2]}`},"@",n[1]):a.createElement("br",{key:t})}})),[e.content]);return a.createElement(c,null,a.createElement("div",{className:"chat-img"},a.createElement("img",{src:d().url(t.email,{s:"36px",d:"retro"}),alt:t.nickname})),a.createElement("div",{className:"chat-text"},a.createElement("div",{className:"chat-user"},a.createElement("b",null,t.nickname),a.createElement("span",null,m()(e.createdAt).format("h:mm A"))),a.createElement("p",null,n)))},b=(0,a.memo)(h),y=(0,a.forwardRef)((({chatSections:e,setSize:t,isReachingEnd:n},r)=>{const c=(0,a.useCallback)((e=>{0!==e.scrollTop||n||t((e=>e+1)).then((()=>{const t=null==r?void 0:r.current;t&&t.scrollTop(t.getScrollHeight()-e.scrollHeight)}))}),[]);return a.createElement(o,null,a.createElement(s.$B,{autoHide:!0,ref:r,onScrollFrame:c},Object.entries(e).map((([t,n])=>(console.log("chatSections ==> ",e),a.createElement(l,{className:`section-${t}`,key:t},a.createElement(i,null,a.createElement("button",null,t)),n.map((e=>a.createElement(b,{key:e.id,data:e})))))))))}))},8667:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7484),r=n.n(a);function o(e){const t={};return e.forEach((e=>{const n=r()(e.createdAt).format("YYYY-MM-DD");Array.isArray(t[n])?t[n].push(e):t[n]=[e]})),t}}}]);