(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){e.exports=n(248)},182:function(e,t,n){},190:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){},195:function(e,t){},247:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=n(17),l=n(18),s=n(20),u=n(19),p=n(21),f=(n(182),n(289)),m=n(281),d=n(294),b=n(283),h=n(291),x=n(171),v=n(288),g=n(290),j=n(80),O=n.n(j),E=n(23),y=n(64),w=function(e){return 0===e.pageCount},P=n(172),k=n(26),C=n.n(k),T=n(52),D=n(31),I=n(30),R=n.n(I),A=new RegExp("^([0-9]+)-([0-9]+)$"),z=function(e){return A.test(e)},N=function(e){var t=A.exec(e);return[+t[1],+t[2]]},$=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,a){return t+t+n+n+a+a});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);function n(e){return parseInt(e,16)/255}return t?Object(D.rgb)(n(t[1]),n(t[2]),n(t[3])):Object(D.rgb)(0,0,0)};function S(){return(S=Object(T.a)(C.a.mark(function e(t,n){var a,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.PDFDocument.load(t.data);case 2:return(a=e.sent).insertPage(n),e.next=6,a.save();case 6:return r=e.sent,e.abrupt("return",R()(t,{data:{$set:r},pageCount:{$set:t.pageCount+1},selectedPage:{$set:n}}));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(e,t){return V.apply(this,arguments)}function V(){return(V=Object(T.a)(C.a.mark(function e(t,n){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t,[n]));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e,t){return W.apply(this,arguments)}function W(){return(W=Object(T.a)(C.a.mark(function e(t,n){var a,r,c,o,i,l,s,u;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.PDFDocument.load(t.data);case 2:for(a=e.sent,r=!0,c=!1,o=void 0,e.prev=6,i=n.reverse()[Symbol.iterator]();!(r=(l=i.next()).done);r=!0)s=l.value,a.removePage(s);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),c=!0,o=e.t0;case 14:e.prev=14,e.prev=15,r||null==i.return||i.return();case 17:if(e.prev=17,!c){e.next=20;break}throw o;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return e.next=24,a.save();case 24:return u=e.sent,e.abrupt("return",{data:u,pageCount:t.pageCount-n.length,selectedPage:t.selectedPage});case 26:case"end":return e.stop()}},e,null,[[6,10,14,22],[15,,17,21]])}))).apply(this,arguments)}function X(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(T.a)(C.a.mark(function e(t){var n,a,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.PDFDocument.load(t);case 2:return n=e.sent,a=n.getPageCount(),e.next=6,n.save();case 6:return r=e.sent,e.abrupt("return",{data:r,pageCount:a,selectedPage:0});case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function B(e,t){return M.apply(this,arguments)}function M(){return(M=Object(T.a)(C.a.mark(function e(t,n){var a,r,c,o,i,l,s,u,p,f;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!w(t)){e.next=2;break}return e.abrupt("return",n);case 2:return e.next=4,D.PDFDocument.load(t.data);case 4:return a=e.sent,e.next=7,D.PDFDocument.load(n.data);case 7:return r=e.sent,e.next=10,a.copyPages(r,r.getPageIndices());case 10:for(c=e.sent,o=!0,i=!1,l=void 0,e.prev=14,s=c[Symbol.iterator]();!(o=(u=s.next()).done);o=!0)p=u.value,a.addPage(p);e.next=22;break;case 18:e.prev=18,e.t0=e.catch(14),i=!0,l=e.t0;case 22:e.prev=22,e.prev=23,o||null==s.return||s.return();case 25:if(e.prev=25,!i){e.next=28;break}throw l;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.next=32,a.save();case 32:return f=e.sent,e.abrupt("return",{data:f,pageCount:t.pageCount+n.pageCount,selectedPage:t.selectedPage});case 34:case"end":return e.stop()}},e,null,[[14,18,22,30],[23,,25,29]])}))).apply(this,arguments)}function U(){return(U=Object(T.a)(C.a.mark(function e(t,n){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(t).then(function(e){return B(n,e)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(){return(_=Object(T.a)(C.a.mark(function e(t,n){var a,r,c,o,i,l,s,u,p;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.PDFDocument.load(t.data);case 2:return a=e.sent,r=a.getPage(t.selectedPage),c=n.color,o=n.rotate,i=n.size,l=n.x,s=n.y,u=n.text,r.drawText(u,{x:l,y:s,rotate:Object(D.degrees)(o),size:i,color:$(c),lineHeight:i}),e.next=8,a.save();case 8:return p=e.sent,e.abrupt("return",R()(t,{data:{$set:p}}));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function H(){return(H=Object(T.a)(C.a.mark(function e(t,n){var a,r,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.PDFDocument.load(t.data);case 2:return a=e.sent,(r=a.getPage(t.selectedPage)).setRotation(Object(D.degrees)(r.getRotation().angle+n)),e.next=7,a.save();case 7:return c=e.sent,e.abrupt("return",R()(t,{data:{$set:c}}));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var J=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).read=function(e){var t=e[0],a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var e=a.result;null!=e&&function(e,t){return U.apply(this,arguments)}(e,n.props.pdf).then(function(e){return n.props.load(e)})},a.readAsArrayBuffer(t)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{onDrop:function(t){return e.read(t)},accept:".pdf",multiple:!1},function(e){var n=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",n({className:t.dropzone}),r.a.createElement("input",a()),r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))}))}}]),t}(a.PureComponent),G=n(295),q={load:"pdf/load",selectPage:"pdf/select",changeVersion:"pdf/previousVersion"},K=Object(G.a)(q.load),Q=Object(G.a)(q.selectPage),Z=Object(G.a)(q.changeVersion),ee=n(297),te=n(10),ne=function(e){return e.pdf},ae=function(e){return ne(e).versions[ne(e).position]},re=function(e){return ne(e).position>0},ce=function(e){return ne(e).position<ne(e).versions.length-1},oe=function(e){return ae(e).pageCount},ie=function(e){return ae(e).selectedPage},le=Object(te.a)(function(e){return Object(ee.a)({dropzone:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:"2px",borderRadius:"2px",borderColor:e.palette.secondary.main,borderStyle:"dashed",backgroundColor:"#fafafa",color:e.palette.secondary.main,outline:"none"}})},{withTheme:!0})(Object(E.b)(function(e){return{pdf:ae(e)}},function(e){return{load:function(t){return e(K(t))}}})(J)),se=n(249),ue=n(98),pe=n.n(ue),fe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).selectPage=function(e){return n.props.selectPage(n.props.index)},n.removePage=function(e){e.stopPropagation(),F(n.props.pdf,n.props.index).then(n.props.load)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.index,n=e.classes,a=e.scale,c=e.selected,o=e.pageCount;return r.a.createElement("div",{onClick:this.selectPage,className:c?n.selected:n.main},r.a.createElement("div",{className:n.top},r.a.createElement("div",{className:n.center},(t+1).toLocaleString(),"/",o.toLocaleString()),r.a.createElement(se.a,{"aria-label":"delete",className:n.right,onClick:this.removePage},r.a.createElement(pe.a,{fontSize:"small"}))),r.a.createElement(y.Page,{className:n.page,scale:a,width:595,pageIndex:t,renderAnnotationLayer:!1}))}}]),t}(a.PureComponent),me=Object(te.a)(function(e){return Object(ee.a)({main:{border:"1px solid ".concat(e.palette.secondary.main),padding:10,margin:1},selected:{border:"1px solid ".concat(e.palette.primary.main),padding:10,margin:1},page:{"& > canvas":{border:"1px solid ".concat(e.palette.secondary.main)},margin:5},top:{display:"flex",justifyContent:"space-between"},center:{flex:1,textAlign:"center"}})},{withTheme:!0})(Object(E.b)(function(e){return{selectedPage:ie(e),pageCount:oe(e),pdf:ae(e)}},function(e){return{selectPage:function(t){return e(Q(t))},load:function(t){return e(K(t))}}})(fe)),de=n(160),be=n.n(de),he=n(161),xe=n.n(he),ve=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).selectPage=function(e){return function(t){return n.props.selectPage(e)}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pdf,n=e.selectedPage,a=e.view,c=e.classes,o=w(t),i=Array.from(Array(t.selectedPage).keys()).slice(-2),l=Array.from(Array(t.pageCount).keys()),s=l.slice(n,n+3);return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(le,null),!o&&r.a.createElement(y.Document,{file:{data:t.data}},r.a.createElement(m.a,{container:!0,spacing:3},"zoom"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(se.a,{"aria-label":"previous",disabled:n<=0,onClick:this.selectPage(n-1)},r.a.createElement(be.a,{fontSize:"small"})),i.map(function(e){return e!==n&&r.a.createElement(me,{key:e,selected:!1,index:e,scale:.2})})),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement("div",{className:c.content},r.a.createElement(me,{selected:!0,index:n,scale:1}))),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(se.a,{"aria-label":"next",disabled:n>=t.pageCount-1,onClick:this.selectPage(n+1)},r.a.createElement(xe.a,{fontSize:"small"})),s.map(function(e){return e!==n&&r.a.createElement(me,{key:e,selected:!1,index:e,scale:.2})}))),"global"===a&&r.a.createElement(r.a.Fragment,null,l.map(function(e){return r.a.createElement(m.a,{item:!0,xs:2,key:e},r.a.createElement(me,{selected:n===e,index:e,scale:.2}))})))))}}]),t}(a.PureComponent),ge=function(e){return function(e){return e.display}(e).view},je=Object(te.a)(function(e){return Object(ee.a)({content:{maxWidth:"100%",maxHeight:"100%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"auto"}})},{withTheme:!0})(Object(E.b)(function(e){return{pdf:ae(e),selectedPage:ie(e),view:ge(e)}},function(e){return{selectPage:function(t){return e(Q(t))}}})(ve)),Oe=n(162),Ee=n.n(Oe),ye=n(282),we=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).download=function(){Ee()(n.props.pdf.data,"download.pdf","application/pdf")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{variant:"outlined",color:"primary",onClick:this.download,style:{margin:"0 10px 10px 0"},disabled:w(this.props.pdf)},"Download"))}}]),t}(a.PureComponent),Pe=Object(E.b)(function(e){return{pdf:ae(e)}},function(e){return{}})(we),ke=n(285),Ce=n(286),Te=n(163),De=n.n(Te),Ie=n(164),Re=n.n(Ie),Ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeVersion=function(e){return function(t){t.stopPropagation(),n.props.changeVersion(e)}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.canPrevious,a=e.canNext;return r.a.createElement("div",{className:t.center},r.a.createElement(se.a,{color:"inherit",onClick:this.changeVersion(-1),disabled:!n},r.a.createElement(De.a,null),r.a.createElement(b.a,{variant:"subtitle1"},"Undo")),r.a.createElement(se.a,{color:"inherit",onClick:this.changeVersion(1),disabled:!a},r.a.createElement(b.a,{variant:"subtitle1"},"Redo"),r.a.createElement(Re.a,null)))}}]),t}(a.PureComponent),ze=Object(te.a)(function(e){return Object(ee.a)({center:{marginLeft:"auto",marginRight:"auto"}})},{withTheme:!0})(Object(E.b)(function(e){return{canPrevious:re(e),canNext:ce(e)}},function(e){return{changeVersion:function(t){return e(Z(t))}}})(Ae)),Ne=n(167),$e=n.n(Ne),Se=n(166),Fe=n.n(Se),Ve=n(165),Le=n.n(Ve),We=n(298),Xe=n(284),Ye=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleAlignment=function(e,t){t&&t!==n.props.view&&n.props.setView(t)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.view,n=e.classes;return r.a.createElement("div",{className:n.group},r.a.createElement(b.a,{variant:"subtitle1",className:n.text},"View"),r.a.createElement(We.a,{value:t,exclusive:!0,onChange:this.handleAlignment,"aria-label":"text alignment"},r.a.createElement(Xe.a,{value:"global","aria-label":"global",color:"inherit"},r.a.createElement(Le.a,null)),r.a.createElement(Xe.a,{value:"zoom","aria-label":"zoom",color:"inherit"},r.a.createElement(Fe.a,null))))}}]),t}(a.PureComponent),Be={setView:"display/setView"},Me=Object(G.a)(Be.setView),Ue=Object(te.a)(function(e){return Object(ee.a)({group:{marginRight:8},text:{display:"inline-flex",marginRight:5}})},{withTheme:!0})(Object(E.b)(function(e){return{view:ge(e)}},function(e){return{setView:function(t){return e(Me(t))}}})(Ye)),_e=n(287),He=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.createElement(a.Fragment,null,a.createElement(ke.a,{elevation:0,position:"static"},a.createElement(Ce.a,null,a.createElement(b.a,{variant:"h4"},"pdfModer"),a.createElement(ze,null),a.createElement(Ue,null),a.createElement(_e.a,{orientation:"vertical",flexItem:!0}),a.createElement(se.a,{color:"inherit",href:"https://github.com/TimotheBarbe/pdfModer",target:"_blank"},a.createElement($e.a,null)))),a.createElement("main",{className:e.content},this.props.children))}}]),t}(a.PureComponent),Je=Object(te.a)(function(e){return Object(ee.a)({content:{height:"calc(100%-64px)",padding:40}})},{withTheme:!0})(He),Ge=n(292),qe=n(100),Ke=n.n(qe),Qe=function(e){return function(t){e(t.target.value)}},Ze=function(e){return function(t){e(+t.target.value)}},et=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).insert=function(){var e=n.props.insert;isNaN(+e)||function(e,t){return S.apply(this,arguments)}(n.props.pdf,+e-1).then(n.props.load)},n.isDisabled=function(){var e=isNaN(+n.props.insert)||+n.props.insert<1;return w(n.props.pdf)||e},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.insert,n=e.setInsert;return r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ge.a,{label:"Before page",type:"text",value:t,onChange:Qe(n),InputLabelProps:{shrink:!0}}),r.a.createElement(ye.a,{variant:"outlined",color:"primary",onClick:this.insert,style:{margin:"0 10px 10px 0"},disabled:this.isDisabled(),startIcon:r.a.createElement(Ke.a,null)},"new page")),r.a.createElement(m.a,{item:!0,xs:12},"Insert doc",r.a.createElement(le,null)))}}]),t}(a.PureComponent),tt=function(e){return e.form},nt=function(e){return tt(e).remove},at=function(e){return tt(e).insert},rt=function(e){return tt(e).textOption},ct=function(e){return rt(e).x},ot=function(e){return rt(e).y},it=function(e){return rt(e).rotate},lt=function(e){return rt(e).color},st=function(e){return rt(e).size},ut=function(e){return rt(e).text},pt={set:"form/set",setRemove:"form/setRemove",setInsert:"form/setInsert",setTextColor:"form/text/setTextColor",setTextY:"form/text/setTextY",setTextX:"form/text/setTextX",setTextSize:"form/text/setTextSize",setTextRotate:"form/text/setTextRotate",setText:"form/text/setText"},ft=(Object(G.a)(pt.set),Object(G.a)(pt.setRemove)),mt=Object(G.a)(pt.setInsert),dt=Object(G.a)(pt.setTextColor),bt=Object(G.a)(pt.setTextY),ht=Object(G.a)(pt.setTextX),xt=Object(G.a)(pt.setTextSize),vt=Object(G.a)(pt.setTextRotate),gt=Object(G.a)(pt.setText),jt=Object(E.b)(function(e){return{pdf:ae(e),insert:at(e)}},function(e){return{load:function(t){return e(K(t))},setInsert:function(t){return e(mt(t))}}})(et),Ot=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).remove=function(){var e=n.props.remove;if(isNaN(+e)){if(z(e)){var t=N(e),a=Array.from(Array(t[1]).keys()).slice(t[0]-1);L(n.props.pdf,a).then(n.props.load)}}else{var r=+e-1;F(n.props.pdf,r).then(n.props.load)}},n.isDisabled=function(){var e=isNaN(+n.props.remove)||+n.props.remove<1;return w(n.props.pdf)||e&&!z(n.props.remove)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.pdf,e.remove),n=e.setRemove;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge.a,{label:"Pages to delete",type:"text",value:t,onChange:Qe(n),placeholder:"ex: 5-8 or 8",InputLabelProps:{shrink:!0}}),r.a.createElement(ye.a,{variant:"outlined",color:"primary",onClick:this.remove,style:{margin:"0 10px 10px 0"},disabled:this.isDisabled(),startIcon:r.a.createElement(pe.a,null)},"Delete"))}}]),t}(a.Component),Et=Object(E.b)(function(e){return{pdf:ae(e),remove:nt(e)}},function(e){return{load:function(t){return e(K(t))},setRemove:function(t){return e(ft(t))}}})(Ot),yt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).insert=function(){(function(e,t){return _.apply(this,arguments)})(n.props.pdf,n.props).then(n.props.load)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.setTextColor,a=e.y,c=e.setTextY,o=e.x,i=e.setTextX,l=e.size,s=e.setTextSize,u=e.rotate,p=e.setTextRotate,f=e.text,d=e.setText;return r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ge.a,{label:"Text",type:"text",placeholder:"ex: draw some text",value:f,onChange:Qe(d),InputLabelProps:{shrink:!0},multiline:!0,rows:4,variant:"outlined",fullWidth:!0})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(Ge.a,{label:"Y",type:"number",placeholder:"ex: 200",value:a,onChange:Ze(c),InputLabelProps:{shrink:!0},inputProps:{min:"0"}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(Ge.a,{label:"X",type:"number",placeholder:"ex: 200",value:o,onChange:Ze(i),InputLabelProps:{shrink:!0},inputProps:{min:"0"}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(Ge.a,{label:"Size",type:"number",placeholder:"ex: 14",value:l,onChange:Ze(s),InputLabelProps:{shrink:!0},inputProps:{min:"0"}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(Ge.a,{label:"Rotate",type:"number",placeholder:"ex: 14",value:u,onChange:Ze(p),InputLabelProps:{shrink:!0},inputProps:{min:"0"}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(Ge.a,{label:"Color",type:"text",placeholder:"ex: #000000",value:t,onChange:Qe(n),InputLabelProps:{shrink:!0}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(ye.a,{variant:"outlined",color:"primary",onClick:this.insert,style:{margin:"0 10px 10px 0"},disabled:w(this.props.pdf),startIcon:r.a.createElement(Ke.a,null)},"Draw text")))}}]),t}(a.PureComponent),wt=Object(E.b)(function(e){return{pdf:ae(e),x:ct(e),y:ot(e),rotate:it(e),color:lt(e),size:st(e),text:ut(e)}},function(e){return{load:function(t){return e(K(t))},setTextColor:function(t){return e(dt(t))},setTextY:function(t){return e(bt(t))},setTextX:function(t){return e(ht(t))},setTextSize:function(t){return e(xt(t))},setTextRotate:function(t){return e(vt(t))},setText:function(t){return e(gt(t))}}})(yt),Pt=n(168),kt=n.n(Pt),Ct=n(169),Tt=n.n(Ct),Dt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).rotate=function(e){return function(){(function(e,t){return H.apply(this,arguments)})(n.props.pdf,e).then(n.props.load)}},n.isDisabled=function(){return w(n.props.pdf)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(ye.a,{variant:"outlined",color:"primary",onClick:this.rotate(-90),style:{margin:"0 10px 10px 0"},disabled:this.isDisabled(),startIcon:r.a.createElement(kt.a,null)},"rotate left"),r.a.createElement(ye.a,{variant:"outlined",color:"primary",onClick:this.rotate(90),style:{margin:"0 10px 10px 0"},disabled:this.isDisabled(),endIcon:r.a.createElement(Tt.a,null)},"rotate right")))}}]),t}(a.PureComponent),It=Object(E.b)(function(e){return{pdf:ae(e)}},function(e){return{load:function(t){return e(K(t))}}})(Dt),Rt=Object(x.a)({palette:{primary:{main:"#ee3f3f"},secondary:{main:"#a09f9f"}}}),At=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.createElement(v.a,{theme:Rt},a.createElement(f.a,null),a.createElement(Je,null,a.createElement(m.a,{container:!0,spacing:3},a.createElement(m.a,{item:!0,xs:3},a.createElement(Pe,null),a.createElement(d.a,null,a.createElement(g.a,{expandIcon:a.createElement(O.a,null)},a.createElement(b.a,null,"Insert page")),a.createElement(h.a,null,a.createElement(jt,null))),a.createElement(d.a,null,a.createElement(g.a,{expandIcon:a.createElement(O.a,null)},a.createElement(b.a,null,"Delete")),a.createElement(h.a,null,a.createElement(Et,null))),a.createElement(d.a,null,a.createElement(g.a,{expandIcon:a.createElement(O.a,null)},a.createElement(b.a,null,"Add text")),a.createElement(h.a,null,a.createElement(wt,null))),a.createElement(d.a,null,a.createElement(g.a,{expandIcon:a.createElement(O.a,null)},a.createElement(b.a,null,"Rotate")),a.createElement(h.a,null,a.createElement(It,null)))),a.createElement(m.a,{item:!0,xs:9},a.createElement(je,null)))))}}]),t}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(247);var zt,Nt,$t=n(36),St=n(27),Ft=n(293),Vt=Object(Ft.a)((zt={},Object(St.a)(zt,q.load,function(e,t){return R()(e,{versions:{$splice:[[e.position+1,e.versions.length,t.payload]]},position:{$set:e.position+1}})}),Object(St.a)(zt,q.selectPage,function(e,t){var n=e.position;return R()(e,{versions:Object(St.a)({},n,{selectedPage:{$set:t.payload}})})}),Object(St.a)(zt,q.changeVersion,function(e,t){var n=e.position;return R()(e,{position:{$set:n+t.payload}})}),zt),{versions:[{data:new Uint8Array(0),pageCount:0,selectedPage:0}],position:0}),Lt=n(170),Wt=Object(Ft.a)(Object(St.a)({},pt.setRemove,function(e,t){return t.payload}),""),Xt=Object(Ft.a)(Object(St.a)({},pt.setInsert,function(e,t){return t.payload}),""),Yt=Object(Ft.a)((Nt={},Object(St.a)(Nt,pt.setTextColor,function(e,t){return R()(e,{color:{$set:t.payload}})}),Object(St.a)(Nt,pt.setTextRotate,function(e,t){return R()(e,{rotate:{$set:t.payload}})}),Object(St.a)(Nt,pt.setTextSize,function(e,t){return R()(e,{size:{$set:t.payload}})}),Object(St.a)(Nt,pt.setTextX,function(e,t){return R()(e,{x:{$set:t.payload}})}),Object(St.a)(Nt,pt.setTextY,function(e,t){return R()(e,{y:{$set:t.payload}})}),Object(St.a)(Nt,pt.setText,function(e,t){return R()(e,{text:{$set:t.payload}})}),Nt),{color:"",rotate:0,size:12,x:0,y:0,text:""}),Bt=Object($t.combineReducers)({remove:Wt,insert:Xt,textOption:Yt}),Mt=Object(Ft.a)(Object(St.a)({},Be.setView,function(e,t){return t.payload}),"zoom"),Ut=Object($t.combineReducers)({view:Mt}),_t=Object($t.combineReducers)({pdf:Vt,form:Bt,display:Ut}),Ht=Object($t.createStore)(_t,Object(Lt.composeWithDevTools)(Object($t.applyMiddleware)()));y.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(y.pdfjs.version,"/pdf.worker.js"),o.a.render(r.a.createElement(E.a,{store:Ht},r.a.createElement(At,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=83}},[[177,1,2]]]);
//# sourceMappingURL=main.bc2b78c3.chunk.js.map