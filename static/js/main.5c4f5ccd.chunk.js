(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,i,t){},18:function(e,i,t){"use strict";t.r(i);var a=t(1),n=t(0),o=t.n(n),r=t(10),u=t.n(r),l=(t(16),t(7)),c=t(21),s=t(22),d=t(24),m=function(e){var i=e.title,t=e.description;return Object(a.jsx)("div",{className:"row mt-2",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h1",{className:"text-danger",children:i}),Object(a.jsx)("p",{children:t})]})})},p=t(19),b=t(20),j=t(23),x=function(e){var i=e.maxHeight,t=e.children,o=Object(n.useRef)(),r=Object(n.useState)(!0),u=Object(l.a)(r,2),c=u[0],s=u[1];return Object(n.useEffect)((function(){o.current.scrollHeight>i&&s(!1)}),[i]),Object(a.jsxs)(j.a.Text,{as:"div",ref:o,children:[Object(a.jsx)("div",{style:{maxHeight:c?500:i,overflow:"hidden"},children:t}),Object(a.jsx)("br",{}),Object(a.jsx)(d.a,{onClick:function(){return s(!c)},variant:"outline-light",children:c?"Read Less":"Read More"})]})},g=["#f59926","#4aadde","#ab75ad"],h=function(e){var i=e.data,t=e.show;return Object(a.jsx)("div",{style:{color:"white"},children:Object(a.jsx)(p.a,{children:i.map((function(e,i){return i<t?Object(a.jsx)(b.a,{xs:12,md:6,lg:4,children:Object(a.jsx)(j.a,{style:{minWidth:255,width:"100%",backgroundColor:g[i%3],margin:5},children:Object(a.jsxs)(j.a.Body,{children:[Object(a.jsx)(j.a.Subtitle,{className:"mb-2",children:e.date}),Object(a.jsx)(j.a.Title,{style:{height:45},children:e.title}),Object(a.jsx)(x,{maxHeight:170,children:e.description})]})})},e.id):null}))})})},f=[{id:1,title:"Love of learning, art keys to a great year for Gwen",date:"12 Sep, 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:2,title:"Curious mind leads the way to the carer Jill",date:"28 Sep, 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:3,title:"Celebrating our volunteers",date:"12 Sep, 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:4,title:"Love of learning, art keys to a great year for Gwen",date:"12 Sep, 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:5,title:"Love of learning, art keys to a great year for Gwen",date:"12 Sep, 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:6,title:"Love of learning, art keys to a great year for Gwen",date:"12 Sep, 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}];function v(){var e=Object(n.useState)(3),i=Object(l.a)(e,2),t=i[0],o=i[1],r=Object(n.useState)(!1),u=Object(l.a)(r,2),p=u[0],b=u[1];return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(m,{title:"Related Articles",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(a.jsx)(h,{data:f,show:t}),Object(a.jsx)(s.a,{className:"justify-content-md-center",style:{marginTop:40},children:p?Object(a.jsx)(d.a,{variant:"outline-danger",onClick:function(){o(3),b(!1)},children:"Read Less"}):Object(a.jsx)(d.a,{variant:"outline-danger",onClick:function(){o(f.length),b(!0)},children:"Read More"})})]})}var q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(i){var t=i.getCLS,a=i.getFID,n=i.getFCP,o=i.getLCP,r=i.getTTFB;t(e),a(e),n(e),o(e),r(e)}))};t(17);u.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),q()}},[[18,1,2]]]);
//# sourceMappingURL=main.5c4f5ccd.chunk.js.map