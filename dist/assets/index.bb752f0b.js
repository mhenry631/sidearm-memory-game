import{d as _,c as h,a as s,n as p,o as d,b as u,t as f,w as k,v as C,F as y,r as M,e as $,f as v,g as S,h as G}from"./vendor.3dfc2103.js";const ue={},w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}};w();const r="../assets/images/card-fronts/",j=[{type:"Basketball",img:`${r}basketball.jpg`},{type:"Bowling",img:`${r}bowling.jpg`},{type:"Crew",img:`${r}crew.jpg`},{type:"Football",img:`${r}football.jpg`},{type:"Golf",img:`${r}golf.jpg`},{type:"Hockey",img:`${r}hockey.jpg`},{type:"Rugby",img:`${r}rugby.jpg`},{type:"Soccer",img:`${r}soccer.jpg`},{type:"Softball",img:`${r}softball.jpg`},{type:"Swimming",img:`${r}swimming.jpg`},{type:"Tennis",img:`${r}tennis.jpg`},{type:"Track",img:`${r}track.jpg`}];var A="/assets/card-back.57abc2f7.jpg",g=(e,t)=>{const o=e.__vccOpts||e;for(const[a,i]of t)o[a]=i;return o};const B=_({name:"Card",props:{type:String,path:String,flipped:Boolean,matched:Boolean}}),F={class:"card__inner"},O=s("div",{class:"card__back"},[s("img",{class:"card__img",src:A,alt:"card back"})],-1),T={class:"card__front"},N=["src","alt"];function I(e,t,o,a,i,n){return d(),h("button",{class:p(["card",{"card--flipped":e.flipped,"card--matched":e.matched}]),"aria-label":"flip-card"},[s("div",F,[O,s("div",T,[s("img",{class:"card__img",src:e.path,alt:e.type},null,8,N)])])],2)}var D=g(B,[["render",I]]);const L=_({name:"GameStats",props:{minutes:Number,seconds:Number,oneMin:Boolean,moves:Number,matches:Number}}),E={class:"game-stats d-flex flex-col align-items-center flex-sm-row justify-content-sm-between"},P={class:"game-stats__stat"},R=s("span",{class:"game-stats__title"},"Time Elapsed:",-1),V=u("\xA0 "),W={class:"game-stats__val"},q={class:"game-stats__stat"},z=s("span",{class:"game-stats__title"},"Moves:",-1),H=u("\xA0 "),K={class:"game-stats__val"},U={class:"game-stats__stat"},Y=s("span",{class:"game-stats__title"},"Matches:",-1),J=u("\xA0 "),Q={class:"game-stats__val"};function X(e,t,o,a,i,n){return d(),h("div",E,[s("div",P,[R,V,s("span",W,[u(f(e.minutes)+" min",1),k(s("span",null,"s",512),[[C,!e.oneMin]]),u(", "+f(e.seconds)+" secs",1)])]),s("div",q,[z,H,s("span",K,f(e.moves),1)]),s("div",U,[Y,J,s("span",Q,f(e.matches),1)])])}var Z=g(L,[["render",X]]);function x(e){if(e.uid)return e.uid;const t=Math.random().toString(16).slice(2);return e.uid=e.type+"_"+t,e.uid}const ee=_({name:"GameBoard",components:{Card:D,GameStats:Z},data(){return{loading:!0,deck:[],gameStarted:!1,timeMins:0,timeSecs:0,moves:0,matches:0,flippedCards:[],finishGame:!1,timerInterval:0}},computed:{oneMinute(){return this.timeMins===1}},created(){this.buildDeck(),this.shuffle(),setTimeout(()=>{this.loading=!1},3250)},methods:{uid:x,buildDeck(){this.deck.splice(0),j.forEach(e=>{this.addToDeck(this.deck,e),this.addToDeck(this.deck,e)})},addToDeck(e,t){e.push({uid:null,type:t.type,img:new URL(t.img,ue.url).toString(),flipped:!1,matched:!1})},shuffle(){let e=this.deck,t,o;for(let a=e.length;a>0;a--)t=Math.floor(a*Math.random()),o=e[a-1],e[a-1]=e[t],e[t]=o},startGameClock(){this.updateGameClock(),this.timerInterval=setInterval(this.updateGameClock,1e3)},updateGameClock(){this.timeSecs===59?(this.timeSecs=0,this.timeMins++):this.timeSecs++},flip(e){let t=this.flippedCards;e.flipped||e.matched||t.length===2||(this.gameStarted||(this.startGameClock(),this.gameStarted=!0),e.flipped=!0,t.length<2&&t.push(e),t.length===2&&(this.checkForMatch(),this.addMove()))},checkForMatch(){let e=this.flippedCards;e[0].type===e[1].type?setTimeout(()=>{this.updateCards(e,"matched",!0),this.addMatch(),this.resetFlippedCards(),this.checkForCompletion()},800):setTimeout(()=>{this.updateCards(e,"flipped",!1),this.resetFlippedCards()},1e3)},updateCards(e,t,o){e.forEach(a=>t==="flipped"?a.flipped=o:a.matched=o)},resetFlippedCards(){this.flippedCards=[]},addMove(){this.moves++},addMatch(){this.matches++},checkForCompletion(){this.deck.filter(e=>e.matched===!1).length===0&&(this.finishGame=!0,clearInterval(this.timerInterval))},resetGame(){clearInterval(this.timerInterval),this.finishGame=!1,this.loading=!0,setTimeout(()=>{this.loading=!1},3250),this.timeMins=0,this.timeSecs=0,this.moves=0,this.matches=0,this.buildDeck(),this.shuffle()}}}),te={class:"board"},se={class:"loader"},ie=s("p",null,"You successfully completed the game!",-1),ae=s("p",null,"View your finishing time and total moves below",-1),ne=s("p",null,"Reset the game to try and beat your record",-1),oe=[ie,ae,ne],re={class:"btn-wrap text-center"};function le(e,t,o,a,i,n){const c=v("Card"),b=v("GameStats");return d(),h(y,null,[s("div",te,[(d(!0),h(y,null,M(e.deck,l=>(d(),S(c,{key:e.uid(l),type:l.type,path:l.img,flipped:l.flipped,matched:l.matched,onClick:fe=>e.flip(l)},null,8,["type","path","flipped","matched","onClick"]))),128)),s("div",{class:p(["loader-wrap d-flex justify-content-center align-items-center",{"loader-wrap--dissolve":!e.loading}])},[s("div",se,[s("div",{class:p(["loader__inner",{"loader__inner-animate":e.loading}])},null,2)])],2),s("div",{class:p(["finished d-flex flex-col justify-content-center align-items-center text-center",{"finished--fade-in":e.finishGame}])},oe,2)]),$(b,{minutes:e.timeMins,seconds:e.timeSecs,oneMin:e.oneMinute,moves:e.moves,matches:e.matches},null,8,["minutes","seconds","oneMin","moves","matches"]),s("div",re,[s("a",{class:"btn d-inline-block",href:"#",onClick:t[0]||(t[0]=(...l)=>e.resetGame&&e.resetGame(...l)),"aria-label":"Restart game"},"Restart")])],64)}var ce=g(ee,[["render",le]]);let m={Android:function(){return navigator.userAgent.match(/Android/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return m.Android()||m.iOS()||m.Opera()||m.Windows()}};const de=_({name:"App",components:{GameBoard:ce},data(){return{mobile:!1}},created(){m.any()&&(this.mobile=!0)}}),me=s("header",{class:"header text-center"},[s("h1",{class:"header__title"},"Memory Game")],-1);function pe(e,t,o,a,i,n){const c=v("GameBoard");return d(),h("div",{class:p(["container",{mobile:e.mobile}])},[me,$(c)],2)}var he=g(de,[["render",pe]]);G(he).mount("#app");