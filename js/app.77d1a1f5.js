(function(e){function t(t){for(var i,o,s=t[0],u=t[1],r=t[2],b=0,l=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);a&&a(t);while(l.length)l.shift()();return d.push.apply(d,r||[]),n()}function n(){for(var e,t=0;t<d.length;t++){for(var n=d[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(i=!1)}i&&(d.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},c={app:0},d=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/slotmachine/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var a=u;d.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"083e":function(e,t,n){"use strict";n("47cf")},1265:function(e,t,n){"use strict";n("bea1")},4185:function(e,t,n){"use strict";n("b8fa")},"47cf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function c(e,t,n,c,d,o){var s=Object(i["R"])("RecordBoard"),u=Object(i["R"])("el-aside"),r=Object(i["R"])("DiceBoard"),a=Object(i["R"])("el-header"),b=Object(i["R"])("MainBoard"),l=Object(i["R"])("el-main"),m=Object(i["R"])("StatisticsBoard"),h=Object(i["R"])("el-footer"),O=Object(i["R"])("el-container"),j=Object(i["R"])("ChipBoard");return Object(i["I"])(),Object(i["m"])("div",null,[Object(i["q"])(O,{class:"container"},{default:Object(i["gb"])((function(){return[Object(i["q"])(u,{class:"OrangeColor",width:"180px"},{default:Object(i["gb"])((function(){return[Object(i["q"])(s)]})),_:1}),Object(i["q"])(O,{class:"OrangeColor centerContainer"},{default:Object(i["gb"])((function(){return[Object(i["q"])(a,{height:"100px"},{default:Object(i["gb"])((function(){return[Object(i["q"])(r)]})),_:1}),Object(i["q"])(l,null,{default:Object(i["gb"])((function(){return[Object(i["q"])(b)]})),_:1}),Object(i["q"])(h,{height:"100px"},{default:Object(i["gb"])((function(){return[Object(i["q"])(m)]})),_:1})]})),_:1}),Object(i["q"])(u,{class:"OrangeColor",width:"180px"},{default:Object(i["gb"])((function(){return[Object(i["q"])(j)]})),_:1})]})),_:1})])}var d=function(e){return Object(i["L"])("data-v-42ad527a"),e=e(),Object(i["J"])(),e},o={class:"timeBorad"},s={class:"lastHistroy"},u=d((function(){return Object(i["n"])("div",{class:"headerText"},null,-1)}));function r(e,t,n,c,d,r){var a=Object(i["R"])("el-header"),b=Object(i["R"])("el-main"),l=Object(i["R"])("el-footer"),m=Object(i["R"])("el-container");return Object(i["I"])(),Object(i["k"])(m,null,{default:Object(i["gb"])((function(){return[Object(i["q"])(a,{height:"120px"},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",o,[Object(i["n"])("div",{class:Object(i["z"])(r.isShake)},Object(i["V"])(d.timer),3)])]})),_:1}),Object(i["q"])(b,null,{default:Object(i["gb"])((function(){return[Object(i["n"])("div",s,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(e.recordList,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{key:t},[Object(i["n"])("li",{class:Object(i["z"])(r.recordColor(e.type))},[Object(i["n"])("span",null,Object(i["V"])(e.text),1),Object(i["n"])("span",null,Object(i["V"])(e.sum),1),Object(i["n"])("span",null,Object(i["V"])(e.res),1)],2)])})),128))])]})),_:1}),Object(i["q"])(l,{height:"120px"},{default:Object(i["gb"])((function(){return[u]})),_:1})]})),_:1})}var a=n("5530"),b=(n("d3b7"),n("25f0"),n("5502")),l={name:"RecordBoard",props:{msg:String},data:function(){return{timer:"00",timecount:20,timerId:null}},watch:{isChip:function(e){e&&this.startCountDown()}},computed:Object(a["a"])(Object(a["a"])({},Object(b["c"])({isChip:"isChip",diceStatus:"diceStatus",recordList:"recordList"})),{},{recordColor:function(){return function(e){return 0==e?"liyellow":1==e?"lired":"liblue"}},isShake:function(){return{shake:this.timecount>=0&&this.timecount<9}}}),methods:Object(a["a"])(Object(a["a"])({},Object(b["b"])(["changeIsChip"])),{},{showtime:function(){this.timer=this.timecount<10?"0"+this.timecount:this.timecount.toString(),0==this.timecount&&(clearInterval(this.timerId),this.changeIsChip()),this.timecount--},startCountDown:function(){this.timecount=20,this.timerId=setInterval(this.showtime,1e3)}}),mounted:function(){this.timerId=setInterval(this.showtime,1e3)},unmounted:function(){clearInterval(this.timerId)}},m=(n("62f7"),n("d959")),h=n.n(m);const O=h()(l,[["render",r],["__scopeId","data-v-42ad527a"]]);var j=O,f=(n("7db0"),n("b0c0"),function(e){return Object(i["L"])("data-v-453eed32"),e=e(),Object(i["J"])(),e}),p={class:"main"},C={class:"grid-content small-btn"},g=f((function(){return Object(i["n"])("div",null,"SMALL",-1)})),v=f((function(){return Object(i["n"])("div",null,"1 WINS 1",-1)})),x=f((function(){return Object(i["n"])("div",null,"4 - 10",-1)})),S=f((function(){return Object(i["n"])("div",null,[Object(i["n"])("div",null,"围骰庄家通吃"),Object(i["n"])("div",null,"小"),Object(i["n"])("div",null,"1 赔 1")],-1)})),N={class:"grid-content"},k=f((function(){return Object(i["n"])("div",{class:"first-line-header"},"一赔八",-1)})),I={class:"leftDouble"},w=["onClick"],L={class:"grid-content"},y=f((function(){return Object(i["n"])("div",{class:"first-line-header"},"一赔一百五",-1)})),R={class:"leftThree"},_=["onClick"],T={class:"grid-content"},W=f((function(){return Object(i["n"])("div",{class:"first-line-header"},"一赔二十四",-1)})),q={class:"grid-content"},P=f((function(){return Object(i["n"])("div",{class:"first-line-header"},"一赔一百五",-1)})),D={class:"rightThree"},z=["onClick"],A={class:"grid-content"},B=f((function(){return Object(i["n"])("div",{class:"first-line-header"},"一赔八",-1)})),V={class:"rightDouble"},M=["onClick"],J={class:"grid-content big-btn"},E=f((function(){return Object(i["n"])("div",null,"BIG",-1)})),F=f((function(){return Object(i["n"])("div",null,"1 WINS 1",-1)})),G=f((function(){return Object(i["n"])("div",null,"11 - 17",-1)})),H=f((function(){return Object(i["n"])("div",null,[Object(i["n"])("div",null,"围骰庄家通吃"),Object(i["n"])("div",null,"大"),Object(i["n"])("div",null,"1 赔 1")],-1)})),K=["onClick"],Q={class:"sum-btn-name"},U={class:"sum-btn-oddsName"},X=f((function(){return Object(i["n"])("div",{class:"odds-text odds-text-left"},"一赔五",-1)})),Y=["onClick"],Z=f((function(){return Object(i["n"])("div",{class:"odds-text"},"一赔五",-1)})),$=["onClick"],ee=f((function(){return Object(i["n"])("div",null,"单骰1赔1",-1)})),te=f((function(){return Object(i["n"])("div",null,"双骰1赔2",-1)})),ne=f((function(){return Object(i["n"])("div",null,"三骰1赔3",-1)}));function ie(e,t,n,c,d,o){var s=Object(i["R"])("el-col"),u=Object(i["R"])("el-row");return Object(i["I"])(),Object(i["m"])("div",p,[Object(i["q"])(u,null,{default:Object(i["gb"])((function(){return[Object(i["q"])(s,{span:3,onClick:t[0]||(t[0]=function(e){return o.toChip("small")})},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",C,[g,v,x,S,Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return"small"==e.id})),winning:e.chipStatus.find((function(e){return"small"==e.id&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount("small")),1)],2)])]})),_:1}),Object(i["q"])(s,{span:5},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",N,[k,Object(i["n"])("div",I,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.firstLine.leftDouble,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"double-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(t.diceimg,(function(n,c){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])("bg-"+n),key:c},[Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],2)})),128))],8,w)})),128))])])]})),_:1}),Object(i["q"])(s,{span:3},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",L,[y,Object(i["n"])("div",R,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.firstLine.leftThree,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"three-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(t.diceimg,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])("bg-"+e),key:t},null,2)})),128)),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],8,_)})),128))])])]})),_:1}),Object(i["q"])(s,{span:2},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",T,[W,Object(i["n"])("div",{class:"allThree",onClick:t[1]||(t[1]=function(e){return o.toChip("allThree")})},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.firstLine.allThree.diceimg,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:"all-three-btn",key:t},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(e,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])("bg-"+e),key:t},null,2)})),128))])})),128)),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return"allThree"==e.id})),winning:e.chipStatus.find((function(e){return"allThree"==e.id&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount("allThree")),1)],2)])])]})),_:1}),Object(i["q"])(s,{span:3},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",q,[P,Object(i["n"])("div",D,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.firstLine.rightThree,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"three-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(t.diceimg,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])("bg-"+e),key:t},null,2)})),128)),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],8,z)})),128))])])]})),_:1}),Object(i["q"])(s,{span:5},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",A,[B,Object(i["n"])("div",V,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.firstLine.rightDouble,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"double-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(t.diceimg,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])("bg-"+e),key:t},null,2)})),128)),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],8,M)})),128))])])]})),_:1}),Object(i["q"])(s,{span:3,onClick:t[2]||(t[2]=function(e){return o.toChip("big")})},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",J,[E,F,G,H,Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return"big"==e.id})),winning:e.chipStatus.find((function(e){return"big"==e.id&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount("big")),1)],2)])]})),_:1})]})),_:1}),Object(i["q"])(u,null,{default:Object(i["gb"])((function(){return[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.secondLine,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"sum-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[Object(i["n"])("div",Q,Object(i["V"])(t.name),1),Object(i["n"])("div",U,Object(i["V"])(t.oddsName),1),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],8,K)})),128))]})),_:1}),Object(i["q"])(u,null,{default:Object(i["gb"])((function(){return[X,(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.thirdLine,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"mix-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(t.diceimg,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])("bg-"+e),key:t},null,2)})),128)),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],8,Y)})),128)),Z]})),_:1}),Object(i["q"])(u,null,{default:Object(i["gb"])((function(){return[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.fourLine,(function(t,n){return Object(i["I"])(),Object(i["m"])("div",{class:"single-btn",key:n,onClick:function(e){return o.toChip(t.code)}},[Object(i["n"])("div",null,Object(i["V"])(t.name),1),Object(i["n"])("div",{class:Object(i["z"])("bg-"+t.diceimg)},null,2),Object(i["n"])("span",{class:Object(i["z"])({chipping:e.chipStatus.find((function(e){return e.id==t.code})),winning:e.chipStatus.find((function(e){return e.id==t.code&&e.isWin}))})},[Object(i["n"])("span",null,Object(i["V"])(o.chipCount(t.code)),1)],2)],8,$)})),128))]})),_:1}),Object(i["q"])(u,null,{default:Object(i["gb"])((function(){return[ee,te,ne]})),_:1})])}var ce={firstLine:{small:{code:"small",name:"小",oddsName:"1赔1",oddsCode:1},big:{code:"big",name:"大",oddsName:"1赔1",oddsCode:1},leftDouble:[{code:"double1",name:"1 1",oddsName:"1赔8",oddsCode:8,diceimg:["dice1","dice1"]},{code:"double2",name:"2 2",oddsName:"1赔8",oddsCode:8,diceimg:["dice2","dice2"]},{code:"double3",name:"3 3",oddsName:"1赔8",oddsCode:8,diceimg:["dice3","dice3"]}],rightDouble:[{code:"double4",name:"4 4",oddsName:"1赔8",oddsCode:8,diceimg:["dice4","dice4"]},{code:"double5",name:"5 5",oddsName:"1赔8",oddsCode:8,diceimg:["dice5","dice5"]},{code:"double6",name:"6 6",oddsName:"1赔8",oddsCode:8,diceimg:["dice6","dice6"]}],leftThree:[{code:"three1",name:"1 1 1",oddsName:"1赔150",oddsCode:150,diceimg:["dice1","dice1","dice1"]},{code:"three2",name:"2 2 2",oddsName:"1赔150",oddsCode:150,diceimg:["dice2","dice2","dice2"]},{code:"three3",name:"3 3 3",oddsName:"1赔150",oddsCode:150,diceimg:["dice3","dice3","dice3"]}],rightThree:[{code:"three4",name:"4 4 4",oddsName:"1赔150",oddsCode:150,diceimg:["dice4","dice4","dice4"]},{code:"three5",name:"5 5 5",oddsName:"1赔150",oddsCode:150,diceimg:["dice5","dice5","dice5"]},{code:"three6",name:"6 6 6",oddsName:"1赔150",oddsCode:150,diceimg:["dice6","dice6","dice6"]}],allThree:{code:"allThree",name:"全围",oddsName:"1赔150",oddsCode:24,diceimg:[["dice1","dice1","dice1"],["dice2","dice2","dice2"],["dice3","dice3","dice3"],["dice4","dice4","dice4"],["dice5","dice5","dice5"],["dice6","dice6","dice6"]]}},secondLine:[{code:"sum4",name:"4",oddsName:"1赔50",oddsCode:50},{code:"sum5",name:"5",oddsName:"1赔18",oddsCode:18},{code:"sum6",name:"6",oddsName:"1赔14",oddsCode:14},{code:"sum7",name:"7",oddsName:"1赔12",oddsCode:12},{code:"sum8",name:"8",oddsName:"1赔8",oddsCode:8},{code:"sum9",name:"9",oddsName:"1赔6",oddsCode:6},{code:"sum10",name:"10",oddsName:"1赔6",oddsCode:6},{code:"sum11",name:"11",oddsName:"1赔6",oddsCode:6},{code:"sum12",name:"12",oddsName:"1赔6",oddsCode:6},{code:"sum13",name:"13",oddsName:"1赔8",oddsCode:8},{code:"sum14",name:"14",oddsName:"1赔12",oddsCode:12},{code:"sum15",name:"15",oddsName:"1赔14",oddsCode:14},{code:"sum16",name:"16",oddsName:"1赔18",oddsCode:18},{code:"sum17",name:"17",oddsName:"1赔50",oddsCode:50}],thirdLine:[{code:"mix12",name:"1 2",oddsName:"1赔5",oddsCode:5,diceNum:[1,2],diceimg:["dice1","dice2"]},{code:"mix13",name:"1 3",oddsName:"1赔5",oddsCode:5,diceNum:[1,3],diceimg:["dice1","dice3"]},{code:"mix14",name:"1 4",oddsName:"1赔5",oddsCode:5,diceNum:[1,4],diceimg:["dice1","dice4"]},{code:"mix15",name:"1 5",oddsName:"1赔5",oddsCode:5,diceNum:[1,5],diceimg:["dice1","dice5"]},{code:"mix16",name:"1 6",oddsName:"1赔5",oddsCode:5,diceNum:[1,6],diceimg:["dice1","dice6"]},{code:"mix23",name:"2 3",oddsName:"1赔5",oddsCode:5,diceNum:[2,3],diceimg:["dice2","dice3"]},{code:"mix24",name:"2 4",oddsName:"1赔5",oddsCode:5,diceNum:[2,4],diceimg:["dice2","dice4"]},{code:"mix25",name:"2 5",oddsName:"1赔5",oddsCode:5,diceNum:[2,5],diceimg:["dice2","dice5"]},{code:"mix26",name:"2 6",oddsName:"1赔5",oddsCode:5,diceNum:[2,6],diceimg:["dice2","dice6"]},{code:"mix34",name:"3 4",oddsName:"1赔5",oddsCode:5,diceNum:[3,4],diceimg:["dice3","dice4"]},{code:"mix35",name:"3 5",oddsName:"1赔5",oddsCode:5,diceNum:[3,5],diceimg:["dice3","dice5"]},{code:"mix36",name:"3 6",oddsName:"1赔5",oddsCode:5,diceNum:[3,6],diceimg:["dice3","dice6"]},{code:"mix45",name:"4 5",oddsName:"1赔5",oddsCode:5,diceNum:[4,5],diceimg:["dice4","dice5"]},{code:"mix46",name:"4 6",oddsName:"1赔5",oddsCode:5,diceNum:[4,6],diceimg:["dice4","dice6"]},{code:"mix56",name:"5 6",oddsName:"1赔5",oddsCode:5,diceNum:[5,6],diceimg:["dice5","dice6"]}],fourLine:[{code:"single1",name:"一",oddsName:"1赔2",oddsCode:2,diceimg:"dice1"},{code:"single2",name:"二",oddsName:"1赔2",oddsCode:2,diceimg:"dice2"},{code:"single3",name:"三",oddsName:"1赔2",oddsCode:2,diceimg:"dice3"},{code:"single4",name:"四",oddsName:"1赔2",oddsCode:2,diceimg:"dice4"},{code:"single5",name:"五",oddsName:"1赔2",oddsCode:2,diceimg:"dice5"},{code:"single6",name:"六",oddsName:"1赔2",oddsCode:2,diceimg:"dice6"}]},de={small:{code:"small",oddsCode:1},big:{code:"big",oddsCode:1},double1:{code:"double1",oddsCode:8},double2:{code:"double2",oddsCode:8},double3:{code:"double3",oddsCode:8},double4:{code:"double4",oddsCode:8},double5:{code:"double5",oddsCode:8},double6:{code:"double6",oddsCode:8},three1:{code:"three1",oddsCode:150},three2:{code:"three2",oddsCode:150},three3:{code:"three3",oddsCode:150},three4:{code:"three4",oddsCode:150},three5:{code:"three5",oddsCode:150},three6:{code:"three6",oddsCode:150},allThree:{code:"allThree",oddsCode:24},sum4:{code:"sum4",oddsCode:50},sum5:{code:"sum5",oddsCode:18},sum6:{code:"sum6",oddsCode:14},sum7:{code:"sum7",oddsCode:12},sum8:{code:"sum8",oddsCode:8},sum9:{code:"sum9",oddsCode:6},sum10:{code:"sum10",oddsCode:6},sum11:{code:"sum11",oddsCode:6},sum12:{code:"sum12",oddsCode:6},sum13:{code:"sum13",oddsCode:8},sum14:{code:"sum14",oddsCode:12},sum15:{code:"sum15",oddsCode:14},sum16:{code:"sum16",oddsCode:18},sum17:{code:"sum17",oddsCode:50},mix12:{code:"mix12",oddsCode:5},mix13:{code:"mix13",oddsCode:5},mix14:{code:"mix14",oddsCode:5},mix15:{code:"mix15",oddsCode:5},mix16:{code:"mix16",oddsCode:5},mix23:{code:"mix23",oddsCode:5},mix24:{code:"mix24",oddsCode:5},mix25:{code:"mix25",oddsCode:5},mix26:{code:"mix26",oddsCode:5},mix34:{code:"mix34",oddsCode:5},mix35:{code:"mix35",oddsCode:5},mix36:{code:"mix36",oddsCode:5},mix45:{code:"mix45",oddsCode:5},mix46:{code:"mix46",oddsCode:5},mix56:{code:"mix56",oddsCode:5},single1:{code:"single1",oddsCode:1},single2:{code:"single2",oddsCode:1},single3:{code:"single3",oddsCode:1},single4:{code:"single4",oddsCode:1},single5:{code:"single5",oddsCode:1},single6:{code:"single6",oddsCode:1}},oe={name:"MainBoard",props:{msg:String},data:function(){return{firstLine:ce.firstLine,secondLine:ce.secondLine,thirdLine:ce.thirdLine,fourLine:ce.fourLine}},watch:{},computed:Object(a["a"])(Object(a["a"])({},Object(b["c"])({chipStatus:"chipStatus",isChip:"isChip",pokerChips:"pokerChips",chooseChip:"chooseChip"})),{},{chipCount:function(){return function(e){var t=this.chipStatus.find((function(t){return t.id==e}));return t&&t.chipNum}}}),methods:Object(a["a"])(Object(a["a"])({},Object(b["b"])(["pushDiceTochipStatus","changeIsChip","pokerChipsChange","increaseChipNum"])),{},{sleepwait:function(e){return new Promise((function(t){setTimeout(t,e)}))},toChip:function(e){if(this.isChip&&this.pokerChips>this.chooseChip){if(-1!==e.indexOf("single")){var t=this.chipStatus.find((function(e){return-1!==e.id.indexOf("single")}));if(t&&t.id!==e)return}this.pokerChipsChange(-this.chooseChip);var n=this.chipStatus.find((function(t){return t.id==e}));n?this.increaseChipNum(e):this.pushDiceTochipStatus({id:e,chipNum:this.chooseChip,isWin:!1})}}})};n("083e");const se=h()(oe,[["render",ie],["__scopeId","data-v-453eed32"]]);var ue=se,re=function(e){return Object(i["L"])("data-v-3490e731"),e=e(),Object(i["J"])(),e},ae={class:"PointBorad"},be=re((function(){return Object(i["n"])("div",null,"积分",-1)})),le={class:"betIn"},me={class:"moneyBoard"},he={class:"moneyBoard-item"},Oe=re((function(){return Object(i["n"])("div",null,"累计投入",-1)})),je=["onClick"],fe={class:"chipBoard"},pe=["onClick"],Ce=re((function(){return Object(i["n"])("div",{class:"headerText"},null,-1)}));function ge(e,t,n,c,d,o){var s=Object(i["R"])("el-header"),u=Object(i["R"])("el-main"),r=Object(i["R"])("el-footer"),a=Object(i["R"])("el-container");return Object(i["I"])(),Object(i["k"])(a,null,{default:Object(i["gb"])((function(){return[Object(i["q"])(s,{height:"120px"},{default:Object(i["gb"])((function(){return[Object(i["n"])("div",ae,[be,Object(i["n"])("div",null,Object(i["V"])(e.pokerChips),1)])]})),_:1}),Object(i["q"])(u,null,{default:Object(i["gb"])((function(){return[Object(i["n"])("div",le,[Object(i["n"])("div",me,[Object(i["n"])("div",he,[Oe,Object(i["n"])("div",null,Object(i["V"])(d.allput),1),Object(i["n"])("div",null,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.allputList,(function(e,t){return Object(i["I"])(),Object(i["m"])("button",{onClick:function(t){return o.spendMoney(e)},key:t},Object(i["V"])(e),9,je)})),128))])])]),Object(i["n"])("div",fe,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(d.chipBtn,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:Object(i["z"])(["circle"+t,o.chooseChipClass(e)]),key:t,onClick:function(t){return o.chooseChipFn(e)}},[Object(i["n"])("span",null,Object(i["V"])(e),1)],10,pe)})),128))])])]})),_:1}),Object(i["q"])(r,{height:"120px"},{default:Object(i["gb"])((function(){return[Ce]})),_:1})]})),_:1})}var ve=n("ade3"),xe={name:"ChipBoard",props:{msg:String},data:function(){return{allput:0,allputList:[100,500,1e3],chipBtn:[10,50,100]}},computed:Object(a["a"])(Object(a["a"])({},Object(b["c"])({pokerChips:"pokerChips",chooseChip:"chooseChip"})),{},{chooseChipClass:function(){return function(e){return Object(ve["a"])({},"active",this.chooseChip==e)}}}),methods:Object(a["a"])(Object(a["a"])({},Object(b["b"])(["pokerChipsChange","chooseChipStatus"])),{},{spendMoney:function(e){this.pokerChips>=1e3||(this.pokerChipsChange(e),this.allput+=e)},chooseChipFn:function(e){this.chooseChipStatus(e)}})};n("ed85");const Se=h()(xe,[["render",ge],["__scopeId","data-v-3490e731"]]);var Ne=Se,ke=function(e){return Object(i["L"])("data-v-771bd3da"),e=e(),Object(i["J"])(),e},Ie={class:"statisticsMain"},we=ke((function(){return Object(i["n"])("div",null,"各点数累计出现次数",-1)}));function Le(e,t,n,c,d,o){var s=Object(i["R"])("el-main"),u=Object(i["R"])("el-container");return Object(i["I"])(),Object(i["k"])(u,null,{default:Object(i["gb"])((function(){return[Object(i["q"])(s,null,{default:Object(i["gb"])((function(){return[Object(i["n"])("div",Ie,[we,Object(i["n"])("div",null,[(Object(i["I"])(!0),Object(i["m"])(i["b"],null,Object(i["P"])(e.diceStatistics,(function(e,t){return Object(i["I"])(),Object(i["m"])("div",{class:"diceItem",key:t},[Object(i["n"])("div",{class:Object(i["z"])("bg-"+t)},null,2),Object(i["n"])("div",null,Object(i["V"])(e),1)])})),128))])])]})),_:1})]})),_:1})}var ye={name:"StatisticsBoard",props:{msg:String},computed:Object(a["a"])({},Object(b["c"])({diceStatistics:"diceStatistics"}))};n("1265");const Re=h()(ye,[["render",Le],["__scopeId","data-v-771bd3da"]]);var _e=Re,Te=function(e){return Object(i["L"])("data-v-11f13199"),e=e(),Object(i["J"])(),e},We=Te((function(){return Object(i["n"])("div",{class:"gameRule"},[Object(i["n"])("div",null,"游戏规则"),Object(i["n"])("div",null," 1.选择投入积分，当积分为0的时候无法下注，当积分高于1000时无法继续投入 "),Object(i["n"])("div",null,"2.选择每注的注码，默认为10积分"),Object(i["n"])("div",null,"3.当处于倒计时时，可以选择对应区域下注，其他时间无法下注")],-1)})),qe={class:"dice-main"},Pe=Te((function(){return Object(i["n"])("div",{class:"headerText"},null,-1)}));function De(e,t,n,c,d,o){var s=Object(i["R"])("el-container");return Object(i["I"])(),Object(i["k"])(s,null,{default:Object(i["gb"])((function(){return[We,Object(i["n"])("div",qe,[Object(i["n"])("div",{class:Object(i["z"])(["diceCard",o.diceResActive1])},null,2),Object(i["n"])("div",{class:Object(i["z"])(["diceCard",o.diceResActive2])},null,2),Object(i["n"])("div",{class:Object(i["z"])(["diceCard",o.diceResActive3])},null,2)]),Pe]})),_:1})}var ze=n("2909"),Ae=n("3835"),Be=n("1da1"),Ve=(n("159b"),n("6062"),n("3ca3"),n("ddb0"),n("96cf"),{name:"DiceBoard",props:{msg:String},data:function(){return{diceAnimation:[!1,!1,!1]}},mounted:function(){},watch:{isChip:function(e){var t=this;return Object(Be["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=3;break}return n.next=3,t.rollingDice();case 3:case"end":return n.stop()}}),n)})))()}},computed:Object(a["a"])(Object(a["a"])({},Object(b["c"])({diceStatus:"diceStatus",isChip:"isChip",chipStatus:"chipStatus",winningChips:"winningChips",diceStatistics:"diceStatistics"})),{},{diceResActive1:function(){var e;return[(e={},Object(ve["a"])(e,"dicerandom",this.diceAnimation[0]),Object(ve["a"])(e,"bg-dice"+this.diceStatus[0],!this.diceAnimation[0]),e)]},diceResActive2:function(){var e;return[(e={},Object(ve["a"])(e,"dicerandom",this.diceAnimation[1]),Object(ve["a"])(e,"bg-dice"+this.diceStatus[1],!this.diceAnimation[1]),e)]},diceResActive3:function(){var e;return[(e={},Object(ve["a"])(e,"dicerandom",this.diceAnimation[2]),Object(ve["a"])(e,"bg-dice"+this.diceStatus[2],!this.diceAnimation[2]),e)]}}),methods:Object(a["a"])(Object(a["a"])({},Object(b["b"])(["changeIsChip","changeDiceStatus","addRecordToList","clearChipStatus","pushWinningChipsToList","changeChipPoint","clearWinningChips","pokerChipsChange","increaseDiceStatistics"])),{},{getRandomDice:function(){return 1+Math.round(5*Math.random())},sleepwait:function(e){return new Promise((function(t){setTimeout(t,e)}))},opneCup:function(){var e=this;return Object(Be["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sleepwait(1e3).then((function(){e.diceAnimation[0]=!1,e.changeDiceStatus({index:0,value:e.getRandomDice()})}));case 2:return t.next=4,e.sleepwait(1e3).then((function(){e.diceAnimation[1]=!1,e.changeDiceStatus({index:1,value:e.getRandomDice()})}));case 4:return t.next=6,e.sleepwait(1e3).then((function(){e.diceAnimation[2]=!1,e.changeDiceStatus({index:2,value:e.getRandomDice()})}));case 6:return e.addRecordToList(e.getDiceRecord(e.diceStatus)),t.next=9,e.sleepwait(1e3).then((function(){e.countWinningChip(),e.computeWinningAmount()}));case 9:return t.next=11,e.sleepwait(3e3).then((function(){e.changeIsChip(),e.clearChipStatus(),e.clearWinningChips()}));case 11:case"end":return t.stop()}}),t)})))()},rollingDice:function(){var e=this;return Object(Be["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sleepwait(1e3).then((function(){e.diceAnimation[0]=!0}));case 2:return t.next=4,e.sleepwait(200).then((function(){e.diceAnimation[1]=!0}));case 4:return t.next=6,e.sleepwait(400).then((function(){e.diceAnimation[2]=!0}));case 6:return t.next=8,e.sleepwait(2e3).then((function(){e.opneCup()}));case 8:case"end":return t.stop()}}),t)})))()},getDiceRecord:function(e){var t="",n=0,i=!0,c={};return e.forEach((function(c){t+=c,n+=parseInt(c),c!==e[0]&&(i=!1)})),c.text=t,c.sum=n,i?(c.res="围骰",c.type=2):n>=4&&n<=10?(c.res="小",c.type=0):n>=11&&n<=17&&(c.res="大",c.type=1),c},countWinningChip:function(){var e=this;this.diceStatus.forEach((function(t){e.increaseDiceStatistics("dice"+t)}));var t=Object(Ae["a"])(this.diceStatus,3),n=t[0],i=t[1],c=t[2];if(n!=i||n!=c){n+i+c<=10?this.pushWinningChipsToList(["small"]):this.pushWinningChipsToList(["big"]),n===i||n===c?this.pushWinningChipsToList(["double"+n]):i===c&&this.pushWinningChipsToList(["double"+i]);var d=n+i+c;this.pushWinningChipsToList(["sum"+d]),ce.thirdLine.forEach((function(t){n!==i&&-1!=t.diceNum.indexOf(n)&&-1!=t.diceNum.indexOf(i)?n<i?e.pushWinningChipsToList(["mix"+n+i]):e.pushWinningChipsToList(["mix"+i+n]):n!==c&&-1!=t.diceNum.indexOf(n)&&-1!=t.diceNum.indexOf(c)?n<c?e.pushWinningChipsToList(["mix"+n+c]):e.pushWinningChipsToList(["mix"+c+n]):i!==c&&-1!=t.diceNum.indexOf(i)&&-1!=t.diceNum.indexOf(c)&&(i<c?e.pushWinningChipsToList(["mix"+i+c]):e.pushWinningChipsToList(["mix"+c+i]))}));var o=new Set([n,i,c]);Object(ze["a"])(o).forEach((function(t){return e.pushWinningChipsToList(["single"+t])}))}else this.pushWinningChipsToList(["allThree","three"+n,"single"+n])},computeWinningAmount:function(){var e=this,t=0;this.winningChips.forEach((function(n){var i=e.chipStatus.find((function(e){return e.id===n}));if(i){var c=de[n].oddsCode;if(-1!==n.indexOf("single")){var d=0;e.diceStatus.forEach((function(e){n[6]===e&&d++})),c*=d}e.changeChipPoint({id:n,oddsCode:c}),t+=i.chipNum}})),this.pokerChipsChange(t)}})});n("4185");const Me=h()(Ve,[["render",De],["__scopeId","data-v-11f13199"]]);var Je=Me,Ee={components:{MainBoard:ue,RecordBoard:j,ChipBoard:Ne,StatisticsBoard:_e,DiceBoard:Je},data:function(){}};n("aa0a");const Fe=h()(Ee,[["render",c],["__scopeId","data-v-0b0d4618"]]);var Ge=Fe,He=n("53ca"),Ke=(n("e9c4"),!1),Qe=Object(b["a"])({strict:Ke,state:function(){return{diceStatus:["1","1","1"],recordList:[],chipStatus:[],winningChips:[],isChip:!0,winningAmount:0,pokerChips:0,chooseChip:10,diceStatistics:{dice1:0,dice2:0,dice3:0,dice4:0,dice5:0,dice6:0}}},mutations:{changeDiceStatus:function(e,t){"object"===Object(He["a"])(t)&&"{}"!=JSON.stringify(t)&&(e.diceStatus[t.index]=t.value)},addRecordToList:function(e,t){"object"===Object(He["a"])(t)&&"{}"!=JSON.stringify(t)&&(e.recordList.length>=20&&e.recordList.pop(),e.recordList.unshift(t))},clearChipStatus:function(e){e.chipStatus=[]},increaseChipNum:function(e,t){var n=e.chipStatus.find((function(e){return e.id==t}));n.chipNum+=e.chooseChip},changeChipPoint:function(e,t){var n=e.chipStatus.find((function(e){return e.id==t.id}));n.chipNum+=n.chipNum*t.oddsCode,n.isWin=!0},pushDiceTochipStatus:function(e,t){e.chipStatus.push(t)},pushWinningChipsToList:function(e,t){e.winningChips.push.apply(e.winningChips,t)},clearWinningChips:function(e){e.winningChips=[]},changeIsChip:function(e){e.isChip=!e.isChip},pokerChipsChange:function(e,t){e.pokerChips+=t},chooseChipStatus:function(e,t){e.chooseChip=t},increaseDiceStatistics:function(e,t){e.diceStatistics[t]++}}}),Ue=n("7864"),Xe=(n("c69f"),n("3ef0")),Ye=n.n(Xe),Ze=function(e){e.use(Ue["a"],{locale:Ye.a})},$e=Object(i["j"])(Ge);Ze($e),$e.use(Qe),$e.mount("#app")},"5bf9":function(e,t,n){},"62f7":function(e,t,n){"use strict";n("b6f8")},"87bf":function(e,t,n){},aa0a:function(e,t,n){"use strict";n("87bf")},b6f8:function(e,t,n){},b8fa:function(e,t,n){},bea1:function(e,t,n){},c69f:function(e,t,n){},ed85:function(e,t,n){"use strict";n("5bf9")}});
//# sourceMappingURL=app.77d1a1f5.js.map