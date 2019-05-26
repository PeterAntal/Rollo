(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D4"}},{key:"getName",value:function(){return"Four Sided Die"}},{key:"getFaceCount",value:function(){return 4}}]),t}(n(12).b)},101:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D6"}},{key:"getName",value:function(){return"Six Sided Die"}},{key:"getFaceCount",value:function(){return 6}}]),t}(n(12).b)},102:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D8"}},{key:"getName",value:function(){return"Eight Sided Die"}},{key:"getFaceCount",value:function(){return 8}}]),t}(n(12).b)},103:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D10"}},{key:"getName",value:function(){return"Ten Sided Die"}},{key:"getFaceCount",value:function(){return 10}}]),t}(n(12).b)},104:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D20"}},{key:"getName",value:function(){return"Twenty Sided Die"}},{key:"getFaceCount",value:function(){return 20}}]),t}(n(12).b)},105:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D100"}},{key:"getName",value:function(){return"Hundred Sided Die"}},{key:"getFaceCount",value:function(){return 100}}]),t}(n(12).b)},12:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});var a=n(7),r=n(6),c=n(8),i=n(4),u=n(5),s=function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"getBackgroundColor",value:function(){return"white"}},{key:"getForegroundColor",value:function(){return"black"}},{key:"getShape",value:function(){return"square"}},{key:"roll",value:function(e){var t=this.getSides();return t[e.range(t.length)]}}]),e}(),o=function(e){function t(){return Object(i.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(u.a)(t,[{key:"getSides",value:function(){for(var e=[],t=this.getFaceCount(),n=1;n<=t;n++){var a={value:n};e.push(a)}return e}},{key:"roll",value:function(e){var t=this.getSides();return t[e.range(t.length)]}}]),t}(s)},130:function(e,t,n){e.exports=n(235)},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(4),r=n(5),c=function(){function e(){Object(a.a)(this,e),this.diceKinds=void 0,this.diceKinds={}}return Object(r.a)(e,[{key:"getDice",value:function(){return this.diceKinds}},{key:"RegisterDice",value:function(e){var t=new e;this.diceKinds[t.getKey()]=t}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();c.instance=void 0},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52),i=n.n(c),u=(n(135),n(136),n(137),n(4)),s=n(5),o=n(7),l=n(6),f=n(8),h=n(97),v=n(265),g=n(268),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e,t,a,r){n.props.onSelect(n.props.diceKinds[t.key])},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderDiceOptions();return r.a.createElement(v.a,{options:e,selectedKey:this.props.selected&&this.props.selected.getKey(),onChange:this.onChange})}},{key:"renderDiceOptions",value:function(){var e=[];for(var t in this.props.diceKinds)this.props.diceKinds.hasOwnProperty(t)&&e.push({key:t,text:this.props.diceKinds[t].getName()});return e}}]),t}(r.a.Component),p=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClick=function(){n.props.onAdd(n.state.selected)},n.onSelect=function(e){n.setState({selected:e})};var a=h.DiceFactory.getInstance().getDice();return n.state={dice:a,selected:a[Object.keys(a)[0]]},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex-horizontal"},r.a.createElement(d,{diceKinds:this.state.dice,selected:this.state.selected,onSelect:this.onSelect}),r.a.createElement(g.a,{label:"AddButton",text:"Add",onClick:this.onClick,disabled:null==this.state.selected}))}}]),t}(r.a.Component),b=(n(138),n(236)),y={};function O(e,t){var n=y[e],a=Math.abs(t),c=void 0!==n?function(e,t){for(var n=[],a=0;a<t;a++)n.push(e),a!==t-1&&n.push(r.a.createElement("br",null));return r.a.createElement(r.a.Fragment,null,n)}(n(t),a):a.toString();return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:e},c),r.a.createElement("br",{key:e+"br"}))}y.advantage=function(e){var t=e>0?"advantage":"disadvantage";return r.a.createElement("span",{className:Object(b.a)("die-glyph",t)})},y.success=function(e){var t=e>0?"success":"failure";return r.a.createElement("span",{className:Object(b.a)("die-glyph",t)})},y.triumph=function(e){return r.a.createElement("span",{className:Object(b.a)("die-glyph","triumph")})},y.despair=function(e){return r.a.createElement("span",{className:Object(b.a)("die-glyph","despair")})},y.force=function(e){var t=e>0?"light-side":"dark-side";return r.a.createElement("span",{className:Object(b.a)("die-glyph",t)})};n(139);var j=n(120),m=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){n.props.onClick&&n.props.onClick(n.props.id)},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{className:"dice-button",onClick:this.onClick},r.a.createElement("div",{className:Object(b.a)(this.props.dice.getShape(),"dice-result"),style:{fontKerning:"auto","--fore-color":this.props.dice.getForegroundColor(),"--back-color":this.props.dice.getBackgroundColor()}},this.getGlyphs()))}},{key:"getGlyphs",value:function(){var e=[],t=Object.keys(this.props.face).length;for(var n in this.props.face)if(this.props.face.hasOwnProperty(n)){var a=this.props.face[n],c=1===t&&1===Math.abs(a)?"large-face":"small-face";e.push(r.a.createElement("span",{key:n,className:Object(b.a)("value",c)},O(n,a)))}return 0===t&&e.push(r.a.createElement("span",{className:Object(b.a)("value","no-items")},""," ")),e}}]),t}(r.a.Component),k=n(116);n(140);function D(e){for(var t=[],n=0;n<e.length;n++)for(var a=e[n].rollOutCome,r=0;r<a.length;r++)for(var c in a[r])a[r].hasOwnProperty(c)&&-1===t.indexOf(c)&&t.push(c);return t.sort(function(e,t){return e.localeCompare(t)})}function S(e,t){for(var n=[],a=0;a<e.length;a++){var r=C(e[a].rollOutCome,t);null==n[r]?n[r]=1:n[r]++}return n}function C(e,t){for(var n=0,a=0;a<e.length;a++){var r=e[a][t];null!=r&&(n+=null!=r?r:0)}return n}function E(e,t){var n=[];return e.forEach(function(e,a){n.push(e.roll(t))}),n}var R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClick=function(){n.rollFaces(n.props)},n.state={faces:[]},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.rollFaces(e)}},{key:"render",value:function(){var e=this,t=[];return this.state.faces.forEach(function(n,a){t.push(r.a.createElement(m,{face:e.state.faces[a],dice:e.props.activeDice[a],key:a,id:a,onClick:e.props.onRemove}))}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dice-roll flex-row"},t),this.outcome(),this.props.activeDice.length>0&&r.a.createElement(k.a,{onClick:this.onClick,text:"Re-Roll"}))}},{key:"outcome",value:function(){for(var e={rollOutCome:this.state.faces},t=D([e]),n=[],a=0;a<t.length;a++){var c=t[a];n.push(r.a.createElement("div",null,r.a.createElement("span",null,c," "),r.a.createElement("span",null,C(this.state.faces,c))))}return r.a.createElement("div",null,r.a.createElement("br",null),"Outcomes:",n,r.a.createElement("br",null))}},{key:"rollFaces",value:function(e){var t=this,n=[];e.activeDice.forEach(function(e,a){n.push(t.rollDice(e))}),this.setState({faces:n})}},{key:"rollDice",value:function(e){var t=e.getSides();return t[this.props.randomSeed.range(t.length)]}}]),t}(r.a.Component),F=n(117),K=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[],t=[],n=[],a=[],c=0,i=Object.keys(this.props.items).sort(function(e,t){return parseInt(e)-parseInt(t)}),u=!0,s=!1,o=void 0;try{for(var l,f=i[Symbol.iterator]();!(u=(l=f.next()).done);u=!0){var h=l.value;e.push(h+"");var v=parseInt(h),g=null!=this.props.items[v]?this.props.items[v]/this.props.iterations:0;c+=g,n.push(g),a.push(c)}}catch(d){s=!0,o=d}finally{try{u||null==f.return||f.return()}finally{if(s)throw o}}t.push({label:"Probability",data:n,yAxisID:"A",backgroundColor:"rgb(200, 200, 255)",borderColor:"rgb(128, 128, 128)"}),t.push({label:"CDF",data:a,yAxisID:"B",type:"line",backgroundColor:"rgb(255, 255, 255)",borderColor:"rgb(128, 128, 128)"});return r.a.createElement("div",{style:{height:"250px"}},r.a.createElement(F.a,{options:{maintainAspectRatio:!1,animation:!1,scales:{yAxes:[{id:"A",type:"linear",position:"left",ticks:{min:0}},{id:"B",type:"linear",position:"right",ticks:{min:0}}]}},data:{labels:e,datasets:t}}))}}]),t}(r.a.Component),N=n(267),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={iterations:[],histograms:[],regenerating:!1},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.regenerate()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.regenerate()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.histograms&&this.renderCharts())}},{key:"renderCharts",value:function(){var e=[];for(var t in this.state.regenerating&&e.push(r.a.createElement(N.a,{key:0})),this.state.histograms)if(this.state.histograms.hasOwnProperty(t)){var n=this.state.histograms[t];e.push(r.a.createElement("div",{key:t},r.a.createElement("span",null,n.name),r.a.createElement(K,{items:n.data,iterations:this.props.iterations})))}return e}},{key:"regenerate",value:function(){for(var e=[],t=0;t<this.props.iterations;t++){var n=E(this.props.activeDice,this.props.randomSeed);e[t]={rollOutCome:n}}var a=function(e,t){for(var n=[],a=0;a<t.length;a++){var r=t[a];n.push({name:r,data:S(e,r)})}return n}(e,D(e));this.setState({iterations:e,histograms:a,regenerating:!1})}}]),t}(r.a.Component),I=n(119),P=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onAddDice=function(e){n.state.activeDice.push(e),n.setState({activeDice:n.state.activeDice})},n.onRemoveDice=function(e){n.state.activeDice.splice(e,1),n.setState({activeDice:n.state.activeDice})},n.state={activeDice:[],randomSeed:Object(I.create)("0")},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onAdd:this.onAddDice}),r.a.createElement(R,{activeDice:this.state.activeDice,randomSeed:this.state.randomSeed,onRemove:this.onRemoveDice}),r.a.createElement(w,{activeDice:this.state.activeDice,randomSeed:this.state.randomSeed,iterations:5e4}))}}]),t}(r.a.Component),A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(264);Object(B.a)(),i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"f",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"e",function(){return v}),n.d(t,"g",function(){return g}),n.d(t,"b",function(){return d});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=n(12),o=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Difficulty"}},{key:"getName",value:function(){return"SWRPG - Difficulty"}},{key:"getBackgroundColor",value:function(){return"#8800AA"}},{key:"getShape",value:function(){return"triangle"}},{key:"getSides",value:function(){return[{advantage:-1},{advantage:-1},{advantage:-1},{},{success:-1},{advantage:-1,success:-1},{advantage:-2},{success:-2}]}}]),t}(s.a),l=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Ability"}},{key:"getName",value:function(){return"SWRPG - Ability"}},{key:"getBackgroundColor",value:function(){return"#00D400"}},{key:"getShape",value:function(){return"triangle"}},{key:"getSides",value:function(){return[{success:1},{advantage:1},{advantage:1,success:1},{success:2},{advantage:1},{success:1},{advantage:2},{}]}}]),t}(s.a),f=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Proficiency"}},{key:"getName",value:function(){return"SWRPG - Proficiency"}},{key:"getBackgroundColor",value:function(){return"#FFEA01"}},{key:"getShape",value:function(){return"pentagon"}},{key:"getSides",value:function(){return[{advantage:2},{advantage:1},{advantage:2},{triumph:1},{success:1},{success:1,advantage:1},{success:1},{success:1,advantage:1},{success:2},{success:1,advantage:1},{success:2},{}]}}]),t}(s.a),h=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Challenge"}},{key:"getName",value:function(){return"SWRPG - Challenge"}},{key:"getBackgroundColor",value:function(){return"red"}},{key:"getShape",value:function(){return"pentagon"}},{key:"getSides",value:function(){return[{advantage:-2},{advantage:-1},{advantage:-2},{advantage:-1},{success:-1,advantage:-1},{success:-1},{success:-1,advantage:-1},{success:-1},{success:-2},{despair:1},{success:-2},{}]}}]),t}(s.a),v=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Force"}},{key:"getName",value:function(){return"SWRPG - Force"}},{key:"getShape",value:function(){return"pentagon"}},{key:"getBackgroundColor",value:function(){return"#EFEFEF"}},{key:"getSides",value:function(){return[{force:-1},{force:2},{force:-1},{force:2},{force:-1},{force:2},{force:-1},{force:1},{force:-1},{force:2},{force:-1},{force:-2}]}}]),t}(s.a),g=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Setback"}},{key:"getName",value:function(){return"SWRPG - Setback"}},{key:"getBackgroundColor",value:function(){return"black"}},{key:"getForegroundColor",value:function(){return"white"}},{key:"getSides",value:function(){return[{advantage:-1},{advantage:-1},{success:-1},{success:-1},{},{}]}}]),t}(s.a),d=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"SWRPG_Boost"}},{key:"getName",value:function(){return"SWRPG - Boost"}},{key:"getBackgroundColor",value:function(){return"#ABDEF7"}},{key:"getSides",value:function(){return[{advantage:1,success:1},{advantage:1},{advantage:2},{success:1},{},{}]}}]),t}(s.a)},79:function(e,t){},97:function(e,t,n){"use strict";var a=n(98),r=n(99),c=n(100),i=n(101),u=n(102),s=n(103),o=n(104),l=n(105),f=n(29),h=n(16);n.d(t,"DiceFactory",function(){return h.a});n(79);h.a.getInstance().RegisterDice(a.a),h.a.getInstance().RegisterDice(r.a),h.a.getInstance().RegisterDice(i.a),h.a.getInstance().RegisterDice(c.a),h.a.getInstance().RegisterDice(u.a),h.a.getInstance().RegisterDice(s.a),h.a.getInstance().RegisterDice(o.a),h.a.getInstance().RegisterDice(l.a),h.a.getInstance().RegisterDice(f.d),h.a.getInstance().RegisterDice(f.a),h.a.getInstance().RegisterDice(f.b),h.a.getInstance().RegisterDice(f.c),h.a.getInstance().RegisterDice(f.e),h.a.getInstance().RegisterDice(f.f),h.a.getInstance().RegisterDice(f.g)},98:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D2"}},{key:"getName",value:function(){return"Coin"}},{key:"getSides",value:function(){return[{value:0},{value:1}]}}]),t}(n(12).a)},99:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(4),r=n(5),c=n(7),i=n(6),u=n(8),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(){return"D3"}},{key:"getName",value:function(){return"Three Sided Die"}},{key:"getFaceCount",value:function(){return 3}}]),t}(n(12).b)}},[[130,1,2]]]);
//# sourceMappingURL=main.8b74e184.chunk.js.map