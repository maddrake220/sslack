(self.webpackChunksslack=self.webpackChunksslack||[]).push([[337],{7337:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>d});var t=l(7294),n=l(9669),c=l.n(n),r=l(4219),s=l(8678),m=l(5977),u=l(3727),o=l(5723),i=l(3564);const d=()=>{const{data:e,error:a}=(0,o.ZP)("/api/users",i.Z),[l,n]=(0,s.Z)(""),[d,p]=(0,s.Z)(""),[E,k]=(0,t.useState)(""),[v,h]=(0,t.useState)(""),[g,w]=(0,t.useState)(!1),[b,C]=(0,t.useState)(""),[_,I]=(0,t.useState)(!1),S=(0,t.useCallback)((e=>{e.preventDefault(),g||(C(""),I(!1),c().post("/api/users",{email:l,nickname:d,password:E}).then((e=>{console.log(e),I(!0)})).catch((e=>{console.log(e.response),C(e.response.data)})).finally((()=>{})))}),[l,d,E,v,g]),f=(0,t.useCallback)((e=>{k(e.target.value),w(e.target.value!==v)}),[v]),j=(0,t.useCallback)((e=>{h(e.target.value),w(e.target.value!==E)}),[E]);return void 0===e?t.createElement("div",null,"로딩 중..."):e?(console.log(e),t.createElement(m.l_,{to:"/workspace/sleact/channel/일반"})):t.createElement("div",{id:"container"},t.createElement(r.h4,null,"SSlack"),t.createElement(r.l0,{onSubmit:S},t.createElement(r.__,{id:"email-label"},t.createElement("span",null,"이메일 주소"),t.createElement("div",null,t.createElement(r.II,{type:"email",id:"email",name:"email",value:l,onChange:n}))),t.createElement(r.__,{id:"nickname-label"},t.createElement("span",null,"닉네임"),t.createElement("div",null,t.createElement(r.II,{type:"text",id:"nickname",name:"nickname",value:d,onChange:p}))),t.createElement(r.__,{id:"password-label"},t.createElement("span",null,"비밀번호"),t.createElement("div",null,t.createElement(r.II,{type:"password",id:"password",name:"password",value:E,onChange:f}))),t.createElement(r.__,{id:"password-check-label"},t.createElement("span",null,"비밀번호 확인"),t.createElement("div",null,t.createElement(r.II,{type:"password",id:"password-check",name:"password-check",value:v,onChange:j})),g&&t.createElement(r.jj,null,"비밀번호가 일치하지 않습니다."),!d&&t.createElement(r.jj,null,"닉네임을 입력해주세요."),b&&t.createElement(r.jj,null,b),_&&t.createElement(r.fB,null,"회원가입 되었습니다! 로그인 해주세요.")),t.createElement(r.zx,{type:"submit"},"회원가입")),t.createElement(r.Ji,null,"이미 회원이신가요? ",t.createElement(u.rU,{to:"/Login"},"로그인 하러 가기")))}}}]);