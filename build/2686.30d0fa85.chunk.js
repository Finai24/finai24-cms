"use strict";(self.webpackChunkfinai24_cms=self.webpackChunkfinai24_cms||[]).push([[2686],{77452:(W,M,_)=>{_.d(M,{S:()=>v});var s=_(92132),P=_(90151),a=_(68074),n=_(79739),d=_(83997),h=_(30893),A=_(54894),C=_(71389),D=_(79793);const v=({providers:E,displayAllProviders:r})=>{const{formatMessage:B}=(0,A.A)();return r?(0,s.jsx)(P.x,{gap:4,children:E.map(t=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(O,{provider:t})},t.uid))}):E.length>2&&!r?(0,s.jsxs)(P.x,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(O,{provider:t})},t.uid)),(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(n.m,{label:B({id:"global.see-more"}),children:(0,s.jsx)(l,{as:C.N_,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(i,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(O,{provider:t},t.uid))})},i=(0,D.Ay)(d.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,O=({provider:E})=>(0,s.jsx)(n.m,{label:E.displayName,children:(0,s.jsx)(l,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.o,{children:E.displayName})})}),l=D.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},92686:(W,M,_)=>{_.r(M),_.d(M,{FORMS:()=>U});var s=_(92132),P=_(38413),a=_(94061),n=_(30893),d=_(83997),h=_(43064),A=_(85963),C=_(48653),D=_(21610),v=_(54894),i=_(17703),O=_(71389),l=_(79793),E=_(93549),r=_(77452),B=_(2129),t=_(15126),g=_(63299),x=_(67014),j=_(59080),c=_(79275),f=_(14718),y=_(21272),S=_(82437),$=_(61535),N=_(5790),F=_(12083),u=_(35223),z=_(5409),G=_(74930),J=_(2600),Z=_(48940),H=_(41286),Q=_(56336),V=_(13426),X=_(84624),Y=_(77965),e=_(54257),p=_(71210),k=_(51187),w=_(39404),b=_(58692),q=_(501),__=_(57646),s_=_(23120),E_=_(44414),t_=_(25962),a_=_(14664),n_=_(42588),d_=_(90325),o_=_(62785),O_=_(87443),M_=_(41032),P_=_(22957),D_=_(93179),i_=_(73055),l_=_(15747),r_=_(85306),h_=_(26509),A_=_(32058),C_=_(81185),v_=_(82261);const T=()=>{const{push:I}=(0,i.W6)(),{formatMessage:o}=(0,v.A)(),{isLoading:m,data:L=[]}=(0,E.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),K=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!m&&L.length===0?(0,s.jsx)(i.rd,{to:"/auth/login"}):(0,s.jsx)(E.U,{children:(0,s.jsxs)(P.g,{children:[(0,s.jsxs)(E.h,{children:[(0,s.jsxs)(E.C,{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(a.a,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(n.o,{as:"h1",variant:"alpha",children:o({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(a.a,{paddingBottom:7,children:(0,s.jsx)(n.o,{variant:"epsilon",textColor:"neutral600",children:o({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.s,{direction:"column",alignItems:"stretch",gap:7,children:[m?(0,s.jsx)(d.s,{justifyContent:"center",children:(0,s.jsx)(h.a,{children:o({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(r.S,{providers:L}),(0,s.jsxs)(d.s,{children:[(0,s.jsx)(R,{}),(0,s.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(n.o,{variant:"sigma",textColor:"neutral600",children:o({id:"or"})})}),(0,s.jsx)(R,{})]}),(0,s.jsx)(A.$,{fullWidth:!0,size:"L",onClick:K,children:o({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.s,{justifyContent:"center",children:(0,s.jsx)(a.a,{paddingTop:4,children:(0,s.jsx)(D.N,{as:O.k2,to:"/auth/forgot-password",children:(0,s.jsx)(n.o,{variant:"pi",children:o({id:"Auth.link.forgot-password"})})})})})]})})},R=(0,l.Ay)(C.c)`
  flex: 1;
`,U={providers:T}}}]);
