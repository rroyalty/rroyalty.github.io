(this["webpackJsonprroyalty.github.io"]=this["webpackJsonprroyalty.github.io"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(9),o=a.n(r),c=(a(116),a(117),a(176)),s=a(81),l=a(18),d=a(60),p=a(161),h=a(181),g=a(79),m=a(90),u=a(62),b=a(12),j=a(183),x=a(104),f=a(65),v=a(2),y=Object(g.a)((function(e){var t,a,i;return Object(m.a)({paper:{height:"20vh",backgroundColor:null===(t=e.palette.bg)||void 0===t?void 0:t.main,border:"3px",borderStyle:"solid",borderColor:null===(a=e.palette.bio)||void 0===a?void 0:a.main,width:"100%"},typography:Object(b.a)({padding:"15px",fontWeight:"bolder",color:null===(i=e.palette.bio)||void 0===i?void 0:i.main},e.breakpoints.down("md"),{fontSize:".8rem"}),gridBits:{justifyContent:"center",alignItems:"center",display:"flex"}})})),O=function(e){var t=y();return Object(v.jsx)(p.a,{className:t.gridBits,item:!0,xs:9,children:Object(v.jsx)(x.a,{className:t.paper,children:Object(v.jsx)(f.a,{className:t.typography,children:e.p})})})},w=Object(g.a)((function(e){var t;return Object(m.a)({grid:{position:"relative",justifyContent:"center",alignItems:"center",height:"20vh",display:"flex",margin:"10px"},avatar:Object(b.a)({height:"35vh",width:"35vh",border:"3px",borderStyle:"solid",borderColor:null===(t=e.palette.bio)||void 0===t?void 0:t.main,marginTop:"-200px"},e.breakpoints.down("lg"),{height:"20vh",width:"20vh",marginTop:"0px"}),blurbSlide:Object(b.a)({marginRight:"-150px"},e.breakpoints.down("lg"),{marginRight:"0px"})})})),k=function(e){var t=w();return Object(v.jsxs)(p.a,{container:!0,item:!0,spacing:0,justify:"flex-end",children:[Object(v.jsx)(p.a,{className:t.grid,item:!0,xs:!0}),Object(v.jsx)(p.a,{className:"".concat(t.grid," ").concat(t.blurbSlide),item:!0,xs:8,children:Object(v.jsx)(O,{p:e.p,src:e.src})}),Object(v.jsx)(p.a,{className:t.grid,item:!0,xs:!0,children:Object(v.jsx)(j.a,{className:t.avatar,alt:e.src,src:e.src,variant:"rounded"})})]})},N=Object(g.a)((function(e){var t;return Object(m.a)({grid:{position:"relative",justifyContent:"center",alignItems:"center",height:"20vh",display:"flex",margin:"10px"},avatar:Object(b.a)({height:"35vh",width:"35vh",border:"3px",borderStyle:"solid",borderColor:null===(t=e.palette.bio)||void 0===t?void 0:t.main,marginTop:"200px"},e.breakpoints.down("lg"),{height:"20vh",width:"20vh",marginTop:"0px"}),blurbSlide:Object(b.a)({marginLeft:"-150px"},e.breakpoints.down("lg"),{marginLeft:"0px"})})})),C=function(e){var t=N();return Object(v.jsxs)(p.a,{container:!0,item:!0,spacing:0,justify:"flex-start",children:[Object(v.jsx)(p.a,{className:t.grid,item:!0,xs:!0,children:Object(v.jsx)(j.a,{className:t.avatar,alt:e.src,src:e.src,variant:"rounded"})}),Object(v.jsx)(p.a,{className:"".concat(t.grid," ").concat(t.blurbSlide),item:!0,xs:8,children:Object(v.jsx)(O,{p:e.p,src:e.src})}),Object(v.jsx)(p.a,{className:t.grid,item:!0,xs:!0})]})},S=a(96),I=a.n(S),L=Object(g.a)((function(e){var t,a,i,n;return Object(m.a)({root:Object(b.a)({backgroundColor:null===(t=e.palette.bg)||void 0===t?void 0:t.main,border:"3px",borderStyle:"solid",borderColor:null===(a=e.palette.bio)||void 0===a?void 0:a.main,width:"70%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.breakpoints.down("xs"),{width:"100%",maxWidth:"100%"}),typography:{marginLeft:"15px",marginRight:"15px",marginTop:"10px",marginBottom:"5px",color:null===(i=e.palette.bio)||void 0===i?void 0:i.main},avatar:{height:"30vh",width:"30vh",border:"3px",borderStyle:"solid",marginTop:"15px",marginBottm:"5px",borderColor:null===(n=e.palette.bio)||void 0===n?void 0:n.main}})})),T=function(e){var t=L();return Object(v.jsxs)(x.a,{className:t.root,children:[Object(v.jsx)(j.a,{className:t.avatar,src:e.src,variant:"rounded"}),Object(v.jsx)(f.a,{className:t.typography,children:e.p})]})},B=Object(g.a)((function(){return Object(m.a)({root:{display:"flex",justifyContent:"center",alignItems:"center"},grid:{margin:"10px",maxheight:"100vh",marginTop:"70px",justifyContent:"center",alignItems:"center"}})})),D=function(){var e=B(),t=Object(i.useState)({mobileView:!1}),a=Object(d.a)(t,2),n=a[0],r=a[1],o=n.mobileView;Object(i.useEffect)((function(){return function(){console.log("component unmounted")}}),[]),Object(i.useEffect)((function(){var e=function(){return window.innerWidth<900?r((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!0})})):r((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);return Object(v.jsx)("div",{children:o?Object(v.jsx)(I.a,{animation:"slide",interval:1e4,children:u.map((function(t){return Object(v.jsx)(h.a,{className:e.root,children:Object(v.jsx)(T,{src:t.src,p:t.p})},t.index)}))}):Object(v.jsx)(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.grid,spacing:1,children:u.map((function(e){return u.indexOf(e)%2===1?Object(v.jsx)(k,{src:e.src,p:e.p},e.index):Object(v.jsx)(C,{src:e.src,p:e.p},e.index)}))})})},A=a(165),R=a(164),W=a(166),_=a(167),z=a(168),F=a(169),M=a(170),H=Object(g.a)((function(e){var t,a,i,n,r;return Object(m.a)({root:(i={backgroundColor:null===(t=e.palette.bg)||void 0===t?void 0:t.main,justifyContent:"center",textAlign:"center",padding:"25px",display:"flex",flexDirection:"column",border:"2px",borderStyle:"solid",borderColor:null===(a=e.palette.portfolio)||void 0===a?void 0:a.main,height:"80%"},Object(b.a)(i,e.breakpoints.down("xl"),{width:"20vw"}),Object(b.a)(i,e.breakpoints.down("lg"),{width:"25vw"}),Object(b.a)(i,e.breakpoints.down("md"),{width:"30vw"}),Object(b.a)(i,e.breakpoints.down("sm"),{width:"50vw"}),Object(b.a)(i,e.breakpoints.down("xs"),{width:"60vw"}),i),media:{height:140,border:"2px",borderStyle:"solid",borderColor:null===(n=e.palette.portfolio)||void 0===n?void 0:n.main},typography:{color:null===(r=e.palette.portfolio)||void 0===r?void 0:r.main},firstTile:Object(b.a)({margin:"10px",maxWidth:"95%"},e.breakpoints.down("sm"),{marginTop:"100px"}),lastTile:Object(b.a)({margin:"10px",maxWidth:"95%"},e.breakpoints.down("sm"),{marginBottom:"100px"}),allTiles:{maxWidth:"95%",margin:"10px"}})})),E=function(e){var t=H();return Object(v.jsx)(R.a,{className:e.index!==e.length-1?0===e.index?t.firstTile:t.allTiles:t.lastTile,cols:4,children:Object(v.jsxs)(A.a,{className:t.root,children:[Object(v.jsx)(W.a,{className:t.media,image:e.props.imgSrc,title:e.props.name}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(f.a,{className:t.typography,gutterBottom:!0,variant:"h5",component:"h2",children:e.props.name}),Object(v.jsx)(f.a,{className:t.typography,variant:"body2",component:"p",children:e.props.description})]}),Object(v.jsx)(z.a,{children:Object(v.jsxs)(F.a,{children:[Object(v.jsx)("a",{href:e.props.github,target:"_blank",rel:"noreferrer",children:Object(v.jsx)(M.a,{className:t.typography,size:"small",children:"GitHub"})}),Object(v.jsx)("a",{href:e.props.domain,target:"_blank",rel:"noreferrer",children:Object(v.jsx)(M.a,{className:t.typography,size:"small",children:"Deployment"})})]})})]})})},V=a(76),q=a(171),P=Object(g.a)((function(){return Object(m.a)({gridList:{paddingTop:"20px",display:"flex",justifyContent:"center",alignItems:"top",overflowX:"hidden",maxHeight:"100vh",overflow:"auto",width:"100%"}})})),J=function(){var e=P(),t=V.length;return Object(v.jsxs)(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:["    ",Object(v.jsx)(q.a,{className:e.gridList,cellHeight:160,children:V.map((function(e,a){return Object(v.jsx)(E,{props:e,index:a,length:t},e.name)}))})]})},U=a(97),Q=a(175),G=a(172),Y=a(173),K=a(174),X=Object(g.a)((function(e){var t;return Object(m.a)({typography:{color:null===(t=e.palette.skills)||void 0===t?void 0:t.main}})})),Z=function(e){var t=X();return Object(v.jsxs)(G.a,{children:[Object(v.jsx)(Y.a,{children:Object(v.jsx)(j.a,{src:e.avatar,variant:"rounded"})}),Object(v.jsx)(K.a,{primary:e.language,className:t.typography})]})},$=Object(g.a)((function(e){var t,a,i;return Object(m.a)({root:{backgroundColor:null===(t=e.palette.bg)||void 0===t?void 0:t.main,textAlign:"center",padding:"25px",display:"flex",flexDirection:"column",border:"2px",borderStyle:"solid",borderColor:null===(a=e.palette.skills)||void 0===a?void 0:a.main,height:"60vh",margin:"10px",width:"20vw"},typography:{marginTop:"20px",color:null===(i=e.palette.skills)||void 0===i?void 0:i.main}})})),ee=function(e){var t=$();return Object(v.jsxs)(p.a,{className:t.root,xl:3,item:!0,children:[Object(v.jsx)(f.a,{className:t.typography,variant:"h6",children:e.title}),Object(v.jsx)("div",{children:Object(v.jsx)(Q.a,{children:e.props.map((function(e){return Object(v.jsx)(Z,{avatar:e.avatar,language:e.language},e.language)}))})})]})},te=Object(g.a)((function(e){var t,a,i;return Object(m.a)({root:{justifyContent:"center",alignItems:"center",width:"90vw"},imageDim:{width:"100%",height:"auto",borderWidth:"2px",borderColor:"#C4AC91",borderStyle:"solid",borderRadius:16,margin:"15px"},bioText:{fontSize:"16\n        px",textAlign:"left",padding:"20px",borderWidth:"2px",borderColor:null===(t=e.palette.skills)||void 0===t?void 0:t.main,borderStyle:"solid",borderRadius:16,backgroundColor:null===(a=e.palette.bg)||void 0===a?void 0:a.main,color:null===(i=e.palette.skills)||void 0===i?void 0:i.main,maxHeight:"100vh",margin:"15px"},grid:{margin:"10px",maxheight:"100vh"}})})),ae=function(){var e=te();return Object(v.jsxs)(c.a,{maxWidth:"xl",children:[Object(v.jsx)("div",{style:{height:"70px"}}),Object(v.jsx)(p.a,{className:e.root,container:!0,spacing:1,children:U.map((function(e){return Object(v.jsx)(ee,{props:e.list,title:e.title},e.index)}))})]})},ie=Object(g.a)((function(e){return Object(m.a)({root:{display:"flex",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh",justifyContent:"center",alignItems:"center"}})})),ne=function(){var e=ie();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(c.a,{id:"bio",className:e.root,maxWidth:"xl",style:{backgroundImage:"url(/images/code-Background2.png)"},children:Object(v.jsx)(s.a,{in:!0,children:Object(v.jsx)(D,{})})}),Object(v.jsx)(c.a,{id:"technical",className:e.root,maxWidth:"xl",style:{backgroundImage:"url(/images/mario-Background.png)"},children:Object(v.jsx)(s.a,{in:!0,children:Object(v.jsx)(ae,{})})}),Object(v.jsx)(c.a,{id:"portfolio",className:e.root,maxWidth:"xl",style:{backgroundImage:"url(/images/gandalf-vs-the-balrog.png)"},children:Object(v.jsx)(s.a,{in:!0,children:Object(v.jsx)(J,{})})})]})},re=a(101),oe=a.n(re),ce=a(85),se=a(177),le=a(182),de=a(178),pe=a(98),he=a(99),ge=a.n(he),me=a(100),ue=a.n(me),be=[{title:"Bio",path:"bio"},{title:"Skills",path:"technical"},{title:"Portfolio",path:"portfolio"}],je=Object(g.a)((function(e){var t;return Object(m.a)({linkText:{textDecoration:"none",textTransform:"uppercase",color:null===(t=e.palette.bio)||void 0===t?void 0:t.main,justifyContent:"center"},iconLinks:{display:"inline-flex",height:"48px",width:"48px"},anchorColor:{color:"white"}})})),xe=function(e){var t=je();return Object(v.jsxs)(Q.a,{component:"nav","aria-labelledby":"main navigation",className:e.classprop,children:[be.map((function(e){var a=e.title,i=e.path;return Object(v.jsx)(pe.Link,{smooth:!0,duration:500,to:i,className:t.linkText,children:Object(v.jsx)(G.a,{button:!0,children:Object(v.jsx)(K.a,{primary:a})})},a)})),Object(v.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0"}),Object(v.jsx)("a",{className:t.iconLinks,href:"https://github.com/rroyalty",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{alt:"github",className:t.iconLinks,src:"/images/GitHub-Mark-Light-64px.png"})}),Object(v.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0"}),Object(v.jsx)("a",{className:t.iconLinks,href:"https://www.linkedin.com/in/rroyalty/",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{alt:"Linked In",className:t.iconLinks,src:"/images/LinkedIn.png"})}),Object(v.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0"}),Object(v.jsx)("a",{className:t.anchorColor,href:"mailto: rroyalty@gmail.com",children:Object(v.jsx)(ge.a,{className:t.iconLinks})}),Object(v.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0"}),Object(v.jsx)("a",{className:t.anchorColor,href:"/images/resume.pdf",download:!0,children:Object(v.jsx)(ue.a,{className:t.iconLinks})})]})},fe=Object(g.a)((function(e){var t,a,i,n;return Object(m.a)({navDisplayFlex:{display:"inline-flex",justifyContent:"space-between"},navbar:{backgroundColor:"#181D27",borderBottomWidth:"2px",borderLeftWidth:"2px",borderRightWidth:"2px",borderColor:null===(t=e.palette.bio)||void 0===t?void 0:t.main,borderBottomLeftRadius:16,borderBottomRightRadius:16,borderStyle:"solid",color:null===(a=e.palette.bio)||void 0===a?void 0:a.main,height:"66px"},iconLinks:{display:"inline-flex",height:"48px",width:"48px"},rightAppBar:{marginLeft:"auto",marginRight:-12},justifyContent:{display:"flex",justifyContent:"center"},mobileNav:{display:"flex",flexDirection:"column",textDecoration:"none",textTransform:"uppercase",justifyContent:"flex-end"},menu:{backgroundColor:"#181D27",border:"0px",borderLeftWidth:"2px",borderColor:null===(i=e.palette.bio)||void 0===i?void 0:i.main,borderStyle:"solid",color:null===(n=e.palette.bio)||void 0===n?void 0:n.main,display:"flex",flexDirection:"column",alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",backgroundImage:"url(/menuImage.jpg)",width:"40vw"}})})),ve=function(){var e=fe(),t=Object(i.useState)({mobileView:!1,drawerOpen:!1}),a=Object(d.a)(t,2),n=a[0],r=a[1],o=n.mobileView,c=n.drawerOpen;Object(i.useEffect)((function(){var e=function(){return window.innerWidth<900?r((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!0})})):r((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);return Object(v.jsx)("div",{children:o?Object(v.jsxs)(se.a,{position:"fixed",className:e.navbar,children:[Object(v.jsx)(ce.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return r((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!0})}))},className:e.mobileNav,children:Object(v.jsx)(oe.a,{className:e.iconLinks})}),Object(v.jsx)(le.a,{anchor:"right",open:c,onClose:function(){return r((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!1})}))},children:Object(v.jsx)(xe,{classprop:e.menu})})]}):Object(v.jsx)(se.a,{position:"fixed",className:e.navbar,children:Object(v.jsxs)(de.a,{className:"nav-style",children:[Object(v.jsx)("h3",{className:e.justifyContent,children:"RYAN ROYALTY"}),Object(v.jsx)("section",{className:e.rightAppBar,children:Object(v.jsx)(xe,{classprop:e.navDisplayFlex})})]})})})},ye=a(179),Oe=Object(g.a)((function(e){var t,a,i,n;return Object(m.a)({root:{display:"flex",flexDirection:"column",backgroundColor:"#181D27",borderTopWidth:"2px",borderColor:null===(t=e.palette.portfolio)||void 0===t?void 0:t.main,borderStyle:"solid",color:null===(a=e.palette.portfolio)||void 0===a?void 0:a.main,justifyContent:"center",alignItems:"center",width:"auto",height:"auto",margin:"0",padding:"0"},nav:{display:"flex",flexDirection:"column",backgroundColor:"#181D27",justifyContent:"center",alignItems:"center",width:"90vw",height:"auto",margin:"0",padding:"0"},typography:{display:"flex",color:null===(i=e.palette.portfolio)||void 0===i?void 0:i.main,alignItems:"center",justifyContent:"center",flexDirection:"row"},iconLinks:{display:"flex",flexDirection:"row",height:"48px",width:"48px"},anchorColor:{color:null===(n=e.palette.portfolio)||void 0===n?void 0:n.main}})})),we=function(){var e=Oe();return Object(v.jsx)(c.a,{className:e.root,maxWidth:"xl",children:Object(v.jsx)(ye.a,{className:e.nav,style:{padding:"25px"},children:Object(v.jsxs)(p.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",spacing:1,children:[Object(v.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(f.a,{className:e.typography,style:{fontSize:".8rem"},children:"This portfolio was created using React, TypeScript and Material UI."})}),Object(v.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)("a",{className:e.anchorColor,href:"https://github.com/rroyalty/rroyalty.github.io",target:"_blank",rel:"noreferrer",children:Object(v.jsx)(f.a,{className:e.typography,children:"Portfolio Repository"})})}),Object(v.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(f.a,{className:e.typography,children:"Last Updated: 06/23/2021"})})]})})})},ke=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ve,{}),Object(v.jsx)(ne,{}),Object(v.jsx)(we,{})]})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,185)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),i(e),n(e),r(e),o(e)}))},Ce=a(163),Se=a(40),Ie=a(91),Le=a(63),Te=a(64),Be=a(180),De=a(102),Ae=Object(Se.a)({palette:{bg:{main:Object(De.fade)("#181D27",.92)},navbar:{main:Le.a[100]},bio:{main:Le.a[100]},skills:{main:Te.a[600]},portfolio:{main:Be.a[500]},footer:{main:Be.a[500]}}});Ae=Object(Ie.a)(Ae),o.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(Ce.a,{theme:Ae,children:Object(v.jsx)(ke,{})})}),document.getElementById("root")),Ne()},62:function(e){e.exports=JSON.parse('[{"index":"1","p":"I attended UMass Amherst from 2003 to 2008, where I earned a B.S. in Mathematics and studied to be a high school teacher. After two years of teaching, I decided that the profession was not a good fit for me and I moved onto other things; I worked as bartender at Chili\'s in Hadley, MA for a few years, after which I moved to Boston and took a job as a dog walker. In addition, I spent my Summers working as the outdoor education director at Birch Rock Summer Camp in Waterford, ME. While in Boston, I was fortunate to meet my wife, Samantha; who loves dogs as much as I do.","src":"/images/weddingPic.jpg"},{"index":"2","p":"My current job is with Foresight Regulatory Strategies, where I analyze data, generate reports, and manage the inventory database (which I built from scratch) using FileMaker. Foresight is a medical device consulting company that runs clinical trials on contact lenses, and other eye related medical devices/solutions.","src":"/images/Frankie.jpg"},{"index":"3","p":"I took two significant breaks throughout all this, once in 2013 when I successfully thru-hiked the Appalachian Trail, and again in 2016, when I attempted to hike the Pacific Crest Trail but was forced to abandon the trip after 500 miles due to a medical emergency on the East coast. Now, I reside in Nottingham, NH with Sam and our two dogs, Franconia and Tuckerman.","src":"/images/at.jpg"},{"index":"4","p":" I recently graduated from UNH\'s Full Stack Coding Bootcamp course, where I developed new professional skills in the hopes of advancing my professional career. In my free time I enjoy backpacking, hiking, canoeing, video games, board games, spending time with my dogs, practicing Uechi Ryu Karate (in which I have a 2nd degree blackbelt,) and visiting new breweries. Also, I love Calvin and Hobbes.","src":"/images/backpacking.jpg"}]')},76:function(e){e.exports=JSON.parse('[{"name":"Bandwidth","description":"A social media site for local motions to connect and jam.","domain":"https://bandwi-d-th.herokuapp.com/","github":"https://github.com/rroyalty/bandwidth","imgSrc":"/images/bandwidth.jpg","icon":"fas fa-utensils"},{"name":"Easy Recipeazy","description":"A website that takes ingredients you have in your house and offers you recipes to make with them!","domain":"https://tonipow3ll.github.io/drinks-and-dinner/","github":"https://github.com/tonipow3ll/drinks-and-dinner","imgSrc":"https://raw.githubusercontent.com/tonipow3ll/drinks-and-dinner/main/images/mealdrink.png","icon":"fas fa-utensils"},{"name":"Stretch N\' Strengthen","description":"An easy to use workout website for users to create custom workout routines.","domain":"http://stretch-n-strengthen.herokuapp.com/","github":"https://github.com/crrmarchese/stretch-n-strengthen","imgSrc":"https://raw.githubusercontent.com/crrmarchese/stretch-n-strengthen/main/public/assets/images/stretch-n-strengthen.jpg","icon":"fas fa-dumbbell"},{"name":"Pop Culture Trivia","description":"A timed, multiple choice, pop culture quiz that saves your highscores!","domain":"https://rroyalty.github.io/code-quiz/","github":"https://github.com/rroyalty/code-quiz/","imgSrc":"https://raw.githubusercontent.com/rroyalty/code-quiz/main/assets/images/codeQuizQuestionsScreen.jpg","icon":"fas fa-question"},{"name":"Weather Dashboard","description":"Check the local weather, or search for weather somewhere else!","domain":"https://rroyalty.github.io/weather-dashboard/","github":"https://github.com/rroyalty/weather-dashboard/","imgSrc":"https://raw.githubusercontent.com/rroyalty/weather-dashboard/main/assets/images/examples/weather-screenshot.jpg","icon":"fas fa-cloud-sun-rain"},{"name":"Time Scheduler","description":"Schedule every hour of every day!","domain":"https://rroyalty.github.io/daily-scheduler/","github":"https://github.com/rroyalty/daily-scheduler/","imgSrc":"https://raw.githubusercontent.com/rroyalty/daily-scheduler/main/Example/DailySchedule.jpg","icon":"far fa-clock"}]')},97:function(e){e.exports=JSON.parse('[{"index":"1","title":"Languages","list":[{"language":"TypeScript","avatar":"https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"},{"language":"JavaScript ES6+","avatar":"https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"},{"language":"HTML5","avatar":"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png"},{"language":"CSS3","avatar":"https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_css3-512.png"},{"language":"SQL","avatar":"https://www.clipartmax.com/png/middle/243-2432711_azure-sql-database-icon.png"},{"language":"NoSQL","avatar":"https://cdn6.aptoide.com/imgs/0/7/6/076303a788705113dc6cebc4fe59a02d_icon.png"},{"language":"VBA","avatar":"https://cdn3.iconfinder.com/data/icons/flat-design-spreadsheet-set-5/24/macros-vba-512.png"}]},{"index":"2","title":"Applications","list":[{"language":"GitHub","avatar":"/images/GitHub-Mark-Light-64px.png"},{"language":"Heroku","avatar":"https://image.flaticon.com/icons/png/512/873/873120.png"},{"language":"VSCode","avatar":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"},{"language":"MySQL","avatar":"https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png"},{"language":"MongoDB","avatar":"https://img.icons8.com/color/452/mongodb.png"},{"language":"FileMaker","avatar":"https://s3.amazonaws.com/hbase-files/FM13-icon-green-blue.png"}]},{"index":"3","title":"Tools","list":[{"language":"React","avatar":"https://cdn.iconscout.com/icon/free/png-512/react-1543566-1306069.png"},{"language":"Redux","avatar":"https://cdn.iconscout.com/icon/free/png-512/redux-283024.png"},{"language":"Express","avatar":"https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"},{"language":"Node","avatar":"https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png"},{"language":"Sequelize","avatar":"https://cdn.iconscout.com/icon/free/png-512/sequelize-1175001.png"},{"language":"Material UI","avatar":"https://material-ui.com/static/logo.png"},{"language":"Axios","avatar":"https://symbols-electrical.getvecta.com/stencil_74/148_axios-icon.351c8889a7.png"},{"language":"Auth0","avatar":"https://miro.medium.com/max/3150/1*kofg5S-_kcyij3HL-uCnZA.png"},{"language":"Passport","avatar":"https://leolanchas.com/wp-content/uploads/2013/07/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png"}]}]')}},[[143,1,2]]]);
//# sourceMappingURL=main.4f06a61d.chunk.js.map