(this["webpackJsonpadvice-web-app"]=this["webpackJsonpadvice-web-app"]||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),i=c(14),s=c.n(i),o=c(15),r=c(16),d=c(19),h=c(18),l=c(17),v=c.n(l),p=(c(42),c(1)),u=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={advice:""},e.fetchAdvice=function(){v.a.get("https://api.adviceslip.com/advice").then((function(t){var c=t.data.slip.advice;e.setState({advice:c})})).catch((function(e){console.log(e)}))},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h1",{className:"heading",children:e}),Object(p.jsx)("button",{className:"button",onClick:this.fetchAdvice,children:Object(p.jsx)("span",{children:"GIVE ME ADVICE !"})})]})})}}]),c}(n.a.Component),b=u;s.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c76f3acb.chunk.js.map