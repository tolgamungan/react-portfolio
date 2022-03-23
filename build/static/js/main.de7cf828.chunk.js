(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(33)},23:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),s=(t(23),t(1)),m=t(2),i=t(4),o=t(3),u=t(5),p=t(34),d=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi! \ud83d\udc4b my name is ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name," ",e.lastname),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.replace(/[^a-zA-Z0-9]/g,"").toLocaleLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"".concat(e.reference),target:"_blank"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),g=(n.Component,n.Component,function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),b={imagebaseurl:"tolgamungan.com",name:"Tolga",lastname:"Mungan",role:"Full-Stack Web Developer",linkedinId:"tmungan",skypeid:"skypeid",roleDescription:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb located in Sydney, NS.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/tmungan/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/tolgamungan",className:"fa fa-github"},{name:"skype",url:"https://twitter.com/tmungann",className:"fa fa-twitter"}],aboutme:"I am currently a final year student at Nova Scotia Community College in IT Web Programming program.",address:"Sydney, NS",website:"https://tolgamungan.com/",email:"tmungann@gmail.com",education:[{UniversityName:"Nova Scotia Community College",specialization:"Diploma, IT Web Programming",MonthOfPassing:"June",YearOfPassing:"2022",Achievements:"Some Achievements"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"",skills:[{skillname:"MongoDB"},{skillname:"Express.js"},{skillname:"React.js"},{skillname:"Node.js"},{skillname:"Typescript"},{skillname:"RESTful API"},{skillname:"ASP.NET Core"},{skillname:"C#"},{skillname:"EF Core"},{skillname:"Docker"}],portfolio:[{name:"react-crypto-dashboard",description:"React-Typescript-Coingecko API app that displays cryptocurrency data",imgurl:"https://repository-images.githubusercontent.com/471213306/5add12c8-d356-491f-8026-c5671dd5b137",reference:"https://github.com/tolgamungan/react-crypto-dashboard"},{name:"launchPad",description:"ASP.NET MVC app with EF Core",imgurl:"https://repository-images.githubusercontent.com/436541987/ae909445-9201-4636-996d-2addadb19048",reference:"https://github.com/tolgamungan/launchPad"},{name:"Contact Management System-PHP-MySQL",description:"Contact management app that you can add, edit, delete contacts",imgurl:"https://repository-images.githubusercontent.com/473262627/c33b42b8-0d98-49c5-9f06-e982f66c6bbe",reference:"https://github.com/tolgamungan/Contact-Management-System-PHP"},{name:"react-portfolio",description:"React-Bootstrap Portfolio Website",imgurl:"https://repository-images.githubusercontent.com/468996408/8433fe06-dd6a-473e-a14b-7248bfe84186",reference:"https://github.com/tolgamungan/react-portfolio"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(p.Route,{render:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(f,{resumeData:b}),l.a.createElement(g,{resumeData:b}))}})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(17),k=t.n(N);r.a.render(l.a.createElement(k.a,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.de7cf828.chunk.js.map