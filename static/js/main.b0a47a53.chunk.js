(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),o=(n(24),n(25),n(26),n(2)),l=n(3),u=n(5),i=n(4),p=n(6),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",null,this.props.rates.map(function(e){return r.a.createElement("li",{key:e.currency},"Last Rate: \xa0",r.a.createElement("span",{className:e.class},e.last),"\xa0",r.a.createElement("strong",null,e.currency,"\xa0 [",e.symbol,"]"))}))}}]),t}(a.Component),m=n(17),f=n.n(m),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).getData=function(){f.a.get("https://blockchain.info/pl/ticker").then(function(e){var t=e.data,a=[];Object.keys(t).forEach(function(e){var r={currency:e,last:t[e].last,symbol:t[e].symbol,class:"blue"},c=n.state.currentRates.find(function(e){return e.currency===r.currency});void 0!==c&&(r.last>c.last?r.class="green":r.last<c.last?r.class="red":r.class="blue"),a.push(r)}),n.setState({currentRates:a})}).catch(function(e){console.log(e)})},n.onFilter=function(e){var t=e.target.value;0===t.length&&n.getData(),t=t.trim().toUpperCase();var a=n.state.currentRates;a=a.filter(function(e){return e.currency.includes(t)}),n.setState({inputValue:t,currentRates:a})},n.state={currentRates:[],inputValue:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getData(),setInterval(function(){""===e.state.inputValue&&e.getData()},5e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"crypto"},r.a.createElement("input",{value:this.state.inputValue,onChange:this.onFilter,type:"text",placeholder:"Filter"}),r.a.createElement(h,{rates:this.state.currentRates}))}}]),t}(a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Crypto Rate")),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.b0a47a53.chunk.js.map