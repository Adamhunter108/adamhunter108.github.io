(this.webpackJsonpprojectsite=this.webpackJsonpprojectsite||[]).push([[0],{20:function(e,t,s){},23:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(12),i=s.n(n),c=(s(20),s(4)),r=s(5),o=s(7),l=s(6),j=s(10),d=s(13),h=s.n(d),b=(s(23),s(14)),u=s(0),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project;var e=this.props.data.github,t=this.props.data.name,s=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"circle",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)("h1",{className:"responsive-headline",children:t}),Object(u.jsxs)("h3",{children:[s,"."]}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{className:"social",children:Object(u.jsxs)("a",{href:e,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"twelve columns",children:[Object(u.jsx)("p",{style:{color:"white"},children:"adamhunter928@gmail.com"}),Object(u.jsx)("ul",{className:"social-links",children:e}),Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{})})]}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.bio;this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Nordic Giant Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Certifications"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("b",{children:"Codecademy"}),Object(u.jsx)("br",{})," Python 3, JavaScript, Node, React, Redux, Analyze Data with Python, Visualize Data with Python, Apply Natural Language Processing with Python, Build Python Web Apps with Django ,Full-Stack Engineer"]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[Object(u.jsx)("b",{children:"Udemy"}),Object(u.jsx)("br",{})," Automate the Boring Stuff with Python, Python for Data Science and Data Analysis Masterclass, The Complete 2020 PHP Full Stack Web Developer, CSS 3 and Bootstrap, React 101"]}),Object(u.jsx)("br",{})]})]})})]})]})})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree,Object(u.jsxs)("em",{className:"date",children:["  ",e.graduated]})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),a=(this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)})),this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),n=t.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:n,backgroundColor:s},className:a}),Object(u.jsx)("em",{children:t.name})]},t.name)})));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[" ",Object(u.jsx)("h1",{children:"Purchasing Manager"}),Object(u.jsx)("b",{children:"MCG Electronics \u2003\u2022 2017 \u2014 Present"}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["\u2022 Oversee and implement entire procurement process from sourcing to purchase order fulfillment. Procurement includes but not limited to all raw material, custom parts, electronic components, working tools, facility devices, maintenance and control services. This process is performed to be in strict compliance with ISO 9001 manufacturing certification guidelines.",Object(u.jsx)("br",{}),"\u2022 Perform routine inventory/vendor/cost analyses and forecasts via Key Performance Indicators, Material Requirement Planning, and database management to present to and coordinate with other departments.",Object(u.jsx)("br",{}),"\u2022 Build and maintain strong, long-lasting vendor relationships.",Object(u.jsx)("br",{}),"\u2022 Consistently perform under pressure of deadlines.",Object(u.jsx)("br",{}),"\u2022 Participate in national trade show presentations.",Object(u.jsx)("br",{}),"\u2022 Initiated and executed an obsolete stock liquidation program.",Object(u.jsx)("br",{}),"\u2022 Updated purchasing department technology, replacing thirty-year-old technology with a virtually paperless cloud-based environment."]}),Object(u.jsx)("h1",{children:"Account Executive"}),Object(u.jsx)("b",{children:"Florence Building Materials \u2003\u2022 2015 \u2014 2017"}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["\u2022 Managed client relationships for the duration of building projects, from early stages of research and discovery to the final stages of delivery and installation.",Object(u.jsx)("br",{}),"\u2022 Analyzed customer requirements and utilized expert knowledge learned in the field as a project manager to recommend customized client solutions.",Object(u.jsx)("br",{}),"\u2022 Monitored project costs to ensure they were aligned with budgets.",Object(u.jsx)("br",{}),"\u2022 Operated as initial point of contact for the company, servicing new accounts as well as maintaining existing accounts.",Object(u.jsx)("br",{}),"\u2022 Cultivated new accounts via soft lead management platforms."]}),Object(u.jsx)("h1",{children:"Project Manager"}),Object(u.jsx)("b",{children:"All Pro Remodeling \u2003\u2022 2008 \u2014 2015"}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["\u2022 Coordinated and delivered multiple, simultaneous remodel and rehabilitation construction projects through the five boroughs of New York City, Long Island, Upstate New York and New Jersey.",Object(u.jsx)("br",{}),"\u2022 Maintained databases of proposals, invoices, job costs, and pertinent client information.",Object(u.jsx)("br",{}),"\u2022 Estimated projects based on cost analyses, site visitations and client requirements.",Object(u.jsx)("br",{}),"\u2022 Contracted, scheduled and oversaw delivery of all subcontractors.",Object(u.jsx)("br",{}),"\u2022 Fostered key client relationships for the company that are still active and relevant for the company today.",Object(u.jsx)("br",{}),"\u2022 Coordinated and obtained necessary permits for the successful completion of jobs."]})]})]}),Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:t}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),f=(a.Component,s(15)),g=s.n(f),v=0,y=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(u.jsx)("div",{className:"columns portfolio-item",children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)(g.a,{alt:e.title,src:t}),Object(u.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},v++)}));return Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",children:[Object(u.jsx)("h1",{children:"Some Recent Projects"}),Object(u.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Ongaku"}),Object(u.jsx)("br",{}),"\u2022 View project on ",Object(u.jsx)("a",{href:"https://github.com/Adamhunter108/ongaku-v2",children:"GitHub"}),Object(u.jsx)("br",{}),"Ongaku (the Japanese word for music) is a web app, built with React and deployed with Netlify, that allows users to search the Spotify library, create a custom playlist, and then save it to their Spotify account. This was built as a capstone project for Codecademy's Full Stack Engineer course.",Object(u.jsx)("br",{}),"View live: ",Object(u.jsx)("a",{href:"https://ongaku-v2.netlify.app",children:"ongaku-v2.netlify.app"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Aliases"}),Object(u.jsx)("br",{}),"\u2022 View project on ",Object(u.jsx)("a",{href:"https://github.com/Adamhunter108/aliases",children:"GitHub"}),Object(u.jsx)("br",{}),"Aliases is a web-app , built with Python using the Django framework, that stores Russell Tyrone Jones' known rap aliases in an SQLite database. The main page displays a random alias and includes a refresh button for accessing random aliases. The app features login functionality that allows a user to add an alias to the database.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Python Spotify API"}),Object(u.jsx)("br",{}),"\u2022 View project on ",Object(u.jsx)("a",{href:"https://github.com/Adamhunter108/spotify-project",children:"GitHub"}),Object(u.jsx)("br",{}),"This command line program, built in Python, calls the Spotify API and retrieves data based off of the search term that the user passes to the API. Based off of the search term (for an artist), the program returns ten most recent albums, top ten songs by the artist and a link to the artist's profile page on spotify.com.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"I Ching"}),Object(u.jsx)("br",{}),"\u2022 View project on ",Object(u.jsx)("a",{href:"https://github.com/Adamhunter108/i-ching",children:"GitHub"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("i",{children:"About"}),Object(u.jsx)("br",{}),"A command line program, built in Python, that gives you the option to manually input the results of your coin tosses or will automatically provide you with a random result.  Note: Some versions of the I Ching will require additional tosses due to changing lines and mutating hexagrams, this program takes those nuances into account and only provides the user with their final hexagram.",Object(u.jsx)("br",{})," ",Object(u.jsx)("i",{children:"What is I Ching "}),Object(u.jsx)("br",{}),"I Ching, usually translated to 'book of changes,' is an ancient Chinese divination text that provides guidance for moral decision making as informed by Confucianism, Taoism and Buddhism.",Object(u.jsx)("br",{})," ",Object(u.jsx)("i",{children:"How to consult the Book of Changes"}),Object(u.jsx)("br",{})," Take three ordinary coins as similar as possible, think about a question that you would like guidance with, toss all three coins at the same time and input whether they come up heads or tails. Do this six times and a hexagram will be constructed. There are 64 unique hexagrams and each one has a value that can be independently researched and studied further.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Mobile Weather App"}),Object(u.jsx)("br",{}),"\u2022 View project on ",Object(u.jsx)("a",{href:"https://github.com/Adamhunter108/weatherapp",children:"GitHub"}),Object(u.jsx)("br",{}),"A mobile weather app (for either iOS or Android), built with React Native, that will display the current weather based on a zip code that the user inputs. The app uses the OpenWeather API which has access to current weather data for any location including over 200,000 cities.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Appointments"}),Object(u.jsx)("br",{}),"\u2022 View project on ",Object(u.jsx)("a",{href:"https://github.com/Adamhunter108/appointments",children:"GitHub"}),Object(u.jsx)("br",{}),"A single page web app, built with React, in which a user can create contacts and then create appointments with created contacts.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})})]})})})}}]),s}(a.Component),w=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{data:this.state.resumeData.main}),Object(u.jsx)(O,{data:this.state.resumeData.main}),Object(u.jsx)(y,{data:this.state.resumeData.portfolio}),Object(u.jsx)(x,{data:this.state.resumeData.resume}),Object(u.jsx)(m,{data:this.state.resumeData.main})]})}}]),s}(a.Component),N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};i.a.render(Object(u.jsx)(w,{}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.dd22d67b.chunk.js.map