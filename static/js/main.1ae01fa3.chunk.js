(this["webpackJsonpdsc-slop-website"]=this["webpackJsonpdsc-slop-website"]||[]).push([[0],{108:function(e,a,t){e.exports=t(141)},140:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=t(21),i=t(189),m=t(197),s=t(198),u=t(199),E=t(99),p=t(188),d=t(200),h=t(203),g=t(204),f=t(201),b=t(202),v=t(81),y=t.n(v),x=t(82),w=t(83),j=t(98),S=t(97),N=t(183),O=t(187);function k(e){return r.a.createElement(N.a,{className:"w-40 xs:w-24 mx-2",variant:"outlined"},r.a.createElement(O.a,{className:"text-center"},r.a.createElement(p.a,{className:"text-white text-2xl xs:text-sm font-sans"},e.children)))}var C=function(e){var a=e.days,t=e.hours,n=e.minutes,l=e.seconds;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"text-center text-white font-sans text-3xl"},"Coding period begins in \u23f3"),r.a.createElement("div",{className:"flex w-full justify-center mt-4"},r.a.createElement(k,null,String(a).padStart(2,0),r.a.createElement("br",null)," Days"),r.a.createElement(k,null,String(t).padStart(2,0),r.a.createElement("br",null)," Hours"),r.a.createElement(k,null,String(n).padStart(2,0),r.a.createElement("br",null)," Minutes"),r.a.createElement(k,null,String(l).padStart(2,0),r.a.createElement("br",null)," Seconds")))},P=function(e){Object(j.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(x.a)(this,t),(n=a.call(this,e)).state={now:new Date},n}return Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){e.setState({now:new Date})}),this.props.intervalDelay)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.now,a=this.props.toDate-e;return this.props.children({days:Math.floor(a/1e3/60/60/24%30),hours:Math.floor(a/1e3/60/60%24),minutes:Math.floor(a/1e3/60%60),seconds:Math.floor(a/1e3%60),milliseconds:a,asDays:Math.floor(a/1e3/60/60/24)})}}]),t}(r.a.Component);function I(e){return r.a.createElement(P,{toDate:e.toDate},(function(e){return r.a.createElement(C,{days:e.days,asDays:e.asDays,hours:e.hours,minutes:e.minutes,seconds:e.seconds})}))}P.defaultProps={intervalDelay:1e3};var D=t(190),A=t(191),z=t(193),M=t(195),B=t(196),T=t(192),H=t(194),L=t(56),F=t.n(L),G=t(57),R=t.n(G),W=t(58),q=t.n(W),U=t(59),_=t.n(U),J=Object(i.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function K(){var e=J();return r.a.createElement(D.a,{align:"alternate"},r.a.createElement(A.a,null,r.a.createElement(T.a,null,r.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"9:30 am")),r.a.createElement(z.a,null,r.a.createElement(H.a,null,r.a.createElement(F.a,null)),r.a.createElement(M.a,null)),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Eat"),r.a.createElement(p.a,null,"Because you need strength")))),r.a.createElement(A.a,null,r.a.createElement(T.a,null,r.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"10:00 am")),r.a.createElement(z.a,null,r.a.createElement(H.a,{color:"primary"},r.a.createElement(R.a,null)),r.a.createElement(M.a,null)),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Code"),r.a.createElement(p.a,null,"Because it's awesome!")))),r.a.createElement(A.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,{color:"primary",variant:"outlined"},r.a.createElement(q.a,null)),r.a.createElement(M.a,{className:e.secondaryTail})),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Sleep"),r.a.createElement(p.a,null,"Because you need rest")))),r.a.createElement(A.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,{color:"secondary"},r.a.createElement(_.a,null)),r.a.createElement(M.a,{className:e.secondaryTail})),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Repeat"),r.a.createElement(p.a,null,"Because this is the life you love!")))),r.a.createElement(A.a,null,r.a.createElement(T.a,null,r.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"9:30 am")),r.a.createElement(z.a,null,r.a.createElement(H.a,null,r.a.createElement(F.a,null)),r.a.createElement(M.a,null)),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Eat"),r.a.createElement(p.a,null,"Because you need strength")))),r.a.createElement(A.a,null,r.a.createElement(T.a,null,r.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"10:00 am")),r.a.createElement(z.a,null,r.a.createElement(H.a,{color:"primary"},r.a.createElement(R.a,null)),r.a.createElement(M.a,null)),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Code"),r.a.createElement(p.a,null,"Because it's awesome!")))),r.a.createElement(A.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,{color:"primary",variant:"outlined"},r.a.createElement(q.a,null)),r.a.createElement(M.a,{className:e.secondaryTail})),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Sleep"),r.a.createElement(p.a,null,"Because you need rest")))),r.a.createElement(A.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,{color:"secondary"},r.a.createElement(_.a,null))),r.a.createElement(B.a,null,r.a.createElement(E.a,{elevation:3,className:e.paper},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Repeat"),r.a.createElement(p.a,null,"Because this is the life you love!")))))}var Y=Object(i.a)((function(e){return{paper:{backgroundColor:"#424242",padding:e.spacing(4),marginTop:e.spacing(2),marginBottom:e.spacing(2),textAlign:"center",minHeight:"25%"},button:{marginRight:e.spacing(3),marginTop:e.spacing(2)},formlink:{padding:e.spacing(2),textAlign:"center",minHeight:e.spacing(32)},typo:{textAlign:"center",margin:e.spacing(4),color:"grey"},image:{height:"660px !important"},textover:{width:"100%",height:"100%",position:"absolute",textAlign:"center",top:"40%",left:0,zIndex:10,color:"white"},graphic:{}}}));function V(){var e=Y();return r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(s.a,{component:"img",alt:"Contemplative Reptile",className:"min-h-screen",image:y.a,title:"Contemplative Reptile"})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(I,{className:"py-12",toDate:new Date(2020,9,20)})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(E.a,{variant:"outlined",className:e.paper},r.a.createElement(m.a,{container:!0,direction:"column"},r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"h4",align:"left"},r.a.createElement("b",null,"What is SLoP ?"))),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"body1",align:"left"},"Semester Long Projects or SLoP is an initiative by Developer Student Club, DA-IICT exclusively for students of DA-IICT who are new to open source software development to get started with open source contributions.")),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"body1",align:"left"},"It\u2019s modeled to be similar but smaller Google Summer of Code (GSoC), which is global that matches students up with open source, free software and technology-related organizations to write code and get paid for the same. Similarly, SLoP is aimed at introducing new students in the area and helps them gain confidence")),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,null," ")),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,null," ")),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"h4",align:"left"},r.a.createElement("b",null,"How it Works ?"))),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"body1",align:"left"},"Participants can apply for the program either as a student or as a mentor. Mentors are selected through a selection process. The selected mentors propose projects, the best of which are chosen to be included in the program. Students work on these projects in their winter vacations. The mentors review the pull requests and the overall work on their project by various contributors throughout the coding period of the program. At the end of the coding period, the students are compared on the basis of most contributions.")),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"body1",align:"left"},"For more info, please download the student or mentor manual")),r.a.createElement(m.a,{item:!0,container:!0,direction:"row",justify:"flex-start"},r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(f.a,null),href:"https://drive.google.com/file/d/1gEF-U2lV7GssAVGnJmT4STt9NHIHPu-E/view"},"Student Manual")),r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(b.a,null),href:"https://drive.google.com/file/d/1rG00muN3dI10oKcGoOWB2r5pHnszuwCs/view?usp=sharing"},"Mentor Manual"))))))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(m.a,{container:!0,direction:"row",justify:"space-evenly",spacing:3,alignContent:"center"},r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(E.a,{className:e.formlink},r.a.createElement(p.a,{variant:"h6"},r.a.createElement("b",null," Are You Student ? ")),r.a.createElement(p.a,{variant:"body2",className:e.typo,color:"textSecondary"},"If you are new to the open source world and You want to exlplore things, new techs. or you are just getting started, Don't worry, headout here and fill out the student form. We'll guide you throughout whole project, and you can win exciting prizes."),r.a.createElement(h.a,{variant:"extended",color:"secondary"},r.a.createElement(f.a,{style:{margin:8}}),"Be A Winner !"))),r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(E.a,{className:e.formlink},r.a.createElement(p.a,{variant:"h6"},r.a.createElement("b",null," Are You Mentor ? ")),r.a.createElement(p.a,{variant:"body2",className:e.typo,color:"textSecondary"},"If you are confident, knolwgeble enough and You can teach other's as well, then fill out the Mentor's Form. Even if you know the techs, still you can learn to be better and can help others. Teaching always makes you push to Learning."),r.a.createElement(h.a,{variant:"extended",color:"secondary"},r.a.createElement(b.a,{style:{margin:8}}),"Be A Techer !")))))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(E.a,{variant:"outlined",className:e.paper,style:{backgroundColor:"#424242"}},r.a.createElement(p.a,{variant:"h5"},r.a.createElement("b",null,"Timeline")),r.a.createElement(g.a,{variant:"middle"}),r.a.createElement(K,null)))))}var X=t(60),Z=t.n(X),Q=t(88),$=t(15),ee=t(31),ae=t.n(ee),te=t(209),ne=t(4),re=t(24),le=t(210),ce=t(211),oe=t(213),ie=t(222),me=t(205),se=t(206),ue=t(207),Ee=t(62),pe=t.n(Ee),de=t(64),he=t.n(de),ge=t(63),fe=t.n(ge),be=t(61),ve=t.n(be),ye=t(208),xe=t(223),we=Object(ne.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(me.a),je=Object(ne.a)((function(e){return{body:{fontSize:16}}}))(se.a),Se=function(e){var a=e.rank,t=e.username,n=e.points,l=e.pull_requests;return r.a.createElement(we,null,r.a.createElement(je,{align:"center",component:"th",scope:"row"},a),r.a.createElement(je,{align:"center"},t),r.a.createElement(je,{align:"center"},n),r.a.createElement(je,{align:"center"},l))},Ne=t(212),Oe=(Object(ne.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},body:{fontSize:14}}}))(se.a),Object(i.a)({table:{minWidth:350}})),ke=Object(i.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function Ce(e){var a=ke(),t=Object(re.a)(),n=e.count,l=e.page,c=e.rowsPerPage,o=e.onChangePage;return r.a.createElement("div",{className:a.root},r.a.createElement(ue.a,{onClick:function(e){o(e,0)},disabled:0===l,"aria-label":"first page"},"rtl"===t.direction?r.a.createElement(ve.a,null):r.a.createElement(pe.a,null)),r.a.createElement(ue.a,{onClick:function(e){o(e,l-1)},disabled:0===l,"aria-label":"previous page"},"rtl"===t.direction?r.a.createElement(fe.a,null):r.a.createElement(he.a,null)),r.a.createElement(ue.a,{onClick:function(e){o(e,l+1)},disabled:l>=Math.ceil(n/c)-1,"aria-label":"next page"},"rtl"===t.direction?r.a.createElement(he.a,null):r.a.createElement(fe.a,null)),r.a.createElement(ue.a,{onClick:function(e){o(e,Math.max(0,Math.ceil(n/c)-1))},disabled:l>=Math.ceil(n/c)-1,"aria-label":"last page"},"rtl"===t.direction?r.a.createElement(pe.a,null):r.a.createElement(ve.a,null)))}var Pe=function(){var e=Object(n.useState)([]),a=Object($.a)(e,2),t=a[0],l=a[1],c=r.a.useState(0),o=Object($.a)(c,2),i=o[0],s=o[1],u=r.a.useState(8),p=Object($.a)(u,2),d=p[0],h=p[1],g=r.a.useState(!1),f=Object($.a)(g,2),b=f[0],v=f[1];Object(n.useEffect)((function(){(function(){var e=Object(Q.a)(Z.a.mark((function e(){var a,t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("https://script.google.com/macros/s/AKfycbxAfEhHRFKiwJ05oG1Zw4vF5sXqdnXKm2d6NP3QrF7C3oIhbxY/exec");case 2:a=e.sent,t=a.data.user,l(t),v(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=Oe();return!1===b?r.a.createElement(m.a,{container:!0,spacing:3,justify:"center",alignItems:"center",style:{height:"100vh",textAlign:"center"}},r.a.createElement(m.a,{item:!0},r.a.createElement(ye.a,{size:100}))):r.a.createElement(m.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12,sm:12},r.a.createElement(xe.a,{in:!0},r.a.createElement(te.a,{component:E.a},r.a.createElement(le.a,{className:y.table,"aria-label":"customized table"},r.a.createElement(ce.a,null,r.a.createElement(me.a,null,r.a.createElement(se.a,{align:"center"},"Rank"),r.a.createElement(se.a,{align:"center"},"Username"),r.a.createElement(se.a,{align:"center"},"Points"),r.a.createElement(se.a,{align:"center"},"Pull Requests"))),r.a.createElement(Ne.a,null,(d>0?t.slice(i*d,i*d+d):t).map((function(e,a){return r.a.createElement(Se,{rank:i*d+a+1,username:e.username,points:e.points,pull_requests:e.pull_request,key:e.username})}))),r.a.createElement(oe.a,null,r.a.createElement(me.a,null,r.a.createElement(ie.a,{rowsPerPageOptions:[8,20,30,{label:"All",value:-1}],colSpan:3,count:t.length,rowsPerPage:d,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,a){console.log(a),s(a)},onChangeRowsPerPage:function(e){h(parseInt(e.target.value,10)),s(0)},ActionsComponent:Ce}))))))))},Ie=function(){return r.a.createElement(Pe,null)},De=t(215),Ae=t(216),ze=t(89),Me=t.n(ze),Be=Object(i.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(2),textAlign:"center",minHeight:"25%"}}}));function Te(e){e.id;var a=e.mentors,t=e.url,l=Be(),c=Object(n.useState)(!0),o=Object($.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)({projecttitle:"",description:"",lastUpdated:"",contributors:""}),d=Object($.a)(u,2),h=d[0],g=d[1],f=t.replace("github.com","api.github.com/repos");return Object(n.useEffect)((function(){ae.a.get(f).then((function(e){var a=e.data,t={projecttitle:a.name,description:a.description?a.description:"----- No Description -----",lastUpdated:a.updated_at,contributors:a.contributors_url};g(t),s(!1)}))}),[f]),i?r.a.createElement(E.a,{variant:"outlined",className:l.paper},r.a.createElement(m.a,{container:!0,spacing:2,justify:"center",alignItems:"center",style:{height:"25vh",textAlign:"center"}},r.a.createElement(m.a,{item:!0},r.a.createElement(ye.a,{size:50})))):r.a.createElement(E.a,{variant:"outlined",className:l.paper},r.a.createElement(m.a,{container:!0,direction:"column",spacing:1},r.a.createElement(m.a,{item:!0,container:!0,direction:"row"},r.a.createElement(ue.a,{href:t,"aria-label":"Github",size:"small",style:{marginRight:8}},r.a.createElement(De.a,{size:"small"})),r.a.createElement(p.a,{variant:"h6",color:"textPrimary",align:"left"},h.projecttitle)),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"body2",color:"textSecondary",align:"left",style:{height:"40px",overflow:"hidden",textOverflow:"ellipsis"}},h.description)),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle2",color:"textPrimary",align:"left"},"Mentors: ".concat(a))),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle2",color:"textSecondary",align:"left"},"Last Updated: ".concat(Me()(h.lastUpdated).fromNow()))),r.a.createElement(m.a,{item:!0,container:!0,direction:"row-reverse"},r.a.createElement(ue.a,{href:h.contributors.replace("api.github.com/repos","github.com"),"aria-label":"Contributors",size:"small"},r.a.createElement(Ae.a,null)))))}function He(){var e=Object(n.useState)([]),a=Object($.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),o=Object($.a)(c,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){ae.a.get("https://script.google.com/macros/s/AKfycbw33V3utIboH-9H-S-dZj_zL25_CaHH4-1cyBz1IognJmONis9r/exec").then((function(e){var a=e.data;l(a.projects),s(!1)}))}),[]),i?r.a.createElement(m.a,{container:!0,spacing:3,justify:"center",alignItems:"center",style:{height:"100vh",textAlign:"center"}},r.a.createElement(m.a,{item:!0},r.a.createElement(ye.a,{size:100}))):r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(xe.a,{in:!0},r.a.createElement(m.a,{container:!0},t.map((function(e,a){return""!==e.project?r.a.createElement(m.a,{key:a,item:!0,xs:12,sm:12,md:6},r.a.createElement(Te,{id:a,mentors:e.mentors,url:e.url})):null}))))))}var Le=t(65),Fe=t(217),Ge=t(214),Re=t(224),We=t(96),qe=t(90),Ue=t.n(qe),_e=t(92),Je=t.n(_e),Ke=t(91),Ye=t.n(Ke),Ve=t(93),Xe=t.n(Ve),Ze=t(94),Qe=t.n(Ze),$e=Object(i.a)((function(e){return{grow:{width:"100%",flexGrow:1,marginBottom:"1px","& a":{color:"inherit",textDecoration:"none"}},menu:{"& a":{color:"inherit",textDecoration:"none"}},menuButton:{paddingRight:e.spacing(2)},title:{marginLeft:8},logo:{display:"flex",alignItems:"center"},sectionDesktop:Object(Le.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Le.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ea(){var e=$e(),a=r.a.useState(null),t=Object($.a)(a,2),n=(t[0],t[1]),l=r.a.useState(null),c=Object($.a)(l,2),i=c[0],m=c[1],s=Boolean(i),u=function(){m(null)},E=r.a.createElement(We.a,{className:e.menu,anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:u},r.a.createElement(o.a,{to:"/"},r.a.createElement(Re.a,null,r.a.createElement(ue.a,{color:"inherit"},r.a.createElement(Ue.a,null)),r.a.createElement("p",null,"Home"))),r.a.createElement(o.a,{to:"leaderboard"},r.a.createElement(Re.a,null,r.a.createElement(ue.a,{color:"inherit"},r.a.createElement(Ye.a,null)),r.a.createElement("p",null,"Leaderboard"))),r.a.createElement(o.a,{to:"projects"},r.a.createElement(Re.a,{onClick:function(e){n(e.currentTarget)}},r.a.createElement(ue.a,{color:"inherit"},r.a.createElement(Je.a,null)),r.a.createElement("p",null,"Projects"))));return r.a.createElement("div",{className:e.grow},r.a.createElement(Fe.a,{position:"static",color:"inherit"},r.a.createElement(Ge.a,null,r.a.createElement(o.a,{to:"/"},r.a.createElement("div",{className:e.logo},r.a.createElement(Xe.a,{color:"primary"}),r.a.createElement(p.a,{className:e.title,variant:"h6",noWrap:!0,color:"textPrimary"},"Semester Long Projects"))),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(o.a,{to:"/"},r.a.createElement(ue.a,{color:"inherit"},r.a.createElement(p.a,{color:"textPrimary"},"Home"))),r.a.createElement(o.a,{to:"/leaderboard"},r.a.createElement(ue.a,{color:"inherit"},r.a.createElement(p.a,{color:"textPrimary"},"Leaderboard"))),r.a.createElement(o.a,{to:"/projects"},r.a.createElement(ue.a,{edge:"end",color:"inherit"},r.a.createElement(p.a,{color:"textPrimary"},"Projects")))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(ue.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement(Qe.a,{color:"primary"}))))),E)}var aa=t(218),ta=t(219),na=t(220),ra=Object(i.a)((function(e){return{paper:{padding:e.spacing(4),position:"static",flexGrow:1,textAlign:"center",minHeight:"25%",bottom:0,left:0,right:0}}}));function la(){var e=ra();return r.a.createElement(m.a,{container:!0},r.a.createElement(E.a,{variant:"outlined",className:e.paper},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"body2",style:{marginBottom:16}}," ","\xa9 SLoP, DAIICT-Gandhinagar, 2020"," ")),r.a.createElement(m.a,{item:!0,container:!0,direction:"row",justify:"center",spacing:2},r.a.createElement(m.a,{item:!0},r.a.createElement(h.a,{size:"medium","aria-label":"mail",color:"secondary"},r.a.createElement(aa.a,null))),r.a.createElement(m.a,{item:!0},r.a.createElement(h.a,{size:"medium","aria-label":"github",color:"primary"},r.a.createElement(De.a,null))),r.a.createElement(m.a,{item:!0},r.a.createElement(h.a,{size:"medium","aria-label":"insta",color:"secondary"},r.a.createElement(ta.a,null))),r.a.createElement(m.a,{item:!0},r.a.createElement(h.a,{size:"medium","aria-label":"twitter",color:"primary"},r.a.createElement(na.a,null))))))}var ca=t(95),oa=t(221),ia=(t(140),function(){var e=Object(ca.a)({palette:{type:"dark",primary:{main:"#F5CB5C",light:"#F5CB5C",dark:"#F5CB5C"},secondary:{main:"#f48fb1",light:"#f48fb1",dark:"#f48fb1"},background:{paper:"#333533",default:"#333533"},text:{primary:"#ffff",secondary:"#bdbdbd"}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(oa.a,{theme:e},r.a.createElement(ea,null),r.a.createElement(o.b,null,r.a.createElement(V,{path:"/"}),r.a.createElement(Ie,{path:"/leaderboard"}),r.a.createElement(He,{path:"/projects"})),r.a.createElement(la,null)))});c.a.render(r.a.createElement(ia,null),document.querySelector("#root"))},81:function(e,a,t){e.exports=t.p+"static/media/bg.860446a5.png"}},[[108,1,2]]]);
//# sourceMappingURL=main.1ae01fa3.chunk.js.map