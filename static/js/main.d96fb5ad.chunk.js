(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/airbnblogo.fe79338a.png"},17:function(e,a,t){e.exports=t.p+"static/media/maldives.90e811e4.jpg"},21:function(e,a,t){e.exports=t(45)},29:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/background.8e98e259.jpg"},36:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t.n(r),l=(t(15),t(29),t(11)),c=(t(31),t(33),t(16)),i=t.n(c),o=(t(35),t(17)),m=t.n(o),s=t(7);function d(e){var a=n.a.useState(!1),t=Object(l.a)(a,2),r=t[0],c=t[1];return n.a.createElement("div",{className:"CardComp"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"cardHeartOverlay"},n.a.createElement("img",{src:"publicimages/".concat(e.face1),className:"cardimg",alt:"cardimg"}),n.a.createElement(s.b,{className:r?"heartOverlayDark":"heartOverlay",onClick:function(){c(function(e){return!e})}})),n.a.createElement("br",null),n.a.createElement("img",{src:"publicimages/".concat(e.star1),className:"star",alt:"star"}),n.a.createElement("span",null,n.a.createElement("b",null,e.rating,", ")),n.a.createElement("span",null,n.a.createElement("b",null,e.country)),n.a.createElement("p",{className:"title"},e.title),n.a.createElement("p",{className:"price"},n.a.createElement("b",null,"From \xa3",e.price),"/Person")))}var u=[{face1:"cycling.jpg",star1:"star-removebg.png",rating:4.9,country:"France",title:"Cyclethrough breathtaking mountain trails with your buddies.",price:175},{face1:"cruise.jpg",star1:"star-removebg.png",rating:4.5,country:"UK",title:"Soak up the atmosphere and enjoy a luxuriously relaxing cruise on the River Thames. ",price:220},{face1:"rockClimbing.jpg",star1:"star-removebg.png",rating:4.2,country:"Kenya",title:"Will you be able to reach the historical summit of Mount Kenya?",price:187},{face1:"eggChair.jpg",star1:"star-removebg.png",rating:4.8,country:"Maldives",title:"Sun bathe and catch a crisp tan on the soft sandy beach.",price:187}];function g(e){return n.a.createElement("div",{className:"compact"},n.a.createElement("img",{className:"travelImg",src:"../publicimages/".concat(e.image)}),n.a.createElement("div",{className:"allInfo"},n.a.createElement("div",{className:"maps"},n.a.createElement("span",{className:"pin"},n.a.createElement(s.c,null)," "),n.a.createElement("p",{className:"country"},e.country)),n.a.createElement("h1",null,e.experience),n.a.createElement("strong",null,n.a.createElement("p",null,e.date)),n.a.createElement("p",null,e.description)))}var E=[{image:"mountFuji.jpg",country:"JAPAN",experience:"Mount Fuji",date:"12 Jan, 2021-24 Jan, 2021",description:"Mount Fuji is the\n    tallest mountain in Japan, standnig at 3776m tall."},{image:"SOH.jpg",country:"AUSTRALIA",experience:"Sydney Opera House",date:"27 May, 2021-8 Jun, 2021",description:"The Sydney Opera House is a multi-venue performing\n    arts centre in Sydney. It is often regarded as a major building \n    in the 20th century."},{image:"norway.jpg",country:"NORWAY",experience:"Geirangerfjord",date:"01 Oct, 2021-18 Nov, 2021",description:"The Geirangerfjord is fjord in the Sumnore region\n    of More Og Romsfal county, Norway. It has beautiful scenery."}];t(36);function p(e){return n.a.createElement("div",{className:e.darkMode?"topBarDark":"topBar"},n.a.createElement("div",{className:"totalTopBar"},n.a.createElement("p",{className:"globe1"},n.a.createElement(s.a,null)),n.a.createElement("h4",null,"My Travel Journal")),n.a.createElement("div",{className:e.darkMode?"nextPageSwitchDark":"nextPageSwitch"},"Select Mode"),n.a.createElement("div",{className:e.darkMode?"nextPageToggleSliderCircleDark":"nextPageToggleSliderCircle",onClick:e.toggleDarkMode},n.a.createElement("div",{className:e.darkMode?"nextPageToggleSliderCircle2Dark":"nextPageToggleSliderCircle2"})))}function k(){var e=E.map(function(e){return n.a.createElement(g,{image:e.image,country:e.country,experience:e.experience,date:e.date,description:e.description})});return n.a.createElement("div",null,e)}function v(e){return n.a.createElement("div",{className:e.darkMode?"nextPageBodyDark":"nextPageBody"},n.a.createElement(p,{toggleDarkMode:e.toggleDarkMode,darkMode:e.darkMode}),n.a.createElement(k,{darkMode:e.darkMode}))}var f=t(9),h=t(19);function y(e){return n.a.createElement("header",null,n.a.createElement("nav",{className:"nav"},n.a.createElement("img",{src:i.a,className:"logo1",alt:"logo1"}),n.a.createElement("div",{className:"searchBar"},n.a.createElement(s.d,{className:"fafafa"}),n.a.createElement("input",{type:"text",placeholder:"Search...",className:e.darkMode?"searchDark":"search"})),n.a.createElement("div",{className:e.darkMode?"switchDark":"switch"},"Select Mode"),n.a.createElement("div",{className:e.darkMode?"toggleSliderCircleDark":"toggleSliderCircle",onClick:e.toggleDarkMode},n.a.createElement("div",{className:e.darkMode?"toggleSliderCircle2Dark":"toggleSliderCircle2"}))))}function N(){return n.a.createElement("div",{className:"background"},n.a.createElement("img",{src:m.a,className:"backgroundimg",alt:"logo1"}),n.a.createElement("h1",{className:"txtOverlay"},"Your Dream Vacation Awaits..."))}function M(){return n.a.createElement("div",{className:"OnlineEx"},n.a.createElement("h3",null,"Online Experiences"),n.a.createElement("p",null,"Join unique experiences with a one-of-a-kind host, all without leaving home."))}function b(){var e=u.map(function(e){return n.a.createElement("div",null,n.a.createElement(d,{face1:e.face1,star1:e.star1,rating:e.rating,country:e.country,title:e.title,price:e.price}))});return n.a.createElement("div",{className:"joint"},e)}function D(e){return n.a.createElement("div",{className:"homeAirbnb2"},n.a.createElement(f.b,{to:"/travel"},n.a.createElement("button",{className:e.darkMode?"darkTravelBtn":"travelBtn"},"Want to see where I've travelled?")))}function x(e){return n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement(h.a,null),n.a.createElement("li",{className:e.darkMode?"liDark":"liLight"},"\xa9 2022 Bilal Musa, Inc."),n.a.createElement("a",{href:"/",className:e.darkMode?"liDark":"liLight"},n.a.createElement("li",null,"Privacy")),n.a.createElement("a",{href:"/",className:e.darkMode?"liDark":"liLight"},n.a.createElement("li",null,"Sitemap")),n.a.createElement("a",{href:"/",className:e.darkMode?"liDark":"liLight"},n.a.createElement("li",null,"Terms")),n.a.createElement("a",{href:"/",className:e.darkMode?"liDark":"liLight"},n.a.createElement("li",null,"Contact Us"))))}function S(e){return n.a.createElement("div",{className:e.darkMode?"bodyDark":"body"},n.a.createElement("div",null,n.a.createElement(y,{toggleDarkMode:e.toggleDarkMode,darkMode:e.darkMode})),n.a.createElement("div",{className:"container2"},n.a.createElement(N,null),n.a.createElement(M,null),n.a.createElement(b,null),n.a.createElement(D,{darkMode:e.darkMode})),n.a.createElement("div",{className:e.darkMode?"footerDark":"footer"},n.a.createElement(x,{darkMode:e.darkMode})))}var j=t(0);var C=function(){var e=n.a.useState(!1),a=Object(l.a)(e,2),t=a[0],r=a[1];function c(){r(function(e){return!e}),document.body.style.backgroundColor=t?"white":"#222222"}return n.a.createElement(j.c,null,n.a.createElement(j.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(S,Object.assign({},e,{darkMode:t,toggleDarkMode:c}))}}),n.a.createElement(j.a,{path:"/travel",render:function(e){return n.a.createElement(v,Object.assign({},e,{darkMode:t,toggleDarkMode:c}))}}))},w=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,46)).then(function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),r(e),n(e),l(e),c(e)})},O=t(20),T=document.getElementById("root");Object(O.createRoot)(T).render(n.a.createElement(f.a,null,n.a.createElement(C,null))),w()}},[[21,3,2]]]);
//# sourceMappingURL=main.d96fb5ad.chunk.js.map